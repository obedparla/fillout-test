import { FormPage, PageType } from "@/types";

export const initialPages: FormPage[] = [
  {
    id: "1",
    title: "Info",
    type: PageType.INFO,
    slug: "info",
  },
  {
    id: "2",
    title: "Details",
    type: PageType.DETAILS,
    slug: "details",
  },
  {
    id: "3",
    title: "Other",
    type: PageType.OTHER,
    slug: "other",
  },
  {
    id: "4",
    title: "Ending",
    type: PageType.ENDING,
    slug: "ending",
  },
];
