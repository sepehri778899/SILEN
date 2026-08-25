import React, { useState } from 'react';
import { saveConsultation } from '../../utils/storage';
import { X, Send, CheckCircle2, MessageCircle, Sparkles, Phone } from 'lucide-react';
import confetti from 'canvas-confetti';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({ isOpen, onClose }) => {
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [serviceCategory, setServiceCategory] = useState<'pregnancy' | 'newborn' | 'kids' | 'family' | 'birthday' | 'general'>('general');
  const [message, setMessage] = useState('');
  const [preferredCallTime, setPreferredCallTime] = useState('عصرها ۱۶ الی ۱۹');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !phoneNumber.trim()) return;

    saveConsultation({
      fullName,
      phoneNumber,
      serviceCategory,
      message: message || 'درخواست مشاوره فوری تلفنی و دریافت کاتالوگ پکیج‌ها',
      preferredCallTime,
    });

    setSubmitted(true);
    confetti({ particleCount: 60, spread: 60, origin: { y: 0.6 } });
  };

  const baleDirectMsg = `سلام استودیو سیلن کیدز، من ${fullName || 'کاربر وبسایت'} هستم. درخواست مشاوره عکاسی در خصوص ${serviceCategory} دارم. شماره تماس: ${phoneNumber}`;
  const baleDirectUrl = `https://ble.ir/silenkids?text=${encodeURIComponent(baleDirectMsg)}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
      <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-6 sm:p-7 relative animate-in fade-in zoom-in-95 duration-200 text-right border border-[#DFE8E2]">
        <button
          onClick={onClose}
          className="absolute top-4 left-4 p-2 rounded-xl text-[#52635A] hover:text-[#2D3A33] hover:bg-[#F2F7F4] transition"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-1.5 mb-5">
          <div className="inline-flex items-center gap-1.5 text-[11px] font-bold text-[#3E604F] bg-[#9DB9A7]/25 px-2.5 py-0.5 rounded-full">
            <Sparkles className="w-3.5 h-3.5 text-[#3E604F]" />
            <span>مشاوره تخصصی و راهنمایی رایگان</span>
          </div>
          <h3 className="text-lg font-black text-[#2D3A33]">
            درخواست تماس و مشاوره با آتلیه سیلن
          </h3>
          <p className="text-xs text-[#52635A]">
            شماره خود را ثبت کنید تا کارشناس عکاسی در ساعت دلخواه با شما تماس بگیرد.
          </p>
        </div>

        {submitted ? (
          <div className="py-6 text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-[#9DB9A7]/25 text-[#3E604F] flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8 text-[#3E604F]" />
            </div>
            <div className="space-y-1">
              <h4 className="text-base font-bold text-[#2D3A33]">
                درخواست شما با موفقیت ثبت شد!
              </h4>
              <p className="text-xs text-[#52635A]">
                اطلاعات در پنل استودیو سیلن ثبت گردید و در زمان انتخابی با شما تماس می‌گیریم.
              </p>
            </div>

            <div className="pt-2">
              <a
                href={baleDirectUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#00a859] hover:bg-[#008f4c] text-white py-2.5 px-4 rounded-xl text-xs font-bold shadow-md transition"
              >
                <MessageCircle className="w-4 h-4" />
                <span>ادامه گفتگو در پیام‌رسان بله استودیو</span>
              </a>
            </div>

            <button
              onClick={onClose}
              className="text-xs text-[#52635A] hover:text-[#2D3A33] underline block mx-auto pt-1"
            >
              بستن پنجره
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3.5">
            <div>
              <label className="block text-xs font-semibold text-[#2D3A33] mb-1">
                نام و نام خانوادگی *
              </label>
              <input
                type="text"
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="مثال: خانم حسینی"
                className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-[#DFE8E2] focus:outline-hidden focus:border-[#3E604F] text-[#2D3A33]"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#2D3A33] mb-1">
                شماره موبایل (جهت تماس و ارسال به بله) *
              </label>
              <input
                type="tel"
                required
                dir="ltr"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder="0912xxxxxxx"
                className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-[#DFE8E2] focus:outline-hidden focus:border-[#3E604F] text-[#2D3A33] text-left"
              />
            </div>

            <div className="grid grid-cols-2 gap-2.5">
              <div>
                <label className="block text-xs font-semibold text-[#2D3A33] mb-1">
                  زمینه عکاسی
                </label>
                <select
                  value={serviceCategory}
                  onChange={(e) => setServiceCategory(e.target.value as any)}
                  className="w-full text-xs px-3 py-2.5 rounded-xl border border-[#DFE8E2] focus:outline-hidden focus:border-[#3E604F] bg-white text-[#2D3A33]"
                >
                  <option value="pregnancy">بارداری و مادرانه</option>
                  <option value="newborn">نوزادی (نیوبورن)</option>
                  <option value="kids">کودک و پرتره</option>
                  <option value="birthday">تولد و دندونی</option>
                  <option value="family">خانوادگی</option>
                  <option value="general">مشاوره عمومی / چاپ</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#2D3A33] mb-1">
                  ساعت تماس
                </label>
                <select
                  value={preferredCallTime}
                  onChange={(e) => setPreferredCallTime(e.target.value)}
                  className="w-full text-xs px-3 py-2.5 rounded-xl border border-[#DFE8E2] focus:outline-hidden focus:border-[#3E604F] bg-white text-[#2D3A33]"
                >
                  <option value="در اسرع وقت">در اسرع وقت</option>
                  <option value="صبح‌ها ۱۰ الی ۱۳">صبح‌ها ۱۰ الی ۱۳</option>
                  <option value="عصرها ۱۶ الی ۱۹">عصرها ۱۶ الی ۱۹</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#2D3A33] mb-1">
                توضیحات یا سوال (اختیاری)
              </label>
              <textarea
                rows={2}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="سن کودک، تاریخ زایمان، یا تم مورد علاقه..."
                className="w-full text-xs px-3.5 py-2 rounded-xl border border-[#DFE8E2] focus:outline-hidden focus:border-[#3E604F] text-[#2D3A33]"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-[#3E604F] hover:bg-[#2E4B3E] text-white rounded-xl text-xs sm:text-sm font-bold shadow-md shadow-[#3E604F]/20 transition flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4 text-[#D4A373]" />
              <span>ارسال درخواست مشاوره</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
