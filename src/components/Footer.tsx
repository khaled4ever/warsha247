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

        {/* Policies and Compliance column */}
        <div>
          <h4 className="text-sm font-extrabold text-white mb-4 border-r-2 border-orange-500 pr-2">السياسات والامتثال</h4>
          <ul className="space-y-2.5 text-xs sm:text-sm">
            <li>
              <a
                href="#privacy"
                onClick={(e) => {
                  e.preventDefault();
                  window.dispatchEvent(new CustomEvent("open-policy", { detail: { type: "privacy" } }));
                }}
                className="text-slate-400 hover:text-orange-500 transition-colors text-right block w-full cursor-pointer"
              >
                سياسة الخصوصية
              </a>
            </li>
            <li>
              <a
                href="#terms"
                onClick={(e) => {
                  e.preventDefault();
                  window.dispatchEvent(new CustomEvent("open-policy", { detail: { type: "terms" } }));
                }}
                className="text-slate-400 hover:text-orange-500 transition-colors text-right block w-full cursor-pointer"
              >
                الشروط والأحكام
              </a>
            </li>
            <li>
              <a
                href="#disclaimer"
                onClick={(e) => {
                  e.preventDefault();
                  window.dispatchEvent(new CustomEvent("open-policy", { detail: { type: "disclaimer" } }));
                }}
                className="text-slate-400 hover:text-orange-500 transition-colors text-right block w-full cursor-pointer"
              >
                إخلاء المسؤولية القانونية
              </a>
            </li>
            <li className="pt-2 text-[11px] text-slate-500 leading-relaxed border-t border-slate-800">
              موقعنا متوافق بالكامل مع سياسات إعلانات جوجل لحماية المستهلك وبيانات المستخدم الشخصية لعام 2026.
            </li>
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

      {/* Google Ads Compliance & Independent Disclaimer Banner */}
      <div className="max-w-7xl mx-auto border-t border-slate-850 mt-12 pt-8 text-[11px] sm:text-xs text-slate-500 space-y-4">
        <div className="bg-slate-950/40 border border-slate-850/50 p-4 rounded-2xl space-y-2 leading-relaxed">
          <p className="font-bold text-slate-400">توضيح وإخلاء مسؤولية رسمي (جوجل إعلانات):</p>
          <p>
            موقع "ورشة الرياض المتنقلة" هو موقع إلكتروني تعريفي ترويجي مستقل يقدم خدمات فحص وصيانة وإصلاح السيارات المتنقلة في مدينة الرياض، المملكة العربية السعودية. ونود التوضيح بشكل صريح وحاسم بأننا <strong>لسنا وكلاء معتمدين رسمياً</strong>، ولسنا تابعين أو ممثلين أو مرتبطين بأي شكل من الأشكال بأي من الشركات المصنعة للسيارات (مثل تويوتا، نيسان، فورد، مرسيدس، بي إم دبليو، هيونداي أو غيرهم) أو وكلائهم المحليين في المملكة. جميع العلامات والشعارات وأسماء الموديلات المستخدمة في هذا الموقع تظهر فقط كدليل إرشادي لتوضيح مدى توافق خدماتنا الفنية وصلاحيتنا لإصلاح هذه الأنواع من السيارات.
          </p>
          <p>
            <strong>بيان أمن وسرية البيانات:</strong> عند تعبئة نموذج حجز الخدمة أو طلب الاتصال، نؤكد لكم بأن بياناتكم الشخصية (الاسم، الهاتف، الحي، ونوع الخدمة) تُعامل بسرية تامة وأمان كامل. يتم استخدامها حصرياً بواسطة الفنيين المختصين التابعين لنا للتنسيق معكم وتأمين وصول الخدمة إلى موقعكم بالرياض، ونلتزم التزاماً كاملاً بعدم مشاركتها أو بيعها لأي جهة خارجية أو استخدامها في أغراض ترويجية غير مصرح بها من قبلكم.
          </p>
        </div>

        {/* Copyright & Quick Links Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-2 border-t border-slate-850/30">
          <p className="text-center md:text-right text-slate-450">
            © 2026 ورشة الرياض المتنقلة لصيانة وإصلاح السيارات. جميع الحقوق محفوظة.
          </p>
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 font-medium text-slate-400">
            <a
              href="#privacy"
              onClick={(e) => {
                e.preventDefault();
                window.dispatchEvent(new CustomEvent("open-policy", { detail: { type: "privacy" } }));
              }}
              className="hover:text-orange-500 transition-colors cursor-pointer"
            >
              سياسة الخصوصية
            </a>
            <span className="text-slate-700">•</span>
            <a
              href="#terms"
              onClick={(e) => {
                e.preventDefault();
                window.dispatchEvent(new CustomEvent("open-policy", { detail: { type: "terms" } }));
              }}
              className="hover:text-orange-500 transition-colors cursor-pointer"
            >
              الشروط والأحكام
            </a>
            <span className="text-slate-700">•</span>
            <a
              href="#disclaimer"
              onClick={(e) => {
                e.preventDefault();
                window.dispatchEvent(new CustomEvent("open-policy", { detail: { type: "disclaimer" } }));
              }}
              className="hover:text-orange-500 transition-colors cursor-pointer"
            >
              إخلاء المسؤولية
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
