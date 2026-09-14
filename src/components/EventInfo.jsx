import { useScrollReveal } from './About'
import CONFIG from '../data/config'

const items = [
  { value: CONFIG.date, label: 'Event Date' },
  { value: CONFIG.region, label: 'Event Region' },
  { value: 'CTF', label: 'Event Format' },
  { value: 'Colleges & Universities', label: 'Target Community' },
]

export default function EventInfo() {
  const ref = useScrollReveal()

  return (
    <section id="event" className="event-info section--darkest" ref={ref}>
      <div className="event-info__inner">
        <span className="section-label fade-in">Event</span>
        <h2 className="section-title fade-in">The Event</h2>
        <div className="event-info__grid">
          {items.map((item, i) => (
            <div key={i} className={`event-info__card fade-in fade-in-delay-${Math.min(i + 1, 3)}`}>
              <div className="event-info__card-value">{item.value}</div>
              <div className="event-info__card-label">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
