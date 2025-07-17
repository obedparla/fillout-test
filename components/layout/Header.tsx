export default function Header() {
  return (
    <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6">
      <div className="flex items-center space-x-4">
        <h1 className="text-xl font-semibold">RSVP Form Template</h1>
      </div>
      <div className="flex items-center space-x-4">
        <button className="px-4 py-2 text-blue-600 hover:bg-blue-50 rounded">Edit</button>
        <button className="px-4 py-2 text-blue-600 hover:bg-blue-50 rounded">Integrate</button>
        <button className="px-4 py-2 text-blue-600 hover:bg-blue-50 rounded">Share</button>
        <button className="px-4 py-2 text-blue-600 hover:bg-blue-50 rounded">Results</button>
        <button className="px-4 py-2 text-blue-600 hover:bg-blue-50 rounded">Settings</button>
        <button className="px-4 py-2 bg-gray-900 text-white rounded hover:bg-gray-800">Publish</button>
      </div>
    </header>
  );
}