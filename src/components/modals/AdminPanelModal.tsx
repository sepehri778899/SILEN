import React, { useState, useEffect, useRef } from 'react';
import {
  getStoredBookings,
  getStoredConsultations,
  getStoredPrintOrders,
  updateBookingStatus,
  updatePrintOrderStatus,
  formatToman,
  toPersianDigits,
} from '../../utils/storage';
import { usePortfolioManager } from '../../utils/useCustomImages';
import { Booking, ConsultationRequest, PrintOrder, ServiceCategory } from '../../types';
import {
  X,
  SlidersHorizontal,
  Calendar,
  Phone,
  Printer,
  CheckCircle2,
  Clock,
  Search,
  MessageCircle,
  RefreshCw,
  Eye,
  AlertCircle,
  ExternalLink,
  Camera,
  Upload,
  Trash2,
  Plus,
} from 'lucide-react';

interface AdminPanelModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AdminPanelModal: React.FC<AdminPanelModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'bookings' | 'consultations' | 'prints' | 'photos'>('bookings');
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [consultations, setConsultations] = useState<ConsultationRequest[]>([]);
  const [prints, setPrints] = useState<PrintOrder[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  const { items: portfolioItems, addCustomImage, deleteItem, resetToDefaults } = usePortfolioManager();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [newPhotoTitle, setNewPhotoTitle] = useState('');
  const [newPhotoCategory, setNewPhotoCategory] = useState<ServiceCategory>('birthday');

  const loadData = () => {
    setBookings(getStoredBookings());
    setConsultations(getStoredConsultations());
    setPrints(getStoredPrintOrders());
  };

  useEffect(() => {
    if (isOpen) {
      loadData();
    }
  }, [isOpen]);

  useEffect(() => {
    const handleUpdate = () => loadData();
    window.addEventListener('silen_data_updated', handleUpdate);
    return () => window.removeEventListener('silen_data_updated', handleUpdate);
  }, []);

  if (!isOpen) return null;

  const handleAdminFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    const catMap: Record<ServiceCategory, string> = {
      birthday: 'تولد و دندونی',
      kids: 'کودک',
      newborn: 'نوزادی (نیوبورن)',
      pregnancy: 'بارداری و مادرانه',
      family: 'خانوادگی',
      portrait: 'پرتره اختصاصی',
    };

    Array.from(files).forEach((file: File, index: number) => {
      const reader = new FileReader();
      reader.onload = (event) => {
        const dataUrl = event.target?.result as string;
        if (dataUrl) {
          const title = newPhotoTitle.trim()
            ? `${newPhotoTitle} ${files.length > 1 ? `(${index + 1})` : ''}`
            : `عکس آتلیه سیلن ${index + 1}`;

          addCustomImage(dataUrl, {
            title,
            category: newPhotoCategory,
            categoryFa: catMap[newPhotoCategory],
            tags: ['سیلن کیدز', catMap[newPhotoCategory]],
          });
        }
      };
      reader.readAsDataURL(file);
    });
  };

  const filteredBookings = bookings.filter(
    (b) =>
      b.childName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      b.parentName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      b.phoneNumber.includes(searchQuery) ||
      b.trackingCode.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredConsultations = consultations.filter(
    (c) =>
      c.fullName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.phoneNumber.includes(searchQuery)
  );

  const filteredPrints = prints.filter(
    (p) =>
      p.customerName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.orderNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.phoneNumber.includes(searchQuery)
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs">
      <div className="bg-white rounded-3xl shadow-2xl max-w-5xl w-full h-[85vh] flex flex-col overflow-hidden relative animate-in fade-in zoom-in-95 duration-200 text-right border border-[#DFE8E2]">
        {/* Header */}
        <div className="p-5 sm:p-6 border-b border-[#DFE8E2] bg-[#F8FAF9] flex items-center justify-between gap-4 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-[#3E604F] text-white flex items-center justify-center shadow-xs">
              <SlidersHorizontal className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-black text-[#2D3A33]">
                پنل مدیریت استودیو کودک سیلن کیدز
              </h2>
              <p className="text-xs text-[#52635A]">
                مشاهده و مدیریت نوبت‌ها، مشاوره‌ها، سفارشات چاپ و عکس‌های آتلیه
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={loadData}
              className="p-2 rounded-xl text-[#52635A] hover:text-[#2D3A33] hover:bg-[#F2F7F4] border border-transparent hover:border-[#DFE8E2] transition"
              title="بروزرسانی داده‌ها"
            >
              <RefreshCw className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-xl text-[#52635A] hover:text-[#2D3A33] hover:bg-[#F2F7F4] transition"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Toolbar: Navigation Tabs & Search */}
        <div className="px-6 py-3 border-b border-[#DFE8E2] bg-white flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
            <button
              onClick={() => setActiveTab('bookings')}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition flex items-center gap-1.5 ${
                activeTab === 'bookings'
                  ? 'bg-[#3E604F] text-white shadow-xs'
                  : 'bg-[#F8FAF9] text-[#52635A] hover:bg-[#F2F7F4] border border-[#DFE8E2]'
              }`}
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>نوبت‌ها ({toPersianDigits(bookings.length)})</span>
            </button>

            <button
              onClick={() => setActiveTab('consultations')}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition flex items-center gap-1.5 ${
                activeTab === 'consultations'
                  ? 'bg-[#3E604F] text-white shadow-xs'
                  : 'bg-[#F8FAF9] text-[#52635A] hover:bg-[#F2F7F4] border border-[#DFE8E2]'
              }`}
            >
              <Phone className="w-3.5 h-3.5" />
              <span>مشاوره‌ها ({toPersianDigits(consultations.length)})</span>
            </button>

            <button
              onClick={() => setActiveTab('prints')}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition flex items-center gap-1.5 ${
                activeTab === 'prints'
                  ? 'bg-[#3E604F] text-white shadow-xs'
                  : 'bg-[#F8FAF9] text-[#52635A] hover:bg-[#F2F7F4] border border-[#DFE8E2]'
              }`}
            >
              <Printer className="w-3.5 h-3.5" />
              <span>چاپ ({toPersianDigits(prints.length)})</span>
            </button>

            <button
              onClick={() => setActiveTab('photos')}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition flex items-center gap-1.5 ${
                activeTab === 'photos'
                  ? 'bg-[#3E604F] text-white shadow-xs'
                  : 'bg-[#F8FAF9] text-[#52635A] hover:bg-[#F2F7F4] border border-[#DFE8E2]'
              }`}
            >
              <Camera className="w-3.5 h-3.5" />
              <span>مدیریت عکس‌ها ({toPersianDigits(portfolioItems.length)})</span>
            </button>
          </div>

          <div className="relative w-full sm:w-64">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="جستجو در نام، شماره یا کد..."
              className="w-full text-xs pr-8 pl-3 py-2 rounded-xl border border-[#DFE8E2] bg-white focus:outline-hidden focus:border-[#3E604F] text-[#2D3A33] placeholder:text-[#52635A]/60"
            />
            <Search className="w-3.5 h-3.5 text-[#3E604F] absolute right-2.5 top-2.5" />
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {/* TAB 1: BOOKINGS */}
          {activeTab === 'bookings' && (
            <div className="space-y-4">
              {filteredBookings.length === 0 ? (
                <div className="text-center py-12 text-[#52635A] text-xs">
                  هیچ نوبتی یافت نشد.
                </div>
              ) : (
                filteredBookings.map((b) => (
                  <div
                    key={b.id}
                    className="bg-[#F8FAF9] p-5 rounded-2xl border border-[#DFE8E2] space-y-3"
                  >
                    <div className="flex flex-wrap items-start justify-between gap-3 border-b border-[#DFE8E2] pb-3">
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-xs font-black bg-white border border-[#DFE8E2] text-[#2D3A33] px-2.5 py-1 rounded-lg">
                          {b.trackingCode}
                        </span>
                        <h3 className="text-sm font-bold text-[#2D3A33]">
                          {b.childName} ({b.childAge}) - والد: {b.parentName}
                        </h3>
                        <span className="text-xs bg-[#9DB9A7]/25 text-[#3E604F] font-bold px-2.5 py-0.5 rounded-md">
                          {b.serviceNameFa}
                        </span>
                      </div>

                      <div className="flex items-center gap-2">
                        <select
                          value={b.status}
                          onChange={(e) => updateBookingStatus(b.id, e.target.value as any)}
                          className={`text-xs px-2.5 py-1 rounded-lg border font-bold ${
                            b.status === 'confirmed'
                              ? 'bg-[#9DB9A7]/25 text-[#3E604F] border-[#9DB9A7]/50'
                              : b.status === 'contacted'
                              ? 'bg-blue-50 text-blue-800 border-blue-200'
                              : b.status === 'cancelled'
                              ? 'bg-rose-50 text-rose-800 border-rose-200'
                              : 'bg-amber-50 text-amber-800 border-amber-200'
                          }`}
                        >
                          <option value="pending">در انتظار تماس</option>
                          <option value="contacted">تماس گرفته شده</option>
                          <option value="confirmed">نوبت تایید شد</option>
                          <option value="completed">انجام شد</option>
                          <option value="cancelled">لغو شده</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-[#52635A]">
                      <div>پکیج: <strong className="text-[#2D3A33]">{b.selectedPackage}</strong></div>
                      <div>تاریخ و ساعت: <strong className="text-[#3E604F]">{b.preferredDate} ({b.preferredTime})</strong></div>
                      <div>شماره تماس: <a href={`tel:${b.phoneNumber}`} className="text-[#2D3A33] font-mono font-bold hover:underline">{b.phoneNumber}</a></div>
                    </div>

                    {b.themePreference && (
                      <div className="text-xs text-[#52635A] bg-white p-2.5 rounded-xl border border-[#DFE8E2]">
                        <span className="text-[#52635A]/70">تم مورد علاقه: </span>
                        <span>{b.themePreference}</span>
                      </div>
                    )}

                    {b.notes && (
                      <div className="text-xs text-[#52635A] bg-white p-2.5 rounded-xl border border-[#DFE8E2]">
                        <span className="text-[#52635A]/70">یادداشت مشتری: </span>
                        <span>{b.notes}</span>
                      </div>
                    )}

                    <div className="flex items-center justify-between text-[11px] text-[#52635A]/70 pt-1">
                      <span>ثبت شده در: {b.createdAt}</span>
                      <div className="flex items-center gap-2">
                        <a
                          href={`https://ble.ir/silenkids?text=${encodeURIComponent(`سلام ${b.parentName} گرامی، در خصوص رزرو نوبت ${b.childName} در آتلیه سیلن کیدز با شما تماس می‌گیریم.`)}`}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-1 text-[#00a859] font-bold hover:underline"
                        >
                          <MessageCircle className="w-3.5 h-3.5" />
                          <span>ارسال پیام در بله</span>
                        </a>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          )}

          {/* TAB 2: CONSULTATIONS */}
          {activeTab === 'consultations' && (
            <div className="space-y-4">
              {filteredConsultations.length === 0 ? (
                <div className="text-center py-12 text-[#52635A] text-xs">
                  هیچ درخواست مشاوره‌ای یافت نشد.
                </div>
              ) : (
                filteredConsultations.map((c) => (
                  <div
                    key={c.id}
                    className="bg-[#F8FAF9] p-5 rounded-2xl border border-[#DFE8E2] space-y-3"
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-sm font-bold text-[#2D3A33]">{c.fullName}</h3>
                        <p className="text-xs text-[#52635A] mt-0.5">
                          ساعت تماس ترجیحی: {c.preferredCallTime}
                        </p>
                      </div>
                      <span className="text-xs font-mono font-bold text-[#3E604F] bg-[#9DB9A7]/25 px-2.5 py-1 rounded-lg">
                        {c.phoneNumber}
                      </span>
                    </div>

                    <p className="text-xs text-[#52635A] bg-white p-3 rounded-xl border border-[#DFE8E2]">
                      «{c.message}»
                    </p>

                    <div className="flex items-center justify-between text-[11px] text-[#52635A]/70">
                      <span>تاریخ ثبت: {c.createdAt}</span>
                      <div className="flex items-center gap-3">
                        <a
                          href={`tel:${c.phoneNumber}`}
                          className="flex items-center gap-1 text-[#3E604F] font-bold hover:underline"
                        >
                          <Phone className="w-3 h-3 text-[#3E604F]" />
                          <span>تماس مستقیم</span>
                        </a>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          )}

          {/* TAB 3: PRINT ORDERS */}
          {activeTab === 'prints' && (
            <div className="space-y-4">
              {filteredPrints.length === 0 ? (
                <div className="text-center py-12 text-[#52635A] text-xs">
                  هنوز سفارش چاپی ثبت نشده است.
                </div>
              ) : (
                filteredPrints.map((p) => (
                  <div
                    key={p.id}
                    className="bg-[#F8FAF9] p-5 rounded-2xl border border-[#DFE8E2] space-y-3"
                  >
                    <div className="flex flex-wrap items-start justify-between gap-3 border-b border-[#DFE8E2] pb-3">
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-xs font-bold bg-white border border-[#DFE8E2] text-[#2D3A33] px-2.5 py-1 rounded-lg">
                          {p.orderNumber}
                        </span>
                        <h3 className="text-sm font-bold text-[#2D3A33]">
                          {p.customerName} - {p.printTypeFa} ({p.sizeDimensions})
                        </h3>
                      </div>

                      <select
                        value={p.status}
                        onChange={(e) => updatePrintOrderStatus(p.id, e.target.value as any)}
                        className="text-xs px-2.5 py-1 rounded-lg border border-[#DFE8E2] bg-white font-bold text-[#2D3A33]"
                      >
                        <option value="new">سفارش جدید</option>
                        <option value="processing">در حال روتوش</option>
                        <option value="printing">در حال چاپ و صحافی</option>
                        <option value="ready">آماده تحویل</option>
                        <option value="shipped">ارسال شده</option>
                      </select>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-[#52635A]">
                      <div>پوشش کاغذ: <strong className="text-[#2D3A33]">{p.finishFa}</strong></div>
                      <div>تعداد: <strong className="text-[#2D3A33]">{toPersianDigits(p.quantity)} عدد</strong></div>
                      <div>مبلغ کل: <strong className="text-[#3E604F] font-bold">{formatToman(p.totalPrice)}</strong></div>
                    </div>

                    <div className="text-xs text-[#52635A] bg-white p-2.5 rounded-xl border border-[#DFE8E2]">
                      <span className="text-[#52635A]/70">آدرس تحویل: </span>
                      <span>{p.address}</span>
                    </div>

                    {p.photoPreview && (
                      <div className="flex items-center gap-3 bg-white p-2 rounded-xl border border-[#DFE8E2]">
                        <img
                          src={p.photoPreview}
                          alt="عکس سفارش"
                          className="w-12 h-12 object-cover rounded-lg"
                        />
                        <span className="text-xs text-[#52635A]">فایل عکس با رزولوشن اصلی بارگذاری شده است.</span>
                      </div>
                    )}

                    <div className="text-[11px] text-[#52635A]/70">
                      ثبت سفارش: {p.createdAt}
                    </div>
                  </div>
                ))
              )}
            </div>
          )}

          {/* TAB 4: STUDIO PHOTOS */}
          {activeTab === 'photos' && (
            <div className="space-y-6">
              {/* Quick Upload Box */}
              <div className="bg-[#F8FAF9] p-5 rounded-2xl border border-[#DFE8E2] space-y-4">
                <h3 className="text-sm font-bold text-[#2D3A33] flex items-center gap-2">
                  <Upload className="w-4 h-4 text-[#3E604F]" />
                  <span>افزودن عکس‌های واقعی به گالری سایت</span>
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <label className="block text-[11px] font-bold text-[#52635A] mb-1">دسته‌بندی:</label>
                    <select
                      value={newPhotoCategory}
                      onChange={(e) => setNewPhotoCategory(e.target.value as ServiceCategory)}
                      className="w-full text-xs p-2.5 rounded-xl border border-[#DFE8E2] bg-white text-[#2D3A33]"
                    >
                      <option value="birthday">تولد و دندونی</option>
                      <option value="kids">کودک</option>
                      <option value="newborn">نوزادی (نیوبورن)</option>
                      <option value="pregnancy">بارداری و مادرانه</option>
                      <option value="family">خانوادگی</option>
                      <option value="portrait">پرتره اختصاصی</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-[#52635A] mb-1">عنوان عکس (اختیاری):</label>
                    <input
                      type="text"
                      value={newPhotoTitle}
                      onChange={(e) => setNewPhotoTitle(e.target.value)}
                      placeholder="مثال: تم دندونی یا تولد ۱ سالگی"
                      className="w-full text-xs p-2.5 rounded-xl border border-[#DFE8E2] bg-white text-[#2D3A33]"
                    />
                  </div>

                  <div className="flex items-end">
                    <button
                      onClick={() => fileInputRef.current?.click()}
                      className="w-full py-2.5 bg-[#3E604F] hover:bg-[#2E4B3E] text-white rounded-xl font-bold text-xs flex items-center justify-center gap-2 shadow-xs transition"
                    >
                      <Plus className="w-4 h-4" />
                      <span>انتخاب و بارگذاری فایل‌ها</span>
                    </button>
                    <input
                      ref={fileInputRef}
                      type="file"
                      multiple
                      accept="image/*"
                      className="hidden"
                      onChange={handleAdminFileUpload}
                    />
                  </div>
                </div>
              </div>

              {/* Photos Grid */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-bold text-[#2D3A33]">
                    لیست تصاویر موجود در سایت ({portfolioItems.length} تصویر)
                  </h4>
                  <button
                    onClick={resetToDefaults}
                    className="text-xs text-[#52635A] hover:text-[#2D3A33] flex items-center gap-1"
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                    <span>بازنشانی عکس‌ها</span>
                  </button>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-3">
                  {portfolioItems.map((item) => (
                    <div
                      key={item.id}
                      className="bg-white border border-[#DFE8E2] rounded-xl overflow-hidden shadow-2xs group relative text-right"
                    >
                      <div className="aspect-[4/5] bg-[#F8FAF9] overflow-hidden relative">
                        <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover" />
                        <button
                          onClick={() => deleteItem(item.id)}
                          className="absolute top-1.5 left-1.5 p-1.5 bg-rose-600/90 hover:bg-rose-700 text-white rounded-lg opacity-0 group-hover:opacity-100 transition shadow-xs"
                          title="حذف"
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
          )}
        </div>
      </div>
    </div>
  );
};
