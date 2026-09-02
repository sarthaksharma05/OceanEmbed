"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "Explorer", href: "/" },
  { name: "Regional Analysis", href: "/regional" },
  { name: "Model Performance", href: "/model-performance" },
  { name: "About", href: "/about" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 w-full z-50 bg-surface-container-lowest/90 backdrop-blur-md border-b border-outline-variant">
      <div className="h-16 max-w-max-width-container mx-auto px-margin-desktop flex items-center justify-between">
        <Link href="/" className="flex items-center gap-grid-8">
          <span className="material-symbols-outlined text-primary">tsunami</span>
          <span className="font-display-lg-mobile text-primary tracking-tight">
            OceanEmbed
          </span>
        </Link>
        <nav className="hidden lg:flex items-center gap-grid-16 h-full">
          {navItems.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={
                  isActive
                    ? "px-2 h-full flex items-center transition-colors text-primary font-semibold border-b-2 border-primary"
                    : "font-label-sm text-on-surface-variant hover:text-on-surface px-2 h-full flex items-center transition-colors"
                }
              >
                {item.name}
              </Link>
            );
          })}
        </nav>
        <div className="flex items-center gap-grid-16">
          <div className="hidden md:flex items-center gap-grid-8 px-grid-8 py-1 bg-surface-container rounded-full border border-outline-variant">
            <span className="w-2 h-2 rounded-full bg-secondary"></span>
            <span className="font-label-sm text-on-surface-variant uppercase tracking-wider">
              Data Status: Online
            </span>
          </div>
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center cursor-pointer">
            <span className="material-symbols-outlined text-on-primary text-[18px]">
              person
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
