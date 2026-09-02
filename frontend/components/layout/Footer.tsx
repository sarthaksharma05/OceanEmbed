import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-surface-container-lowest border-t border-border-subtle/80 font-sans text-on-surface">
      {/* Top Footer Section */}
      <div className="max-w-max-width-container mx-auto px-margin-desktop py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Column 1: Brand & Scientific Affiliation */}
          <div className="lg:col-span-2 flex flex-col justify-between">
            <div>
              {/* OceanEmbed Logo & Tagline */}
              <Link
                href="/"
                className="flex items-center gap-2 text-primary hover:opacity-90 transition-opacity mb-3"
              >
                <span className="material-symbols-outlined text-[24px] text-primary">
                  tsunami
                </span>
                <span className="font-outfit text-xl font-bold tracking-tight text-primary">
                  OceanEmbed
                </span>
              </Link>

              <p className="font-sans text-xs text-text-secondary leading-relaxed max-w-sm mb-4">
                High-resolution 3D ocean temperature & salinity field synthesis combining satellite altimetry with ARGO float in-situ observations.
              </p>

              {/* IMD / MoES Govt of India Official Badge */}
              <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-lg bg-surface-container-low border border-border-subtle/80 shadow-2xs">
                <div className="relative w-7 h-7 shrink-0 overflow-hidden">
                  <Image
                    src="/imd-logo.png"
                    alt="India Meteorological Department (IMD)"
                    width={28}
                    height={28}
                    className="object-contain w-full h-full"
                  />
                </div>
                <div className="flex flex-col text-left leading-none">
                  <span className="font-sans text-[11px] font-bold text-on-surface">
                    India Meteorological Dept. (IMD)
                  </span>
                  <span className="font-sans text-[9.5px] text-text-secondary">
                    Ministry of Earth Sciences, Govt. of India
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Platform Modules */}
          <div>
            <h3 className="font-outfit text-xs font-bold uppercase tracking-wider text-on-surface mb-3">
              Platform Modules
            </h3>
            <ul className="flex flex-col gap-2 font-sans text-xs text-text-secondary">
              <li>
                <Link href="/" className="hover:text-primary transition-colors">
                  Interactive Ocean Explorer
                </Link>
              </li>
              <li>
                <Link href="/regional" className="hover:text-primary transition-colors">
                  Regional Anomaly Analysis
                </Link>
              </li>
              <li>
                <Link href="/model-performance" className="hover:text-primary transition-colors">
                  Model Evaluation & Metrics
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-primary transition-colors">
                  Subsurface Embedding Pipeline
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Data Provenance */}
          <div>
            <h3 className="font-outfit text-xs font-bold uppercase tracking-wider text-on-surface mb-3">
              Data Provenance
            </h3>
            <ul className="flex flex-col gap-2 font-sans text-xs text-text-secondary">
              <li>Copernicus Marine (CMEMS)</li>
              <li>ARGO Float Profiling Array</li>
              <li>ECMWF ERA5 Reanalysis</li>
              <li>INCOIS Ocean Data Portal</li>
            </ul>
          </div>

          {/* Column 4: Open Source & Resources */}
          <div>
            <h3 className="font-outfit text-xs font-bold uppercase tracking-wider text-on-surface mb-3">
              Open Science
            </h3>
            <ul className="flex flex-col gap-2 font-sans text-xs text-text-secondary">
              <li>
                <Link href="/about" className="hover:text-primary transition-colors">
                  Methodology & Publications
                </Link>
              </li>
              <li>
                <a
                  href="https://github.com/sarthaksharma05/OceanEmbed"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors flex items-center gap-1"
                >
                  <span>GitHub Repository</span>
                  <span className="material-symbols-outlined text-[12px]">
                    open_in_new
                  </span>
                </a>
              </li>
              <li>
                <Link href="/login" className="hover:text-primary transition-colors">
                  Research Portal Login
                </Link>
              </li>
              <li>
                <span className="text-[11px] opacity-75">Apache 2.0 Open License</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Sub-Footer Bar */}
      <div className="bg-surface-container-low border-t border-border-subtle/60 py-4">
        <div className="max-w-max-width-container mx-auto px-margin-desktop flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-text-secondary font-sans">
          <p>© 2026 OceanEmbed Open Source Project. Designed for Oceanographic Research.</p>
          <div className="flex items-center gap-4 text-xs font-medium">
            <Link href="/about" className="hover:text-primary transition-colors">
              Data Policy
            </Link>
            <span>•</span>
            <Link href="/about" className="hover:text-primary transition-colors">
              Citation Guide
            </Link>
            <span>•</span>
            <a
              href="https://mausam.imd.gov.in"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors flex items-center gap-1"
            >
              <span>IMD MoES Portal</span>
              <span className="material-symbols-outlined text-[12px]">
                open_in_new
              </span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
