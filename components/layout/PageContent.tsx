'use client';

import { usePageStore } from '@/store/pageStore';

interface PageContentProps {
  slug: string;
}

export default function PageContent({ slug }: PageContentProps) {
  const { findPageBySlug } = usePageStore();
  const page = findPageBySlug(slug);

  if (!page) {
    return (
      <div className="flex-1 bg-slate-800 text-white flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Page Not Found</h2>
          <p className="text-gray-400">The page "{slug}" does not exist.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 bg-slate-800 text-white flex items-center justify-center">
      <div className="text-center max-w-md">
        <div className="text-6xl mb-4">{page.icon}</div>
        <h2 className="text-3xl font-bold mb-4">{page.title} Page</h2>
        <p className="text-gray-400 mb-6">
          This is a placeholder for the {page.title.toLowerCase()} page content.
        </p>
        <div className="bg-slate-700 rounded-lg p-4 text-left">
          <p className="text-sm text-gray-300 mb-2">Page Details:</p>
          <p className="text-sm">ID: {page.id}</p>
          <p className="text-sm">Slug: {page.slug}</p>
          <p className="text-sm">Position: {page.position}</p>
        </div>
      </div>
    </div>
  );
}