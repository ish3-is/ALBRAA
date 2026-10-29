export default function Monogram({ className = '', decorative = false }: { className?: string; decorative?: boolean }) {
  return <svg className={className} viewBox="0 0 320 320" fill="none" aria-hidden={decorative || undefined} role={decorative ? undefined : 'img'} aria-label={decorative ? undefined : 'BA'}>
    <path className="mark-path" d="M64 256V64H159C209 64 209 151 159 151H101M101 151H164C225 151 225 256 164 256H64" stroke="currentColor" strokeWidth="17" strokeLinejoin="miter" />
    <path className="mark-path" d="M181 256L242 64L300 256M204 188H278" stroke="currentColor" strokeWidth="17" strokeLinejoin="miter" />
    <path d="M32 96V32H96M256 32H316V96M316 256V300H256M96 300H32V256" stroke="currentColor" strokeWidth="1" opacity=".35" />
  </svg>;
}
