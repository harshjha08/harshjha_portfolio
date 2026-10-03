import { Link } from 'react-router-dom'
import { Visual } from './ProjectArt'
import Reveal from './Reveal'
export default function ProjectRow({ p, index }) {
  const mode = index === 2 ? 'wide' : index % 2 ? 'flip' : ''
  return (
    <Reveal as="article" className={`prow ${mode}`}>
      <Link to={`/projects/${p.id}`} className="pvisual" aria-label={`View ${p.title} case study`}><Visual p={p} /></Link>
      <div className="ptext">
        <p className="num">{String(index + 1).padStart(2, '0')}</p>
        <p className="meta">{p.category}, {p.type}</p>
        <h3>{p.title}</h3>
        <p>{p.shortDescription}</p>
        <p className="tags">{p.technologies.join(', ')}</p>
        <Link className="link" to={`/projects/${p.id}`}>View case study</Link>
      </div>
    </Reveal>
  )
}
