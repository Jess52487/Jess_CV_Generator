import React from "react";
import { CVData } from "../../context/CVContext";

export default function AcademicTemplate({ data }: { data: CVData }) {
  return (
    <div className="font-sans text-[14.5px] leading-[1.15] text-[#111827] bg-[#ffffff] min-h-full flex-grow p-[15mm] text-justify">
      {/* Header */}
      <div className="text-center border-b-[2px] border-[#d1d5db] pb-[12px] mb-[12px]">
        <h1 className="text-[32px] font-bold uppercase tracking-wider mb-[4px]">{data.fullName || "Your Name"}</h1>
        <p className="text-[18px] text-[#4b5563] font-medium uppercase tracking-widest mb-[8px]">{data.jobTitle || "Your Title"}</p>
        
        <div className="flex flex-wrap justify-center gap-x-[12px] gap-y-[4px] text-[12px] text-[#374151]">
          {data.email && <span>{data.email}</span>}
          {data.phone && <span>{data.phone}</span>}
          {data.address && <span>{data.address}</span>}
          {data.linkedin && <span>{data.linkedin.replace('https://', '').replace('www.', '').replace('linkedin.com/in/', '')}</span>}
          {data.website && <span>{data.website.replace('https://', '').replace('www.', '')}</span>}
        </div>
      </div>

      <div className="flex flex-row gap-[24px]">
        {/* Left Column */}
        <div className="w-[60%] flex flex-col gap-[12px]">
          {/* Summary */}
          {data.summary && (
            <div className="mb-[12px]">
              <h2 className="text-[18px] uppercase tracking-widest border-b-[2px] border-[#d1d5db] pb-[4px] mb-[8px] font-bold text-center text-[#111827]">Summary</h2>
              <p className="text-[14.5px] leading-[1.15] whitespace-pre-wrap text-justify">{data.summary}</p>
            </div>
          )}

          {/* Experience */}
          <div className="mb-[12px]">
            <h2 className="text-[18px] uppercase tracking-widest border-b-[2px] border-[#d1d5db] pb-[4px] mb-[8px] font-bold text-center text-[#111827]">Experience</h2>
            <div className="space-y-[12px]">
              {data.experiences.map(exp => (
                <div key={exp.id}>
                  <div className="flex justify-between items-baseline mb-[2px]">
                    <h3 className="text-[16px] font-bold text-[#111827]">{exp.title}</h3>
                    <span className="text-[14.5px] text-[#4b5563] font-medium shrink-0 ml-[10px]">{exp.startDate} – {exp.endDate}</span>
                  </div>
                  <p className="text-[14.5px] text-[#4b5563] font-bold mb-[4px]">{exp.company}</p>
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

        {/* Right Column */}
        <div className="w-[40%] flex flex-col gap-[12px] border-l-[2px] border-[#d1d5db] pl-[24px]">
          {/* Education */}
          {(data.education || []).length > 0 && (
            <div className="mb-[12px]">
              <h2 className="text-[18px] uppercase tracking-widest border-b-[2px] border-[#d1d5db] pb-[4px] mb-[8px] font-bold text-center text-[#111827]">Education</h2>
              <div className="space-y-[12px]">
                {(data.education || []).map(edu => (
                  <div key={edu.id}>
                    <div className="flex justify-between items-baseline mb-[2px]">
                      <h3 className="text-[16px] font-bold text-[#111827]">{edu.institution}</h3>
                    </div>
                    <p className="text-[14.5px] text-[#4b5563] font-bold">{edu.degree}</p>
                    <span className="text-[14.5px] text-[#6b7280] font-medium block mt-[2px]">{edu.startYear} – {edu.endYear}</span>
                    {edu.description && (
                      <p className="text-[14.5px] mt-[4px] whitespace-pre-wrap text-justify">{edu.description}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Skills */}
          {data.globalSkills && data.globalSkills.length > 0 && (
            <div className="mb-[12px]">
              <h2 className="text-[18px] uppercase tracking-widest border-b-[2px] border-[#d1d5db] pb-[4px] mb-[8px] font-bold text-center text-[#111827]">Skills</h2>
              <ul className="flex flex-col space-y-[4px] text-[14.5px] space-y-[4px]">
                {data.globalSkills.filter(s => s && s.trim().length > 0).map((skill, i) => (
                  <li key={\-\} className="flex items-start"><span className="mr-[8px] mt-[5px] text-[10px] leading-none opacity-80">•</span><span className="flex-1 whitespace-pre-wrap text-justify">{skill}</span></li>
                ))}
              </ul>
            </div>
          )}

          {/* References */}
          {data.references && (
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
