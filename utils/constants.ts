import { PinIcon, EditIcon, CopyIcon, DuplicateIcon, DeleteIcon } from '@/components/icons';

export const CONTEXT_MENU_ACTIONS = [
  { label: 'Set as first page', action: 'setFirst', icon: PinIcon },
  { label: 'Rename', action: 'rename', icon: EditIcon },
  { label: 'Copy', action: 'copy', icon: CopyIcon },
  { label: 'Duplicate', action: 'duplicate', icon: DuplicateIcon },
  { label: 'Delete', action: 'delete', icon: DeleteIcon, variant: 'destructive' as const }
];