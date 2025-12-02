// components/globalbiz/homepage/DetailsPrefetch.tsx
'use client';

import { useEffect } from 'react';
import { useDetailsCache } from '@/hooks/useDetailsCache';

interface DetailsPrefetchProps {
  slugs: string[];
}

export default function DetailsPrefetch({ slugs }: DetailsPrefetchProps) {
  const prefetchAll = useDetailsCache(state => state.prefetchAll);

  useEffect(() => {
    // Small delay to not block initial page render
    const timer = setTimeout(() => {
      prefetchAll(slugs);
    }, 100);

    return () => clearTimeout(timer);
  }, [slugs, prefetchAll]);

  return null;
}