export type ServiceCategory = 'pregnancy' | 'newborn' | 'kids' | 'family' | 'birthday' | 'portrait';

export interface PortfolioItem {
  id: string;
  title: string;
  category: ServiceCategory;
  categoryFa: string;
  imageUrl: string;
  description: string;
  tags: string[];
  theme?: string;
  ageGroup?: string;
  isFeatured?: boolean;
}

export interface PackageItem {
  id: string;
  name: string;
  category: ServiceCategory | 'all';
  price: string;
  rawPrice: number;
  popular?: boolean;
  features: string[];
  duration: string;
  clothingChanges: string;
  prints: string;
  digitalFiles: string;
  badge?: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string[];
  category: string;
  date: string;
  readTime: string;
  imageUrl: string;
  author: string;
  keywords: string[];
  tips?: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  childName?: string;
  service: string;
  rating: number;
  date: string;
  comment: string;
  verified: boolean;
  avatarBg: string;
}

export interface Booking {
  id: string;
  trackingCode: string;
  childName: string;
  childAge: string;
  childGender: 'girl' | 'boy' | 'pregnant';
  parentName: string;
  phoneNumber: string;
  serviceCategory: ServiceCategory;
  serviceNameFa: string;
  selectedPackage?: string;
  preferredDate: string;
  preferredTime: string;
  needStudioWardrobe: boolean;
  themePreference: string;
  notes?: string;
  createdAt: string;
  status: 'pending' | 'confirmed' | 'contacted' | 'completed' | 'cancelled';
  totalEstimate?: string;
}

export interface PrintOrder {
  id: string;
  orderNumber: string;
  customerName: string;
  phoneNumber: string;
  address: string;
  printType: 'shasi' | 'silk_paper' | 'metallic' | 'luxury_frame' | 'photobook_album' | 'magnet';
  printTypeFa: string;
  size: string;
  sizeDimensions: string;
  finish: 'silk' | 'matte' | 'glossy' | 'sand_laminate';
  finishFa: string;
  quantity: number;
  photoPreview?: string;
  fileNote?: string;
  totalPrice: number;
  createdAt: string;
  status: 'new' | 'processing' | 'printing' | 'ready' | 'shipped';
}

export interface ConsultationRequest {
  id: string;
  fullName: string;
  phoneNumber: string;
  serviceCategory: ServiceCategory | 'general';
  message: string;
  preferredCallTime: string;
  createdAt: string;
  status: 'new' | 'called' | 'scheduled';
}
