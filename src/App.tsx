import { Navbar } from './components/navBar'
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
    </>
  )
}

export default App
