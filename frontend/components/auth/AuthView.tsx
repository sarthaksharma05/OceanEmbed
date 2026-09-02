"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function AuthView() {
  const [showSplash, setShowSplash] = useState(true);
  const [timeLeft, setTimeLeft] = useState(32);
  const [activeTab, setActiveTab] = useState<"signin" | "signup">("signin");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedMessage, setSubmittedMessage] = useState<string | null>(null);

  // Form State
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [institution, setInstitution] = useState("");
  const [role, setRole] = useState("Oceanographer / Researcher");

  // 32-Second Splash Timer Effect
  useEffect(() => {
    if (!showSplash) return;

    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          setShowSplash(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [showSplash]);

  const handleSkipSplash = () => {
    setShowSplash(false);
  };

  const handleDemoFill = () => {
    setEmail("dr.sharma@nio.res.in");
    setPassword("OceanEmbed2026!");
    setFullName("Dr. Sarthak Sharma");
    setInstitution("National Institute of Oceanography");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmittedMessage(null);

    setTimeout(() => {
      setIsSubmitting(false);
      if (activeTab === "signin") {
        setSubmittedMessage("Welcome back! Redirecting to Ocean Explorer...");
      } else {
        setSubmittedMessage("Account successfully created! Verification link sent to email.");
      }
    }, 1200);
  };

  // Calculate percentage for progress bar
  const progressPercent = Math.round(((32 - timeLeft) / 32) * 100);

  // Subtitle messages corresponding to timer stages
  const getStageSubtitle = () => {
    if (timeLeft > 24) return "Initializing OceanEmbed Neural Core...";
    if (timeLeft > 16) return "Loading CMEMS Satellite Surface Data...";
    if (timeLeft > 8) return "Syncing ARGO In-Situ Profiling Arrays...";
    return "Finalizing 3D Subsurface Temperature Field Synthesis...";
  };

  return (
    <div className="w-full min-h-[calc(100vh-56px)] bg-background flex items-center justify-center relative overflow-hidden font-sans text-on-surface p-4">
      {/* Background Decorative Depth Lines */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-10 left-10 w-96 h-96 rounded-full bg-primary/20 blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-secondary/20 blur-3xl"></div>
      </div>

      {/* STAGE 1: 32-SECOND LOGO FLASH / SPLASH SCREEN */}
      {showSplash ? (
        <div className="relative z-10 max-w-md w-full bg-surface-container-lowest border border-border-subtle/90 rounded-2xl p-8 shadow-md flex flex-col items-center text-center animate-in fade-in zoom-in-95 duration-500">
          {/* Logo & Pulsing Rings */}
          <div className="relative w-32 h-32 flex items-center justify-center mb-6">
            {/* Outer Animated Pulse Rings */}
            <div className="absolute inset-0 rounded-full border-2 border-primary/30 animate-ping opacity-40"></div>
            <div className="absolute inset-2 rounded-full border border-secondary/40 animate-pulse"></div>
            <div className="absolute inset-4 rounded-full border border-border-subtle"></div>

            {/* Central OceanEmbed Logo Icon */}
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-primary to-primary-container flex items-center justify-center shadow-lg relative z-10">
              <span className="material-symbols-outlined text-white text-[42px]">
                waves
              </span>
            </div>
          </div>

          {/* Logo Title */}
          <h1 className="font-outfit text-2xl font-bold tracking-tight text-on-surface mb-1">
            OceanEmbed
          </h1>
          <p className="font-sans text-xs text-text-secondary mb-6 font-medium">
            Deep Synthesis of Marine State Variables
          </p>

          {/* Progress Bar & Timer */}
          <div className="w-full bg-surface-container-low rounded-xl p-4 border border-border-subtle/60 mb-6 flex flex-col gap-3">
            <div className="flex justify-between items-center text-xs font-mono">
              <span className="text-primary font-bold">{progressPercent}% Loaded</span>
              <span className="text-text-secondary font-semibold">{timeLeft}s remaining</span>
            </div>

            {/* Animated Progress Track */}
            <div className="w-full h-2 bg-surface-container rounded-full overflow-hidden relative">
              <div
                className="h-full bg-gradient-to-r from-primary via-secondary to-primary rounded-full transition-all duration-1000 ease-linear"
                style={{ width: `${progressPercent}%` }}
              ></div>
            </div>

            <p className="font-sans text-[11px] text-text-secondary italic transition-all h-4">
              {getStageSubtitle()}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="w-full flex items-center gap-3">
            <button
              onClick={handleSkipSplash}
              className="w-full py-2.5 px-4 rounded-lg bg-primary text-on-primary font-sans text-xs font-semibold hover:bg-primary-container transition-all shadow-2xs cursor-pointer flex items-center justify-center gap-2 group"
            >
              <span>Skip Intro & Continue</span>
              <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </button>
          </div>
        </div>
      ) : (
        /* STAGE 2: LOGIN / SIGNUP AUTHENTICATION CARD */
        <div className="relative z-10 max-w-4xl w-full bg-surface-container-lowest border border-border-subtle/90 rounded-2xl shadow-lg overflow-hidden grid grid-cols-1 md:grid-cols-12 animate-in fade-in zoom-in-95 duration-400">
          {/* Left Side: Branding & Scientific Info Banner (Desktop) */}
          <div className="md:col-span-5 bg-gradient-to-br from-primary/10 via-surface-container-low to-secondary/10 p-6 lg:p-8 flex flex-col justify-between border-b md:border-b-0 md:border-r border-border-subtle/80">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 rounded-lg bg-primary text-white flex items-center justify-center shadow-xs">
                  <span className="material-symbols-outlined text-[20px]">
                    waves
                  </span>
                </div>
                <span className="font-outfit text-lg font-bold text-on-surface">
                  OceanEmbed
                </span>
              </div>

              <h2 className="font-outfit text-xl font-bold text-on-surface mb-2 leading-snug">
                Subsurface Ocean AI Platform
              </h2>
              <p className="font-sans text-xs text-text-secondary leading-relaxed mb-6">
                Access high-resolution 3D temperature reconstructions, ARGO float profiles, and spatial thermal anomaly models.
              </p>

              {/* Scientific Stats Badges */}
              <div className="flex flex-col gap-2.5">
                <div className="flex items-center gap-2.5 p-2.5 rounded-lg bg-white/80 border border-border-subtle/60 shadow-2xs">
                  <span className="material-symbols-outlined text-primary text-[18px]">
                    check_circle
                  </span>
                  <div>
                    <p className="font-mono text-xs font-bold text-on-surface">0.42 °C RMSE</p>
                    <p className="font-sans text-[10px] text-text-secondary">Validated vs ARGO Floats</p>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 p-2.5 rounded-lg bg-white/80 border border-border-subtle/60 shadow-2xs">
                  <span className="material-symbols-outlined text-secondary text-[18px]">
                    grid_view
                  </span>
                  <div>
                    <p className="font-mono text-xs font-bold text-on-surface">14,230 Grid Points</p>
                    <p className="font-sans text-[10px] text-text-secondary">Bay of Bengal & Arabian Sea</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Link back to Explorer */}
            <div className="mt-8 pt-4 border-t border-border-subtle/60 flex items-center justify-between text-xs">
              <Link
                href="/"
                className="font-sans text-xs text-primary font-semibold hover:underline flex items-center gap-1"
              >
                <span className="material-symbols-outlined text-[16px]">
                  arrow_back
                </span>
                Back to Explorer
              </Link>

              <button
                onClick={() => setShowSplash(true)}
                className="text-[11px] text-text-secondary hover:text-on-surface font-mono"
              >
                Replay Intro (32s)
              </button>
            </div>
          </div>

          {/* Right Side: Auth Form */}
          <div className="md:col-span-7 p-6 lg:p-8 flex flex-col justify-center">
            {/* Form Header Tabs */}
            <div className="flex bg-surface-container-low border border-border-subtle/80 rounded-lg p-1 mb-6">
              <button
                onClick={() => {
                  setActiveTab("signin");
                  setSubmittedMessage(null);
                }}
                className={`flex-1 py-1.5 rounded-md font-sans text-xs font-semibold transition-all cursor-pointer ${
                  activeTab === "signin"
                    ? "bg-white text-primary shadow-2xs"
                    : "text-text-secondary hover:text-on-surface"
                }`}
              >
                Sign In
              </button>
              <button
                onClick={() => {
                  setActiveTab("signup");
                  setSubmittedMessage(null);
                }}
                className={`flex-1 py-1.5 rounded-md font-sans text-xs font-semibold transition-all cursor-pointer ${
                  activeTab === "signup"
                    ? "bg-white text-primary shadow-2xs"
                    : "text-text-secondary hover:text-on-surface"
                }`}
              >
                Create Account
              </button>
            </div>

            {/* Alert / Notification Message */}
            {submittedMessage && (
              <div className="mb-4 p-3 rounded-lg bg-primary/10 border border-primary/30 text-primary text-xs font-sans font-medium flex items-start gap-2 animate-in fade-in">
                <span className="material-symbols-outlined text-[18px]">
                  info
                </span>
                <span>{submittedMessage}</span>
              </div>
            )}

            {/* Auth Form */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              {activeTab === "signup" && (
                <>
                  <div>
                    <label className="block font-sans text-xs font-semibold text-text-secondary mb-1">
                      Full Name
                    </label>
                    <input
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g. Dr. Sarthak Sharma"
                      className="w-full bg-surface-container-lowest border border-border-subtle rounded-md px-3 py-2 text-xs text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                      type="text"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block font-sans text-xs font-semibold text-text-secondary mb-1">
                        Institution / Org
                      </label>
                      <input
                        required
                        value={institution}
                        onChange={(e) => setInstitution(e.target.value)}
                        placeholder="e.g. NIO / INCOIS"
                        className="w-full bg-surface-container-lowest border border-border-subtle rounded-md px-3 py-2 text-xs text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                        type="text"
                      />
                    </div>

                    <div>
                      <label className="block font-sans text-xs font-semibold text-text-secondary mb-1">
                        Primary Role
                      </label>
                      <select
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                        className="w-full bg-surface-container-lowest border border-border-subtle rounded-md px-3 py-2 text-xs text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                      >
                        <option>Oceanographer / Researcher</option>
                        <option>Data Scientist</option>
                        <option>University Student</option>
                        <option>Policy Maker / Environmentalist</option>
                      </select>
                    </div>
                  </div>
                </>
              )}

              <div>
                <label className="block font-sans text-xs font-semibold text-text-secondary mb-1">
                  Research Email / Institution ID
                </label>
                <input
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@institution.org"
                  className="w-full bg-surface-container-lowest border border-border-subtle rounded-md px-3 py-2 text-xs text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                  type="email"
                />
              </div>

              <div>
                <div className="flex justify-between items-center mb-1">
                  <label className="font-sans text-xs font-semibold text-text-secondary">
                    Password
                  </label>
                  {activeTab === "signin" && (
                    <button
                      type="button"
                      className="font-sans text-[11px] text-primary hover:underline"
                    >
                      Forgot password?
                    </button>
                  )}
                </div>
                <input
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••••••"
                  className="w-full bg-surface-container-lowest border border-border-subtle rounded-md px-3 py-2 text-xs text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                  type="password"
                />
              </div>

              {/* Remember Me Checkbox */}
              <div className="flex items-center justify-between pt-1">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    defaultChecked
                    className="w-3.5 h-3.5 text-primary accent-primary rounded"
                  />
                  <span className="font-sans text-xs text-text-secondary">
                    Keep workstation session active
                  </span>
                </label>

                <button
                  type="button"
                  onClick={handleDemoFill}
                  className="font-mono text-[10px] text-primary bg-primary/10 px-2 py-0.5 rounded hover:bg-primary/20 transition-colors"
                >
                  ⚡ Auto-fill Demo
                </button>
              </div>

              {/* Submit Action Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-2.5 px-4 rounded-lg bg-primary text-on-primary font-sans text-xs font-semibold hover:bg-primary-container transition-all shadow-2xs cursor-pointer flex items-center justify-center gap-2 mt-2 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                    <span>Authenticating...</span>
                  </>
                ) : (
                  <>
                    <span>{activeTab === "signin" ? "Sign In to Platform" : "Create Research Account"}</span>
                    <span className="material-symbols-outlined text-[16px]">
                      arrow_forward
                    </span>
                  </>
                )}
              </button>
            </form>

            {/* Divider */}
            <div className="my-5 flex items-center gap-3">
              <div className="flex-1 h-[1px] bg-border-subtle/80"></div>
              <span className="font-mono text-[10px] text-text-secondary uppercase">Or</span>
              <div className="flex-1 h-[1px] bg-border-subtle/80"></div>
            </div>

            {/* Single Sign On (SSO) Button */}
            <button
              type="button"
              onClick={() => {
                setSubmittedMessage("Redirecting to CMEMS / INCOIS Federation SSO...");
              }}
              className="w-full py-2 px-4 rounded-lg bg-white border border-border-subtle text-text-secondary hover:text-on-surface font-sans text-xs font-semibold transition-colors shadow-2xs cursor-pointer flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined text-primary text-[18px]">
                account_balance
              </span>
              <span>Sign in with Institution SSO (CMEMS / INCOIS)</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
