/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

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

export default function App() {
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
    </div>
  );
}
