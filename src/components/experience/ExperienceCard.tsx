'use client'

import {
  Paper,
  Text,
  Group,
  Stack,
  Badge,
  ActionIcon,
} from '@mantine/core'
import { IconCode, IconRocket, IconExternalLink } from '@tabler/icons-react'
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

  return (
    <Paper
      p="xl"
      radius="lg"
      style={{
        background: 'rgba(37, 38, 43, 0.8)',
        border: '1px solid rgba(51, 154, 240, 0.1)',
        backdropFilter: 'blur(10px)',
        transition: 'all 0.3s ease',
        transform: isHovered ? 'translateY(-5px)' : 'translateY(0)',
        boxShadow: isHovered 
          ? '0 20px 40px rgba(51, 154, 240, 0.15)' 
          : '0 8px 25px rgba(0, 0, 0, 0.1)',
        cursor: 'pointer',
      }}
      onMouseEnter={() => onHover(exp.id)}
      onMouseLeave={() => onHover(null)}
      onClick={() => onClick(exp)}
    >
      <Stack gap="lg">
        {/* Logros resumidos */}
        <Stack gap="md">
          <Group justify="space-between" align="center">
            <Text fw={600} c="white" size="lg" style={{ fontFamily: 'var(--font-poppins)' }}>
              Logros Destacados
            </Text>
            <ActionIcon
              variant="light"
              color="blue"
              size="md"
              style={{
                transition: 'all 0.3s ease',
                transform: isHovered ? 'scale(1.1)' : 'scale(1)',
              }}
            >
              <IconExternalLink size={16} />
            </ActionIcon>
          </Group>
          
          <Stack gap="sm">
            {exp.achievements.slice(0, 2).map((achievement, achievementIndex) => (
              <Group 
                key={achievementIndex} 
                gap="md" 
                align="flex-start"
                style={{
                  animation: `slideInLeft 0.6s ease-out ${1 + index * 0.15 + achievementIndex * 0.1}s both`,
                }}
              >
                <div style={{
                  background: 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)',
                  borderRadius: '50%',
                  width: '24px',
                  height: '24px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  marginTop: '2px',
                  boxShadow: '0 2px 8px rgba(34, 197, 94, 0.3)',
                }}>
                  <IconRocket size={14} color="white" stroke={2} />
                </div>
                <Text c="gray.3" size="md" style={{ lineHeight: 1.6 }}>
                  {achievement.length > 120 ? `${achievement.substring(0, 120)}...` : achievement}
                </Text>
              </Group>
            ))}
            
            {exp.achievements.length > 2 && (
              <Group justify="center" mt="md">
                <Text c="blue.4" size="sm" style={{ cursor: 'pointer' }}>
                  Ver {exp.achievements.length - 2} logros más...
                </Text>
              </Group>
            )}
          </Stack>
        </Stack>

        {/* Tecnologías */}
        <Stack gap="md">
          <Text fw={600} c="white" size="lg" style={{ fontFamily: 'var(--font-poppins)' }}>
            Tecnologías Utilizadas
          </Text>
          <Group gap="xs" wrap="wrap">
            {exp.technologies.map((tech, techIndex) => (
              <Badge
                key={tech}
                variant="light"
                color="blue"
                size="md"
                radius="xl"
                leftSection={<IconCode size={14} />}
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
