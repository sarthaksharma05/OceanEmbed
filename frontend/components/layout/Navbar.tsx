"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  { name: "Explorer", href: "/" },
  { name: "Regional Analysis", href: "/regional" },
  { name: "Model Performance", href: "/model-performance" },
  { name: "About", href: "/about" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-sm border-b border-border-subtle/80 shadow-xs">
      <div className="h-14 max-w-max-width-container mx-auto px-margin-desktop flex items-center justify-between">
        {/* Brand Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 text-primary hover:opacity-90 transition-opacity"
        >
          <span className="material-symbols-outlined text-[22px] text-primary">
            tsunami
          </span>
          <span className="font-outfit text-lg font-bold tracking-tight text-primary">
            OceanEmbed
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 h-full relative">
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
                className={`relative px-3 py-1.5 h-full flex items-center text-xs font-semibold tracking-wide transition-colors ${
                  isActive
                    ? "text-primary font-bold"
                    : "text-text-secondary hover:text-on-surface hover:bg-surface-container-low/60 rounded-md"
                }`}
              >
                {item.name}
                {/* Active Underline Indicator with Smooth Transition */}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-primary rounded-t-full transition-all duration-200 ease-out" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right Action / Profile & Sign In */}
        <div className="flex items-center gap-2.5">
          <Link
            href="/login"
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-primary/10 text-primary hover:bg-primary/20 text-xs font-semibold transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-[16px]">
              login
            </span>
            <span>Sign In</span>
          </Link>

          <Link
            href="/login"
            className="w-8 h-8 rounded-full bg-surface-container hover:bg-surface-container-high text-primary border border-border-subtle/60 flex items-center justify-center transition-all cursor-pointer"
            title="User Profile & Station Login"
            aria-label="User Profile"
          >
            <span className="material-symbols-outlined text-[18px]">
              person
            </span>
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-1.5 text-text-secondary hover:text-on-surface rounded-md focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            <span className="material-symbols-outlined text-[22px]">
              {mobileMenuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-border-subtle px-4 py-3 flex flex-col gap-1 shadow-md">
          {navItems.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-3 py-2 text-xs font-semibold rounded-md transition-colors ${
                  isActive
                    ? "bg-primary/10 text-primary font-bold"
                    : "text-text-secondary hover:bg-surface-container-low"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
          <Link
            href="/login"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-2 px-3 py-2 text-xs font-semibold rounded-md bg-primary text-white text-center flex items-center justify-center gap-1.5"
          >
            <span className="material-symbols-outlined text-[16px]">
              login
            </span>
            <span>Sign In / Create Account</span>
          </Link>
        </div>
      )}
    </header>
  );
}
