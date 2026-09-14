import { useScrollReveal } from './About'
import CONFIG from '../data/config'

export default function AboutCTF() {
  const ref = useScrollReveal()

  return (
    <section id="about-ctf" className="about-ctf section--darker" ref={ref}>
      <div className="about-ctf__inner">
        <span className="section-label fade-in">The CTF</span>
        <h2 className="section-title fade-in">About the CTF</h2>
        <div className="about-ctf__text fade-in fade-in-delay-1">
          <p>
            A <strong>Capture The Flag</strong> (CTF) competition is a cybersecurity challenge
            where participants solve security-related puzzles across multiple categories. Each
            challenge contains a hidden piece of text — a "flag" — that proves you've
            successfully solved the problem.
          </p>
          <p>
            Challenges range from investigating web vulnerabilities and decrypting encoded
            messages to analysing network traffic and recovering hidden data from files.
            Participants earn points for each flag captured, with harder challenges worth more.
            It's a test of analytical thinking, technical depth, and creative problem-solving.
          </p>
          <p>
            Whether you're exploring security for the first time or sharpening skills you
            already have, a CTF provides a structured, competitive environment to learn by
            doing — the most effective way to build real cybersecurity expertise.
          </p>
        </div>
        <p className="about-ctf__categories-label fade-in fade-in-delay-2">
          Example Challenge Categories
        </p>
        <div className="about-ctf__categories fade-in fade-in-delay-2">
          {CONFIG.challengeCategories.map((cat) => (
            <span key={cat.id} className="about-ctf__category">{cat.name}</span>
          ))}
        </div>
      </div>
    </section>
  )
}
