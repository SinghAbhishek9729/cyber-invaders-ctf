import Header from './components/Header'
import Hero from './components/Hero'
import Highlights from './components/Highlights'
import About from './components/About'
import AboutCollege from './components/AboutCollege'
import AboutClub from './components/AboutClub'
import AboutCTF from './components/AboutCTF'
import EventInfo from './components/EventInfo'
import WhyParticipate from './components/WhyParticipate'
import ChallengeArena from './components/ChallengeArena'
import Prizes from './components/Prizes'
import CTFJourney from './components/CTFJourney'
import Rules from './components/Rules'
import Sponsors from './components/Sponsors'
import Gallery from './components/Gallery'
import FAQ from './components/FAQ'
import RegistrationCTA from './components/RegistrationCTA'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <About />
        <AboutCollege />
        <AboutClub />
        <Highlights />
        <WhyParticipate />
        <AboutCTF />
        <EventInfo />
        <ChallengeArena />
        <CTFJourney />
        <Rules />
        <Prizes />
        <Sponsors />
        <Gallery />
        <FAQ />
        <RegistrationCTA />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
