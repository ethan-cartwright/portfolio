export const metadata = {
  title: "About — Ethan Cartwright",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 md:px-10 py-24">
      <h1 className="text-4xl md:text-5xl font-medium tracking-tight leading-tight">
        Hi, I&apos;m Ethan. I tell stories — and help others tell theirs.
      </h1>
      <div className="mt-10 space-y-6 text-lg leading-relaxed text-foreground/90">
        <p>
          Page, camera, or AI-generation, I'll use whatever serves the story best.

          I'm currently working at the overlap of AI and video.
        </p>
      </div>
    </div>
  );
}
