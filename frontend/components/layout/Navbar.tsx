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
      <div className="h-14 max-w-max-width-container mx-auto px-margin-desktop flex items-center justify-between relative">
        {/* Brand Logo (Left) */}
        <Link
          href="/"
          className="flex items-center gap-2 text-primary hover:opacity-90 transition-opacity z-10"
        >
          <span className="material-symbols-outlined text-[22px] text-primary">
            tsunami
          </span>
          <span className="font-outfit text-lg font-bold tracking-tight text-primary">
            OceanEmbed
          </span>
        </Link>

        {/* Desktop Centered Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 h-full absolute left-1/2 -translate-x-1/2">
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

        {/* Right Section: Indian Meteorological Department (IMD / MoES, Govt. of India) Emblem */}
        <div className="flex items-center gap-3 z-10">
          <div className="flex items-center gap-2 px-2.5 py-1 rounded-md bg-surface-container-low/80 border border-border-subtle/80 shadow-2xs">
            {/* IMD / Govt Emblem Icon */}
            <div className="w-6 h-6 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-primary text-[14px]">
                wb_sunny
              </span>
            </div>

            {/* Department Text */}
            <div className="hidden sm:flex flex-col text-left leading-none">
              <span className="font-sans text-[10px] font-bold text-on-surface tracking-tight">
                IMD | MoES
              </span>
              <span className="font-sans text-[9px] text-text-secondary">
                Govt. of India
              </span>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-1.5 text-text-secondary hover:text-on-surface rounded-md focus:outline-none cursor-pointer"
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
        </div>
      )}
    </header>
  );
}
