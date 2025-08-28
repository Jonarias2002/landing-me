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
import { projects } from '../data/projects'

const fadeInUp = {
  '0%': { opacity: 0, transform: 'translateY(30px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
}

export function ProjectsSection() {
  const featuredProjects = projects.filter(project => project.featured)

  return (
    <Container size="lg" py="xl" id="proyectos">
      <Stack spacing="xl">
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
          Proyectos Destacados
        </Title>

        {/* Grid de proyectos */}
        <SimpleGrid
          cols={{ base: 1, md: 2 }}
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
                  {project.title}
                </Title>

                <Text c="gray.3" size="sm" lineClamp={3}>
                  {project.description}
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
                      title="Ver en GitHub"
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
                      title="Ver demo en vivo"
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
            href="https://github.com/jonathanarias"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver más proyectos en GitHub →
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
