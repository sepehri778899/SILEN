import React, { useState } from 'react';
import { usePortfolioManager } from '../../utils/useCustomImages';
import { PortfolioItem, ServiceCategory } from '../../types';
import { Sparkles, Eye, Shield, ChevronLeft, Image as ImageIcon, UploadCloud } from 'lucide-react';
import { StudioPhotoUploaderModal } from '../modals/StudioPhotoUploaderModal';

interface FeaturedGalleryProps {
  onSelectTab: (tab: string) => void;
  onOpenImage: (item: PortfolioItem) => void;
}

export const FeaturedGallery: React.FC<FeaturedGalleryProps> = ({ onSelectTab, onOpenImage }) => {
  const { items } = usePortfolioManager();
  const [selectedFilter, setSelectedFilter] = useState<ServiceCategory | 'all'>('all');
  const [isUploaderOpen, setIsUploaderOpen] = useState(false);

  const filterTabs: { id: ServiceCategory | 'all'; label: string }[] = [
    { id: 'all', label: 'همه نمونه‌کارها' },
    { id: 'newborn', label: 'آتلیه نوزاد' },
    { id: 'kids', label: 'عکاسی کودک' },
    { id: 'birthday', label: 'تولد و دندونی' },
    { id: 'pregnancy', label: 'آتلیه بارداری' },
    { id: 'family', label: 'خانوادگی' },
    { id: 'portrait', label: 'پرتره کلاسیک' },
  ];

  const filteredItems =
    selectedFilter === 'all'
      ? items
      : items.filter((item) => item.category === selectedFilter);

  return (
    <section className="py-16 bg-[#F8FAF9] border-b border-[#DFE8E2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#9DB9A7]/20 text-[#3E604F] text-xs font-bold">
              <Sparkles className="w-3.5 h-3.5 text-[#3E604F]" />
              <span>گالری برگزیده استودیو کودک سیلن کیدز</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D3A33]">
              نمونه‌کارهای تخصصی نوزادی، بارداری و کودک
            </h2>
            <p className="text-[#52635A] text-sm">
              با نورپردازی سینمایی، طراحی دکورهای مینیمال و ثبت باکیفیت‌ترین جزییات
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsUploaderOpen(true)}
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#2D3A33] hover:text-[#3E604F] bg-white border border-[#DFE8E2] hover:border-[#9DB9A7] px-4 py-2.5 rounded-xl transition shadow-2xs w-fit"
            >
              <UploadCloud className="w-4 h-4 text-[#3E604F]" />
              <span>آپلود عکس‌های آتلیه</span>
            </button>

            <button
              onClick={() => onSelectTab('portfolio')}
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#3E604F] hover:text-[#2D3A33] bg-[#9DB9A7]/20 hover:bg-[#9DB9A7]/30 border border-[#9DB9A7]/40 px-4 py-2.5 rounded-xl transition shadow-2xs w-fit"
            >
              <ImageIcon className="w-4 h-4 text-[#3E604F]" />
              <span>مشاهده تمامی نمونه‌کارها</span>
              <ChevronLeft className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2 pb-2">
          {filterTabs.map((tab) => {
            const isActive = selectedFilter === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setSelectedFilter(tab.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition ${
                  isActive
                    ? 'bg-[#3E604F] text-white font-bold shadow-xs'
                    : 'bg-white text-[#2D3A33] hover:bg-[#F2F7F4] border border-[#DFE8E2]'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filteredItems.slice(0, 8).map((item) => (
            <div
              key={item.id}
              onClick={() => onOpenImage(item)}
              className="group relative bg-white rounded-2xl overflow-hidden border border-[#DFE8E2] shadow-2xs hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between"
            >
              {/* Photo Container */}
              <div className="relative aspect-[4/5] overflow-hidden bg-[#F2F7F4]">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 text-white">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[11px] bg-[#9DB9A7] text-white px-2.5 py-0.5 rounded-full font-bold">
                      {item.categoryFa}
                    </span>
                    {item.ageGroup && (
                      <span className="text-[11px] bg-white/20 backdrop-blur-xs px-2 py-0.5 rounded-full">
                        {item.ageGroup}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-stone-200 line-clamp-2">{item.description}</p>
                  <div className="mt-3 flex items-center justify-between text-xs font-bold text-[#F8FAF9]">
                    <span className="flex items-center gap-1">
                      <Eye className="w-3.5 h-3.5 text-[#9DB9A7]" /> مشاهده بزرگنمایی
                    </span>
                    <span className="text-[10px] text-stone-300">{item.theme}</span>
                  </div>
                </div>

                {/* Badge Top Left */}
                <div className="absolute top-2.5 right-2.5 group-hover:opacity-0 transition-opacity">
                  <span className="bg-[#2D3A33]/80 backdrop-blur-md text-white text-[10px] font-medium px-2.5 py-1 rounded-lg">
                    {item.categoryFa}
                  </span>
                </div>
              </div>

              {/* Card Footer Caption */}
              <div className="p-3.5 text-right space-y-1">
                <h3 className="text-xs sm:text-sm font-bold text-[#2D3A33] line-clamp-1 group-hover:text-[#3E604F] transition">
                  {item.title}
                </h3>
                <div className="flex items-center justify-between text-[11px] text-[#52635A]">
                  <span>{item.theme || 'دکور اختصاصی'}</span>
                  <span>{item.ageGroup}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mandatory Privacy Disclaimer as requested */}
        <div className="bg-[#9DB9A7]/15 border border-[#9DB9A7]/30 rounded-2xl p-4 sm:p-5 flex items-start gap-3.5 text-right">
          <div className="p-2 bg-[#9DB9A7]/25 rounded-xl text-[#3E604F] shrink-0 mt-0.5">
            <Shield className="w-5 h-5 text-[#3E604F]" />
          </div>
          <div className="space-y-1 text-xs sm:text-sm text-[#2D3A33] leading-relaxed">
            <p className="font-bold text-[#3E604F]">
              تعهد به حفظ حریم خصوصی خانواده‌های گرامی:
            </p>
            <p>
              به منظور رعایت حریم خصوصی و امنیت تصاویر خانواده‌ها، تنها بخشی از عکس‌ها با کسب اجازه رسمی در وب‌سایت به نمایش درآمده‌اند. شما عزیزان می‌توانید با مراجعه حضوری به آتلیه سیلن کیدز، صدها نمونه‌کار ژورنالی متنوع در سبک‌های بارداری، نوزادی و خانوادگی را از نزدیک مشاهده بفرمایید.
            </p>
          </div>
        </div>
      </div>

      <StudioPhotoUploaderModal
        isOpen={isUploaderOpen}
        onClose={() => setIsUploaderOpen(false)}
      />
    </section>
  );
};
