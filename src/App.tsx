import './index.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Services from './components/Services/Services'
import Projects from './components/Projects/Projects'
import ClientWork from './components/ClientWork/ClientWork'
import Skills from './components/Skills/Skills'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Cursor from './components/Cursor/Cursor'
import WhatsAppButton from './components/WhatsApp/WhatsAppButton'

export default function App() {
  return (
    <>
      <Cursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <ClientWork />
        <Skills />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
