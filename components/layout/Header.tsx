// Copied directly from Fillout.com for UI purposes, ignoring any errors here
/* eslint-disable */
// @ts-nocheck

export default function Header() {
  return (
    <div
      className="flex flex-shrink-0 items-center border-b-[0.5px] border-gray-300 bg-gray-50"
      data-cy="editor-nav-bar"
      style={{ height: "64px" }}
    >
      <div className="relative w-full" aria-label="Global">
        <div className="flex w-full items-center justify-between pl-2">
          <div className="largeXl:min-w-[354px] largeXlCustom:min-w-[424px] flex items-center py-[11px] font-medium md:min-w-[310px]">
            <div data-cy="home-button" className="flex">
              <div className="cursor-pointer px-3 py-[9px] text-gray-500 transition hover:text-blue-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                  className="h-4 w-4"
                >
                  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
                </svg>
              </div>
            </div>
            <div className="ml-0 flex items-center">
              <div className="flex items-center gap-2">
                <button className="flex items-center">
                  <div className="z-[14] inline-block">
                    <div
                      data-cy="flow-name-navbar-component"
                      className="max-w-[100px] truncate rounded border-[1px] border-transparent p-1 py-[2px] text-base font-normal text-gray-400 hover:cursor-text hover:border-gray-300 lg:!max-w-[200px]"
                    >
                      My form
                    </div>
                  </div>
                </button>
                <div className="z-[14] inline-block">
                  <button className="h-full rounded-md p-1.5 text-gray-400 transition hover:bg-gray-200 hover:text-gray-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                      className="h-4 w-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex h-[56px] items-center" data-cy="sm-editor-tabs">
            <div className="flex lg:hidden" data-cy="sm-editor-tabs">
              <div className="relative">
                <button
                  className="relative h-[38px] w-full min-w-[150px] cursor-default rounded-md border border-gray-300 bg-white pl-3 text-left shadow-sm hover:bg-gray-50 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none sm:text-sm dark:border-slate-700 dark:bg-white/[0.08] dark:text-slate-300 hover:dark:border-slate-500"
                  type="button"
                  aria-haspopup="listbox"
                  aria-expanded="false"
                >
                  <span className="flex items-center">
                    <span className="block truncate">Edit</span>
                  </span>
                  <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                      className="h-5 w-5 text-gray-400 dark:text-slate-500"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </span>
                </button>
              </div>
            </div>
            <div className="hidden lg:flex">
              <div
                role="radiogroup"
                aria-required="false"
                aria-orientation="horizontal"
                dir="ltr"
                className="preserve-3d relative flex h-10 w-full transform-gpu rounded-xl border border-black/15 bg-gray-200/40 p-[2px] transition-shadow duration-150 ease-in-out"
                tabIndex="0"
                style={{ outline: "none" }}
              >
                <div
                  type="button"
                  role="radio"
                  aria-checked="true"
                  data-state="checked"
                  value="edit"
                  className="relative flex h-full flex-1 cursor-pointer items-center justify-center rounded-lg border-none bg-transparent bg-white px-2.5 text-center font-sans text-sm font-[450] -tracking-[0.01rem] whitespace-nowrap text-black text-gray-500 transition duration-150 ease-in-out select-none hover:text-gray-500 focus-visible:outline-none data-[state=checked]:text-gray-900 [&>svg]:mr-1 [&>svg]:h-4 [&>svg]:w-4"
                  tabIndex="-1"
                >
                  Edit
                </div>
                <div
                  type="button"
                  role="radio"
                  aria-checked="false"
                  data-state="unchecked"
                  value="integrations"
                  className="relative flex h-full flex-1 cursor-pointer items-center justify-center border-none bg-transparent px-2.5 text-center font-sans text-sm font-[450] -tracking-[0.01rem] whitespace-nowrap text-gray-500 transition duration-150 ease-in-out select-none hover:text-gray-500 focus-visible:outline-none data-[state=checked]:text-gray-900 [&>svg]:mr-1 [&>svg]:h-4 [&>svg]:w-4"
                  tabIndex="-1"
                >
                  Integrate
                </div>
                <div
                  type="button"
                  role="radio"
                  aria-checked="false"
                  data-state="unchecked"
                  value="share"
                  className="relative flex h-full flex-1 cursor-pointer items-center justify-center border-none bg-transparent px-2.5 text-center font-sans text-sm font-[450] -tracking-[0.01rem] whitespace-nowrap text-gray-500 transition duration-150 ease-in-out select-none hover:text-gray-500 focus-visible:outline-none data-[state=checked]:text-gray-900 [&>svg]:mr-1 [&>svg]:h-4 [&>svg]:w-4"
                  tabIndex="-1"
                >
                  Share
                </div>
                <div
                  type="button"
                  role="radio"
                  aria-checked="false"
                  data-state="unchecked"
                  value="results"
                  className="relative flex h-full flex-1 cursor-pointer items-center justify-center border-none bg-transparent px-2.5 text-center font-sans text-sm font-[450] -tracking-[0.01rem] whitespace-nowrap text-gray-500 transition duration-150 ease-in-out select-none hover:text-gray-500 focus-visible:outline-none data-[state=checked]:text-gray-900 [&>svg]:mr-1 [&>svg]:h-4 [&>svg]:w-4"
                  tabIndex="-1"
                >
                  Results
                </div>
              </div>
            </div>
          </div>
          <div className="largeXl:min-w-[354px] largeXlCustom:min-w-[424px] flex items-center justify-end py-[11px] pr-7 md:min-w-[310px]">
            <div className="mr-2 flex items-center">
              <div className="z-[14] inline-block">
                <button
                  className="disabled:cursor-disabled mr-2 inline-flex h-9 w-9 items-center justify-center gap-2 rounded-lg px-4 py-2 text-sm font-medium -tracking-[0.01rem] whitespace-nowrap text-gray-500 transition select-none hover:bg-black/5 focus-visible:ring-2 focus-visible:ring-black/30 focus-visible:outline-none disabled:opacity-60 [&_svg]:pointer-events-none [&_svg]:h-5 [&_svg]:w-5 [&_svg]:shrink-0"
                  aria-label="Edit history"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                </button>
              </div>
              <button
                type="button"
                aria-haspopup="dialog"
                aria-expanded="false"
                aria-controls="radix-:r32:"
                data-state="closed"
              >
                <div className="mx-2 hidden items-center lg:flex">
                  <div className="z-20 cursor-pointer">
                    <img
                      referrerPolicy="no-referrer"
                      src="https://lh3.googleusercontent.com/a/ACg8ocLwtTmaHHK0TliDQht3JEv--Sqnp3iSsPgnjyXTVZy3-M_aBpY=s96-c"
                      className="h-8 w-8 flex-shrink-0 rounded-full bg-gray-300"
                      alt="Profile picture"
                    />
                  </div>
                  <div className="hover:bg-primary-lightest hover:text-secondary-light hover:border-primary -ml-[6px] flex h-[34px] w-[34px] cursor-pointer items-center justify-center rounded-full border border-gray-200 bg-white text-gray-400 shadow-sm">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                      className="h-4 w-4"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                </div>
              </button>
              <div
                data-orientation="vertical"
                role="none"
                className="mx-3 hidden h-7 w-[1px] shrink-0 bg-black/10 lg:block"
              ></div>
              <div className="z-[14] inline-block">
                <button
                  className="disabled:cursor-disabled mr-2 inline-flex h-9 w-9 items-center justify-center gap-2 rounded-lg px-4 py-2 text-sm font-medium -tracking-[0.01rem] whitespace-nowrap text-gray-500 transition select-none hover:bg-black/5 focus-visible:ring-2 focus-visible:ring-black/30 focus-visible:outline-none disabled:opacity-60 [&_svg]:pointer-events-none [&_svg]:h-5 [&_svg]:w-5 [&_svg]:shrink-0"
                  aria-label="Settings"
                  data-cy="form-settings-button"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                    ></path>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    ></path>
                  </svg>
                </button>
              </div>
              <div data-cy="preview-button">
                <button className="disabled:cursor-disabled inline-flex h-9 items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium -tracking-[0.01rem] whitespace-nowrap text-[#1a1a1a] shadow-sm transition select-none hover:bg-gray-50 focus-visible:ring-2 focus-visible:ring-black/30 focus-visible:outline-none disabled:opacity-60 [&_svg]:pointer-events-none [&_svg]:h-4 [&_svg]:w-4 [&_svg]:shrink-0">
                  Preview
                </button>
              </div>
            </div>
            <button
              className="disabled:cursor-disabled inline-flex h-9 min-w-[110px] items-center justify-center gap-2 rounded-lg bg-[#1F2937] px-4 py-2 text-sm font-medium -tracking-[0.01rem] whitespace-nowrap text-white shadow-sm transition select-none hover:opacity-80 focus-visible:ring-2 focus-visible:ring-[#1F2937]/50 focus-visible:outline-none disabled:opacity-60 [&_svg]:pointer-events-none [&_svg]:h-4 [&_svg]:w-4 [&_svg]:shrink-0"
              type="button"
              aria-haspopup="dialog"
              aria-expanded="false"
              aria-controls="radix-:r33:"
              data-state="closed"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                  clipRule="evenodd"
                ></path>
              </svg>
              Publish
            </button>
            <canvas
              style={{
                zIndex: 1000,
                position: "fixed",
                pointerEvents: "none",
                width: "100%",
                height: "100%",
                top: "0px",
                left: "0px",
              }}
            ></canvas>
          </div>
        </div>
      </div>
    </div>
  );
}
