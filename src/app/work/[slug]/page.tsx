import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllSlugs, getProject } from "@/lib/projects";
import { YouTube } from "@/components/YouTube";
import { ClockIcon, UserIcon, BuildingIcon } from "@/components/MetaIcon";

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

function MetaRow({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center justify-center gap-2 text-sm">
      <span className="text-muted">{icon}</span>
      <span className="text-muted">{label}:</span>
      <span className="text-foreground">{value}</span>
    </div>
  );
}

export default async function ProjectPage(props: PageProps<"/work/[slug]">) {
  const { slug } = await props.params;
  const project = await getProject(slug);
  if (!project) notFound();

  const { default: Content } = await import(`@/content/projects/${slug}.mdx`);

  return (
    <div className="mx-auto max-w-3xl px-6 md:px-10 pt-12 pb-24">
      <div className="text-left mb-12">
        <Link
          href="/work"
          className="text-sm text-muted hover:text-foreground transition-colors"
        >
          ← Back to work
        </Link>
      </div>

      <header className="text-center">
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-medium tracking-tight leading-[0.95]">
          {project.title}
        </h1>

        {project.roles && project.roles.length > 0 && (
          <p className="mt-10 text-base text-foreground/90">
            {project.roles.join(" | ")}
          </p>
        )}

        {(project.watchTime || project.client || project.industry) && (
          <div className="mt-8 space-y-3">
            {project.watchTime && (
              <MetaRow
                icon={<ClockIcon />}
                label="Watch time"
                value={project.watchTime}
              />
            )}
            {project.client && (
              <MetaRow
                icon={<UserIcon />}
                label="Client"
                value={project.client}
              />
            )}
            {project.industry && (
              <MetaRow
                icon={<BuildingIcon />}
                label="Industry"
                value={project.industry}
              />
            )}
          </div>
        )}
      </header>

      {project.youtube && (
        <div className="mt-16">
          <YouTube id={project.youtube} title={project.title} />
        </div>
      )}

      {project.awards && project.awards.length > 0 && (
        <ul className="mt-12 space-y-3 text-center text-foreground/90">
          {project.awards.map((award) => (
            <li key={award}>{award}</li>
          ))}
        </ul>
      )}

      <article className="prose prose-invert mx-auto mt-16 max-w-none prose-headings:font-medium prose-headings:tracking-tight prose-a:text-foreground prose-a:underline-offset-4 prose-img:rounded-lg">
        <Content />
      </article>
    </div>
  );
}
