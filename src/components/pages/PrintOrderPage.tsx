import React, { useState } from 'react';
import { PRINT_SIZES, PRINT_TYPES } from '../../data/mockData';
import { savePrintOrder, formatToman, toPersianDigits } from '../../utils/storage';
import {
  Printer,
  Upload,
  Image as ImageIcon,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  Truck,
  Layers,
  HelpCircle,
  Maximize2,
  FileCheck,
  MessageCircle,
} from 'lucide-react';
import confetti from 'canvas-confetti';

export const PrintOrderPage: React.FC = () => {
  const [selectedType, setSelectedType] = useState('shasi');
  const [selectedSize, setSelectedSize] = useState('16×21');
  const [selectedFinish, setSelectedFinish] = useState<'silk' | 'matte' | 'glossy' | 'sand_laminate'>('silk');
  const [quantity, setQuantity] = useState(1);
  const [uploadedImage, setUploadedImage] = useState<string | null>(
    'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=800&auto=format&fit=crop'
  );
  const [customerName, setCustomerName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [fileNote, setFileNote] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [orderTracking, setOrderTracking] = useState('');

  // Calculate pricing
  const currentSizeObj = PRINT_SIZES.find((s) => s.size === selectedSize) || PRINT_SIZES[2];
  const currentTypeObj = PRINT_TYPES.find((t) => t.id === selectedType) || PRINT_TYPES[0];

  const unitPrice =
    selectedType === 'shasi'
      ? Math.round(currentSizeObj.basePrice * currentSizeObj.shasiMultiplier)
      : currentSizeObj.basePrice + currentTypeObj.extra;

  const totalPrice = unitPrice * quantity;

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (ev) => {
        if (ev.target?.result) {
          setUploadedImage(ev.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerName.trim() || !phoneNumber.trim()) return;

    const finishMap: Record<string, string> = {
      silk: 'سیلک عکاسی (ضد لک و اثر انگشت)',
      matte: 'مات مخملی',
      glossy: 'براق متالیک',
      sand_laminate: 'لمینت شنی با محافظ UV',
    };

    const newOrder = savePrintOrder({
      customerName,
      phoneNumber,
      address: address || 'تحویل حضوری در آتلیه سیلن کیدز',
      printType: selectedType as any,
      printTypeFa: currentTypeObj.name,
      size: selectedSize,
      sizeDimensions: currentSizeObj.label,
      finish: selectedFinish,
      finishFa: finishMap[selectedFinish],
      quantity,
      photoPreview: uploadedImage || undefined,
      fileNote,
      totalPrice,
    });

    setOrderTracking(newOrder.orderNumber);
    setIsSubmitted(true);
    confetti({ particleCount: 80, spread: 70, origin: { y: 0.6 } });
  };

  const baleDirectMsg = `سلام استودیو سیلن، سفارش چاپ جدید با شماره ${orderTracking} ثبت کردم به نام ${customerName}، شماره تماس: ${phoneNumber}`;
  const baleDirectUrl = `https://ble.ir/silenkids?text=${encodeURIComponent(baleDirectMsg)}`;

  return (
    <div className="py-10 space-y-12 max-w-7xl mx-auto px-4 sm:px-6">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#9DB9A7]/25 text-[#3E604F] text-xs font-bold">
          <Printer className="w-4 h-4 text-[#3E604F]" />
          <span>لابراتوار تخصصی چاپ عکس و شاسی سیلن</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-[#2D3A33]">
          سامانه آنلاین سفارش چاپ عکس، تخته شاسی و قاب ژورنالی
        </h1>
        <p className="text-[#52635A] text-sm leading-relaxed">
          چاپ سیلک فاین‌آرت، ضد آب، ضد اثر انگشت با ماندگری رنگ ۱۰۰ ساله و تحویل فوری
        </p>
      </div>

      {isSubmitted ? (
        <div className="bg-white max-w-2xl mx-auto p-8 rounded-3xl border border-[#DFE8E2] shadow-xl space-y-6 text-center">
          <div className="w-16 h-16 rounded-full bg-[#9DB9A7]/25 text-[#3E604F] flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-10 h-10 text-[#3E604F]" />
          </div>

          <div className="space-y-2">
            <h2 className="text-xl font-black text-[#2D3A33]">
              سفارش چاپ شما با موفقیت ثبت شد!
            </h2>
            <p className="text-xs sm:text-sm text-[#52635A]">
              کد پیگیری سفارش شما: <strong className="text-[#3E604F] font-mono text-base font-bold">{orderTracking}</strong>
            </p>
          </div>

          <div className="bg-[#F8FAF9] p-4 rounded-2xl border border-[#DFE8E2] text-right space-y-2 text-xs text-[#2D3A33]">
            <div className="flex justify-between">
              <span className="text-[#3E604F]">نوع محصول:</span>
              <span className="font-bold">{currentTypeObj.name}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#3E604F]">ابعاد:</span>
              <span className="font-bold">{currentSizeObj.label}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#3E604F]">تعداد:</span>
              <span className="font-bold">{toPersianDigits(quantity)} عدد</span>
            </div>
            <div className="flex justify-between border-t border-[#DFE8E2] pt-2 text-sm text-[#3E604F] font-bold">
              <span>مبلغ کل:</span>
              <span>{formatToman(totalPrice)}</span>
            </div>
          </div>

          <div className="space-y-2">
            <a
              href={baleDirectUrl}
              target="_blank"
              rel="noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 bg-[#00a859] hover:bg-[#008f4c] text-white py-3 px-4 rounded-xl text-xs sm:text-sm font-bold shadow-md transition"
            >
              <MessageCircle className="w-4 h-4" />
              <span>ارسال تاییدیه سفارش به پیام‌رسان بله استودیو</span>
            </a>

            <button
              onClick={() => setIsSubmitted(false)}
              className="w-full py-2.5 bg-[#F2F7F4] hover:bg-[#DFE8E2] text-[#2D3A33] rounded-xl text-xs font-bold transition"
            >
              ثبت سفارش چاپ دیگر
            </button>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Interactive Live Preview Simulator */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white p-6 rounded-3xl border border-[#DFE8E2] shadow-xs space-y-4 text-center">
              <h3 className="text-sm font-bold text-[#2D3A33] flex items-center justify-center gap-2">
                <Maximize2 className="w-4 h-4 text-[#3E604F]" />
                <span>پیش‌نمایش زنده تخته شاسی و ابعاد</span>
              </h3>

              {/* Shasi / Frame Canvas Mockup */}
              <div className="relative mx-auto bg-[#F8FAF9] p-4 rounded-2xl flex items-center justify-center min-h-[300px] border border-[#DFE8E2] overflow-hidden">
                <div
                  className={`relative transition-all duration-300 ${
                    selectedType === 'shasi'
                      ? 'border-4 border-[#2D3A33] shadow-2xl rounded-xs'
                      : selectedType === 'luxury_frame'
                      ? 'border-12 border-[#9DB9A7] p-2 shadow-2xl bg-white rounded-md'
                      : 'border-2 border-[#DFE8E2] shadow-md'
                  }`}
                  style={{
                    width: '82%',
                    aspectRatio: selectedSize === '10×15' ? '15/10' : '4/3',
                  }}
                >
                  {uploadedImage ? (
                    <img
                      src={uploadedImage}
                      alt="پیش نمایش چاپ"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center bg-stone-200 text-[#52635A] p-4">
                      <ImageIcon className="w-10 h-10 mb-1" />
                      <span className="text-xs">عکسی بارگذاری نشده</span>
                    </div>
                  )}

                  {/* Surface sheen effect for Silk/Glossy */}
                  {selectedFinish === 'silk' && (
                    <div className="absolute inset-0 bg-radial from-white/15 to-transparent pointer-events-none opacity-60"></div>
                  )}
                </div>
              </div>

              {/* Upload image button */}
              <div>
                <label className="cursor-pointer inline-flex items-center gap-2 bg-[#9DB9A7]/25 hover:bg-[#9DB9A7]/35 text-[#3E604F] text-xs font-bold px-4 py-2.5 rounded-xl transition border border-[#9DB9A7]/40">
                  <Upload className="w-4 h-4 text-[#3E604F]" />
                  <span>آپلود عکس از کامپیوتر یا موبایل</span>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                </label>
                <p className="text-[11px] text-[#52635A] mt-1">
                  عکس‌های ارسالی با کیفیت اصلی برای ادیت و چاپ ارسال می‌شوند
                </p>
              </div>

              {/* Live Price Box */}
              <div className="bg-[#F8FAF9] p-4 rounded-2xl border border-[#DFE8E2] text-right space-y-2">
                <div className="flex items-center justify-between text-xs text-[#52635A]">
                  <span>قیمت واحد ({selectedSize}):</span>
                  <span className="font-bold text-[#2D3A33]">{formatToman(unitPrice)}</span>
                </div>
                <div className="flex items-center justify-between text-sm font-black text-[#2D3A33] pt-2 border-t border-[#DFE8E2]">
                  <span>مجموع فاکتور ({toPersianDigits(quantity)} عدد):</span>
                  <span className="text-base text-[#3E604F]">{formatToman(totalPrice)}</span>
                </div>
              </div>
            </div>

            {/* Quality Badges */}
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="bg-white p-3.5 rounded-2xl border border-[#DFE8E2] flex items-center gap-2.5">
                <ShieldCheck className="w-5 h-5 text-[#3E604F] shrink-0" />
                <span className="text-[#2D3A33]">ماندگاری ۱۰۰ ساله رنگ</span>
              </div>
              <div className="bg-white p-3.5 rounded-2xl border border-[#DFE8E2] flex items-center gap-2.5">
                <Truck className="w-5 h-5 text-[#3E604F] shrink-0" />
                <span className="text-[#2D3A33]">بسته‌بندی ضربه‌گیر و امن</span>
              </div>
            </div>
          </div>

          {/* Right Column: Customizer & Order Form */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-3xl border border-[#DFE8E2] shadow-xs space-y-6 text-right">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Step 1: Print Type */}
              <div className="space-y-2">
                <label className="block text-xs font-bold text-[#2D3A33]">
                  ۱. نوع محصول چاپ را انتخاب فرمایید:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {PRINT_TYPES.map((t) => (
                    <div
                      key={t.id}
                      onClick={() => setSelectedType(t.id)}
                      className={`p-3 rounded-2xl border cursor-pointer transition ${
                        selectedType === t.id
                          ? 'border-[#9DB9A7] bg-[#9DB9A7]/15 shadow-2xs'
                          : 'border-[#DFE8E2] hover:border-[#3E604F]/40 bg-[#F8FAF9]'
                      }`}
                    >
                      <p className="text-xs font-bold text-[#2D3A33]">{t.name}</p>
                      <p className="text-[11px] text-[#52635A] mt-0.5">{t.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Step 2: Size Selection */}
              <div className="space-y-2">
                <label className="block text-xs font-bold text-[#2D3A33]">
                  ۲. سایز و ابعاد چاپ را انتخاب فرمایید:
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {PRINT_SIZES.map((s) => (
                    <button
                      type="button"
                      key={s.size}
                      onClick={() => setSelectedSize(s.size)}
                      className={`p-2.5 rounded-xl border text-right transition ${
                        selectedSize === s.size
                          ? 'border-[#3E604F] bg-[#3E604F] text-white font-bold'
                          : 'border-[#DFE8E2] bg-white hover:bg-[#F8FAF9] text-[#2D3A33]'
                      }`}
                    >
                      <div className="text-xs font-bold">{s.size} cm</div>
                      <div className={`text-[10px] ${selectedSize === s.size ? 'text-[#DFE8E2]' : 'text-[#3E604F]'}`}>
                        {s.label.split('(')[1]?.replace(')', '') || ''}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 3: Paper Finish */}
              <div className="space-y-2">
                <label className="block text-xs font-bold text-[#2D3A33]">
                  ۳. جنس کاغذ و پوشش نهایی:
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                  {[
                    { id: 'silk', label: 'سیلک فاین‌آرت (مات ضد لک)' },
                    { id: 'matte', label: 'مات مخملی کلاسیک' },
                    { id: 'glossy', label: 'براق متالیک کریستالی' },
                    { id: 'sand_laminate', label: 'لمینت شنی با محافظ UV' },
                  ].map((f) => (
                    <button
                      type="button"
                      key={f.id}
                      onClick={() => setSelectedFinish(f.id as any)}
                      className={`p-2.5 rounded-xl border text-center transition ${
                        selectedFinish === f.id
                          ? 'border-[#3E604F] bg-[#9DB9A7]/25 text-[#3E604F] font-bold'
                          : 'border-[#DFE8E2] bg-white text-[#2D3A33]'
                      }`}
                    >
                      {f.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 4: Quantity */}
              <div className="flex items-center gap-4">
                <label className="text-xs font-bold text-[#2D3A33]">
                  تعداد سفارش:
                </label>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-8 h-8 rounded-lg bg-[#F2F7F4] hover:bg-[#DFE8E2] text-[#2D3A33] font-bold flex items-center justify-center text-sm"
                  >
                    -
                  </button>
                  <span className="w-10 text-center font-bold font-mono text-sm text-[#2D3A33]">
                    {toPersianDigits(quantity)}
                  </span>
                  <button
                    type="button"
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-8 h-8 rounded-lg bg-[#F2F7F4] hover:bg-[#DFE8E2] text-[#2D3A33] font-bold flex items-center justify-center text-sm"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Step 5: Customer Details */}
              <div className="pt-4 border-t border-[#DFE8E2] space-y-3">
                <h4 className="text-xs font-bold text-[#2D3A33]">
                  اطلاعات تحویل‌گیرنده و نشانی:
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-medium text-[#2D3A33] mb-1">
                      نام و نام خانوادگی *
                    </label>
                    <input
                      type="text"
                      required
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      placeholder="مثال: مریم کریمی"
                      className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-[#DFE8E2] focus:outline-hidden focus:border-[#3E604F]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#2D3A33] mb-1">
                      شماره موبایل (جهت هماهنگی و پیامک) *
                    </label>
                    <input
                      type="tel"
                      required
                      dir="ltr"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      placeholder="0912xxxxxxx"
                      className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-[#DFE8E2] focus:outline-hidden focus:border-[#3E604F] text-left"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#2D3A33] mb-1">
                    آدرس کامل جهت ارسال پستی / پیک (یا درج 'تحویل حضوری در آتلیه')
                  </label>
                  <input
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="تهران، اتوبان شهید رئیسی..."
                    className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-[#DFE8E2] focus:outline-hidden focus:border-[#3E604F]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#2D3A33] mb-1">
                    یادداشت یا توضیحات ادیت (اختیاری)
                  </label>
                  <textarea
                    rows={2}
                    value={fileNote}
                    onChange={(e) => setFileNote(e.target.value)}
                    placeholder="توضیحات در خصوص روتوش، رنگ یا زمان مدنظر..."
                    className="w-full text-xs px-3.5 py-2 rounded-xl border border-[#DFE8E2] focus:outline-hidden focus:border-[#3E604F]"
                  ></textarea>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3.5 bg-[#3E604F] hover:bg-[#2E4B3E] text-white rounded-2xl text-xs sm:text-sm font-bold shadow-lg shadow-[#3E604F]/20 transition flex items-center justify-center gap-2 active:scale-98"
              >
                <Printer className="w-4 h-4 text-[#9DB9A7]" />
                <span>ثبت نهایی سفارش چاپ ({formatToman(totalPrice)})</span>
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
