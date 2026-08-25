import { useState, useEffect } from 'react';
import { PORTFOLIO_ITEMS } from '../data/mockData';
import { PortfolioItem, ServiceCategory } from '../types';

const STORAGE_KEY = 'silen_studio_portfolio_items_v2';

export const getStoredPortfolio = (): PortfolioItem[] => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed;
      }
    }
  } catch (e) {
    console.error('Error loading portfolio from storage', e);
  }
  return PORTFOLIO_ITEMS;
};

export const saveStoredPortfolio = (items: PortfolioItem[]) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  } catch (e) {
    console.error('Error saving portfolio to storage', e);
  }
};

export const usePortfolioManager = () => {
  const [items, setItems] = useState<PortfolioItem[]>(getStoredPortfolio);

  useEffect(() => {
    const handleStorageChange = () => {
      setItems(getStoredPortfolio());
    };
    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  const addCustomImage = (
    fileDataUrl: string,
    meta: {
      title: string;
      category: ServiceCategory;
      categoryFa: string;
      description?: string;
      theme?: string;
      ageGroup?: string;
      tags?: string[];
      isFeatured?: boolean;
    }
  ) => {
    const newItem: PortfolioItem = {
      id: `custom-${Date.now()}-${Math.random().toString(36).substr(2, 6)}`,
      title: meta.title || 'عکس اختصاصی آتلیه سیلن',
      category: meta.category,
      categoryFa: meta.categoryFa,
      imageUrl: fileDataUrl,
      description: meta.description || 'ثبت شده در استودیو عکاسی تخصصی کودک و نوزاد سیلن کیدز',
      tags: meta.tags || ['سیلن کیدز', 'آتلیه کودک تهران'],
      theme: meta.theme || 'دکور اختصاصی سیلن',
      ageGroup: meta.ageGroup || 'کودک',
      isFeatured: meta.isFeatured ?? true,
    };

    const updated = [newItem, ...items];
    setItems(updated);
    saveStoredPortfolio(updated);
    return newItem;
  };

  const updateItemImage = (id: string, newImageUrl: string) => {
    const updated = items.map((item) =>
      item.id === id ? { ...item, imageUrl: newImageUrl } : item
    );
    setItems(updated);
    saveStoredPortfolio(updated);
  };

  const deleteItem = (id: string) => {
    const updated = items.filter((item) => item.id !== id);
    setItems(updated);
    saveStoredPortfolio(updated);
  };

  const resetToDefaults = () => {
    setItems(PORTFOLIO_ITEMS);
    saveStoredPortfolio(PORTFOLIO_ITEMS);
  };

  return {
    items,
    addCustomImage,
    updateItemImage,
    deleteItem,
    resetToDefaults,
  };
};
