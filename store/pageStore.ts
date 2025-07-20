import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { FormPage } from "@/types";
import { initialPages } from "@/utils/mockData";

interface PageStore {
  pages: FormPage[];
  activePage: string;
  isLoading: boolean;

  // Actions
  setActivePage: (slug: string) => void;
  addPage: (page: Omit<FormPage, "id" | "position">) => void;
  deletePage: (id: string) => void;
  renamePage: (id: string, title: string) => void;
  duplicatePage: (id: string) => void;
  reorderPages: (pages: FormPage[]) => void;
  findPageBySlug: (slug: string) => FormPage | undefined;
  getNextPosition: () => number;
}

export const usePageStore = create<PageStore>()(
  persist(
    (set, get) => ({
      pages: [],
      activePage: "",
      isLoading: true,

      setActivePage: (slug: string) => {
        set({ activePage: slug });
      },

      addPage: (pageData) => {
        const { pages } = get();
        const newPage: FormPage = {
          ...pageData,
          id: crypto.randomUUID(),
          position: pages.length,
        };

        set({ pages: [...pages, newPage] });
      },

      deletePage: (id: string) => {
        const { pages, activePage } = get();
        const filteredPages = pages.filter((page) => page.id !== id);
        const deletedPage = pages.find((page) => page.id === id);

        // If we're deleting the active page, switch to the first page
        if (deletedPage?.slug === activePage && filteredPages.length > 0) {
          set({
            pages: filteredPages,
            activePage: filteredPages[0].slug,
          });
        } else {
          set({ pages: filteredPages });
        }
      },

      renamePage: (id: string, title: string) => {
        const { pages } = get();
        const updatedPages = pages.map((page) =>
          page.id === id ? { ...page, title } : page,
        );
        set({ pages: updatedPages });
      },

      duplicatePage: (id: string) => {
        const { pages } = get();
        const original = pages.find((page) => page.id === id);
        if (!original) return;

        const duplicate: FormPage = {
          ...original,
          id: Date.now().toString(),
          title: `${original.title} Copy`,
          slug: `${original.slug}-copy`,
          position: pages.length,
        };

        set({ pages: [...pages, duplicate] });
      },

      reorderPages: (reorderedPages: FormPage[]) => {
        const updatedPages = reorderedPages.map((page, index) => ({
          ...page,
          position: index,
        }));
        set({ pages: updatedPages });
      },

      findPageBySlug: (slug: string) => {
        const { pages } = get();
        return pages.find((page) => page.slug === slug);
      },

      getNextPosition: () => {
        const { pages } = get();
        return pages.length;
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
            state.activePage = initialPages[0]?.slug || "info";
          }
          state.isLoading = false;
        }
      },
    },
  ),
);
