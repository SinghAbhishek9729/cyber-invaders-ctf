import { useScrollReveal } from './About'
import CONFIG from '../data/config'

const socials = [
  { name: 'Instagram', key: 'instagram' },
  { name: 'LinkedIn', key: 'linkedin' },
  { name: 'Discord', key: 'discord' },
  { name: 'Twitter', key: 'twitter' },
]

export default function Contact() {
  const ref = useScrollReveal()

  return (
    <section id="contact" className="contact section--dark" ref={ref}>
      <div className="contact__inner">
        <span className="section-label fade-in">Contact</span>
        <h2 className="section-title fade-in">Connect With Us</h2>
        <div className="contact__card fade-in fade-in-delay-1">
          <div className="contact__info">
            <div className="contact__info-item">
              <p className="contact__info-label">Organizer</p>
              <p className="contact__info-value">{CONFIG.organizer}</p>
            </div>
            <div className="contact__info-item">
              <p className="contact__info-label">Institution</p>
              <p className="contact__info-value">{CONFIG.institution}</p>
            </div>
            <div className="contact__info-item">
              <p className="contact__info-label">Location</p>
              <p className="contact__info-value">{CONFIG.location}</p>
            </div>
          </div>
          <div className="contact__socials">
            {socials.map((s) => (
              <a
                key={s.key}
                href={CONFIG.socialLinks[s.key] || '#'}
                className={`contact__social-link${!CONFIG.socialLinks[s.key] ? ' contact__social-link--disabled' : ''}`}
                aria-label={s.name}
              >
                {s.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
