"""Conservative document preparation. Originals remain untouched."""
from pathlib import Path
import cv2
import numpy as np
from fontTools.ttLib import TTFont

root = Path(__file__).resolve().parents[1]
dest = root / 'public/certificates'
(dest / 'thumbs').mkdir(exist_ok=True)

# Corners are on the paper, outside all printed content and authenticity marks.
# No content synthesis, retouching, signature changes, or contrast manipulation.
corners = {
    'intensive-english': [(94, 282), (608, 294), (632, 1035), (74, 1046)],
    'general-english': [(71, 231), (616, 239), (649, 1043), (36, 1045)],
    'robotics': [(57, 377), (667, 401), (708, 845), (0, 822)],
}
for file in (dest / 'originals').glob('*.jpg'):
    image = cv2.imdecode(np.fromfile(file, dtype=np.uint8), cv2.IMREAD_COLOR)
    if file.stem in corners:
        points = np.float32(corners[file.stem])
        width = int(max(np.linalg.norm(points[1]-points[0]), np.linalg.norm(points[2]-points[3])))
        height = int(max(np.linalg.norm(points[3]-points[0]), np.linalg.norm(points[2]-points[1])))
        target = np.float32([[0,0],[width-1,0],[width-1,height-1],[0,height-1]])
        image = cv2.warpPerspective(image, cv2.getPerspectiveTransform(points,target), (width,height))
    cv2.imwrite(str(dest / 'previews' / f'{file.stem}.webp'), image, [cv2.IMWRITE_WEBP_QUALITY, 94])
    scale = min(1, 720 / max(image.shape[:2]))
    thumb = cv2.resize(image, None, fx=scale, fy=scale, interpolation=cv2.INTER_AREA)
    cv2.imwrite(str(dest / 'thumbs' / f'{file.stem}.webp'), thumb, [cv2.IMWRITE_WEBP_QUALITY, 84])

lines = ['# Supplied font metadata / بيانات الخطوط', '', 'Metadata is evidence, not a redistribution license. Confirm web embedding and redistribution rights with the font rights holder before public publishing.', '']
for file in (root / 'public/fonts').glob('*.otf'):
    font = TTFont(file)
    lines += [f'## {file.name}']
    for id in [0,1,2,8,9,13,14]:
        values = {n.toUnicode() for n in font['name'].names if n.nameID == id}
        if values: lines += [f'- Name ID {id}: ' + ' | '.join(values)]
(root / 'brand-assets/brand-guidelines/FONT-LICENSE.md').write_text('\n'.join(lines), encoding='utf-8')
print('Five document previews and thumbnails prepared; font metadata recorded.')
