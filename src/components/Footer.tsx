'use client'

import {
  Container,
  Group,
  Text,
  ActionIcon,
  Stack,
} from '@mantine/core'
import { IconBrandGithub, IconBrandLinkedin, IconHeart } from '@tabler/icons-react'

const fadeIn = {
  '0%': { opacity: 0 },
  '100%': { opacity: 1 },
}

export function Footer() {
  return (
    <div
      style={{
        height: '80px',
        backgroundColor: '#1A1B1E',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
        animation: 'fadeIn 1s ease-out',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Container size="lg" h="100%">
        <Group justify="space-between" align="center" h="100%">
          {/* Copyright */}
          <Group gap="xs">
            <Text c="gray.4" size="sm">
              Diseñado y construido por Jonathan Arias
            </Text>
            <IconHeart size={16} color="#ef4444" style={{ animation: 'pulse 2s infinite' }} />
            <Text c="gray.4" size="sm">
              © 2025
            </Text>
          </Group>

          {/* Enlaces sociales */}
          <Group gap="md">
            <ActionIcon
              variant="subtle"
              color="gray"
              size="lg"
              component="a"
              href="https://github.com/jonathanarias"
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
              href="https://linkedin.com/in/jonathanarias"
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
        
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  )
}
