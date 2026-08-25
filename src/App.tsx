import React, { useState, useEffect } from 'react';
import { Header } from './components/common/Header';
import { Footer } from './components/common/Footer';
import { HeroSection } from './components/home/HeroSection';
import { CategoryHighlights } from './components/home/CategoryHighlights';
import { WhyChooseUs } from './components/home/WhyChooseUs';
import { FeaturedGallery } from './components/home/FeaturedGallery';
import { PackagesSection } from './components/home/PackagesSection';
import { TestimonialsSection } from './components/home/TestimonialsSection';
import { MapAndContactSection } from './components/home/MapAndContactSection';

import { PregnancyPage } from './components/pages/PregnancyPage';
import { NewbornPage } from './components/pages/NewbornPage';
import { KidsPage } from './components/pages/KidsPage';
import { FamilyPage } from './components/pages/FamilyPage';
import { BirthdayPage } from './components/pages/BirthdayPage';
import { PortfolioPage } from './components/pages/PortfolioPage';
import { PrintOrderPage } from './components/pages/PrintOrderPage';
import { BookingPage } from './components/pages/BookingPage';
import { BlogPage } from './components/pages/BlogPage';
import { AboutPage } from './components/pages/AboutPage';
import { ContactPage } from './components/pages/ContactPage';

import { ConsultationModal } from './components/modals/ConsultationModal';
import { ImageViewerModal } from './components/modals/ImageViewerModal';
import { AdminPanelModal } from './components/modals/AdminPanelModal';

import { PortfolioItem } from './types';
import { STUDIO_INFO } from './data/mockData';
import { Phone, MessageCircle, Calendar, ArrowUp } from 'lucide-react';

export default function App() {
  const [currentTab, setCurrentTab] = useState<string>('home');
  const [selectedPackageForBooking, setSelectedPackageForBooking] = useState<string | undefined>(undefined);
  const [consultationModalOpen, setConsultationModalOpen] = useState(false);
  const [adminModalOpen, setAdminModalOpen] = useState(false);
  const [activeImage, setActiveImage] = useState<PortfolioItem | null>(null);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSelectTab = (tab: string) => {
    setCurrentTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenBookingWithPackage = (packageName: string) => {
    setSelectedPackageForBooking(packageName);
    setCurrentTab('booking');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAF9] text-[#2D3A33] selection:bg-[#9DB9A7] selection:text-[#2D3A33] relative">
      {/* Navigation Header */}
      <Header
        currentTab={currentTab}
        onSelectTab={handleSelectTab}
        onOpenConsultation={() => setConsultationModalOpen(true)}
        onOpenAdmin={() => setAdminModalOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {currentTab === 'home' && (
          <>
            <HeroSection
              onSelectTab={handleSelectTab}
              onOpenConsultation={() => setConsultationModalOpen(true)}
            />
            <CategoryHighlights onSelectTab={handleSelectTab} />
            <WhyChooseUs />
            <FeaturedGallery
              onSelectTab={handleSelectTab}
              onOpenImage={(item) => setActiveImage(item)}
            />
            <PackagesSection
              onSelectTab={handleSelectTab}
              onOpenBookingWithPackage={handleOpenBookingWithPackage}
            />
            <TestimonialsSection />
            <MapAndContactSection />
          </>
        )}

        {currentTab === 'pregnancy' && (
          <PregnancyPage
            onSelectTab={handleSelectTab}
            onOpenConsultation={() => setConsultationModalOpen(true)}
            onOpenImage={(item) => setActiveImage(item)}
          />
        )}

        {currentTab === 'newborn' && (
          <NewbornPage
            onSelectTab={handleSelectTab}
            onOpenConsultation={() => setConsultationModalOpen(true)}
            onOpenImage={(item) => setActiveImage(item)}
          />
        )}

        {currentTab === 'kids' && (
          <KidsPage
            onSelectTab={handleSelectTab}
            onOpenConsultation={() => setConsultationModalOpen(true)}
            onOpenImage={(item) => setActiveImage(item)}
          />
        )}

        {currentTab === 'family' && (
          <FamilyPage
            onSelectTab={handleSelectTab}
            onOpenConsultation={() => setConsultationModalOpen(true)}
            onOpenImage={(item) => setActiveImage(item)}
          />
        )}

        {currentTab === 'birthday' && (
          <BirthdayPage
            onSelectTab={handleSelectTab}
            onOpenConsultation={() => setConsultationModalOpen(true)}
            onOpenImage={(item) => setActiveImage(item)}
          />
        )}

        {currentTab === 'portfolio' && (
          <PortfolioPage
            onSelectTab={handleSelectTab}
            onOpenImage={(item) => setActiveImage(item)}
          />
        )}

        {currentTab === 'packages' && (
          <div className="py-10">
            <PackagesSection
              onSelectTab={handleSelectTab}
              onOpenBookingWithPackage={handleOpenBookingWithPackage}
            />
          </div>
        )}

        {currentTab === 'print-order' && <PrintOrderPage />}

        {currentTab === 'booking' && (
          <BookingPage
            initialPackageName={selectedPackageForBooking}
            onSelectTab={handleSelectTab}
          />
        )}

        {currentTab === 'blog' && <BlogPage onSelectTab={handleSelectTab} />}

        {currentTab === 'about' && (
          <AboutPage
            onSelectTab={handleSelectTab}
            onOpenConsultation={() => setConsultationModalOpen(true)}
          />
        )}

        {currentTab === 'contact' && <ContactPage />}
      </main>

      {/* Footer */}
      <Footer onSelectTab={handleSelectTab} />

      {/* Floating Action Buttons */}
      <div className="fixed bottom-5 left-5 z-40 flex flex-col gap-2.5">
        {/* Direct Bale Messenger floating bubble */}
        <a
          href={STUDIO_INFO.baleUrl}
          target="_blank"
          rel="noreferrer"
          className="w-12 h-12 rounded-full bg-[#00a859] hover:bg-[#008f4c] text-white shadow-lg flex items-center justify-center transition hover:scale-110 active:scale-95"
          title="پیام‌رسان بله استودیو سیلن"
        >
          <MessageCircle className="w-6 h-6" />
        </a>

        {/* Direct Call floating bubble */}
        <a
          href={`tel:${STUDIO_INFO.phoneMobile}`}
          className="w-12 h-12 rounded-full bg-[#3E604F] hover:bg-[#2E4B3E] text-white shadow-lg flex items-center justify-center transition hover:scale-110 active:scale-95"
          title="تماس فوری تلفنی"
        >
          <Phone className="w-6 h-6" />
        </a>

        {/* Scroll To Top */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="w-12 h-12 rounded-full bg-[#2D3A33]/90 hover:bg-[#2D3A33] text-white shadow-lg flex items-center justify-center transition hover:scale-110 active:scale-95"
            aria-label="بازگشت به بالای صفحه"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        )}
      </div>

      {/* Modals */}
      <ConsultationModal
        isOpen={consultationModalOpen}
        onClose={() => setConsultationModalOpen(false)}
      />

      <ImageViewerModal
        item={activeImage}
        onClose={() => setActiveImage(null)}
        onSelectTab={handleSelectTab}
      />

      <AdminPanelModal
        isOpen={adminModalOpen}
        onClose={() => setAdminModalOpen(false)}
      />
    </div>
  );
}
