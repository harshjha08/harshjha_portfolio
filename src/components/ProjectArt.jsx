// Generated temporary visuals. Drop src/assets/images/projects/<id>.jpg to override the main visual.
const imgs = import.meta.glob('../assets/images/projects/*.{jpg,jpeg,png,webp}', { eager: true, import: 'default' })
export const projectImage = (id) => Object.entries(imgs).find(([p]) => p.includes('/' + id + '.'))?.[1]
const T = [['#eef0ff', '#5b4bdb', '#7fd6e8', '#14183a'], ['#fff1e4', '#e8590c', '#7a1f3d', '#2a1330'], ['#f6efe9', '#c9a46a', '#d9a7b0', '#14101a'], ['#e8f7fa', '#0e8fa8', '#5b4bdb', '#0f2a35'], ['#f1ecff', '#7c5cff', '#ffb48a', '#1c1540'], ['#fdf3e7', '#14183a', '#ffb48a', '#14183a']]
function Scene({ kind, tone }) {
  const [bg, a, b, ink] = T[tone % T.length]
  if (kind === 'tutor') return (<g><rect width="800" height="440" fill={bg} /><circle cx="650" cy="110" r="150" fill={b} opacity=".35" />
    <text x="56" y="150" fontSize="56" fontWeight="800" fill={ink}>Learn with</text><text x="56" y="215" fontSize="56" fontWeight="800" fill={a}>clarity.</text>
    <rect x="56" y="250" width="260" height="14" rx="7" fill={ink} opacity=".15" /><rect x="56" y="276" width="200" height="14" rx="7" fill={ink} opacity=".15" /><rect x="56" y="324" width="150" height="48" rx="24" fill={ink} />
    {[0, 1, 2].map((i) => <g key={i}><rect x={430 + i * 28} y={150 + i * 76} width="290" height="58" rx="10" fill="#fff" stroke={a} /><circle cx={458 + i * 28} cy={179 + i * 76} r="14" fill={i ? b : a} /><rect x={486 + i * 28} y={171 + i * 76} width="150" height="12" rx="6" fill={ink} opacity=".25" /></g>)}</g>)
  if (kind === 'culture') return (<g><defs><linearGradient id="dusk" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#2a1330" /><stop offset=".6" stopColor="#7a1f3d" /><stop offset="1" stopColor="#e8590c" /></linearGradient></defs>
    <rect width="800" height="440" fill="url(#dusk)" /><circle cx="400" cy="250" r="125" fill="#ffd27a" /><path d="M190 440V270q210-190 420 0V440z" fill="#14081a" />
    {Array.from({ length: 16 }).map((_, i) => <path key={i} d={`M${i * 52} 0l26 44l26-44z`} fill={i % 2 ? '#ffd27a' : '#ff7a3d'} />)}
    <text x="400" y="372" fontSize="46" fontWeight="800" fill="#ffd27a" textAnchor="middle">Ramleela</text><text x="400" y="410" fontSize="18" fill="#fff" textAnchor="middle" opacity=".8">Mahil Gaila Dussehra</text></g>)
  if (kind === 'luxe') return (<g><rect width="800" height="440" fill={bg} /><text x="400" y="66" fontFamily="Georgia,serif" fontSize="34" letterSpacing="14" textAnchor="middle" fill={ink}>LUMORA</text>
    {[a, b, '#e4d3cc'].map((f, i) => <g key={i}><path d={`M${90 + i * 230} 390V200a100 100 0 0 1 200 0V390z`} fill={f} /><rect x={90 + i * 230} y="408" width="90" height="8" rx="4" fill={ink} opacity=".5" /><rect x={90 + i * 230} y="424" width="50" height="6" rx="3" fill={ink} opacity=".25" /></g>)}</g>)
  return (<g><rect width="800" height="440" fill={bg} /><rect x="56" y="70" width="430" height="280" rx="26" fill={a} /><circle cx="400" cy="160" r="70" fill={b} opacity=".9" />
    <text x="86" y="300" fontSize="70" fontWeight="800" fill="#fff">Aa</text>{[0, 1, 2].map((i) => <rect key={i} x="530" y={90 + i * 90} width="214" height="62" rx="12" fill="#fff" stroke={ink} strokeOpacity=".2" />)}</g>)
}
export function Art({ kind = 'web', tone = 0, v = 0, label }) {
  const ink = T[tone % T.length][3]
  return (<svg viewBox="0 0 800 500" preserveAspectRatio="xMidYMid slice" role="img" aria-label={label} width="100%" height="100%" fontFamily="Plus Jakarta Sans,system-ui,sans-serif">
    <defs><clipPath id={`c${v}`}>{v === 1 ? <rect x="300" y="40" width="200" height="420" rx="26" /> : v === 2 ? <rect width="800" height="500" /> : <rect y="60" width="800" height="440" />}</clipPath></defs>
    <rect width="800" height="500" fill={T[tone % T.length][0]} />
    {v === 0 && <g><rect width="800" height="60" fill="#fff" /><circle cx="28" cy="30" r="7" fill={ink} opacity=".25" /><circle cx="52" cy="30" r="7" fill={ink} opacity=".25" /><circle cx="76" cy="30" r="7" fill={ink} opacity=".25" /></g>}
    {v === 1 && <rect x="290" y="30" width="220" height="440" rx="34" fill={ink} />}
    <g clipPath={`url(#c${v})`}><g transform={v === 0 ? 'translate(0,60)' : v === 1 ? 'translate(280,60) scale(.6)' : 'translate(-100,-40) scale(1.4)'}><Scene kind={kind} tone={tone} /></g></g></svg>)
}
export const Visual = ({ p, v = 0 }) => { const im = v === 0 && projectImage(p.id); return im ? <img src={im} alt={`${p.title} preview`} loading="lazy" /> : <Art kind={p.kind} tone={p.tone} v={v} label={`${p.title}, ${['homepage', 'mobile view', 'detail'][v]} illustration`} /> }
export function CertArt({ tone = 0, title }) {
  const [bg, a, b, ink] = T[tone % T.length]
  return (<svg viewBox="0 0 400 280" role="img" aria-label={`Certificate: ${title}`} width="100%" height="100%" fontFamily="Plus Jakarta Sans,system-ui,sans-serif"><rect width="400" height="280" fill="#fff" /><rect x="14" y="14" width="372" height="252" fill="none" stroke={a} strokeWidth="2" />
    <rect x="30" y="30" width="340" height="220" fill={bg} /><text x="200" y="88" textAnchor="middle" fontSize="13" letterSpacing="4" fill={ink} opacity=".6">CERTIFICATE</text><text x="200" y="130" textAnchor="middle" fontSize="22" fontWeight="800" fill={ink}>{title.length > 28 ? title.slice(0, 27) + '…' : title}</text>
    <rect x="120" y="150" width="160" height="6" rx="3" fill={ink} opacity=".15" /><rect x="150" y="166" width="100" height="6" rx="3" fill={ink} opacity=".15" /><circle cx="200" cy="214" r="22" fill={b} /><circle cx="200" cy="214" r="14" fill="none" stroke="#fff" strokeWidth="2" /></svg>)
}
