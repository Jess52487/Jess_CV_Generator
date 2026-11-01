import React from "react";
import { CVData } from "../../context/CVContext";
import { cleanList, hasEducationContent, hasExperienceContent, hasText } from "./templateUtils";

export default function AcademicTemplate({ data }: { data: CVData }) {
  const experiences = data.experiences.filter(hasExperienceContent);
  const education = (data.education || []).filter(hasEducationContent);
  const skills = cleanList(data.globalSkills);

  return (
    <div className="template-root font-sans text-[14.5px] leading-[1.15] text-[#111827] bg-[#ffffff] min-h-full flex-grow p-[15mm] text-justify">
      {/* Header */}
      <div className="text-center border-b-[2px] border-[#d1d5db] pb-[12px] mb-[12px]">
        {hasText(data.fullName) && <h1 className="text-[32px] font-bold uppercase tracking-wider mb-[4px]">{data.fullName}</h1>}
        {hasText(data.jobTitle) && <p className="text-[18px] text-[#4b5563] font-medium uppercase tracking-widest mb-[8px]">{data.jobTitle}</p>}
        
        <div className="flex flex-wrap justify-center gap-x-[12px] gap-y-[4px] text-[12px] text-[#374151]">
          {hasText(data.email) && <span>{data.email}</span>}
          {hasText(data.phone) && <span>{data.phone}</span>}
          {hasText(data.address) && <span>{data.address}</span>}
          {hasText(data.linkedin) && <span>{data.linkedin.replace('https://', '').replace('www.', '').replace('linkedin.com/in/', '')}</span>}
          {hasText(data.website) && <span>{data.website.replace('https://', '').replace('www.', '')}</span>}
        </div>
      </div>

      <div className="flex flex-row gap-[24px]">
        {/* Left Column */}
        <div className="w-[60%] flex flex-col gap-[12px]">
          {/* Summary */}
          {hasText(data.summary) && (
            <div className="mb-[12px]">
              <h2 className="text-[18px] uppercase tracking-widest border-b-[2px] border-[#d1d5db] pb-[4px] mb-[8px] font-bold text-center text-[#111827]">Summary</h2>
              <p className="text-[14.5px] leading-[1.15] whitespace-pre-wrap text-justify">{data.summary}</p>
            </div>
          )}

          {/* Experience */}
          {experiences.length > 0 && <div className="mb-[12px]">
            <h2 className="text-[18px] uppercase tracking-widest border-b-[2px] border-[#d1d5db] pb-[4px] mb-[8px] font-bold text-center text-[#111827]">Experience</h2>
            <div className="space-y-[12px]">
              {experiences.map(exp => (
                <div key={exp.id} className="break-inside-avoid print:break-inside-avoid mb-[8px]">
                  <div className="flex justify-between items-baseline mb-[2px]">
                    <h3 className="text-[16px] font-bold text-[#111827]">{exp.title}</h3>
                    <span className="text-[14.5px] text-[#4b5563] font-medium shrink-0 ml-[10px]">{exp.startDate} – {exp.endDate}</span>
                  </div>
                  <p className="text-[14.5px] text-[#4b5563] font-bold mb-[4px]">{exp.company}</p>
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

        {/* Right Column */}
        <div className="w-[40%] flex flex-col gap-[12px] border-l-[2px] border-[#d1d5db] pl-[24px]">
          {/* Education */}
          {education.length > 0 && (
            <div className="mb-[12px]">
              <h2 className="text-[18px] uppercase tracking-widest border-b-[2px] border-[#d1d5db] pb-[4px] mb-[8px] font-bold text-center text-[#111827]">Education</h2>
              <div className="space-y-[12px]">
                {education.map(edu => (
                  <div key={edu.id} className="break-inside-avoid print:break-inside-avoid mb-[8px]">
                    <div className="flex justify-between items-baseline mb-[2px]">
                      <h3 className="text-[16px] font-bold text-[#111827]">{edu.institution}</h3>
                    </div>
                    <p className="text-[14.5px] text-[#4b5563] font-bold">{edu.degree}</p>
                    <span className="text-[14.5px] text-[#6b7280] font-medium block mt-[2px]">{edu.startYear} – {edu.endYear}</span>
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
              <h2 className="text-[18px] uppercase tracking-widest border-b-[2px] border-[#d1d5db] pb-[4px] mb-[8px] font-bold text-center text-[#111827]">Skills</h2>
              <ul className="flex flex-col space-y-[4px] text-[14.5px] space-y-[4px]">
                {skills.map((skill, i) => (
                  <li key={`${skill}-${i}`} className="flex items-start"><span className="mr-[8px] mt-[5px] text-[10px] leading-none opacity-80">•</span><span className="flex-1 whitespace-pre-wrap text-justify">{skill}</span></li>
                ))}
              </ul>
            </div>
          )}

          {/* References */}
          {hasText(data.references) && (
            <div className="mt-[8px] pt-[8px] border-t-[2px] border-[#d1d5db]">
              <h2 className="text-[18px] uppercase tracking-widest pb-[4px] mb-[8px] font-bold text-center text-[#111827]">References</h2>
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
