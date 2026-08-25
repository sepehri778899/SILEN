import React from 'react';
import { PACKAGES_DATA } from '../../data/mockData';
import { Sparkles, Check, Clock, Shirt, Image as ImageIcon, FileCheck, ChevronLeft, Calendar } from 'lucide-react';

interface PackagesSectionProps {
  onSelectTab: (tab: string) => void;
  onOpenBookingWithPackage?: (packageName: string) => void;
}

export const PackagesSection: React.FC<PackagesSectionProps> = ({
  onSelectTab,
  onOpenBookingWithPackage,
}) => {
  return (
    <section className="py-16 bg-[#F8FAF9] border-b border-[#DFE8E2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <span className="text-xs font-bold text-[#3E604F] bg-[#9DB9A7]/20 px-3.5 py-1 rounded-full">
            تعرفه‌های شفاف و منعطف استودیو سیلن
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-[#2D3A33]">
            پکیج‌های عکاسی کودک، نوزاد و بارداری تهران
          </h2>
          <p className="text-[#52635A] text-sm leading-relaxed">
            تمامی پکیج‌ها شامل استفاده نامحدود و رایگان از کمد لباس و اکسسوری‌های آتلیه می‌باشند
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {PACKAGES_DATA.map((pkg) => {
            const isPop = pkg.popular;
            return (
              <div
                key={pkg.id}
                className={`relative rounded-3xl p-6 transition-all duration-300 flex flex-col justify-between ${
                  isPop
                    ? 'bg-gradient-to-b from-[#F2F7F4] to-white border-2 border-[#9DB9A7] shadow-xl shadow-[#9DB9A7]/20'
                    : 'bg-white hover:bg-[#F2F7F4]/30 border border-[#DFE8E2] shadow-2xs hover:shadow-lg'
                }`}
              >
                {/* Popular or Special Badge */}
                {pkg.badge && (
                  <div className="absolute -top-3.5 right-1/2 transform translate-x-1/2 bg-[#3E604F] text-white text-[11px] font-bold px-3.5 py-1 rounded-full shadow-md whitespace-nowrap">
                    {pkg.badge}
                  </div>
                )}

                <div className="space-y-4">
                  {/* Package Title & Price */}
                  <div className="space-y-2 border-b border-[#DFE8E2] pb-4 text-center">
                    <h3 className="text-base font-extrabold text-[#2D3A33]">{pkg.name}</h3>
                    <div className="text-xl sm:text-2xl font-black text-[#3E604F]">
                      {pkg.price}
                    </div>
                  </div>

                  {/* Core Specs */}
                  <div className="space-y-2.5 text-xs text-[#52635A] bg-[#F8FAF9] p-3.5 rounded-2xl border border-[#DFE8E2]">
                    <div className="flex items-center gap-2">
                      <Clock className="w-3.5 h-3.5 text-[#3E604F] shrink-0" />
                      <span><strong>مدت زمان:</strong> {pkg.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Shirt className="w-3.5 h-3.5 text-[#3E604F] shrink-0" />
                      <span><strong>تغییر لباس:</strong> {pkg.clothingChanges}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <ImageIcon className="w-3.5 h-3.5 text-[#3E604F] shrink-0" />
                      <span><strong>چاپ عکس:</strong> {pkg.prints}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FileCheck className="w-3.5 h-3.5 text-[#3E604F] shrink-0" />
                      <span><strong>فایل‌ها:</strong> {pkg.digitalFiles}</span>
                    </div>
                  </div>

                  {/* Feature Checklist */}
                  <div className="space-y-2 pt-2">
                    <p className="text-xs font-bold text-[#2D3A33]">امکانات پکیج:</p>
                    <ul className="space-y-1.5 text-xs text-[#52635A]">
                      {pkg.features.map((feat, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-[#9DB9A7] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Book this Package Button */}
                <div className="pt-6">
                  <button
                    onClick={() => {
                      if (onOpenBookingWithPackage) {
                        onOpenBookingWithPackage(pkg.name);
                      } else {
                        onSelectTab('booking');
                      }
                    }}
                    className={`w-full py-3 rounded-2xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition active:scale-98 ${
                      isPop
                        ? 'bg-[#3E604F] hover:bg-[#2E4B3E] text-white shadow-md shadow-[#3E604F]/20'
                        : 'bg-white hover:bg-[#F2F7F4] text-[#2D3A33] border border-[#DFE8E2]'
                    }`}
                  >
                    <Calendar className="w-4 h-4 text-[#9DB9A7]" />
                    <span>رزرو با این پکیج</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Custom Package note */}
        <div className="mt-10 p-5 bg-[#F2F7F4] rounded-2xl border border-[#DFE8E2] flex flex-col sm:flex-row items-center justify-between gap-4 text-right">
          <div className="space-y-1">
            <h4 className="text-sm font-bold text-[#2D3A33]">
              نیاز به پکیج اختصاصی، آلبوم فتوبوک ژورنالی یا چاپ شاسی اضافی دارید؟
            </h4>
            <p className="text-xs text-[#52635A]">
              شما می‌توانید هر تعداد عکس و در هر سایز دلخواه را علاوه بر پکیج‌ها سفارش دهید یا از بخش سفارش آنلاین چاپ استفاده نمایید.
            </p>
          </div>
          <button
            onClick={() => onSelectTab('print-order')}
            className="shrink-0 bg-white hover:bg-[#F8FAF9] text-[#3E604F] border border-[#DFE8E2] px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-1.5"
          >
            <span>مشاهده قیمت چاپ تکی و شاسی</span>
            <ChevronLeft className="w-4 h-4 text-[#9DB9A7]" />
          </button>
        </div>
      </div>
    </section>
  );
};
