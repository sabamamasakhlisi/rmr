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
      dark: "book conception, editorial and graphic design",
    },
    es: {
      description: "< 5 HISTORIES>",
      dark: "concepción, diseño gráfico y editorial",
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
      dark: "guión y producción, dirección artística, vestuario y diseño gráfico",
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
      dark: "book conception, editorial and graphic design",
    },
    es: {
      description: "< Case study: AESTHETICS OF THE UGLY. >",
      dark: "concepción, diseño gráfico y editorial",
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
    path: "dimensional",
    description: "< MAIN 3D >",
    year: 2020,
    en: {
      dark: "experimental 3D design ",
      addon: "con c4d",
    },
    es: {
      dark: "diseño experimental 3D ",
      addon: "con c4d",
    },
  },
  {
    id: 5,
    src: "/0_tarot_main.jpg",
    width: 388,
    height: 398,
    title: "tarot",
    alt: "tarot-project",
    path: "tarot",
    en: {
      light: " for a Tarot cards deck",
      dark: "illustrations",
    },
    es: {
      light: " para una baraja de cartas de Tarot",
      dark: "ilustraciones",
    },
    year: 2024,
  },
  {
    id: 6,
    src: "/mensis.gif",
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
      light: " para una guía y enciclopedia digital sobre la menstruación ",
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
      dark: "book design, photography and illustration ",
    },
    es: {
      description: "< NO OLVIDES >",
      light: " para un proyecto documental personal",
      dark: "concepción del libro, fotografía e ilustración ",
    },
  },
  {
    id: 9,
    src: "/",
    width: 100,
    height: 32,
    title: "olvides",
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

export const tarotImages = [
  { src: "/1_tarot_la.jpg", alt: "tarot - la luna" },
  { src: "/2_tarot_la.jpg", alt: "tarot - la templanza" },
  { src: "/3_tarot_les.jpg", alt: "tarot - les enamorades" },
  { src: "/4_tarot_el.jpg", alt: "tarot - el sol" },
  { src: "/5_tarot_el.jpg", alt: "tarot - el diablo" },
  { src: "/6_tarot_el.jpg", alt: "tarot - el mundo" },
  { src: "/7_tarot_la.jpg", alt: "tarot - la estrella" },
  { src: "/8_tarot_la.jpg", alt: "tarot - la torre" },
];

export const lettersImages = [
  { src: "/letterO.jpg", alt: "letter - O" },
  { src: "/letterR.jpg", alt: "letter - R" },
  { src: "/letterT.jpg", alt: "letter - t" },
  { src: "/letterC.jpg", alt: "letter - c" },
];
