export default function Sidebar() {
  return (
    <aside className="w-64 bg-gray-50 border-r border-gray-200 p-4">
      <div className="mb-6">
        <h2 className="text-sm font-semibold text-gray-700 mb-4">Search fields</h2>
        <div className="relative">
          <input 
            type="text" 
            placeholder="Search fields"
            className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
          />
        </div>
      </div>
      
      <div className="mb-6">
        <h3 className="text-sm font-semibold text-gray-700 mb-3">Frequently used</h3>
        <div className="grid grid-cols-2 gap-2">
          <div className="p-2 bg-white rounded border hover:bg-gray-50 cursor-pointer">
            <div className="w-8 h-8 bg-orange-500 rounded mb-1"></div>
            <span className="text-xs">Text</span>
          </div>
          <div className="p-2 bg-white rounded border hover:bg-gray-50 cursor-pointer">
            <div className="w-8 h-8 bg-green-500 rounded mb-1"></div>
            <span className="text-xs">Multiple choice</span>
          </div>
          <div className="p-2 bg-white rounded border hover:bg-gray-50 cursor-pointer">
            <div className="w-8 h-8 bg-blue-500 rounded mb-1"></div>
            <span className="text-xs">Email input</span>
          </div>
        </div>
      </div>
      
      <div className="text-xs text-gray-600">
        <p>More field types available...</p>
      </div>
    </aside>
  );
}