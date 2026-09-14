import { useScrollReveal } from './About'

const placeholders = [
  { icon: '◈', label: 'Event Photo 1' },
  { icon: '◈', label: 'Workshop' },
  { icon: '◈', label: 'Team Activity' },
  { icon: '◈', label: 'CTF in Action' },
  { icon: '◈', label: 'Cyber Invaders' },
  { icon: '◈', label: 'Awards Ceremony' },
]

export default function Gallery() {
  const ref = useScrollReveal()

  return (
    <section id="gallery" className="gallery section--dark" ref={ref}>
      <div className="gallery__inner">
        <span className="section-label fade-in">Gallery</span>
        <h2 className="section-title fade-in">Glimpses of Cyber Invaders</h2>
        <div className="gallery__grid">
          {placeholders.map((item, i) => (
            <div key={i} className={`gallery__item fade-in fade-in-delay-${Math.min(i + 1, 3)}`}>
              <div className="gallery__placeholder">
                <span className="gallery__placeholder-icon">{item.icon}</span>
                <span className="gallery__placeholder-text">{item.label}</span>
              </div>
            </div>
          ))}
        </div>
        <p className="gallery__note fade-in">Event photos will be added soon</p>
      </div>
    </section>
  )
}
