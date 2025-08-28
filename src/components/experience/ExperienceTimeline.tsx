'use client'

import {
  Timeline,
  Paper,
  Group,
  Stack,
  Text,
  Badge,
} from '@mantine/core'
import { IconBriefcase, IconCalendar, IconMapPin } from '@tabler/icons-react'
import { experience } from '../../data/experience'
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
