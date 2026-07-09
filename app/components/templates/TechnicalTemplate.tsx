import React from "react";
import { CVData } from "../../context/CVContext";

export default function TechnicalTemplate({ data }: { data: CVData }) {
  return (
    <div className="font-[family-name:var(--font-technical)] text-[#22c55e] bg-[#111827] p-12 h-full">
      {/* Header */}
      <div className="border-b border-[#166534] pb-6 mb-8">
        <h1 className="text-3xl font-bold mb-2 text-[#22c55e]">{`> ${data.fullName || "User"}`}</h1>
        <p className="text-md text-[#4ade80] opacity-80">{`[ role: "${data.jobTitle || "System"}" ]`}</p>
      </div>

      {/* Summary */}
      <div className="mb-10">
        <h2 className="text-xl font-bold mb-3 text-[#22c55e]">{'// Summary'}</h2>
        <p className="text-sm leading-relaxed text-[#4ade80]">
          {data.summary || "No description provided."}
        </p>
      </div>

      {/* Global Skills (Optional) */}
      {data.globalSkills && data.globalSkills.length > 0 && (
        <div className="mb-10">
          <h2 className="text-xl font-bold mb-3 text-[#22c55e]">{'// Dependencies'}</h2>
          <div className="text-sm text-[#4ade80] font-mono leading-relaxed">
            [ {data.globalSkills.map(s => `"${s}"`).join(", ")} ]
          </div>
        </div>
      )}

      {/* Experience */}
      <div>
        <h2 className="text-xl font-bold mb-6 text-[#22c55e]">{'// Execution_Log'}</h2>
        <div className="space-y-8">
          {data.experiences.map(exp => (
            <div key={exp.id} className="border border-[#14532d] bg-[#000000]/30 p-6 rounded-sm">
              <div className="flex justify-between items-baseline mb-3">
                <h3 className="text-lg font-bold text-[#86efac]">{`{ process: "${exp.title}" }`}</h3>
                <span className="text-sm text-[#16a34a]">{`[ ${exp.startDate} - ${exp.endDate} ]`}</span>
              </div>
              <p className="text-md text-[#22c55e] mb-3">{`@ ${exp.company}`}</p>
              {exp.skills.length > 0 && (
                <div className="text-sm text-[#4ade80] mt-3">
                  <span className="opacity-70">deps: </span>
                  [{exp.skills.map(s => `"${s}"`).join(", ")}]
                </div>
              )}
            </div>
          ))}
          {data.experiences.length === 0 && (
            <p className="text-[#166534] text-md">{'< empty process list >'}</p>
          )}
        </div>
      </div>

      {/* Education (Optional) */}
      {data.education && data.education.length > 0 && (
        <div className="mt-10">
          <h2 className="text-xl font-bold mb-6 text-[#22c55e]">{'// Init_Scripts'}</h2>
          <div className="space-y-6">
            {data.education.map(edu => (
              <div key={edu.id} className="border-l-2 border-[#166534] pl-4">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="text-md font-bold text-[#86efac]">{edu.institution}</h3>
                  <span className="text-xs text-[#16a34a]">{`[ ${edu.startYear} - ${edu.endYear} ]`}</span>
                </div>
                <p className="text-sm text-[#22c55e]">{`> emit: ${edu.degree}`}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
