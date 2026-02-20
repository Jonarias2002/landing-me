'use client'

import { useState, useEffect, useRef } from 'react'
import { Paper, Group, Text, Badge, Title, Center } from '@mantine/core'
import { Carousel } from '@mantine/carousel'
import {
  IconBrandJavascript,
  IconBrandTypescript,
  IconBrandNodejs,
  IconBrandReact,
  IconBrandRedux,
  IconBrandGraphql,
  IconBrandTailwind,
  IconBrandPython,
  IconCode,
  IconTestPipe,
  IconBrowserCheck,
  IconBrain,
  IconRobot,
} from '@tabler/icons-react'
import { useTranslations } from 'next-intl'

const skills = [
  { label: 'JavaScript', icon: IconBrandJavascript },
  { label: 'TypeScript', icon: IconBrandTypescript },
  { label: 'Node', icon: IconBrandNodejs },
  { label: 'Express', icon: IconCode },
  { label: 'LoopBack', icon: IconCode },
  { label: 'React', icon: IconBrandReact },
  { label: 'React Native', icon: IconBrandReact },
  { label: 'Redux', icon: IconBrandRedux },
  { label: 'Redux Sagas', icon: IconBrandRedux },
  { label: 'RTK Query', icon: IconBrandRedux },
  { label: 'Zustand', icon: IconBrandReact },
  { label: 'GraphQL', icon: IconBrandGraphql },
  { label: 'React Testing Library', icon: IconTestPipe },
  { label: 'Tailwind', icon: IconBrandTailwind },
  { label: 'Playwright', icon: IconBrowserCheck },
  { label: 'Puppeteer', icon: IconBrowserCheck },
  { label: 'Python', icon: IconBrandPython },
  { label: 'N8n', icon: IconCode },
  { label: 'OpenAI GPT', icon: IconBrain },
  { label: 'Anthropic Claude', icon: IconBrain },
  { label: 'LangChain', icon: IconRobot },
  { label: 'Hugging Face', icon: IconBrain },
]

export function ExperienceFooter() {
  const [activeSlide, setActiveSlide] = useState(0)
  const emblaApiRef = useRef<{ scrollTo: (index: number) => void } | null>(null)
  const totalSlides = Math.ceil(skills.length / 6)
  const t = useTranslations('experience.skills')

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % totalSlides)
    }, 5000)

    return () => clearInterval(interval)
  }, [totalSlides])

  useEffect(() => {
    if (emblaApiRef.current) {
      emblaApiRef.current.scrollTo(activeSlide)
    }
  }, [activeSlide])

  return (
    <Paper
      p="xl"
      radius="lg"
      style={{
        background: 'linear-gradient(135deg, rgba(51, 154, 240, 0.12) 0%, rgba(34, 197, 94, 0.12) 100%)',
        border: '1px solid rgba(51, 154, 240, 0.2)',
        backdropFilter: 'blur(10px)',
        animation: 'fadeInUp 1s ease-out 1.2s both',
        overflow: 'visible',
      }}
    >
      <Group justify="space-between" align="center" mb="md" wrap="wrap">
        <Title order={3} c="white" style={{ fontFamily: 'var(--font-poppins)' }}>
          {t('title')}
        </Title>
        <Text c="gray.3" size="sm">
          {t('subtitle')}
        </Text>
      </Group>

      <Carousel
        mt="sm"
        withIndicators
        withControls={false}
        slideSize={{ base: '100%', sm: '100%' }}
        slideGap="md"
        getEmblaApi={(embla) => {
          emblaApiRef.current = embla
        }}
        styles={{
          root: {
            position: 'relative',
            width: '100%',
          },
          viewport: {
            paddingBottom: '2.75rem',
          },
          indicators: {
            bottom: -14,
          },
          indicator: {
            backgroundColor: 'rgba(255,255,255,0.6)',
          },
          control: {
            display: 'none',
          },
        }}
      >
        {Array.from({ length: Math.ceil(skills.length / 6) }, (_, idx) => {
          const start = idx * 6
          const group = skills.slice(start, start + 6)
          return (
            <Carousel.Slide key={idx}>
              <Group gap="md" justify="center" align="stretch" grow>
                {group.map(({ label, icon: Icon }) => (
                  <Badge
                    key={label}
                    variant="light"
                    color="blue"
                    size="lg"
                    radius="xl"
                    leftSection={
                      <Center style={{ width: 20 }}>
                        <Icon size={16} />
                      </Center>
                    }
                    style={{
                      backgroundColor: 'rgba(51, 154, 240, 0.12)',
                      border: '1px solid rgba(51, 154, 240, 0.2)',
                      color: 'white',
                      justifyContent: 'center',
                      paddingInline: '0.9rem',
                    }}
                  >
                    {label}
                  </Badge>
                ))}
              </Group>
            </Carousel.Slide>
          )
        })}
      </Carousel>
    </Paper>
  )
}
