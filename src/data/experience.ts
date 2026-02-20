import { Experience } from '../types'

/** Datos base de empresas y tecnologías (las traducciones vienen del hook useExperience) */
export const experienceBase: Omit<Experience, 'achievements' | 'position' | 'period'>[] = [
  {
    id: '1',
    company: 'Nolatech',
    technologies: ['React', 'Next.js', 'Electron', 'Node.js', 'Python', 'TypeScript', 'MUI', 'Mantine', 'PostgreSQL', 'AWS'],
  },
  {
    id: '2',
    company: 'Venqis',
    technologies: ['React', 'Next.js', 'Redux', 'Mantine', 'Socket.io', 'WebRTC', 'Python', 'Node.js', 'TypeScript'],
  },
  {
    id: '3',
    company: 'Ibis',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'TypeScript', 'Docker', 'Auth0', 'Redux', 'Tailwind CSS', 'Sass'],
  },
]

/** Datos fallback cuando las traducciones no están disponibles */
const fallbackData: Omit<Experience, 'technologies'>[] = [
  {
    id: '1',
    company: 'Nolatech',
    position: 'Technical Lead Full-Stack',
    period: '01-2024 / Actualidad',
    achievements: [
      'Incrementé la productividad en ~30% con paneles HUB/CMS en React, Next.js y MUI',
      'Diseñé agentes de IA autónomos con Python y Node.js para automatizar flujos internos',
      'Lideré aplicaciones desktop cross-platform con React y Electron',
      'Construí una plataforma E-learning end-to-end',
      'Implementé dashboards de analítica de IA con React y Mantine UI',
    ],
  },
  {
    id: '2',
    company: 'Venqis',
    position: 'Full-Stack Developer',
    period: '05-2023 / 04-2025',
    achievements: [
      'Reduje tickets manuales en ~45% con sistemas de soporte IA (OpenAI, Anthropic)',
      'Diseñé arquitectura de mensajería privada con WebRTC y Python',
      'Actué como Technical Lead coordinando equipos multidisciplinarios',
      'Dirigí el reclutamiento técnico del equipo full-stack',
      'Integré gestión de estado y UI en tiempo real con Redux, Mantine y Socket.io',
    ],
  },
  {
    id: '3',
    company: 'Ibis',
    position: 'Front-End Developer',
    period: '02-2021 / 08-2023',
    achievements: [
      'Impulsé conversiones en ~40% con landing pages de alto rendimiento',
      'Arquitecté microservicios MERN con Clean Architecture',
      'Contenericé aplicaciones con Docker',
      'Implementé autenticación segura y RBAC con Auth0',
      'Colaboré con diseño para entregar UI/UX refinada',
      'Gestioné estado con Redux, Tailwind CSS y SASS',
    ],
  },
]

export const experience: Experience[] = fallbackData.map((item) => {
  const base = experienceBase.find((exp) => exp.id === item.id)
  return {
    ...item,
    technologies: base?.technologies || [],
  }
})
