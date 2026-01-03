export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  image: string;
  keywords: string[];
  category: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "que-hacer-cuando-tu-auto-se-descompone-en-ruta",
    title: "¿Qué Hacer Cuando tu Auto se Descompone en Ruta? Guía Completa",
    description: "Guía práctica y completa sobre qué hacer cuando tu vehículo se descompone en la ruta. Tips de seguridad y cómo solicitar auxilio mecánico en Neuquén.",
    date: "2026-01-03",
    author: "Auxilios FC",
    image: "/images/grua1.webp",
    keywords: [
      "auto descompuesto en ruta",
      "emergencia vehicular neuquen",
      "auxilio mecanico ruta",
      "que hacer auto averiado",
      "seguridad vial neuquen"
    ],
    category: "Consejos"
  },
  {
    slug: "como-elegir-servicio-grua-confiable-neuquen",
    title: "Cómo Elegir un Servicio de Grúa Confiable en Neuquén",
    description: "Factores clave a considerar al contratar un servicio de grúa en Neuquén. Aprende a identificar empresas confiables y profesionales.",
    date: "2026-01-02",
    author: "Auxilios FC",
    image: "/images/grua.webp",
    keywords: [
      "servicio grua confiable",
      "elegir grua neuquen",
      "mejor grua neuquen",
      "grua profesional",
      "como contratar grua"
    ],
    category: "Guías"
  },
  {
    slug: "auxilio-mecanico-24-horas-por-que-es-importante",
    title: "Auxilio Mecánico 24 Horas: ¿Por Qué es Importante?",
    description: "Descubre por qué es fundamental contar con un servicio de auxilio mecánico disponible las 24 horas del día en Neuquén.",
    date: "2026-01-01",
    author: "Auxilios FC",
    image: "/images/grua3.webp",
    keywords: [
      "auxilio 24 horas neuquen",
      "emergencia nocturna auto",
      "asistencia vial 24/7",
      "grua de noche",
      "servicio urgente neuquen"
    ],
    category: "Información"
  },
  {
    slug: "cuidados-basicos-para-evitar-quedarte-sin-bateria",
    title: "Cuidados Básicos para Evitar Quedarte sin Batería",
    description: "Tips y recomendaciones de mantenimiento preventivo para evitar problemas con la batería de tu vehículo en Neuquén.",
    date: "2025-12-30",
    author: "Auxilios FC",
    image: "/images/grua4.webp",
    keywords: [
      "bateria descargada prevencion",
      "mantenimiento bateria auto",
      "cuidado bateria vehiculo",
      "evitar bateria muerta",
      "tips mantenimiento auto"
    ],
    category: "Mantenimiento"
  }
];
