import { FormPage, PageType } from "@/types";

export const initialPages: FormPage[] = [
  {
    id: "1",
    title: "Info",
    type: PageType.INFO,
    slug: "info",
    position: 0,
  },
  {
    id: "2",
    title: "Details",
    type: PageType.DETAILS,
    slug: "details",
    position: 1,
  },
  {
    id: "3",
    title: "Other",
    type: PageType.OTHER,
    slug: "other",
    position: 2,
  },
  {
    id: "4",
    title: "Ending",
    type: PageType.ENDING,
    slug: "ending",
    position: 3,
  },
];
