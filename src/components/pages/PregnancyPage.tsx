import React from 'react';
import { usePortfolioManager } from '../../utils/useCustomImages';
import { PortfolioItem } from '../../types';
import {
  Heart,
  Shirt,
  Calendar,
  Phone,
  ShieldCheck,
  HelpCircle,
} from 'lucide-react';

interface PregnancyPageProps {
  onSelectTab: (tab: string) => void;
  onOpenConsultation: () => void;
  onOpenImage: (item: PortfolioItem) => void;
}

export const PregnancyPage: React.FC<PregnancyPageProps> = ({
  onSelectTab,
  onOpenConsultation,
  onOpenImage,
}) => {
  const { items } = usePortfolioManager();
  const pregnancyPhotos = items.filter((p) => p.category === 'pregnancy');

  const faqs = [
    {
      q: 'بهترین زمان برای عکاسی دوران بارداری چه ماهی است؟',
      a: 'بهترین زمان بین هفته ۲۸ تا ۳۴ بارداری (ماه هفتم و هشتم) است. در این بازه، فرم شکم کاملاً گرد و مشخص شده اما مادر هنوز احساس سنگینی و خستگی مفرط ماه‌های آخر را ندارد.',
    },
    {
      q: 'آیا لباس بارداری در آتلیه سیلن موجود و رایگان است؟',
      a: 'بله! بیش از ۵۰ مدل پیراهن حریر، دانتل، بادی و تورهای اختصاصی بارداری در سایزهای مختلف در کمد آتلیه موجود است و استفاده از آن‌ها در کلیه پکیج‌ها کاملاً رایگان است.',
    },
    {
      q: 'آیا همسر و فرزند اول هم می‌توانند در عکس‌ها شرکت کنند؟',
      a: 'حتماً! عکاسی دونفره بارداری با همسر و ثبت لحظات عاطفی با فرزندان دیگر، بخش جذاب تمام پکیج‌های بارداری ماست و هیچ هزینه اضافی ندارد.',
    },
  ];

  return (
    <div className="py-10 space-y-16">
      {/* Hero Banner */}
      <section className="relative bg-[#F8FAF9] py-14 px-4 sm:px-6 rounded-3xl max-w-7xl mx-auto border border-[#DFE8E2]">
        <div className="max-w-4xl mx-auto text-center space-y-5">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#9DB9A7]/25 text-[#3E604F] text-xs font-bold">
            <Heart className="w-3.5 h-3.5 fill-[#3E604F] text-[#3E604F]" />
            <span>آتلیه تخصصی بارداری تهران | سیلن کیدز</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#2D3A33] leading-tight">
            آتلیه بارداری تهران؛
            <span className="block text-[#3E604F] font-extrabold mt-1">
              ثبت شکوهمند معجزه مادری و دوران انتظار
            </span>
          </h1>

          <p className="text-[#52635A] text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            عکاسی دوران بارداری در محیطی آرام و صمیمی، با حضور کادر مجرب خانم، کمد متنوع لباس‌های حریر و مدرن رایگان و امکان عکاسی عاشقانه دونفره با همسر.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
            <button
              onClick={() => onSelectTab('booking')}
              className="inline-flex items-center gap-2 bg-[#3E604F] hover:bg-[#2E4B3E] text-white px-6 py-3 rounded-2xl font-bold text-sm shadow-md shadow-[#3E604F]/20 transition"
            >
              <Calendar className="w-4 h-4 text-[#9DB9A7]" />
              <span>رزرو نوبت عکاسی بارداری</span>
            </button>

            <button
              onClick={onOpenConsultation}
              className="inline-flex items-center gap-2 bg-white hover:bg-[#F8FAF9] text-[#2D3A33] border border-[#DFE8E2] px-5 py-3 rounded-2xl font-bold text-sm shadow-xs transition"
            >
              <Phone className="w-4 h-4 text-[#3E604F]" />
              <span>مشاوره سن بارداری و لباس‌ها</span>
            </button>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-3xl border border-[#DFE8E2] shadow-xs space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-[#9DB9A7]/25 text-[#3E604F] flex items-center justify-center">
              <Shirt className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-[#2D3A33]">کمد لباس رایگان بارداری</h3>
            <p className="text-xs text-[#52635A] leading-relaxed">
              تنوع بیش از ۵۰ مدل پیراهن‌های حریر، ماکسی‌های دنباله‌دار، بادی‌های کشی و تورهای اروپایی بدون نیاز به تهیه لباس جداگانه.
            </p>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-[#DFE8E2] shadow-xs space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-[#9DB9A7]/25 text-[#3E604F] flex items-center justify-center">
              <Heart className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-[#2D3A33]">عکاسی با همسر و خانواده</h3>
            <p className="text-xs text-[#52635A] leading-relaxed">
              ژست‌های طبیعی و عاشقانه دونفره با راهنمایی ژستور حرفه‌ای، بدون هیچ‌گونه معذب بودن و با حفظ بالاترین استانداردهای اخلاقی.
            </p>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-[#DFE8E2] shadow-xs space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-[#9DB9A7]/25 text-[#3E604F] flex items-center justify-center">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-[#2D3A33]">حفظ کامل حریم خصوصی</h3>
            <p className="text-xs text-[#52635A] leading-relaxed">
              تمامی عکاسان، دستیاران و ادیتورهای استودیو بانوان مجرب هستند و فایل‌های خصوصی با بالاترین پروتکل‌های امنیتی محافظت می‌شوند.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 space-y-6">
        <div className="text-right space-y-2">
          <h2 className="text-xl sm:text-2xl font-black text-[#2D3A33]">
            نمونه‌کارهای عکاسی بارداری در آتلیه سیلن
          </h2>
          <p className="text-xs sm:text-sm text-[#52635A]">
            بخشی از آرشیو عکاسی دوران بارداری و عکس با همسر
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {pregnancyPhotos.map((photo) => (
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

      {/* FAQ Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 space-y-6">
        <div className="text-center space-y-2">
          <h2 className="text-xl sm:text-2xl font-black text-[#2D3A33]">
            سوالات متداول عکاسی بارداری
          </h2>
          <p className="text-xs sm:text-sm text-[#52635A]">
            نکات مهم برای برنامه‌ریزی یک جلسه عکاسی خاطره‌انگیز
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
