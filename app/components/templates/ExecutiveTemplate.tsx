import React from "react";
import { CVData } from "../../context/CVContext";

export default function ExecutiveTemplate({ data }: { data: CVData }) {
  return (
    <div className="font-[family-name:var(--font-executive)] text-[#111827] leading-relaxed bg-[#ffffff] h-full p-12">
      {/* Header */}
      <div className="text-center border-b-4 border-double border-[#1f2937] pb-8 mb-10 pt-4">
        <h1 className="text-4xl uppercase tracking-widest font-bold mb-3 text-[#111827]">{data.fullName || "Your Name"}</h1>
        <p className="text-lg italic text-[#4b5563]">{data.jobTitle || "Your Title"}</p>
      </div>

      {/* Summary */}
      {data.summary && (
        <div className="mb-12 px-8">
          <p className="text-center italic text-[#374151] leading-loose text-lg">
            "{data.summary}"
          </p>
        </div>
      )}

      {/* Global Skills (Optional) */}
      {data.globalSkills && data.globalSkills.length > 0 && (
        <div className="mb-8">
          <h2 className="text-xl uppercase tracking-widest border-b-2 border-[#d1d5db] pb-3 mb-6 font-bold text-center text-[#111827]">Core Competencies</h2>
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 px-8">
            {data.globalSkills.map(skill => (
              <span key={skill} className="text-md text-[#1f2937] font-semibold">{skill}</span>
            ))}
          </div>
        </div>
      )}

      {/* Experience */}
      <div className="mb-8 mt-12">
        <h2 className="text-xl uppercase tracking-widest border-b-2 border-[#d1d5db] pb-3 mb-8 font-bold text-center text-[#111827]">Professional Experience</h2>
        <div className="space-y-8">
          {data.experiences.map(exp => (
            <div key={exp.id} className="mb-6">
              <div className="flex justify-between items-baseline mb-2">
                <h3 className="text-xl font-bold text-[#111827]">{exp.title}</h3>
                <span className="text-sm text-[#4b5563] italic font-medium">{exp.startDate} – {exp.endDate}</span>
              </div>
              <p className="font-semibold text-[#1f2937] text-lg mb-3">{exp.company}</p>
              {exp.skills.length > 0 && (
                <p className="text-sm text-[#4b5563] leading-relaxed mt-2">
                  <span className="font-bold text-[#111827] uppercase text-xs tracking-wider mr-2">Key Competencies:</span> 
                  {exp.skills.join(" • ")}
                </p>
              )}
            </div>
          ))}
          {data.experiences.length === 0 && (
            <p className="text-[#9ca3af] italic text-center">No experience records available.</p>
          )}
        </div>
      </div>

      {/* Education (Optional) */}
      {data.education && data.education.length > 0 && (
        <div className="mb-8 mt-12">
          <h2 className="text-xl uppercase tracking-widest border-b-2 border-[#d1d5db] pb-3 mb-8 font-bold text-center text-[#111827]">Academic Profile</h2>
          <div className="space-y-6">
            {data.education.map(edu => (
              <div key={edu.id} className="flex justify-between items-baseline mb-2">
                <div>
                  <h3 className="text-lg font-bold text-[#111827]">{edu.institution}</h3>
                  <p className="text-md text-[#4b5563] italic">{edu.degree}</p>
                </div>
                <span className="text-sm text-[#4b5563] font-medium">{edu.startYear} – {edu.endYear}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
