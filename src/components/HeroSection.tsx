'use client'

import { useState, useEffect } from 'react'
import {
  Container,
  Title,
  Text,
  Group,
  Button,
  Stack,
  ActionIcon,
} from '@mantine/core'
import { IconArrowDown, IconDownload, IconEye } from '@tabler/icons-react'

const fadeInUp = {
  '0%': { opacity: 0, transform: 'translateY(30px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
}

const bounce = {
  '0%, 20%, 50%, 80%, 100%': { transform: 'translateY(0)' },
  '40%': { transform: 'translateY(-10px)' },
  '60%': { transform: 'translateY(-5px)' },
}

export function HeroSection() {
  const [currentText, setCurrentText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [textIndex, setTextIndex] = useState(0)
  
  const texts = [
    'Desarrollador Full-Stack',
    'Especialista en React y Next.js',
    'Apasionado por la innovación',
  ]

  useEffect(() => {
    const currentFullText = texts[textIndex]
    
    if (isDeleting) {
      if (currentText.length > 0) {
        const timeout = setTimeout(() => {
          setCurrentText(currentText.slice(0, -1))
        }, 50)
        return () => clearTimeout(timeout)
      } else {
        setIsDeleting(false)
        setTextIndex((prev) => (prev + 1) % texts.length)
      }
    } else {
      if (currentText.length < currentFullText.length) {
        const timeout = setTimeout(() => {
          setCurrentText(currentFullText.slice(0, currentText.length + 1))
        }, 100)
        return () => clearTimeout(timeout)
      } else {
        const timeout = setTimeout(() => {
          setIsDeleting(true)
        }, 2000)
        return () => clearTimeout(timeout)
      }
    }
  }, [currentText, isDeleting, textIndex, texts])

  const scrollToProjects = () => {
    const element = document.querySelector('#proyectos')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <Container
      size="lg"
      h="100vh"
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
      }}
    >
      <Stack align="center" spacing="xl" style={{ textAlign: 'center' }}>
        {/* Título principal */}
        <Title
          order={1}
          size="4rem"
          c="white"
          style={{
            fontFamily: 'var(--font-poppins)',
            animation: 'fadeInUp 1s ease-out',
            margin: 0,
          }}
          visibleFrom="md"
        >
          Jonathan Arias
        </Title>
        
        <Title
          order={1}
          size="2.5rem"
          c="white"
          style={{
            fontFamily: 'var(--font-poppins)',
            animation: 'fadeInUp 1s ease-out',
            margin: 0,
          }}
          hiddenFrom="md"
        >
          Jonathan Arias
        </Title>

        {/* Texto animado */}
        <Text
          size="xl"
          c="blue.4"
          style={{
            fontFamily: 'var(--font-roboto)',
            minHeight: '2rem',
            animation: 'fadeInUp 1s ease-out 0.3s both',
          }}
        >
          {currentText}
          <span style={{ animation: 'blink 1s infinite' }}>|</span>
        </Text>

        {/* Descripción */}
        <Text
          size="lg"
          c="gray.3"
          maw={600}
          style={{
            fontFamily: 'var(--font-roboto)',
            animation: 'fadeInUp 1s ease-out 0.6s both',
          }}
        >
          Transformo ideas en aplicaciones web robustas, interactivas y de alto rendimiento.
        </Text>

        {/* Botones */}
        <Group gap="md" style={{ animation: 'fadeInUp 1s ease-out 0.9s both' }}>
          <Button
            size="lg"
            variant="filled"
            color="blue"
            leftSection={<IconEye size={20} />}
            onClick={scrollToProjects}
          >
            Ver mis proyectos
          </Button>
          
          <Button
            size="lg"
            variant="outline"
            color="gray"
            leftSection={<IconDownload size={20} />}
            component="a"
            href="/cv-jonathan-arias.pdf"
            download
          >
            Descargar CV
          </Button>
        </Group>

        {/* Flecha de scroll */}
        <ActionIcon
          variant="subtle"
          color="gray"
          size="lg"
          onClick={scrollToProjects}
          style={{
            position: 'absolute',
            bottom: '2rem',
            animation: 'bounce 2s infinite',
            cursor: 'pointer',
          }}
        >
          <IconArrowDown size={24} />
        </ActionIcon>
      </Stack>

      <style jsx>{`
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
        
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
        
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% { 
            transform: translateY(0); 
          }
          40% { 
            transform: translateY(-10px); 
          }
          60% { 
            transform: translateY(-5px); 
          }
        }
      `}</style>
    </Container>
  )
}
