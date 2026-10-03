import { useState, useEffect } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import { site } from '../data/site'
import { Linkedin, Github, Download } from './Icons'
export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [sc, setSc] = useState(false)
  const { pathname } = useLocation()
  useEffect(() => { const f = () => setSc(window.scrollY > 24); f(); window.addEventListener('scroll', f, { passive: true }); return () => window.removeEventListener('scroll', f) }, [])
  useEffect(() => setOpen(false), [pathname])
  useEffect(() => { document.body.style.overflow = open ? 'hidden' : '' }, [open])
  const links = site.nav.map(([to, l]) => <NavLink key={to} to={to} end={to === '/'}>{l}</NavLink>)
  return (
    <header className={'nav' + (sc ? ' scrolled' : '')}>
      <Link to="/" className="logo" aria-label="Harsh Jha, home"><i>HJ</i><span>Harsh Jha</span></Link>
      <nav className="nav-desktop" aria-label="Main">{links}</nav>
      <a className="ni" href={site.linkedin} aria-label="LinkedIn"><Linkedin s={22} /></a>
      <a className="ni" href={site.github} aria-label="GitHub"><Github s={22} /></a>
      <a className="hb sm cvp" href={site.cv} download><Download s={16} /> Download CV</a>
      <button className="burger" aria-expanded={open} aria-controls="menu" onClick={() => setOpen(!open)}>{open ? 'Close' : 'Menu'}</button>
      <div id="menu" className="menu" hidden={!open}>
        <nav aria-label="Mobile">{links}</nav>
        <div className="menu-foot"><a href={site.linkedin}>LinkedIn</a><a href={site.github}>GitHub</a><a href={site.cv} download>Download CV</a></div>
      </div>
    </header>
  )
}
