import CONFIG from '../data/config'
import useScrollReveal from '../hooks/useScrollReveal'

export default function EventInfo() {
  const ref = useScrollReveal()

  return (
    <section id="event" className="event-info" ref={ref}>
      <div className="container">
        <span className="section-label fade-in">Event Details</span>
        <h2 className="section-title fade-in">What you need to know</h2>
        <div className="event-info__grid">
          {CONFIG.eventDetails.map((item, i) => (
            <article key={item.id} className={`info-card fade-in fade-in-delay-${Math.min(i + 1, 3)}`}>
              <p className="info-card__label">{item.label}</p>
              <h3 className="info-card__value">{item.value}</h3>
              <p className="info-card__note">{item.note}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
