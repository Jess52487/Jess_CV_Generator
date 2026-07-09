import React from "react";
import { CVData } from "../../context/CVContext";

export default function TechnicalTemplate({ data }: { data: CVData }) {
  return (
    <div className="font-[family-name:var(--font-technical)] text-green-500 bg-gray-900 p-8 h-full">
      {/* Header */}
      <div className="border-b border-green-800 pb-4 mb-6">
        <h1 className="text-2xl font-bold mb-1">{`> ${data.fullName || "User"}`}</h1>
        <p className="text-sm text-green-400 opacity-80">{`[ role: "${data.jobTitle || "System"}" ]`}</p>
      </div>

      {/* Summary */}
      <div className="mb-8">
        <h2 className="text-lg font-bold mb-2">{'// Summary'}</h2>
        <p className="text-sm leading-relaxed text-green-400">
          {data.summary || "No description provided."}
        </p>
      </div>

      {/* Experience */}
      <div>
        <h2 className="text-lg font-bold mb-4">{'// Execution_Log'}</h2>
        <div className="space-y-6">
          {data.experiences.map(exp => (
            <div key={exp.id} className="border border-green-900 bg-black/30 p-4 rounded-sm">
              <div className="flex justify-between items-baseline mb-2">
                <h3 className="text-md font-bold text-green-300">{`{ process: "${exp.title}" }`}</h3>
                <span className="text-xs text-green-600">{`[ ${exp.startDate} - ${exp.endDate} ]`}</span>
              </div>
              <p className="text-sm text-green-500 mb-2">{`@ ${exp.company}`}</p>
              {exp.skills.length > 0 && (
                <div className="text-xs text-green-400 mt-2">
                  <span className="opacity-70">deps: </span>
                  [{exp.skills.map(s => `"${s}"`).join(", ")}]
                </div>
              )}
            </div>
          ))}
          {data.experiences.length === 0 && (
            <p className="text-green-800 text-sm">{'< empty process list >'}</p>
          )}
        </div>
      </div>
    </div>
  );
}
