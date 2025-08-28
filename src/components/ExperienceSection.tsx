'use client'

import { Container, Stack } from '@mantine/core'
import { useState } from 'react'
import { Experience } from '../types'
import {
  ExperienceHeader,
  ExperienceTimeline,
  ExperienceModal,
  ExperienceFooter,
  ExperienceStyles,
} from './experience'

export function ExperienceSection() {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)
  const [selectedExperience, setSelectedExperience] = useState<Experience | null>(null)
  const [modalOpened, setModalOpened] = useState(false)

  const openExperienceModal = (exp: Experience) => {
    setSelectedExperience(exp)
    setModalOpened(true)
  }

  const closeModal = () => {
    setModalOpened(false)
    setSelectedExperience(null)
  }

  return (
    <Container size="lg" py="xl" id="experiencia">
      <Stack gap="xl">
        <ExperienceHeader />
        
        <ExperienceTimeline
          hoveredItem={hoveredItem}
          onHover={setHoveredItem}
          onExperienceClick={openExperienceModal}
        />

        <ExperienceFooter />
      </Stack>

      <ExperienceModal
        opened={modalOpened}
        onClose={closeModal}
        experience={selectedExperience}
      />

      <ExperienceStyles />
    </Container>
  )
}
