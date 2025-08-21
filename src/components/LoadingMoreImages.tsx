export default function LoadingMoreImages() {
  return (
    <div className="flex items-center justify-center bg-gray-50 rounded-lg border-2 border-dashed border-gray-200 w-72 min-w-72 h-full">
      <div className="text-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 mx-auto mb-2"></div>
        <div className="text-gray-500 text-sm">Loading more...</div>
      </div>
    </div>
  );
}
