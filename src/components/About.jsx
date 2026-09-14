import { useRef, useEffect } from 'react'

function useScrollReveal() {
  const ref = useRef(null)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.fade-in').forEach((el) => {
              el.classList.add('visible')
            })
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])
  return ref
}

export default function About() {
  const ref = useScrollReveal()

  return (
    <section id="about" className="about section--darker" ref={ref}>
      <div className="about__content">
        <span className="section-label fade-in">About</span>
        <h2 className="section-title fade-in">About the Competition</h2>
        <div className="about__text fade-in fade-in-delay-1">
          <p>
            <strong>Cyber Invaders CTF</strong> is a student-focused cybersecurity competition
            designed to challenge participants through problem solving, security analysis,
            investigation and hands-on technical challenges. The competition brings together
            students from diverse technical backgrounds to test their skills in a structured,
            competitive environment.
          </p>
          <p>
            Organized by the <strong>NIET Cyber Invaders Club</strong>, this event is intended to
            connect students across colleges and universities in Greater Noida — creating a shared
            platform for learning, collaboration, and friendly competition in the field of
            cybersecurity.
          </p>
          <p>
            Whether you're just beginning to explore security concepts or already competing in CTFs,
            Cyber Invaders CTF offers a range of challenges designed to test analytical thinking,
            technical depth, and creative problem-solving at every level.
          </p>
        </div>
      </div>
    </section>
  )
}

export { useScrollReveal }
