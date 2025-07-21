"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { usePageStore } from "@/store/pageStore";
import {
  DndContext,
  closestCenter,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
} from "@dnd-kit/core";
import { restrictToHorizontalAxis } from "@dnd-kit/modifiers";
import {
  arrayMove,
  SortableContext,
  horizontalListSortingStrategy,
} from "@dnd-kit/sortable";
import PageTab from "./PageTab";
import Tab from "@/components/navigation/Tab";
import PlusIcon from "@/components/icons/PlusIcon";
import { PageType } from "@/types";

export default function PageTabs() {
  const { pages, reorderPages, isLoading, addPage, activePage } =
    usePageStore();
  const router = useRouter();

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        delay: 150,
        tolerance: 5,
      },
    }),
  );

  const handleContextAction = (_action: string, _pageId: string) => {
    // TODO: Implement context action handling
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (active.id !== over?.id) {
      const oldIndex = pages.findIndex((page) => page.id === active.id);
      const newIndex = pages.findIndex((page) => page.id === over?.id);

      const reorderedPages = arrayMove(pages, oldIndex, newIndex);
      reorderPages(reorderedPages);
    }
  };

  const handleAddPage = (insertAtIndex?: number) => {
    const newPageNumber = pages.length + 1;
    const slug = crypto.randomUUID();

    addPage(
      {
        title: `Page ${newPageNumber}`,
        type: PageType.DETAILS,
        slug,
      },
      insertAtIndex,
    );

    router.push(`/page/${slug}`);
  };

  if (isLoading) {
    return (
      <div className="flex items-center overflow-auto border-t border-gray-200 bg-gray-50 px-4 py-2">
        <div className="flex items-center gap-2">
          <div className="h-8 w-20 animate-pulse rounded bg-gray-300"></div>
          <div className="h-8 w-24 animate-pulse rounded bg-gray-300"></div>
          <div className="h-8 w-16 animate-pulse rounded bg-gray-300"></div>
          <div className="h-8 w-16 animate-pulse rounded bg-gray-300"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center overflow-auto border-t border-gray-200 bg-gray-50 px-4 py-2">
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
        modifiers={[restrictToHorizontalAxis]}
      >
        <SortableContext
          items={pages.map((p) => p.id)}
          strategy={horizontalListSortingStrategy}
        >
          <div className="flex items-center">
            {pages.map((page, index) => (
              <React.Fragment key={page.id}>
                <PageTab
                  page={page}
                  isActive={activePage === page.slug}
                  onContextAction={handleContextAction}
                />

                {index < pages.length - 1 && (
                  <div className="group relative flex h-8 w-[20px] items-center justify-center transition-all duration-200 hover:w-[56px]">
                    <div className="h-px w-[20px] border-t border-dashed border-[#C0C0C0] transition-all duration-200 group-hover:w-[56px]"></div>
                    <button
                      onClick={() => {
                        handleAddPage(index + 1);
                      }}
                      className="shadow-tab-active absolute flex h-5 w-5 items-center justify-center rounded-full border-[0.5px] border-[#E1E1E1] bg-white text-black opacity-0 transition-all duration-200 group-hover:opacity-100 hover:opacity-100"
                      title="Add page"
                    >
                      <PlusIcon size={12} />
                    </button>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </SortableContext>
      </DndContext>

      <div className="ml-2">
        <Tab onClick={() => handleAddPage()} isActive title="Add page">
          <span className="flex h-5 w-5 items-center justify-center text-base">
            <PlusIcon />
          </span>
          <span className="font-['Inter',_sans-serif] text-[14px] font-medium tracking-[-0.21px]">
            Add page
          </span>
        </Tab>
      </div>
    </div>
  );
}
