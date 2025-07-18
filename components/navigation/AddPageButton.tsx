'use client';

import { usePageStore } from '@/store/pageStore';
import { PageType } from '@/types';

interface AddPageButtonProps {
  position: number;
  className?: string;
}

export default function AddPageButton({ position, className = '' }: AddPageButtonProps) {
  const { addPage } = usePageStore();

  const handleAddPage = () => {
    const newPageNumber = position + 1;
    addPage({
      title: `Page ${newPageNumber}`,
      type: PageType.OTHER,
      slug: `page-${newPageNumber}-${Date.now()}`
    });
  };

  return (
    <button
      onClick={handleAddPage}
      className={`
        flex items-center justify-center w-8 h-8 rounded-full 
        bg-white border-2 border-dashed border-gray-300 
        text-gray-400 hover:border-gray-400 hover:text-gray-600 
        transition-all duration-200 text-lg font-bold
        hover:scale-110 hover:shadow-sm
        ${className}
      `}
      title="Add page"
    >
      +
    </button>
  );
}