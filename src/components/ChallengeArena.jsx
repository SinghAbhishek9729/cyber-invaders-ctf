import CONFIG from '../data/config'
import useScrollReveal from '../hooks/useScrollReveal'

const ICONS = {
  web: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <path d="M3 12h18M12 3c2.5 3 3.8 6 3.8 9s-1.3 6-3.8 9c-2.5-3-3.8-6-3.8-9s1.3-6 3.8-9z" fill="none" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  ),
  crypto: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="4" y="10" width="16" height="10" rx="2" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <path d="M8 10V8a4 4 0 0 1 8 0v2" fill="none" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  ),
  forensics: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="10" cy="10" r="6" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <path d="M15 15l6 6" fill="none" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  ),
  osint: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="3" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <path d="M12 5v2M12 17v2M5 12h2M17 12h2M7.2 7.2l1.4 1.4M15.4 15.4l1.4 1.4M16.8 7.2l-1.4 1.4M8.6 15.4l-1.4 1.4" fill="none" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  ),
  re: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M8 7h8M8 12h5M8 17h8" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <rect x="3" y="4" width="18" height="16" rx="2" fill="none" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  ),
  pwn: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 16c2-6 6-9 8-9s6 3 8 9" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <path d="M12 7V4M9 20h6" fill="none" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  ),
  stego: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="6" width="18" height="13" rx="2" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="9" cy="12" r="2" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <path d="M13 16l2.2-2.6 3.8 4.6" fill="none" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  ),
  network: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="6" cy="12" r="2.2" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="18" cy="7" r="2.2" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="18" cy="17" r="2.2" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <path d="M8 12h7M16.4 8.6l-8-3M16.4 15.4l-8 3" fill="none" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  ),
}

export default function ChallengeArena() {
  const ref = useScrollReveal()

  return (
    <section id="themes" className="themes" ref={ref}>
      <div className="container">
        <span className="section-label fade-in">Themes / Domains</span>
        <h2 className="section-title fade-in">CTF categories</h2>
        <p className="section-lead fade-in">{CONFIG.themesNote}</p>
        <div className="card-grid card-grid--4">
          {CONFIG.themes.map((theme, i) => (
            <article key={theme.id} className={`theme-card fade-in fade-in-delay-${Math.min(i + 1, 3)}`}>
              <div className="theme-card__icon">{ICONS[theme.id] || ICONS.web}</div>
              <h3>{theme.name}</h3>
              <p>{theme.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
