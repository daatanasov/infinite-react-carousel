export default function TaskDescription() {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-blue-500">
      <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
        <span className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm mr-3">
          📋
        </span>
        The Task
      </h2>
      <div className="bg-gray-50 rounded-lg p-4 mb-4">
        <p className="text-gray-700 leading-relaxed">
          <strong>Create an infinite image carousel</strong> where items loop
          when either end is reached, using React. Navigation should only be
          triggered by <strong>scroll</strong>, not arrows or buttons.
        </p>
      </div>

      <h3 className="text-lg font-semibold text-gray-800 mb-3">
        Requirements:
      </h3>
      <div className="grid md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <div className="flex items-center text-green-700">
            <span className="mr-2">✅</span>
            <span>Work with different image sizes & aspect ratios</span>
          </div>
          <div className="flex items-center text-green-700">
            <span className="mr-2">✅</span>
            <span>Responsive across all screen sizes</span>
          </div>
        </div>
        <div className="space-y-2">
          <div className="flex items-center text-green-700">
            <span className="mr-2">✅</span>
            <span>Mobile and desktop compatibility</span>
          </div>
          <div className="flex items-center text-green-700">
            <span className="mr-2">✅</span>
            <span>Handle 12 to 1000+ images efficiently</span>
          </div>
          <div className="flex items-center text-green-700">
            <span className="mr-2">✅</span>
            <span>Reusable component architecture</span>
          </div>
        </div>
      </div>
    </div>
  );
}
