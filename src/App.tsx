import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Innovation from './components/Innovation'
import Partners from './components/Partners'
import Projects from './components/Projects'
import Services from './components/Services'
import WhatsAppButton from './components/WhatsAppButton'
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
        <Partners />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
