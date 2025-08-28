'use client'

import { Paper, Group, Text } from '@mantine/core'

export function ExperienceFooter() {
  return (
    <Paper
      p="xl"
      radius="lg"
      style={{
        background: 'linear-gradient(135deg, rgba(51, 154, 240, 0.1) 0%, rgba(34, 197, 94, 0.1) 100%)',
        border: '1px solid rgba(51, 154, 240, 0.2)',
        backdropFilter: 'blur(10px)',
        animation: 'fadeInUp 1s ease-out 1.2s both',
      }}
    >
      <Group justify="center">
        <Text
          c="gray.2"
          size="lg"
          ta="center"
          maw={700}
          style={{
            fontFamily: 'var(--font-roboto)',
            lineHeight: 1.7,
          }}
        >
          <strong>💡 Siempre en constante aprendizaje y evolución.</strong> Me apasiona explorar nuevas tecnologías 
          y aplicar las mejores prácticas para crear soluciones innovadoras que marquen la diferencia.
        </Text>
      </Group>
    </Paper>
  )
}
