import React, { useState } from 'react';
import { usePortfolioManager } from '../../utils/useCustomImages';
import { PortfolioItem, ServiceCategory } from '../../types';
import { StudioPhotoUploaderModal } from '../modals/StudioPhotoUploaderModal';
import {
  Search,
  Filter,
  Sparkles,
  Shield,
  Eye,
  Camera,
  Calendar,
  Image as ImageIcon,
  UploadCloud,
  Plus,
} from 'lucide-react';

interface PortfolioPageProps {
  onSelectTab: (tab: string) => void;
  onOpenImage: (item: PortfolioItem) => void;
}

export const PortfolioPage: React.FC<PortfolioPageProps> = ({
  onSelectTab,
  onOpenImage,
}) => {
  const { items } = usePortfolioManager();
  const [selectedCategory, setSelectedCategory] = useState<ServiceCategory | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [isUploaderOpen, setIsUploaderOpen] = useState(false);

  const filterTabs: { id: ServiceCategory | 'all'; label: string }[] = [
    { id: 'all', label: 'همه عکس‌ها' },
    { id: 'newborn', label: 'نوزادی (نیوبورن)' },
    { id: 'kids', label: 'کودک' },
    { id: 'birthday', label: 'تولد و دندونی' },
    { id: 'pregnancy', label: 'بارداری و مادرانه' },
    { id: 'family', label: 'خانوادگی' },
    { id: 'portrait', label: 'پرتره کلاسیک' },
  ];

  const filteredItems = items.filter((item) => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch =
      searchQuery === '' ||
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (item.theme && item.theme.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="py-10 space-y-12 max-w-7xl mx-auto px-4 sm:px-6">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#9DB9A7]/25 text-[#3E604F] text-xs font-bold">
          <Camera className="w-4 h-4 text-[#3E604F]" />
          <span>آرشیو نمونه‌کارهای تخصصی سیلن کیدز</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-[#2D3A33]">
          گالری عکس آتلیه کودک، نوزاد و بارداری در تهران
        </h1>
        <p className="text-[#52635A] text-sm leading-relaxed">
          مشاهده گلچینی از زیباترین لحظات ثبت شده با دکورهای ژورنالی و نورپردازی حرفه‌ای استودیو سیلن
        </p>

        {/* Studio Upload Action Banner */}
        <div className="pt-2">
          <button
            onClick={() => setIsUploaderOpen(true)}
            className="inline-flex items-center gap-2 bg-[#9DB9A7]/20 hover:bg-[#9DB9A7]/30 text-[#2D3A33] border border-[#9DB9A7]/50 px-5 py-2.5 rounded-2xl font-bold text-xs sm:text-sm transition shadow-xs"
          >
            <UploadCloud className="w-4 h-4 text-[#3E604F]" />
            <span>بارگذاری و افزودن عکس‌های واقعی آتلیه سیلن</span>
            <Plus className="w-3.5 h-3.5 text-[#3E604F]" />
          </button>
        </div>
      </div>

      {/* Mandatory Privacy Disclaimer as requested */}
      <div className="bg-[#F8FAF9] border border-[#DFE8E2] rounded-3xl p-5 sm:p-6 flex flex-col sm:flex-row items-start gap-4 text-right shadow-2xs">
        <div className="p-3 bg-[#9DB9A7]/25 rounded-2xl text-[#3E604F] shrink-0">
          <Shield className="w-6 h-6 text-[#3E604F]" />
        </div>
        <div className="space-y-1.5 text-xs sm:text-sm text-[#52635A] leading-relaxed">
          <h3 className="font-extrabold text-[#2D3A33] text-sm sm:text-base">
            اطلاعیه مهم حفظ حریم خصوصی خانواده‌های گرامی:
          </h3>
          <p>
            به دلیل تعهد قلبی و اخلاقی آتلیه سیلن کیدز به رعایت حریم خصوصی و امنیت تصاویر خانواده‌های ارجمند، تنها درصد بسیار اندکی از عکس‌ها با کسب رضایت کتبی در وب‌سایت بارگذاری شده‌اند. 
          </p>
          <p className="text-[#3E604F] font-semibold pt-1">
            ✨ برای مشاهده صدها نمونه‌کار متنوع و ژورنال‌های کامل در زمینه‌های بارداری، نوزادی و خانوادگی، با افتخار در جلسه مشاوره حضوری در محل آتلیه سیلن کیدز میزبان شما عزیزان خواهیم بود.
          </p>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2">
            {filterTabs.map((tab) => {
              const isActive = selectedCategory === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setSelectedCategory(tab.id)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition ${
                    isActive
                      ? 'bg-[#3E604F] text-white font-bold shadow-xs'
                      : 'bg-white text-[#52635A] hover:bg-[#F8FAF9] border border-[#DFE8E2]'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Search Box */}
          <div className="relative min-w-[260px]">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="جستجو در تم‌ها (دندونی، قنداق، کیک اسمش...)"
              className="w-full text-xs pr-9 pl-4 py-2.5 rounded-xl border border-[#DFE8E2] bg-white focus:outline-hidden focus:border-[#3E604F] text-[#2D3A33] placeholder:text-[#52635A]/60"
            />
            <Search className="w-4 h-4 text-[#3E604F] absolute right-3 top-3" />
          </div>
        </div>
      </div>

      {/* Grid */}
      {filteredItems.length === 0 ? (
        <div className="bg-white p-12 text-center rounded-3xl border border-[#DFE8E2] space-y-3">
          <p className="text-sm font-bold text-[#52635A]">موردی با این مشخصات یافت نشد.</p>
          <button
            onClick={() => {
              setSelectedCategory('all');
              setSearchQuery('');
            }}
            className="text-xs text-[#3E604F] font-bold underline"
          >
            مشاهده همه عکس‌ها
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => onOpenImage(item)}
              className="group bg-white rounded-2xl overflow-hidden border border-[#DFE8E2] shadow-2xs hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-[#F8FAF9]">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 text-white">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="text-[11px] bg-[#3E604F] text-white px-2.5 py-0.5 rounded-full font-bold">
                      {item.categoryFa}
                    </span>
                    {item.ageGroup && (
                      <span className="text-[11px] bg-white/20 px-2 py-0.5 rounded-full">
                        {item.ageGroup}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-stone-200 line-clamp-2">{item.description}</p>
                  <div className="mt-3 flex items-center justify-between text-xs font-bold text-[#9DB9A7]">
                    <span className="flex items-center gap-1">
                      <Eye className="w-3.5 h-3.5" /> مشاهده با کیفیت اصلی
                    </span>
                  </div>
                </div>

                <div className="absolute top-2.5 right-2.5 group-hover:opacity-0 transition-opacity">
                  <span className="bg-[#2D3A33]/80 backdrop-blur-md text-white text-[10px] font-medium px-2.5 py-1 rounded-lg">
                    {item.categoryFa}
                  </span>
                </div>
              </div>

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
      )}

      {/* Bottom Booking CTA */}
      <div className="bg-[#3E604F] p-8 rounded-3xl text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl shadow-[#3E604F]/20">
        <div className="space-y-1.5 text-right">
          <h3 className="text-lg sm:text-xl font-black">
            علاقه‌مند به ثبت این دکورها و سبک برای فرزندتان هستید؟
          </h3>
          <p className="text-xs sm:text-sm text-[#F8FAF9]/90">
            شما می‌توانید در هنگام رزرو، تم و دکورهای مورد علاقه خود را انتخاب فرمایید.
          </p>
        </div>
        <button
          onClick={() => onSelectTab('booking')}
          className="shrink-0 inline-flex items-center gap-2 bg-[#F8FAF9] hover:bg-white text-[#2D3A33] px-6 py-3 rounded-2xl font-bold text-xs sm:text-sm shadow-md transition active:scale-98"
        >
          <Calendar className="w-4 h-4 text-[#3E604F]" />
          <span>رزرو آنلاین نوبت آتلیه</span>
        </button>
      </div>

      {/* Studio Photo Uploader Modal */}
      <StudioPhotoUploaderModal
        isOpen={isUploaderOpen}
        onClose={() => setIsUploaderOpen(false)}
      />
    </div>
  );
};
