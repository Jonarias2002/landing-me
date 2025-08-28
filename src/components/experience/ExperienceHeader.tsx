'use client'

import { Title } from '@mantine/core'

export function ExperienceHeader() {
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
      Mi Trayectoria
    </Title>
  )
}
