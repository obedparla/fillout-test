'use client';

import { usePageStore } from '@/store/pageStore';
import { CONTEXT_MENU_ACTIONS } from '@/utils/constants';

interface ContextMenuProps {
  pageId: string;
  onClose: () => void;
}

export default function ContextMenu({ pageId, onClose }: ContextMenuProps) {
  const { deletePage, renamePage, duplicatePage } = usePageStore();

  const handleAction = (action: string) => {
    switch (action) {
      case 'setFirst':
        console.log('Set as first page:', pageId);
        break;
      case 'rename':
        const newTitle = prompt('Enter new page title:');
        if (newTitle?.trim()) {
          renamePage(pageId, newTitle.trim());
        }
        break;
      case 'copy':
        console.log('Copy page:', pageId);
        break;
      case 'duplicate':
        duplicatePage(pageId);
        break;
      case 'delete':
        if (confirm('Are you sure you want to delete this page?')) {
          deletePage(pageId);
        }
        break;
    }
    onClose();
  };

  return (
    <div className="bg-white rounded-lg shadow-lg border border-gray-200 py-1 min-w-[160px]">
      {CONTEXT_MENU_ACTIONS.map((action) => (
        <button
          key={action.action}
          onClick={() => handleAction(action.action)}
          className={`
            w-full flex items-center px-3 py-2 text-sm text-left hover:bg-gray-50 transition-colors
            ${action.variant === 'destructive' ? 'text-red-600 hover:bg-red-50' : 'text-gray-700'}
          `}
        >
          <span className="mr-2">{action.icon}</span>
          {action.label}
        </button>
      ))}
    </div>
  );
}