import CONFIG from '../data/config'
import useScrollReveal from '../hooks/useScrollReveal'

export default function AboutCollege() {
  const ref = useScrollReveal()

  return (
    <section id="about-niet" className="about-college" ref={ref}>
      <div className="container about-college__inner">
        <div className="about-college__logo fade-in">
          <img src={CONFIG.logos.niet} alt="NIET Greater Noida" />
        </div>
        <div>
          <span className="section-label fade-in">The Host Institution</span>
          <h2 className="section-title fade-in">About NIET</h2>
          <div className="prose fade-in fade-in-delay-1">
            <p>
              <strong>Noida Institute of Engineering and Technology (NIET), Greater Noida</strong> is
              the host campus for Cyber Invaders CTF. The event will be associated with the
              institute’s student cybersecurity community and campus facilities.
            </p>
            <p>
              Campus / venue address: <strong>{CONFIG.venue.full}</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
