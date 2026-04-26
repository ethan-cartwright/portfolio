import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/lib/projects";

export const metadata = {
  title: "Work — Ethan Cartwright",
};

export default function WorkPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 md:px-10 py-20">
      <header className="mb-14">
        <h1 className="text-4xl md:text-5xl font-medium tracking-tight">
          My Work
        </h1>
        <p className="text-muted mt-4 max-w-xl">
          Selected screen stories — short films, music sessions, and
          documentary work.
        </p>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}
