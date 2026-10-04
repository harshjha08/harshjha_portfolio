// Community Development Project content. Edit text here; add photos to src/assets/images/community-impact/
const files = import.meta.glob('../assets/images/community-impact/*.{jpg,jpeg,png,webp}', { eager: true, import: 'default' })
import certificatePdf from '../assets/images/community-impact/CDP_Completion_Certificate_Harshjha.pdf'
// cdpImage('cdp-hero') -> url of cdp-hero.jpg/.png/.webp, or undefined if the file isn't there (sections then hide that image)
export const cdpImage = (name) => Object.entries(files).find(([p]) => p.split('/').pop().replace(/\.[a-z]+$/i, '') === name)?.[1]
export const cdpCertificate = certificatePdf

export const impact = { org: 'Rotary Club of Banga', inst: 'Lovely Professional University (LPU)', dates: '27 June – 31 July 2026', hours: '30', weeks: '4', year: '2026' }
export const stats = [['30+', 'Hours of contribution'], ['4', 'Weeks'], ['300+', 'Children at the uniform distribution'], ['5', 'Major activity areas']]
export const activities = [
  { id: 'school', name: 'School Visit & Teaching', date: '27 June 2026', place: 'Local school', img: 'cdp-school', text: 'Visited a local school, engaged with students and supported educational and community activities.' },
  { id: 'annapurna', name: 'Annapurna Project', date: '1 July 2026', place: 'Fatuana Sahib / Bharomajara', img: 'cdp-annapurna', text: 'Took part in the community food and service initiative.' },
  { id: 'uniform', name: 'Uniform Distribution', date: '', place: 'Karnana', img: 'cdp-uniform', text: 'Took part in distributing uniforms to more than 300 children.' },
  { id: 'plantation', name: 'Plantation Activity', date: '', place: 'Amardeep Singh Shergill College, Mukandpur', img: 'cdp-plantation', text: 'Took part in the plantation drive.' },
  { id: 'memorial', name: 'Community & Memorial Visit', date: '', place: 'Shaheed Udham Singh Memorial, Village Katariya', img: 'cdp-memorial', text: 'Paid tribute at the memorial and took part in community interaction.' },
]
export const documentation = { name: 'Documentation', text: 'Captured geotagged photographs, kept activity records and collected supporting media, including newspaper and social-media coverage where available.' }
// size: l (wide) | m (tall) | s (square). Files: cdp-photo-1.jpg ... Only photos that exist are shown.
export const gallery = [
  { img: 'cdp-photo-1', size: 'l', activity: 'School visit', place: 'Local school', caption: 'With students during the school visit' },
  { img: 'cdp-photo-2', size: 'm', activity: 'Annapurna Project', place: 'Fatuana Sahib / Bharomajara', caption: 'Community food service' },
  { img: 'cdp-photo-3', size: 's', activity: 'Uniform distribution', place: 'Karnana', caption: 'Uniform distribution' },
  { img: 'cdp-photo-4', size: 'm', activity: 'Plantation activity', place: 'Mukandpur', caption: 'Plantation drive' },
  { img: 'cdp-photo-5', size: 'l', activity: 'Community & memorial visit', place: 'Village Katariya', caption: 'Shaheed Udham Singh Memorial' },
  { img: 'cdp-photo-6', size: 's', activity: 'Documentation', place: '', caption: 'Activity documentation' },
  { img: 'cdp-photo-7', size: 's', activity: 'CDP', place: '', caption: 'During the CDP' },
  { img: 'cdp-photo-8', size: 'm', activity: 'CDP', place: '', caption: 'During the CDP' },
]
export const proof = [
  { img: 'cdp-news', label: 'Newspaper coverage' },
  { img: 'cdp-news-2', label: 'Newspaper coverage' },
  { img: 'cdp-news-3', label: 'Newspaper coverage' },
  { img: 'cdp-news-4', label: 'Newspaper coverage' },
  { img: 'cdp-social', label: 'Social-media coverage' },
  { img: 'cdp-geotag', label: 'Geotagged photograph' },
]