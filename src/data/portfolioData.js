export const clientInfo = {
  name: "Sofia Siegman",
  role: "Comunicadora Visual & Creadora de Contenido",
  avatar: "/fotS.jpeg", // Foto de perfil placeholder estética
  whatsappNumber: "5493434753345", // Reemplazar por el número real con código de país
};

export const categories = [
  { id: "all", label: "Todos los proyectos" },
  { id: "edicion", label: "Edición de Video", text: "Hola Sofia! Me interesa tu servicio de Edición de Video. ¿Cómo estás?" },
  { id: "ugc", label: "Creadora UGC", text: "Hola Sofia! Vi tu portfolio UGC y me gustaría cotizar contenido para mi marca." },
  { id: "eventos", label: "Cobertura de Eventos", text: "Hola Sofia! Quería consultar disponibilidad para la cobertura de un evento." },
  { id: "sobre-mi", label: "Sobre Mí", text: "Hola Sofia! Estuve viendo tu portfolio y me gustaría ponerme en contacto con vos." },
];

export const projects = [
  {
    id: 1,
    title: "Campaña Estética - Lookbook Otoño",
    category: "ugc",
    description: "Creación de contenido orgánico en formato Reels/TikTok para marca de indumentaria consciente. Enfoque humano y dinámico.",
    videoUrl: "https://player.vimeo.com/video/76979871?h=8272103f6e", // Video placeholder
    tags: ["UGC", "Moda", "Dirección de Arte"],
  },
  {
    id: 2,
    title: "Aftermovie - Festival de Arte Urbano",
    category: "edicion",
    description: "Edición rítmica, corrección de color y diseño sonoro para el video resumen oficial del festival.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Video placeholder (reemplazar por el embed real)
    tags: ["Edición", "Ritmo", "Color Grading"],
  },
  {
    id: 3,
    title: "Cobertura Lanzamiento Tech",
    category: "eventos",
    description: "Captura de momentos clave, entrevistas exprés y entrega de material en tiempo real para historias de Instagram.",
    videoUrl: "https://player.vimeo.com/video/76979871?h=8272103f6e",
    tags: ["Eventos", "Real Time", "Social Media"],
  },
];