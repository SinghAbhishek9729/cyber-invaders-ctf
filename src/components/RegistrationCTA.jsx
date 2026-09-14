import { useScrollReveal } from './About'
import CONFIG from '../data/config'

export default function RegistrationCTA() {
  const ref = useScrollReveal()

  return (
    <section id="register" className="registration-cta section--darkest" ref={ref}>
      <div className="registration-cta__bg" aria-hidden="true" />
      <div className="registration-cta__content">
        <span className="section-label fade-in" style={{ justifyContent: 'center' }}>Register</span>
        <h2 className="registration-cta__title fade-in">
          Ready to Capture Your First Flag?
        </h2>
        <p className="registration-cta__text fade-in fade-in-delay-1">
          Bring your curiosity. Sharpen your skills. Enter the arena.
        </p>
        <div className="registration-cta__actions fade-in fade-in-delay-2">
          <a href={CONFIG.registrationUrl} className="btn btn--primary btn--large">
            Register Now
          </a>
          <a href="#about-ctf" className="btn btn--secondary btn--large">
            Explore the CTF
          </a>
        </div>
      </div>
    </section>
  )
}
