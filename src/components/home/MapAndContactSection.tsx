import React, { useState } from 'react';
import { STUDIO_INFO } from '../../data/mockData';
import { saveConsultation } from '../../utils/storage';
import {
  MapPin,
  Phone,
  Clock,
  Send,
  Navigation,
  ExternalLink,
  CheckCircle2,
  Sparkles,
  MessageCircle,
  Copy,
  Check,
} from 'lucide-react';
import confetti from 'canvas-confetti';

export const MapAndContactSection: React.FC = () => {
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [serviceCategory, setServiceCategory] = useState<'pregnancy' | 'newborn' | 'kids' | 'family' | 'birthday' | 'general'>('general');
  const [message, setMessage] = useState('');
  const [preferredCallTime, setPreferredCallTime] = useState('عصرها ۱۶ الی ۱۹');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

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

    setIsSubmitted(true);
    confetti({ particleCount: 70, spread: 70, origin: { y: 0.7 } });
  };

  const copyAddress = () => {
    navigator.clipboard.writeText(STUDIO_INFO.address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const baleDirectMsg = `سلام استودیو سیلن کیدز، من ${fullName || 'کاربر وبسایت'} هستم. درخواست مشاوره عکاسی در خصوص ${serviceCategory} دارم. شماره تماس: ${phoneNumber}`;
  const baleDirectUrl = `https://ble.ir/silenkids?text=${encodeURIComponent(baleDirectMsg)}`;

  return (
    <section className="py-16 bg-[#F8FAF9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <span className="text-xs font-bold text-[#3E604F] bg-[#9DB9A7]/25 px-3.5 py-1 rounded-full">
            موقعیت مکانی، نقشه و راه‌های ارتباطی
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-[#2D3A33]">
            مراجعه حضوری به استودیو سیلن کیدز در تهران
          </h2>
          <p className="text-[#52635A] text-sm">
            اتوبان شهید رئیسی، مجتمع تجاری زیتون با دسترسی روان، آسانسور و پارکینگ اختصاصی
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Column 1: Map & Location Card */}
          <div className="lg:col-span-7 space-y-6">
            {/* Visual Interactive Map Card */}
            <div className="relative rounded-3xl overflow-hidden border border-[#DFE8E2] shadow-md bg-[#F2F7F4] aspect-[16/10] sm:aspect-[16/9]">
              {/* Map Canvas Background Simulator */}
              <iframe
                title="موقعیت استودیو سیلن کیدز در تهران"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51864.67389808381!2d51.428383!3d35.659614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e0259b38069ff%3A0xb35a64388e6371cf!2sTehran%2C%20Tehran%20Province!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
                className="w-full h-full border-0 filter contrast-105"
                loading="lazy"
              ></iframe>

              {/* Pinpoint Overlay Tag */}
              <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl shadow-xl border border-[#DFE8E2] text-right max-w-xs space-y-1">
                <div className="flex items-center gap-2 text-xs font-bold text-[#2D3A33]">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#3E604F] animate-ping"></span>
                  <span>{STUDIO_INFO.brandShort} (استودیو سیلن)</span>
                </div>
                <p className="text-[11px] text-[#52635A] leading-tight">
                  مجتمع تجاری زیتون، اتوبان شهید رئیسی
                </p>
              </div>

              {/* Quick Routing Bar */}
              <div className="absolute bottom-3 inset-x-3 bg-white/95 backdrop-blur-md p-2.5 rounded-2xl shadow-lg border border-[#DFE8E2] flex flex-wrap items-center justify-between gap-2 text-xs">
                <span className="font-bold text-[#2D3A33] flex items-center gap-1.5 pr-1">
                  <Navigation className="w-4 h-4 text-[#3E604F]" />
                  مسیریابی با اپلیکیشن‌ها:
                </span>
                <div className="flex items-center gap-1.5">
                  <a
                    href="https://nshn.ir"
                    target="_blank"
                    rel="noreferrer"
                    className="px-2.5 py-1 bg-[#F2F7F4] text-[#2D3A33] hover:bg-[#DFE8E2] rounded-lg font-medium transition"
                  >
                    نشان
                  </a>
                  <a
                    href="https://balad.ir"
                    target="_blank"
                    rel="noreferrer"
                    className="px-2.5 py-1 bg-[#9DB9A7]/25 text-[#3E604F] hover:bg-[#9DB9A7]/40 rounded-lg font-medium transition"
                  >
                    بلد
                  </a>
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noreferrer"
                    className="px-2.5 py-1 bg-[#F2F7F4] text-[#2D3A33] hover:bg-[#DFE8E2] rounded-lg font-medium transition"
                  >
                    گوگل‌مپ
                  </a>
                </div>
              </div>
            </div>

            {/* Address & Contacts Box */}
            <div className="bg-white p-6 rounded-3xl border border-[#DFE8E2] space-y-4 shadow-xs">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-3 text-right">
                  <div className="w-10 h-10 rounded-xl bg-[#9DB9A7]/25 text-[#3E604F] flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#2D3A33]">نشانی دقیق آتلیه سیلن:</h4>
                    <p className="text-xs sm:text-sm text-[#52635A] mt-1 leading-relaxed">
                      {STUDIO_INFO.address}
                    </p>
                  </div>
                </div>

                <button
                  onClick={copyAddress}
                  className="shrink-0 flex items-center gap-1 text-[11px] text-[#3E604F] hover:text-[#2D3A33] bg-[#F8FAF9] border border-[#DFE8E2] px-3 py-1.5 rounded-xl transition shadow-2xs"
                  title="کپی آدرس"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-[#3E604F]" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'کپی شد!' : 'کپی آدرس'}</span>
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3 border-t border-[#DFE8E2] text-xs">
                <div className="flex items-center gap-2 text-[#52635A]">
                  <Phone className="w-4 h-4 text-[#3E604F]" />
                  <span>تلفن ثابت:</span>
                  <a href={`tel:${STUDIO_INFO.phoneLandline}`} className="font-mono font-bold text-[#2D3A33] hover:text-[#3E604F]">
                    {STUDIO_INFO.phoneLandlineDisplay}
                  </a>
                </div>

                <div className="flex items-center gap-2 text-[#52635A]">
                  <Phone className="w-4 h-4 text-[#D4A373]" />
                  <span>موبایل و مشاوره:</span>
                  <a href={`tel:${STUDIO_INFO.phoneMobile}`} className="font-mono font-bold text-[#3E604F] hover:text-[#2D3A33]">
                    {STUDIO_INFO.phoneMobileDisplay}
                  </a>
                </div>

                <div className="flex items-center gap-2 text-[#52635A] col-span-1 sm:col-span-2">
                  <Clock className="w-4 h-4 text-[#3E604F]" />
                  <span>ساعات کاری: {STUDIO_INFO.workingHours}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Direct Consultation Form with Bale connection */}
          <div className="lg:col-span-5 bg-white p-6 sm:p-7 rounded-3xl border border-[#DFE8E2] shadow-xs space-y-5 text-right">
            <div className="space-y-1.5">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#3E604F] bg-[#9DB9A7]/25 px-3 py-1 rounded-full border border-[#9DB9A7]/40">
                <Sparkles className="w-3.5 h-3.5 text-[#3E604F]" />
                <span>مشاوره تخصصی و بررسی تاریخ‌های خالی</span>
              </div>
              <h3 className="text-lg font-black text-[#2D3A33]">
                فرم مشاوره آنلاین و ارتباط با پیام‌رسان بله
              </h3>
              <p className="text-xs text-[#52635A] leading-relaxed">
                شماره خود را وارد کنید تا کارشناسان ما در سریع‌ترین زمان جهت مشاوره عکاسی و پکیج‌ها با شما تماس بگیرند.
              </p>
            </div>

            {isSubmitted ? (
              <div className="bg-[#F8FAF9] p-6 rounded-2xl border border-[#DFE8E2] space-y-4 text-center">
                <div className="w-12 h-12 rounded-full bg-[#9DB9A7]/25 text-[#3E604F] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-7 h-7 text-[#3E604F]" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-sm font-bold text-[#2D3A33]">درخواست مشاوره شما با موفقیت ثبت شد!</h4>
                  <p className="text-xs text-[#52635A]">
                    اطلاعات شما در پنل استودیو سیلن ثبت گردید و همکاران ما در ساعت انتخابی ({preferredCallTime}) با شما تماس خواهند گرفت.
                  </p>
                </div>

                {/* Direct Bale Messenger Action Button */}
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
                  onClick={() => setIsSubmitted(false)}
                  className="text-xs text-[#3E604F] hover:text-[#2D3A33] underline block mx-auto pt-1"
                >
                  ثبت یک درخواست دیگر
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3.5">
                <div>
                  <label className="block text-xs font-semibold text-[#2D3A33] mb-1">
                    نام و نام خانوادگی شما *
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="مثال: خانم ناصری"
                    className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-[#DFE8E2] focus:outline-hidden focus:border-[#3E604F] bg-[#F8FAF9] focus:ring-1 focus:ring-[#3E604F]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#2D3A33] mb-1">
                    شماره تلفن همراه (جهت تماس و ارسال به بله) *
                  </label>
                  <input
                    type="tel"
                    required
                    dir="ltr"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    placeholder="0912xxxxxxx"
                    className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-[#DFE8E2] focus:outline-hidden focus:border-[#3E604F] bg-[#F8FAF9] focus:ring-1 focus:ring-[#3E604F] text-left"
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
                      className="w-full text-xs px-3 py-2.5 rounded-xl border border-[#DFE8E2] focus:outline-hidden focus:border-[#3E604F] bg-[#F8FAF9] text-[#2D3A33]"
                    >
                      <option value="pregnancy">بارداری و مادرانه</option>
                      <option value="newborn">نوزادی (نیوبورن)</option>
                      <option value="kids">کودک و پرتره</option>
                      <option value="birthday">تولد و دندونی</option>
                      <option value="family">خانوادگی</option>
                      <option value="general">سایر موارد / چاپ</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#2D3A33] mb-1">
                      زمان تماس ترجیحی
                    </label>
                    <select
                      value={preferredCallTime}
                      onChange={(e) => setPreferredCallTime(e.target.value)}
                      className="w-full text-xs px-3 py-2.5 rounded-xl border border-[#DFE8E2] focus:outline-hidden focus:border-[#3E604F] bg-[#F8FAF9] text-[#2D3A33]"
                    >
                      <option value="همین الان / در اسرع وقت">در اسرع وقت</option>
                      <option value="صبح‌ها ۱۰ الی ۱۳">صبح‌ها ۱۰ الی ۱۳</option>
                      <option value="عصرها ۱۶ الی ۱۹">عصرها ۱۶ الی ۱۹</option>
                      <option value="ارسال پیام در بله">ارسال پیام در بله</option>
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
                    placeholder="مثال: سن نوزاد یا تاریخ تقریبی زایمان..."
                    className="w-full text-xs px-3.5 py-2 rounded-xl border border-[#DFE8E2] focus:outline-hidden focus:border-[#3E604F] bg-[#F8FAF9] focus:ring-1 focus:ring-[#3E604F]"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-[#3E604F] hover:bg-[#2E4B3E] text-white rounded-xl text-xs sm:text-sm font-bold shadow-md shadow-[#3E604F]/20 transition flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4 text-[#D4A373]" />
                  <span>ثبت درخواست و ارسال به کارشناس</span>
                </button>

                <div className="pt-2 flex items-center justify-center gap-3 text-[11px] text-[#52635A]">
                  <span className="flex items-center gap-1 text-[#3E604F]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#9DB9A7]" />
                    متصل به پیام‌رسان بله
                  </span>
                  <span>•</span>
                  <span>ثبت آنی در پنل سایت</span>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
