/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Phone, MessageSquare, Clock } from "lucide-react";
import { CONTACT_PHONE, WHATSAPP_PHONE } from "../data";

export default function FloatingActions() {
  return (
    <div className="fixed bottom-6 left-6 z-50 flex flex-col gap-3 items-end" dir="rtl">
      
      {/* 24/7 Status Indicator badge hovering over */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1 }}
        className="hidden md:flex items-center gap-1.5 rounded-full border border-orange-500/20 bg-white/95 py-1.5 px-3 text-[10px] font-black text-orange-600 shadow-lg backdrop-blur-md"
      >
        <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
        <Clock className="h-3 w-3" />
        <span>متواجدون الآن بالرياض لخدمتك</span>
      </motion.div>

      {/* WhatsApp Button */}
      <motion.a
        href={`https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent("السلام عليكم، أحتاج ورشة متنقلة بالرياض لخدمة سيارتي فوراً.")}`}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.5 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="flex items-center gap-2 rounded-full bg-emerald-600 p-4 text-white shadow-2xl shadow-emerald-600/30 hover:bg-emerald-500 transition-all group cursor-pointer"
        title="تواصل عبر الواتساب"
      >
        <MessageSquare className="h-6 w-6 text-white" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-28 transition-all duration-500 ease-in-out text-xs font-black whitespace-nowrap">
          مراسلة واتساب
        </span>
      </motion.a>

      {/* Call Button */}
      <motion.a
        href={`tel:${CONTACT_PHONE}`}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.7 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="flex items-center gap-2 rounded-full bg-orange-500 p-4 text-white shadow-2xl shadow-orange-500/30 hover:bg-orange-400 transition-all group cursor-pointer"
        title="اتصل بنا فوراً"
      >
        <Phone className="h-6 w-6 text-white fill-white animate-pulse" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-28 transition-all duration-500 ease-in-out text-xs font-black text-white whitespace-nowrap">
          اتصال مباشر فوري
        </span>
      </motion.a>

    </div>
  );
}
