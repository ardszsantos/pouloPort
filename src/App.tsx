import { Footer } from './components/footer'
import { Navbar } from './components/navBar'
import { ContactPage } from './pages/contact'
import { HeroPage } from './pages/heroPage'
import { JourneyPage } from './pages/journey'
import { TestimonialsPage } from './pages/testimonials'
import { WorkPage } from './pages/workPage'


function App() {

  return (
    <>
      <Navbar/>
      <HeroPage/>
      <JourneyPage/>
      <WorkPage/>
      <TestimonialsPage/>
      <ContactPage/>
      <Footer/>
    </>
  )
}

export default App
