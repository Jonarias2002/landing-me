'use client'

import { Container, Group, Text, ActionIcon } from '@mantine/core'
import { IconBrandGithub, IconBrandLinkedin, IconHeart } from '@tabler/icons-react'
import { useTranslations } from 'next-intl'

export function Footer() {
  const t = useTranslations('footer')

  return (
    <div
      style={{
        height: '80px',
        backgroundColor: '#1A1B1E',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Container size="xl" fluid h="100%" style={{ maxWidth: '1400px' }}>
        <Group justify="space-between" align="center" h="100%">
          <Group gap="xs">
            <Text c="gray.4" size="sm">{t('copyright')}</Text>
            <IconHeart size={16} color="#ef4444" style={{ animation: 'pulse 2s infinite' }} />
            <Text c="gray.4" size="sm">{t('year')}</Text>
          </Group>

          <Group gap="md">
            <ActionIcon
              variant="subtle"
              color="gray"
              size="lg"
              component="a"
              href="https://github.com/jonarias2002"
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub"
            >
              <IconBrandGithub size={20} />
            </ActionIcon>
            <ActionIcon
              variant="subtle"
              color="gray"
              size="lg"
              component="a"
              href="https://www.linkedin.com/in/jonajam"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
            >
              <IconBrandLinkedin size={20} />
            </ActionIcon>
          </Group>
        </Group>
      </Container>

      <style jsx>{`
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }
      `}</style>
    </div>
  )
}
