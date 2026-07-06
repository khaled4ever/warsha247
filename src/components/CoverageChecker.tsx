/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { Search, MapPin, CheckCircle2, Clock, Map, Phone } from "lucide-react";
import { neighborhoodsData, CONTACT_PHONE } from "../data";

type Region = "all" | "north" | "east" | "west" | "south_central";

export default function CoverageChecker() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState<Region>("all");

  const normalizedSearch = searchTerm.trim().toLowerCase();

  // Find exact or partial match
  const matchedNeighborhood = normalizedSearch
    ? neighborhoodsData.find(
        (n) =>
          n.name.includes(normalizedSearch) ||
          normalizedSearch.includes(n.name)
      )
    : null;

  const filteredNeighborhoods = neighborhoodsData.filter((n) => {
    if (activeTab === "all") return true;
    return n.region === activeTab;
  });

  const getRegionName = (reg: string) => {
    switch (reg) {
      case "north":
        return "شمال الرياض";
      case "east":
        return "شرق الرياض";
      case "west":
        return "غرب الرياض";
      case "south_central":
        return "وسط وجنوب الرياض";
      default:
        return "كامل الرياض";
    }
  };

  return (
    <section id="coverage" className="py-20 bg-slate-50 px-4 sm:px-6 lg:px-8 border-t border-slate-200/60" dir="rtl">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs sm:text-sm font-bold text-orange-500 uppercase tracking-wider">مناطق تغطيتنا بالرياض</h2>
          <p className="text-2xl sm:text-4xl font-extrabold text-slate-900 mt-3">
            نغطي كافة أحياء الرياض على مدار 24 ساعة
          </p>
          <p className="text-slate-600 mt-4 text-sm sm:text-base">
            تنتشر سيارات الورشة المتنقلة والفنيون المجهزون في جميع أنحاء الرياض لضمان سرعة الاستجابة. ابحث عن حيك وتأكد من متوسط زمن الوصول الفعلي إليك.
          </p>
        </div>

        {/* Live Search Widget */}
        <div className="max-w-2xl mx-auto mb-14">
          <div className="relative rounded-3xl border border-slate-200 bg-white p-4 shadow-lg">
            <div className="relative flex items-center">
              <Search className="absolute right-4 h-5 w-5 text-slate-400" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="اكتب اسم حيك بالرياض للتحقق من التغطية فوريّاً... (مثال: الملقا، النسيم)"
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 py-3.5 pr-12 pl-4 text-sm text-slate-800 placeholder-slate-400 focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500 text-right"
              />
            </div>

            {/* Match output feedback */}
            {searchTerm && (
              <div className="mt-4 p-4 rounded-2xl border border-slate-100 bg-slate-50 animate-fadeIn">
                {matchedNeighborhood ? (
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-right">
                    <div className="flex items-start gap-2.5">
                      <div className="h-9 w-9 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-650 flex items-center justify-center shrink-0">
                        <CheckCircle2 className="h-5 w-5" />
                      </div>
                      <div>
                        <span className="text-xs text-slate-500 font-bold block">حالة التغطية لحل المشكلة:</span>
                        <span className="text-sm font-bold text-slate-900 block mt-0.5">
                          حي {matchedNeighborhood.name} ({getRegionName(matchedNeighborhood.region)}) - مغطى بالكامل
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-xl border border-slate-200 self-start sm:self-center shrink-0">
                      <Clock className="h-4 w-4 text-orange-500" />
                      <span className="text-xs font-bold text-slate-600">
                        الوصول خلال: <span className="text-orange-650 font-black">{matchedNeighborhood.timeMin} دقيقة</span>
                      </span>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-right">
                    <div className="flex items-start gap-2.5">
                      <div className="h-9 w-9 rounded-xl bg-orange-500/10 border border-orange-500/20 text-orange-600 flex items-center justify-center shrink-0">
                        <MapPin className="h-5 w-5 animate-bounce" />
                      </div>
                      <div>
                        <span className="text-xs text-slate-500 font-bold block">مغطى ونصلك فوراً:</span>
                        <span className="text-sm font-bold text-slate-900 block mt-0.5">
                          نعم، نحن نغطي حي "{searchTerm}" وكافة أحياء الرياض على مدار 24 ساعة!
                        </span>
                      </div>
                    </div>
                    <a
                      href={`tel:${CONTACT_PHONE}`}
                      className="flex items-center gap-1.5 rounded-xl bg-orange-500 px-3.5 py-2 text-xs font-black text-white shadow-md hover:bg-orange-400 transition-all self-start sm:self-center shrink-0"
                    >
                      <Phone className="h-3.5 w-3.5" />
                      <span>اطلب الفني الآن</span>
                    </a>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Region Tabs & Pill Badges */}
        <div className="border border-slate-200 bg-white rounded-3xl p-6 sm:p-8 shadow-sm">
          
          {/* Tab Selector */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-8 border-b border-slate-100 pb-6">
            <button
              onClick={() => setActiveTab("all")}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === "all"
                  ? "bg-orange-500 text-white shadow-lg shadow-orange-500/10"
                  : "bg-slate-100 text-slate-600 hover:text-slate-950 border border-slate-200/40"
              }`}
            >
              عرض الكل ({neighborhoodsData.length} حيّاً)
            </button>
            <button
              onClick={() => setActiveTab("north")}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === "north"
                  ? "bg-orange-500 text-white shadow-lg"
                  : "bg-slate-100 text-slate-600 hover:text-slate-950 border border-slate-200/40"
              }`}
            >
              شمال الرياض
            </button>
            <button
              onClick={() => setActiveTab("east")}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === "east"
                  ? "bg-orange-500 text-white shadow-lg"
                  : "bg-slate-100 text-slate-600 hover:text-slate-950 border border-slate-200/40"
              }`}
            >
              شرق الرياض
            </button>
            <button
              onClick={() => setActiveTab("west")}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === "west"
                  ? "bg-orange-500 text-white shadow-lg"
                  : "bg-slate-100 text-slate-600 hover:text-slate-950 border border-slate-200/40"
              }`}
            >
              غرب الرياض
            </button>
            <button
              onClick={() => setActiveTab("south_central")}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === "south_central"
                  ? "bg-orange-500 text-white shadow-lg"
                  : "bg-slate-100 text-slate-600 hover:text-slate-950 border border-slate-200/40"
              }`}
            >
              وسط وجنوب الرياض
            </button>
          </div>

          {/* Neighborhood Badges Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {filteredNeighborhoods.map((n) => (
              <div
                key={n.name}
                className="group flex items-center justify-between p-3 rounded-xl border border-slate-100 bg-slate-50/50 hover:border-slate-200 transition-all hover:bg-slate-50"
              >
                <div className="flex items-center gap-1.5 min-w-0">
                  <MapPin className="h-3.5 w-3.5 text-slate-400 group-hover:text-orange-500 transition-colors shrink-0" />
                  <span className="text-xs sm:text-sm text-slate-700 font-bold truncate">{n.name}</span>
                </div>
                <span className="text-[9px] font-black text-orange-600 bg-orange-55 border border-orange-500/10 px-1.5 py-0.5 rounded-md shrink-0">
                  {n.timeMin} د
                </span>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center text-xs text-slate-500 flex items-center justify-center gap-1.5">
            <Map className="h-4 w-4" />
            <span>نحن نوفر خدمة الإصلاح الفوري عند البيت أو بالطرق السريعة في جميع الأحياء المذكورة أعلاه وأكثر.</span>
          </div>

        </div>

      </div>
    </section>
  );
}
