export const images = [
  {
    id: 1,
    src: "/main-derrota.png",
    width: 537,
    height: 381,
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
    id: 2,
    src: "/main-mensis.png",
    width: 537,
    height: 381,
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
    id: 3,
    src: "/main-olvides.png",
    width: 537,
    height: 381,
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
  {
    id: 4,
    src: "/jengo.png",
    width: 537,
    height: 381,
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
    src: "/3d.png",
    width: 537,
    height: 381,
    title: "jengo",
    alt: "main-jengo",
    description: "< JENGO 3D >",
    year: 2020,
  },
  {
    id: 6,
    src: "/personidas.jpeg",
    width: 537,
    height: 381,
    alt: "main-libro",
    path: "libros",
    title: "libros",
    description:
      "< CUARENTA Y TRES PERSONAS, EN VERANO, EN AGOSTO, EN FAMILIA, EN SOLEDAD, EN MI CÁMARA Y EN UN (1) SITIO. >",
    year: 2020,
    en: {
      about:
        "LA DERROTA is a short film about the fear of disappearing, of impersonation,and of oneself.",
    },
    es: {
      about:
        "LA DERROTA is a short film about the fear of disappearing, of impersonation,and of oneself.",
    },
  },
  {
    id: 7,
    src: "/main-libro.png",
    width: 537,
    height: 381,
    alt: "main-libro",
    path: "libros",
    title: "",
    year: 2020,
  },
  {
    id: 8,
    src: "/main-ekis.png",
    width: 537,
    height: 381,
    alt: "main-ekis",
    path: "",
    title: "",
    year: 2020,
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
