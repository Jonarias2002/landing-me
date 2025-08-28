'use client'

import {
  Modal,
  Group,
  Stack,
  Paper,
  Text,
  Badge,
  Title,
  Divider,
} from '@mantine/core'
import { IconBriefcase, IconCode, IconRocket, IconCalendar} from '@tabler/icons-react'
import { Experience } from '../../types'

interface ExperienceModalProps {
  opened: boolean
  onClose: () => void
  experience: Experience | null
}

export function ExperienceModal({ opened, onClose, experience }: ExperienceModalProps) {
  if (!experience) return null

  return (
    <Modal
      opened={opened}
      onClose={onClose}
      size="xl"
      scrollAreaComponent="div"
      centered
      yOffset={-50}
      styles={{
        title: {
          color: 'white',
          fontSize: '1.5rem',
        },
        header: {
          background: 'rgba(37, 38, 43, 0.95)',
          borderBottom: '1px solid rgba(51, 154, 240, 0.2)',
          paddingTop: '1rem',
          paddingBottom: '1rem',
        },
        body: {
          background: 'rgba(37, 38, 43, 0.95)',
          color: 'white',
          overflow: 'hidden',
        },
        content: {
          overflow: 'hidden',
        },
        close: {
          color: 'white',
          '&:hover': {
            background: 'rgba(51, 154, 240, 0.1)',
          },
        },
        root: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        },
      }}
      title={
        <Group gap="md" align="center">
          <div style={{
            background: 'linear-gradient(135deg, #339af0 0%, #22c55e 100%)',
            borderRadius: '50%',
            width: '48px',
            height: '48px',
            marginTop: '1.2rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <IconBriefcase size={24} color="white" stroke={2} />
          </div>
          <Stack gap={0}>
            <Text fw={700} size="xl" c="white" style={{ fontFamily: 'var(--font-poppins)', marginTop: '1rem' }}>
              {experience.company}
            </Text>
            <Text c="blue.4" fw={500} size="md">
              {experience.position}
            </Text>
          </Stack>
        </Group>
      }
    >
      <div style={{ overflow: 'hidden', height: '100%' }}>
        <Stack gap="xl" p="md" pt="xl" style={{ maxHeight: '70vh' }}>
          {/* Período */}
          <Group justify="center">
            <Badge
              variant="gradient"
              gradient={{ from: 'blue', to: 'cyan', deg: 135 }}
              size="lg"
              radius="xl"
              leftSection={<IconCalendar size={16} />}
            >
              {experience.period}
            </Badge>
          </Group>

          <Divider color="rgba(51, 154, 240, 0.3)" />

          {/* Logros completos */}
          <Stack gap="lg" style={{ flex: 1 }}>
            <Title order={3} c="white" style={{ fontFamily: 'var(--font-poppins)' }}>
              Logros Destacados
            </Title>
            
            <Stack gap="lg" style={{ maxHeight: '40vh', overflow: 'hidden' }}>
              {experience.achievements.map((achievement: string, index: number) => (
                <Paper
                  key={index}
                  p="sm"
                  radius="md"
                  style={{
                    background: 'rgba(51, 154, 240, 0.05)',
                    border: '1px solid rgba(51, 154, 240, 0.1)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      background: 'rgba(51, 154, 240, 0.1)',
                      transform: 'translateX(5px)',
                    },
                  }}
                >
                  <Group gap="md" align="flex-start">
                    <div style={{
                      background: 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)',
                      borderRadius: '50%',
                      width: '32px',
                      height: '32px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      marginTop: '2px',
                      boxShadow: '0 4px 12px rgba(34, 197, 94, 0.3)',
                    }}>
                      <IconRocket size={18} color="white" stroke={2} />
                    </div>
                    <Text c="gray.2" size="md" style={{ lineHeight: 1.8, flex: 1 }}>
                      {achievement}
                    </Text>
                  </Group>
                </Paper>
              ))}
            </Stack>
          </Stack>

          <Divider color="rgba(51, 154, 240, 0.3)" />

          {/* Tecnologías */}
          <Stack gap="md">
            <Title order={3} c="white" style={{ fontFamily: 'var(--font-poppins)' }}>
              Tecnologías Utilizadas
            </Title>
            <Group gap="sm" wrap="wrap">
              {experience.technologies.map((tech: string) => (
                <Badge
                  key={tech}
                  variant="light"
                  color="blue"
                  size="lg"
                  radius="xl"
                  leftSection={<IconCode size={16} />}
                >
                  {tech}
                </Badge>
              ))}
            </Group>
          </Stack>
        </Stack>
      </div>
    </Modal>
  )
}
