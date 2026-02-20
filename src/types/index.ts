export interface Project {
  id: string
  title: string
  description: string
  image: string
  technologies: string[]
  githubUrl: string
  liveUrl: string
  featured: boolean
}

export interface Experience {
  id: string
  company: string
  position: string
  period: string
  achievements: string[]
  technologies: string[]
}

export interface ContactForm {
  name: string
  email: string
  message: string
}

