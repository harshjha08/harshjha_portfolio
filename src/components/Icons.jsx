const P = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round', strokeLinejoin: 'round' }
const I = (d, f) => ({ s = 20 }) => <svg width={s} height={s} viewBox="0 0 24 24" aria-hidden="true" {...(f ? { fill: 'currentColor' } : P)}>{d}</svg>
export const Arrow = I(<path d="M5 12h14M13 6l6 6-6 6" />)
export const Download = I(<path d="M12 4v11m-5-5 5 5 5-5M5 20h14" />)
export const Plane = I(<path d="M21 3 3 10l7 3 3 7zM10 13l11-10" />)
export const Linkedin = I(<path d="M4 3a2 2 0 1 0 .01 0zM3 9h4v12H3zM9.5 9h3.8v1.8c.6-1.1 1.9-2 3.8-2 3.600 0 4 2.400 4 5V21h-4v-6c0-1.400-.1-2.700-1.700-2.700S13.500 13.500 13.500 15V21h-4z" />, 1)
export const Github = I(<path d="M12 2a10 10 0 0 0-3.200 19.500c.5.100.7-.2.700-.5v-1.800c-2.800.6-3.400-1.200-3.400-1.200-.5-1.200-1.100-1.500-1.100-1.500-.9-.6.100-.6.100-.6 1 .1 1.500 1 1.500 1 .9 1.500 2.300 1.100 2.900.8.1-.7.3-1.100.6-1.300-2.200-.3-4.600-1.100-4.600-5 0-1.100.4-2 1-2.700-.1-.3-.4-1.300.1-2.700 0 0 .8-.3 2.800 1a9.600 9.600 0 0 1 5 0c2-1.300 2.800-1 2.800-1 .5 1.400.2 2.400.1 2.700.6.700 1 1.600 1 2.700 0 3.900-2.400 4.700-4.600 5 .4.300.7.900.7 1.800v2.700c0 .3.200.6.700.5A10 10 0 0 0 12 2z" />, 1)
export const Bolt = I(<path d="M13 2 4 14h7l-1 8 9-12h-7z" />)
export const Atom = I(<><circle cx="12" cy="12" r="1.600" /><ellipse cx="12" cy="12" rx="10" ry="4" /><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" /><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" /></>)
export const Bulb = I(<path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-3.500 10.900c.6.500 1 1.200 1 2.100h5c0-.9.400-1.600 1-2.100A6 6 0 0 0 12 3z" />)
export const Cap = I(<path d="M2 9l10-5 10 5-10 5zM6 11.500V16c0 1.500 3 3 6 3s6-1.500 6-3v-4.500" />)
export const Code = I(<path d="M8 7l-5 5 5 5M16 7l5 5-5 5M14 4l-4 16" />)
