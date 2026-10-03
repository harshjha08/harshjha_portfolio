import { useEffect, useRef, useState } from 'react'
export default function Reveal({ children, as: T = 'div', className = '' }) {
  const r = useRef(); const [on, setOn] = useState(false)
  useEffect(() => { const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setOn(true); o.disconnect() } }, { threshold: .12 }); o.observe(r.current); return () => o.disconnect() }, [])
  return <T ref={r} className={`rv ${on ? 'in' : ''} ${className}`}>{children}</T>
}
