import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { FormPage } from "@/types";
import { initialPages } from "@/utils/mockData";

interface PageStore {
  pages: FormPage[];
  activePage: string;
  isLoading: boolean;

  // Actions
  setActivePage: (id: string) => void;
  addPage: (page: Omit<FormPage, "id">, insertAtIndex?: number) => void;
  reorderPages: (pages: FormPage[]) => void;
  findPageById: (id: string) => FormPage | undefined;
}

export const usePageStore = create<PageStore>()(
  persist(
    (set, get) => ({
      pages: [],
      activePage: "",
      isLoading: true,

      setActivePage: (id: string) => {
        set({ activePage: id });
      },

      addPage: (pageData, insertAtIndex) => {
        const { pages } = get();

        const newPage: FormPage = {
          id: crypto.randomUUID(),
          ...pageData,
        };

        if (
          insertAtIndex !== undefined &&
          insertAtIndex >= 0 &&
          insertAtIndex <= pages.length
        ) {
          const newPages = [...pages];
          newPages.splice(insertAtIndex, 0, newPage);
          set({ pages: newPages, activePage: newPage.id });
        } else {
          set({ pages: [...pages, newPage], activePage: newPage.id });
        }
      },

      reorderPages: (reorderedPages: FormPage[]) => {
        set({ pages: reorderedPages });
      },

      findPageById: (id: string) => {
        const { pages } = get();
        return pages.find((page) => page.id === id);
      },
    }),
    {
      name: "form-pages-storage",
      storage: createJSONStorage(() => localStorage),
      onRehydrateStorage: () => (state) => {
        if (state) {
          // If no pages exist after rehydration, use initial pages
          if (!state.pages || state.pages.length === 0) {
            state.pages = initialPages;
            state.activePage = initialPages[0]?.id || "info";
          }
          state.isLoading = false;
        }
      },
    },
  ),
);
