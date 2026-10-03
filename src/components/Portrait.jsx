// Replace with your original photo: src/assets/images/profile/portrait.jpg (.webp/.png also work). 4:5 crop works best.
const found = import.meta.glob('../assets/images/profile/portrait.{jpg,jpeg,png,webp}', { eager: true, import: 'default' })
const src = Object.values(found)[0]
export default function Portrait() {
  return src ? <img className="hx-photo" src={src} alt="Harsh Jha, smiling slightly, wearing a dark jacket outdoors" width="880" height="1144" fetchpriority="high" />
    : <div className="hx-photo portrait-empty" role="img" aria-label="Harsh Jha monogram"><span>HJ</span></div>
}
