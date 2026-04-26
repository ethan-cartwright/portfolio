import fs from "node:fs";
import path from "node:path";
import { youtubeThumbnail } from "@/lib/youtube";

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

/** Find the first <YouTube id="..."> in the MDX source, regardless of formatting. */
function firstYouTubeIdInMdx(slug: string): string | null {
  const filePath = path.join(CONTENT_DIR, `${slug}.mdx`);
  const src = fs.readFileSync(filePath, "utf8");
  const match = src.match(/<YouTube\b[^>]*\bid=["']([^"']+)["']/);
  return match ? match[1] : null;
}

async function loadProject(slug: string): Promise<Project> {
  const meta = await loadMeta(slug);
  let cover = meta.cover;
  if (!cover) {
    const ytId = firstYouTubeIdInMdx(slug);
    if (ytId) cover = youtubeThumbnail(ytId) ?? undefined;
  }
  return { slug, ...meta, cover };
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
  const projects = await Promise.all(slugs.map(loadProject));
  return projects.sort(compareProjects);
}

export async function getFeaturedProjects(): Promise<Project[]> {
  const all = await getAllProjects();
  return all.filter((p) => p.featured);
}

export async function getProject(slug: string): Promise<Project | null> {
  if (!listSlugs().includes(slug)) return null;
  return loadProject(slug);
}

export async function getNextProject(slug: string): Promise<Project | null> {
  const all = await getAllProjects();
  const idx = all.findIndex((p) => p.slug === slug);
  if (idx === -1 || all.length === 0) return null;
  return all[(idx + 1) % all.length];
}

export function getAllSlugs(): string[] {
  return listSlugs();
}
