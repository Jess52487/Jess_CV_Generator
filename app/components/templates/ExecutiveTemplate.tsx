import React from "react";
import { CVData } from "../../context/CVContext";

export default function ExecutiveTemplate({ data }: { data: CVData }) {
  return (
    <div className="font-[family-name:var(--font-executive)] text-gray-900 leading-relaxed bg-white">
      {/* Header */}
      <div className="text-center border-b-4 border-double border-gray-800 pb-6 mb-8 pt-4">
        <h1 className="text-4xl uppercase tracking-widest font-bold mb-2">{data.fullName || "Your Name"}</h1>
        <p className="text-lg italic text-gray-600">{data.jobTitle || "Your Title"}</p>
      </div>

      {/* Summary */}
      {data.summary && (
        <div className="mb-8 px-8">
          <p className="text-center italic text-gray-700 leading-loose">
            "{data.summary}"
          </p>
        </div>
      )}

      {/* Experience */}
      <div className="mb-8">
        <h2 className="text-xl uppercase tracking-widest border-b border-gray-300 pb-2 mb-6 font-bold text-center">Professional Experience</h2>
        <div className="space-y-6">
          {data.experiences.map(exp => (
            <div key={exp.id}>
              <div className="flex justify-between items-baseline mb-1">
                <h3 className="text-lg font-bold">{exp.title}</h3>
                <span className="text-sm text-gray-600 italic">{exp.startDate} – {exp.endDate}</span>
              </div>
              <p className="font-semibold text-gray-800 mb-2">{exp.company}</p>
              {exp.skills.length > 0 && (
                <p className="text-sm text-gray-600">
                  <span className="font-semibold text-gray-800">Key Competencies:</span> {exp.skills.join(" • ")}
                </p>
              )}
            </div>
          ))}
          {data.experiences.length === 0 && (
            <p className="text-gray-400 italic text-center">No experience records available.</p>
          )}
        </div>
      </div>
    </div>
  );
}
