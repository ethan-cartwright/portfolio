import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllSlugs, getProject } from "@/lib/projects";

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata(props: PageProps<"/work/[slug]">) {
  const { slug } = await props.params;
  const project = await getProject(slug);
  if (!project) return {};
  return {
    title: `${project.title} — Ethan Cartwright`,
    description: project.blurb,
  };
}

export default async function ProjectPage(props: PageProps<"/work/[slug]">) {
  const { slug } = await props.params;
  const project = await getProject(slug);
  if (!project) notFound();

  const { default: Content } = await import(`@/content/projects/${slug}.mdx`);

  return (
    <div className="mx-auto max-w-3xl px-6 md:px-10 py-20">
      <Link
        href="/work"
        className="text-sm text-muted hover:text-foreground transition-colors"
      >
        ← Back to work
      </Link>
      <header className="mt-8 mb-10">
        <h1 className="text-4xl md:text-5xl font-medium tracking-tight">
          {project.title}
        </h1>
        {project.year && (
          <p className="text-muted mt-3 text-sm">{project.year}</p>
        )}
      </header>
      <article className="prose prose-invert max-w-none prose-headings:font-medium prose-headings:tracking-tight prose-a:text-foreground prose-a:underline-offset-4 prose-img:rounded-lg">
        <Content />
      </article>
    </div>
  );
}
