import React from 'react';
import { ChevronLeft, Sparkles, Heart, Baby, Users, Cake, Camera } from 'lucide-react';

interface CategoryHighlightsProps {
  onSelectTab: (tab: string) => void;
}

export const CategoryHighlights: React.FC<CategoryHighlightsProps> = ({ onSelectTab }) => {
  const categories = [
    {
      id: 'pregnancy',
      title: 'آتلیه بارداری تهران',
      subtitle: 'عکاسی دوران بارداری و انتظار با همسر',
      description: 'ثبت زیباترین دوران مادری در محیطی آرام با آرشیو پیراهن‌های حریر، تورهای سلطنتی و ژست‌های دونفره عاشقانه.',
      imageUrl: 'https://images.unsplash.com/photo-1516585427167-9f4af9627e6c?q=80&w=800&auto=format&fit=crop',
      badge: 'هفته ۲۸ الی ۳۴',
      icon: Heart,
      color: 'bg-rose-500',
      keywords: ['آتلیه تخصصی بارداری تهران', 'عکس بارداری با لباس', 'عکاسی بارداری با همسر'],
    },
    {
      id: 'newborn',
      title: 'آتلیه نوزاد تهران',
      subtitle: 'عکاسی نیوبورن در روزهای طلایی',
      description: 'پوزهای ایمن خواب نوزاد در اتاق ایزوله با دمای ۲۸ درجه، قنداق‌های دست‌بافت ضد حساسیت و بدون فلش مستقیم.',
      imageUrl: 'https://images.unsplash.com/photo-1544126592-807ade215a0b?q=80&w=800&auto=format&fit=crop',
      badge: '۶ تا ۱۵ روزگی',
      icon: Baby,
      color: 'bg-emerald-500',
      keywords: ['آتلیه تخصصی نوزاد', 'عکاسی نوزادی تهران', 'عکس نوزاد در آتلیه'],
    },
    {
      id: 'kids',
      title: 'عکاسی کودک تهران',
      subtitle: 'پرتره، لایف‌استایل و بازیگوشی‌های طبیعی',
      description: 'ثبت خنده‌های واقعی بدون ژست تصنعی با اسباب‌بازی‌های مدرن چوبی، عروسک‌های پولیشی و دکورهای تعاملی جذاب.',
      imageUrl: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=800&auto=format&fit=crop',
      badge: '۶ ماه تا ۷ سال',
      icon: Camera,
      color: 'bg-amber-500',
      keywords: ['آتلیه عکس کودک', 'آتلیه تخصصی کودک تهران', 'پرتره کودک با دکور'],
    },
    {
      id: 'family',
      title: 'عکاسی خانوادگی تهران',
      subtitle: 'پیوند عاطفی پدر، مادر و فرزندان',
      description: 'عکس‌های یادگاری گرم و صمیمی خانوادگی با راهنمایی استایل و هماهنگی رنگ لباس‌ها برای چاپ تابلوهای فاخر دیواری.',
      imageUrl: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?q=80&w=800&auto=format&fit=crop',
      badge: 'بدون محدودیت تعداد',
      icon: Users,
      color: 'bg-teal-500',
      keywords: ['عکاسی خانواده در آتلیه', 'عکس خانوادگی با نوزاد', 'عکس پدر و مادر با کودک'],
    },
    {
      id: 'birthday',
      title: 'آتلیه تولد کودک تهران',
      subtitle: 'جشن یک سالگی، دندونی و کیک اسمش',
      description: 'دکورهای شیک با استندهای Happy Birthday، بادکنک‌آرایی‌های مات، ماکت دندونی First Tooth و هیجان کوبیدن کیک.',
      imageUrl: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=800&auto=format&fit=crop',
      badge: 'تم‌های سفارشی',
      icon: Cake,
      color: 'bg-purple-500',
      keywords: ['عکاسی کیک اسمش', 'عکس دندونی در آتلیه', 'دکور تولد کودک'],
    },
  ];

  return (
    <section className="py-16 bg-[#F8FAF9] border-b border-[#DFE8E2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#9DB9A7]/20 text-[#3E604F] text-xs font-bold">
            <Sparkles className="w-3.5 h-3.5 text-[#3E604F]" />
            <span>قلمرو خدمات عکاسی استودیو سیلن کیدز</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D3A33]">
            خدمات تخصصی آتلیه عکاسی کودک و بارداری در تهران
          </h2>
          <p className="text-[#52635A] text-sm leading-relaxed">
            با تفکیک استودیوها، دکورهای اختصاصی و رعایت کامل بهداشت متناسب با سن هر کودک
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => {
            const IconComp = cat.icon;
            return (
              <div
                key={cat.id}
                onClick={() => onSelectTab(cat.id)}
                className="group relative bg-white hover:bg-[#F2F7F4]/40 rounded-3xl border border-[#DFE8E2] overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between cursor-pointer"
              >
                {/* Top Image Banner */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={cat.imageUrl}
                    alt={cat.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>

                  <div className="absolute top-3 right-3">
                    <span className="bg-white/95 backdrop-blur-xs text-[#2D3A33] text-[11px] font-bold px-3 py-1 rounded-full shadow-xs">
                      {cat.badge}
                    </span>
                  </div>

                  <div className="absolute bottom-3 right-3 left-3 text-white">
                    <h3 className="text-lg font-bold drop-shadow-xs">{cat.title}</h3>
                    <p className="text-xs text-[#F8FAF9]">{cat.subtitle}</p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <p className="text-xs sm:text-sm text-[#52635A] leading-relaxed">
                    {cat.description}
                  </p>

                  <div className="space-y-3 pt-2 border-t border-[#DFE8E2]">
                    <div className="flex flex-wrap gap-1.5">
                      {cat.keywords.map((kw, i) => (
                        <span
                          key={i}
                          className="text-[10px] bg-[#F2F7F4] text-[#3E604F] px-2 py-0.5 rounded-md border border-[#DFE8E2]"
                        >
                          {kw}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between text-xs font-bold text-[#3E604F] group-hover:text-[#2E4B3E] transition pt-1">
                      <span>مشاهده جزییات دکورها و گالری</span>
                      <ChevronLeft className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
