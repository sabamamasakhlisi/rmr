export const images = [
  {
    id: 1,
    src: "/main-libro.png",
    width: 577,
    height: 460,
    alt: "5 histoires",
    path: "histoires",
    title: "5 histoires",
    year: 2024,
    en: {
      description: "< 5 HISTORIES>",
      dark: "book conception and design",
    },
    es: {
      description: "< 5 HISTORIES>",
      dark: "concepción y diseño gráfico y editorial",
    },
  },
  {
    id: 2,
    src: "/main-derrota.png",
    width: 529,
    height: 375,
    alt: "main-derrota",
    path: "la-derrota",
    title: "derrota",
    description: "< LA DERROTA (THE DEFEAT) >",
    year: 2023,
    en: {
      description: "< LA DERROTA (THE DEFEAT) >",
      light: "short film",
      dark: " direction, art direction, costume and graphic design",
    },
    es: {
      description: "< LA DERROTA >",
      light: "guión y ",
      dark: "producción, dirección artística, vestuario y diseño gráfico",
    },
  },
  {
    id: 3,
    src: "/aeugly.jpg",
    width: 393,
    height: 283,
    title: "ugly",
    path: "aeugly",
    alt: "< Case study: AESTHETICS OF THE UGLY. >",
    description: "< Case study: AESTHETICS OF THE UGLY. >",
    en: {
      description: "< Case study: AESTHETICS OF THE UGLY. >",
      dark: "book conception and design",
    },
    es: {
      description: "< Case study: AESTHETICS OF THE UGLY. >",
      dark: "concepción y diseño gráfico y editorial",
    },
    year: 2022,
  },
  {
    id: 4,
    src: "/main-3d.png",
    width: 299,
    height: 447,
    alt: "main-3d",
    title: "3d",
    description: "< MAIN 3D >",
    year: 2020,
    en: {
      light: "experimental",
      dark: " 3D design and animations ",
      addon: "on c4d",
    },
    es: {
      light: "",
      dark: "diseño experimental y animaciones 3D ",
      addon: "on c4d",
    },
  },
  {
    id: 5,
    src: "/tarot-group.jpeg",
    width: 388,
    height: 398,
    title: "tarot",
    alt: "tarot-project",
    en: {
      light: " for a Tarot cards deck",
      dark: "Illustrations",
    },
    es: {
      light: " para una baraja de cartas de Tarot",
      dark: "Illustrations",
    },
    year: 2024,
  },
  {
    id: 6,
    src: "/inicio.gif",
    width: 220,
    height: 477,
    alt: "main-mensis",
    path: "mensis",
    title: "mensis",
    year: 2021,
    description: "< MENSIS >",
    en: {
      description: "< MENSIS >",
      light: " for a digital guide and encyclopedia on menstruation",
      dark: "identity and app design",
    },
    es: {
      description: "< MENSIS >",
      light: "para una guía y enciclopedia digital sobre la menstruación ",
      dark: "diseño de identidad y aplicación",
    },
  },
  {
    id: 7,
    src: "/personidas.jpeg",
    width: 581,
    height: 413,
    alt: "main-libro",
    path: "libros",
    title: "libros",
    description:
      "< CUARENTA Y TRES PERSONAS, EN VERANO, EN AGOSTO, EN FAMILIA, EN SOLEDAD, EN MI CÁMARA Y EN UN (1) SITIO. >",
    year: 2020,
    en: {
      about: "",
    },
    es: {
      about: "",
    },
  },
  {
    id: 8,
    src: "/main-olvides.jpg",
    width: 593,
    height: 421,
    title: "olvides",
    alt: "main-olvides",
    path: "no-olvides",
    year: 2020,
    description: "< NO OLVIDES >",
    en: {
      description: "< NO OLVIDES >",
      light: "for a personal documentary project",
      dark: "book design, photography and illustration",
    },
    es: {
      description: "< NO OLVIDES >",
      light: " para un proyecto documental personal",
      dark: "concepción del libro, fotografía e ilustración ",
    },
  },
];

export type HoveredImage = {
  id: number;
  src: string;
  width: number;
  height: number;
  alt: string;
  path?: string;
  title?: string;
  description: string;
  year: number;
  en?: {
    [key: string]: {
      description: string;
      light: string;
      dark: string;
      addon?: string;
    };
  };
  es?: {
    [key: string]: {
      description: string;
      light: string;
      dark: string;
      addon?: string;
    };
  };
};
