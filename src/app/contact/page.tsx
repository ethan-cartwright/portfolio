const EMAIL = "ethan.cartwright.m@gmail.com";

export const metadata = {
  title: "Contact — Ethan Cartwright",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-2xl px-6 md:px-10 py-24 text-center">
      <h1 className="text-4xl md:text-5xl font-medium tracking-tight">
        Get in touch
      </h1>
      <p className="text-muted mt-4">
        For project inquiries, collaborations, or just to say hello.
      </p>
      <a
        href={`mailto:${EMAIL}`}
        className="inline-block mt-12 text-2xl md:text-3xl font-medium tracking-tight underline underline-offset-8 decoration-border hover:decoration-foreground transition-colors"
      >
        {EMAIL}
      </a>
    </div>
  );
}
