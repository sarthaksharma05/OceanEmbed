"use client";

import { useState } from "react";

export default function RegionalAnalysis() {
  const [selectedRegion, setSelectedRegion] = useState<"BoB" | "AS">("BoB");
  const [viewMode, setViewMode] = useState<"Abs" | "Ano">("Abs");

  return (
    <main className="w-full bg-background min-h-[calc(100vh-56px)]">
      <div className="max-w-max-width-container mx-auto px-margin-desktop py-6">
        <div className="flex flex-col w-full font-sans text-on-surface pb-12">
          {/* Header Section */}
          <div className="w-full pb-6 mb-4 border-b border-border-subtle/60">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <p className="font-sans text-xs font-bold text-primary uppercase tracking-widest mb-1 flex items-center gap-2">
                  <span className="w-6 h-[2px] bg-primary rounded-full"></span> Regional Analysis Module
                </p>
                <h1 className="font-outfit text-2xl font-bold text-on-surface tracking-tight">
                  Reconstructed Subsurface Temperature
                </h1>
                <p className="font-sans text-xs text-text-secondary max-w-2xl mt-1">
                  High-resolution spatial analysis of reconstructed subsurface thermal structures utilizing integrated satellite and ARGO profiling data.
                </p>
              </div>
              <div className="flex items-center gap-2">
                <button className="px-3 py-1.5 rounded-md bg-primary text-on-primary text-xs font-semibold hover:bg-primary-container transition-colors shadow-2xs cursor-pointer flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[16px]">
                    download
                  </span>
                  Export NetCDF
                </button>
                <button className="px-3 py-1.5 rounded-md bg-white border border-border-subtle text-text-secondary hover:text-on-surface text-xs font-semibold transition-colors shadow-2xs cursor-pointer flex items-center gap-1">
                  <span className="material-symbols-outlined text-[16px]">
                    settings
                  </span>
                  Settings
                </button>
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="w-full grid grid-cols-12 gap-5">
            {/* Left Sidebar Controls */}
            <aside className="col-span-12 lg:col-span-3 flex flex-col gap-4">
              {/* Region Selection */}
              <div className="bg-surface-container-lowest rounded-lg border border-border-subtle/80 p-3.5 shadow-2xs flex flex-col gap-3">
                <h3 className="font-outfit text-xs font-bold text-on-surface flex items-center gap-1.5 border-b border-border-subtle/60 pb-2">
                  <span className="material-symbols-outlined text-primary text-[18px]">
                    explore
                  </span>{" "}
                  Focus Region
                </h3>
                <div className="flex flex-col gap-1.5">
                  <label
                    onClick={() => setSelectedRegion("BoB")}
                    className={`flex items-center gap-2.5 p-2.5 rounded-md cursor-pointer transition-colors border ${
                      selectedRegion === "BoB"
                        ? "bg-primary/5 border-primary/40 text-primary font-semibold"
                        : "bg-surface-container-low/50 border-border-subtle/60 text-text-secondary hover:text-on-surface"
                    }`}
                  >
                    <input
                      checked={selectedRegion === "BoB"}
                      onChange={() => setSelectedRegion("BoB")}
                      className="w-3.5 h-3.5 text-primary accent-primary"
                      type="radio"
                    />
                    <span className="text-xs">Bay of Bengal (BoB)</span>
                  </label>
                  <label
                    onClick={() => setSelectedRegion("AS")}
                    className={`flex items-center gap-2.5 p-2.5 rounded-md cursor-pointer transition-colors border ${
                      selectedRegion === "AS"
                        ? "bg-primary/5 border-primary/40 text-primary font-semibold"
                        : "bg-surface-container-low/50 border-border-subtle/60 text-text-secondary hover:text-on-surface"
                    }`}
                  >
                    <input
                      checked={selectedRegion === "AS"}
                      onChange={() => setSelectedRegion("AS")}
                      className="w-3.5 h-3.5 text-primary accent-primary"
                      type="radio"
                    />
                    <span className="text-xs">Arabian Sea (AS)</span>
                  </label>
                </div>
              </div>

              {/* Temporal Controls */}
              <div className="bg-surface-container-lowest rounded-lg border border-border-subtle/80 p-3.5 shadow-2xs flex flex-col gap-3">
                <h3 className="font-outfit text-xs font-bold text-on-surface flex items-center gap-1.5 border-b border-border-subtle/60 pb-2">
                  <span className="material-symbols-outlined text-primary text-[18px]">
                    calendar_month
                  </span>{" "}
                  Temporal
                </h3>
                <div className="flex flex-col gap-2">
                  <label className="font-sans text-[11px] font-semibold text-text-secondary uppercase">
                    Analysis Date
                  </label>
                  <input
                    className="w-full bg-surface-container-lowest border border-border-subtle rounded-md px-3 py-1.5 font-mono text-xs text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                    type="date"
                    defaultValue="2023-11-15"
                  />
                  <div className="flex items-center justify-between mt-1 pt-1">
                    <button
                      className="p-1 rounded hover:bg-surface-container text-text-secondary hover:text-on-surface transition-colors"
                      title="Previous Day"
                    >
                      <span className="material-symbols-outlined text-[18px]">
                        chevron_left
                      </span>
                    </button>
                    <span className="font-mono text-[11px] text-primary font-semibold uppercase tracking-wider">
                      Daily Mean
                    </span>
                    <button
                      className="p-1 rounded hover:bg-surface-container text-text-secondary hover:text-on-surface transition-colors"
                      title="Next Day"
                    >
                      <span className="material-symbols-outlined text-[18px]">
                        chevron_right
                      </span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Vertical Profile Depth Slider */}
              <div className="bg-surface-container-lowest rounded-lg border border-border-subtle/80 p-3.5 shadow-2xs flex flex-col gap-3">
                <h3 className="font-outfit text-xs font-bold text-on-surface flex items-center gap-1.5 border-b border-border-subtle/60 pb-2">
                  <span className="material-symbols-outlined text-primary text-[18px]">
                    water_drop
                  </span>{" "}
                  Depth Level
                </h3>
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between items-center">
                    <span className="font-mono text-xs font-bold text-primary bg-primary/10 px-2.5 py-0.5 rounded-full border border-primary/20">
                      Selected: 75m
                    </span>
                    <span className="font-mono text-[11px] text-text-secondary">
                      Level 6/15
                    </span>
                  </div>

                  <div className="py-2 flex flex-col gap-1">
                    <input
                      className="w-full accent-primary h-1.5 rounded-lg bg-surface-container cursor-pointer"
                      max="14"
                      min="0"
                      type="range"
                      defaultValue="5"
                    />
                    <div className="flex justify-between text-[10px] text-text-secondary font-mono">
                      <span>0m</span>
                      <span>150m</span>
                      <span>500m</span>
                      <span>1000m</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Analysis Parameters */}
              <div className="bg-surface-container-lowest rounded-lg border border-border-subtle/80 p-3.5 shadow-2xs flex flex-col gap-3">
                <h3 className="font-outfit text-xs font-bold text-on-surface flex items-center gap-1.5 border-b border-border-subtle/60 pb-2">
                  <span className="material-symbols-outlined text-primary text-[18px]">
                    tune
                  </span>{" "}
                  Parameters
                </h3>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-on-surface font-medium">View Mode</span>
                  <div className="flex bg-surface-container-low border border-border-subtle/60 rounded-md p-0.5">
                    <button
                      onClick={() => setViewMode("Abs")}
                      className={`px-2.5 py-1 rounded text-[11px] font-semibold transition-all ${
                        viewMode === "Abs"
                          ? "bg-white text-primary shadow-2xs"
                          : "text-text-secondary hover:text-on-surface"
                      }`}
                    >
                      Absolute (T)
                    </button>
                    <button
                      onClick={() => setViewMode("Ano")}
                      className={`px-2.5 py-1 rounded text-[11px] font-semibold transition-all ${
                        viewMode === "Ano"
                          ? "bg-white text-primary shadow-2xs"
                          : "text-text-secondary hover:text-on-surface"
                      }`}
                    >
                      Anomaly (T')
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between mt-1">
                  <span className="text-xs text-on-surface font-medium">Interpolation</span>
                  <select className="bg-surface-container-lowest border border-border-subtle text-on-surface font-sans text-xs rounded-md px-2 py-1 outline-none focus:border-primary">
                    <option>Bicubic Spline</option>
                    <option>Nearest Neighbor</option>
                    <option>Kriging</option>
                  </select>
                </div>
              </div>
            </aside>

            {/* Main Heatmap & Stat Cards */}
            <section className="col-span-12 lg:col-span-9 flex flex-col gap-4">
              {/* Spatial Heatmap Panel */}
              <div className="bg-surface-container-lowest rounded-lg border border-border-subtle/80 shadow-2xs overflow-hidden flex flex-col relative h-[520px]">
                {/* Header Banner Overlay */}
                <div className="absolute top-0 left-0 right-0 p-3 bg-gradient-to-b from-white/90 via-white/60 to-transparent z-10 flex justify-between items-start pointer-events-none">
                  <div className="pointer-events-auto bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-md shadow-2xs border border-border-subtle">
                    <h2 className="font-outfit text-sm font-bold text-on-surface">
                      {selectedRegion === "BoB" ? "Bay of Bengal" : "Arabian Sea"} - 75m Reconstructed Temperature
                    </h2>
                    <p className="font-mono text-[11px] text-text-secondary">
                      Lat: 5°N to 22°N | Lon: 78°E to 98°E
                    </p>
                  </div>
                  <div className="pointer-events-auto flex gap-1.5">
                    <button
                      className="w-8 h-8 rounded-md bg-white/95 backdrop-blur-sm shadow-2xs flex items-center justify-center text-text-secondary hover:text-primary transition-colors border border-border-subtle cursor-pointer"
                      title="Toggle Gridlines"
                    >
                      <span className="material-symbols-outlined text-[18px]">
                        grid_on
                      </span>
                    </button>
                    <button
                      className="w-8 h-8 rounded-md bg-white/95 backdrop-blur-sm shadow-2xs flex items-center justify-center text-text-secondary hover:text-primary transition-colors border border-border-subtle cursor-pointer"
                      title="Download Image"
                    >
                      <span className="material-symbols-outlined text-[18px]">
                        download
                      </span>
                    </button>
                  </div>
                </div>

                {/* Heatmap Image */}
                <div className="relative w-full h-full bg-surface-container flex items-center justify-center overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center opacity-95"
                    style={{
                      backgroundImage:
                        "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDB2B82SgmGItnQsH6YrHXGOk31UZn94o53oju9bm7DZpU8k28DKEEgOns0HR08JF-OSte0clhlnrgK4DO7h3iFubphgBvAm1V3_8FL9J-ffpgHLMDCjaxM1ZSBxzvs38tOZbz1tS15pBI576DJxGhxxkRQOgO-eAumyq6zVLs3HcJ57kCL9pI-v718jYKx4njz63fS4FEkbLxHBKWh_jHLyBddLvR2OEwrKo8AmDUHurfS85j-wb2K')",
                    }}
                  ></div>

                  {/* Pulsing Sample Marker */}
                  <div className="absolute top-[40%] left-[55%] pointer-events-none group">
                    <div className="w-3.5 h-3.5 rounded-full border-2 border-white bg-primary shadow-sm animate-pulse"></div>
                    <div className="absolute top-5 left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-sm shadow-md border border-border-subtle px-2.5 py-1.5 rounded-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                      <p className="font-mono text-xs font-bold text-on-surface">
                        28.4 °C
                      </p>
                      <p className="font-mono text-[10px] text-text-secondary">
                        14.2°N, 88.5°E
                      </p>
                    </div>
                  </div>
                </div>

                {/* Colorbar Legend */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-sm shadow-sm px-4 py-2 rounded-lg border border-border-subtle flex flex-col gap-1 w-3/4 max-w-sm">
                  <div className="flex justify-between font-mono text-[10px] text-text-secondary px-0.5">
                    <span>22.0°C</span>
                    <span className="font-sans font-semibold text-on-surface uppercase tracking-wider text-[9px]">
                      Temperature (°C)
                    </span>
                    <span>31.0°C</span>
                  </div>
                  <div className="h-2.5 w-full rounded-full bg-gradient-to-r from-[#001b3e] via-[#0066cc] via-[#84d4d3] via-[#e7e8ee] via-[#ffb692] to-[#883700] relative">
                    <div className="absolute top-1/2 -translate-y-1/2 left-[70%] w-1 h-4 bg-white border border-outline shadow-2xs rounded-sm"></div>
                  </div>
                </div>
              </div>

              {/* Bento Grid Stats */}
              <div className="grid grid-cols-2 md:grid-cols-6 gap-3">
                {/* Stat 1: Spatial Mean */}
                <div className="col-span-2 bg-surface-container-lowest rounded-lg p-3.5 border border-border-subtle/80 shadow-2xs flex flex-col justify-between">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="material-symbols-outlined text-primary text-[16px]">
                        thermostat
                      </span>
                    </div>
                    <span className="font-sans text-[11px] font-semibold text-text-secondary uppercase tracking-wider">
                      Spatial Mean
                    </span>
                  </div>
                  <div className="flex items-baseline gap-1 mt-1">
                    <span className="font-outfit text-2xl font-bold text-on-surface">
                      26.8
                    </span>
                    <span className="font-sans text-xs text-text-secondary">
                      °C
                    </span>
                  </div>
                  <div className="mt-3 h-1 w-full bg-surface-container rounded-full overflow-hidden">
                    <div className="h-full bg-primary w-[65%] rounded-full"></div>
                  </div>
                </div>

                {/* Stat 2: Range (Min/Max) */}
                <div className="col-span-2 bg-surface-container-lowest rounded-lg p-3.5 border border-border-subtle/80 shadow-2xs flex flex-col justify-between">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-7 h-7 rounded-full bg-secondary/10 flex items-center justify-center">
                      <span className="material-symbols-outlined text-secondary text-[16px]">
                        swap_vert
                      </span>
                    </div>
                    <span className="font-sans text-[11px] font-semibold text-text-secondary uppercase tracking-wider">
                      Range (Min/Max)
                    </span>
                  </div>
                  <div className="flex items-center justify-between mt-1">
                    <div className="flex flex-col">
                      <span className="font-sans text-[10px] text-primary font-semibold">Min</span>
                      <span className="font-mono text-base font-bold text-on-surface">
                        23.4°
                      </span>
                    </div>
                    <div className="h-6 w-[1px] bg-border-subtle"></div>
                    <div className="flex flex-col items-end">
                      <span className="font-sans text-[10px] text-tertiary font-semibold">Max</span>
                      <span className="font-mono text-base font-bold text-on-surface">
                        30.1°
                      </span>
                    </div>
                  </div>
                </div>

                {/* Stat 3: Model RMSE */}
                <div className="col-span-2 bg-surface-container-lowest rounded-lg p-3.5 border border-border-subtle/80 shadow-2xs flex flex-col justify-between">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-7 h-7 rounded-full bg-surface-container flex items-center justify-center">
                      <span className="material-symbols-outlined text-outline text-[16px]">
                        analytics
                      </span>
                    </div>
                    <span className="font-sans text-[11px] font-semibold text-text-secondary uppercase tracking-wider">
                      Model RMSE
                    </span>
                  </div>
                  <div className="flex items-baseline gap-1 mt-1">
                    <span className="font-outfit text-2xl font-bold text-on-surface">
                      0.42
                    </span>
                    <span className="font-sans text-xs text-text-secondary">
                      °C
                    </span>
                  </div>
                  <p className="font-sans text-[11px] text-secondary font-medium mt-1 flex items-center gap-1">
                    <span className="material-symbols-outlined text-[13px]">
                      trending_down
                    </span>
                    -0.05 vs last week
                  </p>
                </div>

                {/* Stat 4: Coverage & Correlation */}
                <div className="col-span-2 md:col-span-6 bg-surface-container-lowest rounded-lg p-3.5 border border-border-subtle/80 shadow-2xs flex flex-col md:flex-row items-center justify-between gap-4">
                  <div className="flex-1 w-full flex items-center gap-3">
                    <div className="relative w-12 h-12 flex-shrink-0">
                      <svg
                        className="w-full h-full -rotate-90 transform"
                        viewBox="0 0 36 36"
                      >
                        <circle
                          className="stroke-surface-container-high"
                          cx="18"
                          cy="18"
                          fill="none"
                          r="16"
                          strokeWidth="3.5"
                        ></circle>
                        <circle
                          className="stroke-primary"
                          cx="18"
                          cy="18"
                          fill="none"
                          r="16"
                          strokeDasharray="100"
                          strokeDashoffset="12"
                          strokeLinecap="round"
                          strokeWidth="3.5"
                        ></circle>
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="font-mono text-xs font-bold text-on-surface">
                          88%
                        </span>
                      </div>
                    </div>
                    <div>
                      <p className="font-sans text-[11px] font-semibold text-text-secondary uppercase mb-0.5">
                        Spatial Coverage
                      </p>
                      <p className="font-mono text-xs text-on-surface">
                        Valid grid points: 14,230 / 16,150
                      </p>
                    </div>
                  </div>

                  <div className="w-full md:w-[1px] h-[1px] md:h-10 bg-border-subtle"></div>

                  <div className="flex-1 w-full flex flex-col gap-1">
                    <div className="flex justify-between items-center">
                      <span className="font-sans text-[11px] font-semibold text-text-secondary uppercase">
                        Correlation (ARGO)
                      </span>
                      <span className="font-mono text-xs font-bold text-primary">
                        r = 0.94
                      </span>
                    </div>
                    <div className="h-5 w-full flex items-end gap-[2px]">
                      <div className="w-full bg-primary/20 h-[40%] rounded-t-xs"></div>
                      <div className="w-full bg-primary/30 h-[50%] rounded-t-xs"></div>
                      <div className="w-full bg-primary/40 h-[45%] rounded-t-xs"></div>
                      <div className="w-full bg-primary/50 h-[60%] rounded-t-xs"></div>
                      <div className="w-full bg-primary/60 h-[75%] rounded-t-xs"></div>
                      <div className="w-full bg-primary/70 h-[85%] rounded-t-xs"></div>
                      <div className="w-full bg-primary/80 h-[80%] rounded-t-xs"></div>
                      <div className="w-full bg-primary/90 h-[95%] rounded-t-xs"></div>
                      <div className="w-full bg-primary h-[100%] rounded-t-xs"></div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
