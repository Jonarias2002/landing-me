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
  Modal,
  ThemeIcon,
} from '@mantine/core'
import { useForm } from '@mantine/form'
import {
  IconMail,
  IconBrandLinkedin,
  IconBrandGithub,
  IconSend,
  IconPhone,
  IconCheck,
  IconX,
} from '@tabler/icons-react'
import { useTranslations } from 'next-intl'
import emailjs from '@emailjs/browser'
import { ContactForm } from '../types'

const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || ''
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || ''
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ''

const inputStyles = {
  label: { color: 'white', marginBottom: '0.5rem' },
  input: {
    backgroundColor: '#25262B',
    border: '1px solid #2C2E33',
    color: 'white',
    '&::placeholder': { color: '#6B7280' },
  },
}

export function ContactSection() {
  const [loading, setLoading] = useState(false)
  const [successModal, setSuccessModal] = useState(false)
  const [errorModal, setErrorModal] = useState(false)
  const t = useTranslations('contact')
  const tForm = useTranslations('contact.form')

  const form = useForm<ContactForm>({
    initialValues: { name: '', email: '', message: '' },
    validate: {
      name: (value) => (value.length < 2 ? tForm('nameError') : null),
      email: (value) => (/^\S+@\S+$/.test(value) ? null : tForm('emailError')),
      message: (value) => (value.length < 10 ? tForm('messageError') : null),
    },
  })

  const handleSubmit = async (values: ContactForm) => {
    setLoading(true)

    try {
      const response = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: values.name,
          from_email: values.email,
          message: values.message,
          to_email: 'jonathan2002dev@gmail.com',
        },
        EMAILJS_PUBLIC_KEY,
      )

      if (response.status === 200) {
        form.reset()
        setLoading(false)
        setSuccessModal(true)
        return
      }

      setLoading(false)
      setErrorModal(true)
    } catch {
      setLoading(false)
      setErrorModal(true)
    }
  }

  const contactInfo = [
    {
      icon: <IconMail size={20} />,
      label: t('email'),
      value: 'jonathan2002dev@gmail.com',
      href: 'mailto:jonathan2002dev@gmail.com',
      title: t('sendEmail'),
    },
    {
      icon: <IconBrandLinkedin size={20} />,
      label: t('linkedin'),
      value: 'linkedin.com/in/jonajam',
      href: 'https://www.linkedin.com/in/jonajam',
      title: t('viewLinkedIn'),
      external: true,
    },
    {
      icon: <IconPhone size={20} />,
      label: t('phone'),
      value: '(+58) 414-7614171',
      href: 'tel:+584147614171',
      title: t('call'),
    },
    {
      icon: <IconBrandGithub size={20} />,
      label: t('github'),
      value: 'github.com/jonarias2002',
      href: 'https://github.com/jonarias2002',
      title: t('viewGitHub'),
      external: true,
    },
  ]

  return (
    <Container size="xl" fluid py="xl" id="contacto" style={{ maxWidth: '1400px' }}>
      <Stack gap="xl">
        <Title
          order={2}
          size="2.5rem"
          c="white"
          ta="center"
          style={{ fontFamily: 'var(--font-poppins)' }}
        >
          {t('title')}
        </Title>

        <Grid gutter="xl">
          {/* Información de contacto */}
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Stack gap="xl">
              <Stack gap="md">
                <Text size="lg" c="gray.3" maw={400}>
                  {t('description')}
                </Text>
                <Text size="md" c="blue.4" fw={500}>
                  {t('location')}
                </Text>
              </Stack>

              <Stack gap="md">
                {contactInfo.map((info) => (
                  <Group gap="md" key={info.label}>
                    <ActionIcon
                      variant="light"
                      color="blue"
                      size="lg"
                      component="a"
                      href={info.href}
                      target={info.external ? '_blank' : undefined}
                      rel={info.external ? 'noopener noreferrer' : undefined}
                      title={info.title}
                    >
                      {info.icon}
                    </ActionIcon>
                    <Stack gap={0}>
                      <Text c="white" fw={500}>{info.label}</Text>
                      <Text c="gray.3" size="sm">{info.value}</Text>
                    </Stack>
                  </Group>
                ))}
              </Stack>
            </Stack>
          </Grid.Col>

          {/* Formulario */}
          <Grid.Col span={{ base: 12, md: 6 }}>
            <form onSubmit={form.onSubmit(handleSubmit)}>
              <Stack gap="md">
                <TextInput
                  label={tForm('name')}
                  placeholder={tForm('namePlaceholder')}
                  required
                  size="md"
                  radius="md"
                  {...form.getInputProps('name')}
                  styles={inputStyles}
                />
                <TextInput
                  label={tForm('email')}
                  placeholder={tForm('emailPlaceholder')}
                  required
                  size="md"
                  radius="md"
                  {...form.getInputProps('email')}
                  styles={inputStyles}
                />
                <Textarea
                  label={tForm('message')}
                  placeholder={tForm('messagePlaceholder')}
                  required
                  size="md"
                  radius="md"
                  minRows={4}
                  {...form.getInputProps('message')}
                  styles={inputStyles}
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
                  {tForm('submit')}
                </Button>
              </Stack>
            </form>
          </Grid.Col>
        </Grid>
      </Stack>

      {/* Modal de éxito */}
      <Modal
        opened={successModal}
        onClose={() => setSuccessModal(false)}
        centered
        withCloseButton={false}
        radius="lg"
        size="sm"
        zIndex={10000}
        styles={{ body: { padding: '2rem' } }}
      >
        <Stack align="center" gap="lg">
          <ThemeIcon size={80} radius="xl" color="green" variant="light">
            <IconCheck size={40} stroke={2} />
          </ThemeIcon>
          <Title order={3} ta="center">{tForm('successTitle')}</Title>
          <Text c="dimmed" ta="center" size="sm">{tForm('successMessage')}</Text>
          <Button fullWidth color="green" radius="md" size="md" onClick={() => setSuccessModal(false)}>
            {tForm('closeModal')}
          </Button>
        </Stack>
      </Modal>

      {/* Modal de error */}
      <Modal
        opened={errorModal}
        onClose={() => setErrorModal(false)}
        centered
        withCloseButton={false}
        radius="lg"
        size="sm"
        zIndex={10000}
        styles={{ body: { padding: '2rem' } }}
      >
        <Stack align="center" gap="lg">
          <ThemeIcon size={80} radius="xl" color="red" variant="light">
            <IconX size={40} stroke={2} />
          </ThemeIcon>
          <Title order={3} ta="center">{tForm('errorTitle')}</Title>
          <Text c="dimmed" ta="center" size="sm">{tForm('errorMessage')}</Text>
          <Button fullWidth color="red" radius="md" size="md" onClick={() => setErrorModal(false)}>
            {tForm('retryButton')}
          </Button>
        </Stack>
      </Modal>
    </Container>
  )
}
