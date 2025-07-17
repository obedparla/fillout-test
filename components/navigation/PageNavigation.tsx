'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { usePageStore } from '@/store/pageStore';
import PageTabs from './PageTabs';

export default function PageNavigation() {
  const pathname = usePathname();
  const { setActivePage } = usePageStore();

  useEffect(() => {
    const slug = pathname.split('/').pop();
    if (slug) {
      setActivePage(slug);
    }
  }, [pathname, setActivePage]);

  return (
    <div className="absolute bottom-0 left-0 right-0 z-10">
      <PageTabs />
    </div>
  );
}