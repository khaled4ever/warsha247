/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { faqsData } from "../data";

interface FAQItemProps {
  key?: number | string;
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

function FAQItem({ question, answer, isOpen, onClick }: FAQItemProps) {
  return (
    <div className="border border-slate-200 bg-white rounded-2xl overflow-hidden transition-colors hover:border-slate-300 shadow-sm">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between p-5 text-right font-bold text-slate-800 text-sm sm:text-base gap-4 cursor-pointer"
      >
        <span className="flex items-center gap-2.5">
          <HelpCircle className="h-5 w-5 text-orange-500 shrink-0" />
          <span>{question}</span>
        </span>
        <ChevronDown
          className={`h-5 w-5 text-slate-400 shrink-0 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
          >
            <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-slate-50 px-4 sm:px-6 lg:px-8 border-t border-slate-200/60" dir="rtl">
      <div className="max-w-4xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-xs sm:text-sm font-bold text-orange-500 uppercase tracking-wider">الأسئلة الأكثر شيوعاً</h2>
          <p className="text-2xl sm:text-4xl font-extrabold text-slate-900 mt-3">
            كل ما تود معرفته عن خدماتنا المتنقلة
          </p>
          <p className="text-slate-600 mt-4 text-sm sm:text-base max-w-xl mx-auto">
            أعددنا إجابات شاملة لأكثر الأسئلة تكراراً من عملائنا في الرياض لتوضيح تفاصيل الأسعار والضمان وسرعة الوصول.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqsData.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => handleToggle(index)}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
