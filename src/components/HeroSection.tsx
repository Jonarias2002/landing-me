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
  Grid,
  Box,
} from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import { IconArrowDown, IconDownload } from '@tabler/icons-react'
import { useTranslations } from 'next-intl'
import Image from 'next/image'

export function HeroSection() {
  const [currentText, setCurrentText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [textIndex, setTextIndex] = useState(0)
  const isMobile = useMediaQuery('(max-width: 768px)')
  const t = useTranslations('hero')

  useEffect(() => {
    const texts = [
      t('subtitle1'),
      t('subtitle2'),
      t('subtitle3'),
    ]
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
  }, [currentText, isDeleting, textIndex, t])

  const scrollToProjects = () => {
    const element = document.querySelector('#proyectos')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <Container
      size="xl"
      fluid
      h="100vh"
      px={isMobile ? "md" : "xl"}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        maxWidth: '1400px',
      }}
    >
      {/* Burbujas flotantes decorativas */}
      <Box
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 0,
          pointerEvents: 'none',
          overflow: 'hidden',
        }}
      >
        {/* Burbuja 1 */}
        <Box
          style={{
            position: 'absolute',
            top: '10%',
            left: '5%',
            width: '80px',
            height: '80px',
            borderRadius: '50%',
            background: 'rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            animation: 'floatBubble 15s ease-in-out infinite',
          }}
        />
        {/* Burbuja 2 */}
        <Box
          style={{
            position: 'absolute',
            top: '60%',
            right: '10%',
            width: '120px',
            height: '120px',
            borderRadius: '50%',
            background: 'rgba(255, 255, 255, 0.04)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            animation: 'floatBubble 20s ease-in-out infinite reverse',
          }}
        />
        {/* Burbuja 3 */}
        <Box
          style={{
            position: 'absolute',
            bottom: '20%',
            left: '15%',
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            background: 'rgba(255, 255, 255, 0.06)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            animation: 'floatBubble 18s ease-in-out infinite',
          }}
        />
        {/* Burbuja 4 */}
        <Box
          style={{
            position: 'absolute',
            top: '30%',
            right: '20%',
            width: '100px',
            height: '100px',
            borderRadius: '50%',
            background: 'rgba(255, 255, 255, 0.03)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            animation: 'floatBubble 22s ease-in-out infinite reverse',
          }}
        />
        {/* Burbuja 5 */}
        <Box
          style={{
            position: 'absolute',
            bottom: '40%',
            right: '5%',
            width: '70px',
            height: '70px',
            borderRadius: '50%',
            background: 'rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            animation: 'floatBubble 16s ease-in-out infinite',
          }}
        />
        {/* Burbuja 6 */}
        <Box
          style={{
            position: 'absolute',
            top: '50%',
            left: '10%',
            width: '90px',
            height: '90px',
            borderRadius: '50%',
            background: 'rgba(255, 255, 255, 0.04)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            animation: 'floatBubble 19s ease-in-out infinite reverse',
          }}
        />
        {/* Burbuja pequeña 1 */}
        <Box
          style={{
            position: 'absolute',
            top: '25%',
            right: '30%',
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            background: 'rgba(255, 255, 255, 0.06)',
            backdropFilter: 'blur(8px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            animation: 'floatBubble 12s ease-in-out infinite',
          }}
        />
        {/* Burbuja pequeña 2 */}
        <Box
          style={{
            position: 'absolute',
            bottom: '15%',
            right: '25%',
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            background: 'rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(8px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            animation: 'floatBubble 14s ease-in-out infinite reverse',
          }}
        />
      </Box>
      <Grid gutter="xl" style={{ width: '100%', alignItems: 'center', position: 'relative', zIndex: 1 }}>
        {/* Columna izquierda - Contenido */}
        <Grid.Col span={{ base: 12, md: 7 }}>
          <Stack align={isMobile ? "center" : "flex-start"} gap={isMobile ? "md" : "xl"} style={{ textAlign: isMobile ? 'center' : 'left', width: '100%' }}>
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
              size={isMobile ? "lg" : "xl"}
              c="blue.4"
              style={{
                fontFamily: 'var(--font-roboto)',
                minHeight: isMobile ? '1.5rem' : '2rem',
                animation: 'fadeInUp 1s ease-out 0.3s both',
              }}
            >
              {currentText}
              <span style={{ animation: 'blink 1s infinite' }}>|</span>
            </Text>

            {/* Descripción */}
            <Text
              size={isMobile ? "md" : "lg"}
              c="gray.3"
              maw={isMobile ? "100%" : 600}
              px={isMobile ? "md" : 0}
              style={{
                fontFamily: 'var(--font-roboto)',
                animation: 'fadeInUp 1s ease-out 0.6s both',
              }}
            >
              {t('description')}
            </Text>

            {/* Botón Descargar CV */}
            <Group 
              gap={isMobile ? "sm" : "md"} 
              justify={isMobile ? "center" : "flex-start"}
              style={{ 
                animation: 'fadeInUp 1s ease-out 0.9s both',
                width: '100%',
              }}
            >
              <Button
                size={isMobile ? "md" : "lg"}
                variant="outline"
                color="gray"
                leftSection={<IconDownload size={isMobile ? 18 : 20} />}
                component="a"
                href="/cv.pdf"
                download="FullStack - TechnicalLead.pdf"
                fullWidth={isMobile}
                style={{
                  maxWidth: isMobile ? '100%' : 'auto',
                }}
              >
                {t('downloadCV')}
              </Button>
            </Group>
          </Stack>
        </Grid.Col>

        {/* Columna derecha - Imagen */}
        <Grid.Col span={{ base: 12, md: 5 }} visibleFrom="md">
          <Box
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              animation: 'fadeInUp 1s ease-out 0.5s both',
            }}
          >
            <Box
              style={{
                position: 'relative',
                width: '100%',
                maxWidth: '450px',
                aspectRatio: '1',
                borderRadius: '50%',
                overflow: 'hidden',
                boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
              }}
            >
              <Image
                src="/images/me.png"
                alt="Jonathan Arias"
                fill
                style={{
                  objectFit: 'cover',
                  borderRadius: '50%',
                }}
                priority
                sizes="(max-width: 768px) 200px, 450px"
              />
            </Box>
          </Box>
        </Grid.Col>

        {/* Imagen en mobile - arriba del contenido */}
        <Grid.Col span={12} hiddenFrom="md" style={{ order: -1 }}>
          <Box
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: '1rem',
              animation: 'fadeInUp 1s ease-out 0.2s both',
            }}
          >
            <Box
              style={{
                position: 'relative',
                width: '200px',
                height: '200px',
                borderRadius: '50%',
                overflow: 'hidden',
                boxShadow: '0 15px 40px rgba(0, 0, 0, 0.3)',
              }}
            >
              <Image
                src="/images/me.png"
                alt="Jonathan Arias"
                fill
                style={{
                  objectFit: 'cover',
                  borderRadius: '50%',
                }}
                priority
                sizes="(max-width: 768px) 200px, 450px"
              />
            </Box>
          </Box>
        </Grid.Col>
      </Grid>

      {/* Flecha de scroll */}
      <ActionIcon
        variant="subtle"
        color="gray"
        size={isMobile ? "md" : "lg"}
        onClick={scrollToProjects}
        style={{
          position: 'absolute',
          bottom: isMobile ? '1rem' : '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
          animation: 'bounce 2s infinite',
          cursor: 'pointer',
          zIndex: 2,
        }}
      >
        <IconArrowDown size={isMobile ? 20 : 24} />
      </ActionIcon>

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
        
        @keyframes floatBubble {
          0%, 100% {
            transform: translate(0, 0) scale(1);
            opacity: 0.6;
          }
          25% {
            transform: translate(20px, -30px) scale(1.1);
            opacity: 0.8;
          }
          50% {
            transform: translate(-15px, -50px) scale(0.9);
            opacity: 0.7;
          }
          75% {
            transform: translate(30px, -20px) scale(1.05);
            opacity: 0.75;
          }
        }
        
      `}</style>
    </Container>
  )
}
