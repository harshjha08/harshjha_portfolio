import { Link } from 'react-router-dom'
import '../styles/community-impact.css'
import Seo from './Seo'
import Reveal from './Reveal'
import ImpactGallery from './Impactgallery'
import { ImpactStrip, ImpactDoList } from './Impacttimeline'
import { impact, stats, proof, cdpCertificate, cdpImage } from '../data/Impact'
export default function CommunityImpactPage() {
  const hero = cdpImage('cdp-hero'), cert = cdpImage('cdp-certificate'), lr = cdpImage('cdp-logo-rotary'), ll = cdpImage('cdp-logo-lpu')
  const docs = proof.map((p) => ({ ...p, src: cdpImage(p.img) })).filter((p) => p.src)
  return (<div className="community-impact">
    <Seo title="Community Impact" description="Harsh Jha's Community Development Project with the Rotary Club of Banga and LPU, June to July 2026." />
    <section className="impact-hero">
      <div className="impact-hero-copy">
        <p className="impact-eyebrow">07 / Community Impact</p>
        <h1>Small steps.<br /><em>Real change.</em></h1>
        <p>For four weeks in the summer of 2026 I took part, as a student participant, in the Community Development Project run through LPU with the Rotary Club of Banga: school visits, a food service initiative, uniforms for children, a plantation drive and village visits.</p>
        <dl className="impact-facts"><div><dt>Dates</dt><dd>{impact.dates}</dd></div><div><dt>Contribution</dt><dd>30 Hours</dd></div><div><dt>Duration</dt><dd>4 Weeks</dd></div></dl>
        <div className="impact-actions"><a className="impact-cta" href={cdpCertificate} target="_blank" rel="noreferrer">View Certificate ↗</a><a className="impact-link" href="#journey">Explore the journey ↓</a></div>
      </div>
      <figure className="impact-hero-media">
        {hero ? <img src={hero} alt="Harsh Jha at the Community Development Project with the Rotary Club of Banga" fetchpriority="high" /> : <div className="impact-fallback"><span>30</span><small>hours · 4 weeks · 2026</small></div>}
        <figcaption>{lr ? <img src={lr} alt="Rotary Club of Banga" /> : <b>Rotary Club of Banga</b>}<span>in collaboration with</span>{ll ? <img src={ll} alt="Lovely Professional University" /> : <b>LPU</b>}</figcaption>
      </figure>
    </section>
    <section className="impact-overview" id="journey" aria-labelledby="ij">
      <Reveal className="impact-overview-head"><p className="impact-eyebrow">The journey</p><h2 id="ij">The Journey</h2>
        <p>The CDP was a four-week community engagement programme with the Rotary Club of Banga in collaboration with LPU, focused on education support, social welfare, the environment and community outreach. I contributed as a student participant alongside the club and local people.</p></Reveal>
      <dl className="impact-stats">{stats.map(([n, l]) => <div key={l}><dt>{n}</dt><dd>{l}</dd></div>)}</dl>
      <ImpactStrip />
    </section>
    <section className="impact-did" aria-labelledby="idid"><h2 id="idid">What I Did</h2><ImpactDoList /></section>
    <section className="impact-photos" id="gallery" aria-labelledby="ip"><p className="impact-eyebrow">Photo journal</p><h2 id="ip">From the field</h2><ImpactGallery /></section>
    <section className="impact-certificate" id="certificate" aria-labelledby="ic">
      <div><p className="impact-eyebrow">Certificate &amp; documentation</p><h2 id="ic">Certificate of Participation</h2>
        <p>Community Development Project<br />Rotary Club of Banga × LPU<br />{impact.dates}</p>
        <a className="impact-cta" href={cdpCertificate} target="_blank" rel="noreferrer">View Certificate ↗</a></div>
      {cert && <img className="impact-cert-img" src={cert} alt="Certificate of Participation, Community Development Project, Rotary Club of Banga and LPU" loading="lazy" />}
      {docs.length > 0 && <ul className="impact-docs">{docs.map((d) => <li key={d.img}><a href={d.src} target="_blank" rel="noreferrer"><img src={d.src} alt={d.label} loading="lazy" /><span>{d.label}</span></a></li>)}</ul>}
    </section>
    <section className="impact-reflection" aria-labelledby="ir"><h2 id="ir">Beyond the hours.</h2>
      <p>The project reminded me that meaningful work is not always measured by what we build. Sometimes it is measured by the people we spend time with, the communities we understand, and the small things we can contribute.</p>
      <p className="impact-thanks">Grateful to the Rotary Club of Banga, LPU and everyone who made this possible.</p></section>
    <section className="impact-final"><h2>Want to see more?</h2><div className="impact-actions"><a className="impact-cta" href="#gallery">View Full Gallery ↗</a><Link className="impact-cta ghost" to="/">Back to Portfolio ↗</Link></div></section>
  </div>)
}