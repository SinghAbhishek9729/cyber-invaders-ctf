import { useState } from 'react'
import { useScrollReveal } from './About'
import CONFIG from '../data/config'

const faqs = [
  { q: 'What is a CTF?', a: 'A Capture The Flag (CTF) competition is a cybersecurity challenge where participants solve security-related puzzles and tasks to find hidden "flags" — secret strings that prove you have solved the challenge.' },
  { q: 'Who can participate?', a: 'The competition is open to students from colleges and universities across Greater Noida. Both beginners and experienced participants are welcome.' },
  { q: 'Do I need prior cybersecurity experience?', a: 'No prior experience is required. The competition features challenges at various difficulty levels, making it accessible to newcomers while still challenging experienced participants.' },
  { q: 'What challenges can I expect?', a: 'Challenges may span categories such as web security, cryptography, digital forensics, OSINT, reverse engineering, network security, steganography, and more. Final categories will be announced by the organizers.' },
  { q: 'When is the event?', a: `The event is scheduled for ${CONFIG.date}. Further timing details will be announced soon.` },
  { q: 'Where is the event?', a: `The event will be held in ${CONFIG.region}. The specific venue details will be announced soon.` },
  { q: 'How can I register?', a: 'Registration details will be announced soon. Stay connected with NIET Cyber Invaders Club for updates.' },
  { q: 'Will detailed rules be announced?', a: 'Yes, detailed competition rules and guidelines will be shared by the organizers before the event.' },
]

export default function FAQ() {
  const ref = useScrollReveal()
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i)

  return (
    <section id="faq" className="faq section--darker" ref={ref}>
      <div className="faq__inner">
        <span className="section-label fade-in">FAQ</span>
        <h2 className="section-title fade-in">Frequently Asked Questions</h2>
        <div className="faq__list fade-in fade-in-delay-1">
          {faqs.map((faq, i) => (
            <div key={i} className={`faq-item${openIndex === i ? ' open' : ''}`}>
              <button
                className="faq-item__question"
                onClick={() => toggle(i)}
                aria-expanded={openIndex === i}
              >
                <span>{faq.q}</span>
                <span className="faq-item__icon" aria-hidden="true">+</span>
              </button>
              <div className="faq-item__answer">
                <div className="faq-item__body">
                  <p>{faq.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
