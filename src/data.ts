/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Service, Symptom, Neighborhood, Testimonial, FAQ } from './types';

export const CONTACT_PHONE = "+966554307219"; // Riyadh Mobile Workshop direct line
export const WHATSAPP_PHONE = "966554307219"; // WhatsApp business API formatted

export const servicesData: Service[] = [
  {
    id: "computer",
    title: "فحص الكمبيوتر وبرمجة السيارات",
    description: "فحص دقيق لكافة الحساسات والكمبيوترات وأعطال الماكينة والقير مع برمجة متطورة عند موقعك.",
    iconName: "Cpu",
    features: [
      "قراءة وحذف الأكواد (تشيك إنجن)",
      "برمجة الحساسات والأنظمة الإلكترونية",
      "فحص القير والمحرك والفرامل ABS",
      "تقرير مفصل بحالة السيارة والأعطال"
    ]
  },
  {
    id: "mechanics",
    title: "إصلاح الميكانيكا المتنقل",
    description: "معالجة الأعطال الميكانيكية للسيارات، من تهريب الزيوت والمساعدات إلى السيرات والمكابح.",
    iconName: "Wrench",
    features: [
      "إصلاح الفرامل (الفحمات والهوبات)",
      "حل مشاكل تهريب السوائل والزيوت والمبرد",
      "تغيير سيور وبواجي وفلاتر المحرك",
      "صيانة نظام التوجيه والمساعدات والتعليق"
    ]
  },
  {
    id: "electrical",
    title: "إصلاح الكهرباء والتكييف",
    description: "تشخيص وإصلاح كافة المشاكل الكهربائية بالسيارة، وتكييف الهواء والتبريد الفوري.",
    iconName: "Zap",
    features: [
      "إصلاح السلف (المارش) والدينامو",
      "فحص وصيانة التوصيلات والعلب الكهربائية",
      "شحن فريون أصلي وإصلاح الكمبروسر",
      "صيانة أنظمة الإضاءة والتحكم الداخلي"
    ]
  },
  {
    id: "battery",
    title: "تغيير بطاريات السيارات مع الضمان",
    description: "توصيل وتركيب بطاريات سيارات أصلية مع ضمان معتمد ممتد. فحص الدينامو مجاناً.",
    iconName: "BatteryCharging",
    features: [
      "توصيل وتركيب فوري عند موقعك",
      "بطاريات أصلية (هانكوك، إيه سي ديلكو، إلخ)",
      "ضمان حقيقي يبدأ من 12 شهراً",
      "فحص دورة الشحن مجاناً مع التركيب"
    ]
  }
];

export const symptomsData: Symptom[] = [
  {
    id: "sym_battery",
    label: "السيارة لا تعمل تماماً (أو تصدر صوت طقطقة عند التشغيل)",
    description: "غالباً ما تكون المشكلة ضعفاً في البطارية أو عطلاً في الدينامو أو السلف.",
    recommendedServiceId: "battery",
    iconType: "battery"
  },
  {
    id: "sym_engine_light",
    label: "ظهور لمبة التحذير (Check Engine) في الطبلون",
    description: "يتطلب فحص كمبيوتر لقراءة أكواد العطل ومعرفة الحساس التالف بدقة.",
    recommendedServiceId: "computer",
    iconType: "engine"
  },
  {
    id: "sym_heat_leak",
    label: "حرارة مرتفعة في المحرك أو تهريب زيت/ماء",
    description: "يشير إلى مشكلة ميكانيكية بنظام التبريد (الرديتر) أو طرمبة الماء أو تهريب في الخراطيش.",
    recommendedServiceId: "mechanics",
    iconType: "temperature"
  },
  {
    id: "sym_ac_issue",
    label: "المكيف لا يبرد أو دفع الهواء ضعيف جداً",
    description: "قد يتطلب شحن فريون، إصلاح تهريب، صيانة المروحة، أو فحص فيوزات التكييف.",
    recommendedServiceId: "electrical",
    iconType: "ac"
  },
  {
    id: "sym_general",
    label: "أصوات غريبة أثناء المشي أو رجّة في الفرامل",
    description: "مشاكل ميكانيكية عامة قد تخص الفحمات، الهوبات، المساعدات، أو كراسي المكينة.",
    recommendedServiceId: "mechanics",
    iconType: "general"
  }
];

export const neighborhoodsData: Neighborhood[] = [
  // North
  { name: "الياسمين", region: "north", timeMin: 20 },
  { name: "الملقا", region: "north", timeMin: 25 },
  { name: "حطين", region: "north", timeMin: 25 },
  { name: "الصحافة", region: "north", timeMin: 20 },
  { name: "العقيق", region: "north", timeMin: 22 },
  { name: "النفل", region: "north", timeMin: 20 },
  { name: "الغدير", region: "north", timeMin: 18 },
  { name: "العارض", region: "north", timeMin: 30 },
  { name: "النرجس", region: "north", timeMin: 28 },
  
  // East
  { name: "النسيم", region: "east", timeMin: 25 },
  { name: "الروضة", region: "east", timeMin: 20 },
  { name: "الحمراء", region: "east", timeMin: 22 },
  { name: "اليرموك", region: "east", timeMin: 25 },
  { name: "الخليج", region: "east", timeMin: 24 },
  { name: "السلي", region: "east", timeMin: 30 },
  { name: "قرطبة", region: "east", timeMin: 22 },
  { name: "الربوة", region: "east", timeMin: 18 },
  { name: "الملز", region: "east", timeMin: 20 },
  
  // West
  { name: "البديعة", region: "west", timeMin: 22 },
  { name: "لبن", region: "west", timeMin: 28 },
  { name: "طويق", region: "west", timeMin: 30 },
  { name: "العريجاء", region: "west", timeMin: 20 },
  { name: "السويدي", region: "west", timeMin: 22 },
  { name: "شبرا", region: "west", timeMin: 20 },
  { name: "جامعة الملك سعود", region: "west", timeMin: 15 },
  
  // South & Central
  { name: "الشفا", region: "south_central", timeMin: 30 },
  { name: "العزيزية", region: "south_central", timeMin: 28 },
  { name: "البطحاء", region: "south_central", timeMin: 25 },
  { name: "الدار البيضاء", region: "south_central", timeMin: 35 },
  { name: "المربع", region: "south_central", timeMin: 15 },
  { name: "الوزارات", region: "south_central", timeMin: 18 },
  { name: "العليا", region: "south_central", timeMin: 15 }
];

export const testimonialsData: Testimonial[] = [
  {
    id: "1",
    name: "أبو فهد العتيبي",
    carModel: "تويوتا لاندكروزر 2021",
    rating: 5,
    comment: "تعطلت سيارتي على طريق الدائري الشمالي بالرياض والبطارية ماتت تماماً. اتصلت بالورشة وخلال 25 دقيقة فقط وصلني الفني أبو يوسف ومعه بطارية جديدة ركبها وفحص الدينامو بـ 5 دقائق. سرعة وأمانة يشكرون عليها جداً!",
    date: "أمس",
    neighborhood: "حي الياسمين"
  },
  {
    id: "2",
    name: "عبد الرحمن العنزي",
    carModel: "هيونداي سوناتا 2019",
    rating: 5,
    comment: "ظهرت لمبة المكينة وبدأت السيارة ترجّ وتطفي. جاء الفني فحص كمبيوتر وطلع الحساس خربان، وفره لي من الوكالة وركبه عند باب بيتي ووفر علي سطحة وتعب الورش والانتظار بالصناعية. سعرهم ممتاز جداً مقارنة بالراحة والخدمة.",
    date: "قبل 3 أيام",
    neighborhood: "حي الروضة"
  },
  {
    id: "3",
    name: "م. خالد الرشيد",
    carModel: "مرسيدس E300 2020",
    rating: 5,
    comment: "خدمة الكهرباء والتكييف عندهم جبارة. مكيف المرسيدس فجأة صار حار، فحصوا الكمبروسر والكهرباء وعملوا شحن فريون أصلي مع كشف تسريب بمهنية عالية. صراحة أنصح ببرنامجهم المتكامل.",
    date: "قبل أسبوع",
    neighborhood: "حي الملقا"
  },
  {
    id: "4",
    name: "أم سارة",
    carModel: "مازدا 6 2022",
    rating: 5,
    comment: "أكثر ما أعجبني الالتزام بالوقت والاحترام والخدمة الموثوقة بدون لف ودوران. سووا لي فحص للكهرباء وتغيير فحمات الفرامل أمام المنزل والنتيجة ممتازة. ريحتوني من مشاوير الصناعية وتعبها.",
    date: "قبل أسبوعين",
    neighborhood: "حي السويدي"
  }
];

export const faqsData: FAQ[] = [
  {
    question: "كم يستغرق الفني للوصول إلى موقعي في الرياض؟",
    answer: "نلتزم بالاستجابة السريعة، وعادةً ما يستغرق الفني للوصول إليك من 20 إلى 35 دقيقة حسب موقعك وحركة المرور في الرياض. يتواجد فنيونا في مختلف مناطق الرياض (شمال، شرق، غرب، جنوب، ووسط) لضمان أسرع خدمة."
  },
  {
    question: "هل توفرون ضماناً على القطع والإصلاح؟",
    answer: "نعم، كافة خدماتنا مسبوقة بضمان معتمد. بالنسبة للبطاريات، نوفر بطاريات أصلية بضمان يبدأ من 12 شهراً إلى سنتين. أما الإصلاحات الميكانيكية والكهربائية فلها ضمان تشغيلي يضمن سلامة الخدمة."
  },
  {
    question: "هل أسعار الورشة المتنقلة أغلى من الورش العادية بالصناعية؟",
    answer: "أسعارنا منافسة ومدروسة جداً. نحن نوفر عليك تكلفة السطحة (الرافعة) التي قد تكلفك من 100 إلى 200 ريال لنقل سيارتك للصناعية، بالإضافة لجهدك ووقتك الضائع. أسعارنا واضحة ونخبرك بالتكلفة التقديرية مسبقاً قبل التحرك."
  },
  {
    question: "هل تعملون على مدار 24 ساعة وفي عطلة نهاية الأسبوع؟",
    answer: "نعم، خدمات الطوارئ لدينا متوفرة على مدار الساعة وطوال أيام الأسبوع (24/7). يمكنك الاتصال بنا في أي وقت بالليل أو النهار، وخصوصاً لحالات تعطل البطاريات المفاجئ أو انقطاع السيارة بالطريق."
  },
  {
    question: "ما هي ماركات السيارات التي تدعمون صيانتها؟",
    answer: "ندعم صيانة وإصلاح كافة ماركات السيارات المنتشرة في السعودية، بما في ذلك السيارات اليابانية (تويوتا، نيسان، مازدا)، الكورية (هيونداي، كيا)، الأمريكية (فورد، جي إم سي، شفروليه)، والأوروبية (مرسيدس، بي إم دبليو، أودي)، بالإضافة للسيارات الصينية الحديثة."
  }
];
