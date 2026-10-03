import { Link, useParams, Navigate } from 'react-router-dom'
import Seo from '../components/Seo'
import { projects } from '../data/projects'
import { Visual } from '../components/ProjectArt'
import { FeaturedProjects, Services, About, Certificates, Contact } from '../components/Sections'
const wrap = (t, d, C) => () => (<><Seo title={t} description={d} /><div className="page-top" />{C}</>)
export const AboutPage = wrap('About', 'About Harsh Jha, BCA student and frontend developer.', <About />)
export const ProjectsPage = wrap('Work', 'Websites and web projects by Harsh Jha.', <FeaturedProjects all />)
export const ServicesPage = wrap('Services', 'Websites, landing pages and redesigns for small businesses.', <Services />)
export const CertificatesPage = wrap('Credentials', 'Certificates and credentials.', <Certificates all />)
export const ContactPage = wrap('Contact', 'Start a project with Harsh Jha.', <Contact />)
export const NotFound = () => (<><Seo title="Page not found" /><section className="section"><h1 className="h2">This page doesn’t exist.</h1><Link className="btn" to="/">Back to home</Link></section></>)
export function ProjectDetail() {
  const { slug } = useParams()
  const i = projects.findIndex((p) => p.id === slug)
  if (i < 0) return <Navigate to="/projects" replace />
  const p = projects[i], next = projects[(i + 1) % projects.length], prev = projects[(i + projects.length - 1) % projects.length]
  return (<article className="case">
    <Seo title={p.title} description={p.shortDescription} />
    <p className="meta">{p.category}, {p.type}</p><h1>{p.title}</h1><p className="lead">{p.description}</p>
    <div className="pvisual big"><Visual p={p} /></div>
    <dl className="facts"><div><dt>Role</dt><dd>{p.role}</dd></div><div><dt>Technologies</dt><dd>{p.technologies.join(', ')}</dd></div><div><dt>Status</dt><dd>{p.status}</dd></div>
      {p.liveUrl && <div><dt>Live site</dt><dd><a href={p.liveUrl} target="_blank" rel="noreferrer">Visit website</a></dd></div>}
      {p.githubUrl && <div><dt>Code</dt><dd><a href={p.githubUrl} target="_blank" rel="noreferrer">GitHub</a></dd></div>}</dl>
    <section className="story"><h2>Overview</h2><p>{p.overview}</p></section>
    {[['The challenge', p.challenge], ['The approach', p.approach], ['The solution', p.solution]].map(([h, t]) => <section key={h} className="story"><h2>{h}</h2><p>{t}</p></section>)}
    <section className="story"><h2>Features</h2><ul>{p.features.map((f) => <li key={f}>{f}</li>)}</ul></section>
    <div className="gallery"><div className="pvisual"><Visual p={p} v={1} /></div><div className="pvisual"><Visual p={p} v={2} /></div></div>
    <nav className="pn" aria-label="More projects"><Link to={`/projects/${prev.id}`}>Previous: {prev.title}</Link><Link to={`/projects/${next.id}`}>Next: {next.title}</Link></nav>
  </article>)
}
