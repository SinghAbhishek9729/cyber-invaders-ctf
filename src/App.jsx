import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import AboutClub from './components/AboutClub'
import AboutCTF from './components/AboutCTF'
import EventInfo from './components/EventInfo'
import WhyParticipate from './components/WhyParticipate'
import ChallengeArena from './components/ChallengeArena'
import CTFJourney from './components/CTFJourney'
import Rules from './components/Rules'
import RegistrationCTA from './components/RegistrationCTA'
import Gallery from './components/Gallery'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <About />
        <AboutClub />
        <AboutCTF />
        <EventInfo />
        <WhyParticipate />
        <ChallengeArena />
        <CTFJourney />
        <Rules />
        <RegistrationCTA />
        <Gallery />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
