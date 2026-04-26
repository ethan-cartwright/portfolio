export const metadata = {
  title: "Contact — Ethan Cartwright",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-2xl px-6 md:px-10 py-24">
      <h1 className="text-4xl md:text-5xl font-medium tracking-tight">
        Send me a message
      </h1>
      <p className="text-muted mt-4">
        For project inquiries, collaborations, or just to say hello.
      </p>

      <form className="mt-12 space-y-6">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium mb-2"
          >
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="w-full bg-transparent border border-border rounded-md px-4 py-3 text-base focus:outline-none focus:border-foreground/60 transition-colors"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium mb-2"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full bg-transparent border border-border rounded-md px-4 py-3 text-base focus:outline-none focus:border-foreground/60 transition-colors"
          />
        </div>
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium mb-2"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={6}
            required
            className="w-full bg-transparent border border-border rounded-md px-4 py-3 text-base focus:outline-none focus:border-foreground/60 transition-colors resize-none"
          />
        </div>
        <button
          type="submit"
          className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-6 py-3 text-sm font-medium hover:opacity-80 transition-opacity"
        >
          Send Message
          <span aria-hidden>→</span>
        </button>
        <p className="text-xs text-muted pt-2">
          Form submission is not yet wired up — coming soon.
        </p>
      </form>
    </div>
  );
}
