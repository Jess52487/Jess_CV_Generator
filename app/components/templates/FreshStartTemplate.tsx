import React from "react";
import { CVData } from "../../context/CVContext";

export default function FreshStartTemplate({ data }: { data: CVData }) {
  return (
    <div className="font-sans text-[14.5px] leading-[1.15] text-[#4b5563] bg-[#f8fafc] min-h-full flex-grow p-[15mm] text-justify">
      
      {/* Header Block */}
      <div className="flex flex-row items-center gap-[16px] mb-[12px]">
        <div className="w-[60px] h-[60px] rounded-full bg-gradient-to-br from-[#38bdf8] to-[#3b82f6] flex items-center justify-center text-white text-[24px] font-bold shrink-0">
          {(data.fullName || "Y N").split(' ').map(n => n[0]).join('').substring(0, 2)}
        </div>
        <div>
          <h1 className="text-[32px] font-bold text-[#0f172a] tracking-tight leading-none mb-[4px]">{data.fullName || "Your Name"}</h1>
          <p className="text-[18px] font-medium text-[#0284c7]">{data.jobTitle || "Your Title"}</p>
        </div>
      </div>
      
      <div className="flex flex-wrap gap-[12px] text-[12px] font-bold text-[#64748b] bg-white p-[8px] rounded-lg shadow-sm border border-[#e2e8f0] mb-[12px]">
        {data.email && <span className="flex items-center gap-1">{data.email}</span>}
        {data.phone && <span className="flex items-center gap-1">{data.phone}</span>}
        {data.address && <span className="flex items-center gap-1">{data.address}</span>}
        {data.linkedin && <span className="flex items-center gap-1">{data.linkedin.replace('https://', '').replace('www.', '').replace('linkedin.com/in/', '')}</span>}
      </div>

      <div className="flex flex-row gap-[24px]">
        {/* Main Content */}
        <div className="w-[65%] flex flex-col gap-[12px]">
          {/* Summary */}
          {data.summary && (
            <div className="mb-[12px] bg-white p-[12px] rounded-xl shadow-sm border border-[#e2e8f0]">
              <h2 className="text-[18px] font-bold text-[#0f172a] uppercase tracking-wider mb-[8px]">Summary</h2>
              <p className="text-[14.5px] leading-[1.15] whitespace-pre-wrap text-justify">{data.summary}</p>
            </div>
          )}

          {/* Experience */}
          <div className="mb-[12px] bg-white p-[12px] rounded-xl shadow-sm border border-[#e2e8f0]">
            <h2 className="text-[18px] font-bold text-[#0f172a] uppercase tracking-wider mb-[8px]">Experience</h2>
            <div className="space-y-[12px]">
              {data.experiences.map((exp, idx) => (
                <div key={exp.id} className={`${idx !== data.experiences.length - 1 ? 'border-b border-[#f1f5f9] pb-[8px]' : ''}`}>
                  <div className="flex justify-between items-baseline mb-[2px]">
                    <h3 className="text-[16px] font-bold text-[#0f172a]">{exp.title}</h3>
                    <span className="text-[12px] font-bold text-[#0ea5e9] bg-[#e0f2fe] px-[6px] py-[2px] rounded-full shrink-0 ml-[10px]">{exp.startDate} – {exp.endDate}</span>
                  </div>
                  <p className="text-[14.5px] font-bold text-[#64748b] mb-[4px]">{exp.company}</p>
                  {exp.skills.length > 0 && (
                    <ul className="flex flex-col space-y-[4px] text-[14.5px] space-y-[4px]">
                      {exp.skills.filter(s => s && s.trim().length > 0).map((skill, i) => (
                        <li key={\-\} className="flex items-start"><span className="mr-[8px] mt-[5px] text-[10px] leading-none opacity-80">•</span><span className="flex-1 whitespace-pre-wrap text-justify">{skill}</span></li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="w-[35%] flex flex-col gap-[12px]">
          {/* Skills */}
          {data.globalSkills && data.globalSkills.length > 0 && (
            <div className="mb-[12px] bg-white p-[12px] rounded-xl shadow-sm border border-[#e2e8f0]">
              <h2 className="text-[18px] font-bold text-[#0f172a] uppercase tracking-wider mb-[8px]">Skills</h2>
              <ul className="flex flex-col space-y-[4px] text-[14.5px] font-medium text-[#475569] space-y-[4px]">
                {data.globalSkills.filter(s => s && s.trim().length > 0).map((skill, i) => (
                  <li key={\-\} className="flex items-start"><span className="mr-[8px] mt-[5px] text-[10px] leading-none opacity-80">•</span><span className="flex-1 whitespace-pre-wrap text-justify">{skill}</span></li>
                ))}
              </ul>
            </div>
          )}

          {/* Education */}
          {(data.education || []).length > 0 && (
            <div className="mb-[12px] bg-white p-[12px] rounded-xl shadow-sm border border-[#e2e8f0]">
              <h2 className="text-[18px] font-bold text-[#0f172a] uppercase tracking-wider mb-[8px]">Education</h2>
              <div className="space-y-[12px]">
                {(data.education || []).map((edu, idx) => (
                  <div key={edu.id} className={`${idx !== (data.education?.length || 0) - 1 ? 'border-b border-[#f1f5f9] pb-[8px]' : ''}`}>
                    <h3 className="text-[14.5px] font-bold text-[#0f172a]">{edu.institution}</h3>
                    <p className="text-[12px] font-bold text-[#10b981] my-[2px]">{edu.degree}</p>
                    <span className="text-[10px] font-bold text-[#94a3b8] uppercase tracking-wider block mb-[2px]">{edu.startYear} – {edu.endYear}</span>
                    {edu.description && (
                      <p className="text-[14.5px] mt-[4px] whitespace-pre-wrap text-justify">{edu.description}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* References */}
          {data.references && (
            <div className="mt-[12px] bg-white p-[12px] rounded-xl shadow-sm border border-[#e2e8f0]">
              <h2 className="text-[18px] font-bold text-[#0f172a] uppercase tracking-wider mb-[8px]">References</h2>
              <p className="text-[14.5px] leading-[1.15] whitespace-pre-wrap text-justify">
                {data.references}
              </p>
            </div>
          )}

        </div>

      </div>
    </div>
  );
}
