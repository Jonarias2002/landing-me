'use client'

import { useState } from 'react'
import {
  Container,
  Title,
  Text,
  Grid,
  TextInput,
  Textarea,
  Button,
  Group,
  Stack,
  ActionIcon,
} from '@mantine/core'
import { useForm } from '@mantine/form'
import { notifications } from '@mantine/notifications'
import { IconMail, IconBrandLinkedin, IconBrandGithub, IconSend } from '@tabler/icons-react'
import { ContactForm } from '../types'

const fadeInUp = {
  '0%': { opacity: 0, transform: 'translateY(30px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
}

export function ContactSection() {
  const [loading, setLoading] = useState(false)

  const form = useForm<ContactForm>({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },
    validate: {
      name: (value) => (value.length < 2 ? 'El nombre debe tener al menos 2 caracteres' : null),
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Email inválido'),
      message: (value) => (value.length < 10 ? 'El mensaje debe tener al menos 10 caracteres' : null),
    },
  })

  const handleSubmit = async (values: ContactForm) => {
    setLoading(true)
    
    // Simular envío del formulario
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    notifications.show({
      title: '¡Mensaje enviado!',
      message: 'Gracias por contactarme. Te responderé pronto.',
      color: 'green',
      icon: <IconSend size={16} />,
    })
    
    form.reset()
    setLoading(false)
  }

  return (
    <Container size="lg" py="xl" id="contacto">
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
          Hablemos
        </Title>

        <Grid gutter="xl" style={{ animation: 'fadeInUp 1s ease-out 0.3s both' }}>
          {/* Columna izquierda - Información de contacto */}
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Stack spacing="xl">
              <Stack spacing="md">
                <Text size="lg" c="gray.3" maw={400}>
                  Estoy disponible para nuevos proyectos y colaboraciones. 
                  No dudes en contactarme para discutir cómo puedo ayudarte 
                  a hacer realidad tus ideas.
                </Text>
              </Stack>

              {/* Información de contacto */}
              <Stack spacing="md">
                <Group gap="md">
                  <ActionIcon
                    variant="light"
                    color="blue"
                    size="lg"
                    component="a"
                    href="mailto:jonathan.arias@email.com"
                    title="Enviar email"
                  >
                    <IconMail size={20} />
                  </ActionIcon>
                  <Stack gap={0}>
                    <Text c="white" fw={500}>
                      Email
                    </Text>
                    <Text c="gray.3" size="sm">
                      jonathan.arias@email.com
                    </Text>
                  </Stack>
                </Group>

                <Group gap="md">
                  <ActionIcon
                    variant="light"
                    color="blue"
                    size="lg"
                    component="a"
                    href="https://linkedin.com/in/jonathanarias"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Ver perfil de LinkedIn"
                  >
                    <IconBrandLinkedin size={20} />
                  </ActionIcon>
                  <Stack gap={0}>
                    <Text c="white" fw={500}>
                      LinkedIn
                    </Text>
                    <Text c="gray.3" size="sm">
                      linkedin.com/in/jonathanarias
                    </Text>
                  </Stack>
                </Group>

                <Group gap="md">
                  <ActionIcon
                    variant="light"
                    color="blue"
                    size="lg"
                    component="a"
                    href="https://github.com/jonathanarias"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Ver perfil de GitHub"
                  >
                    <IconBrandGithub size={20} />
                  </ActionIcon>
                  <Stack gap={0}>
                    <Text c="white" fw={500}>
                      GitHub
                    </Text>
                    <Text c="gray.3" size="sm">
                      github.com/jonathanarias
                    </Text>
                  </Stack>
                </Group>
              </Stack>
            </Stack>
          </Grid.Col>

          {/* Columna derecha - Formulario */}
          <Grid.Col span={{ base: 12, md: 6 }}>
            <form onSubmit={form.onSubmit(handleSubmit)}>
              <Stack spacing="md">
                <TextInput
                  label="Nombre"
                  placeholder="Tu nombre completo"
                  required
                  size="md"
                  radius="md"
                  {...form.getInputProps('name')}
                  styles={{
                    label: { color: 'white', marginBottom: '0.5rem' },
                    input: {
                      backgroundColor: '#25262B',
                      border: '1px solid #2C2E33',
                      color: 'white',
                      '&::placeholder': { color: '#6B7280' },
                    },
                  }}
                />

                <TextInput
                  label="Email"
                  placeholder="tu.email@ejemplo.com"
                  required
                  size="md"
                  radius="md"
                  {...form.getInputProps('email')}
                  styles={{
                    label: { color: 'white', marginBottom: '0.5rem' },
                    input: {
                      backgroundColor: '#25262B',
                      border: '1px solid #2C2E33',
                      color: 'white',
                      '&::placeholder': { color: '#6B7280' },
                    },
                  }}
                />

                <Textarea
                  label="Mensaje"
                  placeholder="Cuéntame sobre tu proyecto..."
                  required
                  size="md"
                  radius="md"
                  minRows={4}
                  {...form.getInputProps('message')}
                  styles={{
                    label: { color: 'white', marginBottom: '0.5rem' },
                    input: {
                      backgroundColor: '#25262B',
                      border: '1px solid #2C2E33',
                      color: 'white',
                      '&::placeholder': { color: '#6B7280' },
                    },
                  }}
                />

                <Button
                  type="submit"
                  size="lg"
                  radius="md"
                  color="blue"
                  loading={loading}
                  leftSection={<IconSend size={20} />}
                  fullWidth
                  mt="md"
                >
                  Enviar Mensaje
                </Button>
              </Stack>
            </form>
          </Grid.Col>
        </Grid>
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
