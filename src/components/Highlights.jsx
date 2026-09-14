import CONFIG from '../data/config'
import useScrollReveal from '../hooks/useScrollReveal'

export default function Highlights() {
  const ref = useScrollReveal()

  return (
    <section id="highlights" className="highlights" ref={ref}>
      <div className="container">
        <div className="highlights__intro fade-in">
          <span className="section-label">Event Highlights</span>
          <h2 className="section-title">Built for a flagship CTF weekend</h2>
        </div>
        <div className="highlights__grid">
          {CONFIG.statistics.map((stat, i) => (
            <article key={stat.label} className={`stat-card fade-in fade-in-delay-${Math.min(i + 1, 3)}`}>
              <p className="stat-card__value">{stat.value}</p>
              <p className="stat-card__label">{stat.label}</p>
              {stat.placeholder ? <span className="stat-card__badge">Placeholder</span> : null}
            </article>
          ))}
        </div>
        <p className="section-note fade-in">{CONFIG.statisticsNote}</p>
      </div>
    </section>
  )
}
