import { FormPage, PageType } from "@/types";

export const initialPages: FormPage[] = [
  {
    id: "info",
    title: "Info",
    type: PageType.INFO,
  },
  {
    id: "details",
    title: "Details",
    type: PageType.DETAILS,
  },
  {
    id: "other",
    title: "Other",
    type: PageType.OTHER,
  },
  {
    id: "ending",
    title: "Ending",
    type: PageType.ENDING,
  },
];
