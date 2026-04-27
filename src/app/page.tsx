import Image from "next/image";
import Link from "next/link";
import { ProjectCard } from "@/components/ProjectCard";
import { getFeaturedProjects } from "@/lib/projects";

export default async function Home() {
  const featured = await getFeaturedProjects();

  return (
    <div className="mx-auto max-w-6xl px-6 md:px-10">
      <section className="min-h-[70vh] flex flex-col md:flex-row items-center md:items-center gap-10 md:gap-14 py-24">
        <div className="shrink-0">
          <Image
            src="/uploaded_static_assets/headshot.jpg"
            alt="Portrait of Ethan Cartwright"
            width={600}
            height={600}
            priority
            className="rounded-full object-cover w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80"
          />
        </div>
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight leading-[1.05]">
            Hi, I&apos;m Ethan.
          </h1>
          <Link
            href="/contact"
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-foreground text-background px-6 py-3 text-sm font-medium hover:opacity-80 transition-opacity"
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
