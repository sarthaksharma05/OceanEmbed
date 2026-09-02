"use client";

export default function ModelPerformance() {
  return (
    <main className="w-full bg-background min-h-[calc(100vh-64px)]">
      <div className="max-w-max-width-container mx-auto px-margin-desktop py-grid-16">
        <div className="flex flex-col w-full">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
            {/* Top: Evaluation Summary */}
            <div className="col-span-1 md:col-span-12 flex flex-col md:flex-row gap-gutter">
              {/* Overall RMSE */}
              <div className="flex-1 bg-surface-container-lowest border border-border-subtle p-grid-16 rounded-xl flex flex-col gap-grid-8 shadow-sm">
                <div className="flex items-center gap-grid-8">
                  <span className="material-symbols-outlined text-primary text-[20px]">
                    thermostat
                  </span>
                  <span className="font-label-sm text-text-secondary uppercase tracking-widest">
                    Overall RMSE
                  </span>
                </div>
                <div className="flex items-baseline gap-grid-8">
                  <span className="font-display-lg text-on-surface">0.42</span>
                  <span className="font-data-tabular text-text-secondary">°C</span>
                </div>
                <div className="w-full h-1 bg-surface-container rounded-full overflow-hidden mt-2">
                  <div className="h-full bg-primary rounded-full w-[42%]"></div>
                </div>
                <span className="font-label-sm text-text-secondary mt-1 text-right">
                  Target &lt; 0.50 °C
                </span>
              </div>
              {/* Bias */}
              <div className="flex-1 bg-surface-container-lowest border border-border-subtle p-grid-16 rounded-xl flex flex-col gap-grid-8 shadow-sm">
                <div className="flex items-center gap-grid-8">
                  <span className="material-symbols-outlined text-tertiary-container text-[20px]">
                    balance
                  </span>
                  <span className="font-label-sm text-text-secondary uppercase tracking-widest">
                    Mean Bias
                  </span>
                </div>
                <div className="flex items-baseline gap-grid-8">
                  <span className="font-display-lg text-on-surface">+0.03</span>
                  <span className="font-data-tabular text-text-secondary">°C</span>
                </div>
                <div className="w-full h-1 bg-surface-container rounded-full overflow-hidden mt-2 relative">
                  <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-border-subtle z-10 -translate-x-1/2"></div>
                  <div className="h-full bg-tertiary-container rounded-full w-[10%] absolute left-1/2"></div>
                </div>
                <span className="font-label-sm text-text-secondary mt-1 text-right">
                  Slight Warm Bias
                </span>
              </div>
              {/* Correlation */}
              <div className="flex-1 bg-surface-container-lowest border border-border-subtle p-grid-16 rounded-xl flex flex-col gap-grid-8 shadow-sm">
                <div className="flex items-center gap-grid-8">
                  <span className="material-symbols-outlined text-secondary text-[20px]">
                    timeline
                  </span>
                  <span className="font-label-sm text-text-secondary uppercase tracking-widest">
                    Correlation (R)
                  </span>
                </div>
                <div className="flex items-baseline gap-grid-8">
                  <span className="font-display-lg text-on-surface">0.96</span>
                  <span className="font-data-tabular text-text-secondary"></span>
                </div>
                <div className="w-full h-1 bg-surface-container rounded-full overflow-hidden mt-2">
                  <div className="h-full bg-secondary rounded-full w-[96%]"></div>
                </div>
                <span className="font-label-sm text-text-secondary mt-1 text-right">
                  Target &gt; 0.90
                </span>
              </div>
            </div>
            {/* Center Left: Model Comparison Table */}
            <div className="col-span-1 md:col-span-5 bg-surface-container-lowest border border-border-subtle rounded-xl shadow-sm overflow-hidden flex flex-col h-full">
              <div className="p-grid-16 border-b border-border-subtle flex justify-between items-center bg-surface-container-low">
                <h2 className="font-headline-md text-on-surface">
                  Temperature Models
                </h2>
                <span className="material-symbols-outlined text-text-secondary text-[20px]">
                  sort
                </span>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-surface-container-low border-b border-border-subtle">
                      <th className="py-3 px-grid-16 font-label-sm text-text-secondary font-semibold uppercase tracking-wider">
                        Model Name
                      </th>
                      <th className="py-3 px-grid-16 font-label-sm text-text-secondary font-semibold uppercase tracking-wider text-right">
                        RMSE
                      </th>
                      <th className="py-3 px-grid-16 font-label-sm text-text-secondary font-semibold uppercase tracking-wider text-right">
                        Bias
                      </th>
                      <th className="py-3 px-grid-16 font-label-sm text-text-secondary font-semibold uppercase tracking-wider text-right">
                        R
                      </th>
                    </tr>
                  </thead>
                  <tbody className="font-data-tabular text-on-surface">
                    <tr className="border-b border-border-subtle hover:bg-surface-container-lowest transition-colors bg-primary/5">
                      <td className="py-3 px-grid-16 font-medium text-primary">
                        OceanEmbed-V2
                      </td>
                      <td className="py-3 px-grid-16 text-right">0.42</td>
                      <td className="py-3 px-grid-16 text-right">+0.03</td>
                      <td className="py-3 px-grid-16 text-right">0.96</td>
                    </tr>
                    <tr className="border-b border-border-subtle hover:bg-surface-container-low transition-colors">
                      <td className="py-3 px-grid-16 text-text-secondary">
                        GLORYS12V1
                      </td>
                      <td className="py-3 px-grid-16 text-right text-text-secondary">
                        0.58
                      </td>
                      <td className="py-3 px-grid-16 text-right text-text-secondary">
                        -0.12
                      </td>
                      <td className="py-3 px-grid-16 text-right text-text-secondary">
                        0.91
                      </td>
                    </tr>
                    <tr className="border-b border-border-subtle hover:bg-surface-container-low transition-colors">
                      <td className="py-3 px-grid-16 text-text-secondary">
                        ISAS-20
                      </td>
                      <td className="py-3 px-grid-16 text-right text-text-secondary">
                        0.48
                      </td>
                      <td className="py-3 px-grid-16 text-right text-text-secondary">
                        -0.05
                      </td>
                      <td className="py-3 px-grid-16 text-right text-text-secondary">
                        0.94
                      </td>
                    </tr>
                    <tr className="border-b border-border-subtle hover:bg-surface-container-low transition-colors">
                      <td className="py-3 px-grid-16 text-text-secondary">
                        CORA5.2
                      </td>
                      <td className="py-3 px-grid-16 text-right text-text-secondary">
                        0.51
                      </td>
                      <td className="py-3 px-grid-16 text-right text-text-secondary">
                        +0.08
                      </td>
                      <td className="py-3 px-grid-16 text-right text-text-secondary">
                        0.93
                      </td>
                    </tr>
                    <tr className="hover:bg-surface-container-low transition-colors">
                      <td className="py-3 px-grid-16 text-text-secondary">
                        Ensemble-Mean
                      </td>
                      <td className="py-3 px-grid-16 text-right text-text-secondary">
                        0.45
                      </td>
                      <td className="py-3 px-grid-16 text-right text-text-secondary">
                        -0.02
                      </td>
                      <td className="py-3 px-grid-16 text-right text-text-secondary">
                        0.95
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            {/* Center Right: Depth Performance Chart */}
            <div className="col-span-1 md:col-span-7 bg-surface-container-lowest border border-border-subtle rounded-xl shadow-sm flex flex-col h-full min-h-[400px]">
              <div className="p-grid-16 border-b border-border-subtle flex flex-wrap justify-between items-center gap-grid-8 bg-surface-container-low">
                <h2 className="font-headline-md text-on-surface">
                  Depth Performance (0-1000m)
                </h2>
                <div className="flex items-center bg-surface-container rounded-lg p-1 border border-border-subtle">
                  <button className="px-3 py-1 text-label-sm font-label-sm bg-surface-container-lowest text-primary shadow-sm rounded-md transition-all">
                    RMSE
                  </button>
                  <button className="px-3 py-1 text-label-sm font-label-sm text-text-secondary hover:text-on-surface rounded-md transition-all">
                    Bias
                  </button>
                  <button className="px-3 py-1 text-label-sm font-label-sm text-text-secondary hover:text-on-surface rounded-md transition-all">
                    Correlation
                  </button>
                </div>
              </div>
              <div className="flex-1 p-grid-16 flex items-center justify-center relative bg-surface-bright overflow-hidden">
                <div className="absolute left-16 top-8 bottom-8 right-8 border-l border-b border-border-subtle flex flex-col justify-between">
                  {/* Y Axis Labels (Depth) */}
                  <div className="absolute -left-12 top-0 font-data-tabular text-label-sm text-text-secondary translate-y-[-50%]">
                    0m
                  </div>
                  <div className="absolute -left-12 top-1/4 font-data-tabular text-label-sm text-text-secondary translate-y-[-50%]">
                    250m
                  </div>
                  <div className="absolute -left-12 top-2/4 font-data-tabular text-label-sm text-text-secondary translate-y-[-50%]">
                    500m
                  </div>
                  <div className="absolute -left-12 top-3/4 font-data-tabular text-label-sm text-text-secondary translate-y-[-50%]">
                    750m
                  </div>
                  <div className="absolute -left-14 bottom-0 font-data-tabular text-label-sm text-text-secondary translate-y-[50%]">
                    1000m
                  </div>
                  {/* X Axis Labels (RMSE) */}
                  <div className="absolute left-0 -bottom-6 font-data-tabular text-label-sm text-text-secondary translate-x-[-50%]">
                    0.0
                  </div>
                  <div className="absolute left-1/4 -bottom-6 font-data-tabular text-label-sm text-text-secondary translate-x-[-50%]">
                    0.25
                  </div>
                  <div className="absolute left-2/4 -bottom-6 font-data-tabular text-label-sm text-text-secondary translate-x-[-50%]">
                    0.50
                  </div>
                  <div className="absolute left-3/4 -bottom-6 font-data-tabular text-label-sm text-text-secondary translate-x-[-50%]">
                    0.75
                  </div>
                  <div className="absolute right-0 -bottom-6 font-data-tabular text-label-sm text-text-secondary translate-x-[50%]">
                    1.0
                  </div>
                  {/* Grid Lines */}
                  <div className="absolute w-full h-px bg-border-subtle/30 top-1/4"></div>
                  <div className="absolute w-full h-px bg-border-subtle/30 top-2/4"></div>
                  <div className="absolute w-full h-px bg-border-subtle/30 top-3/4"></div>
                  <div className="absolute h-full w-px bg-border-subtle/30 left-1/4"></div>
                  <div className="absolute h-full w-px bg-border-subtle/30 left-2/4"></div>
                  <div className="absolute h-full w-px bg-border-subtle/30 left-3/4"></div>
                  {/* Data Path (SVG) */}
                  <svg
                    className="absolute inset-0 w-full h-full overflow-visible"
                    preserveAspectRatio="none"
                    viewBox="0 0 100 100"
                  >
                    {/* OceanEmbed (Primary) */}
                    <path
                      d="M 60 0 C 65 10, 45 20, 30 40 S 25 80, 20 100"
                      fill="none"
                      stroke="#0066cc"
                      strokeWidth="2"
                      vectorEffect="non-scaling-stroke"
                    ></path>
                    {/* GLORYS (Secondary) */}
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
              <div className="p-grid-8 bg-surface-container-low border-t border-border-subtle flex justify-center gap-grid-16">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-primary-container"></span>
                  <span className="font-label-sm text-text-secondary">
                    OceanEmbed
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full border border-outline border-dashed"></span>
                  <span className="font-label-sm text-text-secondary">
                    GLORYS12V1
                  </span>
                </div>
              </div>
            </div>
            {/* Bottom: Validation Methodology */}
            <div className="col-span-1 md:col-span-12 bg-surface-container-lowest border border-border-subtle rounded-xl shadow-sm p-grid-16 mt-grid-8">
              <h2 className="font-headline-md text-on-surface mb-grid-16 border-b border-border-subtle pb-grid-8">
                Validation Methodology
              </h2>
              <div className="flex flex-col md:flex-row items-center justify-between gap-grid-16">
                {/* Step 1 */}
                <div className="flex-1 flex flex-col items-center text-center p-grid-16 bg-surface-container-low rounded-lg border border-border-subtle w-full">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-grid-8 border border-primary/20">
                    <span className="material-symbols-outlined text-primary">
                      satellite_alt
                    </span>
                  </div>
                  <h3 className="font-body-md font-semibold text-on-surface">
                    Satellite Inputs
                  </h3>
                  <p className="font-label-sm text-text-secondary mt-1">
                    SST, SSS, SLA, Wind
                  </p>
                </div>
                {/* Connector 1 */}
                <div className="hidden md:flex flex-col items-center text-border-subtle">
                  <span className="material-symbols-outlined">
                    arrow_forward
                  </span>
                </div>
                <div className="md:hidden flex flex-col items-center text-border-subtle">
                  <span className="material-symbols-outlined">
                    arrow_downward
                  </span>
                </div>
                {/* Step 2 */}
                <div className="flex-1 flex flex-col items-center text-center p-grid-16 bg-surface-container-low rounded-lg border border-border-subtle w-full">
                  <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mb-grid-8 border border-secondary/20">
                    <span className="material-symbols-outlined text-secondary">
                      memory
                    </span>
                  </div>
                  <h3 className="font-body-md font-semibold text-on-surface">
                    AI Reconstruction
                  </h3>
                  <p className="font-label-sm text-text-secondary mt-1">
                    Spatial-Temporal CNN
                  </p>
                </div>
                {/* Connector 2 */}
                <div className="hidden md:flex flex-col items-center text-border-subtle">
                  <span className="material-symbols-outlined">
                    arrow_forward
                  </span>
                </div>
                <div className="md:hidden flex flex-col items-center text-border-subtle">
                  <span className="material-symbols-outlined">
                    arrow_downward
                  </span>
                </div>
                {/* Step 3 */}
                <div className="flex-1 flex flex-col items-center text-center p-grid-16 bg-surface-container-low rounded-lg border border-border-subtle w-full">
                  <div className="w-12 h-12 bg-tertiary-container/10 rounded-full flex items-center justify-center mb-grid-8 border border-tertiary-container/20">
                    <span className="material-symbols-outlined text-tertiary-container">
                      anchor
                    </span>
                  </div>
                  <h3 className="font-body-md font-semibold text-on-surface">
                    ARGO Comparison
                  </h3>
                  <p className="font-label-sm text-text-secondary mt-1">
                    In-situ Profiling Floats
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
