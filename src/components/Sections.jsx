import { useState } from 'react'
import { Link } from 'react-router-dom'
import { site } from '../data/site'
import { services } from '../data/services'
import { certificates } from '../data/certificates'
import { projects } from '../data/projects'
import ProjectRow from './ProjectRow'
import Reveal from './Reveal'
import { Art, CertArt } from './ProjectArt'
import { Arrow } from './Icons'

export const FeaturedProjects = ({ all }) => (
  <section className="section" aria-labelledby="work-h">
    <Reveal as="h2" className="h2"><span id="work-h">Selected work</span></Reveal>
    {projects.slice(0, all ? 99 : 4).map((p, i) => <ProjectRow key={p.id} p={p} index={i} />)}
  </section>
)
export function Services() {
  const [open, setOpen] = useState(0)
  const s = services[open] || services[0]
  return (
    <section className="section" aria-labelledby="svc-h">
      <h2 id="svc-h" className="h2">What I build</h2>
      <div className="svc-wrap">
        <ul className="svc">{services.map(([t, d], i) => (
          <li key={t} onMouseEnter={() => setOpen(i)}>
            <button aria-expanded={open === i} onFocus={() => setOpen(i)} onClick={() => setOpen(i)}><small>{String(i + 1).padStart(2, '0')}</small>{t}</button>
            <p hidden={open !== i}>{d}</p>
          </li>))}</ul>
        <div className="svc-art" aria-hidden="true"><Art key={open} kind={s[2]} tone={s[3]} label="" /></div>
      </div>
    </section>
  )
}
const journey = [['2021 – 2022', 'Class 10, Mahil Gaila', 'Government Senior Secondary School, Mahil Gaila (S.B.S. Nagar).'],
  ['2023 – 2024', 'Class 12, Humanities', 'Moved into an English-medium environment and kept my results strong. That is where I learned persistence beats perfection.'],
  ['2025 – 2028', 'BCA at LPU', 'Chose computer science for the skills, not the trend. Now in second year.'],
  ['Now', 'Frontend, then React', 'Started with HTML, CSS and JavaScript, then moved to React. Also working through Java, C, C++ and Python.'],
  ['Now', 'Real projects', 'A tutor’s online platform, a cultural event site for my home village’s Dussehra, and a luxury e-commerce concept.']]
export const About = () => (
  <section className="section about" aria-labelledby="ab-h">
    <h2 id="ab-h" className="h2">I learn by building real things</h2>
    <div className="cols">
      <div className="prose">
        <p>I’m a second-year BCA student at Lovely Professional University, from Banga in Punjab. I picked technology because I wanted a career built on skills and steady learning.</p>
        <p>Web development is where I’m strongest. I started with plain HTML, CSS and JavaScript and moved toward React, trying other areas along the way: databases, cloud and AI. I’d rather understand the basics properly than collect buzzwords.</p>
        <p>What I care about is software that’s simple and clear to use. I like putting a real thing online, like the Dussehra event from the village my school is in.</p>
        <div className="stackbox">{Object.entries(site.stack).map(([k, v]) => <p key={k} className="stack"><strong>{k}</strong> {v.join(', ')}</p>)}</div>
        <div className="stackbox">{site.education.map(([a, b, c]) => <p key={b + c} className="stack"><strong>{a}</strong> {b}, {c}</p>)}</div>
      </div>
      <ol className="journey">{journey.map(([d, t, x]) => <li key={t}><small>{d}</small><h3>{t}</h3><p>{x}</p></li>)}</ol>
    </div>
  </section>
)
export const Certificates = ({ all }) => {
  const cats = ['All', ...new Set(certificates.map((c) => c.category))]
  const [cat, setCat] = useState('All')
  const list = (all ? certificates : certificates.filter((c) => c.featured)).filter((c) => cat === 'All' || c.category === cat)
  return (
    <section className="section" aria-labelledby="ce-h">
      <h2 id="ce-h" className="h2">Credentials</h2>
      {all && <div className="chips">{cats.map((c) => <button key={c} aria-pressed={cat === c} onClick={() => setCat(c)}>{c}</button>)}</div>}
      <ul className="certgrid">{list.map((c, i) => (
        <li key={c.title} style={{ '--r': `${(i % 3) - 1}deg` }}><div className="certart"><CertArt tone={c.tone} title={c.title} /></div>
          <h3>{c.title}</h3><p>{[c.issuer, c.date].filter(Boolean).join(', ') || c.category}</p>{c.credentialUrl && <a className="link" href={c.credentialUrl}>Verify</a>}</li>))}</ul>
      {!all && <Link className="link" to="/certificates">View all credentials <Arrow s={16} /></Link>}
    </section>
  )
}
export const Presence = () => (
  <section className="section presence" aria-labelledby="pr-h">
    <h2 id="pr-h" className="h2">Find me beyond this website.</h2>
    <ul>{[['LinkedIn', site.linkedin], ['GitHub', site.github], ['Download CV', site.cv]].map(([l, h]) => <li key={l}><a href={h} {...(l === 'Download CV' ? { download: true } : {})}>{l}</a></li>)}</ul>
  </section>
)
const types = ['Business website', 'Landing page', 'Website redesign', 'Internship or job', 'Something else']
export function Contact() {
  const [v, setV] = useState({ name: '', email: '', type: types[0], budget: '', message: '' })
  const [err, setErr] = useState({}); const [st, setSt] = useState('idle')
  const set = (k) => (e) => setV({ ...v, [k]: e.target.value })
  const submit = async (e) => {
    e.preventDefault(); const x = {}
    if (v.name.trim().length < 2) x.name = 'Enter your name.'
    if (!/^\S+@\S+\.\S+$/.test(v.email)) x.email = 'Enter a valid email address.'
    if (v.message.trim().length < 10) x.message = 'Add a few words about your idea (at least 10 characters).'
    setErr(x); if (Object.keys(x).length) return
    setSt('loading')
    try {
      if (site.formEndpoint) { const r = await fetch(site.formEndpoint, { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify(v) }); if (!r.ok) throw new Error() }
      else window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(v.type + ' enquiry from ' + v.name)}&body=${encodeURIComponent(`${v.message}\n\nBudget: ${v.budget || 'not specified'}\nReply to: ${v.email}`)}`
      setSt('done')
    } catch { setSt('error') }
  }
  const F = ({ id, label, children, e }) => <div className="fld"><label htmlFor={id}>{label}</label>{children}{e && <p className="ferr" id={id + '-e'} role="alert">{e}</p>}</div>
  return (
    <section className="section contact" aria-labelledby="ct-h">
      <div className="ct-copy">
        <h2 id="ct-h" className="h2">Have an idea? Let’s turn it into something real.</h2>
        <p>Tell me about your business, event or project. I’ll reply with how I’d approach it, usually within a day or two.</p>
        <p className="links"><a href={`mailto:${site.email}`}>{site.email}</a><a href={site.linkedin}>LinkedIn</a><a href={site.github}>GitHub</a></p>
      </div>
      {st === 'done' ? <div className="ct-done" role="status"><h3>Thank you, {v.name.split(' ')[0]}.</h3><p>{site.formEndpoint ? 'Your message is on its way. I’ll reply by email.' : 'Your email app should have opened with the message ready to send. If it didn’t, write to ' + site.email + '.'}</p></div> :
      <form className="ct-form" onSubmit={submit} noValidate>
        <F id="name" label="Name" e={err.name}><input id="name" value={v.name} onChange={set('name')} autoComplete="name" aria-invalid={!!err.name} aria-describedby={err.name ? 'name-e' : undefined} /></F>
        <F id="email" label="Email" e={err.email}><input id="email" type="email" value={v.email} onChange={set('email')} autoComplete="email" aria-invalid={!!err.email} aria-describedby={err.email ? 'email-e' : undefined} /></F>
        <F id="type" label="Project type"><select id="type" value={v.type} onChange={set('type')}>{types.map((t) => <option key={t}>{t}</option>)}</select></F>
        <F id="budget" label="Budget range (optional)"><select id="budget" value={v.budget} onChange={set('budget')}><option value="">Not sure yet</option><option>Under ₹10,000</option><option>₹10,000 – ₹25,000</option><option>₹25,000 and above</option></select></F>
        <F id="message" label="Your idea" e={err.message}><textarea id="message" rows="5" value={v.message} onChange={set('message')} aria-invalid={!!err.message} aria-describedby={err.message ? 'message-e' : undefined} /></F>
        <button className="hb dark" disabled={st === 'loading'}>{st === 'loading' ? 'Sending…' : 'Send message'} <Arrow s={18} /></button>
        {st === 'error' && <p className="ferr" role="alert">Something went wrong. Please try again or email {site.email}.</p>}
      </form>}
    </section>
  )
}
