export default function Sidebar() {
  return (
    <div className="flex overflow-hidden flex-shrink-0 duration-200 bg-gray-50 border-x-[0.5px] border-gray-300 w-[226px] lg:w-[300px]">
      <div className="flex flex-shrink-0 w-[226px] lg:w-[300px]">
        <div className="w-full flex flex-col justify-between h-full max-w-[226px] min-w-[180px] lg:max-w-[300px] lg:min-w-[270px]">
          <div className="flex flex-col pt-4 h-full justify-start overflow-auto">
            <div className="flex items-center px-3 pb-[10px] border-b border-transparent transition duration-200 bg-gray-50 z-10">
              <div className="w-full border border-[rgba(0,0,0,0.11)] focus-within:border-blue-400 shadow-sm bg-transparent transition file:border-0 file:bg-transparent file:font-medium file:text-foreground placeholder:text-muted-foreground focus-within:outline-none focus-within:ring-2 focus-within:ring-blue-200 disabled:cursor-not-allowed disabled:opacity-50 rounded-lg flex items-center h-min relative">
                <div className="absolute left-2 text-gray-500 [&>svg]:h-4 [&>svg]:w-4 h-4 w-4 flex items-center justify-center pointer-events-none [&:has(button)]:pointer-events-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="h-4 w-4">
                    <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <input className="border-0 focus:outline-none focus:ring-0 disabled:opacity-50 w-full rounded-lg h-9 px-3 py-2 text-sm pl-7" placeholder="Search fields" defaultValue="" />
              </div>
            </div>
            <div dir="ltr" className="relative overflow-hidden mr-px" id="widgets" style={{position: 'relative'}}>
              <div className="h-full w-full rounded-[inherit]" style={{overflow: 'hidden scroll'}}>
                <div style={{minWidth: '100%', display: 'table'}}>
                  <div className="-mt-4"></div>
                  <div className="px-4">
                    <div>
                      <div className="text-sm text-gray-400 font-medium mt-6">Frequently used</div>
                      <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 mt-3 gap-y-4">
                        <button type="button" className="bg-white px-[3px] flex flex-col pt-3 pb-[6px] items-center rounded-md cursor-pointer border border-white shadow hover:shadow-md hover:shadow-gray-400/50 w-full">
                          <div className="p-1 rounded bg-gray-50 border-[0.5px]" style={{color: 'rgb(34, 197, 94)', background: 'rgb(240, 253, 244)', borderColor: 'rgb(187, 247, 208)'}}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="h-5 w-5">
                              <path fillRule="evenodd" d="M3 7a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 13a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path>
                            </svg>
                          </div>
                          <div className="text-gray-700 text-xs font-medium flex justify-center mt-2 text-center leading-3 h-6 items-center">Short answer</div>
                        </button>
                        <button type="button" className="bg-white px-[3px] flex flex-col pt-3 pb-[6px] items-center rounded-md cursor-pointer border border-white shadow hover:shadow-md hover:shadow-gray-400/50 w-full">
                          <div className="p-1 rounded bg-gray-50 border-[0.5px]" style={{color: 'rgb(34, 197, 94)', background: 'rgb(240, 253, 244)', borderColor: 'rgb(187, 247, 208)'}}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="h-5 w-5">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd"></path>
                            </svg>
                          </div>
                          <div className="text-gray-700 text-xs font-medium flex justify-center mt-2 text-center leading-3 h-6 items-center">Multiple choice</div>
                        </button>
                        <button type="button" className="bg-white px-[3px] flex flex-col pt-3 pb-[6px] items-center rounded-md cursor-pointer border border-white shadow hover:shadow-md hover:shadow-gray-400/50 w-full">
                          <div className="p-1 rounded bg-gray-50 border-[0.5px]" style={{color: 'rgb(34, 197, 94)', background: 'rgb(240, 253, 244)', borderColor: 'rgb(187, 247, 208)'}}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="h-5 w-5">
                              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                            </svg>
                          </div>
                          <div className="text-gray-700 text-xs font-medium flex justify-center mt-2 text-center leading-3 h-6 items-center">Email input</div>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="px-4">
                    <div>
                      <div className="text-sm text-gray-400 font-medium mt-6">Display text</div>
                      <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 mt-3 gap-y-4">
                        <button type="button" className="bg-white px-[3px] flex flex-col pt-3 pb-[6px] items-center rounded-md cursor-pointer border border-white shadow hover:shadow-md hover:shadow-gray-400/50 w-full">
                          <div className="p-1 rounded bg-gray-50 border-[0.5px]" style={{color: 'rgb(100, 116, 139)', background: 'rgb(248, 250, 252)', borderColor: 'rgb(226, 232, 240)'}}>
                            <div className="font-bold">H<span className="text-xs">1</span></div>
                          </div>
                          <div className="text-gray-700 text-xs font-medium flex justify-center mt-2 text-center leading-3 h-6 items-center">Heading</div>
                        </button>
                        <button type="button" className="bg-white px-[3px] flex flex-col pt-3 pb-[6px] items-center rounded-md cursor-pointer border border-white shadow hover:shadow-md hover:shadow-gray-400/50 w-full">
                          <div className="p-1 rounded bg-gray-50 border-[0.5px]" style={{color: 'rgb(100, 116, 139)', background: 'rgb(248, 250, 252)', borderColor: 'rgb(226, 232, 240)'}}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="h-5 w-5">
                              <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd"></path>
                            </svg>
                          </div>
                          <div className="text-gray-700 text-xs font-medium flex justify-center mt-2 text-center leading-3 h-6 items-center">Paragraph</div>
                        </button>
                        <button type="button" className="bg-white px-[3px] flex flex-col pt-3 pb-[6px] items-center rounded-md cursor-pointer border border-white shadow hover:shadow-md hover:shadow-gray-400/50 w-full">
                          <div className="p-1 rounded bg-gray-50 border-[0.5px]" style={{color: 'rgb(100, 116, 139)', background: 'rgb(248, 250, 252)', borderColor: 'rgb(226, 232, 240)'}}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="h-5 w-5">
                              <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"></path>
                            </svg>
                          </div>
                          <div className="text-gray-700 text-xs font-medium flex justify-center mt-2 text-center leading-3 h-6 items-center">Banner</div>
                        </button>
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-400 font-medium mt-6">Choices</div>
                      <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 mt-3 gap-y-4">
                        <button type="button" className="bg-white px-[3px] flex flex-col pt-3 pb-[6px] items-center rounded-md cursor-pointer border border-white shadow hover:shadow-md hover:shadow-gray-400/50 w-full">
                          <div className="p-1 rounded bg-gray-50 border-[0.5px]" style={{color: 'rgb(245, 158, 11)', background: 'rgb(255, 251, 235)', borderColor: 'rgb(253, 230, 138)'}}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="h-5 w-5">
                              <path fillRule="evenodd" d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd"></path>
                            </svg>
                          </div>
                          <div className="text-gray-700 text-xs font-medium flex justify-center mt-2 text-center leading-3 h-6 items-center">Dropdown</div>
                        </button>
                        <button type="button" className="bg-white px-[3px] flex flex-col pt-3 pb-[6px] items-center rounded-md cursor-pointer border border-white shadow hover:shadow-md hover:shadow-gray-400/50 w-full">
                          <div className="p-1 rounded bg-gray-50 border-[0.5px]" style={{color: 'rgb(245, 158, 11)', background: 'rgb(255, 251, 235)', borderColor: 'rgb(253, 230, 138)'}}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="h-5 w-5">
                              <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd"></path>
                            </svg>
                          </div>
                          <div className="text-gray-700 text-xs font-medium flex justify-center mt-2 text-center leading-3 h-6 items-center">Picture choice</div>
                        </button>
                        <button type="button" className="bg-white px-[3px] flex flex-col pt-3 pb-[6px] items-center rounded-md cursor-pointer border border-white shadow hover:shadow-md hover:shadow-gray-400/50 w-full">
                          <div className="p-1 rounded bg-gray-50 border-[0.5px]" style={{color: 'rgb(245, 158, 11)', background: 'rgb(255, 251, 235)', borderColor: 'rgb(253, 230, 138)'}}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="h-5 w-5">
                              <path fillRule="evenodd" d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd"></path>
                            </svg>
                          </div>
                          <div className="text-gray-700 text-xs font-medium flex justify-center mt-2 text-center leading-3 h-6 items-center">Multiselect</div>
                        </button>
                        <button type="button" className="bg-white px-[3px] flex flex-col pt-3 pb-[6px] items-center rounded-md cursor-pointer border border-white shadow hover:shadow-md hover:shadow-gray-400/50 w-full">
                          <div className="p-1 rounded bg-gray-50 border-[0.5px]" style={{color: 'rgb(245, 158, 11)', background: 'rgb(255, 251, 235)', borderColor: 'rgb(253, 230, 138)'}}>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <rect x="1" y="5" width="18" height="10" rx="5" stroke="currentColor" strokeWidth="2"></rect>
                              <circle cx="6" cy="10" r="3" fill="currentColor"></circle>
                            </svg>
                          </div>
                          <div className="text-gray-700 text-xs font-medium flex justify-center mt-2 text-center leading-3 h-6 items-center">Switch</div>
                        </button>
                        <button type="button" className="bg-white px-[3px] flex flex-col pt-3 pb-[6px] items-center rounded-md cursor-pointer border border-white shadow hover:shadow-md hover:shadow-gray-400/50 w-full">
                          <div className="p-1 rounded bg-gray-50 border-[0.5px]" style={{color: 'rgb(245, 158, 11)', background: 'rgb(255, 251, 235)', borderColor: 'rgb(253, 230, 138)'}}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="h-5 w-5">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd"></path>
                            </svg>
                          </div>
                          <div className="text-gray-700 text-xs font-medium flex justify-center mt-2 text-center leading-3 h-6 items-center">Multiple choice</div>
                        </button>
                        <button type="button" className="bg-white px-[3px] flex flex-col pt-3 pb-[6px] items-center rounded-md cursor-pointer border border-white shadow hover:shadow-md hover:shadow-gray-400/50 w-full">
                          <div className="p-1 rounded bg-gray-50 border-[0.5px]" style={{color: 'rgb(245, 158, 11)', background: 'rgb(255, 251, 235)', borderColor: 'rgb(253, 230, 138)'}}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="h-5 w-5">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                            </svg>
                          </div>
                          <div className="text-gray-700 text-xs font-medium flex justify-center mt-2 text-center leading-3 h-6 items-center">Checkbox</div>
                        </button>
                        <button type="button" className="bg-white px-[3px] flex flex-col pt-3 pb-[6px] items-center rounded-md cursor-pointer border border-white shadow hover:shadow-md hover:shadow-gray-400/50 w-full">
                          <div className="p-1 rounded bg-gray-50 border-[0.5px]" style={{color: 'rgb(245, 158, 11)', background: 'rgb(255, 251, 235)', borderColor: 'rgb(253, 230, 138)'}}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="h-5 w-5">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd"></path>
                            </svg>
                          </div>
                          <div className="text-gray-700 text-xs font-medium flex justify-center mt-2 text-center leading-3 h-6 items-center">Checkboxes</div>
                        </button>
                        <button type="button" className="bg-white px-[3px] flex flex-col pt-3 pb-[6px] items-center rounded-md cursor-pointer border border-white shadow hover:shadow-md hover:shadow-gray-400/50 w-full">
                          <div className="p-1 rounded bg-gray-50 border-[0.5px]" style={{color: 'rgb(245, 158, 11)', background: 'rgb(255, 251, 235)', borderColor: 'rgb(253, 230, 138)'}}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="h-5 w-5">
                              <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
                            </svg>
                          </div>
                          <div className="text-gray-700 text-xs font-medium flex justify-center mt-2 text-center leading-3 h-6 items-center">Choice matrix</div>
                        </button>
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-400 font-medium mt-6">Time</div>
                      <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 mt-3 gap-y-4">
                        <button type="button" className="bg-white px-[3px] flex flex-col pt-3 pb-[6px] items-center rounded-md cursor-pointer border border-white shadow hover:shadow-md hover:shadow-gray-400/50 w-full">
                          <div className="p-1 rounded bg-gray-50 border-[0.5px]" style={{color: 'rgb(168, 85, 247)', background: 'rgb(250, 245, 255)', borderColor: 'rgb(233, 213, 255)'}}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="h-5 w-5">
                              <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path>
                            </svg>
                          </div>
                          <div className="text-gray-700 text-xs font-medium flex justify-center mt-2 text-center leading-3 h-6 items-center">Date picker</div>
                        </button>
                        <button type="button" className="bg-white px-[3px] flex flex-col pt-3 pb-[6px] items-center rounded-md cursor-pointer border border-white shadow hover:shadow-md hover:shadow-gray-400/50 w-full">
                          <div className="p-1 rounded bg-gray-50 border-[0.5px]" style={{color: 'rgb(168, 85, 247)', background: 'rgb(250, 245, 255)', borderColor: 'rgb(233, 213, 255)'}}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="h-5 w-5">
                              <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path>
                            </svg>
                          </div>
                          <div className="text-gray-700 text-xs font-medium flex justify-center mt-2 text-center leading-3 h-6 items-center">Date time picker</div>
                        </button>
                        <button type="button" className="bg-white px-[3px] flex flex-col pt-3 pb-[6px] items-center rounded-md cursor-pointer border border-white shadow hover:shadow-md hover:shadow-gray-400/50 w-full">
                          <div className="p-1 rounded bg-gray-50 border-[0.5px]" style={{color: 'rgb(168, 85, 247)', background: 'rgb(250, 245, 255)', borderColor: 'rgb(233, 213, 255)'}}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="h-5 w-5">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"></path>
                            </svg>
                          </div>
                          <div className="text-gray-700 text-xs font-medium flex justify-center mt-2 text-center leading-3 h-6 items-center">Time picker</div>
                        </button>
                        <button type="button" className="bg-white px-[3px] flex flex-col pt-3 pb-[6px] items-center rounded-md cursor-pointer border border-white shadow hover:shadow-md hover:shadow-gray-400/50 w-full">
                          <div className="p-1 rounded bg-gray-50 border-[0.5px]" style={{color: 'rgb(168, 85, 247)', background: 'rgb(250, 245, 255)', borderColor: 'rgb(233, 213, 255)'}}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="h-5 w-5">
                              <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path>
                            </svg>
                          </div>
                          <div className="text-gray-700 text-xs font-medium flex justify-center mt-2 text-center leading-3 h-6 items-center">Date range</div>
                        </button>
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-400 font-medium mt-6">Rating & Ranking</div>
                      <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 mt-3 gap-y-4">
                        <button type="button" className="bg-white px-[3px] flex flex-col pt-3 pb-[6px] items-center rounded-md cursor-pointer border border-white shadow hover:shadow-md hover:shadow-gray-400/50 w-full">
                          <div className="p-1 rounded bg-gray-50 border-[0.5px]" style={{color: 'rgb(239, 68, 68)', background: 'rgb(254, 242, 242)', borderColor: 'rgb(254, 202, 202)'}}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="h-5 w-5">
                              <path d="M5 12a1 1 0 102 0V6.414l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L5 6.414V12zM15 8a1 1 0 10-2 0v5.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L15 13.586V8z"></path>
                            </svg>
                          </div>
                          <div className="text-gray-700 text-xs font-medium flex justify-center mt-2 text-center leading-3 h-6 items-center">Ranking</div>
                        </button>
                        <button type="button" className="bg-white px-[3px] flex flex-col pt-3 pb-[6px] items-center rounded-md cursor-pointer border border-white shadow hover:shadow-md hover:shadow-gray-400/50 w-full">
                          <div className="p-1 rounded bg-gray-50 border-[0.5px]" style={{color: 'rgb(239, 68, 68)', background: 'rgb(254, 242, 242)', borderColor: 'rgb(254, 202, 202)'}}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="h-5 w-5">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                            </svg>
                          </div>
                          <div className="text-gray-700 text-xs font-medium flex justify-center mt-2 text-center leading-3 h-6 items-center">Star Rating</div>
                        </button>
                        <button type="button" className="bg-white px-[3px] flex flex-col pt-3 pb-[6px] items-center rounded-md cursor-pointer border border-white shadow hover:shadow-md hover:shadow-gray-400/50 w-full">
                          <div className="p-1 rounded bg-gray-50 border-[0.5px]" style={{color: 'rgb(239, 68, 68)', background: 'rgb(254, 242, 242)', borderColor: 'rgb(254, 202, 202)'}}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="h-5 w-5">
                              <path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z"></path>
                            </svg>
                          </div>
                          <div className="text-gray-700 text-xs font-medium flex justify-center mt-2 text-center leading-3 h-6 items-center">Slider</div>
                        </button>
                        <button type="button" className="bg-white px-[3px] flex flex-col pt-3 pb-[6px] items-center rounded-md cursor-pointer border border-white shadow hover:shadow-md hover:shadow-gray-400/50 w-full">
                          <div className="p-1 rounded bg-gray-50 border-[0.5px]" style={{color: 'rgb(239, 68, 68)', background: 'rgb(254, 242, 242)', borderColor: 'rgb(254, 202, 202)'}}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="h-5 w-5">
                              <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"></path>
                            </svg>
                          </div>
                          <div className="text-gray-700 text-xs font-medium flex justify-center mt-2 text-center leading-3 h-6 items-center">Opinion scale</div>
                        </button>
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-400 font-medium mt-6">Text</div>
                      <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 mt-3 gap-y-4">
                        <button type="button" className="bg-white px-[3px] flex flex-col pt-3 pb-[6px] items-center rounded-md cursor-pointer border border-white shadow hover:shadow-md hover:shadow-gray-400/50 w-full">
                          <div className="p-1 rounded bg-gray-50 border-[0.5px]" style={{color: 'rgb(34, 197, 94)', background: 'rgb(240, 253, 244)', borderColor: 'rgb(187, 247, 208)'}}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="h-5 w-5">
                              <path fillRule="evenodd" d="M3 7a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 13a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path>
                            </svg>
                          </div>
                          <div className="text-gray-700 text-xs font-medium flex justify-center mt-2 text-center leading-3 h-6 items-center">Short answer</div>
                        </button>
                        <button type="button" className="bg-white px-[3px] flex flex-col pt-3 pb-[6px] items-center rounded-md cursor-pointer border border-white shadow hover:shadow-md hover:shadow-gray-400/50 w-full">
                          <div className="p-1 rounded bg-gray-50 border-[0.5px]" style={{color: 'rgb(34, 197, 94)', background: 'rgb(240, 253, 244)', borderColor: 'rgb(187, 247, 208)'}}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="h-5 w-5">
                              <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path>
                            </svg>
                          </div>
                          <div className="text-gray-700 text-xs font-medium flex justify-center mt-2 text-center leading-3 h-6 items-center">Long answer</div>
                        </button>
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-400 font-medium mt-6">Contact Info</div>
                      <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 mt-3 gap-y-4">
                        <button type="button" className="bg-white px-[3px] flex flex-col pt-3 pb-[6px] items-center rounded-md cursor-pointer border border-white shadow hover:shadow-md hover:shadow-gray-400/50 w-full">
                          <div className="p-1 rounded bg-gray-50 border-[0.5px]" style={{color: 'rgb(20, 184, 166)', background: 'rgb(240, 253, 250)', borderColor: 'rgb(153, 246, 228)'}}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="h-5 w-5">
                              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                            </svg>
                          </div>
                          <div className="text-gray-700 text-xs font-medium flex justify-center mt-2 text-center leading-3 h-6 items-center">Email input</div>
                        </button>
                        <button type="button" className="bg-white px-[3px] flex flex-col pt-3 pb-[6px] items-center rounded-md cursor-pointer border border-white shadow hover:shadow-md hover:shadow-gray-400/50 w-full">
                          <div className="p-1 rounded bg-gray-50 border-[0.5px]" style={{color: 'rgb(20, 184, 166)', background: 'rgb(240, 253, 250)', borderColor: 'rgb(153, 246, 228)'}}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="h-5 w-5">
                              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                            </svg>
                          </div>
                          <div className="text-gray-700 text-xs font-medium flex justify-center mt-2 text-center leading-3 h-6 items-center">Phone number</div>
                        </button>
                        <button type="button" className="bg-white px-[3px] flex flex-col pt-3 pb-[6px] items-center rounded-md cursor-pointer border border-white shadow hover:shadow-md hover:shadow-gray-400/50 w-full">
                          <div className="p-1 rounded bg-gray-50 border-[0.5px]" style={{color: 'rgb(20, 184, 166)', background: 'rgb(240, 253, 250)', borderColor: 'rgb(153, 246, 228)'}}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="h-5 w-5">
                              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                            </svg>
                          </div>
                          <div className="text-gray-700 text-xs font-medium flex justify-center mt-2 text-center leading-3 h-6 items-center">Address</div>
                        </button>
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-400 font-medium mt-6">Number</div>
                      <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 mt-3 gap-y-4">
                        <button type="button" className="bg-white px-[3px] flex flex-col pt-3 pb-[6px] items-center rounded-md cursor-pointer border border-white shadow hover:shadow-md hover:shadow-gray-400/50 w-full">
                          <div className="p-1 rounded bg-gray-50 border-[0.5px]" style={{color: 'rgb(59, 130, 246)', background: 'rgb(239, 246, 255)', borderColor: 'rgb(191, 219, 254)'}}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="h-5 w-5">
                              <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H6zm1 2a1 1 0 000 2h6a1 1 0 100-2H7zm6 7a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-3 3a1 1 0 100 2h.01a1 1 0 100-2H10zm-4 1a1 1 0 011-1h.01a1 1 0 110 2H7a1 1 0 01-1-1zm1-4a1 1 0 100 2h.01a1 1 0 100-2H7zm2 1a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1zm4-4a1 1 0 100 2h.01a1 1 0 100-2H13zM9 9a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1zM7 8a1 1 0 000 2h.01a1 1 0 000-2H7z" clipRule="evenodd"></path>
                            </svg>
                          </div>
                          <div className="text-gray-700 text-xs font-medium flex justify-center mt-2 text-center leading-3 h-6 items-center">Number</div>
                        </button>
                        <button type="button" className="bg-white px-[3px] flex flex-col pt-3 pb-[6px] items-center rounded-md cursor-pointer border border-white shadow hover:shadow-md hover:shadow-gray-400/50 w-full">
                          <div className="p-1 rounded bg-gray-50 border-[0.5px]" style={{color: 'rgb(59, 130, 246)', background: 'rgb(239, 246, 255)', borderColor: 'rgb(191, 219, 254)'}}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="h-5 w-5">
                              <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"></path>
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd"></path>
                            </svg>
                          </div>
                          <div className="text-gray-700 text-xs font-medium flex justify-center mt-2 text-center leading-3 h-6 items-center">Currency</div>
                        </button>
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-400 font-medium mt-6">Miscellaneous</div>
                      <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 mt-3 gap-y-4">
                        <button type="button" className="bg-white px-[3px] flex flex-col pt-3 pb-[6px] items-center rounded-md cursor-pointer border border-white shadow hover:shadow-md hover:shadow-gray-400/50 w-full">
                          <div className="p-1 rounded bg-gray-50 border-[0.5px]" style={{color: 'rgb(6, 182, 212)', background: 'rgb(236, 254, 255)', borderColor: 'rgb(165, 243, 252)'}}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="h-5 w-5">
                              <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd"></path>
                            </svg>
                          </div>
                          <div className="text-gray-700 text-xs font-medium flex justify-center mt-2 text-center leading-3 h-6 items-center">URL input</div>
                        </button>
                        <button type="button" className="bg-white px-[3px] flex flex-col pt-3 pb-[6px] items-center rounded-md cursor-pointer border border-white shadow hover:shadow-md hover:shadow-gray-400/50 w-full">
                          <div className="p-1 rounded bg-gray-50 border-[0.5px]" style={{color: 'rgb(6, 182, 212)', background: 'rgb(236, 254, 255)', borderColor: 'rgb(165, 243, 252)'}}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="h-5 w-5">
                              <path fillRule="evenodd" d="M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zm1 14a1 1 0 100-2 1 1 0 000 2zm5-1.757l4.9-4.9a2 2 0 000-2.828L13.485 5.1a2 2 0 00-2.828 0L10 5.757v8.486zM16 18H9.071l6-6H16a2 2 0 012 2v2a2 2 0 01-2 2z" clipRule="evenodd"></path>
                            </svg>
                          </div>
                          <div className="text-gray-700 text-xs font-medium flex justify-center mt-2 text-center leading-3 h-6 items-center">Color picker</div>
                        </button>
                        <button type="button" className="bg-white px-[3px] flex flex-col pt-3 pb-[6px] items-center rounded-md cursor-pointer border border-white shadow hover:shadow-md hover:shadow-gray-400/50 w-full">
                          <div className="p-1 rounded bg-gray-50 border-[0.5px]" style={{color: 'rgb(6, 182, 212)', background: 'rgb(236, 254, 255)', borderColor: 'rgb(165, 243, 252)'}}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="h-5 w-5">
                              <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd"></path>
                            </svg>
                          </div>
                          <div className="text-gray-700 text-xs font-medium flex justify-center mt-2 text-center leading-3 h-6 items-center">Password</div>
                        </button>
                        <button type="button" className="bg-white px-[3px] flex flex-col pt-3 pb-[6px] items-center rounded-md cursor-pointer border border-white shadow hover:shadow-md hover:shadow-gray-400/50 w-full">
                          <div className="p-1 rounded bg-gray-50 border-[0.5px]" style={{color: 'rgb(6, 182, 212)', background: 'rgb(236, 254, 255)', borderColor: 'rgb(165, 243, 252)'}}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="h-5 w-5">
                              <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                            </svg>
                          </div>
                          <div className="text-gray-700 text-xs font-medium flex justify-center mt-2 text-center leading-3 h-6 items-center">File uploader</div>
                        </button>
                        <button type="button" className="bg-white px-[3px] flex flex-col pt-3 pb-[6px] items-center rounded-md cursor-pointer border border-white shadow hover:shadow-md hover:shadow-gray-400/50 w-full">
                          <div className="p-1 rounded bg-gray-50 border-[0.5px]" style={{color: 'rgb(6, 182, 212)', background: 'rgb(236, 254, 255)', borderColor: 'rgb(165, 243, 252)'}}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="h-5 w-5">
                              <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"></path>
                              <path fillRule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clipRule="evenodd"></path>
                            </svg>
                          </div>
                          <div className="text-gray-700 text-xs font-medium flex justify-center mt-2 text-center leading-3 h-6 items-center">Signature</div>
                        </button>
                        <button type="button" className="bg-white px-[3px] flex flex-col pt-3 pb-[6px] items-center rounded-md cursor-pointer border border-white shadow hover:shadow-md hover:shadow-gray-400/50 w-full">
                          <div className="p-1 rounded bg-gray-50 border-[0.5px]" style={{color: 'rgb(6, 182, 212)', background: 'rgb(236, 254, 255)', borderColor: 'rgb(165, 243, 252)'}}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="h-5 w-5">
                              <path fillRule="evenodd" d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z" clipRule="evenodd"></path>
                            </svg>
                          </div>
                          <div className="text-gray-700 text-xs font-medium flex justify-center mt-2 text-center leading-3 h-6 items-center">Voice recording</div>
                        </button>
                        <button type="button" className="bg-white px-[3px] flex flex-col pt-3 pb-[6px] items-center rounded-md cursor-pointer border border-white shadow hover:shadow-md hover:shadow-gray-400/50 w-full">
                          <div className="p-1 rounded bg-gray-50 border-[0.5px]" style={{color: 'rgb(6, 182, 212)', background: 'rgb(236, 254, 255)', borderColor: 'rgb(165, 243, 252)'}}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="h-5 w-5">
                              <path d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2h-1.528A6 6 0 004 9.528V4z"></path>
                              <path fillRule="evenodd" d="M8 10a4 4 0 00-3.446 6.032l-1.261 1.26a1 1 0 101.414 1.415l1.261-1.261A4 4 0 108 10zm-2 4a2 2 0 114 0 2 2 0 01-4 0z" clipRule="evenodd"></path>
                            </svg>
                          </div>
                          <div className="text-gray-700 text-xs font-medium flex justify-center mt-2 text-center leading-3 h-6 items-center">Submission picker</div>
                        </button>
                        <button type="button" className="bg-white px-[3px] flex flex-col pt-3 pb-[6px] items-center rounded-md cursor-pointer border border-white shadow hover:shadow-md hover:shadow-gray-400/50 w-full">
                          <div className="p-1 rounded bg-gray-50 border-[0.5px]" style={{color: 'rgb(6, 182, 212)', background: 'rgb(236, 254, 255)', borderColor: 'rgb(165, 243, 252)'}}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="h-5 w-5">
                              <path fillRule="evenodd" d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z" clipRule="evenodd"></path>
                            </svg>
                          </div>
                          <div className="text-gray-700 text-xs font-medium flex justify-center mt-2 text-center leading-3 h-6 items-center">Subform</div>
                        </button>
                        <button type="button" className="bg-white px-[3px] flex flex-col pt-3 pb-[6px] items-center rounded-md cursor-pointer border border-white shadow hover:shadow-md hover:shadow-gray-400/50 w-full">
                          <div className="p-1 rounded bg-gray-50 border-[0.5px]" style={{color: 'rgb(6, 182, 212)', background: 'rgb(236, 254, 255)', borderColor: 'rgb(165, 243, 252)'}}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="h-5 w-5">
                              <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                            </svg>
                          </div>
                          <div className="text-gray-700 text-xs font-medium flex justify-center mt-2 text-center leading-3 h-6 items-center">Captcha</div>
                        </button>
                        <button type="button" className="bg-white px-[3px] flex flex-col pt-3 pb-[6px] items-center rounded-md cursor-pointer border border-white shadow hover:shadow-md hover:shadow-gray-400/50 w-full">
                          <div className="p-1 rounded bg-gray-50 border-[0.5px]" style={{color: 'rgb(6, 182, 212)', background: 'rgb(236, 254, 255)', borderColor: 'rgb(165, 243, 252)'}}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="h-5 w-5">
                              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                            </svg>
                          </div>
                          <div className="text-gray-700 text-xs font-medium flex justify-center mt-2 text-center leading-3 h-6 items-center">Location coordinates</div>
                        </button>
                        <button type="button" className="bg-white px-[3px] flex flex-col pt-3 pb-[6px] items-center rounded-md cursor-pointer border border-white shadow hover:shadow-md hover:shadow-gray-400/50 w-full">
                          <div className="p-1 rounded bg-gray-50 border-[0.5px]" style={{color: 'rgb(6, 182, 212)', background: 'rgb(236, 254, 255)', borderColor: 'rgb(165, 243, 252)'}}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="h-5 w-5">
                              <path fillRule="evenodd" d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z" clipRule="evenodd"></path>
                            </svg>
                          </div>
                          <div className="text-gray-700 text-xs font-medium flex justify-center mt-2 text-center leading-3 h-6 items-center">Table</div>
                        </button>
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-400 font-medium mt-6">Navigation & Layout</div>
                      <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 mt-3 gap-y-4">
                        <button type="button" className="bg-white px-[3px] flex flex-col pt-3 pb-[6px] items-center rounded-md cursor-pointer border border-white shadow hover:shadow-md hover:shadow-gray-400/50 w-full">
                          <div className="p-1 rounded bg-gray-50 border-[0.5px]" style={{color: 'rgb(236, 72, 153)', background: 'rgb(253, 242, 248)', borderColor: 'rgb(251, 207, 232)'}}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="h-5 w-5">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z" clipRule="evenodd"></path>
                            </svg>
                          </div>
                          <div className="text-gray-700 text-xs font-medium flex justify-center mt-2 text-center leading-3 h-6 items-center">Section collapse</div>
                        </button>
                        <button type="button" className="bg-white px-[3px] flex flex-col pt-3 pb-[6px] items-center rounded-md cursor-pointer border border-white shadow hover:shadow-md hover:shadow-gray-400/50 w-full">
                          <div className="p-1 rounded bg-gray-50 border-[0.5px]" style={{color: 'rgb(236, 72, 153)', background: 'rgb(253, 242, 248)', borderColor: 'rgb(251, 207, 232)'}}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="h-5 w-5">
                              <path fillRule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path>
                            </svg>
                          </div>
                          <div className="text-gray-700 text-xs font-medium flex justify-center mt-2 text-center leading-3 h-6 items-center">Divider</div>
                        </button>
                        <button type="button" className="bg-white px-[3px] flex flex-col pt-3 pb-[6px] items-center rounded-md cursor-pointer border border-white shadow hover:shadow-md hover:shadow-gray-400/50 w-full">
                          <div className="p-1 rounded bg-gray-50 border-[0.5px]" style={{color: 'rgb(236, 72, 153)', background: 'rgb(253, 242, 248)', borderColor: 'rgb(251, 207, 232)'}}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="h-5 w-5">
                              <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                            </svg>
                          </div>
                          <div className="text-gray-700 text-xs font-medium flex justify-center mt-2 text-center leading-3 h-6 items-center">HTML</div>
                        </button>
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-400 font-medium mt-6">Media</div>
                      <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 mt-3 gap-y-4">
                        <button type="button" className="bg-white px-[3px] flex flex-col pt-3 pb-[6px] items-center rounded-md cursor-pointer border border-white shadow hover:shadow-md hover:shadow-gray-400/50 w-full">
                          <div className="p-1 rounded bg-gray-50 border-[0.5px]" style={{color: 'rgb(139, 92, 246)', background: 'rgb(245, 243, 255)', borderColor: 'rgb(221, 214, 254)'}}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="h-5 w-5">
                              <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd"></path>
                            </svg>
                          </div>
                          <div className="text-gray-700 text-xs font-medium flex justify-center mt-2 text-center leading-3 h-6 items-center">Image</div>
                        </button>
                        <button type="button" className="bg-white px-[3px] flex flex-col pt-3 pb-[6px] items-center rounded-md cursor-pointer border border-white shadow hover:shadow-md hover:shadow-gray-400/50 w-full">
                          <div className="p-1 rounded bg-gray-50 border-[0.5px]" style={{color: 'rgb(139, 92, 246)', background: 'rgb(245, 243, 255)', borderColor: 'rgb(221, 214, 254)'}}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="h-5 w-5">
                              <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm3 2h6v4H7V5zm8 8v2h1v-2h-1zm-2-2H7v4h6v-4zm2 0h1V9h-1v2zm1-4V5h-1v2h1zM5 5v2H4V5h1zm0 4H4v2h1V9zm-1 4h1v2H4v-2z" clipRule="evenodd"></path>
                            </svg>
                          </div>
                          <div className="text-gray-700 text-xs font-medium flex justify-center mt-2 text-center leading-3 h-6 items-center">Video</div>
                        </button>
                        <button type="button" className="bg-white px-[3px] flex flex-col pt-3 pb-[6px] items-center rounded-md cursor-pointer border border-white shadow hover:shadow-md hover:shadow-gray-400/50 w-full">
                          <div className="p-1 rounded bg-gray-50 border-[0.5px]" style={{color: 'rgb(139, 92, 246)', background: 'rgb(245, 243, 255)', borderColor: 'rgb(221, 214, 254)'}}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="h-5 w-5">
                              <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd"></path>
                            </svg>
                          </div>
                          <div className="text-gray-700 text-xs font-medium flex justify-center mt-2 text-center leading-3 h-6 items-center">PDF viewer</div>
                        </button>
                        <button type="button" className="bg-white px-[3px] flex flex-col pt-3 pb-[6px] items-center rounded-md cursor-pointer border border-white shadow hover:shadow-md hover:shadow-gray-400/50 w-full">
                          <div className="p-1 rounded bg-gray-50 border-[0.5px]" style={{color: 'rgb(139, 92, 246)', background: 'rgb(245, 243, 255)', borderColor: 'rgb(221, 214, 254)'}}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="h-5 w-5">
                              <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z"></path>
                            </svg>
                          </div>
                          <div className="text-gray-700 text-xs font-medium flex justify-center mt-2 text-center leading-3 h-6 items-center">Social media links</div>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="my-5 space-y-3 px-4">
                    <div className="text-gray-400 font-medium">Page features</div>
                    <button type="button" className="inline-flex items-center px-3 border shadow-sm leading-4 font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 h-[42px] sm:h-[38px] text-sm border-gray-300 text-gray-500 bg-white hover:bg-gray-100">
                      <span className="p-1 bg-purple-100 text-purple-500 rounded-md mr-3 border border-purple-200">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="h-4 w-4">
                          <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"></path>
                        </svg>
                      </span>
                      <span className="max-w-full overflow-hidden">Progress bar</span>
                    </button>
                    <button type="button" className="inline-flex items-center px-3 border shadow-sm leading-4 font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 h-[42px] sm:h-[38px] text-sm border-gray-300 text-gray-500 bg-white hover:bg-gray-100">
                      <span className="p-1 rounded-md mr-2 border-[0.5px]" style={{background: 'rgb(253, 242, 248)', color: 'rgb(236, 72, 153)', borderColor: 'rgb(236, 72, 153)'}}>
                        <svg width="60" height="60" viewBox="0 0 60 60" className="h-4 w-4" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" clipRule="evenodd" d="M17.3733 14.4352C14.6975 15.1522 13.1095 17.9026 13.8265 20.5784L17.8105 35.4469C18.5275 38.1227 21.2779 39.7107 23.9537 38.9937L51.9202 31.5001C54.596 30.7831 56.1839 28.0327 55.4669 25.3569L51.4829 10.4884C50.7659 7.81257 48.0155 6.22463 45.3397 6.94161L17.3733 14.4352ZM48.5631 19.237C48.1997 17.8806 46.8055 17.0757 45.4492 17.4392L42.1747 18.3166C40.8184 18.68 40.0135 20.0741 40.3769 21.4304C40.7404 22.7868 42.1345 23.5917 43.4908 23.2283L46.7653 22.3509C48.1216 21.9874 48.9265 20.5933 48.5631 19.237Z" fill="currentColor"></path>
                          <path fillRule="evenodd" clipRule="evenodd" d="M12.2147 28.9319H8.25028C5.48007 28.9319 3.23438 31.1776 3.23438 33.9478V34.0178H13.5806C13.3443 33.1624 13.0968 32.2386 12.8295 31.2413C12.6105 30.4237 12.4046 29.6555 12.2147 28.9319ZM15.1569 38.9446H3.23438L3.23438 49.3408C3.23438 52.111 5.48007 54.3567 8.25028 54.3567L37.2032 54.3567C39.9734 54.3567 42.2191 52.111 42.2191 49.3408L42.2191 38.9446H41.8785C41.2128 39.126 40.5083 39.3147 39.7626 39.5145L31.1544 41.8211C24.3829 43.6355 20.9972 44.5427 18.3186 43.028C18.2796 43.0059 18.2408 42.9835 18.2023 42.9608C16.8512 42.1646 15.953 40.8948 15.1569 38.9446ZM12.6436 45.8819C14.0041 45.8819 15.107 46.9848 15.107 48.3453C15.107 49.7058 14.0041 50.8087 12.6436 50.8087H9.09545C7.73495 50.8087 6.63205 49.7058 6.63205 48.3453C6.63205 46.9848 7.73495 45.8819 9.09545 45.8819H12.6436Z" fill="currentColor"></path>
                        </svg>
                      </span>
                      <span className="max-w-full overflow-hidden">
                        <span className="ml-[5px]">Payment page</span>
                      </span>
                    </button>
                    <button type="button" className="inline-flex items-center px-3 border shadow-sm leading-4 font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 h-[42px] sm:h-[38px] text-sm border-gray-300 text-gray-500 bg-white hover:bg-gray-100">
                      <span className="p-1 rounded-md mr-2 border-[0.5px]" style={{background: 'rgb(249, 250, 251)', color: 'rgb(55, 65, 81)', borderColor: 'rgb(55, 65, 81)'}}>
                        <svg width="60" height="60" viewBox="0 0 60 60" className="h-4 w-4" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" clipRule="evenodd" d="M46.7609 9.55932C46.7609 10.8825 47.8012 11.9464 49.1105 12.1373C51.1127 12.4293 52.5338 12.9953 53.6311 14.0926C54.7878 15.2493 55.3542 16.7659 55.6315 18.9436C55.6596 19.1647 55.465 19.3479 55.2421 19.3479V19.3479L10.0772 19.3479C7.57686 19.3479 6.32671 19.3479 5.50289 18.0584C5.3772 17.8616 5.17921 17.3836 5.12896 17.1556C4.79965 15.6613 5.32254 15.1384 6.36831 14.0926V14.0926C7.57523 12.8857 9.17388 12.3215 11.5066 12.0578C12.8013 11.9114 13.8331 10.8623 13.8331 9.55932V9.55932C13.8331 7.53882 15.4711 5.90088 17.4916 5.90088C19.5121 5.90088 21.15 7.53882 21.15 9.55932V9.55932C21.15 10.8113 22.165 11.8263 23.417 11.8263L37.1771 11.8263C38.4291 11.8263 39.444 10.8113 39.444 9.55932V9.55932C39.444 7.53882 41.082 5.90088 43.1025 5.90088C45.123 5.90088 46.7609 7.53882 46.7609 9.55932V9.55932ZM4.10492 25.0391C4.1054 24.9247 4.203 24.8354 4.31742 24.8354V24.8354L55.2421 24.8354V24.8354C55.5775 24.8354 55.8949 25.0795 55.8958 25.4149C55.8975 26.0153 55.8975 26.6437 55.8975 27.3018L55.8975 38.6235C55.8975 45.9187 55.8975 49.5663 53.6311 51.8326C51.3648 54.099 47.7172 54.099 40.4219 54.099L19.5775 54.099C12.2823 54.099 8.63465 54.099 6.36831 51.8326C4.10198 49.5663 4.10198 45.9187 4.10198 38.6235L4.10197 27.3018C4.10197 26.505 4.10197 25.7518 4.10492 25.0391ZM18.6036 30.2818C20.3131 30.2818 21.699 31.6676 21.699 33.3772C21.699 35.0868 20.3131 36.4726 18.6036 36.4726L15.3547 36.4726C13.6452 36.4726 12.2593 35.0868 12.2593 33.3772C12.2593 31.6676 13.6452 30.2818 15.3547 30.2818L18.6036 30.2818ZM34.5017 33.3772C34.5017 31.6676 33.1159 30.2818 31.4063 30.2818H28.1575C26.4479 30.2818 25.062 31.6676 25.062 33.3772C25.062 35.0868 26.4479 36.4726 28.1575 36.4726H31.4063C33.1159 36.4726 34.5017 35.0868 34.5017 33.3772ZM44.2019 30.2818C45.9115 30.2818 47.2973 31.6676 47.2973 33.3772C47.2973 35.0868 45.9115 36.4726 44.2019 36.4726H40.953C39.2435 36.4726 37.8576 35.0868 37.8576 33.3772C37.8576 31.6676 39.2435 30.2818 40.953 30.2818L44.2019 30.2818ZM21.699 43.6866C21.699 41.977 20.3131 40.5912 18.6036 40.5912H15.3547C13.6452 40.5912 12.2593 41.977 12.2593 43.6866C12.2593 45.3962 13.6452 46.782 15.3547 46.782H18.6036C20.3131 46.782 21.699 45.3962 21.699 43.6866ZM31.4063 40.5912C33.1159 40.5912 34.5017 41.977 34.5017 43.6866C34.5017 45.3962 33.1159 46.782 31.4063 46.782L28.1575 46.782C26.4479 46.782 25.062 45.3962 25.062 43.6866C25.062 41.977 26.4479 40.5912 28.1575 40.5912L31.4063 40.5912ZM47.2973 43.6865C47.2973 41.9769 45.9115 40.591 44.2019 40.591H40.953C39.2435 40.591 37.8576 41.9769 37.8576 43.6865C37.8576 45.396 39.2435 46.7819 40.953 46.7819H44.2019C45.9115 46.7819 47.2973 45.396 47.2973 43.6865Z" fill="currentColor"></path>
                        </svg>
                      </span>
                      <span className="max-w-full overflow-hidden">
                        <span className="ml-[5px]">Scheduling page</span>
                      </span>
                    </button>
                    <button type="button" className="inline-flex items-center px-3 border shadow-sm leading-4 font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 h-[42px] sm:h-[38px] text-sm border-gray-300 text-gray-500 bg-white hover:bg-gray-100">
                      <span className="p-1 rounded-md mr-2 border-[0.5px]" style={{background: 'rgb(240, 253, 244)', color: 'rgb(34, 197, 94)', borderColor: 'rgb(34, 197, 94)'}}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="h-4 w-4">
                          <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd"></path>
                        </svg>
                      </span>
                      <span className="max-w-full overflow-hidden">
                        <span className="ml-[5px]">Login page</span>
                      </span>
                    </button>
                    <div className="h-2"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
