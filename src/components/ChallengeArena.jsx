import { useScrollReveal } from './About'
import CONFIG from '../data/config'

export default function ChallengeArena() {
  const ref = useScrollReveal()

  return (
    <section id="challenges" className="challenges section--darker" ref={ref}>
      <div className="challenges__inner">
        <span className="section-label fade-in">Challenges</span>
        <h2 className="section-title fade-in">The Challenge Arena</h2>
        <p className="challenges__disclaimer fade-in">
          * Example categories — final challenges to be announced
        </p>
        <div className="challenges__grid">
          {CONFIG.challengeCategories.map((cat, i) => (
            <div key={cat.id} className={`challenge-card fade-in fade-in-delay-${Math.min(i + 1, 3)}`}>
              <div className="challenge-card__header">
                <span className="challenge-card__id">{cat.id}</span>
                <span className="challenge-card__prompt">{'>_'}</span>
              </div>
              <h3 className="challenge-card__name">{cat.name}</h3>
              <p className="challenge-card__desc">{cat.description}</p>
              <p className="challenge-card__flag">{'flag{...}'}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
