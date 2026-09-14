import { useEffect, useState } from 'react'
import CONFIG from '../data/config'
import useScrollReveal from '../hooks/useScrollReveal'

export default function Gallery() {
  const ref = useScrollReveal()
  const [active, setActive] = useState(null)

  useEffect(() => {
    if (!active) return undefined
    const onKey = (e) => {
      if (e.key === 'Escape') setActive(null)
    }
    document.addEventListener('keydown', onKey)
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = previous
    }
  }, [active])

  return (
    <section id="gallery" className="gallery section-light" ref={ref}>
      <div className="container">
        <span className="section-label fade-in">Previous Event / Gallery</span>
        <h2 className="section-title fade-in">Campus moments</h2>
        <p className="section-lead fade-in">{CONFIG.galleryNote}</p>
        <div className="gallery__grid">
          {CONFIG.gallery.map((item, i) => (
            <button
              type="button"
              key={item.label}
              className={`gallery__item fade-in fade-in-delay-${Math.min(i + 1, 3)}`}
              onClick={() => setActive(item)}
            >
              {item.src ? (
                <img src={item.src} alt={item.label} />
              ) : (
                <div className="gallery__placeholder">
                  <span>Photo slot</span>
                  <strong>{item.label}</strong>
                </div>
              )}
            </button>
          ))}
        </div>
      </div>

      {active ? (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={active.label}>
          <button type="button" className="lightbox__close" onClick={() => setActive(null)}>
            Close
          </button>
          <div className="lightbox__panel">
            {active.src ? <img src={active.src} alt={active.label} /> : (
              <div className="gallery__placeholder gallery__placeholder--large">
                <span>Awaiting photograph</span>
                <strong>{active.label}</strong>
              </div>
            )}
          </div>
        </div>
      ) : null}
    </section>
  )
}
