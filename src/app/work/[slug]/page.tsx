import Link from "next/link";
import { notFound } from "next/navigation";
import { getProject, projects } from "@/lib/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectPage(props: PageProps<"/work/[slug]">) {
  const { slug } = await props.params;
  const project = getProject(slug);
  if (!project) notFound();

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
      {project.blurb && (
        <p className="text-lg leading-relaxed">{project.blurb}</p>
      )}
      <div className="mt-12 aspect-video rounded-lg border border-border bg-[#222] flex items-center justify-center text-muted text-sm">
        Video / stills coming soon
      </div>
    </div>
  );
}
