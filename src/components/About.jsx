import useScrollReveal from '../hooks/useScrollReveal'

export default function About() {
  const ref = useScrollReveal()

  return (
    <section id="about" className="about section-light" ref={ref}>
      <div className="container about__grid">
        <div>
          <span className="section-label fade-in">About the Event</span>
          <h2 className="section-title fade-in">NIET Cyber Invaders CTF Hackathon</h2>
        </div>
        <div className="about__text fade-in fade-in-delay-1">
          <p>
            <strong>Cyber Invaders CTF</strong> is a student-focused cybersecurity competition
            designed around Capture The Flag challenges. Teams work through security puzzles,
            investigate digital evidence, and compete on a shared scoreboard.
          </p>
          <p>
            The event is organized by the <strong>NIET Cyber Invaders Club</strong> at the
            Noida Institute of Engineering and Technology, Greater Noida. It is intended as a
            campus platform for learning, collaboration, and ethical competition.
          </p>
          <p>
            Official schedule, prize details, and registration logistics will be published as
            they are confirmed. Until then, this website is the home for the event identity,
            structure, and updates.
          </p>
        </div>
      </div>
    </section>
  )
}
