/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Phone, MessageSquare, Check, Calendar, MapPin, Car, HelpCircle, User } from "lucide-react";
import { CONTACT_PHONE, WHATSAPP_PHONE } from "../data";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    carDetails: "",
    serviceType: "ميكانيكا عامة",
    neighborhood: "",
    notes: ""
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const handleServiceSelect = (e: Event) => {
      const customEvent = e as CustomEvent<{ serviceId: string }>;
      if (customEvent.detail && customEvent.detail.serviceId) {
        const id = customEvent.detail.serviceId;
        let mappedType = "ميكانيكا عامة";
        if (id === "computer") mappedType = "فحص كمبيوتر وبرمجة";
        else if (id === "mechanics") mappedType = "ميكانيكا عامة";
        else if (id === "electrical") mappedType = "كهرباء وتكييف";
        else if (id === "battery") mappedType = "تغيير بطارية أصلية";
        
        setFormData(prev => ({
          ...prev,
          serviceType: mappedType
        }));
      }
    };

    window.addEventListener("select-service", handleServiceSelect);
    return () => {
      window.removeEventListener("select-service", handleServiceSelect);
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.neighborhood) return;
    
    // Simulate API registration / validation success
    setSubmitted(true);
  };

  const getWhatsAppMessage = () => {
    return encodeURIComponent(
      `السلام عليكم، أريد طلب حجز خدمة ورشة متنقلة بالرياض:\n\n` +
      `👤 الاسم: ${formData.name}\n` +
      `📱 الجوال: ${formData.phone}\n` +
      `🚗 نوع وماركة السيارة: ${formData.carDetails || "غير محدد"}\n` +
      `🔧 الخدمة المطلوبة: ${formData.serviceType}\n` +
      `📍 الحي/الموقع: حي ${formData.neighborhood}\n` +
      `📝 ملاحظات إضافية: ${formData.notes || "لا يوجد"}\n\n` +
      `أرجو التواصل لتأكيد زمن وصول الفني.`
    );
  };

  return (
    <section id="contact" className="py-20 bg-slate-100/40 px-4 sm:px-6 lg:px-8 border-t border-slate-200/60" dir="rtl">
      <div className="max-w-4xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-xs sm:text-sm font-bold text-orange-500 uppercase tracking-wider">طلب خدمة سريع</h2>
          <p className="text-2xl sm:text-4xl font-extrabold text-slate-900 mt-3">
            احجز فنيّاً لسيارتك الآن
          </p>
          <p className="text-slate-600 mt-4 text-sm sm:text-base max-w-xl mx-auto">
            املأ النموذج أدناه لتسجيل طلب صيانة وسوف يتصل بك منسق العمليات فوراً لتأكيد الحجز وتوجيه الفني المتخصص لموقعك.
          </p>
        </div>

        {/* Form Container */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xl relative overflow-hidden">
          
          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.form
                key="booking-form"
                onSubmit={handleSubmit}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-6 text-right"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name field */}
                  <div>
                    <label className="text-xs font-bold text-slate-500 block mb-2 flex items-center gap-1.5">
                      <User className="h-4 w-4 text-slate-400" />
                      <span>الاسم الكريم: <span className="text-red-500">*</span></span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="مثال: أبو حمد"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 p-3 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:border-orange-500 focus:outline-none"
                    />
                  </div>

                  {/* Phone field */}
                  <div>
                    <label className="text-xs font-bold text-slate-500 block mb-2 flex items-center gap-1.5">
                      <Phone className="h-4 w-4 text-slate-400" />
                      <span>رقم جوال الاتصال: <span className="text-red-500">*</span></span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="مثال: 05XXXXXXXX"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 p-3 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:border-orange-500 focus:outline-none text-left"
                      dir="ltr"
                    />
                  </div>

                  {/* Car model field */}
                  <div>
                    <label className="text-xs font-bold text-slate-500 block mb-2 flex items-center gap-1.5">
                      <Car className="h-4 w-4 text-slate-400" />
                      <span>نوع وموديل السيارة:</span>
                    </label>
                    <input
                      type="text"
                      value={formData.carDetails}
                      onChange={(e) => setFormData({ ...formData, carDetails: e.target.value })}
                      placeholder="مثال: تويوتا كامري 2020"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 p-3 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:border-orange-500 focus:outline-none"
                    />
                  </div>

                  {/* Neighborhood field */}
                  <div>
                    <label className="text-xs font-bold text-slate-500 block mb-2 flex items-center gap-1.5">
                      <MapPin className="h-4 w-4 text-slate-400" />
                      <span>الحي المتواجد فيه بالرياض: <span className="text-red-500">*</span></span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.neighborhood}
                      onChange={(e) => setFormData({ ...formData, neighborhood: e.target.value })}
                      placeholder="مثال: حي الملقا"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 p-3 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:border-orange-500 focus:outline-none"
                    />
                  </div>

                  {/* Service Selection */}
                  <div className="col-span-1 sm:col-span-2">
                    <label className="text-xs font-bold text-slate-500 block mb-2 flex items-center gap-1.5">
                      <HelpCircle className="h-4 w-4 text-slate-400" />
                      <span>الخدمة المطلوبة:</span>
                    </label>
                    <select
                      value={formData.serviceType}
                      onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 p-3 text-xs sm:text-sm text-slate-800 focus:border-orange-500 focus:outline-none cursor-pointer text-right"
                    >
                      <option value="فحص كمبيوتر وبرمجة">فحص كمبيوتر وبرمجة</option>
                      <option value="ميكانيكا عامة">إصلاح ميكانيكا سيارات</option>
                      <option value="كهرباء وتكييف">إصلاح كهرباء أو شحن تكييف</option>
                      <option value="تغيير بطارية أصلية">تغيير بطارية مع الضمان</option>
                      <option value="أخرى / فحص عام">مشكلة أخرى / فحص عام بالطريق</option>
                    </select>
                  </div>

                  {/* Notes textarea */}
                  <div className="col-span-1 sm:col-span-2">
                    <label className="text-xs font-bold text-slate-500 block mb-2">أي ملاحظات أخرى أو أعراض:</label>
                    <textarea
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      placeholder="صِف أي شيء إضافي تلاحظه في سيارتك ليسهل على الفني إحضار التجهيزات اللازمة..."
                      rows={3}
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 p-3 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500"
                    />
                  </div>
                </div>

                {/* Submit buttons */}
                <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
                  <button
                    type="submit"
                    className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-2xl bg-orange-500 hover:bg-orange-400 py-4 px-8 text-sm font-extrabold text-white shadow-lg shadow-orange-500/10 transition-all cursor-pointer"
                  >
                    <Calendar className="h-4 w-4" />
                    <span>إرسال طلب صيانة سريع</span>
                  </button>

                  <a
                    href={`tel:${CONTACT_PHONE}`}
                    className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-2xl bg-slate-100 hover:bg-slate-200 border border-slate-200 py-4 px-6 text-sm font-extrabold text-slate-700"
                  >
                    <Phone className="h-4 w-4 text-orange-500" />
                    <span>تواصل هاتفي مباشر (24 ساعة)</span>
                  </a>
                </div>

                {/* Google Ads Compliance Privacy Consent Notice */}
                <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] sm:text-xs text-slate-500 leading-relaxed space-y-1.5">
                  <p>
                    * عند إرسالك هذا النموذج، فإنك تمنح موافقتك الصريحة لورشة الرياض المتنقلة للتواصل معك هاتفياً أو عبر تطبيق WhatsApp بخصوص صيانة سيارتك وإرسال أقرب فني إليك بالحي المحدد.
                  </p>
                  <p>
                    * <strong>شفافية الأسعار وجودة الخدمة:</strong> يتم الاتفاق على تكلفة الانتقال والفحص المبدئي بشكل كامل ومسبق قبل انطلاق الفني. كما يتم تزويدك بتقدير واضح لأجور اليد وأسعار قطع الغيار الأصلية قبل البدء بأي عمل إصلاحي، دون أي تكاليف أو رسوم مخفية نهائياً.
                  </p>
                  <p>
                    * نلتزم التزاماً كاملاً بحماية بياناتك وسريتها ولا نشاركها إطلاقاً مع أطراف ثالثة. يمكنك مراجعة{" "}
                    <a
                      href="#privacy"
                      onClick={(e) => {
                        e.preventDefault();
                        window.dispatchEvent(new CustomEvent("open-policy", { detail: { type: "privacy" } }));
                      }}
                      className="text-orange-500 underline hover:text-orange-600 font-bold bg-transparent border-0 p-0 inline cursor-pointer"
                    >
                      سياسة الخصوصية
                    </a>{" "}
                    و{" "}
                    <a
                      href="#terms"
                      onClick={(e) => {
                        e.preventDefault();
                        window.dispatchEvent(new CustomEvent("open-policy", { detail: { type: "terms" } }));
                      }}
                      className="text-orange-500 underline hover:text-orange-600 font-bold bg-transparent border-0 p-0 inline cursor-pointer"
                    >
                      شروط وأحكام الخدمة
                    </a>{" "}
                    الخاصة بنا في أي وقت.
                  </p>
                </div>
              </motion.form>
            ) : (
              <motion.div
                key="booking-success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8 space-y-6"
              >
                <div className="mx-auto h-16 w-16 bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 rounded-full flex items-center justify-center mb-2">
                  <Check className="h-8 w-8" />
                </div>
                
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">تم استلام طلب الحجز بنجاح!</h3>
                <p className="text-sm text-slate-650 max-w-md mx-auto">
                  شكراً لك {formData.name}. تم تسجيل طلبك لإصلاح ({formData.carDetails || "سيارتك"}) في حي {formData.neighborhood} بنجاح.
                </p>

                {/* Dispatch info notice */}
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 text-right max-w-md mx-auto text-xs sm:text-sm">
                  <span className="text-slate-500 font-bold block">ماذا يحدث الآن؟</span>
                  <p className="text-slate-650 mt-2 leading-relaxed">
                    سيقوم الفني المسؤول عن صيانة منطقتك بالاتصال بك خلال 3 دقائق فقط على الرقم <span className="font-bold text-orange-650 text-left inline-block" dir="ltr">{formData.phone}</span> لتأكيد العنوان بدقة وتحديد زمن الوصول الفعلي ومناقشة تفاصيل التسعير.
                  </p>
                </div>

                {/* Redirection link */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto pt-4">
                  <a
                    href={`https://wa.me/${WHATSAPP_PHONE}?text=${getWhatsAppMessage()}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 rounded-2xl bg-emerald-600 hover:bg-emerald-500 px-6 py-4 text-sm font-extrabold text-white shadow-lg transition-all active:scale-95"
                  >
                    <MessageSquare className="h-5 w-5 text-white" />
                    <span>إرسال تفاصيل الحجز بالواتساب للسرعة</span>
                  </a>

                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: "",
                        phone: "",
                        carDetails: "",
                        serviceType: "ميكانيكا عامة",
                        neighborhood: "",
                        notes: ""
                      });
                    }}
                    className="w-full flex items-center justify-center gap-2 rounded-2xl bg-slate-100 hover:bg-slate-200 border border-slate-200 px-6 py-4 text-sm font-bold text-slate-700 cursor-pointer"
                  >
                    <span>طلب حجز آخر</span>
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </div>
    </section>
  );
}
