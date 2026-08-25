import React from 'react';
import { Logo } from './Logo';
import { STUDIO_INFO } from '../../data/mockData';
import {
  Phone,
  MapPin,
  Clock,
  Instagram,
  Send,
  Heart,
  ShieldCheck,
  Sparkles,
  Award,
  Calendar,
  Layers,
} from 'lucide-react';

interface FooterProps {
  onSelectTab: (tab: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectTab }) => {
  const currentYear = new Intl.DateTimeFormat('fa-IR', { year: 'numeric' }).format(new Date());

  const seoKeywords = [
    'آتلیه کودک تهران',
    'آتلیه عکاسی کودک تهران',
    'عکاسی کودک تهران',
    'آتلیه نوزاد تهران',
    'آتلیه عکاسی نوزاد تهران',
    'عکاسی نوزاد تهران',
    'آتلیه بارداری تهران',
    'آتلیه عکاسی بارداری تهران',
    'عکاسی بارداری تهران',
    'آتلیه کودک و نوزاد تهران',
    'آتلیه کودک نوزاد و بارداری تهران',
    'آتلیه تخصصی کودک تهران',
    'آتلیه تخصصی نوزاد تهران',
    'آتلیه تخصصی بارداری تهران',
    'بهترین آتلیه کودک تهران',
    'بهترین آتلیه نوزاد تهران',
    'بهترین آتلیه بارداری تهران',
    'عکاسی خانوادگی تهران',
    'آتلیه خانوادگی تهران',
    'عکاسی خانواده در آتلیه تهران',
    'آتلیه تولد کودک تهران',
    'استودیو سیلن کیدز',
    'Silen Kids',
  ];

  return (
    <footer className="bg-[#24352D] text-[#F8FAF9] pt-16 pb-8 border-t border-[#1C2C25]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-[#31463C]">
          {/* Col 1: About Silen Kids */}
          <div className="space-y-4">
            <div className="bg-white/10 p-3 rounded-2xl inline-block backdrop-blur-xs">
              <Logo size="md" textColor="text-white" />
            </div>
            <p className="text-[#CFDBD5] text-xs sm:text-sm leading-relaxed">
              استودیو عکاسی سیلن کیدز (Silen Kids)؛ مرکز فوق‌تخصصی عکاسی نوزادی، بارداری، کودک و خانوادگی در تهران. ثبت لحظات شیرین و تکرارنشدنی با دکورهای روز دنیا، لباس رایگان و بالاترین استانداردهای بهداشتی.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={STUDIO_INFO.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-white/10 hover:bg-[#e1306c] hover:text-white flex items-center justify-center transition"
                title="اینستاگرام سیلن کیدز"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={STUDIO_INFO.baleUrl}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-white/10 hover:bg-[#00a859] hover:text-white flex items-center justify-center transition text-xs font-bold"
                title="پیام‌رسان بله سیلن کیدز"
              >
                <span>بله</span>
              </a>
              <a
                href={STUDIO_INFO.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-white/10 hover:bg-[#25D366] hover:text-white flex items-center justify-center transition"
                title="واتساپ آتلیه سیلن"
              >
                <Send className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Services Navigation */}
          <div className="space-y-4">
            <h4 className="text-white text-base font-bold flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#9DB9A7]" />
              خدمات تخصصی عکاسی
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#CFDBD5]">
              <li>
                <button
                  onClick={() => onSelectTab('pregnancy')}
                  className="hover:text-[#9DB9A7] transition flex items-center gap-1.5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#9DB9A7]"></span>
                  آتلیه بارداری تهران (عکاسی دوران بارداری)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTab('newborn')}
                  className="hover:text-[#9DB9A7] transition flex items-center gap-1.5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#9DB9A7]"></span>
                  آتلیه نوزاد تهران (عکاسی نیوبورن ۶ تا ۱۵ روز)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTab('kids')}
                  className="hover:text-[#9DB9A7] transition flex items-center gap-1.5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#9DB9A7]"></span>
                  عکاسی کودک تهران (پرتره و تم‌های ماهگرد)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTab('family')}
                  className="hover:text-[#9DB9A7] transition flex items-center gap-1.5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#9DB9A7]"></span>
                  عکاسی خانوادگی تهران (مادر، پدر و کودک)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTab('birthday')}
                  className="hover:text-[#9DB9A7] transition flex items-center gap-1.5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#9DB9A7]"></span>
                  آتلیه تولد کودک تهران، کیک اسمش و دندونی
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTab('print-order')}
                  className="hover:text-[#9DB9A7] transition flex items-center gap-1.5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#9DB9A7]"></span>
                  سفارش آنلاین چاپ عکس، شاسی و آلبوم ژورنال
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Quick Links & Safety */}
          <div className="space-y-4">
            <h4 className="text-white text-base font-bold flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#9DB9A7]" />
              ویژگی‌ها و دسترسی سریع
            </h4>
            <div className="bg-[#1C2C25]/70 p-3.5 rounded-xl border border-[#31463C] space-y-2 text-xs text-[#CFDBD5]">
              <div className="flex items-center gap-2 text-[#9DB9A7] font-medium">
                <ShieldCheck className="w-4 h-4 shrink-0 text-[#9DB9A7]" />
                <span>اتاق ایزوله و دمای کنترل‌شده ویژه نوزاد</span>
              </div>
              <div className="flex items-center gap-2 text-[#D4A373] font-medium">
                <Sparkles className="w-4 h-4 shrink-0 text-[#D4A373]" />
                <span>کمد لباس و اکسسوری رایگان بارداری و کودک</span>
              </div>
              <div className="flex items-center gap-2 text-[#F8FAF9] font-medium">
                <Heart className="w-4 h-4 shrink-0 text-[#9DB9A7]" />
                <span>کادر مجرب خانم و حفظ کامل حریم خصوصی</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 text-xs">
              <button
                onClick={() => onSelectTab('packages')}
                className="px-3 py-1.5 rounded-lg bg-[#31463C] hover:bg-[#3E564A] transition text-[#F8FAF9]"
              >
                پکیج‌ها و تعرفه‌ها
              </button>
              <button
                onClick={() => onSelectTab('portfolio')}
                className="px-3 py-1.5 rounded-lg bg-[#31463C] hover:bg-[#3E564A] transition text-[#F8FAF9]"
              >
                نمونه کارها
              </button>
              <button
                onClick={() => onSelectTab('booking')}
                className="px-3 py-1.5 rounded-lg bg-[#3E604F] hover:bg-[#486F5C] transition text-white font-bold"
              >
                رزرو نوبت
              </button>
              <button
                onClick={() => onSelectTab('blog')}
                className="px-3 py-1.5 rounded-lg bg-[#31463C] hover:bg-[#3E564A] transition text-[#F8FAF9]"
              >
                وبلاگ و راهنما
              </button>
            </div>
          </div>

          {/* Col 4: Contact & Location */}
          <div className="space-y-4">
            <h4 className="text-white text-base font-bold flex items-center gap-2">
              <Phone className="w-4 h-4 text-[#9DB9A7]" />
              اطلاعات تماس و نشانی
            </h4>
            <div className="space-y-3 text-xs sm:text-sm text-[#CFDBD5]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#9DB9A7] shrink-0 mt-1" />
                <span>{STUDIO_INFO.address}</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#9DB9A7] shrink-0" />
                <a href={`tel:${STUDIO_INFO.phoneLandline}`} className="hover:text-white transition font-mono text-sm">
                  {STUDIO_INFO.phoneLandlineDisplay}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#9DB9A7] animate-pulse shrink-0"></span>
                <span>همراه و مشاوره: </span>
                <a href={`tel:${STUDIO_INFO.phoneMobile}`} className="hover:text-white transition font-mono font-bold text-sm text-[#9DB9A7]">
                  {STUDIO_INFO.phoneMobileDisplay}
                </a>
              </div>

              <div className="flex items-start gap-2.5 pt-1 text-xs text-[#8DA697]">
                <Clock className="w-4 h-4 text-[#8DA697] shrink-0 mt-0.5" />
                <span>{STUDIO_INFO.workingHours}</span>
              </div>
            </div>
          </div>
        </div>

        {/* SEO Keyword Cluster Cloud */}
        <div className="py-8 border-b border-[#31463C]">
          <div className="text-xs text-[#CFDBD5] mb-3 font-medium flex items-center gap-2">
            <Layers className="w-3.5 h-3.5 text-[#9DB9A7]" />
            <span>کلمات کلیدی برتر استودیو سیلن کیدز تهران:</span>
          </div>
          <div className="flex flex-wrap gap-2 text-[11px] text-[#F8FAF9]">
            {seoKeywords.map((kw, idx) => (
              <span
                key={idx}
                className="bg-[#1C2C25]/80 hover:bg-[#31463C] px-2.5 py-1 rounded-md transition cursor-default border border-[#31463C]"
              >
                {kw}
              </span>
            ))}
          </div>
        </div>

        {/* Copyright & Privacy Notice */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8DA697]">
          <p>© {currentYear} تمامی حقوق مادی و معنوی متعلق به استودیو کودک سیلن (Silen Kids) می‌باشد.</p>
          <div className="flex items-center gap-2 text-[#8DA697]">
            <span>آتلیه تخصصی کودک، نوزاد و بارداری تهران</span>
            <span>•</span>
            <span className="text-[#9DB9A7]">silenkids.ir</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
