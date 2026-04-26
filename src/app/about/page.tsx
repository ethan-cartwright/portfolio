export const metadata = {
  title: "About — Ethan Cartwright",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 md:px-10 py-24">
      <h1 className="text-4xl md:text-5xl font-medium tracking-tight leading-tight">
        Hi, I&apos;m Ethan — a video and film maker based in NYC.
      </h1>
      <div className="mt-10 space-y-6 text-lg leading-relaxed text-foreground/90">
        <p>
          I create screen stories — from social media reels to festival short
          films — that move audiences to laugh, reflect, take action, and,
          hopefully, grow.
        </p>
        <p>
          I have a past life in software engineering. In other words, I know
          the digital landscape — and how to make work that lives natively
          inside it.
        </p>
      </div>
    </div>
  );
}
