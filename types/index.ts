export interface FormPage {
  id: string;
  title: string;
  type: PageType;
  slug: string;
  position: number;
}

export enum PageType {
  INFO = "info",
  DETAILS = "details",
  OTHER = "other",
  ENDING = "ending",
}

export interface ContextMenuAction {
  label: string;
  action: string;
  icon?: string;
  variant?: "default" | "destructive";
}

export interface IconProps {
  className?: string;
  size?: number;
}
