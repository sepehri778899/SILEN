import React from 'react';
import { STUDIO_INFO } from '../../data/mockData';
import {
  ShieldCheck,
  Award,
  Sparkles,
  Heart,
  Users,
  Camera,
  Shirt,
  ThermometerSun,
  MapPin,
  Clock,
  Phone,
} from 'lucide-react';

interface AboutPageProps {
  onSelectTab: (tab: string) => void;
  onOpenConsultation: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onSelectTab, onOpenConsultation }) => {
  return (
    <div className="py-10 space-y-16 max-w-7xl mx-auto px-4 sm:px-6">
      {/* Header / Intro */}
      <section className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#9DB9A7]/25 text-[#3E604F] text-xs font-bold">
          <Award className="w-4 h-4 text-[#3E604F]" />
          <span>درباره استودیو تخصصی سیلن کیدز</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-[#2D3A33] leading-tight">
          داستان خلق آتلیه سیلن؛ اشتیاق به ثبت ناب‌ترین لحظات کودکی
        </h1>
        <p className="text-[#52635A] text-sm sm:text-base leading-relaxed">
          مرکز تخصصی عکاسی نوزاد، کودک و بارداری در تهران با رویکردی مدرن، مبتنی بر احترام به بهداشت، امنیت نوزاد و حریم خصوصی خانواده‌ها.
        </p>
      </section>

      {/* Story & Philosophy */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div className="space-y-4 text-right">
          <h2 className="text-xl sm:text-2xl font-black text-[#2D3A33]">
            چرا نام «سیلن کیدز» را برگزیدیم؟
          </h2>
          <p className="text-xs sm:text-sm text-[#52635A] leading-relaxed">
            «سیلن» در زبان و ادبیات به معنای آرامش، نرمی و نوای دل‌انگیز است. ما بر این باوریم که زیباترین عکس‌های یک نوزاد یا کودک، در لحظاتی ثبت می‌شوند که او در نهایت آرامش، امنیت و بدون هیچ اضطرابی در حال لذت بردن از لحظه است.
          </p>
          <p className="text-xs sm:text-sm text-[#52635A] leading-relaxed">
            استودیو سیلن کیدز در تهران با هدف ایجاد محیطی امن، گرم و کاملاً استریل برای نوزادان چند روزه و مادران باردار تاسیس شد. تیم عکاسان، نورپردازان و ادیتورهای ما همگی از بانوان متخصص و باحوصله در زمینه رفتارشناسی کودک و عکاسی نوزاد هستند.
          </p>

          <div className="pt-2 grid grid-cols-2 gap-3">
            <div className="bg-[#F8FAF9] p-3.5 rounded-2xl border border-[#DFE8E2]">
              <span className="text-2xl font-black text-[#3E604F] font-mono">10+</span>
              <p className="text-xs font-bold text-[#2D3A33] mt-1">سال سابقه عکاسی تخصصی</p>
            </div>
            <div className="bg-[#F8FAF9] p-3.5 rounded-2xl border border-[#DFE8E2]">
              <span className="text-2xl font-black text-[#3E604F] font-mono">5000+</span>
              <p className="text-xs font-bold text-[#2D3A33] mt-1">خاطره ماندگار ثبت شده</p>
            </div>
          </div>
        </div>

        <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-[4/3] bg-[#F8FAF9] border border-[#DFE8E2]">
          <img
            src="https://images.unsplash.com/photo-1544126592-807ade215a0b?q=80&w=1000&auto=format&fit=crop"
            alt="استودیو کودک سیلن کیدز"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Facilities & Sanitary Standards */}
      <section className="bg-[#F8FAF9] p-8 sm:p-12 rounded-3xl border border-[#DFE8E2] space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="text-xl sm:text-2xl font-black text-[#2D3A33]">
            امکانات و تجهیزات اختصاصی استودیو سیلن
          </h2>
          <p className="text-xs sm:text-sm text-[#52635A]">
            همه چیز برای رفاه شما و فرشته‌های دلبندتان مهیاست
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-right">
          {STUDIO_INFO.facilities.map((fac, idx) => (
            <div
              key={idx}
              className="bg-white p-5 rounded-2xl border border-[#DFE8E2] shadow-2xs space-y-2 flex items-start gap-3"
            >
              <div className="p-2 rounded-xl bg-[#9DB9A7]/25 text-[#3E604F] shrink-0 mt-0.5">
                <Sparkles className="w-4 h-4 text-[#3E604F]" />
              </div>
              <p className="text-xs sm:text-sm text-[#52635A] leading-relaxed font-medium">
                {fac}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-[#3E604F] text-white p-8 sm:p-12 rounded-3xl text-center space-y-5 shadow-xl shadow-[#3E604F]/20">
        <h2 className="text-2xl sm:text-3xl font-black">
          به جمع هزاران خانواده راضی سیلن کیدز بپیوندید
        </h2>
        <p className="text-xs sm:text-sm text-[#F8FAF9]/90 max-w-xl mx-auto leading-relaxed">
          برای مشاوره در مورد روزهای طلایی نوزادی یا هماهنگی جلسه بارداری و تولد، همین حالا با ما در ارتباط باشید.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <button
            onClick={() => onSelectTab('booking')}
            className="bg-[#F8FAF9] hover:bg-white text-[#2D3A33] px-6 py-3 rounded-2xl font-bold text-xs sm:text-sm shadow-md transition"
          >
            رزرو آنلاین نوبت
          </button>
          <button
            onClick={onOpenConsultation}
            className="bg-white/20 hover:bg-white/30 text-white px-6 py-3 rounded-2xl font-bold text-xs sm:text-sm backdrop-blur-xs transition"
          >
            مشاوره رایگان تلفنی
          </button>
        </div>
      </section>
    </div>
  );
};
