// hooks/useDetailsCache.ts
'use client';

import { create } from 'zustand';

// interface DetailData {
//   id: string;
//   name: string;
//   slug: string;
//   description: string | null;
//   benefits: string[] | null;
//   licenseTypes: any[] | null;
//   subFreezones: any[] | null;
//   businessEntities: any[] | null;
//   buesinessProcess: any[] | null;
//   understanding: any | null;
//   prerequisites: any | null;
//   perks: any[] | null;
//    createdAt: string;  // ✅ Added
//   updatedAt: string; 
//   [key: string]: any;
// }

export interface LicenseType {
  image?: string;
  heading: string;
  description?: string;
}

export interface BusinessProcess {
  image?: string;
  heading: string;
  description?: string;
}

export interface BusinessEntity {
  title: string;
  description?: string;
}

export interface SubFreezone {
  name: string;
  description?: string;
  image?: string;
  benefits?: string[];
  businessEntitiesAllowed?: {
    title: string;
    description?: string;
  }[];
}

export interface Perk {
  image?: string;
  description?: string;
}

export interface DetailData {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  benefits: string[] | null;
  licenseTypes: LicenseType[] | null;
  subFreezones: SubFreezone[] | null;
  businessEntities: BusinessEntity[] | null;
  buesinessProcess: BusinessProcess[] | null;
  understanding: string[] | null;
  prerequisites: string[] | null;
  perks: Perk[] | null;
  createdAt: string;
  updatedAt: string;
}

export interface ApiResponse {
  success: boolean;
  message: string;
  data: DetailData;
}
interface CacheEntry {
  data: DetailData;
  timestamp: number;
}

interface DetailsStore {
  cache: Map<string, CacheEntry>;
  getDetail: (slug: string) => Promise<DetailData>;
  prefetchDetail: (slug: string) => Promise<void>;
  prefetchAll: (slugs: string[]) => Promise<void>;
  clearCache: () => void;
}

const CACHE_TTL = 5 * 60 * 1000; // 5 minutes

export const useDetailsCache = create<DetailsStore>((set, get) => ({
  cache: new Map(),

  getDetail: async (slug: string) => {
    const { cache } = get();
    const now = Date.now();
    const cached = cache.get(slug);

    // Return cached if valid
    if (cached && (now - cached.timestamp) < CACHE_TTL) {
      console.log(`✅ Cache HIT for: ${slug}`);
      return cached.data;
    }

    console.log(`⏳ Cache MISS for: ${slug}, fetching...`);
    
    // Fetch fresh data
    const res = await fetch(`/api/details/${slug}`);
    if (!res.ok) throw new Error('Failed to fetch');
    
    const response = await res.json();
    const data = response.data;

    // Update cache
    const newCache = new Map(cache);
    newCache.set(slug, { data, timestamp: now });
    set({ cache: newCache });

    console.log(`💾 Cached: ${slug}`);
    return data;
  },

  prefetchDetail: async (slug: string) => {
    try {
      await get().getDetail(slug);
    } catch (error) {
      console.error(`Failed to prefetch ${slug}:`, error);
    }
  },

  prefetchAll: async (slugs: string[]) => {
    console.log(`🚀 Prefetching ${slugs.length} items...`);
    await Promise.allSettled(
      slugs.map(slug => get().prefetchDetail(slug))
    );
    console.log(`✅ Prefetch complete!`);
  },

  clearCache: () => {
    set({ cache: new Map() });
    console.log('🗑️ Cache cleared');
  },
}));