import CONFIG from '../data/config'
import useScrollReveal from '../hooks/useScrollReveal'

const socials = [
  { name: 'Instagram', key: 'instagram' },
  { name: 'LinkedIn', key: 'linkedin' },
  { name: 'Discord', key: 'discord' },
  { name: 'Twitter / X', key: 'twitter' },
]

export default function Contact() {
  const ref = useScrollReveal()
  const email = CONFIG.contact.email?.trim()
  const phone = CONFIG.contact.phone?.trim()
  const coordinator = CONFIG.contact.coordinator?.trim()

  return (
    <section id="contact" className="contact section-light" ref={ref}>
      <div className="container">
        <span className="section-label fade-in">Contact</span>
        <h2 className="section-title fade-in">Connect with the organizers</h2>
        <div className="contact__grid">
          <article className="contact-card fade-in">
            <p className="info-card__label">Organizer</p>
            <h3>{CONFIG.organizer}</h3>
            <p>{CONFIG.institution}</p>
          </article>
          <article className="contact-card fade-in fade-in-delay-1">
            <p className="info-card__label">Coordinator</p>
            <h3>{coordinator || 'To Be Announced'}</h3>
            <p>Name will be published with official contacts.</p>
          </article>
          <article className="contact-card fade-in fade-in-delay-2">
            <p className="info-card__label">Email</p>
            <h3>{email || 'To Be Announced'}</h3>
            {email ? <a href={`mailto:${email}`}>{email}</a> : <p>Official email will be published soon.</p>}
          </article>
          <article className="contact-card fade-in fade-in-delay-3">
            <p className="info-card__label">Phone</p>
            <h3>{phone || 'To Be Announced'}</h3>
            <p>Do not use unofficial numbers until organizers confirm.</p>
          </article>
        </div>
        <div className="contact__socials fade-in">
          {socials.map((social) => {
            const href = CONFIG.socialLinks[social.key]?.trim()
            if (!href) {
              return (
                <span key={social.key} className="social-chip social-chip--pending">
                  {social.name} — TBA
                </span>
              )
            }
            return (
              <a key={social.key} href={href} className="social-chip" target="_blank" rel="noopener noreferrer">
                {social.name}
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
