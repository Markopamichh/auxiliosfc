export interface Benefit {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export const BENEFITS: Benefit[] = [
  {
    id: "24-7",
    title: "Disponibilidad 24/7",
    description: "Atención todos los días del año, incluyendo feriados y fines de semana. Siempre estamos listos para ayudarte cuando más lo necesitas.",
    icon: "mdi:clock-time-four-outline",
  },
  {
    id: "respuesta-rapida",
    title: "Respuesta Rápida",
    description: "Llegamos en minutos a tu ubicación. Nuestro equipo está estratégicamente distribuido para brindarte el servicio más rápido de la zona.",
    icon: "mdi:speedometer",
  },
  {
    id: "equipos-modernos",
    title: "Equipos de Última Generación",
    description: "Contamos con grúas y equipamiento moderno para garantizar un servicio seguro y profesional. Tecnología al servicio de tu tranquilidad.",
    icon: "mdi:truck-check",
  },
  {
    id: "experiencia",
    title: "Seriedad y Profesionalismo",
    description: "Años de experiencia en el rubro nos avalan. Seriedad, responsabilidad y puntualidad en cada servicio. Facturación A, B, C y todas las formas de pago.",
    icon: "mdi:shield-check",
  },
  {
    id: "cobertura-nacional",
    title: "Cobertura Nacional",
    description: "Con base en Centenario, Neuquén, brindamos servicio en toda la provincia y cobertura nacional. Estamos listos para asistirte en cualquier punto del país con la misma calidad y profesionalismo.",
    icon: "mdi:map-marker-radius",
  },
  {
    id: "facturacion",
    title: "Facturación Completa",
    description: "Emitimos Facturas A, B y C. Facturas para reembolso de seguros. Aceptamos todas las formas de pago: efectivo, transferencia, tarjetas.",
    icon: "mdi:file-document-check",
  },
];
