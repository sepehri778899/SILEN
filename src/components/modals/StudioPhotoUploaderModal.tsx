import React, { useState, useRef } from 'react';
import { usePortfolioManager } from '../../utils/useCustomImages';
import { ServiceCategory } from '../../types';
import {
  Upload,
  X,
  Check,
  Sparkles,
  Camera,
  Layers,
  Trash2,
  RefreshCw,
  Image as ImageIcon,
  CheckCircle2,
  Info,
} from 'lucide-react';

interface StudioPhotoUploaderModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PRESET_THEMES: {
  title: string;
  category: ServiceCategory;
  categoryFa: string;
  theme: string;
  ageGroup: string;
  description: string;
}[] = [
  {
    title: 'دکور تولد یک سالگی سبز و کیک خرس',
    category: 'birthday',
    categoryFa: 'تولد و یک سالگی',
    theme: 'تم تولد سبز زیتونی و استند چوبی',
    ageGroup: 'یک سالگی',
    description: 'استند آرک Happy Birthday، بادکنک‌های سبز سدری مات، کیک مینیمال HBD و عدد ۱ چوبی',
  },
  {
    title: 'جشن اولین مروارید (تم دندونی First Tooth)',
    category: 'birthday',
    categoryFa: 'دندونی و مناسبتی',
    theme: 'دکور دندونی چوبی First Tooth',
    ageGroup: '۷ الی ۹ ماهگی',
    description: 'ماکت دندان بزرگ، کلاه بوقی دندونی، تخت چوبی مینیاتوری و لباس گلدار',
  },
  {
    title: 'استایل کلاسیک جنتلمن با مبل چرم و عینک دودی',
    category: 'portrait',
    categoryFa: 'پرتره اختصاصی',
    theme: 'کلاسیک جنتلمن 01 Years',
    ageGroup: 'یک سالگی',
    description: 'ژست جذاب با عینک آفتابی، مبل تک چرم مشکی، دراور چوبی، ساعت و آباژور و مکعب 01 Years',
  },
  {
    title: 'دکور کارتونی خانه هویج و خرگوش‌های مهربان',
    category: 'kids',
    categoryFa: 'کودک',
    theme: 'تم فانتزی خرگوش و خانه هویج',
    ageGroup: '۸ ماهگی',
    description: 'ماکت آبرنگی خانه هویج، صندلی ببعی تدی و رامپر گلدار بهاری نوزاد',
  },
  {
    title: 'سفر با قطار چوبی دست‌ساز بزرگ آتلیه سیلن',
    category: 'kids',
    categoryFa: 'کودک',
    theme: 'قطار چوبی کلاسیک استودیو',
    ageGroup: '۲ سالگی',
    description: 'عکاسی کودک در حال بازی با لوکوموتیو و قطار چوبی بزرگ دست‌ساز',
  },
  {
    title: 'خنده شاداب با زرافه مخملی و ریسه بوهو',
    category: 'kids',
    categoryFa: 'کودک',
    theme: 'دکور دوستانه زرافه و پرچم بوهو',
    ageGroup: '۲ الی ۳ سالگی',
    description: 'پیراهن راه‌راه، شورت زیتونی، عروسک بلند زرافه و ریسه پرچم‌های رنگی',
  },
  {
    title: 'مسافر کوچک در چمدان چرمی وینتیج',
    category: 'kids',
    categoryFa: 'کودک و پرتره',
    theme: 'تم وینتیج چمدان و سفر',
    ageGroup: '۶ الی ۹ ماهگی',
    description: 'چمدان مسافرتی چرمی قدیمی، پتوی نرم، کلاه و پاپیون و تلفن قدیمی',
  },
  {
    title: 'خواب آرام فرشته کوچک با قنداق ارگانیک',
    category: 'newborn',
    categoryFa: 'نوزادی (نیوبورن)',
    theme: 'قنداق نرم ارگانیک و هدبند گل',
    ageGroup: '۱۰ روزگی',
    description: 'قنداق‌پیچی اصولی، پارچه خردلی لطیف، هدبند ظریف گلدار در اتاق ۲۸ درجه نوزاد',
  },
  {
    title: 'عکاسی هنری بارداری در آغوش نور و حریر',
    category: 'pregnancy',
    categoryFa: 'بارداری (مادران)',
    theme: 'حریر و پرده نور نچرال',
    ageGroup: 'هفته ۳۰ بارداری',
    description: 'پیراهن‌های حریر اروپایی کمد رایگان آتلیه سیلن با نورپردازی طبیعی',
  },
  {
    title: 'پرتره گرم خانوادگی در استودیو سیلن',
    category: 'family',
    categoryFa: 'خانوادگی',
    theme: 'پرتره صمیمی کژوال',
    ageGroup: 'خانواده ۴ نفره',
    description: 'عکس یادگاری هماهنگ با پدر، مادر و فرزند با پالت رنگی خنثی',
  },
];

export const StudioPhotoUploaderModal: React.FC<StudioPhotoUploaderModalProps> = ({
  isOpen,
  onClose,
}) => {
  const { items, addCustomImage, deleteItem, resetToDefaults } = usePortfolioManager();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [selectedPreset, setSelectedPreset] = useState<number>(0);
  const [customTitle, setCustomTitle] = useState('');
  const [previewImages, setPreviewImages] = useState<{ name: string; dataUrl: string }[]>([]);
  const [successMessage, setSuccessMessage] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  if (!isOpen) return null;

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    setIsProcessing(true);
    const readers: Promise<{ name: string; dataUrl: string }>[] = [];

    Array.from(files).forEach((file: File) => {
      readers.push(
        new Promise((resolve) => {
          const reader = new FileReader();
          reader.onload = (event) => {
            resolve({
              name: file.name,
              dataUrl: event.target?.result as string,
            });
          };
          reader.readAsDataURL(file);
        })
      );
    });

    Promise.all(readers).then((results) => {
      setPreviewImages((prev) => [...prev, ...results]);
      setIsProcessing(false);
    });
  };

  const handleSaveAll = () => {
    if (previewImages.length === 0) return;

    const preset = PRESET_THEMES[selectedPreset] || PRESET_THEMES[0];

    previewImages.forEach((img, idx) => {
      const title =
        customTitle.trim() ||
        (previewImages.length > 1 ? `${preset.title} (عکس ${idx + 1})` : preset.title);

      addCustomImage(img.dataUrl, {
        title,
        category: preset.category,
        categoryFa: preset.categoryFa,
        description: preset.description,
        theme: preset.theme,
        ageGroup: preset.ageGroup,
        tags: ['سیلن کیدز', preset.theme, preset.categoryFa],
        isFeatured: true,
      });
    });

    setSuccessMessage(`تعداد ${previewImages.length} عکس با موفقیت به گالری و سایت اضافه شدند!`);
    setPreviewImages([]);
    setCustomTitle('');

    setTimeout(() => {
      setSuccessMessage('');
    }, 4000);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-3xl w-full border border-[#DFE8E2] shadow-2xl overflow-hidden text-right flex flex-col max-h-[90vh]">
        {/* Modal Header */}
        <div className="bg-[#3E604F] text-white p-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-white/15 flex items-center justify-center">
              <Camera className="w-5 h-5 text-[#9DB9A7]" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-bold">بارگذاری عکس‌های واقعی استودیو سیلن</h2>
              <p className="text-xs text-[#DFE8E2]">
                عکس‌های اختصاصی خود را مستقیماً در سایت بارگذاری و در گالری و بنرها ذخیره کنید
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1">
          {/* Notification */}
          {successMessage && (
            <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-2xl flex items-center gap-3 text-emerald-800 text-xs font-bold animate-fade-in">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
              <span>{successMessage}</span>
            </div>
          )}

          {/* Info Notice */}
          <div className="bg-[#F8FAF9] border border-[#DFE8E2] p-4 rounded-2xl flex items-start gap-3 text-xs text-[#52635A] leading-relaxed">
            <Info className="w-5 h-5 text-[#3E604F] shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-[#2D3A33]">راهنمای افزودن عکس‌های واقعی ۲۳ گانه شما به سایت:</p>
              <p>
                شما می‌توانید تمام ۲۳ فایل عکس اصلی خود (مانند فایل‌های <code>IMG_20260824_215825.jpg</code>، <code>IMG_20260806_200701.jpg</code> و ...) را از کامپیوتر یا گوشی خود انتخاب کنید تا سریعاً در گالری و دسته‌بندی‌های سایت قرار گیرند.
              </p>
            </div>
          </div>

          {/* Upload Area */}
          <div
            onClick={() => fileInputRef.current?.click()}
            className="border-2 border-dashed border-[#9DB9A7] hover:border-[#3E604F] bg-[#F2F7F4]/50 hover:bg-[#F2F7F4] p-8 rounded-3xl text-center cursor-pointer transition flex flex-col items-center justify-center gap-3 group"
          >
            <div className="w-14 h-14 rounded-2xl bg-[#9DB9A7]/30 text-[#3E604F] flex items-center justify-center group-hover:scale-110 transition">
              <Upload className="w-7 h-7" />
            </div>
            <div>
              <h3 className="text-sm sm:text-base font-extrabold text-[#2D3A33]">
                برای انتخاب عکس‌های واقعی آتلیه سیلن اینجا کلیک کنید
              </h3>
              <p className="text-xs text-[#52635A] mt-1">
                پشتیبانی از انتخاب همزمان چندین عکس (JPG, PNG, WEBP) با بالاترین کیفیت
              </p>
            </div>
            <input
              ref={fileInputRef}
              type="file"
              multiple
              accept="image/*"
              className="hidden"
              onChange={handleFileSelect}
            />
          </div>

          {/* If files selected for staging */}
          {previewImages.length > 0 && (
            <div className="space-y-4 bg-white border border-[#DFE8E2] p-5 rounded-2xl shadow-xs">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-[#2D3A33]">
                  تعداد عکس‌های انتخاب شده: {previewImages.length} تصویر
                </span>
                <button
                  onClick={() => setPreviewImages([])}
                  className="text-xs text-rose-600 hover:text-rose-700 font-bold"
                >
                  پاکسازی انتخاب‌ها
                </button>
              </div>

              {/* Thumbnails preview */}
              <div className="grid grid-cols-4 sm:grid-cols-6 gap-2 max-h-40 overflow-y-auto p-2 bg-[#F8FAF9] rounded-xl border border-[#DFE8E2]">
                {previewImages.map((img, idx) => (
                  <div key={idx} className="relative aspect-square rounded-lg overflow-hidden border border-white shadow-2xs group">
                    <img src={img.dataUrl} alt={img.name} className="w-full h-full object-cover" />
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setPreviewImages(previewImages.filter((_, i) => i !== idx));
                      }}
                      className="absolute top-1 right-1 bg-black/60 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </div>
                ))}
              </div>

              {/* Select Theme / Decor */}
              <div className="space-y-2">
                <label className="block text-xs font-bold text-[#2D3A33]">
                  تخصیص به دکور و تم استودیو سیلن:
                </label>
                <select
                  value={selectedPreset}
                  onChange={(e) => setSelectedPreset(Number(e.target.value))}
                  className="w-full text-xs p-3 rounded-xl border border-[#DFE8E2] bg-white focus:outline-hidden focus:border-[#3E604F] text-[#2D3A33]"
                >
                  {PRESET_THEMES.map((theme, index) => (
                    <option key={index} value={index}>
                      {theme.title} ({theme.categoryFa}) - {theme.ageGroup}
                    </option>
                  ))}
                </select>
              </div>

              {/* Optional Custom Title */}
              <div className="space-y-2">
                <label className="block text-xs font-bold text-[#2D3A33]">
                  عنوان دلخواه برای نمایش در سایت (اختیاری):
                </label>
                <input
                  type="text"
                  value={customTitle}
                  onChange={(e) => setCustomTitle(e.target.value)}
                  placeholder="مثال: عکس تولد ۱ سالگی گل دکور سبز زیتونی"
                  className="w-full text-xs p-3 rounded-xl border border-[#DFE8E2] bg-white focus:outline-hidden focus:border-[#3E604F] text-[#2D3A33]"
                />
              </div>

              <button
                onClick={handleSaveAll}
                disabled={isProcessing}
                className="w-full py-3 bg-[#3E604F] hover:bg-[#2E4B3E] text-white rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md transition"
              >
                <Check className="w-4 h-4" />
                <span>تایید و ذخیره {previewImages.length} عکس در گالری سایت</span>
              </button>
            </div>
          )}

          {/* Current Gallery Items Management */}
          <div className="space-y-3 pt-2">
            <div className="flex items-center justify-between">
              <h4 className="text-xs sm:text-sm font-bold text-[#2D3A33]">
                عکس‌های فعلی موجود در گالری ({items.length} تصویر)
              </h4>
              <button
                onClick={resetToDefaults}
                className="text-xs text-[#52635A] hover:text-[#2D3A33] flex items-center gap-1 font-medium"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>بازنشانی به حالت پیش‌فرض</span>
              </button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-h-60 overflow-y-auto p-2 bg-[#F8FAF9] rounded-2xl border border-[#DFE8E2]">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="relative group bg-white rounded-xl overflow-hidden border border-[#DFE8E2] shadow-2xs text-right"
                >
                  <div className="aspect-[4/5] bg-stone-100 overflow-hidden relative">
                    <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover" />
                    <button
                      onClick={() => deleteItem(item.id)}
                      className="absolute top-1.5 left-1.5 p-1.5 bg-rose-600/90 hover:bg-rose-700 text-white rounded-lg opacity-0 group-hover:opacity-100 transition shadow-xs"
                      title="حذف این عکس"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                  <div className="p-2">
                    <p className="text-[11px] font-bold text-[#2D3A33] line-clamp-1">{item.title}</p>
                    <p className="text-[10px] text-[#52635A]">{item.categoryFa}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="bg-[#F8FAF9] border-t border-[#DFE8E2] p-4 flex items-center justify-end gap-3">
          <button
            onClick={onClose}
            className="px-6 py-2.5 bg-white border border-[#DFE8E2] hover:bg-[#F2F7F4] text-[#2D3A33] rounded-xl text-xs font-bold transition"
          >
            بستن پنجره
          </button>
        </div>
      </div>
    </div>
  );
};
