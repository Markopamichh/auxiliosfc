export const SITE_CONFIG = {
  name: "Auxilios FC",
  title: "Auxilios Fc / Gruas / Remolques / Auxilio Mecanico las 24 hs Neuquen",
  description: "Servicio de grúas, remolques y auxilio mecánico en Neuquén con cobertura nacional. Atención 24 horas. Traslado de vehículos, motos y maquinaria. Seriedad, responsabilidad y puntualidad.",
  url: "https://auxiliosfc.com.ar",
  locale: "es_AR",
  author: "Auxilios FC",

  contact: {
    phone: "+542995837777",
    phoneDisplay: "0299-5837777",
    phone2: "+542994234000",
    phone2Display: "0299-4234000",
    whatsapp: "5492995837777",
    whatsappMessage: "Hola, necesito auxilio mecánico urgente",
    email: "AuxiliosFc77@hotmail.com",
    owner: "Martirena, Fabricio Franco",
  },

  business: {
    address: {
      street: "Colon 235",
      city: "Centenario",
      state: "Neuquén",
      zipCode: "8309",
      country: "Argentina",
      full: "Colon 235, Centenario, Neuquén, Argentina",
    },
    hours: "Atención 24 horas, los 7 días de la semana",
    foundedYear: 2015,
    coordinates: {
      lat: -38.8333,
      lng: -68.0667,
    },
    coverageAreas: [
      "Neuquén Capital",
      "Plottier",
      "Centenario",
      "Cutral-Có",
      "Plaza Huincul",
      "Zapala",
      "Junín de los Andes",
      "San Martín de los Andes",
      "Villa La Angostura",
    ],
  },

  social: {
    facebook: "https://facebook.com/auxiliosfc",
    instagram: "https://www.instagram.com/auxiliofc/",
  },

  seo: {
    keywords: [
      "gruas neuquen",
      "auxilio mecanico neuquen",
      "remolques neuquen",
      "asistencia vial neuquen",
      "grua 24 horas neuquen",
      "servicio de gruas",
      "auxilio en ruta",
      "traslado vehiculos neuquen",
      "grua para moto neuquen",
      "cambio neumatico ruta",
      "puente bateria neuquen",
      "grua",
      "auxilio mecanico",
      "remolque",
      "asistencia vial",
      "grua 24 horas",
      "remolque",
      "auxilio",
      // Keywords de ciudades específicas
      "grua centenario neuquen",
      "auxilio mecanico plottier",
      "grua cutral co",
      "servicio grua villa la angostura",
      "auxilio mecanico san martin de los andes",
      "grua zapala",
      "grua junin de los andes",
      "grua plaza huincul",
      // Keywords de urgencia/emergencia
      "grua urgente neuquen",
      "auxilio mecanico urgente",
      "grua emergencia neuquen",
      "asistencia vial urgente neuquen",
      "remolque urgente neuquen",

      // Tipos de vehículos
      "grua para autos neuquen",
      "grua vehiculos pesados neuquen",
      "traslado maquinaria neuquen",
      "grua camiones neuquen",
      // Keywords de valor
      "mejor servicio grua neuquen",
      "grua profesional neuquen",
      "grua economica neuquen",
      "grua confiable neuquen",
    ],
  },
};

export const WHATSAPP_LINK = `https://wa.me/${SITE_CONFIG.contact.whatsapp}?text=${encodeURIComponent(SITE_CONFIG.contact.whatsappMessage)}`;
