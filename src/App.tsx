/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import DiagnosticWizard from "./components/DiagnosticWizard";
import CoverageChecker from "./components/CoverageChecker";
import Reviews from "./components/Reviews";
import FAQ from "./components/FAQ";
import ContactForm from "./components/ContactForm";
import FloatingActions from "./components/FloatingActions";
import Footer from "./components/Footer";
import PolicyModals from "./components/PolicyModals";

export default function App() {
  const [policyType, setPolicyType] = useState<"privacy" | "terms" | "disclaimer" | null>(null);

  useEffect(() => {
    const handleOpenPolicy = (e: Event) => {
      const customEvent = e as CustomEvent<{ type: "privacy" | "terms" | "disclaimer" }>;
      if (customEvent.detail && customEvent.detail.type) {
        setPolicyType(customEvent.detail.type);
      }
    };

    window.addEventListener("open-policy", handleOpenPolicy);
    return () => {
      window.removeEventListener("open-policy", handleOpenPolicy);
    };
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans" dir="rtl">
      {/* Dynamic Header / Navigation */}
      <Header />

      <main className="flex-grow">
        {/* Hero Section with high-contrast background banner */}
        <Hero />

        {/* Four core services grid (Computer scan, mechanics, electrics, battery) */}
        <Services />

        {/* Smart Diagnostic Questionnaire Assistant */}
        <DiagnosticWizard />

        {/* Interactive neighborhood search & regional coverage mapping */}
        <CoverageChecker />

        {/* Interactive Callback booking form */}
        <ContactForm />

        {/* Real reviews by local Riyadh clients */}
        <Reviews />

        {/* Custom interactive collapsable FAQ accordion */}
        <FAQ />
      </main>

      {/* Floating Call & WhatsApp micro-actions widget */}
      <FloatingActions />

      {/* Detailed footer with site map, info, disclaimers */}
      <Footer />

      {/* Google Ads Compliance Modals */}
      <PolicyModals
        isOpen={policyType !== null}
        type={policyType}
        onClose={() => setPolicyType(null)}
      />
    </div>
  );
}
