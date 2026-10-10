import { About } from './components/sections/About'
import { Contact } from './components/sections/Contact'
import { Hero } from './components/sections/Hero'
import { Manifesto } from './components/sections/Manifesto'
import { Mission } from './components/sections/Mission'
import { Projects } from './components/sections/Projects'
import { ValuesSection } from './components/sections/ValuesSection'
import { Footer } from './components/layout/Footer'
import { Nav } from './components/layout/Nav'

export default function App() {
  return (
    <div className="min-h-screen">
      <Nav />
      <Hero />
      <About />
      <Mission />
      <ValuesSection />
      <Projects />
      <Manifesto />
      <Contact />
      <Footer />
    </div>
  )
}
