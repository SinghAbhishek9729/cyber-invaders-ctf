import { useEffect, useRef } from 'react'
import CONFIG from '../data/config'

export default function Hero() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.fade-in').forEach((el) => {
              el.classList.add('visible')
            })
          }
        })
      },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="home" className="hero" ref={sectionRef}>
      <div className="hero__bg" aria-hidden="true">
        <div className="hero__grid" />
        <div className="hero__scanlines" />
        <div className="hero__gradient" />
        <div className="hero__noise" />
        <div className="hero__circuit">
          <div className="hero__circuit-line hero__circuit-line--h1" />
          <div className="hero__circuit-line hero__circuit-line--h2" />
          <div className="hero__circuit-line hero__circuit-line--h3" />
          <div className="hero__circuit-line hero__circuit-line--v1" />
          <div className="hero__circuit-line hero__circuit-line--v2" />
          <div className="hero__circuit-node hero__circuit-node--1" />
          <div className="hero__circuit-node hero__circuit-node--2" />
          <div className="hero__circuit-node hero__circuit-node--3" />
        </div>
      </div>

      <div className="hero__content">
        <p className="hero__presents fade-in">
          {CONFIG.organizer} Presents
        </p>

        <img
          src={CONFIG.logos.cyberInvaders}
          alt="Cyber Invaders Logo"
          className="hero__logo fade-in fade-in-delay-1"
        />

        <div className="hero__title-group fade-in fade-in-delay-1">
          <h1 className="hero__title">
            CYBER INVADERS
            <span className="hero__title-ctf">CTF</span>
          </h1>
        </div>

        <p className="hero__tagline fade-in fade-in-delay-2">
          {CONFIG.tagline}
        </p>

        <div className="hero__meta fade-in fade-in-delay-2">
          <span className="hero__meta-item">
            <span className="hero__meta-dot" aria-hidden="true" />
            {CONFIG.date}
          </span>
          <span className="hero__meta-item">
            <span className="hero__meta-dot" aria-hidden="true" />
            {CONFIG.region}
          </span>
        </div>

        <p className="hero__description fade-in fade-in-delay-2">
          {CONFIG.description}
        </p>

        <div className="hero__actions fade-in fade-in-delay-3">
          <a href={CONFIG.registrationUrl} className="btn btn--primary btn--large">
            Register Now
          </a>
          <a href="#about-ctf" className="btn btn--secondary btn--large">
            Explore the CTF
          </a>
        </div>
      </div>
    </section>
  )
}
