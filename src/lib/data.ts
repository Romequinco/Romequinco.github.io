import site from '../data/site.json';
import type { Bi } from './i18n';

export type Img = { src?: string; w?: number; h?: number; svg?: string; caption: Bi | null };
export type Link = { href: string; label: Bi };
export type Project = {
  slug: string;
  name: Bi;
  short: Bi;
  status: Bi | null;
  images: Img[];
  say: Bi | null;
  how: Bi | null;
  links: Link[];
};
export type Group = { id: string; title: Bi; projects: Project[] };
export type Section = { title: Bi; body: Bi };
export type Detail = { year?: string; role?: Bi; context?: Bi; stack?: string[]; sections?: Section[] };
export type CvItem = { when: Bi; title: Bi; note: Bi };

// details.json holds the long-form text of each project page; it may be absent while drafting.
const found = import.meta.glob('../data/details.json', { eager: true, import: 'default' });
const details: Record<string, Detail> = (Object.values(found)[0] as Record<string, Detail>) ?? {};

import coversRaw from '../data/covers.json';
export type Kpi = { v: string; ves?: string; l: Bi };
export type Cover = { kpis?: Kpi[]; tech?: Bi; data?: Bi; keywords?: Bi; facts?: Bi; brand?: string; domain?: string };
const covers = coversRaw as Record<string, Cover>;
export const coverOf = (slug: string): Cover => covers[slug] ?? {};
export const kpiValue = (k: Kpi, lang: 'en' | 'es') => (lang === 'es' && k.ves ? k.ves : k.v);

export const groups = site.groups as Group[];
export const work = site.work as CvItem[];
export const study = site.study as CvItem[];
export const languages = site.languages as Bi;
export const intro = site.intro as Bi;
export const closing = site.closing as Bi;

/** Websites built for companies have no page of their own: they link to the live site. */
export const hasPage = (g: Group) => g.id !== 'webs';

export const pageProjects = groups.filter(hasPage).flatMap((g) => g.projects.map((p) => ({ project: p, group: g })));

export const detailOf = (slug: string): Detail => details[slug] ?? {};

export const neighbours = (slug: string) => {
  const i = pageProjects.findIndex((x) => x.project.slug === slug);
  const n = pageProjects.length;
  return { prev: pageProjects[(i - 1 + n) % n].project, next: pageProjects[(i + 1) % n].project };
};

/** Links that leave the site (demo, code, live site), never the internal page link. */
export const externalLinks = (p: Project) => p.links.filter((l) => /^https?:/.test(l.href));
