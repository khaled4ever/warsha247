/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ShieldCheck, FileText, CheckCircle, Info } from "lucide-react";

interface PolicyModalsProps {
  isOpen: boolean;
  type: "privacy" | "terms" | "disclaimer" | null;
  onClose: () => void;
}

export default function PolicyModals({ isOpen, type, onClose }: PolicyModalsProps) {
  if (!isOpen || !type) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto" dir="rtl">
        {/* Backdrop overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm"
        />

        {/* Modal content box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", duration: 0.5 }}
          className="relative w-full max-w-3xl rounded-3xl border border-slate-800 bg-slate-900 text-slate-150 p-6 sm:p-8 shadow-2xl z-10 max-h-[85vh] flex flex-col"
        >
          {/* Header */}
          <div className="flex items-center justify-between pb-4 border-b border-slate-800 shrink-0">
            <div className="flex items-center gap-3">
              {type === "privacy" && (
                <>
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-black text-white">سياسة الخصوصية</h3>
                    <p className="text-[10px] text-slate-400">متوافقة بالكامل مع متطلبات وإعلانات جوجل للخصوصية</p>
                  </div>
                </>
              )}
              {type === "terms" && (
                <>
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500/10 text-orange-400">
                    <FileText className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-black text-white">الشروط والأحكام</h3>
                    <p className="text-[10px] text-slate-400">حقوق والتزامات الخدمة لعملاء ورشة الرياض المتنقلة</p>
                  </div>
                </>
              )}
              {type === "disclaimer" && (
                <>
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                    <Info className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-black text-white">إخلاء المسؤولية والتوضيح القانوني</h3>
                    <p className="text-[10px] text-slate-400">بيان استقلالية الخدمة وحقوق الملكية الفكرية</p>
                  </div>
                </>
              )}
            </div>

            <button
              onClick={onClose}
              className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-850 hover:bg-slate-800 text-slate-400 hover:text-white transition-all cursor-pointer border border-slate-800"
              id="close-policy-modal"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Scrollable Content Body */}
          <div className="flex-1 overflow-y-auto py-6 space-y-6 text-sm sm:text-base leading-relaxed text-slate-300 pr-2">
            
            {type === "privacy" && (
              <div className="space-y-6">
                <section className="space-y-2">
                  <h4 className="text-base font-bold text-white flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-emerald-400" />
                    تمهيد والتزام بالخصوصية
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-400">
                    نحن في ورشة الرياض المتنقلة لصيانة السيارات نولي خصوصية بياناتكم أهمية قصوى. تهدف هذه السياسة إلى توضيح نوعية البيانات التي نجمعها، وكيفية استخدامها وحمايتها، بما يتطابق بالكامل مع أنظمة المملكة العربية السعودية وسياسات جوجل الإعلانية لعام 2026.
                  </p>
                </section>

                <section className="space-y-2">
                  <h4 className="text-base font-bold text-white flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-emerald-400" />
                    البيانات الشخصية التي نجمعها
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-400">
                    عند استخدامكم لنموذج طلب التواصل أو الاتصال المباشر بنا، قد نقوم بجمع البيانات التالية فقط لخدمتكم:
                  </p>
                  <ul className="list-disc list-inside mr-4 text-xs sm:text-sm text-slate-400 space-y-1">
                    <li>الاسم الشخصي (لتسهيل التخاطب المهني).</li>
                    <li>رقم الهاتف أو الجوال (للتواصل معكم بخصوص عطل السيارة وإرسال الفني).</li>
                    <li>نوع السيارة وطبيعة المشكلة (ميكانيكا، كهرباء، كمبيوتر، بطارية).</li>
                    <li>الحي السكني أو الموقع التقريبي داخل الرياض (لتوجيه أقرب ورشة متنقلة إليكم).</li>
                  </ul>
                </section>

                <section className="space-y-2">
                  <h4 className="text-base font-bold text-white flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-emerald-400" />
                    الغرض من جمع البيانات واستخدامها
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-400">
                    نستخدم البيانات المجمعة للأغراض المحددة التالية دون سواها:
                  </p>
                  <ul className="list-disc list-inside mr-4 text-xs sm:text-sm text-slate-400 space-y-1">
                    <li>تقديم خدمة صيانة السيارات المتنقلة الفورية المطلوبة من قبلكم.</li>
                    <li>تأكيد الحجز والتنسيق المباشر معكم عبر الاتصال الهاتفي أو رسائل WhatsApp.</li>
                    <li>تحديد موقع تعطل المركبة بالرياض للوصول إليكم بأسرع وقت ممكن.</li>
                    <li>تحسين جودة الخدمة الفنية المقدمة وقياس مستوى رضا العملاء.</li>
                  </ul>
                </section>

                <section className="space-y-2">
                  <h4 className="text-base font-bold text-white flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-emerald-400" />
                    حماية البيانات وعدم المشاركة مع جهات خارجية
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-450 bg-slate-950 p-4 rounded-2xl border border-slate-800">
                    نحن نلتزم التزاماً صارماً بألا نقوم ببيع، أو تأجير، أو مشاركة، أو مقايضة أي من بياناتكم الشخصية مع أي جهات خارجية أو أطراف تسويقية نهائياً. يتم التعامل مع كافة البيانات كمعلومات سرية محفوظة في خوادم آمنة ومشفرة، ولا تتاح إلا للفني المختص بإصلاح سيارتكم لغرض تنفيذ الخدمة حصراً.
                  </p>
                </section>

                <section className="space-y-2">
                  <h4 className="text-base font-bold text-white flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-emerald-400" />
                    ملفات تعريف الارتباط (Cookies)
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-400">
                    يستخدم هذا الموقع ملفات تعريف ارتباط بسيطة وتقنيات تتبع من جوجل (مثل Google Analytics) لتحليل حركة المرور وتحسين أداء الإعلانات وتجربة الاستخدام، دون جمع أي معلومات تكشف هويتكم الشخصية خارج سياق الإحصاءات العامة للموقع.
                  </p>
                </section>

                <section className="space-y-2">
                  <h4 className="text-base font-bold text-white flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-emerald-400" />
                    حقوقكم وحذف البيانات
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-400">
                    يحق لكم في أي وقت الاستفسار عن بياناتكم المسجلة لدينا أو طلب تعديلها أو حذفها بالكامل من سجلاتنا فوراً. يمكنكم تفعيل هذا الخيار بمجرد الاتصال بنا أو مراسلتنا عبر الواتساب على الرقم الموحد الموضح بالموقع.
                  </p>
                </section>
              </div>
            )}

            {type === "terms" && (
              <div className="space-y-6">
                <section className="space-y-2">
                  <h4 className="text-base font-bold text-white flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-orange-400" />
                    شروط الخدمة العامة
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-400">
                    باستخدامكم لموقعنا أو طلبكم لخدمات صيانة السيارات المتنقلة بالرياض، فإنكم توافقون على الالتزام بالشروط والأحكام المبينة أدناه. يرجى قراءتها بعناية لضمان حقوق الطرفين.
                  </p>
                </section>

                <section className="space-y-2">
                  <h4 className="text-base font-bold text-white flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-orange-400" />
                    طبيعة وموقع تقديم الخدمة
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-400">
                    نحن نقدم ورشة صيانة سيارات متنقلة تعمل ضمن الحدود الجغرافية لمدينة الرياض، المملكة العربية السعودية. نقوم بإصلاح الأعطال عند المنزل أو على الطريق بموجب طلب العميل، مع تعهد العميل بتوفير مكان آمن وقانوني لوقوف الفني والسيارة أثناء الفحص أو الصيانة.
                  </p>
                </section>

                <section className="space-y-2">
                  <h4 className="text-base font-bold text-white flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-orange-400" />
                    سياسة التسعير والشفافية المادية
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-400">
                    حرصاً منا على الشفافية المتكاملة وتجنب أي رسوم مبهمة وفقاً لسياسات التجارة وحقوق المستهلك:
                  </p>
                  <ul className="list-disc list-inside mr-4 text-xs sm:text-sm text-slate-400 space-y-1">
                    <li>يتم الكشف عن تكلفة الفحص المبدئي (الانتقال وتوصيل الكمبيوتر وقراءة الأكواد) وتأكيدها للعميل مسبقاً قبل توجه الورشة إليه.</li>
                    <li>بعد الفحص وتحديد العطل الفعلي، يتم تزويد العميل بتقدير واضح لتكلفة قطع الغيار وأجور اليد الميكانيكية أو الكهربائية قبل البدء في أي عمل إصلاحي.</li>
                    <li>للعميل كامل الحق في قبول أو رفض استكمال عملية الإصلاح بعد معرفة تكلفة قطع الغيار وأجور اليد، مع تحمله لتكلفة الفحص المبدئي والانتقال المتفق عليها مسبقاً فقط.</li>
                  </ul>
                </section>

                <section className="space-y-2">
                  <h4 className="text-base font-bold text-white flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-orange-400" />
                    الضمان وسياسة الاسترجاع لقطع الغيار
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-450 bg-slate-950 p-4 rounded-2xl border border-slate-800">
                    جميع خدماتنا في تركيب القطع وتغيير البطاريات وميكانيكا السيارات تكون مصحوبة بضمان فني معتمد (يختلف مدته بحسب طبيعة القطعة ونوعها، بحد أدنى شهر ويصل لغاية سنة للبطاريات الأصلية المعتمدة). يلتزم الفني بتقديم الفاتورة وسند الضمان للعميل فور إتمام الدفع وتجربة السيارة بنجاح.
                  </p>
                </section>

                <section className="space-y-2">
                  <h4 className="text-base font-bold text-white flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-orange-400" />
                    مسؤوليات العميل ومالك المركبة
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-400">
                    يلتزم العميل بتقديم معلومات صحيحة ودقيقة عن موقعه في الرياض ونوع السيارة، وتجنب طلب الصيانة لسيارة لا يملك حق التصرف بها قانونياً أو لا تملك أوراقاً رسمية سارية، منعاً لأي إشكالات نظامية وقانونية مع الجهات الأمنية.
                  </p>
                </section>
              </div>
            )}

            {type === "disclaimer" && (
              <div className="space-y-6">
                <section className="space-y-2">
                  <h4 className="text-base font-bold text-white flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-blue-400" />
                    بيان الاستقلالية المهنية للورشة
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-450 bg-slate-950 p-4 rounded-2xl border border-slate-800 leading-relaxed">
                    <strong>توضيح هام وحاسم لسياسات جوجل:</strong> نحن "ورشة الرياض المتنقلة" نقدم خدمات صيانة وإصلاح سيارات مستقلة تماماً ومحترفة. نحن <strong>لسنا وكلاء رسميين</strong>، ولسنا تابعين أو مدعومين أو معتمدين رسمياً من قبل أي شركة مصنعة للسيارات (مثل تويوتا، نيسان، فورد، مرسيدس، بي إم دبليو، هيونداي، شيفروليه، كيا أو غيرهم) ولا من وكلائهم المحليين بالمملكة العربية السعودية.
                  </p>
                </section>

                <section className="space-y-2">
                  <h4 className="text-base font-bold text-white flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-blue-400" />
                    استخدام الأسماء والشعارات التجارية
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-400">
                    أي إشارة أو ذكر لأسماء شركات السيارات، علاماتها التجارية، أو موديلاتها على موقعنا الإلكتروني أو نموذج الفحص هو لأغراض إرشادية وتوضيحية بحتة لتوضيح مدى توافق خدماتنا المتنقلة وقدرتنا الفنية على إصلاح هذه الموديلات، ولا يعني بأي حال من الأحوال وجود علاقة تجارية أو تمثيل رسمي للوكالة. نحن ورشة أهلية مستقلة نهدف لتقديم صيانة آمنة بديلة بأسعار ميسرة ومناسبة.
                  </p>
                </section>

                <section className="space-y-2">
                  <h4 className="text-base font-bold text-white flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-blue-400" />
                    توضيح حول الضمانات والمسؤولية
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-400">
                    نحن نضمن جودة العمل وأجور اليد الميكانيكية للقطع التي يتم تركيبها وتغييرها من قبلنا بموجب سند الصيانة والضمان المسلم لكم. لا نتحمل مسؤولية أي أعطال إضافية بالسيارة غير ناتجة مباشرة عن صيانة الورشة المتنقلة أو ناتجة عن خلل مصنعي قديم بالمركبة.
                  </p>
                </section>
              </div>
            )}

          </div>

          {/* Footer of modal */}
          <div className="pt-4 border-t border-slate-800 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-1.5 text-[11px] text-slate-400">
              <CheckCircle className="h-4 w-4 text-emerald-400 shrink-0" />
              <span>مستند معتمد للاستخدام المهني والامتثال القانوني</span>
            </div>
            <button
              onClick={onClose}
              className="px-5 py-2 rounded-xl bg-orange-500 hover:bg-orange-400 text-white font-black text-xs transition-all cursor-pointer shadow-md"
            >
              موافق وإغلاق
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
