import React from 'react';
import { usePortfolioManager } from '../../utils/useCustomImages';
import { PortfolioItem } from '../../types';
import {
  Cake,
  Sparkles,
  Calendar,
  Phone,
  HelpCircle,
  Gift,
} from 'lucide-react';

interface BirthdayPageProps {
  onSelectTab: (tab: string) => void;
  onOpenConsultation: () => void;
  onOpenImage: (item: PortfolioItem) => void;
}

export const BirthdayPage: React.FC<BirthdayPageProps> = ({
  onSelectTab,
  onOpenConsultation,
  onOpenImage,
}) => {
  const { items } = usePortfolioManager();
  const birthdayPhotos = items.filter((p) => p.category === 'birthday');

  const faqs = [
    {
      q: 'آیا برای عکاسی کیک اسمش باید کیک را خودمان بیاوریم؟',
      a: 'می‌توانید کیک دلخواه خود را بیاورید یا از ماکت‌های کیک بسیار باکیفیت و زیبای آتلیه استفاده کنید. در صورت آوردن کیک واقعی، توصیه می‌کنیم خامه ساده با رنگ‌های پاستلی و طبیعی انتخاب نمایید.',
    },
    {
      q: 'تم دندونی شامل چه دکورها و اکسسوری‌هایی است؟',
      a: 'دکور دندونی آتلیه سیلن شامل ماکت دندان بزرگ، تخت چوبی مینیاتوری، کلاه بوقی دندونی، استند رویش اولین مروارید و لباس‌های ست دندونی با ریسه چراغ‌های رویایی است.',
    },
    {
      q: 'چقدر قبل از تاریخ تولد کودک باید نوبت را ثبت کنیم؟',
      a: 'برای آماده شدن عکس‌ها و شاسی‌ها تا روز جشن تولد یا سالگرد، پیشنهاد می‌شود حداقل ۳ الی ۴ هفته قبل از تاریخ جشن تولد به آتلیه مراجعه فرمایید.',
    },
  ];

  return (
    <div className="py-10 space-y-16">
      {/* Hero Banner */}
      <section className="relative bg-[#F8FAF9] py-14 px-4 sm:px-6 rounded-3xl max-w-7xl mx-auto border border-[#DFE8E2]">
        <div className="max-w-4xl mx-auto text-center space-y-5">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#9DB9A7]/25 text-[#3E604F] text-xs font-bold">
            <Cake className="w-3.5 h-3.5 text-[#3E604F]" />
            <span>آتلیه تخصصی تولد و دندونی تهران | سیلن کیدز</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#2D3A33] leading-tight">
            آتلیه تولد کودک تهران؛
            <span className="block text-[#3E604F] font-extrabold mt-1">
              جشن باشکوه یک سالگی، تم دندونی و کیک اسمش هیجان‌انگیز
            </span>
          </h1>

          <p className="text-[#52635A] text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            دکورهای مدرن و متنوع با بادکنک‌آرایی‌های مات، استندهای چوبی Happy Birthday، ماکت‌های جذاب دندان و ثبت شیطنت‌های بازی کیک اسمش بدون محدودیت.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
            <button
              onClick={() => onSelectTab('booking')}
              className="inline-flex items-center gap-2 bg-[#3E604F] hover:bg-[#2E4B3E] text-white px-6 py-3 rounded-2xl font-bold text-sm shadow-md shadow-[#3E604F]/20 transition"
            >
              <Calendar className="w-4 h-4 text-[#9DB9A7]" />
              <span>رزرو نوبت عکاسی تولد / دندونی</span>
            </button>

            <button
              onClick={onOpenConsultation}
              className="inline-flex items-center gap-2 bg-white hover:bg-[#F8FAF9] text-[#2D3A33] border border-[#DFE8E2] px-5 py-3 rounded-2xl font-bold text-sm shadow-xs transition"
            >
              <Phone className="w-4 h-4 text-[#3E604F]" />
              <span>مشاوره تم‌ها و کیک اسمش</span>
            </button>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-3xl border border-[#DFE8E2] shadow-xs space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-[#9DB9A7]/25 text-[#3E604F] flex items-center justify-center">
              <Gift className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-[#2D3A33]">تم رویش اولین دندان (First Tooth)</h3>
            <p className="text-xs text-[#52635A] leading-relaxed">
              ثبت شیرین‌ترین یادگاری ۶ تا ۹ ماهگی با ماکت اختصاصی دندان، کلاه‌های فانتزی و دکور نوستالژیک چوبی.
            </p>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-[#DFE8E2] shadow-xs space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-[#9DB9A7]/25 text-[#3E604F] flex items-center justify-center">
              <Cake className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-[#2D3A33]">کیک اسمش و ترکاندن کیک</h3>
            <p className="text-xs text-[#52635A] leading-relaxed">
              لحظات خنده‌دار و پرهیجان بازی کودک با خامه کیک در فضایی کاملاً امن، بهداشتی و آماده شستشو بعد از عکاسی.
            </p>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-[#DFE8E2] shadow-xs space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-[#9DB9A7]/25 text-[#3E604F] flex items-center justify-center">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-[#2D3A33]">دکورهای بوهو، زیتونی و وینتیج</h3>
            <p className="text-xs text-[#52635A] leading-relaxed">
              بادکنک‌آرایی‌های پاستلی و تم‌های شیک ۱ سالگی، ۲ سالگی و بالاتر با اعداد چوبی برجسته و لباس‌های متناسب.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 space-y-6">
        <div className="text-right space-y-2">
          <h2 className="text-xl sm:text-2xl font-black text-[#2D3A33]">
            نمونه‌کارهای تولد و دندونی در استودیو سیلن کیدز
          </h2>
          <p className="text-xs sm:text-sm text-[#52635A]">
            تم‌های یک سالگی، جشن مروارید و کیک اسمش در تهران
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {birthdayPhotos.map((photo) => (
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
            سوالات متداول عکاسی تولد
          </h2>
          <p className="text-xs sm:text-sm text-[#52635A]">
            راهنمای سفارش کیک و انتخاب تم
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
