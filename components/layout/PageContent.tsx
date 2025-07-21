"use client";

import { usePageStore } from "@/store/pageStore";

interface PageContentProps {
  id: string;
}

export default function PageContent({ id }: PageContentProps) {
  const { findPageById, isLoading } = usePageStore();
  const page = findPageById(id);

  if (isLoading) {
    return (
      <div className="flex h-[100%] flex-1 items-center justify-center bg-[#ecfaf0] text-white">
        <div className="text-center">
          <div className="mb-4 h-8 w-8 animate-spin rounded-full border-4 border-gray-600 border-t-white"></div>
          <p className="text-gray-400">Loading...</p>
        </div>
      </div>
    );
  }

  if (!page) {
    return (
      <div className="flex h-[100%] flex-1 items-center justify-center bg-[#ecfaf0] text-black">
        <div className="text-center">
          <h2 className="mb-4 text-2xl font-bold">Page Not Found</h2>
          <p className="text-gray-400">The page "{id}" does not exist.</p>
        </div>
      </div>
    );
  }

  // Copied from Fillout.com to make the UI nicer
  return (
    <div
      className="flex h-full w-full flex-col items-center bg-[#ecfaf0] sm:pb-4"
      id="form-step-widgets-container"
    >
      <div
        id="nav-bar"
        className="z-[10] flex w-full items-center lg:sticky lg:top-0"
      >
        <div className="h-42px z-10 ml-3 flex w-[65px] justify-start"></div>
        <div
          className="flex h-14 w-full items-center justify-end px-4 py-2"
          style={{ direction: "ltr" }}
        ></div>
      </div>
      <div className="flex w-full justify-center pb-6 sm:pb-20">
        <div
          id="question-container"
          className="fillout-field-container relative z-10 mt-0 flex w-full flex-col px-2 py-4 sm:rounded-lg sm:ring-2"
          style={{
            background: "rgb(251, 253, 252)",
            maxWidth: "660px",
          }}
        >
          <div
            id="question-alignment-container"
            className="mt-0 flex h-full w-full flex-col"
          >
            <div>
              <div
                className="mt-5 mb-10 flex h-full w-full flex-col items-center justify-center text-slate-400"
                style={{
                  color: "rgb(151, 174, 176)",
                  fontFamily:
                    '__inter_0b7090, __inter_Fallback_0b7090, "Helvetica Neue", Helvetica, Arial, sans-serif',
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                  className="mb-3 h-6 w-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <h3
                  className="font-normal"
                  style={{ color: "rgb(151, 174, 176)" }}
                >
                  <strong>Drag and drop</strong> questions from the left-hand
                  side to build your form.
                </h3>
              </div>
            </div>
            <div className="relative flex w-full">
              <div
                id="DROPABOVEROW-0"
                className="absolute -top-1 right-0 left-0 z-1 h-1"
                style={{ background: "transparent" }}
              >
                <div className="! flex h-full w-full flex-grow-0"></div>
              </div>
              <div className="w-full min-w-0">
                <div className="h-10"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
