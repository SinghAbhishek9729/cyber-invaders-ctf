import CONFIG from '../data/config'
import useScrollReveal from '../hooks/useScrollReveal'

const tags = ['Cybersecurity', 'CTF Community', 'Workshops', 'Peer Learning']

export default function AboutClub() {
  const ref = useScrollReveal()

  return (
    <section id="about-club" className="about-club" ref={ref}>
      <div className="container about-club__inner">
        <div className="about-club__logo-wrap fade-in">
          <img src={CONFIG.logos.cyberInvaders} alt="Cyber Invaders Club" className="about-club__logo" />
        </div>
        <div>
          <span className="section-label fade-in">The Organizing Club</span>
          <h2 className="section-title fade-in">About Cyber Invaders</h2>
          <div className="prose fade-in fade-in-delay-1">
            <p>
              <strong>Cyber Invaders</strong> is the student cybersecurity and CTF community at NIET
              Greater Noida. The club organizes this event to give students a focused space to
              practice ethical security skills, learn from peers, and compete in a structured format.
            </p>
            <p>
              The club identity is built around curiosity, responsible exploration, and
              continuous learning — not around unverified claims or unpublished achievements.
            </p>
          </div>
          <div className="about-club__tags fade-in fade-in-delay-2">
            {tags.map((tag) => (
              <span key={tag} className="chip">{tag}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
