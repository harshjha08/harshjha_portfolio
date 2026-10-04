import { activities, documentation, cdpImage } from '../data/Impact'
import Reveal from './Reveal'
export function ImpactStrip() {
  return (
    <ol className="impact-strip" aria-label="Activities">
      {activities.map((a, i) => { const src = cdpImage(a.img); return (
        <li key={a.id}>
          <div className="impact-strip-img">{src ? <img src={src} alt={`${a.name}, ${a.place}`} loading="lazy" /> : <span>{String(i + 1).padStart(2, '0')}</span>}</div>
          <h3>{a.name}</h3><p>{[a.date, a.place].filter(Boolean).join(' · ')}</p>
        </li>) })}
    </ol>
  )
}
export function ImpactDoList() {
  const items = [...activities, { id: 'docs', ...documentation, place: '', date: '', img: 'cdp-geotag' }]
  return (
    <ol className="impact-do">
      {items.map((a, i) => { const src = cdpImage(a.img); return (
        <Reveal as="li" key={a.id}>
          <span className="impact-do-n">{String(i + 1).padStart(2, '0')}</span>
          <div><h3>{a.name}</h3><p>{a.text}</p>{(a.date || a.place) && <small>{[a.date, a.place].filter(Boolean).join(' · ')}</small>}</div>
          {src && <img src={src} alt="" loading="lazy" />}
        </Reveal>) })}
    </ol>
  )
}