"use client";

import { useState } from "react";

export default function ModelPerformance() {
  const [activeMetric, setActiveMetric] = useState<"RMSE" | "Bias" | "Corr">("RMSE");

  return (
    <main className="w-full bg-background min-h-[calc(100vh-56px)]">
      <div className="max-w-max-width-container mx-auto px-margin-desktop py-6">
        <div className="flex flex-col w-full font-sans text-on-surface gap-5">
          {/* Top: Evaluation Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Card 1: Overall RMSE */}
            <div className="bg-surface-container-lowest border border-border-subtle/80 p-3.5 rounded-lg flex flex-col gap-2 shadow-2xs">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-[18px]">
                  thermostat
                </span>
                <span className="font-sans text-[11px] font-semibold text-text-secondary uppercase tracking-wider">
                  Overall RMSE
                </span>
              </div>
              <div className="flex items-baseline gap-1.5 mt-0.5">
                <span className="font-outfit text-2xl font-bold text-on-surface">0.42</span>
                <span className="font-mono text-xs text-text-secondary">°C</span>
              </div>
              <div className="w-full h-1 bg-surface-container rounded-full overflow-hidden mt-1">
                <div className="h-full bg-primary rounded-full w-[42%]"></div>
              </div>
              <span className="font-mono text-[10px] text-text-secondary text-right">
                Target &lt; 0.50 °C
              </span>
            </div>

            {/* Card 2: Mean Bias */}
            <div className="bg-surface-container-lowest border border-border-subtle/80 p-3.5 rounded-lg flex flex-col gap-2 shadow-2xs">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-tertiary text-[18px]">
                  balance
                </span>
                <span className="font-sans text-[11px] font-semibold text-text-secondary uppercase tracking-wider">
                  Mean Bias
                </span>
              </div>
              <div className="flex items-baseline gap-1.5 mt-0.5">
                <span className="font-outfit text-2xl font-bold text-on-surface">+0.03</span>
                <span className="font-mono text-xs text-text-secondary">°C</span>
              </div>
              <div className="w-full h-1 bg-surface-container rounded-full overflow-hidden mt-1 relative">
                <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-border-subtle z-10 -translate-x-1/2"></div>
                <div className="h-full bg-tertiary rounded-full w-[10%] absolute left-1/2"></div>
              </div>
              <span className="font-mono text-[10px] text-text-secondary text-right">
                Slight Warm Bias
              </span>
            </div>

            {/* Card 3: Correlation (R) */}
            <div className="bg-surface-container-lowest border border-border-subtle/80 p-3.5 rounded-lg flex flex-col gap-2 shadow-2xs">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary text-[18px]">
                  timeline
                </span>
                <span className="font-sans text-[11px] font-semibold text-text-secondary uppercase tracking-wider">
                  Correlation (R)
                </span>
              </div>
              <div className="flex items-baseline gap-1.5 mt-0.5">
                <span className="font-outfit text-2xl font-bold text-on-surface">0.96</span>
              </div>
              <div className="w-full h-1 bg-surface-container rounded-full overflow-hidden mt-1">
                <div className="h-full bg-secondary rounded-full w-[96%]"></div>
              </div>
              <span className="font-mono text-[10px] text-text-secondary text-right">
                Target &gt; 0.90
              </span>
            </div>
          </div>

          {/* Main Comparison & Chart Section */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            {/* Left: Model Leaderboard Table */}
            <div className="col-span-1 md:col-span-5 bg-surface-container-lowest border border-border-subtle/80 rounded-lg shadow-2xs overflow-hidden flex flex-col">
              <div className="p-3.5 border-b border-border-subtle/80 flex justify-between items-center bg-surface-container-low/50">
                <h2 className="font-outfit text-sm font-bold text-on-surface">
                  Temperature Models
                </h2>
                <span className="material-symbols-outlined text-text-secondary text-[18px]">
                  sort
                </span>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-surface-container-low/80 border-b border-border-subtle/80">
                      <th className="py-2.5 px-3.5 font-sans text-[11px] text-text-secondary font-semibold uppercase tracking-wider">
                        Model Name
                      </th>
                      <th className="py-2.5 px-3.5 font-sans text-[11px] text-text-secondary font-semibold uppercase tracking-wider text-right">
                        RMSE
                      </th>
                      <th className="py-2.5 px-3.5 font-sans text-[11px] text-text-secondary font-semibold uppercase tracking-wider text-right">
                        Bias
                      </th>
                      <th className="py-2.5 px-3.5 font-sans text-[11px] text-text-secondary font-semibold uppercase tracking-wider text-right">
                        R
                      </th>
                    </tr>
                  </thead>
                  <tbody className="font-mono text-xs text-on-surface">
                    <tr className="border-b border-border-subtle/60 bg-primary/5 font-semibold text-primary">
                      <td className="py-2.5 px-3.5 font-sans font-bold">
                        OceanEmbed-V2
                      </td>
                      <td className="py-2.5 px-3.5 text-right">0.42</td>
                      <td className="py-2.5 px-3.5 text-right">+0.03</td>
                      <td className="py-2.5 px-3.5 text-right">0.96</td>
                    </tr>
                    <tr className="border-b border-border-subtle/60 hover:bg-surface-container-low/50 transition-colors">
                      <td className="py-2.5 px-3.5 text-text-secondary font-sans font-medium">
                        GLORYS12V1
                      </td>
                      <td className="py-2.5 px-3.5 text-right text-text-secondary">
                        0.58
                      </td>
                      <td className="py-2.5 px-3.5 text-right text-text-secondary">
                        -0.12
                      </td>
                      <td className="py-2.5 px-3.5 text-right text-text-secondary">
                        0.91
                      </td>
                    </tr>
                    <tr className="border-b border-border-subtle/60 hover:bg-surface-container-low/50 transition-colors">
                      <td className="py-2.5 px-3.5 text-text-secondary font-sans font-medium">
                        ISAS-20
                      </td>
                      <td className="py-2.5 px-3.5 text-right text-text-secondary">
                        0.48
                      </td>
                      <td className="py-2.5 px-3.5 text-right text-text-secondary">
                        -0.05
                      </td>
                      <td className="py-2.5 px-3.5 text-right text-text-secondary">
                        0.94
                      </td>
                    </tr>
                    <tr className="border-b border-border-subtle/60 hover:bg-surface-container-low/50 transition-colors">
                      <td className="py-2.5 px-3.5 text-text-secondary font-sans font-medium">
                        CORA5.2
                      </td>
                      <td className="py-2.5 px-3.5 text-right text-text-secondary">
                        0.51
                      </td>
                      <td className="py-2.5 px-3.5 text-right text-text-secondary">
                        +0.08
                      </td>
                      <td className="py-2.5 px-3.5 text-right text-text-secondary">
                        0.93
                      </td>
                    </tr>
                    <tr className="hover:bg-surface-container-low/50 transition-colors">
                      <td className="py-2.5 px-3.5 text-text-secondary font-sans font-medium">
                        Ensemble-Mean
                      </td>
                      <td className="py-2.5 px-3.5 text-right text-text-secondary">
                        0.45
                      </td>
                      <td className="py-2.5 px-3.5 text-right text-text-secondary">
                        -0.02
                      </td>
                      <td className="py-2.5 px-3.5 text-right text-text-secondary">
                        0.95
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Right: Depth Performance SVG Chart */}
            <div className="col-span-1 md:col-span-7 bg-surface-container-lowest border border-border-subtle/80 rounded-lg shadow-2xs flex flex-col min-h-[380px]">
              <div className="p-3.5 border-b border-border-subtle/80 flex flex-wrap justify-between items-center gap-2 bg-surface-container-low/50">
                <h2 className="font-outfit text-sm font-bold text-on-surface">
                  Depth Performance (0–1000m)
                </h2>
                <div className="flex items-center bg-surface-container-low rounded-md p-0.5 border border-border-subtle/60">
                  <button
                    onClick={() => setActiveMetric("RMSE")}
                    className={`px-2.5 py-1 text-xs font-semibold rounded transition-all ${
                      activeMetric === "RMSE"
                        ? "bg-white text-primary shadow-2xs"
                        : "text-text-secondary hover:text-on-surface"
                    }`}
                  >
                    RMSE
                  </button>
                  <button
                    onClick={() => setActiveMetric("Bias")}
                    className={`px-2.5 py-1 text-xs font-semibold rounded transition-all ${
                      activeMetric === "Bias"
                        ? "bg-white text-primary shadow-2xs"
                        : "text-text-secondary hover:text-on-surface"
                    }`}
                  >
                    Bias
                  </button>
                  <button
                    onClick={() => setActiveMetric("Corr")}
                    className={`px-2.5 py-1 text-xs font-semibold rounded transition-all ${
                      activeMetric === "Corr"
                        ? "bg-white text-primary shadow-2xs"
                        : "text-text-secondary hover:text-on-surface"
                    }`}
                  >
                    Correlation
                  </button>
                </div>
              </div>

              <div className="flex-1 p-4 flex items-center justify-center relative overflow-hidden bg-white">
                <div className="absolute left-14 top-6 bottom-8 right-6 border-l border-b border-border-subtle/60 flex flex-col justify-between">
                  {/* Y Axis Labels (Depth) */}
                  <div className="absolute -left-10 top-0 font-mono text-[10px] text-text-secondary -translate-y-1/2">
                    0m
                  </div>
                  <div className="absolute -left-10 top-1/4 font-mono text-[10px] text-text-secondary -translate-y-1/2">
                    250m
                  </div>
                  <div className="absolute -left-10 top-2/4 font-mono text-[10px] text-text-secondary -translate-y-1/2">
                    500m
                  </div>
                  <div className="absolute -left-10 top-3/4 font-mono text-[10px] text-text-secondary -translate-y-1/2">
                    750m
                  </div>
                  <div className="absolute -left-12 bottom-0 font-mono text-[10px] text-text-secondary translate-y-1/2">
                    1000m
                  </div>

                  {/* X Axis Labels */}
                  <div className="absolute left-0 -bottom-5 font-mono text-[10px] text-text-secondary -translate-x-1/2">
                    0.0
                  </div>
                  <div className="absolute left-1/4 -bottom-5 font-mono text-[10px] text-text-secondary -translate-x-1/2">
                    0.25
                  </div>
                  <div className="absolute left-2/4 -bottom-5 font-mono text-[10px] text-text-secondary -translate-x-1/2">
                    0.50
                  </div>
                  <div className="absolute left-3/4 -bottom-5 font-mono text-[10px] text-text-secondary -translate-x-1/2">
                    0.75
                  </div>
                  <div className="absolute right-0 -bottom-5 font-mono text-[10px] text-text-secondary translate-x-1/2">
                    1.0
                  </div>

                  {/* Grid Lines */}
                  <div className="absolute w-full h-px bg-border-subtle/30 top-1/4"></div>
                  <div className="absolute w-full h-px bg-border-subtle/30 top-2/4"></div>
                  <div className="absolute w-full h-px bg-border-subtle/30 top-3/4"></div>
                  <div className="absolute h-full w-px bg-border-subtle/30 left-1/4"></div>
                  <div className="absolute h-full w-px bg-border-subtle/30 left-2/4"></div>
                  <div className="absolute h-full w-px bg-border-subtle/30 left-3/4"></div>

                  {/* SVG Curves */}
                  <svg
                    className="absolute inset-0 w-full h-full overflow-visible"
                    preserveAspectRatio="none"
                    viewBox="0 0 100 100"
                  >
                    {/* OceanEmbed Curve */}
                    <path
                      d="M 60 0 C 65 10, 45 20, 30 40 S 25 80, 20 100"
                      fill="none"
                      stroke="#004e9f"
                      strokeWidth="2"
                      vectorEffect="non-scaling-stroke"
                    ></path>
                    {/* GLORYS Curve */}
                    <path
                      d="M 80 0 C 85 15, 60 25, 45 50 S 40 85, 35 100"
                      fill="none"
                      stroke="#727784"
                      strokeDasharray="4 4"
                      strokeWidth="1.5"
                      vectorEffect="non-scaling-stroke"
                    ></path>
                  </svg>
                </div>
              </div>

              <div className="p-2 bg-surface-container-low/50 border-t border-border-subtle/80 flex justify-center gap-6 text-xs">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-primary"></span>
                  <span className="font-sans font-medium text-text-secondary">
                    OceanEmbed
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full border border-outline border-dashed"></span>
                  <span className="font-sans font-medium text-text-secondary">
                    GLORYS12V1
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom: Validation Methodology Pipeline */}
          <div className="bg-surface-container-lowest border border-border-subtle/80 rounded-lg shadow-2xs p-4">
            <h2 className="font-outfit text-sm font-bold text-on-surface mb-3 border-b border-border-subtle/60 pb-2">
              Validation Methodology
            </h2>
            <div className="flex flex-col md:flex-row items-center justify-between gap-3">
              {/* Step 1 */}
              <div className="flex-1 flex flex-col items-center text-center p-3 bg-surface-container-low/40 rounded-md border border-border-subtle/60 w-full">
                <div className="w-9 h-9 bg-primary/10 rounded-full flex items-center justify-center mb-2 border border-primary/20">
                  <span className="material-symbols-outlined text-primary text-[18px]">
                    satellite_alt
                  </span>
                </div>
                <h3 className="font-sans text-xs font-semibold text-on-surface">
                  Satellite Inputs
                </h3>
                <p className="font-mono text-[10px] text-text-secondary mt-0.5">
                  SST, SSS, SLA, Wind
                </p>
              </div>

              <div className="hidden md:flex flex-col items-center text-border-subtle">
                <span className="material-symbols-outlined text-[18px]">
                  arrow_forward
                </span>
              </div>

              {/* Step 2 */}
              <div className="flex-1 flex flex-col items-center text-center p-3 bg-surface-container-low/40 rounded-md border border-border-subtle/60 w-full">
                <div className="w-9 h-9 bg-secondary/10 rounded-full flex items-center justify-center mb-2 border border-secondary/20">
                  <span className="material-symbols-outlined text-secondary text-[18px]">
                    memory
                  </span>
                </div>
                <h3 className="font-sans text-xs font-semibold text-on-surface">
                  AI Reconstruction
                </h3>
                <p className="font-mono text-[10px] text-text-secondary mt-0.5">
                  Spatial-Temporal CNN
                </p>
              </div>

              <div className="hidden md:flex flex-col items-center text-border-subtle">
                <span className="material-symbols-outlined text-[18px]">
                  arrow_forward
                </span>
              </div>

              {/* Step 3 */}
              <div className="flex-1 flex flex-col items-center text-center p-3 bg-surface-container-low/40 rounded-md border border-border-subtle/60 w-full">
                <div className="w-9 h-9 bg-tertiary/10 rounded-full flex items-center justify-center mb-2 border border-tertiary/20">
                  <span className="material-symbols-outlined text-tertiary text-[18px]">
                    anchor
                  </span>
                </div>
                <h3 className="font-sans text-xs font-semibold text-on-surface">
                  ARGO Comparison
                </h3>
                <p className="font-mono text-[10px] text-text-secondary mt-0.5">
                  In-situ Profiling Floats
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
