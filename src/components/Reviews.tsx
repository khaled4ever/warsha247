/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Star, ShieldCheck, Quote, Check } from "lucide-react";
import { testimonialsData } from "../data";

export default function Reviews() {
  return (
    <section id="testimonials" className="py-20 bg-white px-4 sm:px-6 lg:px-8 border-t border-slate-200/60" dir="rtl">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs sm:text-sm font-bold text-orange-500 uppercase tracking-wider">آراء وتقييمات عملائنا بالرياض</h2>
          <p className="text-2xl sm:text-4xl font-extrabold text-slate-900 mt-3">
            ثقة نعتز بها من مئات السائقين في العاصمة
          </p>
          <p className="text-slate-600 mt-4 text-sm sm:text-base">
            رضا عملائنا هو المحرك الأساسي لسرعتنا وتطورنا. تفضل بقراءة ما يقوله سكان الرياض عن أمانة وجودة خدمة ورشتنا المتنقلة.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonialsData.map((review) => (
            <div
              key={review.id}
              className="relative rounded-3xl border border-slate-200 bg-slate-50/50 p-6 sm:p-8 flex flex-col justify-between shadow-sm hover:border-slate-300 transition-all"
            >
              {/* Quote Icon Background Decorator */}
              <Quote className="absolute top-6 left-6 h-10 w-10 text-slate-200 rotate-180 pointer-events-none" />

              <div>
                {/* Rating Stars */}
                <div className="flex items-center gap-1 text-orange-500 mb-4">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-orange-500" />
                  ))}
                </div>

                {/* Comment Text */}
                <p className="text-slate-700 text-sm leading-relaxed relative z-10">
                  "{review.comment}"
                </p>
              </div>

              {/* Author Info */}
              <div className="mt-8 pt-5 border-t border-slate-200/80 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-orange-50 border border-orange-100 flex items-center justify-center text-orange-600 font-bold text-sm">
                    {review.name[0]}
                  </div>
                  <div className="text-right">
                    <h4 className="text-sm font-extrabold text-slate-900">{review.name}</h4>
                    <span className="text-[10px] text-slate-500 block mt-0.5">{review.carModel}</span>
                  </div>
                </div>

                <div className="text-left shrink-0">
                  <span className="text-[10px] text-orange-600 bg-orange-50 border border-orange-500/10 px-2 py-0.5 rounded-full font-bold">
                    {review.neighborhood}
                  </span>
                  <span className="text-[10px] text-slate-400 block mt-1.5 text-left">{review.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust metrics */}
        <div className="mt-16 border border-slate-200 bg-slate-50/40 rounded-3xl p-6 sm:p-8 max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          <div className="flex flex-col items-center">
            <span className="text-3xl sm:text-4xl font-black text-orange-500">4.9/5</span>
            <span className="text-xs text-slate-600 mt-2">متوسط تقييم الخدمة بالرياض</span>
          </div>
          <div className="flex flex-col items-center border-y sm:border-y-0 sm:border-x border-slate-200 py-4 sm:py-0">
            <span className="text-3xl sm:text-4xl font-black text-orange-500">+1,500</span>
            <span className="text-xs text-slate-600 mt-2">عميل سعيد قمنا بخدمتهم</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl sm:text-4xl font-black text-orange-500">100%</span>
            <span className="text-xs text-slate-600 mt-2">ضمان أمانة الفنيين والجودة</span>
          </div>
        </div>

      </div>
    </section>
  );
}
