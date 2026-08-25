import React, { useState } from 'react';
import { BLOG_POSTS } from '../../data/mockData';
import { BlogPost } from '../../types';
import { BookOpen, Clock, User, Sparkles, ChevronLeft, ArrowRight, CheckCircle2, Share2, Tag } from 'lucide-react';

interface BlogPageProps {
  onSelectTab: (tab: string) => void;
}

export const BlogPage: React.FC<BlogPageProps> = ({ onSelectTab }) => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  if (selectedPost) {
    return (
      <div className="py-10 max-w-4xl mx-auto px-4 sm:px-6 space-y-8 text-right">
        <button
          onClick={() => setSelectedPost(null)}
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#3E604F] hover:text-[#2D3A33] bg-white border border-[#DFE8E2] px-4 py-2 rounded-xl transition"
        >
          <ArrowRight className="w-4 h-4" />
          <span>بازگشت به مقالات وبلاگ</span>
        </button>

        {/* Article Container */}
        <article className="bg-white rounded-3xl border border-[#DFE8E2] shadow-sm overflow-hidden p-6 sm:p-10 space-y-6">
          {/* Badge & Meta */}
          <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-[#52635A] pb-4 border-b border-[#DFE8E2]">
            <span className="bg-[#9DB9A7]/25 text-[#3E604F] font-bold px-3 py-1 rounded-full">
              {selectedPost.category}
            </span>
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {selectedPost.readTime}
              </span>
              <span>•</span>
              <span>{selectedPost.date}</span>
            </div>
          </div>

          <h1 className="text-2xl sm:text-3xl font-black text-[#2D3A33] leading-tight">
            {selectedPost.title}
          </h1>

          <div className="rounded-2xl overflow-hidden aspect-[16/9] bg-[#F8FAF9]">
            <img
              src={selectedPost.imageUrl}
              alt={selectedPost.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Body Content */}
          <div className="space-y-4 text-sm sm:text-base text-[#52635A] leading-relaxed pt-4">
            {selectedPost.content.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>

          {/* Practical Tips Box */}
          {selectedPost.tips && selectedPost.tips.length > 0 && (
            <div className="bg-[#F8FAF9] p-6 rounded-2xl border border-[#DFE8E2] space-y-3 mt-6">
              <h3 className="text-sm font-bold text-[#2D3A33] flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#3E604F]" />
                <span>نکات طلایی آتلیه سیلن کیدز برای والدین:</span>
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-[#52635A]">
                {selectedPost.tips.map((tip, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#3E604F] shrink-0 mt-0.5" />
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tags & Keywords */}
          <div className="pt-6 border-t border-[#DFE8E2] flex flex-wrap items-center gap-2">
            <Tag className="w-4 h-4 text-[#3E604F]" />
            <span className="text-xs text-[#52635A] font-bold ml-2">کلمات کلیدی:</span>
            {selectedPost.keywords.map((kw, idx) => (
              <span
                key={idx}
                className="text-xs bg-[#F8FAF9] border border-[#DFE8E2] text-[#2D3A33] px-2.5 py-1 rounded-lg"
              >
                {kw}
              </span>
            ))}
          </div>
        </article>

        {/* CTA */}
        <div className="bg-[#F8FAF9] p-6 rounded-3xl border border-[#DFE8E2] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1">
            <h4 className="text-sm font-bold text-[#2D3A33]">
              آماده ثبت لحظات شیرین فرزندتان هستید؟
            </h4>
            <p className="text-xs text-[#52635A]">
              کارشناسان آتلیه سیلن کیدز آماده راهنمایی و رزرو تاریخ مدنظر شما هستند.
            </p>
          </div>
          <button
            onClick={() => onSelectTab('booking')}
            className="bg-[#3E604F] hover:bg-[#2E4B3E] text-white px-5 py-2.5 rounded-xl text-xs font-bold transition shadow-xs"
          >
            رزرو آنلاین نوبت
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="py-10 space-y-12 max-w-7xl mx-auto px-4 sm:px-6">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#9DB9A7]/25 text-[#3E604F] text-xs font-bold">
          <BookOpen className="w-4 h-4 text-[#3E604F]" />
          <span>مجله تخصصی عکاسی نوزاد، کودک و بارداری</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-[#2D3A33]">
          وبلاگ، مقالات آموزشی و راهنمای والدین
        </h1>
        <p className="text-[#52635A] text-sm leading-relaxed">
          نکات ضروری برای آمادگی قبل از عکاسی، انتخاب ست لباس و مراقبت‌های روز عکاسی نوزاد
        </p>
      </div>

      {/* Blog Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {BLOG_POSTS.map((post) => (
          <div
            key={post.id}
            onClick={() => {
              setSelectedPost(post);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="group bg-white rounded-3xl border border-[#DFE8E2] shadow-xs hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer flex flex-col justify-between"
          >
            <div className="relative aspect-[16/10] overflow-hidden bg-[#F8FAF9]">
              <img
                src={post.imageUrl}
                alt={post.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute top-3 right-3">
                <span className="bg-white/95 backdrop-blur-xs text-[#2D3A33] text-xs font-bold px-3 py-1 rounded-full shadow-xs border border-[#DFE8E2]">
                  {post.category}
                </span>
              </div>
            </div>

            <div className="p-6 flex-1 flex flex-col justify-between space-y-4 text-right">
              <div className="space-y-2">
                <div className="flex items-center gap-3 text-xs text-[#52635A]/80">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {post.readTime}
                  </span>
                  <span>•</span>
                  <span>{post.date}</span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-[#2D3A33] group-hover:text-[#3E604F] transition line-clamp-2">
                  {post.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#52635A] leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
              </div>

              <div className="pt-3 border-t border-[#DFE8E2] flex items-center justify-between text-xs font-bold text-[#3E604F]">
                <span>مطالعه کامل مقاله و نکات</span>
                <ChevronLeft className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
