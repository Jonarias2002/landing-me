'use client'

import {
  Container,
  Title,
  Text,
  SimpleGrid,
  Card,
  Image,
  Group,
  Badge,
  ActionIcon,
  Stack,
} from '@mantine/core'
import { IconBrandGithub, IconExternalLink } from '@tabler/icons-react'
import { useTranslations, useMessages } from 'next-intl'
import { projects } from '../data/projects'

export function ProjectsSection() {
  const t = useTranslations('projects')
  const messages = useMessages()
  const featuredProjects = projects.filter(project => project.featured)

  const projectItems = (messages as { projects?: { items?: Record<string, { title?: string; description?: string }> } })?.projects?.items || {}

  const getProjectTitle = (project: typeof projects[0]) => {
    return projectItems[project.id]?.title || project.title
  }

  const getProjectDescription = (project: typeof projects[0]) => {
    return projectItems[project.id]?.description || project.description
  }

  return (
    <Container size="xl" fluid py="xl" id="proyectos" style={{ maxWidth: '1400px' }}>
      <Stack gap="xl">
        {/* Título de sección */}
        <Title
          order={2}
          size="2.5rem"
          c="white"
          ta="center"
          style={{
            fontFamily: 'var(--font-poppins)',
            animation: 'fadeInUp 1s ease-out',
          }}
        >
          {t('title')}
        </Title>

        {/* Grid de proyectos */}
        <SimpleGrid
          cols={{ base: 1, sm: 2, md: 3 }}
          spacing="xl"
          style={{ animation: 'fadeInUp 1s ease-out 0.3s both' }}
        >
          {featuredProjects.map((project, index) => (
            <Card
              key={project.id}
              padding="lg"
              radius="lg"
              withBorder
              style={{
                animation: `fadeInUp 1s ease-out ${0.5 + index * 0.1}s both`,
              }}
            >
              {/* Imagen del proyecto */}
              <Card.Section>
                <Image
                  src={project.image}
                  height={200}
                  alt={project.title}
                  style={{
                    transition: 'transform 0.3s ease',
                    cursor: 'pointer',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.05)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)'
                  }}
                />
              </Card.Section>

              {/* Contenido de la tarjeta */}
              <Stack gap="md" mt="md">
                <Title order={3} size="h4" c="white">
                  {getProjectTitle(project)}
                </Title>

                <Text c="gray.3" size="sm" lineClamp={3}>
                  {getProjectDescription(project)}
                </Text>

                {/* Tecnologías */}
                <Group gap="xs" wrap="wrap">
                  {project.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="light"
                      color="blue"
                      size="sm"
                      radius="sm"
                    >
                      {tech}
                    </Badge>
                  ))}
                </Group>

                {/* Enlaces */}
                <Group justify="space-between" mt="auto">
                  <Group gap="xs">
                    <ActionIcon
                      variant="subtle"
                      color="gray"
                      size="lg"
                      component="a"
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={t('viewGitHub')}
                    >
                      <IconBrandGithub size={20} />
                    </ActionIcon>
                    
                    <ActionIcon
                      variant="subtle"
                      color="blue"
                      size="lg"
                      component="a"
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={t('viewLive')}
                    >
                      <IconExternalLink size={20} />
                    </ActionIcon>
                  </Group>
                </Group>
              </Stack>
            </Card>
          ))}
        </SimpleGrid>

        {/* Botón para ver más proyectos */}
        <Group justify="center" mt="xl">
          <Text
            c="blue.4"
            size="lg"
            style={{
              cursor: 'pointer',
              textDecoration: 'underline',
              '&:hover': {
                color: 'var(--mantine-color-blue-3)',
              },
            }}
            component="a"
            href="https://github.com/jonarias2002"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t('viewMore')}
          </Text>
        </Group>
      </Stack>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </Container>
  )
}
