import Link from "next/link";
import type { Project } from "@/lib/projects";

export function NextProject({ project }: { project: Project }) {
  return (
    <section className="mt-32 border-t border-border pt-20">
      <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-center mb-10">
        Next project
      </h2>
      <Link
        href={`/work/${project.slug}`}
        className="group block relative rounded-xl overflow-hidden border border-border hover:border-foreground/40 transition-colors"
      >
        <div className="aspect-video bg-[#222] flex items-center justify-center text-muted text-sm">
          {project.cover ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={project.cover}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          ) : (
            <span className="opacity-40">{project.title}</span>
          )}
        </div>
        <div className="absolute left-4 bottom-4 px-3 py-1.5 rounded-md bg-background/70 backdrop-blur text-sm font-medium">
          {project.title}
        </div>
      </Link>
    </section>
  );
}
