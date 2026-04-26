import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border mt-24">
      <div className="mx-auto max-w-6xl px-6 md:px-10 py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <p className="text-sm text-muted">
          © {new Date().getFullYear()} Ethan Cartwright
        </p>
        <ul className="flex items-center gap-6 text-sm">
          <li>
            <Link
              href="/contact"
              className="text-muted hover:text-foreground transition-colors"
            >
              Contact
            </Link>
          </li>
          <li>
            <a
              href="https://github.com/ethan-cartwright"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-foreground transition-colors"
            >
              GitHub
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
