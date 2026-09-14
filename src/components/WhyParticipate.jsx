import { useScrollReveal } from './About'

const reasons = [
  { num: '01', title: 'Test Your Skills', desc: 'Put your cybersecurity knowledge to the test against real-world inspired challenges designed to push your technical boundaries.' },
  { num: '02', title: 'Solve Cyber Challenges', desc: 'Tackle security puzzles spanning web exploitation, cryptography, forensics, and more — each requiring a different approach.' },
  { num: '03', title: 'Think Critically', desc: 'Develop the analytical thinking and methodical problem-solving that defines effective security professionals.' },
  { num: '04', title: 'Learn Through Practice', desc: 'Gain hands-on experience that goes beyond theory. Every challenge is a lesson in how systems work and how they break.' },
  { num: '05', title: 'Compete With Other Students', desc: 'Measure your progress against peers from colleges and universities across Greater Noida in a fair, structured competition.' },
  { num: '06', title: 'Build Your Cybersecurity Journey', desc: 'Take a meaningful step in your security career. Competition experience demonstrates initiative, skill, and dedication.' },
]

export default function WhyParticipate() {
  const ref = useScrollReveal()

  return (
    <section id="why-participate" className="why-participate section--dark" ref={ref}>
      <div className="why-participate__inner">
        <span className="section-label fade-in">Why Participate</span>
        <h2 className="section-title fade-in">Why Enter the Arena?</h2>
        <div className="why-participate__grid">
          {reasons.map((r, i) => (
            <div key={r.num} className={`why-card fade-in fade-in-delay-${Math.min(i + 1, 3)}`}>
              <div className="why-card__number">{r.num}</div>
              <h3 className="why-card__title">{r.title}</h3>
              <p className="why-card__desc">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
