import React from "react";
import { CVData } from "../../context/CVContext";
import { cleanList, hasEducationContent, hasExperienceContent, hasText } from "./templateUtils";

export default function CreativeTemplate({ data }: { data: CVData }) {
  const experiences = data.experiences.filter(hasExperienceContent);
  const education = (data.education || []).filter(hasEducationContent);
  const skills = cleanList(data.globalSkills);

  return (
    <div className="template-root font-sans text-[14.5px] leading-[1.15] text-[#1e293b] bg-[#ffffff] min-h-full flex-grow p-[15mm] text-justify">
      <div className="flex flex-col gap-[12px]">
        {/* Header Block */}
        <div className="bg-[#f8fafc] p-[15px] border-l-[4px] border-[#3b82f6] mb-[12px]">
          {hasText(data.fullName) && <h1 className="text-[32px] font-black tracking-tight text-[#0f172a] mb-[4px] uppercase">{data.fullName}</h1>}
          {hasText(data.jobTitle) && <p className="text-[18px] font-bold text-[#3b82f6] uppercase tracking-widest mb-[8px]">{data.jobTitle}</p>}
          <div className="flex flex-wrap gap-[12px] text-[12px] font-medium text-[#64748b]">
            {hasText(data.email) && <span className="flex items-center gap-1">{data.email}</span>}
            {hasText(data.phone) && <span className="flex items-center gap-1">{data.phone}</span>}
            {hasText(data.address) && <span className="flex items-center gap-1">{data.address}</span>}
            {hasText(data.linkedin) && <span className="flex items-center gap-1">{data.linkedin.replace('https://', '').replace('www.', '').replace('linkedin.com/in/', '')}</span>}
            {hasText(data.website) && <span className="flex items-center gap-1">{data.website.replace('https://', '').replace('www.', '')}</span>}
            {hasText(data.github) && <span className="flex items-center gap-1">{data.github.replace('https://', '').replace('www.', '').replace('github.com/', '')}</span>}
          </div>
        </div>

        <div className="flex flex-row gap-[20px]">
          {/* Main Content */}
          <div className="w-[70%] flex flex-col gap-[12px]">
            {/* Summary */}
            {hasText(data.summary) && (
              <div className="mb-[12px]">
                <h2 className="text-[18px] font-black uppercase tracking-widest text-[#0f172a] mb-[8px] border-b-[2px] border-[#e2e8f0] pb-[4px]">Summary</h2>
                <p className="text-[14.5px] leading-[1.15] whitespace-pre-wrap text-justify">{data.summary}</p>
              </div>
            )}

            {/* Experience */}
            {experiences.length > 0 && <div className="mb-[12px]">
              <h2 className="text-[18px] font-black uppercase tracking-widest text-[#0f172a] mb-[8px] border-b-[2px] border-[#e2e8f0] pb-[4px]">Experience</h2>
              <div className="space-y-[12px]">
                {experiences.map(exp => (
                  <div key={exp.id} className="break-inside-avoid print:break-inside-avoid relative pl-[15px] border-l-[2px] border-[#e2e8f0]">
                    <div className="absolute w-[8px] h-[8px] bg-[#3b82f6] rounded-full -left-[5px] top-[6px]"></div>
                    <div className="flex justify-between items-baseline mb-[2px]">
                      <h3 className="text-[16px] font-bold text-[#1e293b]">{exp.title}</h3>
                      <span className="text-[14.5px] font-bold text-[#3b82f6] shrink-0 ml-[10px]">{exp.startDate} – {exp.endDate}</span>
                    </div>
                    <p className="text-[14.5px] font-bold text-[#64748b] mb-[4px]">{exp.company}</p>
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
          <div className="w-[30%] flex flex-col gap-[12px]">
            {/* Skills */}
            {skills.length > 0 && (
              <div className="mb-[12px]">
                <h2 className="text-[18px] font-black uppercase tracking-widest text-[#0f172a] mb-[8px] border-b-[2px] border-[#e2e8f0] pb-[4px]">Skills</h2>
                <ul className="flex flex-col space-y-[4px] text-[14.5px] font-bold text-[#334155] space-y-[4px]">
                  {skills.map((skill, i) => (
                    <li key={`${skill}-${i}`} className="flex items-start"><span className="mr-[8px] mt-[5px] text-[10px] leading-none opacity-80">•</span><span className="flex-1 whitespace-pre-wrap text-justify">{skill}</span></li>
                  ))}
                </ul>
              </div>
            )}

            {/* Education */}
            {education.length > 0 && (
              <div className="mb-[12px]">
                <h2 className="text-[18px] font-black uppercase tracking-widest text-[#0f172a] mb-[8px] border-b-[2px] border-[#e2e8f0] pb-[4px]">Education</h2>
                <div className="space-y-[12px]">
                  {education.map(edu => (
                    <div key={edu.id} className="break-inside-avoid print:break-inside-avoid relative pl-[12px] border-l-[2px] border-[#cbd5e1]">
                      <div className="absolute w-[6px] h-[6px] bg-[#94a3b8] rounded-full -left-[4px] top-[6px]"></div>
                      <h3 className="text-[14.5px] font-bold text-[#1e293b] leading-tight mb-[2px]">{edu.institution}</h3>
                      <span className="text-[12px] font-bold text-[#64748b] block mb-[2px]">{edu.startYear} – {edu.endYear}</span>
                      <p className="text-[14.5px] font-bold text-[#475569]">{edu.degree}</p>
                      {hasText(edu.description) && (
                        <p className="text-[14.5px] mt-[4px] whitespace-pre-wrap text-justify">{edu.description}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* References */}
            {hasText(data.references) && (
              <div className="mb-[12px]">
                <h2 className="text-[18px] font-black uppercase tracking-widest text-[#0f172a] mb-[8px] border-b-[2px] border-[#e2e8f0] pb-[4px]">References</h2>
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
