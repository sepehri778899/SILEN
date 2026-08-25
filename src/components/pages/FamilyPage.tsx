import React from 'react';
import { usePortfolioManager } from '../../utils/useCustomImages';
import { PortfolioItem } from '../../types';
import {
  Users,
  Heart,
  Calendar,
  Phone,
  HelpCircle,
  Layers,
} from 'lucide-react';

interface FamilyPageProps {
  onSelectTab: (tab: string) => void;
  onOpenConsultation: () => void;
  onOpenImage: (item: PortfolioItem) => void;
}

export const FamilyPage: React.FC<FamilyPageProps> = ({
  onSelectTab,
  onOpenConsultation,
  onOpenImage,
}) => {
  const { items } = usePortfolioManager();
  const familyPhotos = items.filter((p) => p.category === 'family');

  const faqs = [
    {
      q: 'برای عکاسی خانوادگی چه تم و رنگ لباسی پیشنهاد می‌کنید؟',
      a: 'رنگ‌های نود، کرم، بژ، سفید، سبز سدری و جین هماهنگ بهترین هارمونی را در عکس‌های خانوادگی دارند. پیشنهاد می‌کنیم از پوشیدن لباس‌های با طرح‌های شلوغ یا لوگوهای درشت خودداری فرمایید.',
    },
    {
      q: 'آیا مادربزرگ و پدربزرگ هم می‌توانند در عکس‌های خانوادگی حضور یابند؟',
      a: 'بله قطعاً! عکاسی نسلی (مادربزرگ، مادر و نوه) یکی از ارزشمندترین قاب‌های ماندگار هر خانواده است و با کمال میل از ایشان استقبال می‌کنیم.',
    },
    {
      q: 'چاپ عکس خانوادگی در چه سایزی زیباتر است؟',
      a: 'برای سالن پذیرایی و اتاق خواب، سایزهای فاخر ۵۰×۷۰ و ۶۰×۹۰ روی تخته شاسی با کاغذ سیلک یا قاب چوبی ژورنالی بیشترین جلوه و ماندگاری را دارند.',
    },
  ];

  return (
    <div className="py-10 space-y-16">
      {/* Hero Banner */}
      <section className="relative bg-[#F8FAF9] py-14 px-4 sm:px-6 rounded-3xl max-w-7xl mx-auto border border-[#DFE8E2]">
        <div className="max-w-4xl mx-auto text-center space-y-5">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#9DB9A7]/25 text-[#3E604F] text-xs font-bold">
            <Users className="w-3.5 h-3.5 text-[#3E604F]" />
            <span>آتلیه تخصصی خانوادگی تهران | سیلن کیدز</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#2D3A33] leading-tight">
            عکاسی خانوادگی تهران؛
            <span className="block text-[#3E604F] font-extrabold mt-1">
              ثبت گرم‌ترین قاب‌های مهر و همبستگی خانواده شما
            </span>
          </h1>

          <p className="text-[#52635A] text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            پرتره‌های یادگاری پر از احساس و عشق در کنار همسر، فرزندان و نسل‌های مختلف خانواده با هدایت ژست‌های صمیمی و دکورهای مینیمال و فاخر.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
            <button
              onClick={() => onSelectTab('booking')}
              className="inline-flex items-center gap-2 bg-[#3E604F] hover:bg-[#2E4B3E] text-white px-6 py-3 rounded-2xl font-bold text-sm shadow-md shadow-[#3E604F]/20 transition"
            >
              <Calendar className="w-4 h-4 text-[#9DB9A7]" />
              <span>رزرو نوبت عکاسی خانوادگی</span>
            </button>

            <button
              onClick={onOpenConsultation}
              className="inline-flex items-center gap-2 bg-white hover:bg-[#F8FAF9] text-[#2D3A33] border border-[#DFE8E2] px-5 py-3 rounded-2xl font-bold text-sm shadow-xs transition"
            >
              <Phone className="w-4 h-4 text-[#3E604F]" />
              <span>مشاوره ست لباس خانوادگی</span>
            </button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-3xl border border-[#DFE8E2] shadow-xs space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-[#9DB9A7]/25 text-[#3E604F] flex items-center justify-center">
              <Heart className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-[#2D3A33]">ژست‌های صمیمی و طبیعی</h3>
            <p className="text-xs text-[#52635A] leading-relaxed">
              راهنمایی دقیق عکاس برای گرفتن خنده‌های واقعی، آغوش خانوادگی و ارتباط چشمی بدون هیچ احساس خشکی و تکلف.
            </p>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-[#DFE8E2] shadow-xs space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-[#9DB9A7]/25 text-[#3E604F] flex items-center justify-center">
              <Layers className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-[#2D3A33]">ترکیب‌بندی ژورنالی</h3>
            <p className="text-xs text-[#52635A] leading-relaxed">
              طراحی قاب‌بندی‌های کلاسیک و مدرن متناسب با چاپ شاسی‌های بزرگ سالنی و آلبوم‌های نفیس خانوادگی.
            </p>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-[#DFE8E2] shadow-xs space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-[#9DB9A7]/25 text-[#3E604F] flex items-center justify-center">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-[#2D3A33]">عکاسی نسلی با پدربزرگ و مادربزرگ</h3>
            <p className="text-xs text-[#52635A] leading-relaxed">
              فرصتی استثنایی برای ثبت یادگاری باارزش چند نسل در کنار هم با فضایی آرام و صندلی‌های راحت برای بزرگترها.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 space-y-6">
        <div className="text-right space-y-2">
          <h2 className="text-xl sm:text-2xl font-black text-[#2D3A33]">
            نمونه‌کارهای عکاسی خانوادگی در استودیو سیلن
          </h2>
          <p className="text-xs sm:text-sm text-[#52635A]">
            عکاسی مادر و فرزندی، پدر و فرزند، و پرتره کامل خانواده در آتلیه تهران
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {familyPhotos.map((photo) => (
            <div
              key={photo.id}
              onClick={() => onOpenImage(photo)}
              className="group bg-white rounded-2xl overflow-hidden border border-[#DFE8E2] shadow-2xs hover:shadow-lg transition cursor-pointer"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={photo.imageUrl}
                  alt={photo.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
              </div>
              <div className="p-4 space-y-1 text-right">
                <h3 className="text-sm font-bold text-[#2D3A33]">{photo.title}</h3>
                <p className="text-xs text-[#52635A]">{photo.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 space-y-6">
        <div className="text-center space-y-2">
          <h2 className="text-xl sm:text-2xl font-black text-[#2D3A33]">
            سوالات متداول عکاسی خانوادگی
          </h2>
          <p className="text-xs sm:text-sm text-[#52635A]">
            نکات مهم برای هماهنگی لباس و حضور اعضای خانواده
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((f, i) => (
            <div key={i} className="bg-white p-5 rounded-2xl border border-[#DFE8E2] shadow-2xs space-y-2 text-right">
              <h3 className="text-sm font-bold text-[#2D3A33] flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-[#3E604F] shrink-0" />
                <span>{f.q}</span>
              </h3>
              <p className="text-xs sm:text-sm text-[#52635A] leading-relaxed pr-6">
                {f.a}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
