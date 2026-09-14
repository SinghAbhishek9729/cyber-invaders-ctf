import { useState, useEffect, useCallback } from 'react'
import CONFIG from '../data/config'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  const handleNavClick = useCallback((e, href) => {
    e.preventDefault()
    setIsOpen(false)
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }, [])

  const handleKeyDown = useCallback((e) => {
    if (e.key === 'Escape') setIsOpen(false)
  }, [])

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [handleKeyDown])

  return (
    <header className={`header${scrolled ? ' scrolled' : ''}`} role="banner">
      <div className="header__inner">
        <a href="#home" className="header__logo" aria-label="NIET Greater Noida - Home">
          <img src={CONFIG.logos.niet} alt="NIET Greater Noida" />
          <span className="header__logo-divider" aria-hidden="true" />
          <span className="header__brand-text">CYBER INVADERS</span>
        </a>

        <button
          className={`hamburger${isOpen ? ' active' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isOpen}
          aria-controls="nav-overlay"
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </button>
      </div>

      <nav
        id="nav-overlay"
        className={`nav-overlay${isOpen ? ' open' : ''}`}
        role="navigation"
        aria-label="Main navigation"
      >
        <ul className="nav-overlay__list">
          {CONFIG.navItems.map((item) => (
            <li key={item.href} className="nav-overlay__item">
              <a
                href={item.href}
                className="nav-overlay__link"
                onClick={(e) => handleNavClick(e, item.href)}
                tabIndex={isOpen ? 0 : -1}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <p className="nav-overlay__tagline" aria-hidden="true">{CONFIG.tagline}</p>
      </nav>
    </header>
  )
}
