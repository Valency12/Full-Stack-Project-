# PlusZone 🚀

**PlusZone** es una Single Page Application (SPA) que combina la agilidad de Tinder con la estructura profesional de LinkedIn. Una aplicación innovadora para conectar con talento profesional de forma moderna e interactiva.

## 🎯 Características Principales

- **Motor de Swiping**: Sistema de arrastre fluido con animaciones suaves usando Framer Motion
- **Tarjetas Interactivas**: Cards profesionales con animación 3D flip para ver más detalles
- **Sistema de Matches**: Pantalla de celebración animada cuando hay un match
- **Diseño Responsivo**: Mobile First con soporte completo para escritorio
- **Estado Global**: Gestión de estado con Zustand
- **Arquitectura Modular**: Estructura basada en Atomic Design

## 🛠️ Tecnologías

- **React 18** - Framework de UI
- **TypeScript** - Tipado estático
- **Framer Motion** - Animaciones fluidas y avanzadas
- **Zustand** - Gestión de estado global
- **Vite** - Build tool rápido
- **CSS3** - Estilos modernos con variables CSS

## 📁 Estructura del Proyecto

```
src/
├── components/
│   ├── atoms/          # Componentes básicos (Button, Tag)
│   ├── molecules/      # Componentes compuestos (SwipeStamp)
│   ├── organisms/      # Componentes complejos (ProfessionalCard, SwipeContainer, MatchOverlay)
│   └── templates/      # Layouts principales (DiscoveryFeed)
├── data/
│   └── mockData.ts     # Datos de ejemplo (perfiles y ofertas)
├── hooks/
│   └── useSwipe.ts     # Hook personalizado para lógica de swipe
├── store/
│   └── useSwipeStore.ts # Store global con Zustand
├── styles/
│   └── global.css      # Estilos globales y variables CSS
├── App.tsx             # Componente principal
└── main.tsx            # Punto de entrada
```

## 🚀 Instalación

1. **Instalar dependencias:**
```bash
npm install
```

2. **Ejecutar en modo desarrollo:**
```bash
npm run dev
```

3. **Construir para producción:**
```bash
npm run build
```

4. **Previsualizar build de producción:**
```bash
npm run preview
```

## 🎨 Características de Diseño

### Paleta de Colores
- **Dark Gray**: `#1a1a1a` - Texto principal
- **Medium Gray**: `#666666` - Texto secundario
- **Electric Blue**: `#0066ff` - Color de acento
- **White**: `#ffffff` - Fondos y contraste
- **Background Gray**: `#f5f5f5` - Fondo de la aplicación

### Componentes Principales

#### ProfessionalCard
- Vista frontal con foto, nombre y tags de habilidades
- Animación flip 3D al hacer clic para ver descripción detallada
- Sistema de arrastre con rotación y opacidad dinámica

#### SwipeContainer
- Gestión del stack de tarjetas
- Animaciones de entrada/salida
- Stamps visuales (INTERESADO/PASAR) durante el arrastre

#### MatchOverlay
- Pantalla de celebración animada
- Efectos de confeti y animaciones spring
- Overlay modal con backdrop blur

#### DiscoveryFeed
- Layout principal de la aplicación
- Header sticky con branding
- Footer con estadísticas en tiempo real

## 🎮 Uso

1. **Deslizar Tarjetas**: Arrastra las tarjetas a la izquierda (Pasar) o derecha (Interesado)
2. **Ver Detalles**: Haz clic en una tarjeta para ver más información (flip 3D)
3. **Botones de Acción**: Usa los botones inferiores (✕ para pasar, ♥ para interesado)
4. **Matches**: Cuando haya un match, aparecerá una pantalla de celebración

## 📱 Diseño Responsivo

- **Mobile First**: Optimizado para dispositivos móviles
- **Tablets**: Adaptación automática para tablets
- **Desktop**: Experiencia completa en pantallas grandes
- **Breakpoints**: 
  - Mobile: hasta 480px
  - Tablet: 481px - 768px
  - Desktop: 769px+

## 🔧 Configuración

El proyecto usa Vite como build tool. La configuración se encuentra en `vite.config.js`.

### Variables de Entorno

Puedes crear un archivo `.env` para configuraciones específicas:

```env
VITE_API_URL=your_api_url_here
```

## 📝 Notas de Desarrollo

- **Animaciones Fluidas**: Todas las animaciones usan Framer Motion para garantizar 60fps
- **Rendimiento**: Componentes optimizados con React.memo cuando es necesario
- **Accesibilidad**: Atributos ARIA y navegación por teclado implementados
- **Tipado**: TypeScript estricto para mayor seguridad de tipos

## 🤝 Contribuir

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.

## 👨‍💻 Autor

Desarrollado con ❤️ siguiendo las mejores prácticas de React y Framer Motion.

---

**¡Happy Swiping!** 🎉
