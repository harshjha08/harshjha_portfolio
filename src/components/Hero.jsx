import { Link } from 'react-router-dom'
import { site } from '../data/site'
import { projects } from '../data/projects'
import { certificates } from '../data/certificates'
import { Visual } from './ProjectArt'
import Portrait from './Portrait'
import Reveal from './Reveal'
import { Arrow, Download, Plane, Linkedin, Github, Bolt, Atom, Bulb, Cap, Code } from './Icons'
const stats = [[Code, String(Object.values(site.stack).flat().length), 'Technologies', 'I work with'], [Atom, '3', 'Core projects', 'Built to learn and ship'], [Cap, String(certificates.length), 'Certifications', 'Python, C++, HTML']]
export default function Hero() {
  return (<>
    <section className="hx">
      <div className="hx-copy">
        <p className="hx-status"><i /> Available for freelance &amp; opportunities</p>
        <p className="hx-note n1" aria-hidden="true">Ideas → Design → Code → Experience</p>
        <h1><small>Hi, I’m</small><span>Harsh <em>Jha</em></span></h1>
        <p className="hx-role">Web Designer &amp; Developer</p>
        <p className="hx-lead">{site.intro}</p>
        <div className="hx-cta">
          <Link className="hb dark" to="/projects">View My Work <Arrow s={18} /></Link>
          <Link className="hb" to="/contact">Start a Project <Plane s={18} /></Link>
          <a className="hb sm" href={site.cv} download><Download s={16} /> Download CV</a>
        </div>
        <ul className="hx-links">
          <li><a href={site.linkedin}><Linkedin s={34} /><span><b>LinkedIn</b>Let’s connect</span></a></li>
          <li><a href={site.github}><Github s={34} /><span><b>GitHub</b>View my code</span></a></li>
          <li><span className="plain"><Bolt s={24} /><span><b>Frontend Focused</b>Clean · Modern · Responsive</span></span></li>
        </ul>
      </div>
      <div className="hx-art">
        <div className="hx-disc" /><div className="hx-orb" />
        <Portrait />
        <p className="hx-note n2" aria-hidden="true">Turning<br />Ideas into<br />Web Experiences</p>
        <ul className="hx-panel">{[[Atom, 'React', 'Enthusiast'], [Bulb, 'Problem', 'Solver'], [Cap, 'Always', 'Learning']].map(([Ic, a, b]) => <li key={a}><span><Ic s={26} /></span>{a}<br />{b}</li>)}</ul>
        <Link to="/about" className="hx-badge"><span><b>Harsh Jha</b>BCA 2nd Year | LPU</span><i><Arrow s={20} /></i></Link>
      </div>
    </section>
    <section className="hx-stats" aria-label="At a glance">
      {stats.map(([Ic, n, a, b]) => <div key={a}><span><Ic s={26} /></span><p><strong>{n}</strong>{a}<small>{b}</small></p></div>)}
      <blockquote>Good design is not just what it looks like, it’s how it works.<cite>— Steve Jobs</cite></blockquote>
    </section>
    <section className="hx-work" aria-labelledby="fw">
      <Reveal className="hx-work-head"><p className="eyebrow">My Work</p><h2 id="fw">Featured Projects</h2><p>A few selected projects that showcase my skills, creativity and problem-solving approach.</p><Link className="link" to="/projects">View All Projects <Arrow s={16} /></Link></Reveal>
      <ul className="hx-cards">{projects.filter((p) => p.featured).slice(0, 4).map((p) => (
        <li key={p.id}><Link to={`/projects/${p.id}`}><div className="hx-thumb"><Visual p={p} /><span>{p.tag}</span></div><div className="hx-cap"><p><b>{p.title}</b>{p.subtitle}</p><Arrow s={18} /></div></Link></li>))}</ul>
    </section>
  </>)
}
