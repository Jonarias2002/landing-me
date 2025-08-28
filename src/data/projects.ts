import { Project } from '../types'
import { projectImages } from './images'

export const projects: Project[] = [
  {
    id: '1',
    title: 'E-Commerce Platform',
    description: 'Plataforma completa de comercio electrónico con sistema de pagos, gestión de inventario y panel de administración.',
    image: projectImages['project-1'],
    technologies: ['React', 'Next.js', 'Node.js', 'MongoDB', 'Stripe'],
    githubUrl: 'https://github.com/jonathanarias/ecommerce-platform',
    liveUrl: 'https://ecommerce-demo.vercel.app',
    featured: true,
  },
  {
    id: '2',
    title: 'Task Management App',
    description: 'Aplicación de gestión de tareas con colaboración en tiempo real, notificaciones y análisis de productividad.',
    image: projectImages['project-2'],
    technologies: ['React', 'TypeScript', 'Socket.IO', 'Express', 'PostgreSQL'],
    githubUrl: 'https://github.com/jonathanarias/task-manager',
    liveUrl: 'https://task-manager-demo.vercel.app',
    featured: true,
  },
  {
    id: '3',
    title: 'Portfolio Website',
    description: 'Sitio web personal con diseño moderno, animaciones fluidas y optimizado para SEO y rendimiento.',
    image: projectImages['project-3'],
    technologies: ['Next.js', 'TypeScript', 'Mantine UI', 'Framer Motion'],
    githubUrl: 'https://github.com/jonathanarias/portfolio',
    liveUrl: 'https://jonathanarias.dev',
    featured: true,
  },
  {
    id: '4',
    title: 'Weather Dashboard',
    description: 'Dashboard meteorológico con mapas interactivos, pronósticos detallados y historial de datos climáticos.',
    image: projectImages['project-4'],
    technologies: ['React', 'D3.js', 'OpenWeather API', 'Chart.js', 'Tailwind CSS'],
    githubUrl: 'https://github.com/jonathanarias/weather-dashboard',
    liveUrl: 'https://weather-demo.vercel.app',
    featured: false,
  },
]
