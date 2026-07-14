import React from "react";
import { CVData } from "../../context/CVContext";

export default function GlobalDirectorTemplate({ data }: { data: CVData }) {
  return (
    <div className="font-sans text-[14.5px] leading-[1.15] text-[#1e293b] bg-[#fafafa] min-h-full flex-grow p-[15mm] border-l-[8px] border-r-[8px] border-double border-[#94a3b8] text-left">
      <div className="max-w-[700px] mx-auto">
        {/* Header Block */}
        <div className="border-b-[4px] border-double border-[#94a3b8] pb-[12px] mb-[12px] text-center">
          <h1 className="text-[32px] font-bold text-[#0f172a] uppercase tracking-widest mb-[4px]">{data.fullName || "Your Name"}</h1>
          <p className="text-[18px] text-[#475569] font-medium tracking-[0.2em] uppercase mb-[8px]">{data.jobTitle || "Your Title"}</p>
          
          <div className="flex flex-wrap justify-center items-center gap-x-[12px] gap-y-[4px] text-[12px] font-bold text-[#64748b] uppercase">
            {data.email && <span>{data.email}</span>}
            {data.phone && <span>{data.phone}</span>}
            {data.address && <span>{data.address}</span>}
            {data.linkedin && <span>{data.linkedin.replace('https://', '').replace('www.', '').replace('linkedin.com/in/', '')}</span>}
          </div>
        </div>

        {/* Summary */}
        {data.summary && (
          <div className="mb-[12px]">
            <h2 className="text-[18px] uppercase font-bold tracking-widest text-[#0f172a] mb-[8px] border-b-[2px] border-[#cbd5e1] pb-[4px]">Executive Summary</h2>
            <p className="text-[14.5px] leading-[1.15] whitespace-pre-wrap">{data.summary}</p>
          </div>
        )}

        <div className="flex flex-row gap-[24px]">
          {/* Main Content */}
          <div className="w-[65%] flex flex-col gap-[12px]">
            {/* Experience */}
            <div className="mb-[12px]">
              <h2 className="text-[18px] uppercase font-bold tracking-widest text-[#0f172a] mb-[8px] border-b-[2px] border-[#cbd5e1] pb-[4px]">Professional Experience</h2>
              <div className="space-y-[12px]">
                {data.experiences.map(exp => (
                  <div key={exp.id}>
                    <div className="flex justify-between items-baseline mb-[2px]">
                      <h3 className="text-[16px] font-bold text-[#0f172a]">{exp.title}</h3>
                      <span className="text-[14.5px] text-[#64748b] font-medium shrink-0 ml-[10px]">{exp.startDate} – {exp.endDate}</span>
                    </div>
                    <p className="text-[14.5px] font-bold text-[#475569] mb-[4px]">{exp.company}</p>
                    {exp.skills.length > 0 && (
                      <ul className="flex flex-col space-y-[4px] text-[14.5px] space-y-[4px]">
                        {exp.skills.filter(s => s && s.trim().length > 0).map(skill => (
                          <li key={skill} className="flex items-start"><span className="mr-[8px] mt-[5px] text-[10px] leading-none opacity-80">•</span><span className="flex-1 whitespace-pre-wrap">{skill}</span></li>
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
            {/* Education */}
            {(data.education || []).length > 0 && (
              <div className="mb-[12px]">
                <h2 className="text-[18px] uppercase font-bold tracking-widest text-[#0f172a] mb-[8px] border-b-[2px] border-[#cbd5e1] pb-[4px]">Education</h2>
                <div className="space-y-[12px]">
                  {(data.education || []).map(edu => (
                    <div key={edu.id}>
                      <h3 className="text-[16px] font-bold text-[#0f172a]">{edu.institution}</h3>
                      <p className="text-[14.5px] font-bold text-[#475569]">{edu.degree}</p>
                      <span className="text-[12px] font-bold text-[#64748b] block mt-[2px]">{edu.startYear} – {edu.endYear}</span>
                      {edu.description && (
                        <p className="text-[14.5px] mt-[4px] whitespace-pre-wrap">{edu.description}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Skills */}
            {data.globalSkills && data.globalSkills.length > 0 && (
              <div className="mb-[12px]">
                <h2 className="text-[18px] uppercase font-bold tracking-widest text-[#0f172a] mb-[8px] border-b-[2px] border-[#cbd5e1] pb-[4px]">Core Competencies</h2>
                <ul className="flex flex-col space-y-[4px] text-[14.5px] space-y-[4px]">
                  {data.globalSkills.filter(s => s && s.trim().length > 0).map(skill => (
                    <li key={skill} className="flex items-start"><span className="mr-[8px] mt-[5px] text-[10px] leading-none opacity-80">•</span><span className="flex-1 whitespace-pre-wrap">{skill}</span></li>
                  ))}
                </ul>
              </div>
            )}

            {/* References */}
            {data.references && (
              <div className="mb-[12px]">
                <h2 className="text-[18px] uppercase font-bold tracking-widest text-[#0f172a] mb-[8px] border-b-[2px] border-[#cbd5e1] pb-[4px]">References</h2>
                <p className="text-[14.5px] leading-[1.15] whitespace-pre-wrap">
                  {data.references}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
