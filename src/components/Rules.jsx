import { useState } from 'react'
import { useScrollReveal } from './About'

const rules = [
  { title: 'Authorized Systems Only', content: 'Only test systems and platforms explicitly provided for the competition. Any attempts to access unauthorized systems will result in immediate disqualification.' },
  { title: 'No External Attacks', content: 'Attacks on external systems, networks, or any infrastructure not part of the competition environment are strictly prohibited.' },
  { title: 'Respect Infrastructure', content: 'Do not attempt to disrupt, degrade, or interfere with the competition infrastructure, scoring systems, or other participants\u2019 connections.' },
  { title: 'Fair Play', content: 'Respect all participants. Harassment, intimidation, or any form of unsportsmanlike conduct will not be tolerated.' },
  { title: 'Follow Organizer Instructions', content: 'All participants must follow instructions provided by the organizing team. The organizers\u2019 decision on all matters is final.' },
  { title: 'No Flag Sharing', content: 'Do not share flags, solutions, or hints with other participants during the active competition period unless explicitly permitted by the organizers.' },
  { title: 'Violations', content: 'Any violation of these rules may result in warnings, point deductions, or disqualification at the discretion of the organizers.' },
]

export default function Rules() {
  const ref = useScrollReveal()
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i)

  return (
    <section id="rules" className="rules section--darker" ref={ref}>
      <div className="rules__inner">
        <span className="section-label fade-in">Rules</span>
        <h2 className="section-title fade-in">Rules of the Arena</h2>
        <div className="rules__list fade-in fade-in-delay-1">
          {rules.map((rule, i) => (
            <div key={i} className={`rule-item${openIndex === i ? ' open' : ''}`}>
              <button
                className="rule-item__header"
                onClick={() => toggle(i)}
                aria-expanded={openIndex === i}
              >
                <span>{rule.title}</span>
                <span className="rule-item__icon" aria-hidden="true">+</span>
              </button>
              <div className="rule-item__content">
                <div className="rule-item__body">
                  <p>{rule.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <p className="rules__note fade-in fade-in-delay-2">
          Detailed competition rules will be announced by the organizers.
        </p>
      </div>
    </section>
  )
}
