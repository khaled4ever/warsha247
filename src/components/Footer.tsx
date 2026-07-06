/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Car, Phone, MessageSquare, MapPin, Clock, Shield } from "lucide-react";
import { CONTACT_PHONE, WHATSAPP_PHONE } from "../data";

export default function Footer() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-slate-900 border-t border-slate-950 text-slate-400 py-16 px-4 sm:px-6 lg:px-8" dir="rtl">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* About Workshop */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-orange-500 shadow-lg shadow-orange-500/20">
              <Car className="h-5 w-5 text-white" />
            </div>
            <span className="text-lg font-bold text-white">
              الورشة <span className="text-orange-500">المتنقلة</span>
            </span>
          </div>
          <p className="text-xs sm:text-sm leading-relaxed text-slate-400">
            أفضل حل لإصلاح وصيانة السيارات في الرياض عند البيت أو على الطريق. نوفر خدمات فحص الكمبيوتر، الميكانيكا، الكهرباء، تكييف السيارة، وتغيير البطاريات على مدار الساعة بأمانة وضمان معتمد.
          </p>
          <div className="flex items-center gap-1.5 text-xs text-orange-500 bg-orange-500/5 border border-orange-500/15 py-1 px-3.5 rounded-full w-fit">
            <Shield className="h-3.5 w-3.5 shrink-0" />
            <span>كافة الخدمات مسبوقة بضمان معتمد</span>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-sm font-extrabold text-white mb-4 border-r-2 border-orange-500 pr-2">روابط سريعة</h4>
          <ul className="space-y-2 text-xs sm:text-sm">
            <li>
              <a href="#hero" onClick={(e) => handleScroll(e, "#hero")} className="hover:text-orange-500 transition-colors">الرئيسية</a>
            </li>
            <li>
              <a href="#services" onClick={(e) => handleScroll(e, "#services")} className="hover:text-orange-500 transition-colors">خدماتنا الفورية</a>
            </li>
            <li>
              <a href="#diagnostic" onClick={(e) => handleScroll(e, "#diagnostic")} className="hover:text-orange-500 transition-colors">فاحص الأعطال الذكي</a>
            </li>
            <li>
              <a href="#coverage" onClick={(e) => handleScroll(e, "#coverage")} className="hover:text-orange-500 transition-colors">مناطق التغطية بالرياض</a>
            </li>
            <li>
              <a href="#testimonials" onClick={(e) => handleScroll(e, "#testimonials")} className="hover:text-orange-500 transition-colors">آراء العملاء والتقييمات</a>
            </li>
            <li>
              <a href="#faq" onClick={(e) => handleScroll(e, "#faq")} className="hover:text-orange-500 transition-colors">الأسئلة الشائعة</a>
            </li>
          </ul>
        </div>

        {/* Services List */}
        <div>
          <h4 className="text-sm font-extrabold text-white mb-4 border-r-2 border-orange-500 pr-2">خدمات الورشة</h4>
          <ul className="space-y-2 text-xs sm:text-sm">
            <li>فحص السيارات بالكمبيوتر وكشف الأكواد</li>
            <li>إصلاح مكابح وفحمات وميكانيكا السيارات</li>
            <li>صيانة وإصلاح كهرباء وبواجي وسلف ومارش</li>
            <li>تغيير بطاريات سيارات أصلية مع الضمان</li>
            <li>تعبئة فريون تكييف السيارة وإصلاح التهريب</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="space-y-4">
          <h4 className="text-sm font-extrabold text-white mb-4 border-r-2 border-orange-500 pr-2">تواصل معنا</h4>
          <ul className="space-y-3.5 text-xs sm:text-sm">
            <li className="flex items-start gap-2.5">
              <MapPin className="h-4 w-4 text-orange-500 shrink-0 mt-0.5" />
              <span>الرياض، المملكة العربية السعودية (تغطية كاملة)</span>
            </li>
            <li className="flex items-center gap-2.5">
              <Clock className="h-4 w-4 text-orange-500 shrink-0" />
              <span>متواجدون على مدار 24 ساعة / طوال الأسبوع</span>
            </li>
            <li className="flex items-center gap-2.5">
              <Phone className="h-4 w-4 text-orange-500 shrink-0" />
              <a href={`tel:${CONTACT_PHONE}`} className="hover:text-white transition-colors font-bold text-left block" dir="ltr">
                {CONTACT_PHONE}
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <MessageSquare className="h-4 w-4 text-emerald-500 shrink-0" />
              <a
                href={`https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent("السلام عليكم، أريد الاستفسار عن خدمات الورشة المتنقلة بالرياض.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors font-bold text-left block"
                dir="ltr"
              >
                +{WHATSAPP_PHONE}
              </a>
            </li>
          </ul>
        </div>

      </div>

      {/* Copyright Bar */}
      <div className="max-w-7xl mx-auto border-t border-slate-800 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
        <p className="text-center sm:text-right">
          © 2026 ورشة الرياض المتنقلة لصيانة وإصلاح السيارات. جميع الحقوق محفوظة.
        </p>
        <p className="text-center sm:text-left text-slate-500">
          تم التصميم والتطوير بأعلى معايير الدقة والمهنية لخدمة قائدي المركبات بالرياض.
        </p>
      </div>
    </footer>
  );
}
