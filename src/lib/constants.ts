export const LINKS = {
  whitepaper: "https://weshearn.com/whitepaper",
  demo: "https://demo.weshearn.com",
  contact: "mailto:info@weshearn.com",
  buy: "https://buy.weshearn.com",
  socwritic: "https://shearn-agent-local.vercel.app/",
  certainty: "https://certainty.weshearn.com",
  twitter: "https://twitter.com/weshearn",
  linkedin: "https://linkedin.com/company/shearn",
  instagram: "https://instagram.com/weshearn"
};

export const NAVIGATION_ITEMS = [
  { name: "Home", href: "#home", id: "home" },
  { name: "Whitepaper", href: "#whitepaper", id: "whitepaper" },
  { name: "Demo", href: "#demo", id: "demo" },
  { name: "Contacto", href: "#contacto", id: "contacto" }
];

export const ECOSYSTEM_MODULES = [
  {
    title: "Marketplace Shearn",
    description: "Un mercado donde creadores publican contenido en múltiples formatos con libertad de precio y colaboración. Compra solo lo que necesitas.",
    icon: "/marketplace.svg",
    iconType: "svg",
    link: null
  },
  {
    title: "Socwritic",
    description: "Herramienta de evaluación crítica y co-creación guiada. Ideal para talleres, feedback estructurado y mejora iterativa.",
    icon: "/socwritic.svg",
    iconType: "svg",
    link: LINKS.socwritic
  },
  {
    title: "Certainty",
    description: "Solución para problemas técnicos y aprendizaje activo en entornos STEM con demostraciones paso a paso.",
    icon: "/certainty.svg",
    iconType: "svg",
    link: LINKS.certainty
  }
];

export const FEATURES = [
  {
    title: "Libre mercado y colaboración",
    description: "Los creadores compiten y cooperan. El incentivo es simple: aportar máximo valor.",
    icon: "🤝"
  },
  {
    title: "Aprendizaje activo",
    description: "Zona de trabajo integrada para practicar, prototipar y medir progreso.",
    icon: "⚡"
  },
  {
    title: "Recomendación orientada a aprender",
    description: "Algoritmos que maximizan tu aprendizaje, no tu tiempo de pantalla.",
    icon: "🎯"
  },
  {
    title: "Remuneración indirecta",
    description: "La comunidad también es recompensada por feedback útil y mejoras.",
    icon: "💎"
  }
];

export const HOW_IT_WORKS_STEPS = [
  {
    step: "01",
    title: "Publica o descubre contenido de calidad",
    description: "Encuentra exactamente lo que necesitas aprender o comparte tu expertise."
  },
  {
    step: "02", 
    title: "Trabaja en modo activo con herramientas conectadas",
    description: "Usa Socwritic para feedback estructurado y Certainty para resolución de problemas."
  },
  {
    step: "03",
    title: "Gana reputación y rendimiento cuando aportas valor",
    description: "Tu participación activa es reconocida y recompensada por la comunidad."
  }
];

export const SOCIAL_PROOF = {
  logos: [
    { name: "EduTech Corp", src: "/logos/edutech.svg" },
    { name: "Innovation Lab", src: "/logos/innovation-lab.svg" },
    { name: "Future Academy", src: "/logos/future-academy.svg" }
  ],
  testimonials: [
    {
      quote: "Shearn ha revolucionado cómo enseñamos y aprendemos en nuestros talleres. La retroalimentación estructurada acelera el progreso.",
      author: "Dr. Ana Martínez",
      role: "Directora Académica, Innovation Lab"
    },
    {
      quote: "El enfoque de ecosistema de Shearn permite una colaboración real entre expertos y estudiantes. Es el futuro de la educación.",
      author: "Carlos Ruiz",
      role: "CTO, EduTech Corp"
    }
  ]
};