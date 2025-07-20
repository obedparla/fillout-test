"use client";

import { useRouter } from "next/navigation";
import { FormPage, PageType } from "@/types";
import DropdownMenu, { DropdownMenuItem } from "@/components/ui/DropdownMenu";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import {
  DotsIcon,
  InfoIcon,
  DetailsIcon,
  EndingIcon,
  PinIcon,
  EditIcon,
  CopyIcon,
  DuplicateIcon,
  DeleteIcon,
} from "@/components/icons";
import { Tab } from "@/components/navigation/Tab";

interface PageTabProps {
  page: FormPage;
  isActive: boolean;
  onContextAction: (_action: string, _pageId: string) => void;
}

const CONTEXT_MENU_ACTIONS = [
  { label: "Set as first page", action: "setFirst", icon: PinIcon },
  { label: "Rename", action: "rename", icon: EditIcon },
  { label: "Copy", action: "copy", icon: CopyIcon },
  { label: "Duplicate", action: "duplicate", icon: DuplicateIcon },
  {
    label: "Delete",
    action: "delete",
    icon: DeleteIcon,
    variant: "destructive" as const,
  },
];

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
    <Tab
      ref={setNodeRef}
      style={style}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      isActive={isActive}
      isDragging={isDragging}
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
            <div className={"ml-[2px] rounded text-[#9DA4B2]"}>
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
    </Tab>
  );
}
