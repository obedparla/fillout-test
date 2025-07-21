"use client";

import { useRouter } from "next/navigation";
import { FormPage } from "@/types";
import DropdownMenu, { DropdownMenuItem } from "@/components/ui/DropdownMenu";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import {
  DotsIcon,
  PinIcon,
  EditIcon,
  CopyIcon,
  DuplicateIcon,
  DeleteIcon,
} from "@/components/icons";
import Tab from "@/components/navigation/Tab";
import { PageIcon } from "@/components/ui/PageIcon";
import { usePageStore } from "@/store/pageStore";

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
];

export default function PageTab({
  page,
  isActive,
  onContextAction,
}: PageTabProps) {
  const router = useRouter();
  const { setActivePage } = usePageStore();
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
    setActivePage(page.slug);
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
        <PageIcon
          type={page.type}
          size={20}
          className={isActive ? "text-[#F59D0E]" : ""}
        />
      </span>
      <span className="text-[14px] font-medium">{page.title}</span>

      {isActive && (
        <DropdownMenu
          trigger={
            <div className={"ml-[2px] text-[#9DA4B2]"}>
              <DotsIcon size={16} />
            </div>
          }
        >
          <div
            className={
              "font-bl-melody mb-[7px] rounded-t-[8px] border-b border-b-[#E1E1E1] bg-[#FAFBFC] px-3 py-2 font-['BLMelody']"
            }
          >
            Settings
          </div>

          {CONTEXT_MENU_ACTIONS.map((action) => {
            const IconComponent = action.icon;
            return (
              <DropdownMenuItem
                key={action.action}
                onClick={() => handleContextAction(action.action)}
                variant={action.variant || "default"}
              >
                <span className="mr-[6px] text-[#9DA4B2]">
                  <IconComponent size={16} />
                </span>
                {action.label}
              </DropdownMenuItem>
            );
          })}

          <div className={"my-[6px] h-[0.5px] bg-[#E1E1E1]"}></div>

          <DropdownMenuItem
            key={"Delete"}
            onClick={() => handleContextAction("delete")}
            variant={"destructive"}
          >
            <span className="mr-[6px] text-[#EF494F] hover:bg-red-50 focus:bg-red-50">
              <DeleteIcon size={16} />
            </span>
            Delete
          </DropdownMenuItem>
        </DropdownMenu>
      )}
    </Tab>
  );
}
