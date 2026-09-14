import CONFIG from '../data/config'

export default function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="footer__inner">
        <div className="footer__top">
          <div className="footer__logos">
            <img src={CONFIG.logos.niet} alt="NIET" className="footer__logo" />
            <img src={CONFIG.logos.cyberInvaders} alt="Cyber Invaders" className="footer__logo footer__logo--ci" />
          </div>
          <p className="footer__brand">NIET CYBER INVADERS CLUB</p>
          <p className="footer__tagline">{CONFIG.tagline}</p>
          <p className="footer__meta">{CONFIG.date} | {CONFIG.region}</p>
        </div>
        <nav className="footer__nav" aria-label="Footer navigation">
          {CONFIG.navItems.map((item) => (
            <a key={item.href} href={item.href} className="footer__nav-link">
              {item.label}
            </a>
          ))}
        </nav>
        <p className="footer__copyright">
          © {CONFIG.copyrightYear} {CONFIG.organizer}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
