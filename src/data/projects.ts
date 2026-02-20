import { Project } from '../types'

export const projects: Project[] = [
  {
    id: '1',
    title: 'Ingresos y Gastos',
    description: 'App de finanzas personales con gráficos interactivos (Victory), persistencia en localStorage, exportación a JSON/CSV y diseño responsive con Tailwind CSS.',
    image: '/images/presupuesto.png',
    technologies: ['React 18', 'TypeScript', 'Vite', 'Tailwind CSS', 'Victory'],
    githubUrl: 'https://github.com/jonarias2002',
    liveUrl: 'https://income-expense-jet.vercel.app/',
    featured: true,
  },
  {
    id: '2',
    title: 'My Portfolio',
    description: 'Mi primer portafolio personal desarrollado con React y Tailwind CSS, con diseño dark theme, secciones de about, skills, proyectos y contacto.',
    image: '/images/portfolio.png',
    technologies: ['React', 'Tailwind CSS', 'JavaScript', 'Responsive Design'],
    githubUrl: 'https://github.com/jonarias2002',
    liveUrl: 'https://my-portfolio-jonarias2002.vercel.app/',
    featured: true,
  },
  {
    id: '3',
    title: 'Rick and Morty Explorer',
    description: 'Uno de mis primeros proyectos personales: explorador de personajes de Rick and Morty consumiendo la API pública, con búsqueda y filtros.',
    image: '/images/rickymorty.png',
    technologies: ['JavaScript', 'CSS', 'HTML', 'REST API'],
    githubUrl: 'https://github.com/jonarias2002',
    liveUrl: 'https://jonarias2002.github.io/rick-and-morty/',
    featured: true,
  },
]
