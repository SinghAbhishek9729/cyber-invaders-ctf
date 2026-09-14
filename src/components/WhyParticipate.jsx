import CONFIG from '../data/config'
import useScrollReveal from '../hooks/useScrollReveal'

export default function WhyParticipate() {
  const ref = useScrollReveal()

  return (
    <section id="why-participate" className="why-participate section-light" ref={ref}>
      <div className="container">
        <span className="section-label fade-in">Why Participate</span>
        <h2 className="section-title fade-in">Why enter the arena?</h2>
        <div className="card-grid card-grid--3">
          {CONFIG.whyParticipate.map((item, i) => (
            <article key={item.title} className={`plain-card fade-in fade-in-delay-${Math.min(i + 1, 3)}`}>
              <span className="plain-card__index">{String(i + 1).padStart(2, '0')}</span>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              {item.placeholder ? <span className="chip chip--muted">To be confirmed</span> : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
