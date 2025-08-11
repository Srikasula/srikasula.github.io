import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Education from './components/Education'
import Certifications from './components/Certifications'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div>
      <Navbar />
      <main className="max-w-6xl mx-auto px-4">
        <section id="home"><Hero /></section>
        <section id="skills"><Skills /></section>
        <section id="experience"><Experience /></section>
        <section id="education"><Education /></section>
        <section id="certifications"><Certifications /></section>
        <section id="projects"><Projects /></section>
        <section id="contact"><Contact /></section>
      </main>
      <Footer />
    </div>
  )
}
