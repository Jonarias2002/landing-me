'use client'

import { Title } from '@mantine/core'
import { useTranslations } from 'next-intl'

export function ExperienceHeader() {
  const t = useTranslations('experience')
  
  return (
    <Title
      order={2}
      size="2.5rem"
      c="white"
      ta="center"
      style={{
        fontFamily: 'var(--font-poppins)',
        animation: 'fadeInUp 1s ease-out',
      }}
    >
      {t('title')}
    </Title>
  )
}
