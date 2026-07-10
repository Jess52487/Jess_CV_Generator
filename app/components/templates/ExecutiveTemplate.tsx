import React from "react";
import { CVData } from "../../context/CVContext";

export default function ExecutiveTemplate({ data }: { data: CVData }) {
  return (
    <div className="font-[family-name:var(--font-executive)] text-[#111827] leading-relaxed bg-[#ffffff] h-full p-12">
      {/* Header */}
      <div className="text-center mb-10 border-b-4 border-[#1f2937] pb-8">
        <h1 className="text-5xl font-extrabold uppercase tracking-widest text-[#111827] mb-2">
          {data.fullName || "Your Name"}
        </h1>
        <p className="text-2xl text-[#4b5563] font-light tracking-widest uppercase mb-4">
          {data.jobTitle || "Professional Title"}
        </p>
        
        {/* Contact Info Row */}
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-[#374151] font-medium mt-4">
          {data.email && <span className="flex items-center gap-1">✉ {data.email}</span>}
          {data.phone && <span className="flex items-center gap-1">☏ {data.phone}</span>}
          {data.address && <span className="flex items-center gap-1">⌂ {data.address}</span>}
          {data.linkedin && <span className="flex items-center gap-1">in/ {data.linkedin.replace('https://', '').replace('www.', '')}</span>}
          {data.website && <span className="flex items-center gap-1">↗ {data.website.replace('https://', '').replace('www.', '')}</span>}
          {data.github && <span className="flex items-center gap-1">&lt;/&gt; {data.github.replace('https://', '').replace('www.', '')}</span>}
          {data.nationality && <span className="flex items-center gap-1">⚐ {data.nationality}</span>}
        </div>
      </div>

      {/* Summary */}
      {data.summary && (
        <div className="mb-12 px-8">
          <h2 className="text-xl uppercase tracking-widest border-b-2 border-[#d1d5db] pb-3 mb-6 font-bold text-center text-[#111827]">Summary</h2>
          <p 
            className="text-[#374151] leading-loose text-lg text-justify"
            style={{ fontFamily: "'Times New Roman', Times, serif" }}
          >
            {data.summary}
          </p>
        </div>
      )}

      {/* Global Skills (Optional) */}
      {data.globalSkills && data.globalSkills.length > 0 && (
        <div className="mb-8 px-8">
          <h2 className="text-xl uppercase tracking-widest border-b-2 border-[#d1d5db] pb-3 mb-6 font-bold text-center text-[#111827]">Skills</h2>
          <ol className="list-decimal pl-5 text-[#1f2937] font-semibold space-y-1">
            {data.globalSkills.map((skill, idx) => (
              <li key={idx}>{skill}</li>
            ))}
          </ol>
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
      {(data.education || []).length > 0 && (
        <div className="mb-8 mt-12">
          <h2 className="text-xl uppercase tracking-widest border-b-2 border-[#d1d5db] pb-3 mb-8 font-bold text-center text-[#111827]">Academic Profile</h2>
          <div className="space-y-6">
            {(data.education || []).map(edu => (
              <div key={edu.id} className="mb-4">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="text-lg font-bold text-[#111827]">{edu.institution}</h3>
                  <span className="text-sm text-[#4b5563] font-medium whitespace-nowrap ml-4">{edu.startYear} – {edu.endYear}</span>
                </div>
                <p className="text-md text-[#4b5563] italic">{edu.degree}</p>
                {edu.description && (
                  <p className="text-sm text-[#374151] mt-2 leading-relaxed">{edu.description}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
