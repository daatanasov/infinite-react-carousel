import { projectTechnicalStack } from "../../utils/const";

export default function TechnicalStack() {
  return (
    <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-lg p-6">
      <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
        <span className="bg-indigo-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm mr-3">
          🛠️
        </span>
        Technical Stack
      </h2>
      <div className="flex flex-wrap gap-3">
        {projectTechnicalStack.map((tech) => (
          <span
            key={tech}
            className="bg-white text-indigo-700 px-3 py-1 rounded-full text-sm font-medium shadow-sm">
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
