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
    title: "Aprendizaje activo a través de la escritura",
    description: "Socwritic te ayuda a desarrollar ideas y recibir feedback estructurado que mejora tu comprensión.",
    icon: "✍️"
  },
  {
    title: "Validación de conocimiento con IA",
    description: "Certainty verifica tu comprensión y resuelve dudas de forma instantánea y precisa.",
    icon: "🤖"
  },
  {
    title: "Herramientas que se adaptan a ti",
    description: "Cada herramienta se ajusta a tu ritmo y estilo de aprendizaje único.",
    icon: "🎯"
  },
  {
    title: "Integración institucional",
    description: "Soluciones que funcionan tanto para estudiantes individuales como para instituciones educativas.",
    icon: "🏫"
  }
];

export const HOW_IT_WORKS_STEPS = [
  {
    step: "01",
    title: "Explora y escribe",
    description: "Usa Socwritic para desarrollar ideas, recibir feedback estructurado y mejorar tu escritura de forma iterativa."
  },
  {
    step: "02", 
    title: "Valida tu conocimiento",
    description: "Emplea Certainty para verificar tu comprensión, resolver dudas y asegurar que dominas los conceptos."
  },
  {
    step: "03",
    title: "Mejora continuamente",
    description: "Itera entre ambas herramientas para un aprendizaje profundo y sostenible que se adapta a tu ritmo."
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