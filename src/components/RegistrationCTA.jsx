import CONFIG from '../data/config'
import RegisterButton from './RegisterButton'
import WhatsAppButton from './WhatsAppButton'
import useScrollReveal from '../hooks/useScrollReveal'

export default function RegistrationCTA() {
  const ref = useScrollReveal()

  return (
    <section id="register" className="cta" ref={ref}>
      <div className="container cta__inner">
        <span className="section-label section-label--light fade-in">Registration</span>
        <h2 className="cta__title fade-in">Ready to capture your first flag?</h2>
        <p className="cta__text fade-in fade-in-delay-1">
          Registration will open on Unstop. The official link will be enabled on this page
          as soon as it is announced.
        </p>
        <div className="cta__actions fade-in fade-in-delay-2">
          <RegisterButton className="btn--large" />
          <WhatsAppButton className="btn--large" />
          <a href="#faq" className="btn btn--ghost btn--large">Read FAQ</a>
        </div>
      </div>
    </section>
  )
}
