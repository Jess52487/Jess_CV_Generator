import React from "react";
import { CVData } from "../../context/CVContext";

export default function ExecutiveTemplate({ data }: { data: CVData }) {
  return (
    <div className="font-sans text-[14.5px] leading-[1.15] text-[#111827] bg-[#ffffff] min-h-full flex-grow p-[15mm] flex flex-col text-left">
      {/* Header */}
      <div className="border-b-[3px] border-[#1f2937] pb-4 mb-[12px]">
        <h1 className="text-[32px] font-bold uppercase tracking-wide mb-[4px]">{data.fullName || "Your Name"}</h1>
        <div className="flex justify-between items-end">
          <p className="text-[18px] font-medium text-[#4b5563] uppercase tracking-widest">{data.jobTitle || "Your Title"}</p>
          <div className="text-[12px] text-right font-medium text-[#6b7280] space-y-[2px]">
            {data.email && <div>{data.email}</div>}
            {data.phone && <div>{data.phone}</div>}
            {data.address && <div>{data.address}</div>}
            {data.linkedin && <div>{data.linkedin.replace('https://', '').replace('www.', '').replace('linkedin.com/in/', '')}</div>}
            {data.website && <div>{data.website.replace('https://', '').replace('www.', '')}</div>}
            {data.github && <div>{data.github.replace('https://', '').replace('www.', '').replace('github.com/', '')}</div>}
          </div>
        </div>
      </div>

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
        <div className="space-y-[8px]">
          {data.experiences.map(exp => (
            <div key={exp.id}>
              <div className="flex justify-between items-baseline mb-[2px]">
                <h3 className="text-[16px] font-bold text-[#1f2937]">{exp.title}</h3>
                <span className="text-[14.5px] text-[#4b5563] font-medium ml-4 shrink-0">{exp.startDate} – {exp.endDate}</span>
              </div>
              <p className="text-[14.5px] text-[#4b5563] font-bold mb-[4px]">{exp.company}</p>
              {exp.skills.length > 0 && (
                <ul className="flex flex-col space-y-[4px] text-[14.5px] space-y-[4px]">
                  {exp.skills.filter(s => s && s.trim().length > 0).map(skill => (
                    <li key={skill} className="flex items-start"><span className="mr-[8px] mt-[5px] text-[10px] leading-none opacity-80">•</span><span className="flex-1 whitespace-pre-wrap text-justify">{skill}</span></li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Education */}
      {(data.education || []).length > 0 && (
        <div className="mb-[12px]">
          <h2 className="text-[18px] uppercase tracking-widest border-b-[2px] border-[#d1d5db] pb-[4px] mb-[8px] font-bold text-center text-[#111827]">Education</h2>
          <div className="space-y-[8px]">
            {(data.education || []).map(edu => (
              <div key={edu.id}>
                <div className="flex justify-between items-baseline mb-[2px]">
                  <h3 className="text-[16px] font-bold text-[#1f2937]">{edu.institution}</h3>
                  <span className="text-[14.5px] text-[#4b5563] font-medium ml-4 shrink-0">{edu.startYear} – {edu.endYear}</span>
                </div>
                <p className="text-[14.5px] text-[#4b5563] font-bold">{edu.degree}</p>
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
            {data.globalSkills.filter(s => s && s.trim().length > 0).map(skill => (
              <li key={skill} className="flex items-start"><span className="mr-[8px] mt-[5px] text-[10px] leading-none opacity-80">•</span><span className="flex-1 whitespace-pre-wrap text-justify">{skill}</span></li>
            ))}
          </ul>
        </div>
      )}

      {/* References */}
      {data.references && (
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
