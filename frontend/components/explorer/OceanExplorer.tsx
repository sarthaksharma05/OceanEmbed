"use client";

import { useState } from "react";

export default function OceanExplorer() {
  const [activeVar, setActiveVar] = useState<"Temp" | "Sal" | "Curr" | "SSH">("Temp");
  const [depthLevel, setDepthLevel] = useState<number>(0);
  const [showAllDepths, setShowAllDepths] = useState<boolean>(false);

  return (
    <main className="w-full bg-background min-h-[calc(100vh-56px)]">
      <div className="max-w-max-width-container mx-auto px-margin-desktop py-4">
        <div className="flex flex-col w-full h-[calc(100vh-100px)] overflow-hidden font-sans text-on-surface">
          <div className="flex flex-1 overflow-hidden h-full gap-4">
            {/* Left Parameters Sidebar */}
            <aside className="w-72 flex-shrink-0 bg-surface-container-lowest border border-border-subtle/80 rounded-lg flex flex-col h-full overflow-y-auto shadow-2xs">
              <div className="p-3.5 border-b border-border-subtle/80 flex justify-between items-center bg-surface-container-low/50">
                <h2 className="font-outfit text-sm font-bold tracking-tight text-on-surface">
                  Parameters
                </h2>
                <button
                  className="text-text-secondary hover:text-primary transition-colors p-1 rounded-md hover:bg-surface-container"
                  title="Reset Parameters"
                >
                  <span className="material-symbols-outlined text-[18px]">
                    refresh
                  </span>
                </button>
              </div>

              <div className="p-3.5 flex flex-col gap-4">
                {/* Region Select */}
                <div className="flex flex-col gap-1.5">
                  <label className="font-sans text-[11px] font-semibold text-text-secondary uppercase tracking-wider">
                    Region
                  </label>
                  <div className="relative">
                    <select className="w-full appearance-none bg-surface-container-lowest border border-border-subtle rounded-md px-3 py-1.5 pr-8 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-xs font-medium text-on-surface">
                      <option>North Indian Ocean</option>
                      <option>Arabian Sea</option>
                      <option>Bay of Bengal</option>
                    </select>
                    <span className="material-symbols-outlined absolute right-2 top-1/2 -translate-y-1/2 text-outline pointer-events-none text-[16px]">
                      expand_more
                    </span>
                  </div>
                  <div className="text-[11px] text-text-secondary font-mono">
                    Bounds: 45°E–105°E, 5°N–30°N
                  </div>
                </div>

                {/* Target Date Input */}
                <div className="flex flex-col gap-1.5">
                  <label className="font-sans text-[11px] font-semibold text-text-secondary uppercase tracking-wider">
                    Target Date
                  </label>
                  <input
                    className="w-full bg-surface-container-lowest border border-border-subtle rounded-md px-3 py-1.5 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-xs font-mono text-on-surface"
                    type="date"
                    defaultValue="2024-05-14"
                  />
                </div>

                {/* Active Variable Buttons */}
                <div className="flex flex-col gap-1.5">
                  <label className="font-sans text-[11px] font-semibold text-text-secondary uppercase tracking-wider">
                    Active Variable
                  </label>
                  <div className="grid grid-cols-2 gap-1.5">
                    <button
                      onClick={() => setActiveVar("Temp")}
                      className={`px-2 py-1.5 rounded-md text-xs font-semibold transition-all ${
                        activeVar === "Temp"
                          ? "bg-primary text-on-primary shadow-2xs"
                          : "bg-surface-container-low text-text-secondary hover:text-on-surface border border-border-subtle/60"
                      }`}
                    >
                      Temperature
                    </button>
                    <button
                      onClick={() => setActiveVar("Sal")}
                      className={`px-2 py-1.5 rounded-md text-xs font-semibold transition-all ${
                        activeVar === "Sal"
                          ? "bg-primary text-on-primary shadow-2xs"
                          : "bg-surface-container-low text-text-secondary hover:text-on-surface border border-border-subtle/60"
                      }`}
                    >
                      Salinity
                    </button>
                    <button
                      onClick={() => setActiveVar("Curr")}
                      className={`px-2 py-1.5 rounded-md text-xs font-semibold transition-all ${
                        activeVar === "Curr"
                          ? "bg-primary text-on-primary shadow-2xs"
                          : "bg-surface-container-low text-text-secondary hover:text-on-surface border border-border-subtle/60"
                      }`}
                    >
                      Currents
                    </button>
                    <button
                      onClick={() => setActiveVar("SSH")}
                      className={`px-2 py-1.5 rounded-md text-xs font-semibold transition-all ${
                        activeVar === "SSH"
                          ? "bg-primary text-on-primary shadow-2xs"
                          : "bg-surface-container-low text-text-secondary hover:text-on-surface border border-border-subtle/60"
                      }`}
                    >
                      SSH
                    </button>
                  </div>
                </div>

                {/* Depth Level Controls */}
                <div className="flex flex-col gap-2 pt-3 border-t border-border-subtle/80">
                  <div className="flex justify-between items-center">
                    <label className="font-sans text-[11px] font-semibold text-text-secondary uppercase tracking-wider">
                      Depth Level
                    </label>
                    <span className="font-mono text-xs font-semibold text-primary">
                      {depthLevel === 0 ? "0m (Surface)" : `${depthLevel * 20}m`}
                    </span>
                  </div>
                  <input
                    className="w-full accent-primary h-1.5 rounded-lg bg-surface-container cursor-pointer"
                    max="14"
                    min="0"
                    type="range"
                    value={depthLevel}
                    onChange={(e) => setDepthLevel(Number(e.target.value))}
                  />
                  <div className="flex justify-between text-[10px] text-text-secondary font-mono">
                    <span>0m</span>
                    <span>150m</span>
                    <span>500m</span>
                    <span>1000m</span>
                  </div>

                  {/* Level Quick Select */}
                  <div className="grid grid-cols-5 gap-1 mt-1">
                    {[0, 5, 10, 20, 30].map((d, i) => (
                      <button
                        key={d}
                        onClick={() => setDepthLevel(i)}
                        className={`text-[10px] py-1 rounded font-mono transition-colors ${
                          depthLevel === i
                            ? "bg-primary text-on-primary font-bold"
                            : "bg-surface-container-low text-text-secondary border border-border-subtle/60 hover:text-on-surface"
                        }`}
                      >
                        {d}m
                      </button>
                    ))}
                  </div>

                  <button
                    onClick={() => setShowAllDepths(!showAllDepths)}
                    className="text-xs text-primary font-medium text-left mt-1 hover:underline flex items-center gap-1"
                  >
                    <span>{showAllDepths ? "Hide depth levels" : "Show all 15 levels"}</span>
                    <span className="material-symbols-outlined text-[14px]">
                      {showAllDepths ? "expand_less" : "expand_more"}
                    </span>
                  </button>

                  {showAllDepths && (
                    <div className="grid grid-cols-5 gap-1 mt-1 bg-surface-container-low p-2 rounded-md border border-border-subtle/60 text-[10px] font-mono">
                      {[0, 5, 10, 20, 30, 50, 75, 100, 125, 150, 200, 300, 500, 750, 1000].map(
                        (val, idx) => (
                          <button
                            key={val}
                            onClick={() => setDepthLevel(idx)}
                            className={`py-1 rounded text-center transition-colors ${
                              depthLevel === idx
                                ? "bg-primary text-on-primary font-bold"
                                : "hover:bg-surface-container text-text-secondary"
                            }`}
                          >
                            {val}m
                          </button>
                        )
                      )}
                    </div>
                  )}
                </div>
              </div>
            </aside>

            {/* Main Center Map & Profile Area */}
            <main className="flex-1 flex flex-col relative bg-surface-container-lowest border border-border-subtle/80 rounded-lg overflow-hidden shadow-2xs">
              {/* Top Map Display */}
              <div className="flex-1 relative">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAyMRIlp8M_22XGsS-sMZGnC4FFP4FCa4aFCWyJCnyC_nrNlhuOIemDVcPqHD0vtM5k8uXmxXApru6earrUCEXCHXnTjERoEaV0F9S8EJDiJbYtU1cw4-HiNHV5oj0-NqDZgdhTraVd1EzB73oElXXRjkWvwqK4-6lCNKp6Y8cQqaMBcwiVqKmfuNsLb0SeHrMkHEsVlIfVETNCDIIukM_0TPI8oqJoLKaXLAKak8fSQrK5WczSblKR')",
                  }}
                ></div>

                {/* Map Color Legend Overlay */}
                <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm border border-border-subtle rounded-md p-2.5 shadow-sm">
                  <h4 className="font-sans text-[11px] font-semibold text-text-secondary uppercase mb-1.5">
                    Sea Surface Temperature (°C)
                  </h4>
                  <div className="w-56 h-2.5 rounded-full bg-gradient-to-r from-blue-600 via-yellow-400 to-red-600"></div>
                  <div className="flex justify-between text-[11px] font-mono mt-1 text-text-secondary">
                    <span>22.0</span>
                    <span>26.0</span>
                    <span>30.0</span>
                    <span>34.0</span>
                  </div>
                </div>

                {/* Sample Pin Indicator */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="relative w-7 h-7 flex items-center justify-center">
                    <div className="absolute inset-0 bg-primary/20 rounded-full animate-ping"></div>
                    <div className="w-3 h-3 bg-primary rounded-full border-2 border-white shadow-sm z-10"></div>
                  </div>
                </div>
              </div>

              {/* Bottom Subsurface Profile Panel */}
              <div className="h-56 border-t border-border-subtle bg-surface flex">
                <div className="w-1/3 border-r border-border-subtle/80 p-3.5 flex flex-col justify-between">
                  <div>
                    <h3 className="font-sans text-xs font-semibold text-text-secondary uppercase tracking-wider mb-2.5">
                      Subsurface Profile (Temp)
                    </h3>
                    <div className="flex items-center gap-2 mb-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-primary"></div>
                      <span className="text-xs font-medium text-on-surface">
                        AI Reconstruction
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2.5 h-2.5 border-2 border-tertiary-container rounded-full"></div>
                      <span className="text-xs font-medium text-on-surface">
                        ARGO Float Obs.
                      </span>
                    </div>
                  </div>

                  <div className="bg-surface-container-low p-2.5 rounded-md border border-border-subtle/60">
                    <h4 className="font-sans text-[10px] font-semibold text-text-secondary uppercase mb-1.5">
                      Validation Metrics
                    </h4>
                    <div className="grid grid-cols-3 gap-1">
                      <div>
                        <div className="text-[10px] text-text-secondary">RMSE</div>
                        <div className="font-mono text-xs font-bold text-error">
                          0.82°C
                        </div>
                      </div>
                      <div>
                        <div className="text-[10px] text-text-secondary">Bias</div>
                        <div className="font-mono text-xs font-bold text-primary">
                          +0.14°C
                        </div>
                      </div>
                      <div>
                        <div className="text-[10px] text-text-secondary">Corr (R)</div>
                        <div className="font-mono text-xs font-bold text-secondary">
                          0.96
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Profile SVG Graph */}
                <div className="flex-1 p-3.5 relative">
                  <svg
                    className="w-full h-full text-text-secondary"
                    preserveAspectRatio="none"
                    viewBox="0 0 500 200"
                  >
                    <g
                      className="stroke-border-subtle/40"
                      strokeDasharray="2"
                      strokeWidth="0.5"
                    >
                      <line x1="0" x2="500" y1="20" y2="20"></line>
                      <line x1="0" x2="500" y1="60" y2="60"></line>
                      <line x1="0" x2="500" y1="100" y2="100"></line>
                      <line x1="0" x2="500" y1="140" y2="140"></line>
                      <line x1="0" x2="500" y1="180" y2="180"></line>
                    </g>
                    <path
                      className="stroke-primary"
                      d="M 450,20 L 440,40 L 420,60 L 380,80 L 300,100 L 250,120 L 220,140 L 200,160 L 190,180"
                      fill="none"
                      strokeWidth="2"
                    ></path>
                    <circle
                      className="stroke-tertiary-container fill-white"
                      cx="448"
                      cy="22"
                      r="3"
                      strokeWidth="1.5"
                    ></circle>
                    <circle
                      className="stroke-tertiary-container fill-white"
                      cx="435"
                      cy="45"
                      r="3"
                      strokeWidth="1.5"
                    ></circle>
                    <circle
                      className="stroke-tertiary-container fill-white"
                      cx="425"
                      cy="58"
                      r="3"
                      strokeWidth="1.5"
                    ></circle>
                    <circle
                      className="stroke-tertiary-container fill-white"
                      cx="370"
                      cy="85"
                      r="3"
                      strokeWidth="1.5"
                    ></circle>
                    <circle
                      className="stroke-tertiary-container fill-white"
                      cx="290"
                      cy="105"
                      r="3"
                      strokeWidth="1.5"
                    ></circle>
                    <circle
                      className="stroke-tertiary-container fill-white"
                      cx="255"
                      cy="115"
                      r="3"
                      strokeWidth="1.5"
                    ></circle>
                    <circle
                      className="stroke-tertiary-container fill-white"
                      cx="215"
                      cy="145"
                      r="3"
                      strokeWidth="1.5"
                    ></circle>
                    <circle
                      className="stroke-tertiary-container fill-white"
                      cx="195"
                      cy="165"
                      r="3"
                      strokeWidth="1.5"
                    ></circle>
                  </svg>

                  <div className="absolute left-2 top-0 h-full flex flex-col justify-between py-3 text-[10px] font-mono text-text-secondary">
                    <span>0m</span>
                    <span>200m</span>
                    <span>400m</span>
                    <span>600m</span>
                    <span>800m</span>
                    <span>1000m</span>
                  </div>
                  <div className="absolute bottom-1 w-full flex justify-between px-8 text-[10px] font-mono text-text-secondary">
                    <span>5°C</span>
                    <span>15°C</span>
                    <span>25°C</span>
                    <span>35°C</span>
                  </div>
                </div>
              </div>
            </main>

            {/* Right Point Analysis Sidebar */}
            <aside className="w-64 flex-shrink-0 bg-surface-container-lowest border border-border-subtle/80 rounded-lg flex flex-col overflow-y-auto shadow-2xs">
              <div className="p-3.5 border-b border-border-subtle/80 bg-surface-container-low/50">
                <h2 className="font-outfit text-sm font-bold tracking-tight text-on-surface mb-0.5">
                  Point Analysis
                </h2>
                <div className="font-mono text-[11px] text-text-secondary flex gap-2">
                  <span>Lat: 15.24°N</span>
                  <span>Lon: 65.81°E</span>
                </div>
              </div>

              <div className="p-3.5">
                <h3 className="font-sans text-[11px] font-semibold text-text-secondary uppercase tracking-wider mb-3">
                  Surface State (0m)
                </h3>
                <div className="space-y-2">
                  <div className="flex justify-between items-center p-2 rounded-md bg-surface-container-low/60 border border-border-subtle/60">
                    <span className="text-xs font-semibold text-on-surface">SST</span>
                    <span className="font-mono text-xs font-bold text-on-surface">
                      29.4 <span className="text-[10px] text-text-secondary font-normal">°C</span>
                    </span>
                  </div>

                  <div className="flex justify-between items-center p-2 rounded-md bg-surface-container-low/60 border border-border-subtle/60">
                    <span className="text-xs font-semibold text-on-surface">SSS</span>
                    <span className="font-mono text-xs font-bold text-on-surface">
                      35.2 <span className="text-[10px] text-text-secondary font-normal">PSU</span>
                    </span>
                  </div>

                  <div className="flex justify-between items-center p-2 rounded-md bg-surface-container-low/60 border border-border-subtle/60">
                    <span className="text-xs font-semibold text-on-surface">SSH (SLA)</span>
                    <span className="font-mono text-xs font-bold text-primary">
                      +0.12 <span className="text-[10px] text-text-secondary font-normal">m</span>
                    </span>
                  </div>

                  <div className="h-px bg-border-subtle/60 my-2"></div>

                  <div className="grid grid-cols-2 gap-1.5">
                    <div className="p-2 rounded-md bg-surface-container-low/60 border border-border-subtle/60">
                      <span className="text-[10px] text-text-secondary block mb-0.5">
                        Curr U
                      </span>
                      <span className="font-mono text-xs font-bold text-on-surface">
                        0.24{" "}
                        <span className="text-[9px] text-text-secondary font-normal">
                          m/s
                        </span>
                      </span>
                    </div>

                    <div className="p-2 rounded-md bg-surface-container-low/60 border border-border-subtle/60">
                      <span className="text-[10px] text-text-secondary block mb-0.5">
                        Curr V
                      </span>
                      <span className="font-mono text-xs font-bold text-on-surface">
                        -0.15{" "}
                        <span className="text-[9px] text-text-secondary font-normal">
                          m/s
                        </span>
                      </span>
                    </div>

                    <div className="p-2 rounded-md bg-surface-container-low/60 border border-border-subtle/60">
                      <span className="text-[10px] text-text-secondary block mb-0.5">
                        Wind U
                      </span>
                      <span className="font-mono text-xs font-bold text-on-surface">
                        4.2{" "}
                        <span className="text-[9px] text-text-secondary font-normal">
                          m/s
                        </span>
                      </span>
                    </div>

                    <div className="p-2 rounded-md bg-surface-container-low/60 border border-border-subtle/60">
                      <span className="text-[10px] text-text-secondary block mb-0.5">
                        Wind V
                      </span>
                      <span className="font-mono text-xs font-bold text-on-surface">
                        1.8{" "}
                        <span className="text-[9px] text-text-secondary font-normal">
                          m/s
                        </span>
                      </span>
                    </div>
                  </div>
                </div>

                <button className="mt-4 w-full py-2 bg-white hover:bg-surface-container-low border border-border-subtle text-xs font-semibold text-primary rounded-md transition-colors shadow-2xs cursor-pointer flex items-center justify-center gap-1.5">
                  <span className="material-symbols-outlined text-[16px]">
                    download
                  </span>
                  Export Timeseries
                </button>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </main>
  );
}
