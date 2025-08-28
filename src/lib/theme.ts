import { createTheme, MantineColorsTuple } from '@mantine/core'

const blue: MantineColorsTuple = [
  '#e7f5ff',
  '#d0ebff',
  '#a5d8ff',
  '#66b3ff',
  '#339af0',
  '#228be6',
  '#1c7ed6',
  '#1971c2',
  '#1864ab',
  '#1c7ed6'
]

const mint: MantineColorsTuple = [
  '#f0fdf4',
  '#dcfce7',
  '#bbf7d0',
  '#86efac',
  '#4ade80',
  '#22c55e',
  '#16a34a',
  '#15803d',
  '#166534',
  '#14532d'
]

export const theme = createTheme({
  primaryColor: 'blue',
  primaryShade: 5,
  colors: {
    blue,
    mint,
  },
  fontFamily: 'var(--font-roboto), sans-serif',
  fontFamilyMonospace: 'var(--font-inter), monospace',
  headings: {
    fontFamily: 'var(--font-poppins), sans-serif',
    fontWeight: '600',
  },
  defaultRadius: 'md',
  shadows: {
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  },
  components: {
    Button: {
      defaultProps: {
        radius: 'md',
      },
      styles: {
        root: {
          fontWeight: 500,
        },
      },
    },
    Card: {
      defaultProps: {
        radius: 'lg',
        shadow: 'md',
      },
      styles: {
        root: {
          backgroundColor: '#25262B',
          border: '1px solid #2C2E33',
          transition: 'all 0.2s ease',
          '&:hover': {
            transform: 'translateY(-5px)',
            boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
          },
        },
      },
    },
    Title: {
      styles: {
        root: {
          fontFamily: 'var(--font-poppins), sans-serif',
          fontWeight: 600,
        },
      },
    },
    Text: {
      styles: {
        root: {
          fontFamily: 'var(--font-roboto), sans-serif',
        },
      },
    },
  },
})
