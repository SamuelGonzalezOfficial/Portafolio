import './assets/styles/global.css'

//Components
import { Hero } from './features/Hero/Hero'
import { Skills } from './features/Skills/Skills'
import { About } from './features/About/About'
function App() {

  return (
    <>
      <Hero />
      <Skills />
      <About />
    </>
  )
}

export default App
