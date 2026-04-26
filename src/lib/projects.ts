import fs from "node:fs";
import path from "node:path";

export type ProjectMeta = {
  title: string;
  blurb?: string;
  year?: string;
  cover?: string;
  featured?: boolean;
  /** Smaller = earlier in the list. Defaults to 100. */
  order?: number;
  /** Credits shown beneath the title, joined with " | ". */
  roles?: string[];
  /** Free-form runtime, e.g. "6 min". */
  watchTime?: string;
  client?: string;
  industry?: string;
  /** YouTube URL or 11-char video ID for the primary embed. */
  youtube?: string;
  /** One line per award, e.g. "[Official Selection] Some Festival". */
  awards?: string[];
};

export type Project = ProjectMeta & { slug: string };

const CONTENT_DIR = path.join(process.cwd(), "src", "content", "projects");

function listSlugs(): string[] {
  return fs
    .readdirSync(CONTENT_DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}

async function loadMeta(slug: string): Promise<ProjectMeta> {
  const mod = await import(`@/content/projects/${slug}.mdx`);
  if (!mod.metadata) {
    throw new Error(`Project "${slug}" is missing an exported \`metadata\`.`);
  }
  return mod.metadata as ProjectMeta;
}

function compareProjects(a: Project, b: Project): number {
  const ao = a.order ?? 100;
  const bo = b.order ?? 100;
  if (ao !== bo) return ao - bo;
  // Newer years first
  const ay = parseInt(a.year ?? "0", 10);
  const by = parseInt(b.year ?? "0", 10);
  if (ay !== by) return by - ay;
  return a.title.localeCompare(b.title);
}

export async function getAllProjects(): Promise<Project[]> {
  const slugs = listSlugs();
  const projects = await Promise.all(
    slugs.map(async (slug) => ({ slug, ...(await loadMeta(slug)) })),
  );
  return projects.sort(compareProjects);
}

export async function getFeaturedProjects(): Promise<Project[]> {
  const all = await getAllProjects();
  return all.filter((p) => p.featured);
}

export async function getProject(slug: string): Promise<Project | null> {
  if (!listSlugs().includes(slug)) return null;
  return { slug, ...(await loadMeta(slug)) };
}

export function getAllSlugs(): string[] {
  return listSlugs();
}
