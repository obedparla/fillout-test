export interface FormPage {
  id: string;
  title: string;
  icon: string;
  slug: string;
  position: number;
}

export enum PageType {
  INFO = 'info',
  DETAILS = 'details',
  OTHER = 'other',
  ENDING = 'ending'
}

export interface ContextMenuAction {
  label: string;
  action: string;
  icon?: string;
  variant?: 'default' | 'destructive';
}