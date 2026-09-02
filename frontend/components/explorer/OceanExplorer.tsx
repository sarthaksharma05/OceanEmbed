"use client";

export default function OceanExplorer() {
  return (
    <main className="w-full bg-background min-h-[calc(100vh-64px)]">
      <div className="max-w-max-width-container mx-auto px-margin-desktop py-grid-16">
        <div className="flex flex-col w-full h-[calc(100vh-128px)] overflow-hidden font-body-md text-on-surface">
          <div className="flex flex-1 overflow-hidden h-full">
            <aside className="w-80 flex-shrink-0 bg-surface border-r border-border-subtle flex flex-col h-full overflow-y-auto">
              <div className="p-gutter border-b border-border-subtle flex justify-between items-center bg-surface-container-low">
                <h2 className="font-headline-md tracking-tight">Parameters</h2>
                <button className="text-primary hover:text-primary-container transition-colors">
                  <span className="material-symbols-outlined text-[20px]">
                    refresh
                  </span>
                </button>
              </div>
              <div className="p-gutter flex flex-col gap-grid-16">
                <div className="flex flex-col gap-grid-8">
                  <label className="font-label-sm text-text-secondary uppercase tracking-wider">
                    Region
                  </label>
                  <div className="relative">
                    <select className="w-full appearance-none bg-surface-container-lowest border border-outline-variant rounded px-3 py-2 pr-8 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-sm">
                      <option>North Indian Ocean</option>
                      <option>Arabian Sea</option>
                      <option>Bay of Bengal</option>
                    </select>
                    <span className="material-symbols-outlined absolute right-2 top-1/2 -translate-y-1/2 text-outline pointer-events-none text-[18px]">
                      expand_more
                    </span>
                  </div>
                  <div className="text-xs text-text-secondary font-data-tabular">
                    Bounds: 45°E-105°E, 5°N-30°N
                  </div>
                </div>
                <div className="flex flex-col gap-grid-8">
                  <label className="font-label-sm text-text-secondary uppercase tracking-wider">
                    Target Date
                  </label>
                  <input
                    className="w-full bg-surface-container-lowest border border-outline-variant rounded px-3 py-2 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-sm font-data-tabular"
                    type="date"
                    defaultValue="2024-05-14"
                  />
                </div>
                <div className="flex flex-col gap-grid-8">
                  <label className="font-label-sm text-text-secondary uppercase tracking-wider">
                    Active Variable
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <button className="bg-primary text-on-primary border border-primary rounded py-1.5 text-sm font-medium transition-colors">
                      Temperature
                    </button>
                    <button className="bg-surface-container-lowest text-text-secondary border border-outline-variant hover:bg-surface-container rounded py-1.5 text-sm font-medium transition-colors">
                      Salinity
                    </button>
                    <button className="bg-surface-container-lowest text-text-secondary border border-outline-variant hover:bg-surface-container rounded py-1.5 text-sm font-medium transition-colors">
                      Currents
                    </button>
                    <button className="bg-surface-container-lowest text-text-secondary border border-outline-variant hover:bg-surface-container rounded py-1.5 text-sm font-medium transition-colors">
                      SSH
                    </button>
                  </div>
                </div>
                <div className="flex flex-col gap-grid-8 pt-4 border-t border-border-subtle">
                  <div className="flex justify-between items-center">
                    <label className="font-label-sm text-text-secondary uppercase tracking-wider">
                      Depth Level
                    </label>
                    <span className="font-data-tabular text-sm font-medium">
                      0m (Surface)
                    </span>
                  </div>
                  <input
                    className="w-full accent-primary"
                    max="14"
                    min="0"
                    type="range"
                    defaultValue="0"
                  />
                  <div className="flex justify-between text-[10px] text-text-secondary font-data-tabular">
                    <span>0m</span>
                    <span>150m</span>
                    <span>500m</span>
                    <span>1000m</span>
                  </div>
                  <div className="grid grid-cols-5 gap-1 mt-2">
                    <button className="text-[10px] py-1 bg-primary text-on-primary rounded font-data-tabular">
                      0
                    </button>
                    <button className="text-[10px] py-1 bg-surface-container-lowest border border-outline-variant rounded font-data-tabular">
                      5
                    </button>
                    <button className="text-[10px] py-1 bg-surface-container-lowest border border-outline-variant rounded font-data-tabular">
                      10
                    </button>
                    <button className="text-[10px] py-1 bg-surface-container-lowest border border-outline-variant rounded font-data-tabular">
                      20
                    </button>
                    <button className="text-[10px] py-1 bg-surface-container-lowest border border-outline-variant rounded font-data-tabular">
                      30
                    </button>
                  </div>
                  <button className="text-xs text-primary text-left mt-1 hover:underline">
                    Show all 15 levels
                  </button>
                </div>
              </div>
            </aside>
            <main className="flex-1 flex flex-col relative bg-surface-container-lowest">
              <div className="flex-1 relative">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  data-alt="Satellite map view of the North Indian Ocean, showing temperature gradients in blues and reds, with subtle overlaid grid lines and current vectors, high-tech scientific dashboard style, cool clean aesthetic."
                  data-location="North Indian Ocean"
                  style={{
                    backgroundImage:
                      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAyMRIlp8M_22XGsS-sMZGnC4FFP4FCa4aFCWyJCnyC_nrNlhuOIemDVcPqHD0vtM5k8uXmxXApru6earrUCEXCHXnTjERoEaV0F9S8EJDiJbYtU1cw4-HiNHV5oj0-NqDZgdhTraVd1EzB73oElXXRjkWvwqK4-6lCNKp6Y8cQqaMBcwiVqKmfuNsLb0SeHrMkHEsVlIfVETNCDIIukM_0TPI8oqJoLKaXLAKak8fSQrK5WczSblKR')",
                  }}
                ></div>
                <div className="absolute bottom-4 left-4 bg-surface-container-lowest/90 backdrop-blur-sm border border-outline-variant rounded p-3 shadow-md">
                  <h4 className="font-label-sm text-text-secondary uppercase mb-2">
                    Sea Surface Temperature (°C)
                  </h4>
                  <div className="w-64 h-3 rounded-full bg-gradient-to-r from-blue-600 via-yellow-400 to-red-600"></div>
                  <div className="flex justify-between text-xs font-data-tabular mt-1 text-text-secondary">
                    <span>22.0</span>
                    <span>26.0</span>
                    <span>30.0</span>
                    <span>34.0</span>
                  </div>
                </div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="relative w-8 h-8 flex items-center justify-center">
                    <div className="absolute inset-0 bg-primary/30 rounded-full animate-ping"></div>
                    <div className="w-3 h-3 bg-primary rounded-full border-2 border-white shadow-sm z-10"></div>
                  </div>
                </div>
              </div>
              <div className="h-64 border-t border-border-subtle bg-surface flex">
                <div className="w-1/3 border-r border-border-subtle p-gutter flex flex-col justify-between">
                  <div>
                    <h3 className="font-label-sm text-text-secondary uppercase tracking-wider mb-4">
                      Subsurface Profile (Temp)
                    </h3>
                    <div className="flex items-end gap-2 mb-2">
                      <div className="w-3 h-3 rounded-full bg-primary mb-1"></div>
                      <span className="text-sm font-medium">
                        AI Reconstruction
                      </span>
                    </div>
                    <div className="flex items-end gap-2">
                      <div className="w-3 h-3 border-2 border-tertiary-container rounded-full mb-1"></div>
                      <span className="text-sm font-medium">
                        ARGO Float Obs.
                      </span>
                    </div>
                  </div>
                  <div className="bg-surface-container p-3 rounded">
                    <h4 className="font-label-sm text-text-secondary uppercase mb-2">
                      Validation Metrics
                    </h4>
                    <div className="grid grid-cols-3 gap-2">
                      <div>
                        <div className="text-xs text-text-secondary">RMSE</div>
                        <div className="font-data-tabular text-sm font-semibold text-error">
                          0.82°C
                        </div>
                      </div>
                      <div>
                        <div className="text-xs text-text-secondary">Bias</div>
                        <div className="font-data-tabular text-sm font-semibold text-primary">
                          +0.14°C
                        </div>
                      </div>
                      <div>
                        <div className="text-xs text-text-secondary">
                          Corr (R)
                        </div>
                        <div className="font-data-tabular text-sm font-semibold text-secondary">
                          0.96
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex-1 p-gutter relative">
                  <svg
                    className="w-full h-full text-text-secondary"
                    preserveAspectRatio="none"
                    viewBox="0 0 500 200"
                  >
                    <g
                      className="stroke-outline-variant"
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
                      className="stroke-tertiary-container"
                      cx="448"
                      cy="22"
                      fill="none"
                      r="3"
                      strokeWidth="1.5"
                    ></circle>
                    <circle
                      className="stroke-tertiary-container"
                      cx="435"
                      cy="45"
                      fill="none"
                      r="3"
                      strokeWidth="1.5"
                    ></circle>
                    <circle
                      className="stroke-tertiary-container"
                      cx="425"
                      cy="58"
                      fill="none"
                      r="3"
                      strokeWidth="1.5"
                    ></circle>
                    <circle
                      className="stroke-tertiary-container"
                      cx="370"
                      cy="85"
                      fill="none"
                      r="3"
                      strokeWidth="1.5"
                    ></circle>
                    <circle
                      className="stroke-tertiary-container"
                      cx="290"
                      cy="105"
                      fill="none"
                      r="3"
                      strokeWidth="1.5"
                    ></circle>
                    <circle
                      className="stroke-tertiary-container"
                      cx="255"
                      cy="115"
                      fill="none"
                      r="3"
                      strokeWidth="1.5"
                    ></circle>
                    <circle
                      className="stroke-tertiary-container"
                      cx="215"
                      cy="145"
                      fill="none"
                      r="3"
                      strokeWidth="1.5"
                    ></circle>
                    <circle
                      className="stroke-tertiary-container"
                      cx="195"
                      cy="165"
                      fill="none"
                      r="3"
                      strokeWidth="1.5"
                    ></circle>
                  </svg>
                  <div className="absolute left-2 top-0 h-full flex flex-col justify-between py-4 text-[10px] font-data-tabular text-text-secondary">
                    <span>0m</span>
                    <span>200m</span>
                    <span>400m</span>
                    <span>600m</span>
                    <span>800m</span>
                    <span>1000m</span>
                  </div>
                  <div className="absolute bottom-1 w-full flex justify-between px-8 text-[10px] font-data-tabular text-text-secondary">
                    <span>5°C</span>
                    <span>15°C</span>
                    <span>25°C</span>
                    <span>35°C</span>
                  </div>
                </div>
              </div>
            </main>
            <aside className="w-72 flex-shrink-0 bg-surface border-l border-border-subtle flex flex-col overflow-y-auto">
              <div className="p-gutter border-b border-border-subtle bg-surface-container-low">
                <h2 className="font-headline-md tracking-tight mb-1">
                  Point Analysis
                </h2>
                <div className="font-data-tabular text-xs text-text-secondary flex gap-2">
                  <span>Lat: 15.24°N</span>
                  <span>Lon: 65.81°E</span>
                </div>
              </div>
              <div className="p-gutter">
                <h3 className="font-label-sm text-text-secondary uppercase tracking-wider mb-4">
                  Surface State (0m)
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-2 rounded bg-surface-container-lowest border border-outline-variant">
                    <span className="text-sm font-medium">SST</span>
                    <span className="font-data-tabular text-sm">
                      29.4 <span className="text-xs text-text-secondary">°C</span>
                    </span>
                  </div>
                  <div className="flex justify-between items-center p-2 rounded bg-surface-container-lowest border border-outline-variant">
                    <span className="text-sm font-medium">SSS</span>
                    <span className="font-data-tabular text-sm">
                      35.2 <span className="text-xs text-text-secondary">PSU</span>
                    </span>
                  </div>
                  <div className="flex justify-between items-center p-2 rounded bg-surface-container-lowest border border-outline-variant">
                    <span className="text-sm font-medium">SSH (SLA)</span>
                    <span className="font-data-tabular text-sm text-primary">
                      +0.12 <span className="text-xs text-text-secondary">m</span>
                    </span>
                  </div>
                  <div className="h-px bg-border-subtle my-2"></div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="p-2 rounded bg-surface-container-lowest border border-outline-variant">
                      <span className="text-xs text-text-secondary block mb-1">
                        Curr U
                      </span>
                      <span className="font-data-tabular text-sm">
                        0.24{" "}
                        <span className="text-[10px] text-text-secondary">
                          m/s
                        </span>
                      </span>
                    </div>
                    <div className="p-2 rounded bg-surface-container-lowest border border-outline-variant">
                      <span className="text-xs text-text-secondary block mb-1">
                        Curr V
                      </span>
                      <span className="font-data-tabular text-sm">
                        -0.15{" "}
                        <span className="text-[10px] text-text-secondary">
                          m/s
                        </span>
                      </span>
                    </div>
                    <div className="p-2 rounded bg-surface-container-lowest border border-outline-variant">
                      <span className="text-xs text-text-secondary block mb-1">
                        Wind U
                      </span>
                      <span className="font-data-tabular text-sm">
                        4.2{" "}
                        <span className="text-[10px] text-text-secondary">
                          m/s
                        </span>
                      </span>
                    </div>
                    <div className="p-2 rounded bg-surface-container-lowest border border-outline-variant">
                      <span className="text-xs text-text-secondary block mb-1">
                        Wind V
                      </span>
                      <span className="font-data-tabular text-sm">
                        1.8{" "}
                        <span className="text-[10px] text-text-secondary">
                          m/s
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
                <button className="mt-6 w-full py-2 bg-white border border-outline-variant text-sm font-medium rounded hover:bg-surface-container transition-colors shadow-sm">
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
