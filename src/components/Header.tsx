/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { Phone, MessageSquare, Car, Menu, X, Clock } from "lucide-react";
import { CONTACT_PHONE, WHATSAPP_PHONE } from "../data";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "الرئيسية", href: "#hero" },
    { name: "خدماتنا", href: "#services" },
    { name: "فاحص الأعطال", href: "#diagnostic" },
    { name: "تغطية الرياض", href: "#coverage" },
    { name: "آراء العملاء", href: "#testimonials" },
    { name: "الأسئلة الشائعة", href: "#faq" },
  ];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-800 bg-slate-900 shadow-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8" dir="rtl">
        
        {/* Brand Logo */}
        <a href="#hero" className="flex items-center gap-2 focus:outline-none">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500 shadow-lg shadow-orange-500/20">
            <Car className="h-5 w-5 text-white" />
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold tracking-tight text-white sm:text-xl">
              الورشة <span className="text-orange-500">المتنقلة</span>
            </span>
            <span className="text-[10px] text-slate-300 font-medium">صيانة سيارات متنقلة بالرياض 24/7</span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleScroll(e, link.href)}
              className="text-sm font-medium text-slate-200 transition-colors hover:text-orange-500"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href={`tel:${CONTACT_PHONE}`}
            className="flex items-center gap-2 rounded-xl bg-slate-850 border border-slate-700 px-4 py-2 text-sm font-bold text-slate-200 transition-colors hover:bg-slate-800 hover:text-white"
          >
            <Phone className="h-4 w-4 text-orange-500" />
            <span>اتصل الآن</span>
          </a>
          <a
            href={`https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent("السلام عليكم، أريد طلب خدمة الورشة المتنقلة في الرياض.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-xl bg-emerald-600 px-4 py-2 text-sm font-bold text-white shadow-md shadow-emerald-600/10 transition-colors hover:bg-emerald-500"
          >
            <MessageSquare className="h-4 w-4" />
            <span>طلب فوري</span>
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden items-center gap-2">
          <a
            href={`tel:${CONTACT_PHONE}`}
            className="flex h-9 w-9 items-center justify-center rounded-xl bg-orange-500 text-white hover:bg-orange-400"
            title="اتصل بنا"
          >
            <Phone className="h-4 w-4" />
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex items-center justify-center rounded-xl p-2 text-slate-300 hover:bg-slate-800 hover:text-white focus:outline-none"
            aria-expanded="false"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-slate-800 bg-slate-900 px-4 pt-2 pb-4 space-y-1 shadow-lg" dir="rtl">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleScroll(e, link.href)}
              className="block rounded-xl px-4 py-2.5 text-base font-medium text-slate-200 hover:bg-slate-800 hover:text-orange-500 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4 grid grid-cols-2 gap-3 border-t border-slate-800">
            <a
              href={`tel:${CONTACT_PHONE}`}
              className="flex items-center justify-center gap-2 rounded-xl bg-slate-800 border border-slate-700 py-3 text-sm font-bold text-slate-200"
            >
              <Phone className="h-4 w-4 text-orange-500" />
              <span>اتصال مباشر</span>
            </a>
            <a
              href={`https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent("السلام عليكم، أريد طلب خدمة الورشة المتنقلة.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-xl bg-emerald-600 py-3 text-sm font-bold text-white"
            >
              <MessageSquare className="h-4 w-4" />
              <span>واتساب</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
