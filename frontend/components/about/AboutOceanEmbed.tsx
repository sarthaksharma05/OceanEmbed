"use client";

export default function AboutOceanEmbed() {
  return (
    <main className="w-full bg-background min-h-[calc(100vh-64px)]">
      <div className="max-w-max-width-container mx-auto px-margin-desktop py-grid-16">
        <div className="flex flex-col w-full text-on-surface">
          <section className="w-full bg-surface-container py-16 lg:py-24 px-4 lg:px-6 mb-16 shadow-sm border-b border-outline-variant relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 blur-3xl rounded-full bg-primary-container -translate-y-1/2 translate-x-1/4 pointer-events-none"></div>
            <div className="max-w-max-width-container mx-auto">
              <div className="max-w-3xl">
                <span className="font-label-sm text-primary uppercase tracking-widest block mb-4">
                  Project Overview
                </span>
                <h1 className="font-display-lg text-display-lg text-on-surface mb-6">
                  OceanEmbed: Deep Synthesis of Marine State Variables
                </h1>
                <p className="font-headline-md text-headline-md text-on-surface-variant font-normal leading-relaxed">
                  High-resolution 3D reconstruction of oceanographic fields from
                  sparse surface observations using spatially-aware embedding
                  architectures.
                </p>
              </div>
            </div>
          </section>
          <div className="max-w-max-width-container mx-auto px-4 lg:px-6 space-y-24 w-full">
            <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-4 sticky top-24">
                <h2 className="font-display-lg text-display-lg mb-2 relative inline-block">
                  01 <span className="text-outline mx-2">/</span> The Challenge
                  <div className="absolute -bottom-2 left-0 w-12 h-1 bg-primary"></div>
                </h2>
              </div>
              <div className="lg:col-span-8 bg-surface-container-lowest p-8 rounded-xl border border-outline-variant shadow-sm relative overflow-hidden">
                <div className="absolute -right-12 -top-12 opacity-5 text-9xl font-bold font-data-tabular">
                  ?
                </div>
                <p className="font-body-md text-body-md text-text-secondary leading-relaxed mb-6">
                  Understanding the ocean's interior is fundamentally limited by
                  observation constraints. While satellite altimetry and
                  radiometry provide continuous, global coverage of surface
                  parameters (Sea Surface Height, Sea Surface Temperature),
                  subsurface properties remain sparsely sampled by the ARGO float
                  array and infrequent ship-based surveys.
                </p>
                <p className="font-body-md text-body-md text-text-secondary leading-relaxed">
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
            <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-4 sticky top-24">
                <h2 className="font-display-lg text-display-lg mb-2 relative inline-block">
                  02 <span className="text-outline mx-2">/</span> The Solution
                  <div className="absolute -bottom-2 left-0 w-12 h-1 bg-secondary"></div>
                </h2>
              </div>
              <div className="lg:col-span-8">
                <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-8 shadow-sm">
                  <h3 className="font-headline-md text-headline-md text-primary mb-4">
                    Neural AI Reconstruction
                  </h3>
                  <p className="font-body-md text-body-md text-text-secondary leading-relaxed mb-8">
                    OceanEmbed employs a novel spatially-aware deep learning
                    architecture designed specifically for geophysical data
                    inversion. By learning the complex, non-linear mappings
                    between surface expressions and subsurface density
                    structures, the model dynamically reconstructs temperature,
                    salinity, and geostrophic velocity profiles down to 1000
                    meters.
                  </p>
                  <div className="w-full h-64 rounded-lg overflow-hidden border border-border-subtle relative bg-surface-container-low flex items-center justify-center">
                    <div
                      className="absolute inset-0 z-0 bg-cover bg-center opacity-80"
                      data-alt="A stylized, technical 3D visualization showing a horizontal plane of the ocean surface connected via glowing vertical lines to a deeper horizontal plane."
                      style={{
                        backgroundImage:
                          "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCywjlNofoSMXx-77wJJIXwFVuYmCeYvElHGEfgF1ydh7L7rU68pYk3026pA9udXqUSpjCxGbSUUBaUEdbv9-_4_EhtwgStJ_CskaTsq8ckEqPfLknx7hpLEqe3IYrIL-8RxQXM9I3GXBAAjd1eo1TLJrCEaF7mwQjZoficlnNubbnzkW6GXu1tI2Z-aFgnqBnteTRsokroJEXQgAPaQxcBRK02J56P99pXn-3jSjNgAJ_3j3agNG_l')",
                      }}
                    ></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface/60 to-transparent"></div>
                    <span className="relative z-10 font-label-sm text-label-sm text-on-primary bg-inverse-surface/80 px-3 py-1 rounded backdrop-blur-sm self-end mb-4 mx-4 border border-outline/30">
                      Surface-to-Depth Inversion Mapping
                    </span>
                  </div>
                </div>
              </div>
            </section>
            <section className="w-full">
              <div className="mb-12 border-b border-outline-variant pb-4">
                <h2 className="font-display-lg text-display-lg inline-block">
                  03 <span className="text-outline mx-2">/</span> Core Surface
                  Predictors
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant shadow-sm hover:shadow-md transition-shadow group">
                  <div className="w-12 h-12 bg-primary-fixed/30 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-primary">
                      thermostat
                    </span>
                  </div>
                  <h4 className="font-headline-md text-headline-md mb-2">SST</h4>
                  <p className="font-label-sm text-label-sm text-text-secondary mb-3 uppercase tracking-wider">
                    Sea Surface Temperature
                  </p>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    Primary indicator of surface heat flux and mixed layer
                    dynamics.
                  </p>
                </div>
                <div className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant shadow-sm hover:shadow-md transition-shadow group">
                  <div className="w-12 h-12 bg-secondary-fixed/30 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-secondary">
                      water_drop
                    </span>
                  </div>
                  <h4 className="font-headline-md text-headline-md mb-2">SSS</h4>
                  <p className="font-label-sm text-label-sm text-text-secondary mb-3 uppercase tracking-wider">
                    Sea Surface Salinity
                  </p>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    Crucial for resolving density gradients and freshwater
                    fluxes.
                  </p>
                </div>
                <div className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant shadow-sm hover:shadow-md transition-shadow group">
                  <div className="w-12 h-12 bg-tertiary-fixed/30 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-tertiary">
                      waves
                    </span>
                  </div>
                  <h4 className="font-headline-md text-headline-md mb-2">ADT</h4>
                  <p className="font-label-sm text-label-sm text-text-secondary mb-3 uppercase tracking-wider">
                    Absolute Dynamic Topography
                  </p>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    Key constraint on the integrated subsurface density field.
                  </p>
                </div>
                <div className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant shadow-sm hover:shadow-md transition-shadow group">
                  <div className="w-12 h-12 bg-surface-variant rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-on-surface">
                      wind_power
                    </span>
                  </div>
                  <h4 className="font-headline-md text-headline-md mb-2">
                    Wind Stress
                  </h4>
                  <p className="font-label-sm text-label-sm text-text-secondary mb-3 uppercase tracking-wider">
                    Zonal / Meridional (Tau X/Y)
                  </p>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    Drives Ekman transport and momentum flux into the upper
                    ocean.
                  </p>
                </div>
              </div>
            </section>
            <section className="w-full bg-surface-container-low rounded-2xl p-8 lg:p-12 border border-outline-variant shadow-sm">
              <div className="mb-10 text-center">
                <h2 className="font-display-lg text-display-lg mb-4">
                  04 <span className="text-outline mx-2">/</span> Pipeline
                  Architecture
                </h2>
                <p className="font-body-md text-body-md text-text-secondary max-w-2xl mx-auto">
                  The end-to-end embedding and reconstruction workflow.
                </p>
              </div>
              <div className="flex flex-col lg:flex-row items-center justify-between gap-6 relative">
                <div className="absolute top-1/2 left-0 w-full h-0.5 bg-outline-variant hidden lg:block -z-10 -translate-y-1/2"></div>
                <div className="w-full lg:w-1/4 bg-surface-container-lowest p-6 rounded-xl border-2 border-outline/20 relative z-10 flex flex-col items-center text-center shadow-md">
                  <div className="w-10 h-10 rounded-full bg-surface-container mb-4 flex items-center justify-center font-data-tabular font-bold text-on-surface-variant">
                    1
                  </div>
                  <h5 className="font-headline-md text-headline-md mb-2">
                    Preprocessing
                  </h5>
                  <p className="font-label-sm text-label-sm text-text-secondary">
                    Spatial co-location, standardization, and temporal alignment
                    of multi-source satellite grids.
                  </p>
                </div>
                <span className="material-symbols-outlined text-outline lg:-rotate-90 hidden lg:block bg-surface-container-low p-1 rounded-full z-10">
                  arrow_drop_down_circle
                </span>
                <div className="w-full lg:w-1/4 bg-primary-fixed/20 p-6 rounded-xl border-2 border-primary/30 relative z-10 flex flex-col items-center text-center shadow-md">
                  <div className="w-10 h-10 rounded-full bg-primary text-on-primary mb-4 flex items-center justify-center font-data-tabular font-bold">
                    2
                  </div>
                  <h5 className="font-headline-md text-headline-md text-primary-container mb-2">
                    Embedding Layer
                  </h5>
                  <p className="font-label-sm text-label-sm text-on-surface-variant">
                    CNN-based spatial feature extraction mapping 2D inputs to
                    latent representation spaces.
                  </p>
                </div>
                <span className="material-symbols-outlined text-outline lg:-rotate-90 hidden lg:block bg-surface-container-low p-1 rounded-full z-10">
                  arrow_drop_down_circle
                </span>
                <div className="w-full lg:w-1/4 bg-secondary-fixed/20 p-6 rounded-xl border-2 border-secondary/30 relative z-10 flex flex-col items-center text-center shadow-md">
                  <div className="w-10 h-10 rounded-full bg-secondary text-on-secondary mb-4 flex items-center justify-center font-data-tabular font-bold">
                    3
                  </div>
                  <h5 className="font-headline-md text-headline-md text-secondary mb-2">
                    Vertical Reconstruction
                  </h5>
                  <p className="font-label-sm text-label-sm text-on-surface-variant">
                    Multi-layer perceptron (MLP) decoding latent features into
                    high-resolution vertical profiles.
                  </p>
                </div>
                <span className="material-symbols-outlined text-outline lg:-rotate-90 hidden lg:block bg-surface-container-low p-1 rounded-full z-10">
                  arrow_drop_down_circle
                </span>
                <div className="w-full lg:w-1/4 bg-surface-container-lowest p-6 rounded-xl border-2 border-outline/20 relative z-10 flex flex-col items-center text-center shadow-md">
                  <div className="w-10 h-10 rounded-full bg-surface-container mb-4 flex items-center justify-center font-data-tabular font-bold text-on-surface-variant">
                    4
                  </div>
                  <h5 className="font-headline-md text-headline-md mb-2">
                    Validation
                  </h5>
                  <p className="font-label-sm text-label-sm text-text-secondary">
                    Continuous scoring against in-situ ARGO profiles calculating
                    RMSE and bias metrics.
                  </p>
                </div>
              </div>
            </section>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              <section>
                <div className="mb-8 border-b border-outline-variant pb-4">
                  <h2 className="font-display-lg text-display-lg inline-block">
                    05 <span className="text-outline mx-2">/</span> Standard
                    Output Depths
                  </h2>
                </div>
                <div className="bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden shadow-sm">
                  <div className="grid grid-cols-3 bg-surface-container px-4 py-3 border-b border-outline-variant">
                    <span className="font-label-sm text-label-sm text-text-secondary uppercase">
                      Level
                    </span>
                    <span className="font-label-sm text-label-sm text-text-secondary uppercase text-right">
                      Depth (m)
                    </span>
                    <span className="font-label-sm text-label-sm text-text-secondary uppercase text-right">
                      Resolution
                    </span>
                  </div>
                  <ul className="font-data-tabular text-data-tabular flex flex-col">
                    <li className="grid grid-cols-3 px-4 py-3 border-b border-outline-variant hover:bg-surface-container-low transition-colors">
                      <span className="text-outline">L01</span>
                      <span className="text-right font-medium">0.0</span>
                      <span className="text-right text-text-secondary">
                        Surface
                      </span>
                    </li>
                    <li className="grid grid-cols-3 px-4 py-3 border-b border-outline-variant hover:bg-surface-container-low transition-colors">
                      <span className="text-outline">L02</span>
                      <span className="text-right font-medium">10.0</span>
                      <span className="text-right text-text-secondary">
                        High
                      </span>
                    </li>
                    <li className="grid grid-cols-3 px-4 py-3 border-b border-outline-variant hover:bg-surface-container-low transition-colors">
                      <span className="text-outline">L03</span>
                      <span className="text-right font-medium">30.0</span>
                      <span className="text-right text-text-secondary">
                        High
                      </span>
                    </li>
                    <li className="grid grid-cols-3 px-4 py-3 border-b border-outline-variant hover:bg-surface-container-low transition-colors">
                      <span className="text-outline">L04</span>
                      <span className="text-right font-medium">50.0</span>
                      <span className="text-right text-text-secondary">
                        High
                      </span>
                    </li>
                    <li className="grid grid-cols-3 px-4 py-3 border-b border-outline-variant hover:bg-surface-container-low transition-colors">
                      <span className="text-outline">L05</span>
                      <span className="text-right font-medium">75.0</span>
                      <span className="text-right text-text-secondary">
                        High
                      </span>
                    </li>
                    <li className="grid grid-cols-3 px-4 py-3 border-b border-outline-variant bg-surface-container-low">
                      <span className="text-outline italic">...</span>
                      <span className="text-right text-text-secondary italic">
                        intermediate levels
                      </span>
                      <span className="text-right"></span>
                    </li>
                    <li className="grid grid-cols-3 px-4 py-3 border-b border-outline-variant hover:bg-surface-container-low transition-colors">
                      <span className="text-outline">L12</span>
                      <span className="text-right font-medium">500.0</span>
                      <span className="text-right text-text-secondary">
                        Medium
                      </span>
                    </li>
                    <li className="grid grid-cols-3 px-4 py-3 border-b border-outline-variant hover:bg-surface-container-low transition-colors">
                      <span className="text-outline">L14</span>
                      <span className="text-right font-medium">750.0</span>
                      <span className="text-right text-text-secondary">
                        Low
                      </span>
                    </li>
                    <li className="grid grid-cols-3 px-4 py-3 hover:bg-surface-container-low transition-colors">
                      <span className="text-outline">L15</span>
                      <span className="text-right font-medium">1000.0</span>
                      <span className="text-right text-text-secondary">
                        Low
                      </span>
                    </li>
                  </ul>
                </div>
              </section>
              <section>
                <div className="mb-8 border-b border-outline-variant pb-4">
                  <h2 className="font-display-lg text-display-lg inline-block">
                    06 <span className="text-outline mx-2">/</span> Data
                    Provenance
                  </h2>
                </div>
                <div className="flex flex-col gap-4">
                  <div className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant flex items-start gap-4 shadow-sm hover:-translate-y-1 transition-transform duration-300">
                    <div className="w-10 h-10 rounded bg-tertiary-container flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-on-tertiary-container">
                        satellite_alt
                      </span>
                    </div>
                    <div>
                      <h4 className="font-headline-md text-headline-md mb-1">
                        Satellite Altimetry & Radiometry
                      </h4>
                      <p className="font-label-sm text-label-sm text-text-secondary uppercase mb-2">
                        Copernicus Marine Service (CMEMS)
                      </p>
                      <p className="font-body-md text-body-md text-on-surface-variant">
                        L4 gridded multi-mission observations providing daily
                        surface constraints globally at 0.25° resolution.
                      </p>
                    </div>
                  </div>
                  <div className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant flex items-start gap-4 shadow-sm hover:-translate-y-1 transition-transform duration-300">
                    <div className="w-10 h-10 rounded bg-primary-container flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-on-primary">
                        layers
                      </span>
                    </div>
                    <div>
                      <h4 className="font-headline-md text-headline-md mb-1">
                        GLORYS12V1
                      </h4>
                      <p className="font-label-sm text-label-sm text-text-secondary uppercase mb-2">
                        Mercator Ocean International
                      </p>
                      <p className="font-body-md text-body-md text-on-surface-variant">
                        Global ocean eddy-resolving physical reanalysis used for
                        extensive pre-training of the deep learning embedder.
                      </p>
                    </div>
                  </div>
                  <div className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant flex items-start gap-4 shadow-sm hover:-translate-y-1 transition-transform duration-300">
                    <div className="w-10 h-10 rounded bg-secondary-container flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-on-secondary-container">
                        sensors
                      </span>
                    </div>
                    <div>
                      <h4 className="font-headline-md text-headline-md mb-1">
                        ARGO Float Array
                      </h4>
                      <p className="font-label-sm text-label-sm text-text-secondary uppercase mb-2">
                        International Argo Program
                      </p>
                      <p className="font-body-md text-body-md text-on-surface-variant">
                        In-situ autonomous vertical profiling data used for
                        independent validation and continuous model
                        fine-tuning.
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
