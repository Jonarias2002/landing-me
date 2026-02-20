'use client'

import {
  Paper,
  Text,
  Group,
  Stack,
  Badge,
  ActionIcon,
} from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import { IconCode, IconRocket, IconExternalLink } from '@tabler/icons-react'
import { useTranslations } from 'next-intl'
import { Experience } from '../../types'

interface ExperienceCardProps {
  exp: Experience
  index: number
  hoveredItem: string | null
  onHover: (id: string | null) => void
  onClick: (exp: Experience) => void
}

export function ExperienceCard({ 
  exp, 
  index, 
  hoveredItem, 
  onHover, 
  onClick 
}: ExperienceCardProps) {
  const isHovered = hoveredItem === exp.id
  const isMobile = useMediaQuery('(max-width: 768px)')
  const t = useTranslations('experience')

  return (
    <Paper
      p={isMobile ? "md" : "xl"}
      radius="lg"
      style={{
        background: 'rgba(37, 38, 43, 0.8)',
        border: '1px solid rgba(51, 154, 240, 0.1)',
        backdropFilter: 'blur(10px)',
        transition: 'all 0.3s ease',
        transform: isHovered && !isMobile ? 'translateY(-5px)' : 'translateY(0)',
        boxShadow: isHovered && !isMobile
          ? '0 20px 40px rgba(51, 154, 240, 0.15)' 
          : '0 8px 25px rgba(0, 0, 0, 0.1)',
        cursor: 'pointer',
      }}
      onMouseEnter={() => !isMobile && onHover(exp.id)}
      onMouseLeave={() => !isMobile && onHover(null)}
      onClick={() => onClick(exp)}
    >
      <Stack gap={isMobile ? "md" : "lg"}>
        {/* Logros resumidos */}
        <Stack gap={isMobile ? "sm" : "md"}>
          <Group justify="space-between" align="center">
            <Text fw={600} c="white" size={isMobile ? "md" : "lg"} style={{ fontFamily: 'var(--font-poppins)' }}>
              {t('achievements')}
            </Text>
            <ActionIcon
              variant="light"
              color="blue"
              size={isMobile ? "sm" : "md"}
              style={{
                transition: 'all 0.3s ease',
                transform: isHovered ? 'scale(1.1)' : 'scale(1)',
              }}
            >
              <IconExternalLink size={isMobile ? 14 : 16} />
            </ActionIcon>
          </Group>
          
          <Stack gap="xs">
            {exp.achievements.slice(0, isMobile ? 1 : 2).map((achievement, achievementIndex) => (
              <Group 
                key={achievementIndex} 
                gap={isMobile ? "sm" : "md"} 
                align="flex-start"
                style={{
                  animation: `slideInLeft 0.6s ease-out ${1 + index * 0.15 + achievementIndex * 0.1}s both`,
                }}
              >
                <div style={{
                  background: 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)',
                  borderRadius: '50%',
                  width: isMobile ? '20px' : '24px',
                  height: isMobile ? '20px' : '24px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  marginTop: '2px',
                  boxShadow: '0 2px 8px rgba(34, 197, 94, 0.3)',
                }}>
                  <IconRocket size={isMobile ? 12 : 14} color="white" stroke={2} />
                </div>
                <Text c="gray.3" size={isMobile ? "sm" : "md"} style={{ lineHeight: 1.6 }}>
                  {isMobile 
                    ? (achievement.length > 100 ? `${achievement.substring(0, 100)}...` : achievement)
                    : (achievement.length > 120 ? `${achievement.substring(0, 120)}...` : achievement)
                  }
                </Text>
              </Group>
            ))}
            
            {exp.achievements.length > (isMobile ? 1 : 2) && (
              <Group justify="center" mt="sm">
                <Text c="blue.4" size="xs" style={{ cursor: 'pointer' }}>
                  {t('viewMore', { count: exp.achievements.length - (isMobile ? 1 : 2) })}
                </Text>
              </Group>
            )}
          </Stack>
        </Stack>

        {/* Tecnologías */}
        <Stack gap={isMobile ? "sm" : "md"}>
          <Text fw={600} c="white" size={isMobile ? "md" : "lg"} style={{ fontFamily: 'var(--font-poppins)' }}>
            {t('technologies')}
          </Text>
          <Group gap="xs" wrap="wrap">
            {exp.technologies.map((tech, techIndex) => (
              <Badge
                key={tech}
                variant="light"
                color="blue"
                size={isMobile ? "sm" : "md"}
                radius="xl"
                leftSection={<IconCode size={isMobile ? 12 : 14} />}
                style={{
                  animation: `bounceIn 0.6s ease-out ${1.2 + index * 0.15 + techIndex * 0.05}s both`,
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  '&:hover': {
                    transform: 'scale(1.05)',
                    boxShadow: '0 4px 12px rgba(51, 154, 240, 0.3)',
                  },
                }}
              >
                {tech}
              </Badge>
            ))}
          </Group>
        </Stack>
      </Stack>
    </Paper>
  )
}
