import type { ImplementationApproachesListProps } from "../../types/types";

export default function ImplementationApproaches({
  approaches,
}: ImplementationApproachesListProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
        <span className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm mr-3">
          ⚡
        </span>
        Implementation Approaches
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {approaches.map((approach, index) => (
          <div
            key={index}
            className={`border rounded-lg p-4 hover:shadow-md transition-shadow ${
              approach.isMain ? "border-green-300 bg-green-50" : ""
            }`}>
            <div className="flex items-center mb-3">
              <div
                className={`${approach.iconBg} ${approach.iconColor} rounded-full w-10 h-10 flex items-center justify-center mr-3`}>
                {approach.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-800">
                {approach.title}
              </h3>
              {approach.isMain && (
                <span className="ml-2 text-xs bg-green-200 text-green-700 px-2 py-1 rounded-full">
                  Main Solution
                </span>
              )}
            </div>
            <p className="text-gray-600 text-sm mb-3">
              {approach.description.split("`").map((part, i) =>
                i % 2 === 0 ? (
                  part
                ) : (
                  <code key={i} className="bg-gray-100 px-2 py-1 rounded">
                    {part}
                  </code>
                )
              )}
            </p>
            <ul className="text-sm text-gray-600 space-y-1">
              {approach.features.map((feature, featureIndex) => (
                <li key={featureIndex}>• {feature}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
