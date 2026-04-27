export const metadata = {
  title: "About — Ethan Cartwright",
};

type LinkItem = { label: string; href: string };

const links: LinkItem[] = [
  { label: "Instagram", href: "https://www.instagram.com/cartwright.ethan/" },
  { label: "Linkedin", href: "https://www.linkedin.com/in/ethan-cartwright-m" },
  { label: "Resumé", href: "/uploaded_static_assets/Resume_Q1_2026.pdf" },
];

const builtThings: LinkItem[] = [
  { label: "Skatefol.io", href: "https://skatefol.io" },
  { label: "Soccerskillzlab.com", href: "https://soccerskillzlab.com" },
];

function ColumnList({
  heading,
  items,
}: {
  heading: string;
  items: LinkItem[];
}) {
  return (
    <section className="text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-muted/60 mb-8">
        {heading}
      </h2>
      <ul className="space-y-5 text-2xl md:text-3xl">
        {items.map((item) => (
          <li key={item.label}>
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-70 transition-opacity"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 md:px-10 py-24">
      <h1 className="text-5xl md:text-6xl font-medium tracking-tight leading-[1.1]">
        Storyteller, technologist, conversationalist.
      </h1>
      <p className="mt-12 max-w-2xl text-lg md:text-xl leading-relaxed text-foreground/85">
        I&apos;m currently working at the overlap of AI and video.
      </p>

      <hr className="mt-16 border-border" />

      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-16">
        <ColumnList heading="Links" items={links} />
        <ColumnList heading="Things I built" items={builtThings} />
      </div>
    </div>
  );
}
