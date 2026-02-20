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
import { useMediaQuery } from '@mantine/hooks'
import { IconBriefcase, IconCode, IconRocket, IconCalendar} from '@tabler/icons-react'
import { useTranslations } from 'next-intl'
import { Experience } from '../../types'

interface ExperienceModalProps {
  opened: boolean
  onClose: () => void
  experience: Experience | null
}

export function ExperienceModal({ opened, onClose, experience }: ExperienceModalProps) {
  const isMobile = useMediaQuery('(max-width: 768px)')
  const t = useTranslations('experience')
  
  if (!experience) return null

  return (
    <Modal
      opened={opened}
      onClose={onClose}
      size="xl"
      centered={!isMobile}
      yOffset={isMobile ? 0 : -50}
      fullScreen={isMobile}
      styles={{
        title: {
          color: 'white',
          fontSize: isMobile ? '1.2rem' : '1.5rem',
        },
        header: {
          background: 'rgba(37, 38, 43, 0.95)',
          borderBottom: '1px solid rgba(51, 154, 240, 0.2)',
          paddingTop: isMobile ? '0.75rem' : '1rem',
          paddingBottom: isMobile ? '0.75rem' : '1rem',
        },
        body: {
          background: 'rgba(37, 38, 43, 0.95)',
          color: 'white',
          overflow: 'hidden',
          maxHeight: isMobile ? 'calc(100vh - 120px)' : '72vh',
          paddingBottom: isMobile ? '1rem' : '1.2rem',
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
        <Group gap={isMobile ? "sm" : "md"} align="center" wrap="wrap">
          <div style={{
            background: 'linear-gradient(135deg, #339af0 0%, #22c55e 100%)',
            borderRadius: '50%',
            width: isMobile ? '36px' : '48px',
            height: isMobile ? '36px' : '48px',
            marginTop: isMobile ? '0' : '1.2rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
          }}>
            <IconBriefcase size={isMobile ? 18 : 24} color="white" stroke={2} />
          </div>
          <Stack gap={2} style={{ marginTop: isMobile ? '0' : '0.5rem', flex: 1, minWidth: 0 }}>
            <Group gap="xs" align="center" wrap="wrap">
              <Text fw={700} size={isMobile ? "md" : "xl"} c="white" style={{ fontFamily: 'var(--font-poppins)' }} truncate>
                {experience.company}
              </Text>
              <Badge
                variant="gradient"
                gradient={{ from: 'blue', to: 'cyan', deg: 135 }}
                size={isMobile ? "sm" : "md"}
                radius="xl"
                leftSection={<IconCalendar size={isMobile ? 12 : 14} />}
              >
                {experience.period}
              </Badge>
            </Group>
            <Text c="blue.4" fw={500} size={isMobile ? "sm" : "md"} truncate>
              {experience.position}
            </Text>
          </Stack>
        </Group>
      }
    >
      <div style={{ overflow: 'hidden', height: '100%' }}>
        <Stack gap={isMobile ? "md" : "xl"} p={isMobile ? "sm" : "md"} pt={isMobile ? "md" : "xl"} style={{ height: '100%', maxHeight: '100%' }}>
          {/* Logros completos */}
          <Stack gap={isMobile ? "md" : "lg"} style={{ flex: 1 }}>
            <Title order={3} c="white" size={isMobile ? "h4" : "h3"} style={{ fontFamily: 'var(--font-poppins)' }}>
              {t('achievements')}
            </Title>
            <Stack
              gap={isMobile ? "md" : "lg"}
              style={{
                maxHeight: isMobile ? '40vh' : '36vh',
                overflowY: 'auto',
                paddingRight: '0.25rem',
              }}
            >
              {experience.achievements.map((achievement: string, index: number) => (
                <Paper
                  key={index}
                  p={isMobile ? "xs" : "sm"}
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
                  <Group gap={isMobile ? "sm" : "md"} align="flex-start">
                    <div style={{
                      background: 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)',
                      borderRadius: '50%',
                      width: isMobile ? '24px' : '32px',
                      height: isMobile ? '24px' : '32px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      marginTop: '2px',
                      boxShadow: '0 4px 12px rgba(34, 197, 94, 0.3)',
                    }}>
                      <IconRocket size={isMobile ? 14 : 18} color="white" stroke={2} />
                    </div>
                    <Text c="gray.2" size={isMobile ? "sm" : "md"} style={{ lineHeight: 1.8, flex: 1 }}>
                      {achievement}
                    </Text>
                  </Group>
                </Paper>
              ))}
            </Stack>
          </Stack>

          <Divider color="rgba(51, 154, 240, 0.3)" />

          {/* Tecnologías */}
          <Stack gap={isMobile ? "sm" : "md"}>
            <Title order={3} c="white" size={isMobile ? "h4" : "h3"} style={{ fontFamily: 'var(--font-poppins)' }}>
              {t('technologies')}
            </Title>
            <Group gap={isMobile ? "xs" : "sm"} wrap="wrap">
              {experience.technologies.map((tech: string) => (
                <Badge
                  key={tech}
                  variant="light"
                  color="blue"
                  size={isMobile ? "md" : "lg"}
                  radius="xl"
                  leftSection={<IconCode size={isMobile ? 14 : 16} />}
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
