import Header from './components/Header'
import About from './components/About'
import Hero from './components/Hero'
import Innovation from './components/Innovation'
import Projects from './components/Projects'
import Services from './components/Services'
import { useReveal } from './hooks/useReveal'

export default function App() {
  useReveal()

  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <Innovation />
      </main>
    </>
  )
}
