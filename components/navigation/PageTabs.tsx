"use client";

import { usePathname } from "next/navigation";
import { usePageStore } from "@/store/pageStore";
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
} from "@dnd-kit/core";
import {
  restrictToHorizontalAxis,
  restrictToFirstScrollableAncestor,
} from "@dnd-kit/modifiers";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  horizontalListSortingStrategy,
} from "@dnd-kit/sortable";
import PageTab from "./PageTab";
import AddPageButton from "./AddPageButton";

export default function PageTabs() {
  const pathname = usePathname();
  const { pages, reorderPages } = usePageStore();

  const currentSlug = pathname.split("/").pop();
  const sortedPages = [...pages].sort((a, b) => a.position - b.position);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        delay: 100,
        tolerance: 5,
      },
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
  );

  const handleContextAction = (_action: string, _pageId: string) => {
    // TODO: Implement context action handling
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (active.id !== over?.id) {
      const oldIndex = sortedPages.findIndex((page) => page.id === active.id);
      const newIndex = sortedPages.findIndex((page) => page.id === over?.id);

      const reorderedPages = arrayMove(sortedPages, oldIndex, newIndex);
      reorderPages(reorderedPages);
    }
  };

  return (
    <div className="flex items-center overflow-auto border-t border-gray-200 bg-gray-50 px-4 py-2">
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
        modifiers={[
          restrictToHorizontalAxis,
          restrictToFirstScrollableAncestor,
        ]}
      >
        <SortableContext
          items={sortedPages.map((p) => p.id)}
          strategy={horizontalListSortingStrategy}
        >
          <div className="flex items-center gap-2">
            {sortedPages.map((page, index) => (
              <div key={page.id} className="flex items-center">
                <PageTab
                  page={page}
                  isActive={currentSlug === page.slug}
                  onContextAction={handleContextAction}
                />
              </div>
            ))}
          </div>
        </SortableContext>
      </DndContext>

      <div className="ml-2">
        <AddPageButton position={sortedPages.length} />
      </div>
    </div>
  );
}
