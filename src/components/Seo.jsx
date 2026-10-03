import { useEffect } from 'react'
export default function Seo({ title, description }) {
  useEffect(() => {
    document.title = title ? `${title} — Harsh Jha` : 'Harsh Jha — Web Designer & Developer'
    if (description) document.querySelector('meta[name="description"]')?.setAttribute('content', description)
    window.scrollTo(0, 0)
  }, [title, description])
  return null
}
