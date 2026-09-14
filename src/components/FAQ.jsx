import { useState } from 'react'
import CONFIG from '../data/config'
import useScrollReveal from '../hooks/useScrollReveal'

export default function FAQ() {
  const ref = useScrollReveal()
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="faq" className="faq" ref={ref}>
      <div className="container">
        <span className="section-label fade-in">FAQ</span>
        <h2 className="section-title fade-in">Frequently asked questions</h2>
        <div className="accordion accordion--wide fade-in fade-in-delay-1">
          {CONFIG.faqs.map((faq, i) => (
            <div key={faq.q} className={`accordion__item${openIndex === i ? ' open' : ''}`}>
              <button
                type="button"
                className="accordion__header"
                onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                aria-expanded={openIndex === i}
              >
                <span>{faq.q}</span>
                <span className="accordion__icon" aria-hidden="true" />
              </button>
              <div className="accordion__panel">
                <p>{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
