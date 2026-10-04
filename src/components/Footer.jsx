import { Link } from 'react-router-dom'
import { site } from '../data/site'

export default function Footer() {
  return (
    <footer className="footer-new">
      <div className="footer-glow footer-glow-one" />
      <div className="footer-glow footer-glow-two" />

      <div className="footer-top">
        <span className="footer-kicker">
          <i /> Available for meaningful work
        </span>

        <p className="footer-mini">
          Have a project, an idea, or something<br />
          worth putting on the web?
        </p>
      </div>

      <div className="footer-links-area">
        <div className="footer-identity">
          <span className="footer-name">{site.name}</span>
          <span className="footer-role">{site.role}</span>
          <p>
            Websites that put your information,<br />
            your work and your people online.
          </p>
        </div>

        <nav className="footer-nav-new" aria-label="Footer navigation">
          <span className="footer-label">EXPLORE</span>

          {site.nav.map(([to, label]) => (
            <Link key={to} to={to}>
              <span>{label}</span>
              <small>↗</small>
            </Link>
          ))}
        </nav>

        <div className="footer-social-new">
          <span className="footer-label">CONNECT</span>

          <a href={site.linkedin} target="_blank" rel="noreferrer">
            <span>LinkedIn</span>
            <small>↗</small>
          </a>

          <a href={site.github} target="_blank" rel="noreferrer">
            <span>GitHub</span>
            <small>↗</small>
          </a>

          <a href={site.cv} download>
            <span>Download CV</span>
            <small>↓</small>
          </a>

          <a href={`mailto:${site.email}`}>
            <span>Email me</span>
            <small>↗</small>
          </a>
        </div>
      </div>

      <div className="footer-bottom-new">
        <span>© {new Date().getFullYear()} {site.name}</span>

        <span className="footer-location">
          <i /> India · Designing for the web
        </span>

        <span>Built with curiosity &amp; code.</span>
      </div>
    </footer>
  )
}
