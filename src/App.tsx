import Header from './components/Header'
import About from './components/About'
import Hero from './components/Hero'
import { useReveal } from './hooks/useReveal'

export default function App() {
  useReveal()

  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
      </main>
    </>
  )
}
