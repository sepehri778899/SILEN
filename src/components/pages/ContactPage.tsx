import React from 'react';
import { STUDIO_INFO } from '../../data/mockData';
import { MapAndContactSection } from '../home/MapAndContactSection';
import {
  Phone,
  MapPin,
  Clock,
  Instagram,
  Send,
  MessageCircle,
  Sparkles,
  Building,
  Car,
} from 'lucide-react';

export const ContactPage: React.FC = () => {
  return (
    <div className="py-10 space-y-12 max-w-7xl mx-auto px-4 sm:px-6">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#9DB9A7]/25 text-[#3E604F] text-xs font-bold">
          <Phone className="w-4 h-4 text-[#3E604F]" />
          <span>ارتباط با استودیو سیلن کیدز</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-[#2D3A33]">
          تماس با ما و مراجعه حضوری به آتلیه سیلن
        </h1>
        <p className="text-[#52635A] text-sm leading-relaxed">
          برای مشاوره اختصاصی پکیج‌ها، رزرو نوبت و مشاهده آلبوم‌های ژورنالی در خدمت شما هستیم
        </p>
      </div>

      {/* Quick Direct Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-right">
        <div className="bg-white p-5 rounded-3xl border border-[#DFE8E2] shadow-2xs space-y-2">
          <div className="w-10 h-10 rounded-2xl bg-[#9DB9A7]/25 text-[#3E604F] flex items-center justify-center">
            <Phone className="w-5 h-5" />
          </div>
          <h3 className="text-xs font-bold text-[#2D3A33]">تلفن مشاوره و همراه</h3>
          <a
            href={`tel:${STUDIO_INFO.phoneMobile}`}
            className="text-sm font-black text-[#3E604F] font-mono block hover:underline"
          >
            {STUDIO_INFO.phoneMobileDisplay}
          </a>
          <p className="text-[11px] text-[#52635A]">پاسخگویی ۱۰ صبح الی ۱۹ عصر</p>
        </div>

        <div className="bg-white p-5 rounded-3xl border border-[#DFE8E2] shadow-2xs space-y-2">
          <div className="w-10 h-10 rounded-2xl bg-[#F8FAF9] text-[#2D3A33] flex items-center justify-center border border-[#DFE8E2]">
            <Phone className="w-5 h-5" />
          </div>
          <h3 className="text-xs font-bold text-[#2D3A33]">تلفن ثابت استودیو</h3>
          <a
            href={`tel:${STUDIO_INFO.phoneLandline}`}
            className="text-sm font-black text-[#2D3A33] font-mono block hover:underline"
          >
            {STUDIO_INFO.phoneLandlineDisplay}
          </a>
          <p className="text-[11px] text-[#52635A]">پاسخگویی در ساعات کاری آتلیه</p>
        </div>

        <div className="bg-white p-5 rounded-3xl border border-[#DFE8E2] shadow-2xs space-y-2">
          <div className="w-10 h-10 rounded-2xl bg-emerald-50 text-[#00a859] flex items-center justify-center">
            <MessageCircle className="w-5 h-5" />
          </div>
          <h3 className="text-xs font-bold text-[#2D3A33]">پیام‌رسان بله</h3>
          <a
            href={STUDIO_INFO.baleUrl}
            target="_blank"
            rel="noreferrer"
            className="text-sm font-bold text-[#00a859] block hover:underline"
          >
            @{STUDIO_INFO.bale}
          </a>
          <p className="text-[11px] text-[#52635A]">مشاوره آنلاین و ارسال نمونه‌کار</p>
        </div>

        <div className="bg-white p-5 rounded-3xl border border-[#DFE8E2] shadow-2xs space-y-2">
          <div className="w-10 h-10 rounded-2xl bg-pink-50 text-[#e1306c] flex items-center justify-center">
            <Instagram className="w-5 h-5" />
          </div>
          <h3 className="text-xs font-bold text-[#2D3A33]">صفحه اینستاگرام</h3>
          <a
            href={STUDIO_INFO.instagramUrl}
            target="_blank"
            rel="noreferrer"
            className="text-sm font-bold text-[#e1306c] block hover:underline"
          >
            @{STUDIO_INFO.instagram}
          </a>
          <p className="text-[11px] text-[#52635A]">استوری‌ها و نمونه‌کارهای روزانه</p>
        </div>
      </div>

      {/* Map & Consultation Form Embedded Section */}
      <MapAndContactSection />
    </div>
  );
};
