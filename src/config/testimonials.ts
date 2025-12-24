export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  text: string;
  date: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "Juan Carlos Pérez",
    location: "Neuquén Capital",
    rating: 5,
    text: "Excelente servicio. Me quedé sin batería en plena ruta y llegaron en menos de 20 minutos. Muy profesionales y amables. Los recomiendo 100%.",
    date: "2024-11-15",
  },
  {
    id: "2",
    name: "María Fernanda González",
    location: "Plottier",
    rating: 5,
    text: "Tuve que trasladar mi auto siniestrado y el servicio fue impecable. Se encargaron de todo, incluso de la factura para el seguro. Muy responsables.",
    date: "2024-10-28",
  },
  {
    id: "3",
    name: "Roberto Díaz",
    location: "Centenario",
    rating: 5,
    text: "Llamé un domingo a la madrugada con un problema con mi camioneta. Vinieron enseguida y resolvieron todo en el lugar. Servicio 24/7 real, no como otros.",
    date: "2024-12-05",
  },
  {
    id: "4",
    name: "Claudia Martínez",
    location: "Cutral-Có",
    rating: 5,
    text: "Necesitaba trasladar mi moto desde Cutral-Có a Neuquén. El traslado fue perfecto, llegó sin un rasguño. Muy cuidadosos y el precio fue justo.",
    date: "2024-09-20",
  },
  {
    id: "5",
    name: "Diego Ramírez",
    location: "San Martín de los Andes",
    rating: 5,
    text: "Me quedé sin combustible en la ruta camino a San Martín. Me trajeron nafta directamente y pude seguir mi viaje. Salvaron mis vacaciones. Gracias!",
    date: "2024-11-02",
  },
];
