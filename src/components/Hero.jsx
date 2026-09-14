import CONFIG from '../data/config'
import RegisterButton from './RegisterButton'
import WhatsAppButton from './WhatsAppButton'

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero__bg" aria-hidden="true">
        <div className="hero__grid" />
        <div className="hero__glow" />
        <div className="hero__scan" />
      </div>

      <div className="hero__content">
        <p className="hero__kicker">{CONFIG.presents}</p>

        <h1 className="hero__title">
          <span className="hero__title-main">{CONFIG.eventName}</span>
          <span className="hero__title-sub">{CONFIG.eventType}</span>
        </h1>

        <p className="hero__tagline">{CONFIG.tagline}</p>

        <p className="hero__description">{CONFIG.description}</p>

        <ul className="hero__meta">
          <li>
            <span className="hero__meta-label">Date</span>
            <strong>{CONFIG.date}</strong>
          </li>
          <li>
            <span className="hero__meta-label">Venue</span>
            <strong>{CONFIG.venue.name}</strong>
          </li>
          <li>
            <span className="hero__meta-label">Location</span>
            <strong>{CONFIG.venue.city}</strong>
          </li>
        </ul>

        <div className="hero__actions">
          <RegisterButton className="btn--large" />
          <WhatsAppButton className="btn--large" />
          <a href="#themes" className="btn btn--ghost btn--large">Explore CTF</a>
        </div>
      </div>
    </section>
  )
}
