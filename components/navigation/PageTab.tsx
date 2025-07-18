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
  OtherIcon,
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
    transform: CSS.Transform.toString(transform),
    transition,
  };

  const handleClick = () => {
    router.push(`/page/${page.slug}`);
  };

  const handleContextAction = (action: string) => {
    onContextAction(action, page.id);
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={`relative flex cursor-pointer items-center ${
        isDragging ? "opacity-50" : ""
      }`}
      onClick={handleClick}
      {...attributes}
      {...listeners}
    >
      <div
        className={`relative flex h-8 items-center gap-1.5 rounded-lg px-2.5 py-1 text-sm font-medium transition-all duration-200 ${
          isActive
            ? "border-[0.5px] border-[#e1e1e1] bg-white text-[#1a1a1a] shadow-[0px_1px_1px_0px_rgba(0,0,0,0.02),0px_1px_3px_0px_rgba(0,0,0,0.04)]"
            : "bg-[rgba(157,164,178,0.15)] text-[#677289] hover:bg-[rgba(157,164,178,0.25)]"
        } `}
      >
        <span className="flex h-5 w-5 items-center justify-center text-base">
          {(() => {
            const IconComponent = getPageIcon(page.type);
            return <IconComponent size={20} />;
          })()}
        </span>
        <span className="font-['Inter:Medium',_sans-serif] text-[14px] font-medium tracking-[-0.21px]">
          {page.title}
        </span>

        {isActive && (
          <DropdownMenu
            trigger={
              <div className={"rounded text-gray-500"}>
                <DotsIcon />
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
                      <IconComponent size={14} />
                    </span>
                    {action.label}
                  </DropdownMenuItem>
                );
              })}
            </div>
          </DropdownMenu>
        )}
      </div>
    </div>
  );
}
