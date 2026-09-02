"use client";

export default function AboutOceanEmbed() {
  return (
    <main className="w-full bg-background min-h-[calc(100vh-56px)]">
      <div className="max-w-max-width-container mx-auto px-margin-desktop py-6">
        <div className="flex flex-col w-full font-sans text-on-surface gap-10">
          {/* Hero Banner Section */}
          <section className="w-full bg-surface-container-low rounded-lg p-6 lg:p-10 border border-border-subtle/80 shadow-2xs relative overflow-hidden">
            <div className="max-w-3xl">
              <span className="font-sans text-xs font-bold text-primary uppercase tracking-widest block mb-2">
                Project Overview
              </span>
              <h1 className="font-outfit text-3xl lg:text-4xl font-bold text-on-surface mb-4 tracking-tight">
                OceanEmbed: Deep Synthesis of Marine State Variables
              </h1>
              <p className="font-sans text-base text-text-secondary leading-relaxed font-normal">
                High-resolution 3D reconstruction of oceanographic fields from
                sparse surface observations using spatially-aware embedding
                architectures.
              </p>
            </div>
          </section>

          {/* Core Sections Grid */}
          <div className="space-y-10">
            {/* Section 01: The Challenge */}
            <section className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              <div className="lg:col-span-4 sticky top-20">
                <h2 className="font-outfit text-xl font-bold text-on-surface relative inline-block">
                  01 <span className="text-outline/60 mx-1.5">/</span> The Challenge
                  <div className="absolute -bottom-1.5 left-0 w-10 h-0.5 bg-primary rounded-full"></div>
                </h2>
              </div>
              <div className="lg:col-span-8 bg-surface-container-lowest p-5 rounded-lg border border-border-subtle/80 shadow-2xs">
                <p className="font-sans text-xs text-text-secondary leading-relaxed mb-4">
                  Understanding the ocean's interior is fundamentally limited by
                  observation constraints. While satellite altimetry and
                  radiometry provide continuous, global coverage of surface
                  parameters (Sea Surface Height, Sea Surface Temperature),
                  subsurface properties remain sparsely sampled by the ARGO float
                  array and infrequent ship-based surveys.
                </p>
                <p className="font-sans text-xs text-text-secondary leading-relaxed">
                  Traditional numerical assimilation models (like GLORYS12V1)
                  offer comprehensive 3D fields but are computationally
                  expensive, resolving physical dynamics at coarse timescales. The
                  challenge lies in developing a high-fidelity, computationally
                  efficient framework to infer the complete 3D structure of the
                  ocean interior directly from high-frequency surface
                  signatures.
                </p>
              </div>
            </section>

            {/* Section 02: The Solution */}
            <section className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              <div className="lg:col-span-4 sticky top-20">
                <h2 className="font-outfit text-xl font-bold text-on-surface relative inline-block">
                  02 <span className="text-outline/60 mx-1.5">/</span> The Solution
                  <div className="absolute -bottom-1.5 left-0 w-10 h-0.5 bg-secondary rounded-full"></div>
                </h2>
              </div>
              <div className="lg:col-span-8 bg-surface-container-lowest border border-border-subtle/80 rounded-lg p-5 shadow-2xs">
                <h3 className="font-outfit text-base font-bold text-primary mb-2">
                  Neural AI Reconstruction
                </h3>
                <p className="font-sans text-xs text-text-secondary leading-relaxed mb-4">
                  OceanEmbed employs a novel spatially-aware deep learning
                  architecture designed specifically for geophysical data
                  inversion. By learning the complex, non-linear mappings
                  between surface expressions and subsurface density
                  structures, the model dynamically reconstructs temperature,
                  salinity, and geostrophic velocity profiles down to 1000
                  meters.
                </p>
                <div className="w-full h-48 rounded-md overflow-hidden border border-border-subtle/80 relative bg-surface-container-low flex items-center justify-center">
                  <div
                    className="absolute inset-0 bg-cover bg-center opacity-85"
                    style={{
                      backgroundImage:
                        "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCywjlNofoSMXx-77wJJIXwFVuYmCeYvElHGEfgF1ydh7L7rU68pYk3026pA9udXqUSpjCxGbSUUBaUEdbv9-_4_EhtwgStJ_CskaTsq8ckEqPfLknx7hpLEqe3IYrIL-8RxQXM9I3GXBAAjd1eo1TLJrCEaF7mwQjZoficlnNubbnzkW6GXu1tI2Z-aFgnqBnteTRsokroJEXQgAPaQxcBRK02J56P99pXn-3jSjNgAJ_3j3agNG_l')",
                    }}
                  ></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <span className="relative z-10 font-mono text-[11px] text-white bg-black/60 px-3 py-1 rounded backdrop-blur-xs self-end mb-3 mx-3 border border-white/20">
                    Surface-to-Depth Inversion Mapping
                  </span>
                </div>
              </div>
            </section>

            {/* Section 03: Core Surface Predictors */}
            <section className="w-full">
              <div className="mb-4 border-b border-border-subtle/60 pb-2">
                <h2 className="font-outfit text-xl font-bold text-on-surface">
                  03 <span className="text-outline/60 mx-1.5">/</span> Core Surface Predictors
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
                {/* Predictor 1 */}
                <div className="bg-surface-container-lowest p-4 rounded-lg border border-border-subtle/80 shadow-2xs hover:border-primary/40 transition-colors group">
                  <div className="w-9 h-9 bg-primary/10 rounded-md flex items-center justify-center mb-3">
                    <span className="material-symbols-outlined text-primary text-[18px]">
                      thermostat
                    </span>
                  </div>
                  <h4 className="font-outfit text-sm font-bold text-on-surface mb-0.5">SST</h4>
                  <p className="font-sans text-[10px] text-text-secondary mb-2 uppercase tracking-wider font-semibold">
                    Sea Surface Temperature
                  </p>
                  <p className="font-sans text-xs text-text-secondary leading-normal">
                    Primary indicator of surface heat flux and mixed layer dynamics.
                  </p>
                </div>

                {/* Predictor 2 */}
                <div className="bg-surface-container-lowest p-4 rounded-lg border border-border-subtle/80 shadow-2xs hover:border-secondary/40 transition-colors group">
                  <div className="w-9 h-9 bg-secondary/10 rounded-md flex items-center justify-center mb-3">
                    <span className="material-symbols-outlined text-secondary text-[18px]">
                      water_drop
                    </span>
                  </div>
                  <h4 className="font-outfit text-sm font-bold text-on-surface mb-0.5">SSS</h4>
                  <p className="font-sans text-[10px] text-text-secondary mb-2 uppercase tracking-wider font-semibold">
                    Sea Surface Salinity
                  </p>
                  <p className="font-sans text-xs text-text-secondary leading-normal">
                    Crucial for resolving density gradients and freshwater fluxes.
                  </p>
                </div>

                {/* Predictor 3 */}
                <div className="bg-surface-container-lowest p-4 rounded-lg border border-border-subtle/80 shadow-2xs hover:border-tertiary/40 transition-colors group">
                  <div className="w-9 h-9 bg-tertiary/10 rounded-md flex items-center justify-center mb-3">
                    <span className="material-symbols-outlined text-tertiary text-[18px]">
                      waves
                    </span>
                  </div>
                  <h4 className="font-outfit text-sm font-bold text-on-surface mb-0.5">ADT</h4>
                  <p className="font-sans text-[10px] text-text-secondary mb-2 uppercase tracking-wider font-semibold">
                    Absolute Dynamic Topography
                  </p>
                  <p className="font-sans text-xs text-text-secondary leading-normal">
                    Key constraint on the integrated subsurface density field.
                  </p>
                </div>

                {/* Predictor 4 */}
                <div className="bg-surface-container-lowest p-4 rounded-lg border border-border-subtle/80 shadow-2xs hover:border-outline/40 transition-colors group">
                  <div className="w-9 h-9 bg-surface-container-high rounded-md flex items-center justify-center mb-3">
                    <span className="material-symbols-outlined text-on-surface text-[18px]">
                      wind_power
                    </span>
                  </div>
                  <h4 className="font-outfit text-sm font-bold text-on-surface mb-0.5">Wind Stress</h4>
                  <p className="font-sans text-[10px] text-text-secondary mb-2 uppercase tracking-wider font-semibold">
                    Zonal / Meridional (Tau X/Y)
                  </p>
                  <p className="font-sans text-xs text-text-secondary leading-normal">
                    Drives Ekman transport and momentum flux into upper ocean.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 04: Pipeline Architecture */}
            <section className="w-full bg-surface-container-low/60 rounded-lg p-5 lg:p-8 border border-border-subtle/80 shadow-2xs">
              <div className="mb-6 text-center">
                <h2 className="font-outfit text-xl font-bold text-on-surface mb-1">
                  04 <span className="text-outline/60 mx-1.5">/</span> Pipeline Architecture
                </h2>
                <p className="font-sans text-xs text-text-secondary max-w-xl mx-auto">
                  The end-to-end embedding and reconstruction workflow.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
                {/* Step 1 */}
                <div className="bg-surface-container-lowest p-4 rounded-lg border border-border-subtle/80 flex flex-col items-center text-center shadow-2xs">
                  <div className="w-8 h-8 rounded-full bg-surface-container mb-2 flex items-center justify-center font-mono font-bold text-xs text-on-surface">
                    1
                  </div>
                  <h5 className="font-outfit text-xs font-bold text-on-surface mb-1">
                    Preprocessing
                  </h5>
                  <p className="font-sans text-[11px] text-text-secondary leading-relaxed">
                    Spatial co-location, standardization, and temporal alignment of multi-source satellite grids.
                  </p>
                </div>

                {/* Step 2 */}
                <div className="bg-primary/5 p-4 rounded-lg border border-primary/30 flex flex-col items-center text-center shadow-2xs">
                  <div className="w-8 h-8 rounded-full bg-primary text-on-primary mb-2 flex items-center justify-center font-mono font-bold text-xs">
                    2
                  </div>
                  <h5 className="font-outfit text-xs font-bold text-primary mb-1">
                    Embedding Layer
                  </h5>
                  <p className="font-sans text-[11px] text-text-secondary leading-relaxed">
                    CNN-based spatial feature extraction mapping 2D inputs to latent representation spaces.
                  </p>
                </div>

                {/* Step 3 */}
                <div className="bg-secondary/5 p-4 rounded-lg border border-secondary/30 flex flex-col items-center text-center shadow-2xs">
                  <div className="w-8 h-8 rounded-full bg-secondary text-on-secondary mb-2 flex items-center justify-center font-mono font-bold text-xs">
                    3
                  </div>
                  <h5 className="font-outfit text-xs font-bold text-secondary mb-1">
                    Vertical Reconstruction
                  </h5>
                  <p className="font-sans text-[11px] text-text-secondary leading-relaxed">
                    Multi-layer perceptron decoding latent features into high-resolution vertical profiles.
                  </p>
                </div>

                {/* Step 4 */}
                <div className="bg-surface-container-lowest p-4 rounded-lg border border-border-subtle/80 flex flex-col items-center text-center shadow-2xs">
                  <div className="w-8 h-8 rounded-full bg-surface-container mb-2 flex items-center justify-center font-mono font-bold text-xs text-on-surface">
                    4
                  </div>
                  <h5 className="font-outfit text-xs font-bold text-on-surface mb-1">
                    Validation
                  </h5>
                  <p className="font-sans text-[11px] text-text-secondary leading-relaxed">
                    Continuous scoring against in-situ ARGO profiles calculating RMSE and bias metrics.
                  </p>
                </div>
              </div>
            </section>

            {/* Sections 05 & 06 Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Section 05: Standard Output Depths */}
              <section>
                <div className="mb-4 border-b border-border-subtle/60 pb-2">
                  <h2 className="font-outfit text-xl font-bold text-on-surface">
                    05 <span className="text-outline/60 mx-1.5">/</span> Standard Depths
                  </h2>
                </div>
                <div className="bg-surface-container-lowest border border-border-subtle/80 rounded-lg overflow-hidden shadow-2xs">
                  <div className="grid grid-cols-3 bg-surface-container-low/80 px-3.5 py-2 border-b border-border-subtle/80">
                    <span className="font-sans text-[11px] font-semibold text-text-secondary uppercase">
                      Level
                    </span>
                    <span className="font-sans text-[11px] font-semibold text-text-secondary uppercase text-right">
                      Depth (m)
                    </span>
                    <span className="font-sans text-[11px] font-semibold text-text-secondary uppercase text-right">
                      Resolution
                    </span>
                  </div>
                  <ul className="font-mono text-xs text-on-surface flex flex-col divide-y divide-border-subtle/40">
                    <li className="grid grid-cols-3 px-3.5 py-2 hover:bg-surface-container-low/50 transition-colors">
                      <span className="text-text-secondary">L01</span>
                      <span className="text-right font-bold text-primary">0.0</span>
                      <span className="text-right font-sans text-text-secondary">Surface</span>
                    </li>
                    <li className="grid grid-cols-3 px-3.5 py-2 hover:bg-surface-container-low/50 transition-colors">
                      <span className="text-text-secondary">L02</span>
                      <span className="text-right font-semibold">10.0</span>
                      <span className="text-right font-sans text-text-secondary">High</span>
                    </li>
                    <li className="grid grid-cols-3 px-3.5 py-2 hover:bg-surface-container-low/50 transition-colors">
                      <span className="text-text-secondary">L03</span>
                      <span className="text-right font-semibold">30.0</span>
                      <span className="text-right font-sans text-text-secondary">High</span>
                    </li>
                    <li className="grid grid-cols-3 px-3.5 py-2 hover:bg-surface-container-low/50 transition-colors">
                      <span className="text-text-secondary">L04</span>
                      <span className="text-right font-semibold">50.0</span>
                      <span className="text-right font-sans text-text-secondary">High</span>
                    </li>
                    <li className="grid grid-cols-3 px-3.5 py-2 hover:bg-surface-container-low/50 transition-colors">
                      <span className="text-text-secondary">L05</span>
                      <span className="text-right font-semibold">75.0</span>
                      <span className="text-right font-sans text-text-secondary">High</span>
                    </li>
                    <li className="grid grid-cols-3 px-3.5 py-2 bg-surface-container-low/40">
                      <span className="text-text-secondary italic font-sans text-[11px]">...</span>
                      <span className="text-right text-text-secondary italic font-sans text-[11px]">intermediate levels</span>
                      <span className="text-right"></span>
                    </li>
                    <li className="grid grid-cols-3 px-3.5 py-2 hover:bg-surface-container-low/50 transition-colors">
                      <span className="text-text-secondary">L12</span>
                      <span className="text-right font-semibold">500.0</span>
                      <span className="text-right font-sans text-text-secondary">Medium</span>
                    </li>
                    <li className="grid grid-cols-3 px-3.5 py-2 hover:bg-surface-container-low/50 transition-colors">
                      <span className="text-text-secondary">L14</span>
                      <span className="text-right font-semibold">750.0</span>
                      <span className="text-right font-sans text-text-secondary">Low</span>
                    </li>
                    <li className="grid grid-cols-3 px-3.5 py-2 hover:bg-surface-container-low/50 transition-colors">
                      <span className="text-text-secondary">L15</span>
                      <span className="text-right font-semibold">1000.0</span>
                      <span className="text-right font-sans text-text-secondary">Low</span>
                    </li>
                  </ul>
                </div>
              </section>

              {/* Section 06: Data Provenance */}
              <section>
                <div className="mb-4 border-b border-border-subtle/60 pb-2">
                  <h2 className="font-outfit text-xl font-bold text-on-surface">
                    06 <span className="text-outline/60 mx-1.5">/</span> Data Provenance
                  </h2>
                </div>
                <div className="flex flex-col gap-3">
                  <div className="bg-surface-container-lowest p-4 rounded-lg border border-border-subtle/80 flex items-start gap-3 shadow-2xs">
                    <div className="w-8 h-8 rounded bg-tertiary/10 flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-tertiary text-[18px]">
                        satellite_alt
                      </span>
                    </div>
                    <div>
                      <h4 className="font-outfit text-xs font-bold text-on-surface mb-0.5">
                        Satellite Altimetry & Radiometry
                      </h4>
                      <p className="font-sans text-[10px] text-text-secondary uppercase mb-1 font-semibold">
                        Copernicus Marine Service (CMEMS)
                      </p>
                      <p className="font-sans text-xs text-text-secondary leading-normal">
                        L4 gridded multi-mission observations providing daily surface constraints globally at 0.25° resolution.
                      </p>
                    </div>
                  </div>

                  <div className="bg-surface-container-lowest p-4 rounded-lg border border-border-subtle/80 flex items-start gap-3 shadow-2xs">
                    <div className="w-8 h-8 rounded bg-primary/10 flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-primary text-[18px]">
                        layers
                      </span>
                    </div>
                    <div>
                      <h4 className="font-outfit text-xs font-bold text-on-surface mb-0.5">
                        GLORYS12V1
                      </h4>
                      <p className="font-sans text-[10px] text-text-secondary uppercase mb-1 font-semibold">
                        Mercator Ocean International
                      </p>
                      <p className="font-sans text-xs text-text-secondary leading-normal">
                        Global ocean eddy-resolving physical reanalysis used for pre-training deep learning embedder.
                      </p>
                    </div>
                  </div>

                  <div className="bg-surface-container-lowest p-4 rounded-lg border border-border-subtle/80 flex items-start gap-3 shadow-2xs">
                    <div className="w-8 h-8 rounded bg-secondary/10 flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-secondary text-[18px]">
                        sensors
                      </span>
                    </div>
                    <div>
                      <h4 className="font-outfit text-xs font-bold text-on-surface mb-0.5">
                        ARGO Float Array
                      </h4>
                      <p className="font-sans text-[10px] text-text-secondary uppercase mb-1 font-semibold">
                        International Argo Program
                      </p>
                      <p className="font-sans text-xs text-text-secondary leading-normal">
                        In-situ autonomous vertical profiling data used for independent validation and fine-tuning.
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
