'use client';

import { useRouter } from 'next/navigation';
import { FormPage } from '@/types';
import DropdownMenu, { DropdownMenuItem } from '@/components/ui/DropdownMenu';
import { CONTEXT_MENU_ACTIONS } from '@/utils/constants';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

interface PageTabProps {
  page: FormPage;
  isActive: boolean;
  onContextAction: (action: string, pageId: string) => void;
}

export default function PageTab({ page, isActive, onContextAction }: PageTabProps) {
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
      className={`relative flex items-center ${isDragging ? 'opacity-50' : ''}`}
    >
      <button
        onClick={handleClick}
        className={`
          flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200
          ${isActive 
            ? 'bg-orange-400 text-white shadow-md' 
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:shadow-sm'
          }
        `}
        {...attributes}
        {...listeners}
      >
        <span className="text-base">{page.icon}</span>
        <span>{page.title}</span>
      </button>

      <DropdownMenu
        trigger={
          <button
            className={`
              ml-1 p-1 rounded hover:bg-gray-200 transition-colors
              ${isActive ? 'text-white hover:bg-orange-500' : 'text-gray-500'}
            `}
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
              <circle cx="6" cy="2" r="1"/>
              <circle cx="6" cy="6" r="1"/>
              <circle cx="6" cy="10" r="1"/>
            </svg>
          </button>
        }
      >
        <div className="py-1">
          {CONTEXT_MENU_ACTIONS.map((action) => (
            <DropdownMenuItem
              key={action.action}
              onClick={() => handleContextAction(action.action)}
              variant={action.variant}
            >
              <span className="mr-2">{action.icon}</span>
              {action.label}
            </DropdownMenuItem>
          ))}
        </div>
      </DropdownMenu>
    </div>
  );
}