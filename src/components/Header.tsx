'use client'

import { useState, useEffect } from 'react'
import {
  Container,
  Group,
  Button,
  Switch,
  Text,
  useMantineColorScheme,
  Burger,
  Drawer,
  Stack,
  rem,
} from '@mantine/core'
import { IconSun, IconMoon } from '@tabler/icons-react'
import { useDisclosure } from '@mantine/hooks'

const navigation = [
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Experiencia', href: '#experiencia' },
  { label: 'Contacto', href: '#contacto' },
]

export function Header() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme()
  const [opened, { toggle, close }] = useDisclosure(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    close()
  }

  return (
    <>
      <div
        style={{
          height: '70px',
          backgroundColor: scrolled ? 'rgba(26, 27, 30, 0.95)' : 'transparent',
          backdropFilter: scrolled ? 'blur(10px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.1)' : 'none',
          transition: 'all 0.3s ease',
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
        }}
      >
        <Container size="lg" h="100%">
          <Group justify="space-between" h="100%">
            {/* Logo/Nombre */}
            <Text
              size="xl"
              fw={700}
              c="white"
              style={{ fontFamily: 'var(--font-poppins)' }}
            >
              Jonathan Arias
            </Text>

            {/* Navegación Desktop */}
            <Group gap="xl" visibleFrom="md">
              {navigation.map((item) => (
                <Button
                  key={item.href}
                  variant="subtle"
                  color="gray"
                  onClick={() => scrollToSection(item.href)}
                  styles={{
                    root: {
                      color: 'white',
                      '&:hover': {
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      },
                    },
                  }}
                >
                  {item.label}
                </Button>
              ))}
              
              {/* Switch de tema */}
              <Switch
                checked={colorScheme === 'dark'}
                onChange={toggleColorScheme}
                size="md"
                onLabel={<IconSun size={16} stroke={2.5} />}
                offLabel={<IconMoon size={16} stroke={2.5} />}
                styles={{
                  root: {
                    '--mantine-color-white': '#1A1B1E',
                    '--mantine-color-blue-6': '#339af0',
                  },
                }}
              />
            </Group>

            {/* Botón móvil */}
            <Burger
              opened={opened}
              onClick={toggle}
              hiddenFrom="md"
              color="white"
            />
          </Group>
        </Container>
      </div>

      {/* Drawer móvil */}
      <Drawer
        opened={opened}
        onClose={close}
        size="100%"
        padding="md"
        title="Navegación"
        hiddenFrom="md"
        zIndex={100000}
        styles={{
          header: {
            backgroundColor: '#1A1B1E',
            color: 'white',
          },
          body: {
            backgroundColor: '#1A1B1E',
          },
        }}
      >
        <Stack gap="xl" mt={rem(60)}>
          {navigation.map((item) => (
            <Button
              key={item.href}
              variant="subtle"
              color="gray"
              size="lg"
              onClick={() => scrollToSection(item.href)}
              styles={{
                root: {
                  color: 'white',
                  fontSize: '1.1rem',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  },
                },
              }}
            >
              {item.label}
            </Button>
          ))}
          
          <Switch
            checked={colorScheme === 'dark'}
            onChange={toggleColorScheme}
            size="lg"
            onLabel={<IconSun size={20} stroke={2.5} />}
            offLabel={<IconMoon size={20} stroke={2.5} />}
            label="Cambiar tema"
            styles={{
              root: {
                '--mantine-color-white': '#1A1B1E',
                '--mantine-color-blue-6': '#339af0',
              },
              label: {
                color: 'white',
                fontSize: '1.1rem',
              },
            }}
          />
        </Stack>
      </Drawer>
    </>
  )
}
