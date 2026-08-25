import React from 'react';
import { PortfolioItem } from '../../types';
import { X, Calendar, Tag, Sparkles, Phone, MessageCircle } from 'lucide-react';

interface ImageViewerModalProps {
  item: PortfolioItem | null;
  onClose: () => void;
  onSelectTab: (tab: string) => void;
}

export const ImageViewerModal: React.FC<ImageViewerModalProps> = ({
  item,
  onClose,
  onSelectTab,
}) => {
  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="bg-white rounded-3xl shadow-2xl max-w-4xl w-full overflow-hidden relative animate-in fade-in zoom-in-95 duration-200 grid grid-cols-1 md:grid-cols-12 text-right border border-[#DFE8E2]">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 left-4 z-20 p-2.5 rounded-full bg-black/60 hover:bg-black/80 text-white backdrop-blur-xs transition"
          aria-label="بستن تصویر"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Photo View */}
        <div className="md:col-span-7 bg-[#2D3A33] flex items-center justify-center relative min-h-[340px] max-h-[75vh]">
          <img
            src={item.imageUrl}
            alt={item.title}
            className="w-full h-full object-contain max-h-[75vh]"
          />
        </div>

        {/* Details & Action Panel */}
        <div className="md:col-span-5 p-6 sm:p-7 flex flex-col justify-between space-y-6 bg-white">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-xs bg-[#9DB9A7]/25 text-[#3E604F] font-bold px-3 py-1 rounded-full">
                {item.categoryFa}
              </span>
              {item.ageGroup && (
                <span className="text-xs bg-[#F8FAF9] border border-[#DFE8E2] text-[#52635A] px-2.5 py-1 rounded-full">
                  {item.ageGroup}
                </span>
              )}
            </div>

            <h2 className="text-lg font-black text-[#2D3A33] leading-snug">
              {item.title}
            </h2>

            <p className="text-xs sm:text-sm text-[#52635A] leading-relaxed">
              {item.description}
            </p>

            {item.theme && (
              <div className="p-3 bg-[#F8FAF9] rounded-xl border border-[#DFE8E2] text-xs">
                <span className="text-[#52635A]">تم و دکور: </span>
                <strong className="text-[#2D3A33]">{item.theme}</strong>
              </div>
            )}

            <div className="flex flex-wrap gap-1.5 pt-1">
              {item.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="text-[11px] bg-[#F8FAF9] border border-[#DFE8E2] text-[#52635A] px-2 py-0.5 rounded-md"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-2 pt-4 border-t border-[#DFE8E2]">
            <button
              onClick={() => {
                onClose();
                onSelectTab('booking');
              }}
              className="w-full py-3 bg-[#3E604F] hover:bg-[#2E4B3E] text-white rounded-xl text-xs sm:text-sm font-bold shadow-md shadow-[#3E604F]/20 transition flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4 text-[#9DB9A7]" />
              <span>رزرو نوبت عکاسی با این سبک</span>
            </button>

            <a
              href="https://ble.ir/silenkids"
              target="_blank"
              rel="noreferrer"
              className="w-full py-2.5 bg-[#9DB9A7]/20 hover:bg-[#9DB9A7]/30 text-[#3E604F] rounded-xl text-xs font-bold transition flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4 text-[#3E604F]" />
              <span>استعلام نوبت در پیام‌رسان بله</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
