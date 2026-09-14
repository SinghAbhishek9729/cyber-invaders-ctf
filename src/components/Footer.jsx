import CONFIG from '../data/config'
import RegisterButton from './RegisterButton'
import WhatsAppButton from './WhatsAppButton'

export default function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="container footer__grid">
        <div className="footer__brand">
          <div className="footer__logos">
            <img src={CONFIG.logos.niet} alt="NIET" />
            <img src={CONFIG.logos.cyberInvaders} alt="Cyber Invaders" className="footer__ci" />
          </div>
          <p className="footer__name">{CONFIG.organizer}</p>
          <p className="footer__copy">{CONFIG.institution}</p>
          <p className="footer__copy">{CONFIG.venue.full}</p>
        </div>

        <div>
          <h3 className="footer__heading">Quick links</h3>
          <nav className="footer__links" aria-label="Footer">
            {CONFIG.navItems.map((item) => (
              <a key={item.href} href={item.href}>{item.label}</a>
            ))}
          </nav>
        </div>

        <div>
          <h3 className="footer__heading">Event</h3>
          <ul className="footer__meta">
            <li>{CONFIG.eventName}</li>
            <li>Date: {CONFIG.dateShort}</li>
            <li>Registration: {CONFIG.registrationStatus}</li>
          </ul>
        </div>

        <div>
          <h3 className="footer__heading">Get involved</h3>
          <RegisterButton className="btn--compact" />
          <WhatsAppButton className="btn--compact" />
          <p className="footer__hint">Official social channels will be linked here.</p>
        </div>
      </div>
      <div className="container footer__bottom">
        <p>© {CONFIG.copyrightYear} {CONFIG.organizer}. {CONFIG.institutionShort}.</p>
        <p>{CONFIG.clubTagline}</p>
      </div>
    </footer>
  )
}
