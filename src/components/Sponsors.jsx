import CONFIG from '../data/config'
import useScrollReveal from '../hooks/useScrollReveal'

export default function Sponsors() {
  const ref = useScrollReveal()

  return (
    <section id="sponsors" className="sponsors" ref={ref}>
      <div className="container">
        <span className="section-label fade-in">Sponsors</span>
        <h2 className="section-title fade-in">Partners & sponsors</h2>
        <p className="section-lead fade-in">{CONFIG.sponsorsNote}</p>
        <div className="sponsors__grid">
          {CONFIG.sponsors.map((sponsor, i) => (
            <article key={sponsor.name} className={`sponsor-card fade-in fade-in-delay-${Math.min(i + 1, 3)}`}>
              <div className="sponsor-card__logo">{sponsor.slot}</div>
              <p>{sponsor.name}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
