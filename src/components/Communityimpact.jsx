import { Link } from 'react-router-dom'
import '../styles/community-impact.css'
import Reveal from './Reveal'
import { cdpImage } from '../data/Impact'
export default function CommunityImpact() {
  const img = cdpImage('cdp-hero')
  return (
    <section className="impact-teaser" aria-labelledby="impact-t">
      <Reveal className="impact-teaser-grid">
        <div className="impact-teaser-copy">
          <p className="impact-eyebrow">07 / Community Impact</p>
          <h2 id="impact-t">Beyond the code.</h2>
          <p className="impact-kicker">Community Development Project<br />Rotary Club of Banga × LPU</p>
          <p>Beyond building for the web, I had the opportunity to contribute to a real community development initiative through LPU and Rotary Club of Banga.</p>
          <dl className="impact-facts"><div><dt>Hours</dt><dd>30</dd></div><div><dt>Weeks</dt><dd>4</dd></div><div><dt>Year</dt><dd>2026</dd></div></dl>
          <Link className="impact-cta" to="/community-impact">Explore CDP ↗</Link>
        </div>
        <figure className="impact-teaser-media">
          {img ? <img src={img} alt="Community Development Project activity with Rotary Club of Banga" loading="lazy" /> : <div className="impact-fallback"><span>30</span><small>hours of service</small></div>}
          <figcaption>Rotary Club of Banga × LPU · 2026</figcaption>
        </figure>
      </Reveal>
    </section>
  )
}