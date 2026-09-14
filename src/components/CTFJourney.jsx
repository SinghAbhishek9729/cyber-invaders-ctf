import { useScrollReveal } from './About'

const steps = [
  { num: '01', title: 'Register', desc: 'Sign up and secure your spot in the competition.' },
  { num: '02', title: 'Enter the Arena', desc: 'Access the CTF platform and prepare for challenges.' },
  { num: '03', title: 'Hunt for Flags', desc: 'Explore challenges across multiple categories.' },
  { num: '04', title: 'Crack the Challenges', desc: 'Apply your skills to solve security puzzles.' },
  { num: '05', title: 'Climb the Leaderboard', desc: 'Earn points and track your progress.' },
  { num: '06', title: 'Conquer', desc: 'Complete all challenges and claim your victory.' },
]

export default function CTFJourney() {
  const ref = useScrollReveal()

  return (
    <section id="journey" className="journey section--dark" ref={ref}>
      <div className="journey__inner">
        <span className="section-label fade-in">How It Works</span>
        <h2 className="section-title fade-in">Your CTF Journey</h2>
        <div className="journey__timeline">
          {steps.map((step) => (
            <div key={step.num} className="journey__step fade-in">
              <div className="journey__node">
                <span className="journey__node-dot" />
              </div>
              <span className="journey__step-number">{step.num}</span>
              <h3 className="journey__step-title">{step.title}</h3>
              <p className="journey__step-desc">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
