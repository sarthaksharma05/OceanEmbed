"use client";

export default function RegionalAnalysis() {
  return (
    <main className="w-full bg-background min-h-[calc(100vh-64px)]">
      <div className="max-w-max-width-container mx-auto px-margin-desktop py-grid-16">
        <div className="flex flex-col w-full font-body-md text-on-background relative overflow-hidden pb-16">
          {/* Header Section */}
          <div className="w-full relative z-10 pt-8 pb-12">
            <div className="max-w-max-width-container mx-auto px-margin-desktop flex flex-col md:flex-row justify-between items-start md:items-end gap-grid-16">
              <div>
                <p className="font-label-sm text-label-sm text-primary uppercase tracking-widest mb-2 flex items-center gap-2">
                  <span className="w-8 h-[1px] bg-primary"></span> Regional Analysis Module
                </p>
                <h1 className="font-display-lg text-display-lg text-on-surface tracking-tight mb-2">
                  Reconstructed Subsurface Temperature
                </h1>
                <p className="font-body-md text-body-md text-text-secondary max-w-2xl">
                  High-resolution spatial analysis of reconstructed subsurface thermal structures utilizing integrated satellite and ARGO profiling data.
                </p>
              </div>
              <div className="flex items-center gap-4 bg-surface-container rounded-lg p-2 shadow-sm">
                <button className="px-4 py-2 rounded bg-primary text-on-primary font-label-sm text-label-sm transition-transform hover:scale-105 active:scale-95 shadow-md">
                  Export Data (NetCDF)
                </button>
                <button className="px-4 py-2 rounded bg-surface text-primary font-label-sm text-label-sm transition-colors hover:bg-surface-variant flex items-center gap-2">
                  <span className="material-symbols-outlined text-[18px]">
                    settings
                  </span>{" "}
                  Settings
                </button>
              </div>
            </div>
          </div>
          {/* Main Content Area */}
          <div className="max-w-max-width-container mx-auto px-margin-desktop w-full grid grid-cols-12 gap-gutter relative z-10">
            {/* Sidebar Controls */}
            <aside className="col-span-12 lg:col-span-3 flex flex-col gap-grid-16">
              {/* Region Selection */}
              <div className="bg-surface-container-lowest rounded-xl p-grid-16 shadow-sm flex flex-col gap-4">
                <h3 className="font-headline-md text-headline-md text-on-surface flex items-center gap-2 border-b border-outline-variant pb-2">
                  <span className="material-symbols-outlined text-primary">
                    explore
                  </span>{" "}
                  Focus Region
                </h3>
                <div className="flex flex-col gap-2">
                  <label className="flex items-center gap-3 p-3 rounded-lg bg-surface-container cursor-pointer transition-colors hover:bg-surface-container-high group">
                    <input
                      defaultChecked
                      className="w-4 h-4 text-primary accent-primary"
                      name="region"
                      type="radio"
                    />
                    <span className="font-body-md text-body-md text-on-surface group-hover:text-primary transition-colors">
                      Bay of Bengal (BoB)
                    </span>
                  </label>
                  <label className="flex items-center gap-3 p-3 rounded-lg bg-surface cursor-pointer transition-colors hover:bg-surface-container-high group border border-outline-variant">
                    <input
                      className="w-4 h-4 text-primary accent-primary"
                      name="region"
                      type="radio"
                    />
                    <span className="font-body-md text-body-md text-text-secondary group-hover:text-primary transition-colors">
                      Arabian Sea (AS)
                    </span>
                  </label>
                </div>
              </div>
              {/* Temporal Controls */}
              <div className="bg-surface-container-lowest rounded-xl p-grid-16 shadow-sm flex flex-col gap-4">
                <h3 className="font-headline-md text-headline-md text-on-surface flex items-center gap-2 border-b border-outline-variant pb-2">
                  <span className="material-symbols-outlined text-primary">
                    calendar_month
                  </span>{" "}
                  Temporal
                </h3>
                <div className="flex flex-col gap-3">
                  <label className="font-label-sm text-label-sm text-text-secondary">
                    Analysis Date
                  </label>
                  <div className="relative">
                    <input
                      className="w-full bg-surface-container rounded-lg px-4 py-3 font-data-tabular text-data-tabular text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                      type="date"
                      defaultValue="2023-11-15"
                    />
                    <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-outline pointer-events-none">
                      calendar_today
                    </span>
                  </div>
                  <div className="flex items-center justify-between mt-2">
                    <button
                      className="p-2 rounded hover:bg-surface-container text-text-secondary transition-colors"
                      title="Previous Day"
                    >
                      <span className="material-symbols-outlined">
                        chevron_left
                      </span>
                    </button>
                    <span className="font-label-sm text-label-sm text-primary uppercase tracking-wider">
                      Daily Mean
                    </span>
                    <button
                      className="p-2 rounded hover:bg-surface-container text-text-secondary transition-colors"
                      title="Next Day"
                    >
                      <span className="material-symbols-outlined">
                        chevron_right
                      </span>
                    </button>
                  </div>
                </div>
              </div>
              {/* Vertical Profile (Depth) */}
              <div className="bg-surface-container-lowest rounded-xl p-grid-16 shadow-sm flex flex-col gap-4 flex-grow">
                <h3 className="font-headline-md text-headline-md text-on-surface flex items-center gap-2 border-b border-outline-variant pb-2">
                  <span className="material-symbols-outlined text-primary">
                    water_drop
                  </span>{" "}
                  Depth Level
                </h3>
                <div className="relative flex-grow flex flex-col">
                  <div className="flex justify-between items-center mb-4">
                    <span className="font-data-tabular text-data-tabular text-primary font-semibold bg-primary-container/10 px-3 py-1 rounded-full">
                      Selected: 75m
                    </span>
                    <span className="font-label-sm text-label-sm text-text-secondary">
                      Level 6/15
                    </span>
                  </div>
                  {/* Custom Depth Slider Visualization */}
                  <div className="relative flex-grow min-h-[200px] flex gap-4 ml-2">
                    {/* Depth Scale Axis */}
                    <div className="w-8 flex flex-col justify-between items-end pb-4 font-data-tabular text-label-sm text-text-secondary relative">
                      <span className="absolute top-0 right-2">0m</span>
                      <span className="absolute top-[25%] right-2">50m</span>
                      <span className="absolute top-[50%] right-2">150m</span>
                      <span className="absolute top-[75%] right-2">300m</span>
                      <span className="absolute bottom-0 right-2">700m</span>
                      {/* Tick marks */}
                      <div className="absolute right-0 top-0 w-1 h-[1px] bg-outline"></div>
                      <div className="absolute right-0 top-[25%] w-1 h-[1px] bg-outline"></div>
                      <div className="absolute right-0 top-[50%] w-1 h-[1px] bg-outline"></div>
                      <div className="absolute right-0 top-[75%] w-1 h-[1px] bg-outline"></div>
                      <div className="absolute right-0 bottom-0 w-1 h-[1px] bg-outline"></div>
                    </div>
                    {/* Slider Track */}
                    <div className="w-12 bg-surface-container-high rounded-full relative overflow-hidden group cursor-pointer shadow-inner">
                      {/* Depth Gradient Background */}
                      <div className="absolute inset-0 bg-gradient-to-b from-[#84d4d3]/20 via-[#0066cc]/20 to-[#001b3e]/40"></div>
                      {/* Active Depth Indicator */}
                      <div className="absolute w-full h-8 bg-primary/20 top-[35%] -translate-y-1/2 border-y-2 border-primary group-hover:bg-primary/30 transition-colors shadow-sm z-10 flex items-center justify-center">
                        <div className="w-6 h-1 bg-primary rounded-full"></div>
                      </div>
                      {/* Simulated standard levels */}
                      <div className="absolute inset-x-0 top-[5%] h-[1px] bg-outline-variant/50"></div>
                      <div className="absolute inset-x-0 top-[15%] h-[1px] bg-outline-variant/50"></div>
                      <div className="absolute inset-x-0 top-[25%] h-[1px] bg-outline-variant/50"></div>
                      <div className="absolute inset-x-0 top-[35%] h-[1px] bg-primary"></div>
                      <div className="absolute inset-x-0 top-[45%] h-[1px] bg-outline-variant/50"></div>
                      <div className="absolute inset-x-0 top-[60%] h-[1px] bg-outline-variant/50"></div>
                      <div className="absolute inset-x-0 top-[80%] h-[1px] bg-outline-variant/50"></div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Analysis Parameters */}
              <div className="bg-surface-container-lowest rounded-xl p-grid-16 shadow-sm flex flex-col gap-4">
                <h3 className="font-headline-md text-headline-md text-on-surface flex items-center gap-2 border-b border-outline-variant pb-2">
                  <span className="material-symbols-outlined text-primary">
                    tune
                  </span>{" "}
                  Parameters
                </h3>
                <div className="flex items-center justify-between">
                  <span className="font-label-sm text-label-sm text-on-surface">
                    View Mode
                  </span>
                  <div className="flex bg-surface-container rounded-lg p-1">
                    <button className="px-3 py-1 bg-surface shadow-sm rounded-md font-label-sm text-label-sm text-primary transition-all">
                      Absolute (T)
                    </button>
                    <button className="px-3 py-1 text-text-secondary hover:text-on-surface rounded-md font-label-sm text-label-sm transition-all">
                      Anomaly (T')
                    </button>
                  </div>
                </div>
                <div className="flex items-center justify-between mt-2">
                  <span className="font-label-sm text-label-sm text-on-surface">
                    Interpolation
                  </span>
                  <select className="bg-surface-container text-on-surface font-label-sm text-label-sm rounded-md px-2 py-1 outline-none border border-transparent focus:border-primary">
                    <option>Bicubic Spline</option>
                    <option>Nearest Neighbor</option>
                    <option>Kriging</option>
                  </select>
                </div>
              </div>
            </aside>
            {/* Main Visualization Area */}
            <section className="col-span-12 lg:col-span-9 flex flex-col gap-grid-16">
              {/* Spatial Heatmap Panel */}
              <div className="bg-surface-container-lowest rounded-xl shadow-md overflow-hidden flex flex-col relative h-[600px]">
                {/* Overlay Header */}
                <div className="absolute top-0 left-0 right-0 p-4 bg-gradient-to-b from-surface-container-lowest/90 to-transparent z-10 flex justify-between items-start pointer-events-none">
                  <div className="pointer-events-auto bg-surface/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-sm border border-outline-variant/50">
                    <h2 className="font-headline-md text-headline-md text-on-surface m-0">
                      Bay of Bengal - 75m Reconstructed Temperature
                    </h2>
                    <p className="font-data-tabular text-data-tabular text-text-secondary m-0 mt-1">
                      Lat: 5°N to 22°N | Lon: 78°E to 98°E
                    </p>
                  </div>
                  <div className="pointer-events-auto flex gap-2">
                    <button
                      className="w-10 h-10 rounded-full bg-surface/90 backdrop-blur-sm shadow-sm flex items-center justify-center text-text-secondary hover:text-primary transition-colors border border-outline-variant/50"
                      title="Toggle Gridlines"
                    >
                      <span className="material-symbols-outlined">
                        grid_on
                      </span>
                    </button>
                    <button
                      className="w-10 h-10 rounded-full bg-surface/90 backdrop-blur-sm shadow-sm flex items-center justify-center text-text-secondary hover:text-primary transition-colors border border-outline-variant/50"
                      title="Download Image"
                    >
                      <span className="material-symbols-outlined">
                        download
                      </span>
                    </button>
                  </div>
                </div>
                {/* Main Heatmap Visualization */}
                <div className="relative w-full h-full bg-surface-container flex items-center justify-center overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center opacity-90 mix-blend-multiply"
                    data-alt="A highly detailed scientific spatial heatmap visualization of the Bay of Bengal ocean region."
                    style={{
                      backgroundImage:
                        "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDB2B82SgmGItnQsH6YrHXGOk31UZn94o53oju9bm7DZpU8k28DKEEgOns0HR08JF-OSte0clhlnrgK4DO7h3iFubphgBvAm1V3_8FL9J-ffpgHLMDCjaxM1ZSBxzvs38tOZbz1tS15pBI576DJxGhxxkRQOgO-eAumyq6zVLs3HcJ57kCL9pI-v718jYKx4njz63fS4FEkbLxHBKWh_jHLyBddLvR2OEwrKo8AmDUHurfS85j-wb2K')",
                    }}
                  ></div>
                  <div className="absolute top-[40%] left-[55%] pointer-events-none group">
                    <div className="w-4 h-4 rounded-full border-2 border-surface bg-primary shadow-[0_0_10px_rgba(0,78,159,0.5)] animate-pulse"></div>
                    <div className="absolute top-6 left-1/2 -translate-x-1/2 bg-surface-container-lowest/95 backdrop-blur shadow-lg border border-outline-variant px-3 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                      <p className="font-data-tabular text-data-tabular text-on-surface font-semibold">
                        28.4 °C
                      </p>
                      <p className="font-label-sm text-label-sm text-text-secondary">
                        14.2°N, 88.5°E
                      </p>
                    </div>
                  </div>
                </div>
                {/* Legend & Colorbar */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-surface/95 backdrop-blur shadow-md px-6 py-3 rounded-xl border border-outline-variant/50 flex flex-col gap-2 w-3/4 max-w-md">
                  <div className="flex justify-between font-data-tabular text-label-sm text-text-secondary px-1">
                    <span>22.0°C</span>
                    <span className="font-semibold text-on-surface uppercase tracking-wider text-[10px]">
                      Temperature (°C)
                    </span>
                    <span>31.0°C</span>
                  </div>
                  <div className="h-3 w-full rounded-full bg-gradient-to-r from-[#001b3e] via-[#0066cc] via-[#84d4d3] via-[#e7e8ee] via-[#ffb692] to-[#883700] relative shadow-inner">
                    <div className="absolute top-1/2 -translate-y-1/2 left-[70%] w-1 h-5 bg-surface border border-outline shadow-sm rounded-sm"></div>
                  </div>
                </div>
              </div>
              {/* Regional Statistics Bento Grid */}
              <div className="grid grid-cols-2 md:grid-cols-6 gap-grid-16">
                {/* Stat Card: Mean Temp */}
                <div className="col-span-2 bg-surface-container-lowest rounded-xl p-grid-16 shadow-sm border border-transparent hover:border-outline-variant transition-colors group">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 rounded-full bg-primary-container/10 flex items-center justify-center">
                      <span className="material-symbols-outlined text-primary text-[18px]">
                        thermostat
                      </span>
                    </div>
                    <span className="font-label-sm text-label-sm text-text-secondary uppercase tracking-wider">
                      Spatial Mean
                    </span>
                  </div>
                  <div className="flex items-end gap-2">
                    <span className="font-display-lg text-display-lg text-on-surface">
                      26.8
                    </span>
                    <span className="font-body-md text-body-md text-text-secondary mb-1">
                      °C
                    </span>
                  </div>
                  <div className="mt-4 h-1 w-full bg-surface-container rounded-full overflow-hidden">
                    <div className="h-full bg-primary w-[65%]"></div>
                  </div>
                </div>
                {/* Stat Card: Min/Max */}
                <div className="col-span-2 bg-surface-container-lowest rounded-xl p-grid-16 shadow-sm border border-transparent hover:border-outline-variant transition-colors">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 rounded-full bg-secondary-container/30 flex items-center justify-center">
                      <span className="material-symbols-outlined text-secondary text-[18px]">
                        swap_vert
                      </span>
                    </div>
                    <span className="font-label-sm text-label-sm text-text-secondary uppercase tracking-wider">
                      Range (Min/Max)
                    </span>
                  </div>
                  <div className="flex items-center justify-between mt-2">
                    <div className="flex flex-col">
                      <span className="font-label-sm text-label-sm text-primary">
                        Min
                      </span>
                      <span className="font-data-tabular text-headline-md text-on-surface">
                        23.4°
                      </span>
                    </div>
                    <div className="h-8 w-[1px] bg-outline-variant"></div>
                    <div className="flex flex-col items-end">
                      <span className="font-label-sm text-label-sm text-tertiary">
                        Max
                      </span>
                      <span className="font-data-tabular text-headline-md text-on-surface">
                        30.1°
                      </span>
                    </div>
                  </div>
                </div>
                {/* Stat Card: RMSE */}
                <div className="col-span-2 bg-surface-container-lowest rounded-xl p-grid-16 shadow-sm border border-transparent hover:border-outline-variant transition-colors relative overflow-hidden">
                  <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-tertiary-fixed-dim/20 rounded-full blur-xl pointer-events-none"></div>
                  <div className="flex items-center gap-2 mb-2 relative z-10">
                    <div className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center">
                      <span className="material-symbols-outlined text-outline text-[18px]">
                        analytics
                      </span>
                    </div>
                    <span className="font-label-sm text-label-sm text-text-secondary uppercase tracking-wider">
                      Model RMSE
                    </span>
                  </div>
                  <div className="flex items-end gap-2 relative z-10">
                    <span className="font-display-lg text-display-lg text-on-surface">
                      0.42
                    </span>
                    <span className="font-body-md text-body-md text-text-secondary mb-1">
                      °C
                    </span>
                  </div>
                  <p className="font-label-sm text-label-sm text-secondary mt-2 flex items-center gap-1 relative z-10">
                    <span className="material-symbols-outlined text-[14px]">
                      trending_down
                    </span>{" "}
                    -0.05 vs last week
                  </p>
                </div>
                {/* Stat Card: Coverage & Correlation */}
                <div className="col-span-2 md:col-span-6 bg-surface-container-lowest rounded-xl p-grid-16 shadow-sm flex flex-col md:flex-row items-center justify-between gap-grid-16">
                  <div className="flex-1 w-full flex items-center gap-4">
                    <div className="relative w-16 h-16">
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
                          strokeWidth="3"
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
                          strokeWidth="3"
                        ></circle>
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="font-data-tabular text-label-sm text-on-surface font-semibold">
                          88%
                        </span>
                      </div>
                    </div>
                    <div>
                      <p className="font-label-sm text-label-sm text-text-secondary uppercase tracking-wider mb-1">
                        Spatial Coverage
                      </p>
                      <p className="font-body-md text-body-md text-on-surface">
                        Valid grid points: 14,230 / 16,150
                      </p>
                    </div>
                  </div>
                  <div className="w-full md:w-[1px] h-[1px] md:h-12 bg-outline-variant"></div>
                  <div className="flex-1 w-full flex flex-col gap-2">
                    <div className="flex justify-between items-center">
                      <span className="font-label-sm text-label-sm text-text-secondary uppercase tracking-wider">
                        Correlation (ARGO)
                      </span>
                      <span className="font-data-tabular text-body-md text-primary font-semibold">
                        r = 0.94
                      </span>
                    </div>
                    <div className="h-6 w-full flex items-end gap-[2px] opacity-80">
                      <div className="w-full bg-primary/20 h-[40%] rounded-t-sm"></div>
                      <div className="w-full bg-primary/30 h-[50%] rounded-t-sm"></div>
                      <div className="w-full bg-primary/40 h-[45%] rounded-t-sm"></div>
                      <div className="w-full bg-primary/50 h-[60%] rounded-t-sm"></div>
                      <div className="w-full bg-primary/60 h-[75%] rounded-t-sm"></div>
                      <div className="w-full bg-primary/70 h-[85%] rounded-t-sm"></div>
                      <div className="w-full bg-primary/80 h-[80%] rounded-t-sm"></div>
                      <div className="w-full bg-primary/90 h-[95%] rounded-t-sm"></div>
                      <div className="w-full bg-primary h-[100%] rounded-t-sm"></div>
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
