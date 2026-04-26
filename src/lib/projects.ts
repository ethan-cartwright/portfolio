export type Project = {
  slug: string;
  title: string;
  blurb?: string;
  year?: string;
  role?: string;
  cover?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "carousel",
    title: "Carousel",
    blurb: "Short film exploring memory and motion.",
    year: "2025",
    featured: true,
  },
  {
    slug: "walk-with-me",
    title: "Walk with Me",
    blurb: "A walking-and-talking documentary series.",
    year: "2025",
    featured: true,
  },
  {
    slug: "sarah-buss-desert-sessions",
    title: "Sarah Buss — Desert Sessions",
    blurb: "Live music film captured in the high desert.",
    year: "2024",
    featured: true,
  },
  {
    slug: "roommate-bonding",
    title: "Roommate Bonding",
    blurb: "A comedic vignette of cohabitation rituals.",
    year: "2024",
    featured: true,
  },
  {
    slug: "romance-on-steroids",
    title: "Romance On Steroids",
    blurb: "An over-the-top take on the modern love story.",
    year: "2023",
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function featuredProjects(): Project[] {
  return projects.filter((p) => p.featured);
}
