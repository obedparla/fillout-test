export interface FormPage {
  id: string;
  title: string;
  type: PageType;
  slug: string;
}

export enum PageType {
  INFO = "info",
  DETAILS = "details",
  OTHER = "other",
  ENDING = "ending",
}

export interface IconProps {
  className?: string;
  size?: number;
}
