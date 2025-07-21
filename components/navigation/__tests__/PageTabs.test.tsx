import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useRouter } from "next/navigation";
import "@testing-library/jest-dom";
import PageTabs from "../PageTabs";
import { usePageStore } from "../../../store/pageStore";
import { PageType } from "../../../types";

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

jest.mock("../../../store/pageStore", () => ({
  usePageStore: jest.fn(),
}));

jest.mock("../../icons/PlusIcon", () => {
  return function PlusIcon() {
    return <span data-testid="plus-icon">+</span>;
  };
});

jest.mock("../PageTab", () => {
  return function PageTab({ page, isActive, "data-testid": dataTestId }: any) {
    return (
      <div data-testid={dataTestId} className={isActive ? "active" : ""}>
        {page.title}
      </div>
    );
  };
});

describe("PageTabs", () => {
  const mockRouter = {
    push: jest.fn(),
  };

  const mockPageStore = {
    pages: [
      {
        id: "1",
        title: "Page 1",
        slug: "page-1",
        type: PageType.INFO,
      },
      {
        id: "2",
        title: "Page 2",
        slug: "page-2",
        type: PageType.DETAILS,
      },
    ],
    activePage: "page-1",
    isLoading: false,
    addPage: jest.fn(),
    reorderPages: jest.fn(),
  };

  beforeEach(() => {
    jest.clearAllMocks();
    (useRouter as jest.Mock).mockReturnValue(mockRouter);
    (usePageStore as unknown as jest.Mock).mockReturnValue(mockPageStore);
    // Clear test globals
    delete (window as any).testPageName;
    delete (window as any).testPageType;
  });

  it("renders page tabs correctly", () => {
    render(<PageTabs />);

    expect(screen.getByTestId("page-tabs-container")).toBeInTheDocument();
    expect(screen.getByTestId("page-tab-page-1")).toBeInTheDocument();
    expect(screen.getByTestId("page-tab-page-2")).toBeInTheDocument();
    expect(screen.getByTestId("add-page-button")).toBeInTheDocument();
  });

  it("opens modal when Add page button is clicked", async () => {
    const user = userEvent.setup();
    render(<PageTabs />);

    const addPageButton = screen.getByTestId("add-page-button");
    await user.click(addPageButton);

    expect(screen.getByTestId("add-page-modal")).toBeInTheDocument();
  });

  it("adds a new page when modal form is submitted", async () => {
    const user = userEvent.setup();
    render(<PageTabs />);

    // Open modal
    const addPageButton = screen.getByTestId("add-page-button");
    await user.click(addPageButton);

    // Fill in form
    const nameInput = screen.getByTestId("page-name-input");
    await user.type(nameInput, "New Test Page");

    // Select page type
    const pageTypeRadio = screen.getByTestId("page-type-info");
    await user.click(pageTypeRadio);

    // Submit form
    const submitButton = screen.getByTestId("submit-add-page");
    await user.click(submitButton);

    // Verify addPage was called
    expect(mockPageStore.addPage).toHaveBeenCalledWith(
      expect.objectContaining({
        title: "New Test Page",
        type: PageType.INFO,
        slug: expect.any(String),
      }),
      undefined,
    );

    // Verify router navigation
    expect(mockRouter.push).toHaveBeenCalledWith(
      expect.stringMatching(/^\/page\//),
    );
  });

  it("adds page to tabs list after successful creation", async () => {
    const user = userEvent.setup();

    // Mock addPage to simulate adding a page to the store
    const mockAddPage = jest.fn().mockImplementation((pageData) => {
      const newPage = {
        id: "3",
        slug: expect.any(String),
        ...pageData,
      };
      mockPageStore.pages.push(newPage);
    });

    (usePageStore as unknown as jest.Mock).mockReturnValue({
      ...mockPageStore,
      addPage: mockAddPage,
    });

    render(<PageTabs />);

    // Initial pages count
    expect(screen.getByTestId("page-tab-page-1")).toBeInTheDocument();
    expect(screen.getByTestId("page-tab-page-2")).toBeInTheDocument();

    // Open modal and add page
    await user.click(screen.getByTestId("add-page-button"));

    const nameInput = screen.getByTestId("page-name-input");
    await user.type(nameInput, "New Page");

    await user.click(screen.getByTestId("submit-add-page"));

    // Verify addPage was called
    expect(mockAddPage).toHaveBeenCalledWith(
      expect.objectContaining({
        title: "New Page",
        type: PageType.DETAILS,
      }),
      undefined,
    );
  });

  it("handles different page types correctly", async () => {
    const user = userEvent.setup();
    render(<PageTabs />);

    await user.click(screen.getByTestId("add-page-button"));

    const nameInput = screen.getByTestId("page-name-input");
    await user.type(nameInput, "Info Page");

    // Select INFO type
    const infoRadio = screen.getByTestId("page-type-info");
    await user.click(infoRadio);

    await user.click(screen.getByTestId("submit-add-page"));

    expect(mockPageStore.addPage).toHaveBeenCalledWith(
      expect.objectContaining({
        title: "Info Page",
        type: PageType.INFO,
      }),
      undefined,
    );
  });

  it("displays page tabs with correct titles", () => {
    render(<PageTabs />);

    expect(screen.getByText("Page 1")).toBeInTheDocument();
    expect(screen.getByText("Page 2")).toBeInTheDocument();
  });

  it("shows active page correctly", () => {
    render(<PageTabs />);

    const activeTab = screen.getByTestId("page-tab-page-1");
    expect(activeTab).toHaveClass("active");
  });
});
