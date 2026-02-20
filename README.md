# 🎨 The Code Canvas - Portafolio de Jonathan Arias

Un portafolio moderno y elegante construido con **Next.js 15**, **Mantine UI** y **TypeScript**, diseñado para mostrar proyectos de desarrollo web de manera profesional.

## ✨ Características

- 🎯 **Diseño Minimalista**: Interfaz limpia y elegante centrada en la tipografía
- 🌙 **Modo Oscuro**: Tema oscuro por defecto con paleta de colores personalizada
- 📱 **Responsive**: Optimizado para todos los dispositivos
- 🚀 **Performance**: Construido con Next.js 15 y optimizaciones de rendimiento
- 🎭 **Animaciones**: Micro-animaciones sutiles y efectos de hover
- 🔧 **TypeScript**: Código completamente tipado para mayor robustez
- 🎨 **Mantine UI**: Componentes modernos y accesibles

## 🎨 Paleta de Colores

### Modo Oscuro (Por defecto)
- **Fondo Principal**: `#1A1B1E` (Gris muy oscuro con toque azulado)
- **Fondo de Capas**: `#25262B` (Gris ligeramente más claro)
- **Color de Acento**: `#339af0` (Azul eléctrico)
- **Texto Principal**: `#F8F9FA` (Blanco suave)
- **Texto Secundario**: `#A6A7AB` (Gris claro)

## 🚀 Tecnologías Utilizadas

- **Frontend**: Next.js 15, React 19, TypeScript
- **UI Components**: Mantine UI v8
- **Iconos**: Tabler Icons
- **Fuentes**: Google Fonts (Poppins, Inter, Roboto)
- **Estilos**: Tailwind CSS v4 + estilos personalizados
- **Animaciones**: CSS Keyframes
- **i18n**: next-intl
- **Email**: EmailJS

## 📁 Estructura del Proyecto

```
src/
├── app/                         # App Router de Next.js
│   ├── [locale]/
│   │   ├── layout.tsx          # Layout con i18n + Mantine
│   │   └── page.tsx            # Página principal
│   ├── layout.tsx              # Root layout
│   └── globals.css             # Estilos globales
├── components/             # Componentes reutilizables
│   ├── Header.tsx         # Navegación y switch de tema
│   ├── HeroSection.tsx    # Sección principal con animación typing
│   ├── ProjectsSection.tsx # Grid de proyectos destacados
│   ├── ExperienceSection.tsx # Timeline de experiencia laboral
│   ├── ContactSection.tsx # Formulario de contacto
│   └── Footer.tsx         # Footer con enlaces sociales
├── data/                        # Datos estáticos
│   ├── projects.ts              # Información de proyectos
│   └── experience.ts            # Experiencia laboral
├── hooks/
│   └── useExperience.ts         # Hook para experiencia traducida
├── i18n/
│   ├── request.ts               # Configuración de mensajes
│   └── routing.ts               # Rutas de idioma
├── messages/
│   ├── es.json                  # Textos en español
│   └── en.json                  # Textos en inglés
├── lib/
│   └── theme.ts                 # Tema personalizado de Mantine
└── types/
    └── index.ts                 # Interfaces principales
```

## 🛠️ Instalación

### Prerrequisitos
- Node.js 18+ 
- npm o yarn

### Pasos de Instalación

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/tu-usuario/landing-me.git
   cd landing-me
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Ejecutar en desarrollo**
   ```bash
   npm run dev
   ```

4. **Abrir en el navegador**
   ```
   http://localhost:3000
   ```

## 🔧 Configuración

### Personalizar Datos

1. **Proyectos**: Edita `src/data/projects.ts`
2. **Experiencia**: Modifica `src/data/experience.ts`
3. **Información de contacto**: Actualiza enlaces en `src/components/ContactSection.tsx`

### Personalizar Tema

El tema se configura en `src/lib/theme.ts`. Puedes modificar:
- Paleta de colores
- Tipografías
- Sombras y bordes
- Estilos de componentes

### Personalizar Fuentes

Las fuentes se configuran en `src/app/layout.tsx`:
- **Poppins**: Para títulos y encabezados
- **Inter**: Para texto monoespaciado
- **Roboto**: Para texto del cuerpo

## 📱 Secciones del Portafolio

### 1. Header
- Navegación fija con efecto de transparencia
- Switch de tema claro/oscuro
- Menú móvil responsive

### 2. Hero Section
- Nombre y título principal
- Animación de máquina de escribir
- Botones de acción (Ver proyectos, Descargar CV)
- Flecha animada para scroll

### 3. Proyectos
- Grid de proyectos destacados
- Tarjetas con hover effects
- Tecnologías utilizadas
- Enlaces a GitHub y demo

### 4. Experiencia
- Timeline de experiencia laboral
- Logros y tecnologías por posición
- Diseño visual atractivo

### 5. Contacto
- Formulario de contacto funcional
- Información de contacto
- Enlaces a redes sociales

### 6. Footer
- Copyright y créditos
- Enlaces a GitHub y LinkedIn

## 🎨 Personalización Avanzada

### Agregar Nuevas Secciones

1. Crea el componente en `src/components/`
2. Importa en `src/app/page.tsx`
3. Agrega los datos correspondientes en `src/data/`

### Modificar Animaciones

Las animaciones se definen en `src/app/globals.css`:
- `fadeInUp`: Entrada desde abajo
- `fadeInLeft`: Entrada desde la izquierda
- `fadeInRight`: Entrada desde la derecha

### Agregar Efectos Visuales

- **Glassmorphism**: Usa la clase `.glass`
- **Gradientes**: Aplica `.gradient-text` o `.gradient-border`
- **Hover Effects**: Usa `.card-hover` para tarjetas

## 🚀 Deployment

### Vercel (la forma más fácil)

1. Sube tu proyecto a GitHub.
2. Ve a [https://vercel.com](https://vercel.com) y conecta tu cuenta de GitHub.
3. Importa el repositorio.
4. En **Environment Variables**, agrega:
   - `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
   - `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`
   - `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`
5. Click en **Deploy**.

Listo. Vercel detecta Next.js automáticamente.

### Deploy por CLI (opcional)

```bash
npm i -g vercel
vercel
vercel --prod
```

## 📊 Performance

- **Lighthouse Score**: 95+ en todas las métricas
- **Core Web Vitals**: Optimizado para LCP, FID y CLS
- **Bundle Size**: Optimizado con Next.js 15
- **Images**: Optimización automática con Next.js Image

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver `LICENSE` para más detalles.

## 📞 Contacto

- **Email**: jonathan.arias@email.com
- **LinkedIn**: [linkedin.com/in/jonathanarias](https://linkedin.com/in/jonathanarias)
- **GitHub**: [github.com/jonathanarias](https://github.com/jonathanarias)

## 🙏 Agradecimientos

- [Mantine UI](https://mantine.dev/) por los componentes increíbles
- [Next.js](https://nextjs.org/) por el framework
- [Tabler Icons](https://tabler-icons.io/) por los iconos
- [Google Fonts](https://fonts.google.com/) por las tipografías

---

⭐ **Si te gusta este proyecto, dale una estrella en GitHub!**
