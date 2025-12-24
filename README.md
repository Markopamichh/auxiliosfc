# Auxilios FC - Landing Page Profesional

> Landing page optimizada para SEO local de servicio de grúas y auxilio mecánico en Neuquén, Argentina.

## ✨ Características

- ⚡️ **Performance Optimizada**: Carga < 2s con Astro Static Site Generation
- 🎨 **Diseño Responsive**: Mobile-first, perfecto en todos los dispositivos
- 🔍 **SEO Completo**: Schema Markup (LocalBusiness), meta tags, sitemap automático
- ♿ **100% Accesible**: Cumple estándares WCAG AA
- 💚 **WhatsApp Integration**: Botón flotante sticky y CTAs directos
- 📱 **Click-to-Call**: Llamadas directas desde dispositivos móviles
- 🗺️ **Google Maps**: Mapa interactivo embebido
- 📧 **Formulario de Contacto**: Integrado con FormSubmit (sin backend)
- 🖼️ **Imágenes Optimizadas**: Todas en formato WebP para máxima velocidad

## 🛠️ Stack Tecnológico

- **Framework**: Astro 4.x (Static Site Generation)
- **Estilos**: Tailwind CSS 4.x
- **Tipografías**: Inter + Montserrat (self-hosted vía @fontsource)
- **Optimización**: Imágenes WebP, lazy loading, minificación automática
- **SEO**: @astrojs/sitemap para generación automática de sitemap

## 🚀 Inicio Rápido

### Requisitos Previos

- Node.js 18 o superior
- npm o yarn

### Instalación

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Abrir en el navegador: http://localhost:4321
```

### Comandos Disponibles

| Comando           | Acción                                      |
|-------------------|---------------------------------------------|
| `npm run dev`     | Inicia servidor de desarrollo en `localhost:4321` |
| `npm run build`   | Genera build de producción en `./dist/`    |
| `npm run preview` | Preview del build de producción localmente |

## ⚙️ Configuración Necesaria

### 1. Datos de Contacto (IMPORTANTE)

Editar `src/config/site.ts` y reemplazar los placeholders:

```typescript
contact: {
  phone: "+542991234567",        // ← REEMPLAZAR con número real
  whatsapp: "5492991234567",     // ← REEMPLAZAR (formato internacional sin +)
  phoneDisplay: "0299-1234567",  // ← REEMPLAZAR (formato de visualización)
  email: "contacto@auxiliosfc.com.ar"
}
```

### 2. Dirección Física

En `src/config/site.ts`:

```typescript
business: {
  address: {
    street: "Calle y Número",              // ← ACTUALIZAR
    city: "Neuquén",
    full: "Dirección completa, Neuquén"    // ← ACTUALIZAR
  },
  coordinates: {
    lat: -38.9516,  // ← Actualizar con coordenadas exactas
    lng: -68.0591
  }
}
```

### 3. Google Analytics (Opcional)

Editar `src/layouts/BaseLayout.astro` línea ~32:

```html
gtag('config', 'G-XXXXXXXXXX'); // ← Reemplazar con tu ID de GA4
```

### 4. Configurar Formulario de Contacto

En `src/components/sections/ContactForm.astro` línea ~78:

```html
<form
  action="https://formsubmit.co/contacto@auxiliosfc.com.ar"
  <!-- Reemplazar con tu email real -->
>
```

**Importante**: La primera vez que recibas un email de FormSubmit, debes hacer click en el link de confirmación.

### 5. Redes Sociales

En `src/config/site.ts`:

```typescript
social: {
  facebook: "https://facebook.com/auxiliosfc",   // ← ACTUALIZAR
  instagram: "https://instagram.com/auxiliosfc"  // ← ACTUALIZAR
}
```

## 📁 Estructura del Proyecto

```
src/
├── components/
│   ├── layout/              # Header, Footer, FloatingWhatsApp
│   ├── sections/            # Hero, Services, Gallery, etc.
│   ├── seo/                 # Componentes SEO (Schema, OpenGraph)
│   └── ui/                  # Componentes reutilizables (Cards, Buttons)
├── config/                  # Archivos de configuración
│   ├── site.ts             # ⚙️ Datos generales del sitio
│   ├── services.ts         # 📋 Lista de servicios
│   ├── benefits.ts         # ⭐ Beneficios/ventajas
│   └── testimonials.ts     # 💬 Testimonios de clientes
├── layouts/
│   └── BaseLayout.astro    # Layout principal con SEO
├── pages/
│   └── index.astro         # Homepage (ensambla todas las secciones)
└── styles/
    └── global.css          # Estilos globales y utilidades
```

## 🚀 Deployment

### Opción 1: Netlify (Recomendado - Gratis)

1. Conectar repositorio de GitHub a Netlify
2. Configurar build:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
3. Deploy automático en cada push

**Dominio personalizado**: Configurar en Netlify Settings → Domain Management

### Opción 2: Vercel (Gratis)

1. Importar repositorio desde GitHub
2. Vercel auto-detecta configuración de Astro
3. Deploy automático

### Opción 3: Hosting Tradicional (cPanel/FTP)

```bash
# 1. Generar build de producción
npm run build

# 2. Subir todo el contenido de la carpeta dist/ vía FTP
# 3. Apuntar el dominio a la carpeta donde subiste los archivos
```

## 📊 Checklist Post-Deployment

### SEO y Herramientas

- [ ] Verificar sitio en [Google Search Console](https://search.google.com/search-console)
- [ ] Enviar sitemap manualmente: `https://tudominio.com.ar/sitemap-index.xml`
- [ ] Configurar/actualizar [Google My Business](https://business.google.com)
- [ ] Validar Schema Markup en [Rich Results Test](https://search.google.com/test/rich-results)
- [ ] Verificar performance con [PageSpeed Insights](https://pagespeed.web.dev/) (objetivo: 90+)
- [ ] Probar en [Mobile-Friendly Test](https://search.google.com/test/mobile-friendly)

### Funcionalidad

- [ ] Probar botón de WhatsApp en móvil (debe abrir app)
- [ ] Probar click-to-call en móvil
- [ ] Enviar email de prueba desde formulario de contacto
- [ ] Verificar que Google Maps carga correctamente
- [ ] Probar navegación en diferentes dispositivos
- [ ] Verificar que todas las imágenes cargan

### Analítica

- [ ] Configurar Google Analytics 4
- [ ] Configurar conversiones en GA4 (WhatsApp clicks, llamadas, formularios)
- [ ] Instalar píxel de Facebook (si aplica)

## 🎯 Keywords SEO Objetivo

**Primarios** (alta competencia, alto volumen):
- gruas neuquen
- auxilio mecanico neuquen
- remolques neuquen
- servicio de gruas neuquen
- grua 24 horas neuquen

**Secundarios**:
- traslado vehiculos neuquen
- grua para moto neuquen
- auxilio vial neuquen
- cambio neumatico ruta neuquen

**Long-tail** (baja competencia, alta conversión):
- servicio de gruas 24 horas en neuquen
- auxilio mecanico zona norte neuquen
- grua para vehiculos siniestrados neuquen

## 🎨 Paleta de Colores

- **Primario**: Orange (#FFA500) - Botones y elementos destacados
- **Secundario**: Negro/Gris (#1a1a1a, #333333) - Texto y fondos oscuros
- **Acento WhatsApp**: Verde (#25D366) - Botones de WhatsApp
- **Neutros**: Blanco/Gris claro (#FFFFFF, #F5F5F5) - Fondos

## 📝 Actualizar Contenido

### Agregar/Editar Servicios

Editar `src/config/services.ts`:

```typescript
export const SERVICES: Service[] = [
  {
    id: "nuevo-servicio",
    title: "Nombre del Servicio",
    description: "Descripción detallada...",
    image: "/images/nueva-imagen.webp",
  },
  // ...otros servicios
];
```

### Agregar Testimonios

Editar `src/config/testimonials.ts`:

```typescript
{
  id: "6",
  name: "Nombre Cliente",
  location: "Ciudad, Neuquén",
  rating: 5,
  text: "Excelente servicio...",
  date: "2025-01-15",
}
```

### Cambiar Imágenes

1. Colocar nuevas imágenes en `public/images/`
2. Preferiblemente en formato WebP para mejor performance
3. Actualizar referencias en los archivos de configuración

## 🔧 Troubleshooting

### El sitio no carga estilos

- Verificar que ejecutaste `npm install` antes de `npm run dev`
- Limpiar caché del navegador
- Intentar `npm run build` y luego `npm run preview`

### Formulario no envía emails

- Confirmar que configuraste el email correcto en FormSubmit
- Verificar que confirmaste el email la primera vez que recibiste un mensaje
- Revisar carpeta de spam

### Imágenes no cargan

- Verificar que las imágenes están en `public/images/`
- Verificar rutas (deben empezar con `/images/...`)
- Verificar que las extensiones coinciden (`.webp`, `.jpg`, etc.)

## 📞 Soporte

Si necesitás ayuda con el proyecto, contactame.

---

**Desarrollado con** ❤️ **usando Astro + Tailwind CSS**

© 2025 Auxilios FC - Todos los derechos reservados
