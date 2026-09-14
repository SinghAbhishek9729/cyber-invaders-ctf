import CONFIG from '../data/config'
import useScrollReveal from '../hooks/useScrollReveal'

export default function Prizes() {
  const ref = useScrollReveal()

  return (
    <section id="prizes" className="prizes section-light" ref={ref}>
      <div className="container">
        <span className="section-label fade-in">Prizes</span>
        <h2 className="section-title fade-in">Prize pool — {CONFIG.prizePool}</h2>
        <div className="prizes__grid">
          {CONFIG.prizes.map((prize, i) => (
            <article key={prize.label} className={`prize-card fade-in fade-in-delay-${Math.min(i + 1, 3)}${i === 0 ? ' prize-card--lead' : ''}`}>
              <p className="prize-card__place">{prize.place}</p>
              <h3>{prize.label}</h3>
              <p className="prize-card__value">{prize.value}</p>
            </article>
          ))}
        </div>
        <p className="section-note fade-in">{CONFIG.prizesNote}</p>
      </div>
    </section>
  )
}
