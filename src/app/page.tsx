import { Header } from '../components/Header'
import { HeroSection } from '../components/HeroSection'
import { ProjectsSection } from '../components/ProjectsSection'
import { ExperienceSection } from '../components/ExperienceSection'
import { ContactSection } from '../components/ContactSection'
import { Footer } from '../components/Footer'

export default function Home() {
  return (
    <main style={{ backgroundColor: '#1A1B1E', minHeight: '100vh' }}>
      <Header />
      <HeroSection />
      <ProjectsSection />
      <ExperienceSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
