import Link from "next/link";
import type { Project } from "@/lib/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/work/${project.slug}`}
      className="group block border border-border rounded-lg overflow-hidden hover:border-foreground/40 transition-colors"
    >
      <div className="aspect-video bg-[#222] flex items-center justify-center text-muted text-sm overflow-hidden">
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
      <div className="px-5 py-4 flex items-baseline justify-between gap-4">
        <div className="min-w-0">
          <h3 className="text-base font-medium truncate group-hover:opacity-80 transition-opacity">
            {project.title}
          </h3>
          {project.blurb && (
            <p className="text-sm text-muted mt-1 line-clamp-1">
              {project.blurb}
            </p>
          )}
        </div>
        {project.year && (
          <span className="text-xs text-muted shrink-0">{project.year}</span>
        )}
      </div>
    </Link>
  );
}
