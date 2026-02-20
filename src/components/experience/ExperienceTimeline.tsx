'use client'

import {
  Timeline,
  Paper,
  Group,
  Stack,
  Text,
  Badge,
  Box,
} from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import { IconBriefcase, IconCalendar, IconMapPin } from '@tabler/icons-react'
import { useExperience } from '../../hooks/useExperience'
import { Experience } from '../../types'
import { ExperienceCard } from './ExperienceCard'

interface ExperienceTimelineProps {
  hoveredItem: string | null
  onHover: (id: string | null) => void
  onExperienceClick: (exp: Experience) => void
}

export function ExperienceTimeline({ 
  hoveredItem, 
  onHover, 
  onExperienceClick 
}: ExperienceTimelineProps) {
  const isMobile = useMediaQuery('(max-width: 768px)')
  const experience = useExperience()

  if (isMobile) {
    return (
      <Stack gap="md">
        {experience.map((exp, index) => (
          <Box
            key={exp.id}
            style={{
              animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
            }}
          >
            <Paper
              p="md"
              radius="lg"
              mb="sm"
              style={{
                background: 'rgba(51, 154, 240, 0.08)',
                border: '1px solid rgba(51, 154, 240, 0.2)',
              }}
            >
              <Stack gap="xs">
                <Group gap="sm" align="center" wrap="nowrap">
                  <div style={{
                    background: 'linear-gradient(135deg, #339af0 0%, #22c55e 100%)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '40px',
                    height: '40px',
                    flexShrink: 0,
                    boxShadow: '0 4px 12px rgba(51, 154, 240, 0.3)',
                  }}>
                    <IconBriefcase size={20} color="white" stroke={2} />
                  </div>
                  <Stack gap={2} style={{ flex: 1, minWidth: 0 }}>
                    <Text fw={700} size="lg" c="white" style={{ fontFamily: 'var(--font-poppins)' }} truncate>
                      {exp.company}
                    </Text>
                    <Text c="blue.4" fw={500} size="sm" truncate>
                      {exp.position}
                    </Text>
                  </Stack>
                </Group>
                
                <Badge
                  variant="gradient"
                  gradient={{ from: 'blue', to: 'cyan', deg: 135 }}
                  size="md"
                  radius="xl"
                  leftSection={<IconCalendar size={12} />}
                  style={{ alignSelf: 'flex-start' }}
                >
                  {exp.period}
                </Badge>
              </Stack>
            </Paper>
            
            <ExperienceCard
              exp={exp}
              index={index}
              hoveredItem={hoveredItem}
              onHover={onHover}
              onClick={onExperienceClick}
            />
          </Box>
        ))}
      </Stack>
    )
  }

  return (
    <Timeline
      active={experience.length - 1}
      bulletSize={32}
      lineWidth={3}
      style={{
        animation: 'fadeInUp 1s ease-out 0.3s both',
      }}
      styles={{
        root: {
          '--mantine-color-blue-6': '#339af0',
        },
      }}
    >
      {experience.map((exp, index) => (
        <Timeline.Item
          key={exp.id}
          bullet={
            <div style={{
              background: 'linear-gradient(135deg, #339af0 0%, #22c55e 100%)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '32px',
              height: '32px',
              boxShadow: '0 4px 12px rgba(51, 154, 240, 0.3)',
              transition: 'all 0.3s ease',
              transform: hoveredItem === exp.id ? 'scale(1.1)' : 'scale(1)',
            }}>
              <IconBriefcase size={18} color="white" stroke={2} />
            </div>
          }
          title={
            <Paper
              p="md"
              radius="lg"
              style={{
                background: hoveredItem === exp.id ? 'rgba(51, 154, 240, 0.1)' : 'transparent',
                border: hoveredItem === exp.id ? '1px solid rgba(51, 154, 240, 0.3)' : '1px solid transparent',
                transition: 'all 0.3s ease',
                transform: hoveredItem === exp.id ? 'translateX(10px)' : 'translateX(0)',
              }}
              onMouseEnter={() => onHover(exp.id)}
              onMouseLeave={() => onHover(null)}
            >
              <Group gap="md" align="center" wrap="wrap">
                <Stack gap={0}>
                  <Text fw={700} size="xl" c="white" style={{ fontFamily: 'var(--font-poppins)' }}>
                    {exp.company}
                  </Text>
                  <Group gap="xs" align="center">
                    <IconMapPin size={16} color="#339af0" />
                    <Text c="blue.4" fw={500} size="md">
                      {exp.position}
                    </Text>
                  </Group>
                </Stack>
                
                <Badge
                  variant="gradient"
                  gradient={{ from: 'blue', to: 'cyan', deg: 135 }}
                  size="lg"
                  radius="xl"
                  leftSection={<IconCalendar size={14} />}
                  style={{
                    animation: `slideInRight 0.6s ease-out ${0.8 + index * 0.1}s both`,
                  }}
                >
                  {exp.period}
                </Badge>
              </Group>
            </Paper>
          }
          style={{
            animation: `fadeInUp 1s ease-out ${0.5 + index * 0.15}s both`,
          }}
        >
          <ExperienceCard
            exp={exp}
            index={index}
            hoveredItem={hoveredItem}
            onHover={onHover}
            onClick={onExperienceClick}
          />
        </Timeline.Item>
      ))}
    </Timeline>
  )
}
