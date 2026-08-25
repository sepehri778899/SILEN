import { Booking, PrintOrder, ConsultationRequest } from '../types';
import { INITIAL_BOOKINGS, INITIAL_CONSULTATIONS } from '../data/mockData';

const BOOKINGS_KEY = 'silen_kids_bookings';
const ORDERS_KEY = 'silen_kids_print_orders';
const CONSULTATIONS_KEY = 'silen_kids_consultations';

export const getStoredBookings = (): Booking[] => {
  try {
    const data = localStorage.getItem(BOOKINGS_KEY);
    if (!data) {
      localStorage.setItem(BOOKINGS_KEY, JSON.stringify(INITIAL_BOOKINGS));
      return INITIAL_BOOKINGS;
    }
    return JSON.parse(data);
  } catch {
    return INITIAL_BOOKINGS;
  }
};

export const saveBooking = (booking: Omit<Booking, 'id' | 'trackingCode' | 'createdAt' | 'status'>): Booking => {
  const bookings = getStoredBookings();
  const trackingCode = `SILEN-${Math.floor(1000 + Math.random() * 9000)}`;
  const now = new Date();
  const formattedDate = new Intl.DateTimeFormat('fa-IR').format(now);

  const newBooking: Booking = {
    ...booking,
    id: `bk-${Date.now()}`,
    trackingCode,
    createdAt: formattedDate,
    status: 'pending',
  };

  const updated = [newBooking, ...bookings];
  localStorage.setItem(BOOKINGS_KEY, JSON.stringify(updated));
  window.dispatchEvent(new Event('silen_data_updated'));
  return newBooking;
};

export const updateBookingStatus = (id: string, status: Booking['status']) => {
  const bookings = getStoredBookings();
  const updated = bookings.map(b => (b.id === id ? { ...b, status } : b));
  localStorage.setItem(BOOKINGS_KEY, JSON.stringify(updated));
  window.dispatchEvent(new Event('silen_data_updated'));
};

export const getStoredPrintOrders = (): PrintOrder[] => {
  try {
    const data = localStorage.getItem(ORDERS_KEY);
    if (!data) return [];
    return JSON.parse(data);
  } catch {
    return [];
  }
};

export const savePrintOrder = (order: Omit<PrintOrder, 'id' | 'orderNumber' | 'createdAt' | 'status'>): PrintOrder => {
  const orders = getStoredPrintOrders();
  const orderNumber = `ORD-${Math.floor(10000 + Math.random() * 90000)}`;
  const now = new Date();
  const formattedDate = new Intl.DateTimeFormat('fa-IR').format(now);

  const newOrder: PrintOrder = {
    ...order,
    id: `ord-${Date.now()}`,
    orderNumber,
    createdAt: formattedDate,
    status: 'new',
  };

  const updated = [newOrder, ...orders];
  localStorage.setItem(ORDERS_KEY, JSON.stringify(updated));
  window.dispatchEvent(new Event('silen_data_updated'));
  return newOrder;
};

export const updatePrintOrderStatus = (id: string, status: PrintOrder['status']) => {
  const orders = getStoredPrintOrders();
  const updated = orders.map(o => (o.id === id ? { ...o, status } : o));
  localStorage.setItem(ORDERS_KEY, JSON.stringify(updated));
  window.dispatchEvent(new Event('silen_data_updated'));
};

export const getStoredConsultations = (): ConsultationRequest[] => {
  try {
    const data = localStorage.getItem(CONSULTATIONS_KEY);
    if (!data) {
      localStorage.setItem(CONSULTATIONS_KEY, JSON.stringify(INITIAL_CONSULTATIONS));
      return INITIAL_CONSULTATIONS;
    }
    return JSON.parse(data);
  } catch {
    return INITIAL_CONSULTATIONS;
  }
};

export const saveConsultation = (cons: Omit<ConsultationRequest, 'id' | 'createdAt' | 'status'>): ConsultationRequest => {
  const items = getStoredConsultations();
  const now = new Date();
  const formattedDate = new Intl.DateTimeFormat('fa-IR', {
    dateStyle: 'short',
    timeStyle: 'short',
  }).format(now);

  const newCons: ConsultationRequest = {
    ...cons,
    id: `cons-${Date.now()}`,
    createdAt: formattedDate,
    status: 'new',
  };

  const updated = [newCons, ...items];
  localStorage.setItem(CONSULTATIONS_KEY, JSON.stringify(updated));
  window.dispatchEvent(new Event('silen_data_updated'));
  return newCons;
};

export const toPersianDigits = (num: string | number): string => {
  const idMap = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
  return String(num).replace(/[0-9]/g, w => idMap[+w]);
};

export const formatToman = (amount: number): string => {
  return toPersianDigits(amount.toLocaleString('fa-IR')) + ' تومان';
};
