import React from 'react';
import { usePortfolioManager } from '../../utils/useCustomImages';
import { PortfolioItem } from '../../types';
import {
  Camera,
  Sparkles,
  Smile,
  Calendar,
  Phone,
  HelpCircle,
  Palette,
} from 'lucide-react';

interface KidsPageProps {
  onSelectTab: (tab: string) => void;
  onOpenConsultation: () => void;
  onOpenImage: (item: PortfolioItem) => void;
}

export const KidsPage: React.FC<KidsPageProps> = ({
  onSelectTab,
  onOpenConsultation,
  onOpenImage,
}) => {
  const { items } = usePortfolioManager();
  const kidsPhotos = items.filter((p) => p.category === 'kids' || p.category === 'portrait');

  const faqs = [
    {
      q: 'اگر کودکم در آتلیه گریه کند یا خجالت بکشد چه می‌شود؟',
      a: 'پرسنل سیلن کیدز آموزش‌دیده در زمینه رفتارشناسی کودک هستند. ما با بازی، قایم‌باشک، عروسک‌های پولیشی و حباب‌سازی فضا را ابتدا به یک اتاق بازی پرهیجان تبدیل می‌کنیم تا اضطراب کودک کاملاً از بین برود.',
    },
    {
      q: 'آیا برای سنین مختلف لباس موجود دارید؟',
      a: 'بله، کمد لباس آتلیه سیلن شامل انواع سرهمی‌ها، رامپرها، پیراهن‌های پرنسسی و اسپرت دخترانه و پسرانه از سن ۳ ماهگی تا ۷ سالگی است که کاملاً رایگان در اختیارتان قرار می‌گیرد.',
    },
    {
      q: 'بهترین ساعت روز برای عکاسی کودک چه زمانی است؟',
      a: 'دقیقاً زمانی که کودک از خواب بیدار شده و وعده غذایی یا میان‌وعده خود را میل کرده باشد (معمولاً ساعت‌های ۱۰ الی ۱۲ صبح یا ۱۶ الی ۱۸ عصر).',
    },
  ];

  return (
    <div className="py-10 space-y-16">
      {/* Hero Banner */}
      <section className="relative bg-[#F8FAF9] py-14 px-4 sm:px-6 rounded-3xl max-w-7xl mx-auto border border-[#DFE8E2]">
        <div className="max-w-4xl mx-auto text-center space-y-5">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#9DB9A7]/25 text-[#3E604F] text-xs font-bold">
            <Smile className="w-3.5 h-3.5 text-[#3E604F]" />
            <span>آتلیه تخصصی کودک تهران | سیلن کیدز</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#2D3A33] leading-tight">
            عکاسی کودک تهران؛
            <span className="block text-[#3E604F] font-extrabold mt-1">
              ثبت خنده‌های واقعی، بازیگوشی‌ها و معصومیت دوران کودکی
            </span>
          </h1>

          <p className="text-[#52635A] text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            در استودیو سیلن، بدون اجبار به ژست‌های تصنعی و در قالب بازی‌های شاداب، پرتره‌هایی فاخر و جاودانه از سنین مختلف رشد فرزندتان خلق می‌کنیم.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
            <button
              onClick={() => onSelectTab('booking')}
              className="inline-flex items-center gap-2 bg-[#3E604F] hover:bg-[#2E4B3E] text-white px-6 py-3 rounded-2xl font-bold text-sm shadow-md shadow-[#3E604F]/20 transition"
            >
              <Calendar className="w-4 h-4 text-[#9DB9A7]" />
              <span>رزرو نوبت عکاسی کودک</span>
            </button>

            <button
              onClick={onOpenConsultation}
              className="inline-flex items-center gap-2 bg-white hover:bg-[#F8FAF9] text-[#2D3A33] border border-[#DFE8E2] px-5 py-3 rounded-2xl font-bold text-sm shadow-xs transition"
            >
              <Phone className="w-4 h-4 text-[#3E604F]" />
              <span>مشاوره سن و دکورهای کودک</span>
            </button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-3xl border border-[#DFE8E2] shadow-xs space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-[#9DB9A7]/25 text-[#3E604F] flex items-center justify-center">
              <Smile className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-[#2D3A33]">عکاسی بازی‌محور و شاداب</h3>
            <p className="text-xs text-[#52635A] leading-relaxed">
              عکاسان ما با بازی‌های سرگرم‌کننده، خنده‌های طبیعی و شیطنت‌های بامزه کودک را با سرعت شاتر بالا شکار می‌کنند.
            </p>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-[#DFE8E2] shadow-xs space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-[#9DB9A7]/25 text-[#3E604F] flex items-center justify-center">
              <Palette className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-[#2D3A33]">تنوع بی‌نظیر دکورها</h3>
            <p className="text-xs text-[#52635A] leading-relaxed">
              دکورهای مهد چوبی، خانه خرگوش، صندلی‌های وینتیج، ماشین کلاسیک و دکورهای پاییزی و بهاری متناسب با هر سلیقه.
            </p>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-[#DFE8E2] shadow-xs space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-[#9DB9A7]/25 text-[#3E604F] flex items-center justify-center">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-[#2D3A33]">نورپردازی ملایم و حرفه‌ای</h3>
            <p className="text-xs text-[#52635A] leading-relaxed">
              استفاده از سافت‌باکس‌های استاندارد ضد خیرگی چشم کودک، جهت ایجاد نوری نرم و پوستی لطیف در عکس‌ها.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 space-y-6">
        <div className="text-right space-y-2">
          <h2 className="text-xl sm:text-2xl font-black text-[#2D3A33]">
            نمونه‌کارهای عکاسی کودک در آتلیه سیلن کیدز
          </h2>
          <p className="text-xs sm:text-sm text-[#52635A]">
            پرتره‌های شاداب، استایل‌های وینتیج و عکس‌های پرانرژی کودکان
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {kidsPhotos.map((photo) => (
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
            سوالات متداول عکاسی کودک
          </h2>
          <p className="text-xs sm:text-sm text-[#52635A]">
            توصیه‌ها برای روز عکاسی و همراهی با کودک
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
