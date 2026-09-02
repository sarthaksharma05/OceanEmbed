import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-surface-container-low border-t border-outline-variant py-grid-16">
      <div className="max-w-max-width-container mx-auto px-margin-desktop flex flex-col md:flex-row items-center justify-between gap-grid-8">
        <div className="flex items-center gap-grid-8 font-label-sm text-text-secondary">
          <span className="opacity-70">v2.4.0-stable</span>
          <span className="text-outline">|</span>
          <span className="opacity-70 font-data-tabular">
            Data: Satellite, GLORYS, ARGO
          </span>
        </div>
        <nav className="flex items-center gap-grid-16">
          <Link
            className="font-label-sm text-text-secondary hover:text-primary transition-colors"
            href="/about"
          >
            Methodology
          </Link>
          <Link
            className="font-label-sm text-text-secondary hover:text-primary transition-colors"
            href="/about"
          >
            Data Policy
          </Link>
          <Link
            className="font-label-sm text-text-secondary hover:text-primary transition-colors"
            href="/about"
          >
            Support
          </Link>
        </nav>
      </div>
    </footer>
  );
}
