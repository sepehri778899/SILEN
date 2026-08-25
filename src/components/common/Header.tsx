import React, { useState } from 'react';
import { Logo } from './Logo';
import { STUDIO_INFO } from '../../data/mockData';
import {
  Phone,
  Calendar,
  Camera,
  Image as ImageIcon,
  Printer,
  BookOpen,
  Info,
  Menu,
  X,
  Sparkles,
  ShieldCheck,
  ChevronDown,
  Clock,
  MapPin,
  Send,
  SlidersHorizontal,
} from 'lucide-react';

interface HeaderProps {
  currentTab: string;
  onSelectTab: (tab: string) => void;
  onOpenConsultation: () => void;
  onOpenAdmin: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentTab,
  onSelectTab,
  onOpenConsultation,
  onOpenAdmin,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'صفحه اصلی' },
    {
      id: 'services',
      label: 'خدمات تخصصی',
      isDropdown: true,
      subItems: [
        { id: 'pregnancy', label: 'آتلیه بارداری تهران' },
        { id: 'newborn', label: 'آتلیه نوزاد تهران' },
        { id: 'kids', label: 'عکاسی کودک تهران' },
        { id: 'family', label: 'عکاسی خانوادگی تهران' },
        { id: 'birthday', label: 'آتلیه تولد و دندونی' },
      ],
    },
    { id: 'portfolio', label: 'نمونه کارها' },
    { id: 'packages', label: 'پکیج‌ها و قیمت' },
    { id: 'print-order', label: 'سفارش چاپ و شاسی' },
    { id: 'booking', label: 'رزرو نوبت' },
    { id: 'blog', label: 'وبلاگ و راهنما' },
    { id: 'about', label: 'درباره ما' },
    { id: 'contact', label: 'تماس با ما' },
  ];

  const handleNavClick = (tabId: string) => {
    onSelectTab(tabId);
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md shadow-xs border-b border-[#DFE8E2] transition-all">
      {/* Top Bar with real studio info & phone numbers */}
      <div className="bg-[#3E604F] text-[#F8FAF9] text-xs py-2 px-4 border-b border-[#2E4B3E]">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-4 text-xs font-normal">
            <span className="hidden sm:inline-flex items-center gap-1.5 bg-white/15 text-[#F8FAF9] px-2.5 py-0.5 rounded-full font-medium">
              <Sparkles className="w-3 h-3 text-[#9DB9A7]" />
              آتلیه تخصصی کودک، نوزادی و بارداری تهران
            </span>
            <div className="flex items-center gap-1 text-[#E2EBE5]">
              <MapPin className="w-3 h-3 text-[#9DB9A7]" />
              <span>اتوبان شهید رئیسی، مجتمع تجاری زیتون، استودیو سیلن</span>
            </div>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <a
              href={`tel:${STUDIO_INFO.phoneLandline}`}
              className="flex items-center gap-1.5 hover:text-white transition font-medium"
            >
              <Phone className="w-3 h-3 text-[#9DB9A7]" />
              <span>{STUDIO_INFO.phoneLandlineDisplay}</span>
            </a>
            <span className="text-[#8DA697] hidden xs:inline">|</span>
            <a
              href={`tel:${STUDIO_INFO.phoneMobile}`}
              className="flex items-center gap-1.5 hover:text-white transition font-medium"
            >
              <span className="w-2 h-2 rounded-full bg-[#9DB9A7] animate-ping inline-block"></span>
              <span>{STUDIO_INFO.phoneMobileDisplay}</span>
            </a>
            <button
              onClick={onOpenAdmin}
              className="hidden md:inline-flex items-center gap-1 text-[11px] bg-black/20 hover:bg-black/30 px-2 py-0.5 rounded text-[#F8FAF9] hover:text-white transition"
              title="پنل مدیریت استودیو سیلن"
            >
              <SlidersHorizontal className="w-3 h-3" />
              <span>پنل مدیریت</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3.5 flex items-center justify-between gap-4">
        {/* Brand Logo */}
        <div
          onClick={() => handleNavClick('home')}
          className="cursor-pointer transition hover:opacity-95"
        >
          <Logo size="md" />
        </div>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navLinks.map((item) => {
            if (item.isDropdown && item.subItems) {
              const isSubActive = item.subItems.some((s) => s.id === currentTab);
              return (
                <div
                  key={item.id}
                  className="relative group"
                  onMouseEnter={() => setServicesDropdownOpen(true)}
                  onMouseLeave={() => setServicesDropdownOpen(false)}
                >
                  <button
                    className={`flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition ${
                      isSubActive
                        ? 'text-[#3E604F] bg-[#9DB9A7]/20 font-bold'
                        : 'text-[#2D3A33] hover:text-[#3E604F] hover:bg-[#F2F7F4]'
                    }`}
                  >
                    <span>{item.label}</span>
                    <ChevronDown className="w-3.5 h-3.5 text-stone-400 group-hover:rotate-180 transition-transform" />
                  </button>

                  {/* Dropdown Menu */}
                  <div
                    className={`absolute right-0 top-full pt-1.5 w-56 transform transition-all duration-200 z-50 ${
                      servicesDropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                    }`}
                  >
                    <div className="bg-white rounded-xl shadow-xl border border-[#DFE8E2] p-2 divide-y divide-[#F2F7F4]">
                      {item.subItems.map((sub) => (
                        <button
                          key={sub.id}
                          onClick={() => handleNavClick(sub.id)}
                          className={`w-full text-right px-3.5 py-2.5 rounded-lg text-xs font-medium transition flex items-center justify-between ${
                            currentTab === sub.id
                              ? 'bg-[#9DB9A7]/20 text-[#3E604F] font-bold'
                              : 'text-[#2D3A33] hover:bg-[#F2F7F4] hover:text-[#3E604F]'
                          }`}
                        >
                          <span>{sub.label}</span>
                          <span className="w-1.5 h-1.5 rounded-full bg-[#9DB9A7]"></span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              );
            }

            const isActive = currentTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition whitespace-nowrap ${
                  isActive
                    ? 'text-[#3E604F] bg-[#9DB9A7]/20 font-bold shadow-2xs'
                    : 'text-[#2D3A33] hover:text-[#3E604F] hover:bg-[#F2F7F4]'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Action CTAs */}
        <div className="flex items-center gap-2.5">
          <button
            onClick={onOpenConsultation}
            className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold text-[#3E604F] bg-[#F2F7F4] hover:bg-[#E5EFE8] border border-[#DFE8E2] px-3.5 py-2 rounded-xl transition shadow-2xs"
          >
            <Send className="w-3.5 h-3.5 text-[#3E604F]" />
            <span>مشاوره رایگان</span>
          </button>

          <button
            onClick={() => handleNavClick('booking')}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-white bg-[#3E604F] hover:bg-[#2E4B3E] active:scale-98 px-4 sm:px-5 py-2.5 rounded-xl transition shadow-md shadow-[#3E604F]/20"
          >
            <Calendar className="w-4 h-4 text-[#9DB9A7]" />
            <span>رزرو آنلاین نوبت</span>
          </button>

          {/* Mobile menu trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-[#2D3A33] hover:bg-[#F2F7F4] border border-[#DFE8E2]"
            aria-label="منوی سایت"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-[#DFE8E2] shadow-xl max-h-[82vh] overflow-y-auto p-4 transition-all">
          <div className="space-y-1">
            <button
              onClick={() => handleNavClick('home')}
              className={`w-full text-right px-4 py-2.5 rounded-xl text-sm font-medium ${
                currentTab === 'home' ? 'bg-[#9DB9A7]/20 text-[#3E604F] font-bold' : 'text-[#2D3A33]'
              }`}
            >
              صفحه اصلی
            </button>

            {/* Specialized Services in Mobile */}
            <div className="pt-2 pb-1 px-3">
              <p className="text-[11px] font-bold text-[#3E604F] uppercase tracking-wider mb-2">
                خدمات تخصصی عکاسی:
              </p>
              <div className="grid grid-cols-1 gap-1 pr-2 border-r-2 border-[#9DB9A7]">
                <button
                  onClick={() => handleNavClick('pregnancy')}
                  className={`w-full text-right px-3 py-2 rounded-lg text-xs font-medium ${
                    currentTab === 'pregnancy' ? 'bg-[#9DB9A7]/20 text-[#3E604F] font-bold' : 'text-[#2D3A33]'
                  }`}
                >
                  🌸 آتلیه بارداری تهران
                </button>
                <button
                  onClick={() => handleNavClick('newborn')}
                  className={`w-full text-right px-3 py-2 rounded-lg text-xs font-medium ${
                    currentTab === 'newborn' ? 'bg-[#9DB9A7]/20 text-[#3E604F] font-bold' : 'text-[#2D3A33]'
                  }`}
                >
                  🍼 آتلیه نوزاد تهران (نیوبورن)
                </button>
                <button
                  onClick={() => handleNavClick('kids')}
                  className={`w-full text-right px-3 py-2 rounded-lg text-xs font-medium ${
                    currentTab === 'kids' ? 'bg-[#9DB9A7]/20 text-[#3E604F] font-bold' : 'text-[#2D3A33]'
                  }`}
                >
                  🎈 عکاسی کودک تهران
                </button>
                <button
                  onClick={() => handleNavClick('family')}
                  className={`w-full text-right px-3 py-2 rounded-lg text-xs font-medium ${
                    currentTab === 'family' ? 'bg-[#9DB9A7]/20 text-[#3E604F] font-bold' : 'text-[#2D3A33]'
                  }`}
                >
                  👨‍👩‍👧‍👦 عکاسی خانوادگی تهران
                </button>
                <button
                  onClick={() => handleNavClick('birthday')}
                  className={`w-full text-right px-3 py-2 rounded-lg text-xs font-medium ${
                    currentTab === 'birthday' ? 'bg-[#9DB9A7]/20 text-[#3E604F] font-bold' : 'text-[#2D3A33]'
                  }`}
                >
                  🎂 عکاسی تولد، دندونی و کیک اسمش
                </button>
              </div>
            </div>

            <button
              onClick={() => handleNavClick('portfolio')}
              className={`w-full text-right px-4 py-2.5 rounded-xl text-sm font-medium ${
                currentTab === 'portfolio' ? 'bg-[#9DB9A7]/20 text-[#3E604F] font-bold' : 'text-[#2D3A33]'
              }`}
            >
              گالری نمونه کارها
            </button>
            <button
              onClick={() => handleNavClick('packages')}
              className={`w-full text-right px-4 py-2.5 rounded-xl text-sm font-medium ${
                currentTab === 'packages' ? 'bg-[#9DB9A7]/20 text-[#3E604F] font-bold' : 'text-[#2D3A33]'
              }`}
            >
              پکیج‌ها و لیست قیمت‌ها
            </button>
            <button
              onClick={() => handleNavClick('print-order')}
              className={`w-full text-right px-4 py-2.5 rounded-xl text-sm font-medium ${
                currentTab === 'print-order' ? 'bg-[#9DB9A7]/20 text-[#3E604F] font-bold' : 'text-[#2D3A33]'
              }`}
            >
              سفارش آنلاین چاپ عکس و تخته شاسی
            </button>
            <button
              onClick={() => handleNavClick('booking')}
              className={`w-full text-right px-4 py-2.5 rounded-xl text-sm font-bold ${
                currentTab === 'booking' ? 'bg-[#3E604F] text-white' : 'text-[#3E604F] bg-[#9DB9A7]/20'
              }`}
            >
              ✨ فرم رزرو آنلاین نوبت
            </button>
            <button
              onClick={() => handleNavClick('blog')}
              className={`w-full text-right px-4 py-2.5 rounded-xl text-sm font-medium ${
                currentTab === 'blog' ? 'bg-[#9DB9A7]/20 text-[#3E604F] font-bold' : 'text-[#2D3A33]'
              }`}
            >
              وبلاگ و نکات عکاسی
            </button>
            <button
              onClick={() => handleNavClick('about')}
              className={`w-full text-right px-4 py-2.5 rounded-xl text-sm font-medium ${
                currentTab === 'about' ? 'bg-[#9DB9A7]/20 text-[#3E604F] font-bold' : 'text-[#2D3A33]'
              }`}
            >
              درباره استودیو سیلن کیدز
            </button>
            <button
              onClick={() => handleNavClick('contact')}
              className={`w-full text-right px-4 py-2.5 rounded-xl text-sm font-medium ${
                currentTab === 'contact' ? 'bg-[#9DB9A7]/20 text-[#3E604F] font-bold' : 'text-[#2D3A33]'
              }`}
            >
              تماس با ما و نقشه
            </button>

            <div className="pt-4 border-t border-[#DFE8E2] flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                className="w-full text-center py-2.5 bg-[#9DB9A7]/20 text-[#3E604F] rounded-xl text-xs font-bold"
              >
                درخواست مشاوره فوری تلفنی / بله
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAdmin();
                }}
                className="w-full text-center py-2 bg-[#F2F7F4] text-[#2D3A33] rounded-xl text-xs"
              >
                ورود به پنل مدیریت آتلیه
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
