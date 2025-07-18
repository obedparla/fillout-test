"use client";

import { usePageStore } from "@/store/pageStore";

interface PageContentProps {
  slug: string;
}

export default function PageContent({ slug }: PageContentProps) {
  const { findPageBySlug } = usePageStore();
  const page = findPageBySlug(slug);

  if (!page) {
    return (
      <div className="flex flex-1 items-center justify-center bg-slate-800 text-white">
        <div className="text-center">
          <h2 className="mb-4 text-2xl font-bold">Page Not Found</h2>
          <p className="text-gray-400">The page "{slug}" does not exist.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-1 items-center justify-center bg-slate-800 text-white">
      <div className="max-w-md text-center">
        <div className="mb-4 text-6xl">{page.icon}</div>
        <h2 className="mb-4 text-3xl font-bold">{page.title} Page</h2>
        <p className="mb-6 text-gray-400">
          This is a placeholder for the {page.title.toLowerCase()} page content.
        </p>
        <div className="rounded-lg bg-slate-700 p-4 text-left">
          <p className="mb-2 text-sm text-gray-300">Page Details:</p>
          <p className="text-sm">ID: {page.id}</p>
          <p className="text-sm">Slug: {page.slug}</p>
          <p className="text-sm">Position: {page.position}</p>
        </div>
      </div>
    </div>
  );
}
