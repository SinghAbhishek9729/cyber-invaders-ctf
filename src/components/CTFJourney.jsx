import CONFIG from '../data/config'
import useScrollReveal from '../hooks/useScrollReveal'

export default function CTFJourney() {
  const ref = useScrollReveal()

  return (
    <section id="timeline" className="timeline" ref={ref}>
      <div className="container">
        <span className="section-label fade-in">Timeline</span>
        <h2 className="section-title fade-in">Event timeline</h2>
        <ol className="timeline__list">
          {CONFIG.timeline.map((step, i) => (
            <li key={step.title} className={`timeline__item fade-in fade-in-delay-${Math.min(i + 1, 3)}`}>
              <span className="timeline__index">{String(i + 1).padStart(2, '0')}</span>
              <h3>{step.title}</h3>
              <p>{step.detail}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
