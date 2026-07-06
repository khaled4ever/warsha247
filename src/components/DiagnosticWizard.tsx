/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Car,
  AlertCircle,
  MapPin,
  Phone,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  MessageSquare,
  Wrench,
  RotateCcw,
  Sparkles
} from "lucide-react";
import { symptomsData, servicesData, WHATSAPP_PHONE, CONTACT_PHONE } from "../data";
import { Symptom } from "../types";

const CAR_BRANDS = [
  "تويوتا (Toyota)", "هيونداي (Hyundai)", "لكزس (Lexus)", "فورد (Ford)",
  "مرسيدس (Mercedes)", "بي إم دبليو (BMW)", "نيسان (Nissan)", "كيا (Kia)",
  "شفروليه / جي إم سي", "ماركة أخرى"
];

const RIYADH_REGIONS = [
  { id: "north", label: "شمال الرياض" },
  { id: "east", label: "شرق الرياض" },
  { id: "west", label: "غرب الرياض" },
  { id: "south_central", label: "وسط وجنوب الرياض" }
];

export default function DiagnosticWizard() {
  const [step, setStep] = useState(1);
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedSymptom, setSelectedSymptom] = useState<Symptom | null>(null);
  const [region, setRegion] = useState("");
  const [neighborhood, setNeighborhood] = useState("");
  const [phone, setPhone] = useState("");
  const [customSymptom, setCustomSymptom] = useState("");

  const handleSymptomSelect = (symptom: Symptom) => {
    setSelectedSymptom(symptom);
  };

  const handleReset = () => {
    setStep(1);
    setSelectedBrand("");
    setSelectedSymptom(null);
    setRegion("");
    setNeighborhood("");
    setPhone("");
    setCustomSymptom("");
  };

  const recommendedService = servicesData.find(
    (s) => s.id === selectedSymptom?.recommendedServiceId
  );

  const getWhatsAppMessage = () => {
    const symptomText = selectedSymptom
      ? selectedSymptom.label
      : customSymptom || "مشكلة غير محددة";
    const serviceText = recommendedService ? recommendedService.title : "طلب فحص ميكانيكي عام";

    return encodeURIComponent(
      `السلام عليكم ورحمة الله، أريد طلب خدمة الورشة المتنقلة بالرياض:\n\n` +
      `🚗 ماركة السيارة: ${selectedBrand}\n` +
      `🛠️ العطل الملاحظ: ${symptomText}\n` +
      `✅ الخدمة المقترحة: ${serviceText}\n` +
      `📍 الموقع: الرياض - المنطقة: ${region} - حي: ${neighborhood}\n` +
      `📱 رقم الجوال للاتصال: ${phone}\n\n` +
      `أرجو تأكيد الطلب وتحديد أقرب فني وموعد الوصول الحقيقي.`
    );
  };

  const handleWhatsAppSend = () => {
    if (!selectedBrand || (!selectedSymptom && !customSymptom) || !neighborhood || !phone) return;
    window.open(`https://wa.me/${WHATSAPP_PHONE}?text=${getWhatsAppMessage()}`, "_blank");
  };

  const isNextDisabled = () => {
    if (step === 1 && !selectedBrand) return true;
    if (step === 2 && !selectedSymptom && !customSymptom) return true;
    if (step === 3 && (!region || !neighborhood || !phone)) return true;
    return false;
  };

  return (
    <section id="diagnostic" className="py-20 bg-slate-100/40 px-4 sm:px-6 lg:px-8 border-t border-slate-200/60" dir="rtl">
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-orange-500/10 px-3 py-1 text-xs font-bold text-orange-600 border border-orange-500/20 mb-3">
            <Sparkles className="h-3.5 w-3.5" />
            <span>نظام الفحص والتوجيه الفوري</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900">مساعد تشخيص أعطال السيارة التفاعلي</h2>
          <p className="text-slate-600 mt-3 text-sm sm:text-base max-w-xl mx-auto">
            أجب على 3 أسئلة سريعة لنقوم بتحليل العطل وتحديد الخدمة المناسبة والقطع اللازمة، وإعداد حجز فوري للفني الخاص بك.
          </p>
        </div>

        {/* Steper Status Line */}
        <div className="flex items-center justify-between max-w-lg mx-auto mb-10 relative">
          <div className="absolute inset-0 top-1/2 -translate-y-1/2 h-0.5 bg-slate-200 z-0" />
          {[1, 2, 3, 4].map((s) => (
            <div
              key={s}
              className={`relative z-10 flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold transition-all duration-300 ${
                step >= s
                  ? "bg-orange-500 text-white shadow-lg shadow-orange-500/20"
                  : "bg-slate-200 text-slate-500"
              }`}
            >
              {s}
            </div>
          ))}
        </div>

        {/* Wizard Card */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xl relative overflow-hidden">
          
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-850 flex items-center gap-2">
                    <Car className="h-5 w-5 text-orange-500" />
                    <span>الخطوة 1: اختر ماركة ومصنّع سيارتك</span>
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">يساعدنا هذا في إحضار القطع المناسبة لنوع سيارتك بدقة.</p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {CAR_BRANDS.map((brand) => (
                    <button
                      key={brand}
                      onClick={() => setSelectedBrand(brand)}
                      className={`p-3.5 rounded-xl border text-right text-xs sm:text-sm font-bold transition-all ${
                        selectedBrand === brand
                          ? "border-orange-500 bg-orange-500/10 text-orange-600"
                          : "border-slate-200 bg-slate-50/50 text-slate-700 hover:border-slate-300 hover:text-slate-900"
                      }`}
                    >
                      {brand}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-850 flex items-center gap-2">
                    <AlertCircle className="h-5 w-5 text-orange-500" />
                    <span>الخطوة 2: ما هو العَرَض أو المشكلة الأساسية التي تلاحظها؟</span>
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">اختر من الأعراض الشائعة بالأسفل أو اكتب تفاصيل أخرى.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {symptomsData.map((sym) => (
                    <button
                      key={sym.id}
                      onClick={() => {
                        handleSymptomSelect(sym);
                        setCustomSymptom("");
                      }}
                      className={`p-4 rounded-xl border text-right transition-all flex flex-col justify-between h-28 ${
                        selectedSymptom?.id === sym.id
                          ? "border-orange-500 bg-orange-500/10 text-orange-600"
                          : "border-slate-200 bg-slate-50/50 text-slate-700 hover:border-slate-300 hover:text-slate-900"
                      }`}
                    >
                      <span className="text-xs sm:text-sm font-extrabold block">{sym.label}</span>
                      <span className="text-[10px] text-slate-500 mt-1 block leading-relaxed">{sym.description}</span>
                    </button>
                  ))}
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <label className="text-xs font-bold text-slate-500 block mb-2">أو صِف المشكلة بأسلوبك الخاص:</label>
                  <textarea
                    value={customSymptom}
                    onChange={(e) => {
                      setCustomSymptom(e.target.value);
                      setSelectedSymptom(null);
                    }}
                    placeholder="مثال: المكيف يخرج هواء حار فقط، أو يوجد صوت طقطقة تحت السيارة جهة اليسار..."
                    rows={3}
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 p-3 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500"
                  />
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-850 flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-orange-500" />
                    <span>الخطوة 3: أين موقع سيارتك بالرياض؟</span>
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">سنستخدم هذه البيانات لتوجيه الفني الأقرب إليك فوراً.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="text-xs font-bold text-slate-500 block mb-2">منطقة التواجد بالرياض:</label>
                    <div className="grid grid-cols-2 gap-2">
                      {RIYADH_REGIONS.map((r) => (
                        <button
                          key={r.id}
                          onClick={() => setRegion(r.label)}
                          className={`py-2 px-3 rounded-lg border text-xs font-bold transition-all ${
                            region === r.label
                              ? "border-orange-500 bg-orange-500/10 text-orange-600"
                              : "border-slate-200 bg-slate-50/50 text-slate-700 hover:border-slate-300"
                          }`}
                        >
                          {r.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col justify-between">
                    <div>
                      <label className="text-xs font-bold text-slate-500 block mb-1">اسم الحي (مثال: الملقا، النسيم):</label>
                      <input
                        type="text"
                        value={neighborhood}
                        onChange={(e) => setNeighborhood(e.target.value)}
                        placeholder="اكتب اسم الحي هنا"
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 p-2.5 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:border-orange-500 focus:outline-none"
                      />
                    </div>

                    <div className="mt-4">
                      <label className="text-xs font-bold text-slate-500 block mb-1">رقم الجوال للتواصل والموقع:</label>
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="مثال: 0555XXXXXX"
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 p-2.5 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:border-orange-500 focus:outline-none text-left"
                        dir="ltr"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {step === 4 && (
              <motion.div
                key="step4"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="space-y-6 text-center py-4"
              >
                <div className="mx-auto h-16 w-16 bg-orange-500/10 border border-orange-500/20 text-orange-600 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">تحليل العطل والتوجيه جاهز!</h3>
                <p className="text-sm text-slate-500 max-w-md mx-auto">
                  قمنا بدراسة المعطيات وتحديد الخدمة الأنسب لسيارتك. يمكنك الآن طلب الخدمة فوراً عبر واتساب أو الاتصال المباشر.
                </p>

                {/* Live Diagnostics Card */}
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 sm:p-6 text-right max-w-xl mx-auto space-y-4 shadow-sm">
                  <h4 className="text-xs font-bold text-orange-600 uppercase tracking-widest border-b border-slate-200 pb-2">تفاصيل طلب الصيانة المقترح:</h4>
                  <div className="grid grid-cols-2 gap-y-3 gap-x-4 text-xs sm:text-sm">
                    <div>
                      <span className="text-slate-500 font-medium block">نوع وماركة السيارة:</span>
                      <span className="text-slate-850 font-bold block mt-0.5">{selectedBrand}</span>
                    </div>
                    <div>
                      <span className="text-slate-500 font-medium block">الحي والمنطقة:</span>
                      <span className="text-slate-850 font-bold block mt-0.5">{neighborhood} ({region})</span>
                    </div>
                    <div className="col-span-2 border-t border-slate-200/60 pt-3">
                      <span className="text-slate-500 font-medium block">العَرَض الملاحظ:</span>
                      <span className="text-slate-800 font-bold block mt-0.5">
                        {selectedSymptom ? selectedSymptom.label : customSymptom}
                      </span>
                    </div>
                    <div className="col-span-2 border-t border-slate-200/60 pt-3">
                      <span className="text-slate-500 font-medium block">الخدمة المقترحة الموجهة:</span>
                      <span className="text-orange-650 font-extrabold flex items-center gap-1.5 mt-1">
                        <Wrench className="h-4 w-4" />
                        <span>{recommendedService ? recommendedService.title : "فحص شامل وإصلاح ميكانيكي كهربائي عاجل"}</span>
                      </span>
                    </div>
                  </div>
                </div>

                {/* Final dispatch actions */}
                <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-lg mx-auto">
                  <button
                    onClick={handleWhatsAppSend}
                    className="w-full flex items-center justify-center gap-2 rounded-2xl bg-emerald-600 hover:bg-emerald-500 px-6 py-4 text-sm font-extrabold text-white shadow-lg transition-all active:scale-95 cursor-pointer"
                  >
                    <MessageSquare className="h-5 w-5 fill-white text-emerald-600" />
                    <span>إرسال وتأكيد عبر الواتساب</span>
                  </button>

                  <a
                    href={`tel:${CONTACT_PHONE}`}
                    className="w-full flex items-center justify-center gap-2 rounded-2xl bg-orange-500 hover:bg-orange-400 px-6 py-4 text-sm font-extrabold text-white shadow-lg transition-all active:scale-95"
                  >
                    <Phone className="h-5 w-5 fill-white text-white" />
                    <span>اتصال فوري بالفني</span>
                  </a>
                </div>

                <button
                  onClick={handleReset}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-slate-800 transition-colors pt-4 cursor-pointer"
                >
                  <RotateCcw className="h-3.5 w-3.5" />
                  <span>بدء الفحص من جديد</span>
                </button>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Nav buttons in wizard footer (Only shown for step 1, 2, 3) */}
          {step < 4 && (
            <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
              <button
                onClick={() => setStep(step - 1)}
                disabled={step === 1}
                className={`flex items-center gap-1 px-4 py-2 text-xs font-bold rounded-xl transition-all ${
                  step === 1
                    ? "text-slate-400 cursor-not-allowed opacity-40"
                    : "text-slate-600 hover:text-slate-900 bg-slate-50 border border-slate-200"
                }`}
              >
                <ChevronRight className="h-4 w-4" />
                <span>السابق</span>
              </button>

              <button
                onClick={() => setStep(step + 1)}
                disabled={isNextDisabled()}
                className={`flex items-center gap-1 px-5 py-2.5 text-xs font-bold rounded-xl transition-all ${
                  isNextDisabled()
                    ? "bg-slate-100 border border-slate-200 text-slate-400 cursor-not-allowed"
                    : "bg-orange-500 text-white font-extrabold shadow-lg shadow-orange-500/10 hover:bg-orange-400"
                }`}
              >
                <span>{step === 3 ? "استعراض النتيجة" : "التالي"}</span>
                <ChevronLeft className="h-4 w-4" />
              </button>
            </div>
          )}

        </div>
      </div>
    </section>
  );
}
