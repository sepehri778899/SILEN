import React from 'react';
import { usePortfolioManager } from '../../utils/useCustomImages';
import { PortfolioItem } from '../../types';
import {
  Baby,
  ThermometerSun,
  ShieldCheck,
  Calendar,
  Phone,
  Sparkles,
  HelpCircle,
} from 'lucide-react';

interface NewbornPageProps {
  onSelectTab: (tab: string) => void;
  onOpenConsultation: () => void;
  onOpenImage: (item: PortfolioItem) => void;
}

export const NewbornPage: React.FC<NewbornPageProps> = ({
  onSelectTab,
  onOpenConsultation,
  onOpenImage,
}) => {
  const { items } = usePortfolioManager();
  const newbornPhotos = items.filter((p) => p.category === 'newborn');

  const faqs = [
    {
      q: 'چرا عکاسی نیوبورن حتماً باید بین ۶ تا ۱۵ روزگی باشد؟',
      a: 'در این بازه، نوزاد هنوز پوزیشن جنینی دوران رحم را به یاد دارد و استخوان‌ها و مفاصل بسیار منعطف هستند. نوزاد ساعت‌های طولانی در خواب عمیق فرو می‌رود و دل‌دردهای کولیکی هنوز آغاز نشده است.',
    },
    {
      q: 'اگر موعد زایمان تغییر کرد یا سزارین زودتر شد چه کنیم؟',
      a: 'کافیست در ماه آخر بارداری با رزرو تقریبی نام خود را ثبت کنید. بعد از تولد نوزاد، کافیست با آتلیه تماس بگیرید تا روز دقیق را در بازه طلایی تنظیم کنیم.',
    },
    {
      q: 'آیا وسایل و لباس‌های نوزاد ضدعفونی می‌شوند؟',
      a: 'بله، سلامت نوزاد خط قرمز ماست. تمامی پارچه‌های قنداق، کلاه‌ها، هدبندها و دکورها با مواد ارگانیک شستشو و ضدعفونی می‌شوند و اتاق دارای سیستم گرمایش و فیلتر هوای اختصاصی است.',
    },
  ];

  return (
    <div className="py-10 space-y-16">
      {/* Hero Banner */}
      <section className="relative bg-[#F8FAF9] py-14 px-4 sm:px-6 rounded-3xl max-w-7xl mx-auto border border-[#DFE8E2]">
        <div className="max-w-4xl mx-auto text-center space-y-5">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#9DB9A7]/25 text-[#3E604F] text-xs font-bold">
            <Baby className="w-3.5 h-3.5 text-[#3E604F]" />
            <span>آتلیه تخصصی نوزاد تهران | سیلن کیدز</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#2D3A33] leading-tight">
            آتلیه نوزاد تهران؛
            <span className="block text-[#3E604F] font-extrabold mt-1">
              ثبت ظریف‌ترین و معصومانه‌ترین روزهای تولد فرشته شما
            </span>
          </h1>

          <p className="text-[#52635A] text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            عکاسی نیوبورن در روزهای طلایی ۶ تا ۱۵ روزگی در اتاق ایزوله با دمای ۲۸ درجه، ژست‌های خواب ایمن، قنداق‌های دست‌بافت ضد حساسیت و بدون فلش مستقیم.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
            <button
              onClick={() => onSelectTab('booking')}
              className="inline-flex items-center gap-2 bg-[#3E604F] hover:bg-[#2E4B3E] text-white px-6 py-3 rounded-2xl font-bold text-sm shadow-md shadow-[#3E604F]/20 transition"
            >
              <Calendar className="w-4 h-4 text-[#9DB9A7]" />
              <span>رزرو نوبت روزهای طلایی نوزاد</span>
            </button>

            <button
              onClick={onOpenConsultation}
              className="inline-flex items-center gap-2 bg-white hover:bg-[#F8FAF9] text-[#2D3A33] border border-[#DFE8E2] px-5 py-3 rounded-2xl font-bold text-sm shadow-xs transition"
            >
              <Phone className="w-4 h-4 text-[#3E604F]" />
              <span>مشاوره تاریخ زایمان و نوزاد</span>
            </button>
          </div>
        </div>
      </section>

      {/* Safety & Care Standards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-3xl border border-[#DFE8E2] shadow-xs space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-[#9DB9A7]/25 text-[#3E604F] flex items-center justify-center">
              <ThermometerSun className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-[#2D3A33]">دمای تنظیم‌شده ۲۸ درجه</h3>
            <p className="text-xs text-[#52635A] leading-relaxed">
              سیستم گرمایش مداوم برای جلوگیری از هرگونه احساس سرما حین تعویض قنداق و ثبت پوزهای خواب آرام.
            </p>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-[#DFE8E2] shadow-xs space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-[#9DB9A7]/25 text-[#3E604F] flex items-center justify-center">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-[#2D3A33]">پوزهای ایمن با تایید پزشکی</h3>
            <p className="text-xs text-[#52635A] leading-relaxed">
              تمامی ژست‌های عکاسان دوره دیده سیلن کیدز بر پایه آناتومی ایمن ستون فقرات و گردن نوزاد است.
            </p>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-[#DFE8E2] shadow-xs space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-[#9DB9A7]/25 text-[#3E604F] flex items-center justify-center">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-[#2D3A33]">قنداق و هدبندهای ضدحساسیت</h3>
            <p className="text-xs text-[#52635A] leading-relaxed">
              الیاف کاملاً طبیعی، پنبه‌ای و پشم مرینوس ارگانیک با شستشوی ضدعفونی ویژه پوست حساس نوزادان.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 space-y-6">
        <div className="text-right space-y-2">
          <h2 className="text-xl sm:text-2xl font-black text-[#2D3A33]">
            نمونه‌کارهای عکاسی نوزادی در آتلیه سیلن
          </h2>
          <p className="text-xs sm:text-sm text-[#52635A]">
            عکاسی قنداق، سبد ارگانیک و خواب پروانه‌ای نوزاد در تهران
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {newbornPhotos.map((photo) => (
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
            سوالات متداول عکاسی نوزادی
          </h2>
          <p className="text-xs sm:text-sm text-[#52635A]">
            راهنمای والدین برای روز عکاسی نیوبورن
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
