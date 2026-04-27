import Link from "next/link";
import { ProjectCard } from "@/components/ProjectCard";
import { getFeaturedProjects } from "@/lib/projects";

export default async function Home() {
  const featured = await getFeaturedProjects();

  return (
    <div className="mx-auto max-w-6xl px-6 md:px-10">
      <section className="min-h-[70vh] flex flex-col justify-center py-24">
        <h1 className="max-w-4xl text-4xl md:text-6xl lg:text-7xl font-medium leading-[1.05] tracking-tight">
          I&apos;m Ethan. Writer. Filmmaker. Storyteller.
        </h1>
        <div className="mt-10">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-6 py-3 text-sm font-medium hover:opacity-80 transition-opacity"
          >
            Message Me
            <span aria-hidden>→</span>
          </Link>
        </div>
      </section>

      <section className="py-16">
        <div className="flex items-end justify-between mb-10">
          <h2 className="text-2xl md:text-3xl font-medium tracking-tight">
            Featured Works
          </h2>
          <Link
            href="/work"
            className="text-sm text-muted hover:text-foreground transition-colors"
          >
            See all projects →
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featured.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
}
