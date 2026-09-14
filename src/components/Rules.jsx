import { useState } from 'react'
import CONFIG from '../data/config'
import useScrollReveal from '../hooks/useScrollReveal'

export default function Rules() {
  const ref = useScrollReveal()
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="rules" className="rules section-light" ref={ref}>
      <div className="container rules__layout">
        <div>
          <span className="section-label fade-in">Rules</span>
          <h2 className="section-title fade-in">Competition framework</h2>
          <p className="section-lead fade-in">{CONFIG.rulesNote}</p>
        </div>
        <div className="accordion fade-in fade-in-delay-1">
          {CONFIG.rules.map((rule, i) => (
            <div key={rule.title} className={`accordion__item${openIndex === i ? ' open' : ''}`}>
              <button
                type="button"
                className="accordion__header"
                onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                aria-expanded={openIndex === i}
              >
                <span>{rule.title}</span>
                <span className="accordion__icon" aria-hidden="true" />
              </button>
              <div className="accordion__panel">
                <p>{rule.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
