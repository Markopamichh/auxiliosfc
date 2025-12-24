export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  image?: string;
}

export const SERVICES: Service[] = [
  {
    id: "grua",
    title: "Servicio de Grúa",
    description: "Traslado seguro de vehículos livianos, semipesados y pesados a taller o domicilio. Contamos con equipamiento de última generación para un traslado sin daños.",
    icon: "mdi:tow-truck",
    image: "/images/grua.webp",
  },
  {
    id: "auxilio-mecanico",
    title: "Auxilio Mecánico 24hs",
    description: "Asistencia inmediata en ruta para problemas mecánicos, eléctricos o de motor. Atención profesional las 24 horas del día, los 365 días del año.",
    icon: "mdi:wrench",
    image: "/images/grua1.webp",
  },
  {
    id: "traslado-motos",
    title: "Traslado de Motos",
    description: "Servicio especializado en traslado de motocicletas con sistemas de sujeción seguros. Cuidamos tu moto como si fuera nuestra.",
    icon: "mdi:motorbike",
    image: "/images/gruamoto.webp",
  },
  {
    id: "puente-bateria",
    title: "Puente de Batería",
    description: "¿Batería descargada? Llegamos rápidamente con los equipos necesarios para dar puente y ponerte en marcha nuevamente.",
    icon: "mdi:car-battery",
    image: "/images/grua3.webp",
  },
  {
    id: "cambio-neumatico",
    title: "Cambio de Neumáticos",
    description: "Cambio de rueda en ruta o en la ciudad. Llevamos las herramientas necesarias para un cambio seguro y rápido.",
    icon: "mdi:car-tire-alert",
    image: "/images/grua4.webp",
  },
  {
    id: "combustible",
    title: "Provisión de Combustible",
    description: "¿Te quedaste sin combustible? Llevamos nafta o diesel directamente donde te encuentres para que puedas continuar tu viaje.",
    icon: "mdi:gas-station",
    image: "/images/grua5.webp",
  },
  {
    id: "vehiculos-siniestrados",
    title: "Rescate de Vehículos Siniestrados",
    description: "Traslado de vehículos siniestrados, bloqueados o con faltantes. Emitimos facturas para reembolso de seguros. Todas las formas de pago.",
    icon: "mdi:car-wrench",
    image: "/images/gruasiniestro.webp",
  },
  {
    id: "maquinaria",
    title: "Traslado de Maquinaria",
    description: "Servicio de traslado de maquinaria pesada, herramientas y equipos en general. Contamos con plataformas especializadas para cargas de gran tamaño.",
    icon: "mdi:forklift",
    image: "/images/grua2.webp",
  },
];
