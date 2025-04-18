import './assets/styles/global.css'

//Components
import { Hero } from './features/Hero/Hero'
import { Skills } from './features/Skills/Skills'
import { About } from './features/About/About'
import { Projects } from './features/Projects/Projects'
import { Services } from './features/Services/Services'
import { Contact } from './features/Contact/Contact'

function App() {

  return (
    <>
      <Hero />
      <Skills />
      <About />
      <Projects />
      <Services />
      <Contact />
    </>
  )
}

export default App
