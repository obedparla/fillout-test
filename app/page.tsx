"use client";

import { usePageStore } from "@/store/pageStore";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const { pages, isLoading, setActivePage } = usePageStore();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && pages.length > 0 && pages[0]?.id) {
      router.push(`/page/${pages[0].id}`);
      setActivePage(pages[0].id);
    }
  }, [isLoading, pages, router]);

  if (isLoading) {
    return (
      <div className="flex h-[100%] flex-1 items-center justify-center bg-[#ecfaf0] text-white">
        <div className="text-center">
          <div className="mb-4 h-8 w-8 animate-spin rounded-full border-4 border-gray-600 border-t-white"></div>
          <p className="text-gray-400">Loading...</p>
        </div>
      </div>
    );
  }

  return null;
}
