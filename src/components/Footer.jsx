import { Link } from 'react-router-dom'
import { site } from '../data/site'
export default function Footer() {
  return (
    <footer className="footer">
      <Link to="/contact" className="footer-cta">Have an idea?<br />Let’s build something useful.</Link>
      <div className="footer-row">
        <div><strong>{site.name}</strong><br />{site.role}<br /><span className="fstat">Websites that put your information, your work and your people online.</span></div>
        <nav aria-label="Footer">{site.nav.map(([to, l]) => <Link key={to} to={to}>{l}</Link>)}</nav>
        <div className="footer-links"><a href={site.linkedin}>LinkedIn</a><a href={site.github}>GitHub</a><a href={site.cv} download>Download CV</a><a href={`mailto:${site.email}`}>{site.email}</a></div>
      </div>
      <p className="copy">© {new Date().getFullYear()} {site.name}</p>
    </footer>
  )
}
