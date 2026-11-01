import React from "react";
import { CVData } from "../../context/CVContext";
import { cleanList, hasEducationContent, hasExperienceContent, hasText } from "./templateUtils";

export default function GlobalDirectorTemplate({ data }: { data: CVData }) {
  const experiences = data.experiences.filter(hasExperienceContent);
  const education = (data.education || []).filter(hasEducationContent);
  const skills = cleanList(data.globalSkills);

  return (
    <div className="template-root font-sans text-[14.5px] leading-[1.15] text-[#1e293b] bg-[#fafafa] min-h-full flex-grow p-[15mm] border-l-[8px] border-r-[8px] border-double border-[#94a3b8] text-justify">
      <div className="max-w-[700px] mx-auto">
        {/* Header Block */}
        <div className="border-b-[4px] border-double border-[#94a3b8] pb-[12px] mb-[12px] text-center">
          {hasText(data.fullName) && <h1 className="text-[32px] font-bold text-[#0f172a] uppercase tracking-widest mb-[4px]">{data.fullName}</h1>}
          {hasText(data.jobTitle) && <p className="text-[18px] text-[#475569] font-medium tracking-[0.2em] uppercase mb-[8px]">{data.jobTitle}</p>}
          
          <div className="flex flex-wrap justify-center items-center gap-x-[12px] gap-y-[4px] text-[12px] font-bold text-[#64748b] uppercase">
            {hasText(data.email) && <span>{data.email}</span>}
            {hasText(data.phone) && <span>{data.phone}</span>}
            {hasText(data.address) && <span>{data.address}</span>}
            {hasText(data.linkedin) && <span>{data.linkedin.replace('https://', '').replace('www.', '').replace('linkedin.com/in/', '')}</span>}
          </div>
        </div>

        {/* Summary */}
        {hasText(data.summary) && (
          <div className="mb-[12px]">
            <h2 className="text-[18px] uppercase font-bold tracking-widest text-[#0f172a] mb-[8px] border-b-[2px] border-[#cbd5e1] pb-[4px]">Executive Summary</h2>
            <p className="text-[14.5px] leading-[1.15] whitespace-pre-wrap text-justify">{data.summary}</p>
          </div>
        )}

        <div className="flex flex-row gap-[24px]">
          {/* Main Content */}
          <div className="w-[65%] flex flex-col gap-[12px]">
            {/* Experience */}
            {experiences.length > 0 && <div className="mb-[12px]">
              <h2 className="text-[18px] uppercase font-bold tracking-widest text-[#0f172a] mb-[8px] border-b-[2px] border-[#cbd5e1] pb-[4px]">Professional Experience</h2>
              <div className="space-y-[12px]">
                {experiences.map(exp => (
                  <div key={exp.id} className="break-inside-avoid print:break-inside-avoid mb-[8px]">
                    <div className="flex justify-between items-baseline mb-[2px]">
                      <h3 className="text-[16px] font-bold text-[#0f172a]">{exp.title}</h3>
                      <span className="text-[14.5px] text-[#64748b] font-medium shrink-0 ml-[10px]">{exp.startDate} – {exp.endDate}</span>
                    </div>
                    <p className="text-[14.5px] font-bold text-[#475569] mb-[4px]">{exp.company}</p>
                    {cleanList(exp.skills).length > 0 && (
                      <ul className="flex flex-col space-y-[4px] text-[14.5px] space-y-[4px]">
                        {cleanList(exp.skills).map((skill, i) => (
                          <li key={`${skill}-${i}`} className="flex items-start"><span className="mr-[8px] mt-[5px] text-[10px] leading-none opacity-80">•</span><span className="flex-1 whitespace-pre-wrap text-justify">{skill}</span></li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>}
          </div>

          {/* Sidebar */}
          <div className="w-[35%] flex flex-col gap-[12px]">
            {/* Education */}
            {education.length > 0 && (
              <div className="mb-[12px]">
                <h2 className="text-[18px] uppercase font-bold tracking-widest text-[#0f172a] mb-[8px] border-b-[2px] border-[#cbd5e1] pb-[4px]">Education</h2>
                <div className="space-y-[12px]">
                  {education.map(edu => (
                    <div key={edu.id} className="break-inside-avoid print:break-inside-avoid mb-[8px]">
                      <h3 className="text-[16px] font-bold text-[#0f172a]">{edu.institution}</h3>
                      <p className="text-[14.5px] font-bold text-[#475569]">{edu.degree}</p>
                      <span className="text-[12px] font-bold text-[#64748b] block mt-[2px]">{edu.startYear} – {edu.endYear}</span>
                      {hasText(edu.description) && (
                        <p className="text-[14.5px] mt-[4px] whitespace-pre-wrap text-justify">{edu.description}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Skills */}
            {skills.length > 0 && (
              <div className="mb-[12px]">
                <h2 className="text-[18px] uppercase font-bold tracking-widest text-[#0f172a] mb-[8px] border-b-[2px] border-[#cbd5e1] pb-[4px]">Core Competencies</h2>
                <ul className="flex flex-col space-y-[4px] text-[14.5px] space-y-[4px]">
                  {skills.map((skill, i) => (
                    <li key={`${skill}-${i}`} className="flex items-start"><span className="mr-[8px] mt-[5px] text-[10px] leading-none opacity-80">•</span><span className="flex-1 whitespace-pre-wrap text-justify">{skill}</span></li>
                  ))}
                </ul>
              </div>
            )}

            {/* References */}
            {hasText(data.references) && (
              <div className="mb-[12px]">
                <h2 className="text-[18px] uppercase font-bold tracking-widest text-[#0f172a] mb-[8px] border-b-[2px] border-[#cbd5e1] pb-[4px]">References</h2>
                <p className="text-[14.5px] leading-[1.15] whitespace-pre-wrap text-justify">
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
