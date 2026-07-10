import React from "react";
import { CVData } from "../../context/CVContext";

export default function FreshStartTemplate({ data }: { data: CVData }) {
  return (
    <div className="font-sans text-[#4b5563] bg-[#f8fafc] min-h-full flex-grow p-10 leading-relaxed">
      {/* Header */}
      <div className="bg-white rounded-2xl p-8 mb-8 shadow-sm border border-[#e2e8f0] flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h1 className="text-4xl font-extrabold tracking-tight text-[#0f172a] mb-1">{data.fullName || "Your Name"}</h1>
          <p className="text-lg font-medium text-[#10b981]">{data.jobTitle || "Your Title"}</p>
        </div>
        
        <div className="flex flex-col gap-1 text-sm text-[#64748b] text-right">
          {data.email && <span>{data.email} ✉</span>}
          {data.phone && <span>{data.phone} ☏</span>}
          {data.address && <span>{data.address} ⌂</span>}
          {data.linkedin && <span>{data.linkedin.replace('https://', '').replace('www.', '').replace('linkedin.com/in/', '')} in/</span>}
          {data.website && <span>{data.website.replace('https://', '').replace('www.', '')} ↗</span>}
          {data.github && <span>{data.github.replace('https://', '').replace('www.', '').replace('github.com/', '')} &lt;/&gt;</span>}
          {data.nationality && <span>{data.nationality} ⚐</span>}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Left Column (Main Content) */}
        <div className="md:col-span-2 space-y-8">
          
          {/* Summary */}
          {data.summary && (
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#e2e8f0]">
              <h2 className="text-lg font-bold text-[#0f172a] mb-3 flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-[#10b981]/10 flex items-center justify-center text-[#10b981]">★</span>
                Summary
              </h2>
              <p className="text-sm text-justify leading-relaxed" style={{ fontFamily: "'Times New Roman', Times, serif" }}>
                {data.summary}
              </p>
            </div>
          )}

          {/* Experience */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#e2e8f0]">
            <h2 className="text-lg font-bold text-[#0f172a] mb-5 flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-[#3b82f6]/10 flex items-center justify-center text-[#3b82f6]">💼</span>
              Experience
            </h2>
            <div className="space-y-6">
              {data.experiences.map((exp, idx) => (
                <div key={exp.id} className={`${idx !== data.experiences.length - 1 ? 'border-b border-[#f1f5f9] pb-6' : ''}`}>
                  <div className="flex justify-between items-baseline mb-1">
                    <h3 className="text-md font-bold text-[#0f172a]">{exp.title}</h3>
                    <span className="text-xs font-semibold text-[#10b981] bg-[#10b981]/10 px-2 py-1 rounded-full">{exp.startDate} – {exp.endDate}</span>
                  </div>
                  <p className="text-sm font-medium text-[#64748b] mb-3">{exp.company}</p>
                  {exp.skills.length > 0 && (
                    <ul className="list-disc pl-5 text-sm text-[#475569] leading-relaxed space-y-1 text-justify">
                      {exp.skills.map(skill => (
                        <li key={skill}>{skill}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
              {data.experiences.length === 0 && (
                <p className="italic text-[#94a3b8] text-sm">No experience records available.</p>
              )}
            </div>
          </div>

        </div>

        {/* Right Column (Sidebar) */}
        <div className="space-y-8">
          
          {/* Skills */}
          {data.globalSkills && data.globalSkills.length > 0 && (
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#e2e8f0]">
              <h2 className="text-lg font-bold text-[#0f172a] mb-4 flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-[#f59e0b]/10 flex items-center justify-center text-[#f59e0b]">⚡</span>
                Skills
              </h2>
              <ol className="list-decimal list-outside pl-5 text-sm font-medium text-[#475569] space-y-2">
                {data.globalSkills.filter(s => s.trim() !== "").map(skill => (
                  <li key={skill}>{skill}</li>
                ))}
              </ol>
            </div>
          )}

          {/* Education */}
          {(data.education || []).length > 0 && (
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#e2e8f0]">
              <h2 className="text-lg font-bold text-[#0f172a] mb-4 flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-[#8b5cf6]/10 flex items-center justify-center text-[#8b5cf6]">🎓</span>
                Education
              </h2>
              <div className="space-y-4">
                {(data.education || []).map((edu, idx) => (
                  <div key={edu.id} className={`${idx !== (data.education?.length || 0) - 1 ? 'border-b border-[#f1f5f9] pb-4' : ''}`}>
                    <h3 className="text-sm font-bold text-[#0f172a]">{edu.institution}</h3>
                    <p className="text-xs font-medium text-[#10b981] my-1">{edu.degree}</p>
                    <span className="text-[10px] font-bold text-[#94a3b8] uppercase tracking-wider">{edu.startYear} – {edu.endYear}</span>
                    {edu.description && (
                      <p className="text-xs mt-2 text-[#64748b] leading-relaxed text-justify">{edu.description}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* References */}
          {data.references && (
            <div className="mt-10">
              <h2 className="text-sm font-bold text-[#0f172a] uppercase tracking-widest mb-6">References</h2>
              <p className="text-xs text-[#64748b] leading-relaxed text-justify whitespace-pre-wrap">
                {data.references}
              </p>
            </div>
          )}

        </div>

      </div>
    </div>
  );
}
