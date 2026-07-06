/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { Cpu, Wrench, Zap, BatteryCharging, CheckCircle2, Phone, MessageSquare } from "lucide-react";
import { Service } from "../types";
import { servicesData, CONTACT_PHONE, WHATSAPP_PHONE } from "../data";

const iconMap = {
  Cpu: Cpu,
  Wrench: Wrench,
  Zap: Zap,
  BatteryCharging: BatteryCharging,
};

export default function Services() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const handleInternalBooking = (serviceId: string) => {
    const event = new CustomEvent("select-service", { detail: { serviceId } });
    window.dispatchEvent(event);
    
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="py-20 bg-slate-50 px-4 sm:px-6 lg:px-8 border-t border-slate-200/60" dir="rtl">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs sm:text-sm font-bold text-orange-500 uppercase tracking-wider">خدماتنا الاحترافية المتنقلة</h2>
          <p className="text-2xl sm:text-4xl font-extrabold text-slate-900 mt-3">
            صيانة سيارات شاملة ومتنقلة تحت سقف واحد
          </p>
          <p className="text-slate-600 mt-4 text-base">
            لا داعي لقطر سيارتك إلى الورشة. نحن نرسل أفضل الفنيين المجهزين بالكامل بأحدث الأجهزة مباشرة إليك في الرياض لإتمام الصيانة أمام عينيك وبسرعة فائقة.
          </p>
        </div>

        {/* Quick Anchor Navigation Links */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12 max-w-4xl mx-auto px-2">
          {servicesData.map((service) => {
            const IconComponent = iconMap[service.iconName];
            return (
              <a
                key={service.id}
                href={`#${service.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  const el = document.getElementById(service.id);
                  if (el) {
                    el.scrollIntoView({ behavior: "smooth", block: "start" });
                    window.history.pushState(null, "", `#${service.id}`);
                  }
                }}
                className="inline-flex items-center gap-2 rounded-2xl bg-white hover:bg-orange-50 border border-slate-200 hover:border-orange-500/30 px-3.5 py-2.5 text-xs sm:text-sm font-bold text-slate-700 hover:text-orange-600 transition-all duration-200 shadow-sm hover:shadow active:scale-95 cursor-pointer"
              >
                <IconComponent className="h-4 w-4 text-orange-500" />
                <span>{service.title.split(" ")[0] + " " + (service.title.split(" ")[1] || "")}</span>
                <span className="text-slate-350 text-[10px] font-normal font-mono">#</span>
              </a>
            );
          })}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => {
            const IconComponent = iconMap[service.iconName];
            return (
              <div
                key={service.id}
                id={service.id}
                className="group relative flex flex-col justify-between rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 hover:border-orange-500/30 hover:shadow-xl transition-all duration-300 shadow-sm scroll-mt-28"
              >
                <div>
                  {/* Icon Container and Direct Link */}
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 border border-slate-200 text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300 shadow-sm">
                      <IconComponent className="h-6 w-6" />
                    </div>
                    
                    {/* Anchor Indicator */}
                    <a
                      href={`#${service.id}`}
                      onClick={(e) => {
                        e.preventDefault();
                        const el = document.getElementById(service.id);
                        if (el) {
                          el.scrollIntoView({ behavior: "smooth", block: "start" });
                          window.history.pushState(null, "", `#${service.id}`);
                        }
                      }}
                      className="text-slate-300 hover:text-orange-500 font-mono font-bold text-sm bg-slate-50 border border-slate-100 hover:border-orange-100 px-2 py-1 rounded-lg transition-all cursor-pointer"
                      title="رابط سريع ومباشر لهذه الخدمة"
                    >
                      <span>#{service.id}</span>
                    </a>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-lg sm:text-xl font-bold text-slate-850 mt-6 group-hover:text-orange-500 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 mt-3 text-sm leading-relaxed">
                    {service.description}
                  </p>

                  {/* Feature Bullets */}
                  <ul className="mt-6 space-y-3">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2.5 text-xs text-slate-700">
                        <CheckCircle2 className="h-4 w-4 text-orange-500 mt-0.5 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom Card Area */}
                <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col gap-3">
                  <a
                    href="#contact"
                    onClick={(e) => {
                      e.preventDefault();
                      handleInternalBooking(service.id);
                    }}
                    className="w-full flex items-center justify-center gap-1.5 rounded-xl bg-orange-500 hover:bg-orange-400 py-3 text-xs font-black text-white shadow-md transition-all duration-300 active:scale-95 cursor-pointer"
                  >
                    <span>طلب حجز الخدمة فوري</span>
                  </a>
                  
                  <div className="flex gap-2.5">
                    <a
                      href={`tel:${CONTACT_PHONE}`}
                      className="flex-1 flex items-center justify-center gap-1.5 rounded-xl border border-slate-200 bg-slate-50 hover:bg-slate-100 py-2.5 text-xs font-bold text-slate-700 transition-all duration-300 active:scale-95 cursor-pointer"
                    >
                      <Phone className="h-3.5 w-3.5 shrink-0 text-orange-500" />
                      <span>اتصال فوري</span>
                    </a>
                    
                    <a
                      href={`https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(`السلام عليكم، أحتاج خدمة: [${service.title}] لسيارتي بالرياض. أرجو التواصل معي.`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-1.5 rounded-xl border border-slate-200 bg-slate-50 hover:bg-slate-100 py-2.5 text-xs font-bold text-slate-700 transition-all duration-300 active:scale-95 cursor-pointer"
                    >
                      <MessageSquare className="h-3.5 w-3.5 shrink-0 text-emerald-500" />
                      <span>واتساب</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Rapid Callout Bar */}
        <div className="mt-16 bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="text-right md:max-w-xl">
            <span className="bg-orange-500/10 text-orange-400 border border-orange-500/20 text-xs px-3 py-1 rounded-full font-bold">خدمات الطوارئ 24 ساعة</span>
            <h4 className="text-xl font-extrabold text-white mt-3">هل سيارتك معطلة تماماً على الطريق أو أمام المنزل بالرياض؟</h4>
            <p className="text-sm text-slate-400 mt-2">لا تتردد في الاتصال بنا فوراً، سنحدد الفني الأقرب إليك ونوجهه فوراً مع المعدات والقطع اللازمة لإنقاذك بأقل وقت ممكن.</p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto shrink-0">
            <a
              href={`tel:${CONTACT_PHONE}`}
              className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-2xl bg-orange-500 px-6 py-4 text-sm font-extrabold text-white shadow-md hover:bg-orange-400 transition-all cursor-pointer"
            >
              <Phone className="h-4 w-4" />
              <span>اتصل نصلك فوراً</span>
            </a>
            <a
              href={`https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent("السلام عليكم، تعطلت سيارتي وأحتاج ورشة متنقلة بالرياض فوراً.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-2xl bg-slate-800 hover:bg-slate-750 border border-slate-700 py-4 px-6 text-sm font-extrabold text-slate-200"
            >
              <MessageSquare className="h-4 w-4 text-emerald-400" />
              <span>أرسل موقعك بالواتساب</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
