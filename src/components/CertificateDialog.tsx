import { useEffect, useRef, useState } from 'react';
import { ArrowLeft, ArrowRight, X, ZoomIn, ZoomOut, RotateCcw, ExternalLink } from 'lucide-react';
import { certificates } from '../content/certificates';
import { copy, type Language } from '../content/copy';
import { asset } from '../config/profile';

export default function CertificateDialog({ index, lang, onClose, onChange }: { index: number; lang: Language; onClose: () => void; onChange: (i: number) => void }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const [zoom, setZoom] = useState(1);
  const [closing, setClosing] = useState(false);
  const c = certificates[index]; const t = copy[lang];
  const close = () => setClosing(true);
  useEffect(() => {
    const el = dialog.current; const active = document.activeElement as HTMLElement | null;
    el?.showModal(); document.body.style.overflow = 'hidden';
    return () => { el?.close(); document.body.style.overflow = ''; active?.focus(); };
  }, []);
  useEffect(() => { setZoom(1); dialog.current?.querySelector('.document-viewport')?.scrollTo(0, 0); }, [index]);
  useEffect(() => { if (!closing) return; const timer = setTimeout(onClose, matchMedia('(prefers-reduced-motion: reduce)').matches ? 0 : 150); return () => clearTimeout(timer); }, [closing, onClose]);
  const move = (delta: number) => onChange((index + delta + certificates.length) % certificates.length);
  return <dialog ref={dialog} className={`certificate-dialog t-modal ${closing ? 'is-closing' : 'is-open'}`} aria-labelledby="certificate-title" onCancel={e => { e.preventDefault(); close(); }} onClick={e => { if (e.target === e.currentTarget) close(); }} onKeyDown={e => {
    if (e.key === 'Tab') {
      const focusable = [...(dialog.current?.querySelectorAll<HTMLElement>('button:not(:disabled), a[href], [tabindex="0"]') || [])];
      const first = focusable[0], last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last?.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first?.focus(); }
    }
    if (e.key === 'ArrowRight') { e.preventDefault(); move(1); }
    if (e.key === 'ArrowLeft') { e.preventDefault(); move(-1); }
  }}>
    <div className="dialog-shell">
      <div className="dialog-top"><p>{c.kind[lang]} <span dir="ltr">{index + 1} / {certificates.length}</span></p><button className="icon-button" onClick={close} aria-label={t.close}><X /></button></div>
      <div className="document-viewport" tabIndex={0} aria-label={c.title[lang]}><div className="document-canvas" style={{ width: `${zoom * 100}%`, height: `${zoom * 100}%` }}><img src={asset(`certificates/previews/${c.id}.webp`)} alt={c.title[lang]} /></div></div>
      <div className="document-tools"><div className="flex gap-1"><button className="icon-button" aria-label={t.zoomOut} disabled={zoom <= 1} onClick={() => setZoom(z => Math.max(1, z - .25))}><ZoomOut /></button><button className="icon-button" aria-label={t.reset} onClick={() => setZoom(1)}><RotateCcw /></button><button className="icon-button" aria-label={t.zoomIn} disabled={zoom >= 3} onClick={() => setZoom(z => Math.min(3, z + .25))}><ZoomIn /></button><output dir="ltr">{Math.round(zoom * 100)}%</output></div><div className="flex gap-1" dir="ltr"><button className="icon-button" onClick={() => move(-1)} aria-label={t.previous}><ArrowLeft /></button><button className="icon-button" onClick={() => move(1)} aria-label={t.next}><ArrowRight /></button></div></div>
      <div className="dialog-caption" aria-live="polite"><h2 id="certificate-title">{c.title[lang]}</h2><p>{c.issuer[lang]} · {c.date[lang]}</p><p>{c.details[lang]}</p><a href={asset(`certificates/originals/${c.id}.jpg`)} target="_blank" rel="noreferrer">{t.original}<ExternalLink size={16} /></a></div>
    </div>
  </dialog>;
}
