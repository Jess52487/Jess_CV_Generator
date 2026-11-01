import React from "react";
import { CVData } from "../../context/CVContext";
import { cleanList, hasEducationContent, hasExperienceContent, hasText } from "./templateUtils";

export default function ExecutiveTemplate({ data }: { data: CVData }) {
  const experiences = data.experiences.filter(hasExperienceContent);
  const education = (data.education || []).filter(hasEducationContent);
  const skills = cleanList(data.globalSkills);

  return (
    <div className="template-root font-sans text-[14.5px] leading-[1.15] text-[#111827] bg-[#ffffff] min-h-full flex-grow p-[15mm] flex flex-col text-justify">
      {/* Header */}
      <div className="border-b-[3px] border-[#1f2937] pb-4 mb-[12px]">
        {hasText(data.fullName) && <h1 className="text-[32px] font-bold uppercase tracking-wide mb-[4px]">{data.fullName}</h1>}
        <div className="flex justify-between items-end">
          {hasText(data.jobTitle) && <p className="text-[18px] font-medium text-[#4b5563] uppercase tracking-widest">{data.jobTitle}</p>}
          <div className="text-[12px] text-right font-medium text-[#6b7280] space-y-[2px]">
            {hasText(data.email) && <div>{data.email}</div>}
            {hasText(data.phone) && <div>{data.phone}</div>}
            {hasText(data.address) && <div>{data.address}</div>}
            {hasText(data.linkedin) && <div>{data.linkedin.replace('https://', '').replace('www.', '').replace('linkedin.com/in/', '')}</div>}
            {hasText(data.website) && <div>{data.website.replace('https://', '').replace('www.', '')}</div>}
            {hasText(data.github) && <div>{data.github.replace('https://', '').replace('www.', '').replace('github.com/', '')}</div>}
          </div>
        </div>
      </div>

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
        <div className="space-y-[8px]">
          {experiences.map(exp => (
            <div key={exp.id} className="break-inside-avoid print:break-inside-avoid mb-[8px]">
              <div className="flex justify-between items-baseline mb-[2px]">
                <h3 className="text-[16px] font-bold text-[#1f2937]">{exp.title}</h3>
                <span className="text-[14.5px] text-[#4b5563] font-medium ml-4 shrink-0">{exp.startDate} – {exp.endDate}</span>
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

      {/* Education */}
      {education.length > 0 && (
        <div className="mb-[12px]">
          <h2 className="text-[18px] uppercase tracking-widest border-b-[2px] border-[#d1d5db] pb-[4px] mb-[8px] font-bold text-center text-[#111827]">Education</h2>
          <div className="space-y-[8px]">
            {education.map(edu => (
              <div key={edu.id} className="break-inside-avoid print:break-inside-avoid mb-[8px]">
                <div className="flex justify-between items-baseline mb-[2px]">
                  <h3 className="text-[16px] font-bold text-[#1f2937]">{edu.institution}</h3>
                  <span className="text-[14.5px] text-[#4b5563] font-medium ml-4 shrink-0">{edu.startYear} – {edu.endYear}</span>
                </div>
                <p className="text-[14.5px] text-[#4b5563] font-bold">{edu.degree}</p>
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
        <div className="mb-[12px]">
          <h2 className="text-[18px] uppercase tracking-widest border-b-[2px] border-[#d1d5db] pb-[4px] mb-[8px] font-bold text-center text-[#111827]">References</h2>
          <p className="text-[14.5px] leading-[1.15] whitespace-pre-wrap text-justify">
            {data.references}
          </p>
        </div>
      )}
    </div>
  );
}
