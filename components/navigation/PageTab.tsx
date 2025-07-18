"use client";

import { useRouter } from "next/navigation";
import { FormPage, PageType } from "@/types";
import DropdownMenu, { DropdownMenuItem } from "@/components/ui/DropdownMenu";
import { CONTEXT_MENU_ACTIONS } from "@/utils/constants";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import {
  DotsIcon,
  InfoIcon,
  DetailsIcon,
  EndingIcon,
} from "@/components/icons";

interface PageTabProps {
  page: FormPage;
  isActive: boolean;
  onContextAction: (_action: string, _pageId: string) => void;
}

function getPageIcon(type: PageType) {
  switch (type) {
    case PageType.INFO:
      return InfoIcon;
    case PageType.DETAILS:
      return DetailsIcon;
    case PageType.OTHER:
      return DetailsIcon;
    case PageType.ENDING:
      return EndingIcon;
    default:
      return DetailsIcon;
  }
}

export default function PageTab({
  page,
  isActive,
  onContextAction,
}: PageTabProps) {
  const router = useRouter();

  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: page.id });

  const style = {
    // Note: using Transform rather than Translate will distort the tabs when dragging
    //https://github.com/clauderic/dnd-kit/issues/117
    transform: CSS.Translate.toString(transform),
    transition,
  };

  const navigateToPage = () => {
    router.push(`/page/${page.slug}`);
  };

  const handleClick = (event: React.MouseEvent) => {
    event.stopPropagation();
    navigateToPage();
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter" || event.key === " ") {
      event.stopPropagation();
      navigateToPage();
    }
  };

  const handleContextAction = (action: string) => {
    onContextAction(action, page.id);
  };

  const IconComponent = getPageIcon(page.type);

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={`relative flex h-8 cursor-pointer items-center gap-2 rounded-lg border-[0.5px] px-2.5 py-1 text-sm font-medium transition-[border] transition-colors transition-shadow duration-200 focus:outline-none focus-visible:border-[0.5px] focus-visible:border-[#2f72e2] focus-visible:bg-white focus-visible:text-[#1a1a1a] focus-visible:shadow-[0px_0px_0px_1.5px_rgba(47,114,226,0.25),0px_1px_1px_0px_rgba(0,0,0,0.02),0px_1px_3px_0px_rgba(0,0,0,0.04)] ${
        isActive
          ? "border-[#e1e1e1] bg-white text-[#1a1a1a] shadow-[0px_1px_1px_0px_rgba(0,0,0,0.02),0px_1px_3px_0px_rgba(0,0,0,0.04)]"
          : "border-[transparent] bg-[#9DA4B226] text-[#677289] hover:bg-[#9DA4B259]"
      } ${isDragging ? "z-10 opacity-60" : ""}`}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      {...attributes}
      {...listeners}
    >
      <span className="flex h-5 w-5 items-center justify-center text-base">
        <IconComponent size={20} className={isActive ? "text-[#F59D0E]" : ""} />
      </span>
      <span className="font-['Inter',_sans-serif] text-[14px] font-medium tracking-[-0.21px]">
        {page.title}
      </span>

      {isActive && (
        <DropdownMenu
          trigger={
            <div className={"rounded text-[#9DA4B2]"}>
              <DotsIcon size={16} />
            </div>
          }
        >
          <div className="py-1">
            {CONTEXT_MENU_ACTIONS.map((action) => {
              const IconComponent = action.icon;
              return (
                <DropdownMenuItem
                  key={action.action}
                  onClick={() => handleContextAction(action.action)}
                  variant={action.variant || "default"}
                >
                  <span className="mr-2">
                    <IconComponent size={16} />
                  </span>
                  {action.label}
                </DropdownMenuItem>
              );
            })}
          </div>
        </DropdownMenu>
      )}
    </div>
  );
}
