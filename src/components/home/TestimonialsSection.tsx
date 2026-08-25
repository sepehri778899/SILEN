import React, { useState } from 'react';
import { TESTIMONIALS } from '../../data/mockData';
import { Testimonial } from '../../types';
import { Star, MessageSquarePlus, CheckCircle2, Heart, Sparkles, X, User } from 'lucide-react';
import confetti from 'canvas-confetti';

export const TestimonialsSection: React.FC = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>(TESTIMONIALS);
  const [modalOpen, setModalOpen] = useState(false);
  const [name, setName] = useState('');
  const [childName, setChildName] = useState('');
  const [service, setService] = useState('عکاسی کودک');
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(5);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !comment.trim()) return;

    const newTestimonial: Testimonial = {
      id: `t-${Date.now()}`,
      name,
      childName: childName ? `والد ${childName}` : undefined,
      service,
      rating,
      date: 'همین الان',
      comment,
      verified: true,
      avatarBg: 'bg-emerald-500',
    };

    setTestimonials([newTestimonial, ...testimonials]);
    setSubmitted(true);
    confetti({ particleCount: 60, spread: 60, origin: { y: 0.6 } });

    setTimeout(() => {
      setSubmitted(false);
      setModalOpen(false);
      setName('');
      setChildName('');
      setComment('');
    }, 2200);
  };

  return (
    <section className="py-16 bg-[#F2F7F4] border-b border-[#DFE8E2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#9DB9A7]/25 text-[#3E604F] text-xs font-bold">
              <Heart className="w-3.5 h-3.5 text-[#3E604F] fill-[#3E604F]" />
              <span>تجربیات واقعی مادران و پدران</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D3A33]">
              نظرات مشتریان درباره آتلیه سیلن کیدز تهران
            </h2>
            <p className="text-[#52635A] text-sm">
              بزرگ‌ترین افتخار ما لبخند رضایت شما و ثبت امن خاطرات زیبای فرزندانتان است
            </p>
          </div>

          <button
            onClick={() => setModalOpen(true)}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-white bg-[#3E604F] hover:bg-[#2E4B3E] px-4 py-2.5 rounded-xl transition shadow-xs w-fit"
          >
            <MessageSquarePlus className="w-4 h-4 text-[#9DB9A7]" />
            <span>ثبت نظر و تجربه شما</span>
          </button>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-white p-5 rounded-3xl border border-[#DFE8E2] shadow-xs hover:shadow-md transition flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                {/* Header info */}
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-2xl bg-[#3E604F] text-white flex items-center justify-center font-bold text-sm shadow-xs`}>
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <h3 className="text-xs font-bold text-[#2D3A33]">{t.name}</h3>
                      {t.childName && (
                        <p className="text-[11px] text-[#52635A]">{t.childName}</p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Rating stars */}
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-3.5 h-3.5 ${
                        i < t.rating
                          ? 'text-[#D4A373] fill-[#D4A373]'
                          : 'text-[#DFE8E2]'
                      }`}
                    />
                  ))}
                  <span className="text-[11px] text-[#52635A] mr-2 font-mono">{t.date}</span>
                </div>

                {/* Comment */}
                <p className="text-xs sm:text-sm text-[#52635A] leading-relaxed">
                  «{t.comment}»
                </p>
              </div>

              {/* Service tag & Verified badge */}
              <div className="pt-3 border-t border-[#DFE8E2] flex items-center justify-between text-[11px]">
                <span className="text-[#3E604F] font-medium">{t.service}</span>
                <span className="flex items-center gap-1 text-[#3E604F] font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#9DB9A7]" />
                  مشتری تایید شده
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Write Review Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs">
          <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-6 relative animate-in fade-in zoom-in-95 duration-200">
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-4 left-4 p-2 rounded-xl text-[#52635A] hover:text-[#2D3A33] hover:bg-[#F2F7F4] transition"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-2 mb-5">
              <h3 className="text-lg font-black text-[#2D3A33] flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-[#9DB9A7]" />
                ثبت نظر و تجربه شما در سیلن کیدز
              </h3>
              <p className="text-xs text-[#52635A]">
                نظر شما به ما در ارتقای کیفیت و به خانواده‌های دیگر در انتخاب بهتر کمک می‌کند.
              </p>
            </div>

            {submitted ? (
              <div className="py-8 text-center space-y-3">
                <div className="w-14 h-14 rounded-full bg-[#9DB9A7]/25 text-[#3E604F] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8 text-[#3E604F]" />
                </div>
                <h4 className="text-base font-bold text-[#2D3A33]">
                  سپاس از محبت و همراهی شما!
                </h4>
                <p className="text-xs text-[#52635A]">
                  نظر شما با موفقیت ثبت شد و در بخش نظرات نمایش داده شد.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-right">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-[#2D3A33] mb-1">
                      نام و نام خانوادگی شما *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="مثال: زهرا محمدی"
                      className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-[#DFE8E2] focus:outline-hidden focus:border-[#3E604F] focus:ring-1 focus:ring-[#3E604F]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#2D3A33] mb-1">
                      نام کودک (اختیاری)
                    </label>
                    <input
                      type="text"
                      value={childName}
                      onChange={(e) => setChildName(e.target.value)}
                      placeholder="مثال: رادین (۶ ماهه)"
                      className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-[#DFE8E2] focus:outline-hidden focus:border-[#3E604F] focus:ring-1 focus:ring-[#3E604F]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#2D3A33] mb-1">
                    نوع خدمت دریافت شده
                  </label>
                  <select
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-[#DFE8E2] focus:outline-hidden focus:border-[#3E604F] bg-white text-[#2D3A33]"
                  >
                    <option value="عکاسی نوزادی (نیوبورن)">عکاسی نوزادی (نیوبورن)</option>
                    <option value="عکاسی بارداری با لباس">عکاسی بارداری با لباس</option>
                    <option value="عکاسی کودک و پرتره">عکاسی کودک و پرتره</option>
                    <option value="تم تولد و کیک اسمش">تم تولد و کیک اسمش</option>
                    <option value="عکاسی تم دندونی">عکاسی تم دندونی</option>
                    <option value="عکاسی خانوادگی">عکاسی خانوادگی</option>
                    <option value="چاپ شاسی و آلبوم ژورنال">چاپ شاسی و آلبوم ژورنال</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#2D3A33] mb-1">
                    امتیاز شما به آتلیه سیلن
                  </label>
                  <div className="flex items-center gap-2 py-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        type="button"
                        key={star}
                        onClick={() => setRating(star)}
                        className="p-1 hover:scale-110 transition"
                      >
                        <Star
                          className={`w-6 h-6 ${
                            star <= rating
                              ? 'text-[#D4A373] fill-[#D4A373]'
                              : 'text-[#DFE8E2]'
                          }`}
                        />
                      </button>
                    ))}
                    <span className="text-xs text-[#3E604F] mr-2">
                      ({rating} از ۵ ستاره)
                    </span>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#2D3A33] mb-1">
                    متن نظر و تجربه شما *
                  </label>
                  <textarea
                    required
                    rows={3}
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder="تجربه خود از رفتار پرسنل، کیفیت عکس‌ها، دکورها و فضای آتلیه را بنویسید..."
                    className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-[#DFE8E2] focus:outline-hidden focus:border-[#3E604F] focus:ring-1 focus:ring-[#3E604F]"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-[#3E604F] hover:bg-[#2E4B3E] text-white rounded-xl text-xs sm:text-sm font-bold shadow-md shadow-[#3E604F]/20 transition"
                >
                  ارسال و ثبت نظر
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
