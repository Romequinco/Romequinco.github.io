export type Lang = 'en' | 'es';
export type Bi = { en: string; es: string };

export const t = (v: Bi | null | undefined, lang: Lang) => (v ? v[lang] : '');

/** Plain text from a bilingual HTML fragment (for alt, titles, meta). */
export const plain = (v: Bi | null | undefined, lang: Lang) =>
  t(v, lang)
    .replace(/<[^>]+>/g, '')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/\s+/g, ' ')
    .trim();

export const other = (lang: Lang): Lang => (lang === 'en' ? 'es' : 'en');

export const paths = {
  home: (lang: Lang) => (lang === 'en' ? '/' : '/es/'),
  project: (slug: string, lang: Lang) => (lang === 'en' ? `/work/${slug}/` : `/es/proyectos/${slug}/`),
  cv: (lang: Lang) => (lang === 'en' ? '/cv/' : '/es/cv/'),
  cvPdf: (lang: Lang) => (lang === 'en' ? '/cv-oscar-romero-quincoces-en.pdf' : '/cv-oscar-romero-quincoces-es.pdf'),
};

export const contact = {
  email: 'romequinco@gmail.com',
  linkedin: 'https://linkedin.com/in/oscarromeroquincoces',
  github: 'https://github.com/Romequinco',
  site: 'romequinco.github.io',
};

export const groupShort: Record<string, Bi> = {
  products: { en: 'Products and tools', es: 'Productos y herramientas' },
  research: { en: 'Research', es: 'Investigación' },
  course: { en: "Master's coursework", es: 'Trabajos del máster' },
  webs: { en: 'Websites', es: 'Webs' },
};

export const ui = {
  about: { en: 'About', es: 'Sobre mí' },
  projects: { en: 'Projects', es: 'Proyectos' },
  experience: { en: 'Experience', es: 'Experiencia' },
  education: { en: 'Education', es: 'Formación' },
  contactNav: { en: 'Contact', es: 'Contacto' },
  cvNav: { en: 'CV', es: 'CV' },
  downloadCv: { en: 'Download CV (PDF)', es: 'Descargar CV (PDF)' },
  menu: { en: 'Menu', es: 'Menú' },
  close: { en: 'Close menu', es: 'Cerrar menú' },
  role_line: { en: 'Quantitative analyst · Financial markets & AI', es: 'Analista cuantitativo · Mercados financieros e IA' },
  emailMe: { en: 'Email me', es: 'Escríbeme' },
  seeProjects: { en: 'See the projects', es: 'Ver los proyectos' },
  onThisPage: { en: 'On this page', es: 'En esta página' },
  aboutProject: { en: 'About this project', es: 'Ficha del proyecto' },
  figures: { en: 'Figures', es: 'Figuras' },
  figure: { en: 'Figure', es: 'Figura' },
  summary: { en: 'Summary', es: 'Resumen' },
  links: { en: 'Links', es: 'Enlaces' },
  liveSite: { en: 'Live site', es: 'Web en directo' },
  projectCount: { en: 'projects', es: 'proyectos' },
  switchTo: { en: 'Español', es: 'English' },
  switchLabel: { en: 'Leer en español', es: 'Read in English' },
  where: { en: 'Bilbao, Madrid or remote', es: 'Bilbao, Madrid o remoto' },
  cvPdf: { en: 'CV (PDF)', es: 'CV en PDF' },
  projectsLabel: { en: 'Projects', es: 'Proyectos' },
  hint: {
    en: 'Point at a project, or move to it with the keyboard, to see it on the right. Up and down arrows move through the list, left and right step through the images.',
    es: 'Pasa el ratón por un proyecto, o llega a él con el teclado, para verlo a la derecha. Las flechas arriba y abajo recorren la lista; izquierda y derecha pasan las imágenes.',
  },
  openProject: { en: 'Read about it', es: 'Ver el proyecto' },
  prevImage: { en: 'Previous image', es: 'Imagen anterior' },
  nextImage: { en: 'Next image', es: 'Imagen siguiente' },
  work: { en: 'Work', es: 'Trayectoria' },
  study: { en: 'Study', es: 'Formación' },
  allWork: { en: 'All projects', es: 'Todos los proyectos' },
  previous: { en: 'Previous', es: 'Anterior' },
  next: { en: 'Next', es: 'Siguiente' },
  year: { en: 'Year', es: 'Año' },
  role: { en: 'Role', es: 'Papel' },
  context: { en: 'Context', es: 'Contexto' },
  status: { en: 'Status', es: 'Estado' },
  stack: { en: 'Built with', es: 'Hecho con' },
  images: { en: 'Images', es: 'Imágenes' },
  notFound: { en: 'This page does not exist.', es: 'Esta página no existe.' },
  backHome: { en: 'Go to the home page', es: 'Ir a la portada' },
  printCv: { en: 'Download the PDF', es: 'Descargar el PDF' },
  siteDescription: {
    en: 'Óscar Romero Quincoces, quantitative analyst in financial markets. Research, trading experience and AI tools for markets: LLM agents, RAG and quant studies.',
    es: 'Óscar Romero Quincoces, analista cuantitativo de mercados financieros. Investigación, experiencia en mesa y herramientas de IA para los mercados: agentes LLM, RAG y estudios cuantitativos.',
  },
};
