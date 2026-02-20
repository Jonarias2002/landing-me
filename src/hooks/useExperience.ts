import { useMessages } from 'next-intl'
import { Experience } from '../types'
import { experienceBase, experience } from '../data/experience'

export function useExperience(): Experience[] {
  const messages = useMessages()

  try {
    const experienceJobs = (messages as { experience?: { jobs?: Record<string, { position?: string; period?: string; achievements?: string[] }> } })?.experience?.jobs

    if (!experienceJobs || typeof experienceJobs !== 'object') {
      return experience
    }

    const translated = experienceBase.map((exp) => {
      const jobData = experienceJobs[exp.id]

      if (!jobData || typeof jobData !== 'object') return null

      return {
        ...exp,
        position: jobData.position || '',
        period: jobData.period || '',
        achievements: Array.isArray(jobData.achievements) ? jobData.achievements : [],
      } as Experience
    }).filter((exp): exp is Experience => exp !== null)

    return translated.length === experienceBase.length ? translated : experience
  } catch {
    return experience
  }
}
