import useScrollReveal from '../hooks/useScrollReveal'

export default function AboutCTF() {
  const ref = useScrollReveal()

  return (
    <section id="about-ctf" className="about-ctf section-light" ref={ref}>
      <div className="container">
        <span className="section-label fade-in">How a CTF Works</span>
        <h2 className="section-title fade-in">Capture The Flag, explained</h2>
        <div className="prose prose--wide fade-in fade-in-delay-1">
          <p>
            In a Capture The Flag competition, each challenge hides a short secret called a
            <strong> flag</strong>. Finding that flag — through analysis, careful testing, and
            documented problem-solving — earns points on the scoreboard.
          </p>
          <p>
            Challenges typically span several domains. Difficulty varies so newer students can
            start learning while experienced teams still have harder problems to chase.
          </p>
        </div>
      </div>
    </section>
  )
}
