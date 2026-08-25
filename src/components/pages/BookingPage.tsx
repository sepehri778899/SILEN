import React, { useState } from 'react';
import { PACKAGES_DATA, STUDIO_INFO } from '../../data/mockData';
import { ServiceCategory } from '../../types';
import { saveBooking } from '../../utils/storage';
import {
  Calendar,
  Clock,
  User,
  Baby,
  Phone,
  Sparkles,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  Heart,
  MessageCircle,
  AlertCircle,
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface BookingPageProps {
  initialPackageName?: string;
  onSelectTab: (tab: string) => void;
}

export const BookingPage: React.FC<BookingPageProps> = ({
  initialPackageName,
  onSelectTab,
}) => {
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);

  // Form States
  const [serviceCategory, setServiceCategory] = useState<ServiceCategory>('kids');
  const [selectedPackage, setSelectedPackage] = useState(
    initialPackageName || 'پکیج پرطرفدار نقره‌ای (شکوفه)'
  );
  const [childName, setChildName] = useState('');
  const [childAge, setChildAge] = useState('');
  const [childGender, setChildGender] = useState<'girl' | 'boy' | 'pregnant'>('girl');
  const [parentName, setParentName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [preferredDate, setPreferredDate] = useState('۱۴۰۳/۱۲/۲۵');
  const [preferredTime, setPreferredTime] = useState('۱۵:۰۰ الی ۱۶:۳۰');
  const [needStudioWardrobe, setNeedStudioWardrobe] = useState(true);
  const [themePreference, setThemePreference] = useState('تم دندونی و تم چوبی وینتیج');
  const [notes, setNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [trackingCode, setTrackingCode] = useState('');

  const servicesList: { id: ServiceCategory; title: string; desc: string; icon: string }[] = [
    { id: 'newborn', title: 'آتلیه نوزاد (نیوبورن)', desc: '۶ تا ۱۵ روزگی، اتاق ۲۸ درجه و پوزهای خواب آرام', icon: '🍼' },
    { id: 'pregnancy', title: 'آتلیه بارداری و مادرانه', desc: 'هفته ۲۸ تا ۳۴ با لباس‌های حریر رایگان و عکس با همسر', icon: '🌸' },
    { id: 'kids', title: 'عکاسی کودک و پرتره', desc: 'سنین ۳ ماه تا ۷ سال با دکورهای تعاملی و جذاب', icon: '🎈' },
    { id: 'birthday', title: 'عکاسی تولد، دندونی و کیک اسمش', desc: 'تم‌های یک سالگی، دکور دندونی و بادکنک‌آرایی', icon: '🎂' },
    { id: 'family', title: 'عکاسی خانوادگی', desc: 'پرتره گرم پدر، مادر و فرزندان با هماهنگی استایل', icon: '👨‍👩‍👧‍👦' },
    { id: 'portrait', title: 'پرتره اختصاصی کودک / وینتیج', desc: 'ژست‌های کلاسیک با صندلی چرم، کلاه و اکسسوری', icon: '🎩' },
  ];

  const timeSlots = [
    '۱۰:۰۰ الی ۱۱:۳۰ صبح',
    '۱۱:۳۰ الی ۱۳:۰۰ ظهر',
    '۱۵:۰۰ الی ۱۶:۳۰ عصر',
    '۱۶:۳۰ الی ۱۸:۰۰ عصر',
    '۱۸:۰۰ الی ۱۹:۳۰ غروب',
  ];

  const serviceCategoryFaMap: Record<ServiceCategory, string> = {
    pregnancy: 'عکاسی بارداری',
    newborn: 'عکاسی نوزادی',
    kids: 'عکاسی کودک',
    family: 'عکاسی خانوادگی',
    birthday: 'عکاسی تولد و دندونی',
    portrait: 'پرتره اختصاصی',
  };

  const handleFinalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!childName.trim() || !parentName.trim() || !phoneNumber.trim()) {
      alert('لطفاً فیلدهای الزامی (نام والد، نام کودک و شماره تماس) را تکمیل نمایید.');
      return;
    }

    const newBooking = saveBooking({
      childName,
      childAge: childAge || 'مشخص نشده',
      childGender,
      parentName,
      phoneNumber,
      serviceCategory,
      serviceNameFa: serviceCategoryFaMap[serviceCategory],
      selectedPackage,
      preferredDate,
      preferredTime,
      needStudioWardrobe,
      themePreference,
      notes,
    });

    setTrackingCode(newBooking.trackingCode);
    setIsSubmitted(true);
    confetti({ particleCount: 90, spread: 80, origin: { y: 0.55 } });
  };

  const baleDirectMsg = `سلام استودیو سیلن کیدز، من نوبت عکاسی با کد رهگیری ${trackingCode} رزرو کردم.\nنام والد: ${parentName}\nنام و سن کودک: ${childName} (${childAge})\nخدمت: ${serviceCategoryFaMap[serviceCategory]}\nپکیج: ${selectedPackage}\nتاریخ و ساعت: ${preferredDate} - ${preferredTime}\nشماره تماس: ${phoneNumber}`;
  const baleDirectUrl = `https://ble.ir/silenkids?text=${encodeURIComponent(baleDirectMsg)}`;

  return (
    <div className="py-10 space-y-12 max-w-5xl mx-auto px-4 sm:px-6">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#9DB9A7]/25 text-[#3E604F] text-xs font-bold">
          <Calendar className="w-4 h-4 text-[#3E604F]" />
          <span>سامانه رزرواسیون آنلاین استودیو سیلن کیدز</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-black text-[#2D3A33]">
          رزرو نوبت عکاسی نوزاد، کودک و بارداری تهران
        </h1>
        <p className="text-[#52635A] text-xs sm:text-sm">
          مشخصات خود و فرزندتان را ثبت کنید تا تاریخ و ساعت عکاسی برای شما رزرو گردد
        </p>
      </div>

      {isSubmitted ? (
        /* Success Screen */
        <div className="bg-white p-8 sm:p-10 rounded-3xl border border-[#DFE8E2] shadow-xl space-y-6 text-center max-w-2xl mx-auto">
          <div className="w-16 h-16 rounded-full bg-[#9DB9A7]/25 text-[#3E604F] flex items-center justify-center mx-auto animate-bounce">
            <CheckCircle2 className="w-10 h-10 text-[#3E604F]" />
          </div>

          <div className="space-y-2">
            <h2 className="text-xl sm:text-2xl font-black text-[#2D3A33]">
              نوبت عکاسی شما با موفقیت در سیستم ثبت شد!
            </h2>
            <p className="text-xs sm:text-sm text-[#52635A]">
              کد رهگیری اختصاصی رزرو شما:{' '}
              <strong className="text-[#3E604F] font-mono text-lg font-black">{trackingCode}</strong>
            </p>
          </div>

          {/* Booking Summary Box */}
          <div className="bg-[#F8FAF9] p-5 rounded-2xl border border-[#DFE8E2] text-right space-y-2.5 text-xs text-[#2D3A33]">
            <div className="flex justify-between border-b border-[#DFE8E2] pb-2">
              <span className="text-[#3E604F]">نام والد:</span>
              <span className="font-bold text-[#2D3A33]">{parentName}</span>
            </div>
            <div className="flex justify-between border-b border-[#DFE8E2] pb-2">
              <span className="text-[#3E604F]">نام و سن کودک:</span>
              <span className="font-bold text-[#2D3A33]">{childName} ({childAge})</span>
            </div>
            <div className="flex justify-between border-b border-[#DFE8E2] pb-2">
              <span className="text-[#3E604F]">نوع خدمت:</span>
              <span className="font-bold text-[#2D3A33]">{serviceCategoryFaMap[serviceCategory]}</span>
            </div>
            <div className="flex justify-between border-b border-[#DFE8E2] pb-2">
              <span className="text-[#3E604F]">پکیج انتخابی:</span>
              <span className="font-bold text-[#2D3A33]">{selectedPackage}</span>
            </div>
            <div className="flex justify-between border-b border-[#DFE8E2] pb-2">
              <span className="text-[#3E604F]">تاریخ و ساعت نوبت:</span>
              <span className="font-bold text-[#3E604F]">{preferredDate} - {preferredTime}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#3E604F]">شماره تماس:</span>
              <span className="font-bold font-mono text-[#2D3A33]">{phoneNumber}</span>
            </div>
          </div>

          {/* Direct Bale messenger button */}
          <div className="space-y-3 pt-2">
            <a
              href={baleDirectUrl}
              target="_blank"
              rel="noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 bg-[#00a859] hover:bg-[#008f4c] text-white py-3.5 px-4 rounded-2xl text-xs sm:text-sm font-bold shadow-md transition"
            >
              <MessageCircle className="w-4 h-4" />
              <span>ارسال اطلاعات نوبت به پیام‌رسان بله آتلیه سیلن</span>
            </a>

            <div className="flex items-center justify-center gap-2 text-xs text-[#52635A]">
              <ShieldCheck className="w-4 h-4 text-[#3E604F]" />
              <span>همکاران ما جهت هماهنگی نهایی ظرف چند ساعت آینده تماس می‌گیرند.</span>
            </div>

            <button
              onClick={() => {
                setIsSubmitted(false);
                setStep(1);
              }}
              className="text-xs text-[#3E604F] hover:text-[#2D3A33] underline block mx-auto pt-2"
            >
              ثبت یک رزرو دیگر
            </button>
          </div>
        </div>
      ) : (
        /* Wizard Form Container */
        <div className="bg-white rounded-3xl border border-[#DFE8E2] shadow-md p-6 sm:p-8 space-y-8">
          {/* Step Progress Pills */}
          <div className="flex items-center justify-between border-b border-[#DFE8E2] pb-6 gap-2">
            {[
              { num: 1, label: '۱. نوع خدمت' },
              { num: 2, label: '۲. انتخاب پکیج' },
              { num: 3, label: '۳. مشخصات کودک و والد' },
              { num: 4, label: '۴. تاریخ و زمان' },
            ].map((s) => (
              <div
                key={s.num}
                onClick={() => {
                  if (s.num < step) setStep(s.num as any);
                }}
                className={`flex items-center gap-2 text-xs sm:text-sm font-bold cursor-pointer transition ${
                  step === s.num
                    ? 'text-[#2D3A33]'
                    : step > s.num
                    ? 'text-[#3E604F]'
                    : 'text-[#52635A]/50'
                }`}
              >
                <div
                  className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold ${
                    step === s.num
                      ? 'bg-[#3E604F] text-white'
                      : step > s.num
                      ? 'bg-[#9DB9A7]/25 text-[#3E604F]'
                      : 'bg-[#F2F7F4] text-[#52635A]/60'
                  }`}
                >
                  {s.num}
                </div>
                <span className="hidden md:inline">{s.label}</span>
              </div>
            ))}
          </div>

          {/* STEP 1: SERVICE CATEGORY */}
          {step === 1 && (
            <div className="space-y-6 animate-in fade-in duration-200 text-right">
              <div className="space-y-1">
                <h3 className="text-base font-bold text-[#2D3A33]">
                  مرحله اول: نوع خدمات عکاسی را انتخاب فرمایید
                </h3>
                <p className="text-xs text-[#52635A]">
                  با انتخاب هر بخش، دکورها و پکیج‌های متناسب نمایش داده می‌شوند
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {servicesList.map((srv) => (
                  <div
                    key={srv.id}
                    onClick={() => setServiceCategory(srv.id)}
                    className={`p-4 rounded-2xl border-2 cursor-pointer transition flex flex-col justify-between space-y-3 ${
                      serviceCategory === srv.id
                        ? 'border-[#9DB9A7] bg-[#9DB9A7]/15 shadow-xs'
                        : 'border-[#DFE8E2] hover:border-[#3E604F]/40 bg-[#F8FAF9]'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{srv.icon}</span>
                      <h4 className="text-sm font-bold text-[#2D3A33]">{srv.title}</h4>
                    </div>
                    <p className="text-xs text-[#52635A] leading-relaxed">{srv.desc}</p>
                  </div>
                ))}
              </div>

              <div className="flex justify-end pt-4">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="inline-flex items-center gap-2 bg-[#3E604F] hover:bg-[#2E4B3E] text-white px-6 py-3 rounded-2xl font-bold text-xs sm:text-sm transition shadow-md shadow-[#3E604F]/20"
                >
                  <span>مرحله بعد: انتخاب پکیج</span>
                  <ChevronLeft className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: PACKAGE SELECTION */}
          {step === 2 && (
            <div className="space-y-6 animate-in fade-in duration-200 text-right">
              <div className="space-y-1">
                <h3 className="text-base font-bold text-[#2D3A33]">
                  مرحله دوم: پکیج عکاسی مدنظرتان را انتخاب فرمایید
                </h3>
                <p className="text-xs text-[#52635A]">
                  شما می‌توانید بعد از جلسه عکاسی نیز چاپ شاسی یا آلبوم اضافی به پکیج خود اضافه کنید
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {PACKAGES_DATA.map((pkg) => (
                  <div
                    key={pkg.id}
                    onClick={() => setSelectedPackage(pkg.name)}
                    className={`p-4 rounded-2xl border-2 cursor-pointer transition flex flex-col justify-between space-y-4 ${
                      selectedPackage === pkg.name
                        ? 'border-[#9DB9A7] bg-[#9DB9A7]/15 shadow-xs'
                        : 'border-[#DFE8E2] hover:border-[#3E604F]/40 bg-[#F8FAF9]'
                    }`}
                  >
                    <div className="space-y-2">
                      <h4 className="text-xs font-bold text-[#2D3A33]">{pkg.name}</h4>
                      <div className="text-base font-black text-[#3E604F]">{pkg.price}</div>
                      <p className="text-[11px] text-[#52635A]">{pkg.prints}</p>
                    </div>

                    <div className="text-[11px] text-[#3E604F] pt-2 border-t border-[#DFE8E2]">
                      مدت: {pkg.duration}
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex justify-between pt-4">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="inline-flex items-center gap-1.5 bg-[#F2F7F4] hover:bg-[#DFE8E2] text-[#2D3A33] px-4 py-2.5 rounded-xl font-bold text-xs transition"
                >
                  <ChevronRight className="w-4 h-4" />
                  <span>مرحله قبل</span>
                </button>

                <button
                  type="button"
                  onClick={() => setStep(3)}
                  className="inline-flex items-center gap-2 bg-[#3E604F] hover:bg-[#2E4B3E] text-white px-6 py-3 rounded-2xl font-bold text-xs sm:text-sm transition shadow-md shadow-[#3E604F]/20"
                >
                  <span>مرحله بعد: مشخصات کودک و والدین</span>
                  <ChevronLeft className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: CHILD & PARENT DETAILS */}
          {step === 3 && (
            <div className="space-y-6 animate-in fade-in duration-200 text-right">
              <div className="space-y-1">
                <h3 className="text-base font-bold text-[#2D3A33]">
                  مرحله سوم: اطلاعات کودک و والدین
                </h3>
                <p className="text-xs text-[#52635A]">
                  این اطلاعات به ما در آماده‌سازی دکورها و سایز مناسب لباس‌ها کمک می‌کند
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#2D3A33] mb-1">
                    نام کودک (یا درج 'نوزاد در راه') *
                  </label>
                  <input
                    type="text"
                    required
                    value={childName}
                    onChange={(e) => setChildName(e.target.value)}
                    placeholder="مثال: آریا / مانلی"
                    className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-[#DFE8E2] focus:outline-hidden focus:border-[#3E604F]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#2D3A33] mb-1">
                    سن یا ماهگرد کودک *
                  </label>
                  <input
                    type="text"
                    required
                    value={childAge}
                    onChange={(e) => setChildAge(e.target.value)}
                    placeholder="مثال: ۱۰ روزه / ۱ سالگی / هفته ۳۲ بارداری"
                    className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-[#DFE8E2] focus:outline-hidden focus:border-[#3E604F]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#2D3A33] mb-1">
                    جنسیت کودک / نوع عکاسی
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { id: 'girl', label: 'دختر گل 🌸' },
                      { id: 'boy', label: 'پسر گل 🎈' },
                      { id: 'pregnant', label: 'بارداری 🤰' },
                    ].map((g) => (
                      <button
                        type="button"
                        key={g.id}
                        onClick={() => setChildGender(g.id as any)}
                        className={`py-2 rounded-xl text-xs font-medium border transition ${
                          childGender === g.id
                            ? 'bg-[#3E604F] text-white font-bold border-[#3E604F]'
                            : 'bg-[#F8FAF9] border-[#DFE8E2] text-[#2D3A33]'
                        }`}
                      >
                        {g.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#2D3A33] mb-1">
                    نام و نام خانوادگی والد *
                  </label>
                  <input
                    type="text"
                    required
                    value={parentName}
                    onChange={(e) => setParentName(e.target.value)}
                    placeholder="مثال: خانم الهام رحیمی"
                    className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-[#DFE8E2] focus:outline-hidden focus:border-[#3E604F]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#2D3A33] mb-1">
                    شماره تماس همراه (جهت هماهنگی و پیام‌رسان بله) *
                  </label>
                  <input
                    type="tel"
                    required
                    dir="ltr"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    placeholder="0912xxxxxxx"
                    className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-[#DFE8E2] focus:outline-hidden focus:border-[#3E604F] text-left"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#2D3A33] mb-1">
                    تم و دکورهای مورد علاقه
                  </label>
                  <input
                    type="text"
                    value={themePreference}
                    onChange={(e) => setThemePreference(e.target.value)}
                    placeholder="مثال: تم تولد زیتونی، تم دندونی، تم مینیمال"
                    className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-[#DFE8E2] focus:outline-hidden focus:border-[#3E604F]"
                  />
                </div>
              </div>

              <div className="pt-2">
                <label className="flex items-center gap-2 text-xs text-[#2D3A33] cursor-pointer">
                  <input
                    type="checkbox"
                    checked={needStudioWardrobe}
                    onChange={(e) => setNeedStudioWardrobe(e.target.checked)}
                    className="w-4 h-4 rounded text-[#3E604F] focus:ring-[#3E604F]"
                  />
                  <span>مایلم از کمد لباس و اکسسوری‌های رایگان آتلیه سیلن کیدز استفاده کنم</span>
                </label>
              </div>

              <div className="flex justify-between pt-4">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="inline-flex items-center gap-1.5 bg-[#F2F7F4] hover:bg-[#DFE8E2] text-[#2D3A33] px-4 py-2.5 rounded-xl font-bold text-xs transition"
                >
                  <ChevronRight className="w-4 h-4" />
                  <span>مرحله قبل</span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    if (!childName.trim() || !parentName.trim() || !phoneNumber.trim()) {
                      alert('لطفاً فیلدهای ضروری نام کودک، نام والد و شماره همراه را تکمیل کنید.');
                      return;
                    }
                    setStep(4);
                  }}
                  className="inline-flex items-center gap-2 bg-[#3E604F] hover:bg-[#2E4B3E] text-white px-6 py-3 rounded-2xl font-bold text-xs sm:text-sm transition shadow-md shadow-[#3E604F]/20"
                >
                  <span>مرحله بعد: انتخاب تاریخ و ساعت</span>
                  <ChevronLeft className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 4: DATE, TIME & CONFIRMATION */}
          {step === 4 && (
            <form onSubmit={handleFinalSubmit} className="space-y-6 animate-in fade-in duration-200 text-right">
              <div className="space-y-1">
                <h3 className="text-base font-bold text-[#2D3A33]">
                  مرحله چهارم: انتخاب تاریخ و ساعت نوبت
                </h3>
                <p className="text-xs text-[#52635A]">
                  تاریخ پیشنهادی خود را انتخاب فرمایید (هماهنگی قطعی پس از بررسی تقویم انجام می‌شود)
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#2D3A33] mb-1">
                    تاریخ پیشنهادی شما (شمسی) *
                  </label>
                  <input
                    type="text"
                    required
                    value={preferredDate}
                    onChange={(e) => setPreferredDate(e.target.value)}
                    placeholder="مثال: ۱۴۰۳/۱۲/۲۸ یا روزهای پنجشنبه"
                    className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-[#DFE8E2] focus:outline-hidden focus:border-[#3E604F]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#2D3A33] mb-1">
                    ساعت مدنظر نوبت عکاسی *
                  </label>
                  <select
                    value={preferredTime}
                    onChange={(e) => setPreferredTime(e.target.value)}
                    className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-[#DFE8E2] focus:outline-hidden focus:border-[#3E604F] bg-white text-[#2D3A33]"
                  >
                    {timeSlots.map((slot, i) => (
                      <option key={i} value={slot}>
                        {slot}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-xs font-semibold text-[#2D3A33] mb-1">
                    توضیحات تکمیلی یا درخواست خاص (اختیاری)
                  </label>
                  <textarea
                    rows={2}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="مثال: کودک عادت به خواب بعدازظهر دارد، تمایل به عکاسی با پدربزرگ..."
                    className="w-full text-xs px-3.5 py-2 rounded-xl border border-[#DFE8E2] focus:outline-hidden focus:border-[#3E604F]"
                  ></textarea>
                </div>
              </div>

              {/* Review Summary before submit */}
              <div className="bg-[#F8FAF9] p-4 rounded-2xl border border-[#DFE8E2] space-y-2 text-xs text-[#2D3A33]">
                <div className="font-bold text-[#2D3A33] flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#3E604F]" />
                  <span>خلاصه نوبت در حال رزرو:</span>
                </div>
                <div className="grid grid-cols-2 gap-2 pt-1 text-[11px]">
                  <div>خدمت: <strong>{serviceCategoryFaMap[serviceCategory]}</strong></div>
                  <div>پکیج: <strong>{selectedPackage}</strong></div>
                  <div>والد: <strong>{parentName}</strong></div>
                  <div>کودک: <strong>{childName} ({childAge})</strong></div>
                  <div>تاریخ و ساعت: <strong>{preferredDate} - {preferredTime}</strong></div>
                  <div>تماس: <strong className="font-mono">{phoneNumber}</strong></div>
                </div>
              </div>

              <div className="flex justify-between pt-4">
                <button
                  type="button"
                  onClick={() => setStep(3)}
                  className="inline-flex items-center gap-1.5 bg-[#F2F7F4] hover:bg-[#DFE8E2] text-[#2D3A33] px-4 py-2.5 rounded-xl font-bold text-xs transition"
                >
                  <ChevronRight className="w-4 h-4" />
                  <span>مرحله قبل</span>
                </button>

                <button
                  type="submit"
                  className="inline-flex items-center gap-2 bg-[#3E604F] hover:bg-[#2E4B3E] text-white px-8 py-3.5 rounded-2xl font-bold text-xs sm:text-sm transition shadow-lg shadow-[#3E604F]/25 active:scale-98"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#9DB9A7]" />
                  <span>ثبت نهایی و دریافت کد رهگیری</span>
                </button>
              </div>
            </form>
          )}
        </div>
      )}
    </div>
  );
};
