"use client";

import { usePageStore } from "@/store/pageStore";
import { CONTEXT_MENU_ACTIONS } from "@/utils/constants";

interface ContextMenuProps {
  pageId: string;
  onClose: () => void;
}

export default function ContextMenu({ pageId, onClose }: ContextMenuProps) {
  const { deletePage, renamePage, duplicatePage } = usePageStore();

  const handleAction = (action: string) => {
    switch (action) {
      case "setFirst":
        // TODO: Implement set as first page functionality
        break;
      case "rename":
        const newTitle = prompt("Enter new page title:");
        if (newTitle?.trim()) {
          renamePage(pageId, newTitle.trim());
        }
        break;
      case "copy":
        // TODO: Implement copy page functionality
        break;
      case "duplicate":
        duplicatePage(pageId);
        break;
      case "delete":
        if (confirm("Are you sure you want to delete this page?")) {
          deletePage(pageId);
        }
        break;
    }
    onClose();
  };

  return (
    <div className="min-w-[160px] rounded-lg border border-gray-200 bg-white py-1 shadow-lg">
      {CONTEXT_MENU_ACTIONS.map((action) => {
        const IconComponent = action.icon;
        return (
          <button
            key={action.action}
            onClick={() => handleAction(action.action)}
            className={`flex w-full items-center px-3 py-2 text-left text-sm transition-colors hover:bg-gray-50`}
          >
            <span className="mr-2">
              <IconComponent size={14} />
            </span>
            {action.label}
          </button>
        );
      })}
    </div>
  );
}
