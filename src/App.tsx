import Header from './components/Header'
import Hero from './components/Hero'
import { useReveal } from './hooks/useReveal'

export default function App() {
  useReveal()

  return (
    <>
      <Header />
      <main>
        <Hero />
      </main>
    </>
  )
}
