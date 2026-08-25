import React from 'react';
import { STUDIO_INFO } from '../../data/mockData';
import {
  Sparkles,
  Calendar,
  Phone,
  ShieldCheck,
  Heart,
  ChevronLeft,
  Camera,
  Layers,
  Award,
  CheckCircle2,
} from 'lucide-react';

interface HeroSectionProps {
  onSelectTab: (tab: string) => void;
  onOpenConsultation: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onSelectTab,
  onOpenConsultation,
}) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#F2F7F4] via-[#F8FAF9] to-white pt-8 pb-16 lg:py-16">
      {/* Decorative Blur Orbs */}
      <div className="absolute top-10 right-10 w-72 h-72 bg-[#9DB9A7]/20 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#D4A373]/15 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Text Content Column */}
          <div className="lg:col-span-7 space-y-6 text-right">
            {/* Trust Pill */}
            <div className="inline-flex items-center gap-2 bg-[#9DB9A7]/20 border border-[#9DB9A7]/40 shadow-xs px-4 py-1.5 rounded-full text-xs font-semibold text-[#2D3A33]">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#3E604F] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#3E604F]"></span>
              </span>
              <span>آتلیه تخصصی کودک، نوزاد و بارداری تهران | سیلن کیدز</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-4xl xl:text-5xl font-black text-[#2D3A33] leading-tight tracking-tight">
                آتلیه کودک تهران؛
                <span className="block text-[#3E604F] font-extrabold mt-1">
                  عکاسی کودک، نوزاد و بارداری
                </span>
              </h1>
              <p className="text-[#52635A] text-sm sm:text-base leading-relaxed max-w-2xl font-normal">
                در استودیو سیلن کیدز، زیباترین و خالص‌ترین روزهای زندگی فرزندتان را با دکورهای ژورنالی، کمد لباس رایگان، اتاق ایزوله با دمای استاندارد نوزاد و کادر مجرب خانم به تصویر می‌کشیم.
              </p>
            </div>

            {/* Value Highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
              <div className="bg-white/90 backdrop-blur-xs border border-[#DFE8E2] p-3 rounded-2xl shadow-2xs">
                <div className="flex items-center gap-2 text-xs font-bold text-[#2D3A33]">
                  <ShieldCheck className="w-4 h-4 text-[#3E604F] shrink-0" />
                  <span>دمای کنترل‌شده نوزاد</span>
                </div>
                <p className="text-[11px] text-[#52635A] mt-1">اتاق ۲۸ درجه و وسایل استریل</p>
              </div>

              <div className="bg-white/90 backdrop-blur-xs border border-[#DFE8E2] p-3 rounded-2xl shadow-2xs">
                <div className="flex items-center gap-2 text-xs font-bold text-[#2D3A33]">
                  <Sparkles className="w-4 h-4 text-[#D4A373] shrink-0" />
                  <span>آرشیو لباس رایگان</span>
                </div>
                <p className="text-[11px] text-[#52635A] mt-1">لباس بارداری، نوزادی و کودک</p>
              </div>

              <div className="col-span-2 sm:col-span-1 bg-white/90 backdrop-blur-xs border border-[#DFE8E2] p-3 rounded-2xl shadow-2xs">
                <div className="flex items-center gap-2 text-xs font-bold text-[#2D3A33]">
                  <Heart className="w-4 h-4 text-[#3E604F] shrink-0" />
                  <span>دکورهای مدرن و متنوع</span>
                </div>
                <p className="text-[11px] text-[#52635A] mt-1">تولد، دندونی، بوهو و مینیمال</p>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-3">
              <button
                onClick={() => onSelectTab('booking')}
                className="inline-flex items-center gap-2 bg-[#3E604F] hover:bg-[#2E4B3E] text-white px-6 py-3.5 rounded-2xl font-bold text-sm sm:text-base shadow-lg shadow-[#3E604F]/25 active:scale-98 transition"
              >
                <Calendar className="w-5 h-5 text-[#D4A373]" />
                <span>رزرو آنلاین نوبت عکاسی</span>
                <ChevronLeft className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenConsultation}
                className="inline-flex items-center gap-2 bg-white hover:bg-[#F2F7F4] text-[#2D3A33] border border-[#DFE8E2] px-5 py-3.5 rounded-2xl font-bold text-sm sm:text-base transition shadow-xs"
              >
                <Phone className="w-4 h-4 text-[#3E604F]" />
                <span>مشاوره فوری تلفنی و بله</span>
              </button>
            </div>

            {/* Quick Contact snippet */}
            <div className="pt-2 flex items-center gap-4 text-xs text-[#52635A]">
              <div className="flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#3E604F]" />
                <span>پاسخگویی سریع</span>
              </div>
              <span>•</span>
              <a href={`tel:${STUDIO_INFO.phoneLandline}`} className="hover:text-[#2D3A33] transition font-mono">
                {STUDIO_INFO.phoneLandlineDisplay}
              </a>
              <span>•</span>
              <a href={`tel:${STUDIO_INFO.phoneMobile}`} className="hover:text-[#2D3A33] transition font-mono font-bold text-[#3E604F]">
                {STUDIO_INFO.phoneMobileDisplay}
              </a>
            </div>
          </div>

          {/* Visual Showcase Gallery Grid */}
          <div className="lg:col-span-5 relative">
            {/* Mosaic of Studio Real Photos */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 p-2 bg-[#2D3A33]/5 rounded-3xl border border-white/60 shadow-xl backdrop-blur-xs">
              {/* Photo 1: Newborn */}
              <div
                onClick={() => onSelectTab('newborn')}
                className="group relative overflow-hidden rounded-2xl aspect-[4/5] shadow-md cursor-pointer"
              >
                <img
                  src="https://images.unsplash.com/photo-1544126592-807ade215a0b?q=80&w=600&auto=format&fit=crop"
                  alt="آتلیه نوزاد تهران - عکاسی نیوبورن سیلن کیدز"
                  className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex flex-col justify-end p-3 text-white">
                  <span className="text-[10px] bg-white/30 backdrop-blur-xs px-2 py-0.5 rounded-full w-fit mb-1">
                    ۶ تا ۱۵ روزگی
                  </span>
                  <span className="text-xs sm:text-sm font-bold">آتلیه تخصصی نوزاد</span>
                </div>
              </div>

              {/* Photo 2: Cute Toddler */}
              <div
                onClick={() => onSelectTab('kids')}
                className="group relative overflow-hidden rounded-2xl aspect-[4/5] shadow-md cursor-pointer mt-4"
              >
                <img
                  src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=600&auto=format&fit=crop"
                  alt="عکاسی کودک تهران - استودیو کودک سیلن"
                  className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex flex-col justify-end p-3 text-white">
                  <span className="text-[10px] bg-white/30 backdrop-blur-xs px-2 py-0.5 rounded-full w-fit mb-1">
                    دکورهای شاد
                  </span>
                  <span className="text-xs sm:text-sm font-bold">عکاسی تخصصی کودک</span>
                </div>
              </div>

              {/* Photo 3: Birthday / Milestone */}
              <div
                onClick={() => onSelectTab('birthday')}
                className="group relative overflow-hidden rounded-2xl aspect-[4/5] shadow-md cursor-pointer -mt-4"
              >
                <img
                  src="https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=600&auto=format&fit=crop"
                  alt="آتلیه تولد کودک تهران - تم دندونی و کیک اسمش"
                  className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex flex-col justify-end p-3 text-white">
                  <span className="text-[10px] bg-white/30 backdrop-blur-xs px-2 py-0.5 rounded-full w-fit mb-1">
                    تم تولد و دندونی
                  </span>
                  <span className="text-xs sm:text-sm font-bold">جشن ۱ سالگی و کیک اسمش</span>
                </div>
              </div>

              {/* Photo 4: Maternity / Pregnancy */}
              <div
                onClick={() => onSelectTab('pregnancy')}
                className="group relative overflow-hidden rounded-2xl aspect-[4/5] shadow-md cursor-pointer"
              >
                <img
                  src="https://images.unsplash.com/photo-1516585427167-9f4af9627e6c?q=80&w=600&auto=format&fit=crop"
                  alt="آتلیه بارداری تهران - عکاسی دوران بارداری"
                  className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex flex-col justify-end p-3 text-white">
                  <span className="text-[10px] bg-white/30 backdrop-blur-xs px-2 py-0.5 rounded-full w-fit mb-1">
                    لباس حریر رایگان
                  </span>
                  <span className="text-xs sm:text-sm font-bold">آتلیه بارداری و مادرانه</span>
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-4 -left-4 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl border border-[#DFE8E2] shadow-xl flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#9DB9A7]/25 flex items-center justify-center text-[#3E604F]">
                <Award className="w-5 h-5" />
              </div>
              <div className="text-right">
                <p className="text-xs font-bold text-[#2D3A33]">بیش از ۱۰ سال تجربه تخصصی</p>
                <p className="text-[11px] text-[#52635A]">هزاران لبخند ماندگار در سیلن کیدز</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
