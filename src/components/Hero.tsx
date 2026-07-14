/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { Phone, MessageSquare, Clock, ShieldCheck, MapPin, Sparkles } from "lucide-react";
import { CONTACT_PHONE, WHATSAPP_PHONE } from "../data";

export default function Hero() {
  const stats = [
    { icon: <Clock className="h-5 w-5 text-orange-500" />, title: "متوفرون 24/7", desc: "خدمة طوارئ مستمرة" },
    { icon: <MapPin className="h-5 w-5 text-orange-500" />, title: "نصلك في 30 دقيقة", desc: "تغطية كامل أحياء الرياض" },
    { icon: <ShieldCheck className="h-5 w-5 text-orange-500" />, title: "ضمان حقيقي", desc: "على كافة القطع والإصلاح" },
    { icon: <Sparkles className="h-5 w-5 text-orange-500" />, title: "فحص متكامل بالكمبيوتر", desc: "أحدث أجهزة الكشف والأعطال" },
  ];

  const handleStartDiagnostic = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const element = document.querySelector("#diagnostic");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center justify-center py-12 md:py-20 px-4 overflow-hidden bg-slate-950" dir="rtl">
      {/* Background Image with Dark Overlays - using object-contain on mobile to keep it within bounds */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://i.postimg.cc/9QFcwzyQ/wrsht-mtnqlt-lsyant-alsyarat-balryad.png"
          alt="ورشة متنقلة في الرياض"
          className="w-full h-full object-contain md:object-cover object-center opacity-20 md:opacity-100"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/95 via-slate-950/80 to-slate-950" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-950 to-transparent" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-center text-center">
        {/* Urgent Service Announcement Banner */}
        <motion.div
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full bg-orange-500 px-4 py-1.5 text-xs font-extrabold text-white mb-6 shadow-md"
        >
          <span className="flex h-2 w-2 rounded-full bg-white animate-pulse" />
          <span>خدمة صيانة السيارات المتنقلة الفورية في الرياض - متوفرون الآن</span>
        </motion.div>

        {/* Standalone Banner Image for Mobile - 100% within phone bounds and beautifully visible */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full max-w-md mx-auto mb-8 rounded-2xl overflow-hidden border border-slate-800 bg-slate-900/50 p-1 shadow-2xl md:hidden"
        >
          <img
            src="https://i.postimg.cc/9QFcwzyQ/wrsht-mtnqlt-lsyant-alsyarat-balryad.png"
            alt="ورشة متنقلة لصيانة السيارات بالرياض"
            className="w-full h-auto rounded-xl object-contain"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        {/* Main Headings */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight max-w-4xl"
        >
          سيارتك معطلة بالرياض؟ <br />
          <span className="text-orange-500 bg-clip-text">نصلك ونصلحها عند بيتك أو بالطريق!</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-base sm:text-lg text-slate-300 max-w-2xl mt-6 leading-relaxed"
        >
          لا داعي لطلب سطحة والانتظار الطويل في الصناعية. ورشتنا المتنقلة توفر لك فحص الكمبيوتر، إصلاح الكهرباء والميكانيكا، شحن التكييف، وتغيير البطاريات الفوري مع الضمان في موقعك بالرياض.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center gap-4 mt-10 w-full justify-center px-4"
        >
          <a
            href={`tel:${CONTACT_PHONE}`}
            className="w-full sm:w-auto flex items-center justify-center gap-3 rounded-2xl bg-orange-500 px-8 py-4 text-base font-extrabold text-white shadow-lg shadow-orange-500/20 hover:bg-orange-400 transition-all duration-300 active:scale-95"
          >
            <Phone className="h-5 w-5 text-white fill-white" />
            <span>اتصل الآن بالفني</span>
          </a>
          
          <a
            href={`https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent("السلام عليكم، تعطلت سيارتي وأحتاج ورشة متنقلة بالرياض للخدمة فوراً.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-3 rounded-2xl bg-emerald-600 px-8 py-4 text-base font-extrabold text-white shadow-lg shadow-emerald-600/10 hover:bg-emerald-500 transition-all duration-300 active:scale-95"
          >
            <MessageSquare className="h-5 w-5 text-white" />
            <span>أرسل موقعك عبر الواتساب</span>
          </a>

          <button
            onClick={handleStartDiagnostic}
            className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-2xl bg-slate-900 border border-slate-800 px-8 py-4 text-base font-bold text-slate-300 hover:text-white hover:bg-slate-800 hover:border-slate-700 transition-all duration-300 active:scale-95 cursor-pointer"
          >
            <span>شخّص عطل سيارتك مجاناً</span>
          </button>
        </motion.div>

        {/* Google Ads Compliance Independent Provider Disclaimer Banner */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="w-full max-w-4xl mt-10 p-4 rounded-2xl border border-slate-800/80 bg-slate-950/60 backdrop-blur-sm text-center"
        >
          <p className="text-[11px] sm:text-xs text-slate-450 leading-relaxed">
            <span className="font-extrabold text-orange-500">تنبيه قانوني هام:</span> نحن <span className="text-white font-semibold">ورشة صيانة سيارات متنقلة مستقلة تماماً</span> في مدينة الرياض. نحن <span className="text-white underline decoration-orange-500/40">لسنا وكلاء معتمدين رسمياً</span> لأي علامة تجارية للسيارات، ولا نمثل أي وكيل محلي بالمملكة. جميع الخدمات الفنية والصيانات تقدم لعملاء الورشة بشكل مستقل لجميع الموديلات والأنواع بمهنية عالية وأمان كامل وضمان معتمد.
          </p>
        </motion.div>

        {/* Key Features Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-16 w-full max-w-5xl"
        >
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center sm:items-start text-center sm:text-right p-4 rounded-2xl border border-slate-800 bg-slate-950 shadow-md"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 border border-slate-800 mb-3">
                {stat.icon}
              </div>
              <h3 className="text-sm sm:text-base font-bold text-white">{stat.title}</h3>
              <p className="text-xs text-slate-400 mt-1">{stat.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
