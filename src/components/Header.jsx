import { useCallback, useEffect, useState } from 'react'
import CONFIG from '../data/config'
import RegisterButton from './RegisterButton'
import WhatsAppButton from './WhatsAppButton'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  const closeMenu = useCallback(() => setIsOpen(false), [])

  const handleNavClick = useCallback((e, href) => {
    e.preventDefault()
    setIsOpen(false)
    const target = document.querySelector(href)
    if (target) target.scrollIntoView({ behavior: 'smooth' })
  }, [])

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setIsOpen(false)
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [])

  return (
    <header className={`header${scrolled ? ' scrolled' : ''}`} role="banner">
      <div className="header__inner">
        <a href="#home" className="header__brand" onClick={(e) => handleNavClick(e, '#home')} aria-label="NIET Cyber Invaders CTF — Home">
          <img src={CONFIG.logos.niet} alt="NIET Greater Noida" className="header__logo header__logo--niet" />
          <img src={CONFIG.logos.cyberInvaders} alt="Cyber Invaders Club" className="header__logo header__logo--ci" />
        </a>

        <nav className="header__nav" aria-label="Primary">
          {CONFIG.navItems.map((item) => (
            <a key={item.href} href={item.href} className="header__nav-link" onClick={(e) => handleNavClick(e, item.href)}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="header__actions">
          <RegisterButton className="header__register btn--compact" />
          <WhatsAppButton className="header__register btn--compact" />
          <button
            type="button"
            className={`hamburger${isOpen ? ' active' : ''}`}
            onClick={() => setIsOpen((open) => !open)}
            aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isOpen}
            aria-controls="mobile-drawer"
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </button>
        </div>
      </div>

      <button
        type="button"
        className={`nav-backdrop${isOpen ? ' open' : ''}`}
        aria-hidden={!isOpen}
        tabIndex={-1}
        onClick={closeMenu}
      />

      <nav
        id="mobile-drawer"
        className={`nav-drawer${isOpen ? ' open' : ''}`}
        aria-label="Mobile"
      >
        <div className="nav-drawer__brand">
          <img src={CONFIG.logos.niet} alt="" className="header__logo header__logo--niet" />
          <img src={CONFIG.logos.cyberInvaders} alt="" className="header__logo header__logo--ci" />
        </div>
        <ul className="nav-drawer__list">
          {CONFIG.navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="nav-drawer__link"
                onClick={(e) => handleNavClick(e, item.href)}
                tabIndex={isOpen ? 0 : -1}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="nav-drawer__cta">
          <RegisterButton className="btn--block" />
          <WhatsAppButton className="btn--block" />
        </div>
      </nav>
    </header>
  )
}
