import { useScrollReveal } from './About'
import CONFIG from '../data/config'

const tags = ['Cybersecurity', 'Ethical Hacking', 'CTF Culture', 'Workshops', 'Peer Learning', 'Community']

export default function AboutClub() {
  const ref = useScrollReveal()

  return (
    <section id="about-club" className="about-club section--dark" ref={ref}>
      <div className="about-club__inner">
        <div className="about-club__logo-wrap fade-in">
          <img
            src={CONFIG.logos.cyberInvaders}
            alt="Cyber Invaders Logo"
            className="about-club__logo"
          />
        </div>
        <div>
          <span className="section-label fade-in">About</span>
          <h2 className="section-title fade-in">About Cyber Invaders</h2>
          <div className="about-club__text fade-in fade-in-delay-1">
            <p>
              <strong>Cyber Invaders</strong> is a student-driven cybersecurity community at the
              Noida Institute of Engineering and Technology (NIET), Greater Noida. Built around
              a shared passion for security and technology, the club brings together students who
              are curious about how systems work — and how they can be made more secure.
            </p>
            <p>
              Through hands-on workshops, collaborative CTF practice sessions, and peer-led
              learning initiatives, Cyber Invaders creates a space where members can explore
              ethical hacking, develop technical skills, and stay current with the evolving
              landscape of cybersecurity.
            </p>
            <p>
              Whether it's analysing vulnerabilities, practising forensic techniques, or
              preparing for competitive CTF events, the club fosters a culture of exploration,
              responsibility, and continuous growth in cybersecurity.
            </p>
          </div>
          <div className="about-club__tags fade-in fade-in-delay-2">
            {tags.map((tag) => (
              <span key={tag} className="about-club__tag">{tag}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
