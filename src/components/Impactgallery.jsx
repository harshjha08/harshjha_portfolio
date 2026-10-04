import { useEffect, useRef, useState } from 'react'
import { gallery, cdpImage } from '../data/Impact'
const items = gallery.map((g) => ({ ...g, src: cdpImage(g.img) })).filter((g) => g.src)
export default function ImpactGallery() {
  const [i, setI] = useState(null)
  const opener = useRef(); const closeBtn = useRef(); const n = items.length
  const close = () => { setI(null); opener.current?.focus() }
  useEffect(() => {
    if (i === null) return
    const k = (e) => { if (e.key === 'Escape') close(); if (e.key === 'ArrowRight') setI((x) => (x + 1) % n); if (e.key === 'ArrowLeft') setI((x) => (x - 1 + n) % n) }
    document.addEventListener('keydown', k); document.body.style.overflow = 'hidden'; closeBtn.current?.focus()
    return () => { document.removeEventListener('keydown', k); document.body.style.overflow = '' }
  }, [i, n])
  if (!n) return <p className="impact-note">Photographs from the project will appear here once they are added to <code>src/assets/images/community-impact</code>.</p>
  const cur = i === null ? null : items[i]
  return (<>
    <ul className="impact-gallery">{items.map((g, k) => (
      <li key={g.img} className={`g-${g.size}`}><button onClick={(e) => { opener.current = e.currentTarget; setI(k) }} aria-label={`Open photo: ${g.caption}`}><img src={g.src} alt={g.caption} loading="lazy" /></button></li>))}</ul>
    {cur && <div className="impact-lightbox" role="dialog" aria-modal="true" aria-label="Photo viewer" onClick={close}>
      <figure onClick={(e) => e.stopPropagation()}><img src={cur.src} alt={cur.caption} /><figcaption><b>{cur.caption}</b>{[cur.activity, cur.place].filter(Boolean).join(' · ')}</figcaption></figure>
      <button ref={closeBtn} className="lb-close" onClick={close} aria-label="Close">✕</button>
      {n > 1 && <><button className="lb-prev" onClick={(e) => { e.stopPropagation(); setI((i - 1 + n) % n) }} aria-label="Previous photo">‹</button><button className="lb-next" onClick={(e) => { e.stopPropagation(); setI((i + 1) % n) }} aria-label="Next photo">›</button></>}
    </div>}
  </>)
}