"use client";

import { usePageStore } from "@/store/pageStore";
import { PageType } from "@/types";

interface AddPageButtonProps {
  position: number;
  className?: string;
}

export default function AddPageButton({
  position,
  className = "",
}: AddPageButtonProps) {
  const { addPage } = usePageStore();

  const handleAddPage = () => {
    const newPageNumber = position + 1;
    addPage({
      title: `Page ${newPageNumber}`,
      type: PageType.OTHER,
      slug: `page-${newPageNumber}-${Date.now()}`,
    });
  };

  return (
    <button
      onClick={handleAddPage}
      className={`flex h-8 w-8 items-center justify-center rounded-full border-2 border-dashed border-gray-300 bg-white text-lg font-bold text-gray-400 transition-all duration-200 hover:scale-110 hover:border-gray-400 hover:text-gray-600 hover:shadow-sm ${className} `}
      title="Add page"
    >
      +
    </button>
  );
}
