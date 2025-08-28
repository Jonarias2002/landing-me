import { Experience } from '../types'

export const experience: Experience[] = [
  {
    id: '1',
    company: 'NOLATECH',
    position: 'Senior Full-Stack Developer',
    period: '2023 - Presente',
    achievements: [
      'Lideré el desarrollo de 3 aplicaciones web críticas para el negocio',
      'Implementé arquitecturas escalables que mejoraron el rendimiento en un 40%',
      'Mentoré a 4 desarrolladores junior en mejores prácticas de React y Node.js'
    ],
    technologies: ['React', 'Next.js', 'Node.js', 'TypeScript', 'PostgreSQL', 'AWS'],
  },
  {
    id: '2',
    company: 'TechCorp Solutions',
    position: 'Full-Stack Developer',
    period: '2021 - 2023',
    achievements: [
      'Desarrollé e-commerce con integración de pagos y gestión de inventario',
      'Optimicé consultas de base de datos reduciendo tiempos de carga en un 60%',
      'Colaboré en la migración de aplicaciones legacy a arquitecturas modernas'
    ],
    technologies: ['React', 'Express.js', 'MongoDB', 'Redis', 'Docker', 'Kubernetes'],
  },
  {
    id: '3',
    company: 'StartupXYZ',
    position: 'Frontend Developer',
    period: '2020 - 2021',
    achievements: [
      'Construí interfaces de usuario responsivas para aplicaciones móviles',
      'Implementé sistema de autenticación JWT con refresh tokens',
      'Mejoré la accesibilidad web siguiendo estándares WCAG 2.1'
    ],
    technologies: ['React', 'React Native', 'TypeScript', 'Redux', 'Jest', 'Cypress'],
  },
]
