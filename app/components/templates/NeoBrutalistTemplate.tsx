import React from "react";
import { CVData } from "../../context/CVContext";
import { cleanList, hasEducationContent, hasExperienceContent, hasText } from "./templateUtils";

export default function NeoBrutalistTemplate({ data }: { data: CVData }) {
  const experiences = data.experiences.filter(hasExperienceContent);
  const education = (data.education || []).filter(hasEducationContent);
  const skills = cleanList(data.globalSkills);

  return (
    <div className="template-root font-sans text-[14.5px] leading-[1.15] text-black bg-[#ffd803] min-h-full flex-grow p-[15mm] text-justify">
      <div className="border-[4px] border-black bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-[20px] h-full flex flex-col">
        
        {/* Header Block */}
        <div className="border-b-[4px] border-black pb-[12px] mb-[12px]">
          {hasText(data.fullName) && <h1 className="text-[32px] font-black uppercase tracking-tight mb-[4px]">{data.fullName}</h1>}
          {hasText(data.jobTitle) && <div className="inline-block bg-[#e53170] text-white px-[8px] py-[4px] border-[2px] border-black text-[18px] font-bold uppercase mb-[8px]">
            {data.jobTitle}
          </div>}
          
          <div className="flex flex-wrap gap-[8px] text-[12px] font-bold mt-[4px]">
            {hasText(data.email) && <span className="border-[2px] border-black px-[6px] py-[2px] bg-[#bae8e8]">{data.email}</span>}
            {hasText(data.phone) && <span className="border-[2px] border-black px-[6px] py-[2px] bg-[#bae8e8]">{data.phone}</span>}
            {hasText(data.address) && <span className="border-[2px] border-black px-[6px] py-[2px] bg-[#bae8e8]">{data.address}</span>}
            {hasText(data.linkedin) && <span className="border-[2px] border-black px-[6px] py-[2px] bg-[#bae8e8]">{data.linkedin.replace('https://', '').replace('www.', '').replace('linkedin.com/in/', '')}</span>}
            {hasText(data.website) && <span className="border-[2px] border-black px-[6px] py-[2px] bg-[#bae8e8]">{data.website.replace('https://', '').replace('www.', '')}</span>}
          </div>
        </div>

        <div className="flex flex-row gap-[24px]">
          {/* Main Content */}
          <div className="w-[65%] flex flex-col gap-[12px]">
            
            {/* Summary */}
            {hasText(data.summary) && (
              <div className="mb-[12px]">
                <h2 className="text-[18px] font-black uppercase border-b-[4px] border-black pb-[4px] mb-[8px]">Summary</h2>
                <div className="bg-[#f2f4f6] border-[2px] border-black p-[10px] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <p className="text-[14.5px] leading-[1.15] font-bold whitespace-pre-wrap text-justify">{data.summary}</p>
                </div>
              </div>
            )}

            {/* Experience */}
            {experiences.length > 0 && <div className="mb-[12px]">
              <h2 className="text-[18px] font-black uppercase border-b-[4px] border-black pb-[4px] mb-[8px]">Experience</h2>
              <div className="space-y-[12px]">
                {experiences.map(exp => (
                  <div key={exp.id} className="break-inside-avoid print:break-inside-avoid border-[2px] border-black p-[10px] bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    <div className="flex justify-between items-baseline mb-[2px]">
                      <h3 className="text-[16px] font-black bg-[#ffd803] px-[4px] border-[2px] border-black inline-block">{exp.title}</h3>
                      <span className="text-[14.5px] font-bold border-b-[2px] border-dashed border-black shrink-0 ml-[10px]">{exp.startDate} – {exp.endDate}</span>
                    </div>
                    <p className="text-[14.5px] font-bold uppercase mb-[4px]">{exp.company}</p>
                    {cleanList(exp.skills).length > 0 && (
                      <ul className="flex flex-col space-y-[4px] text-[14.5px] font-bold space-y-[4px]">
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
                <h2 className="text-[18px] font-black uppercase border-b-[4px] border-black pb-[4px] mb-[8px]">Education</h2>
                <div className="space-y-[12px]">
                  {education.map(edu => (
                    <div key={edu.id} className="break-inside-avoid print:break-inside-avoid border-[2px] border-black p-[10px] bg-[#bae8e8] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                      <h3 className="text-[14.5px] font-black">{edu.institution}</h3>
                      <p className="text-[14.5px] font-bold mb-[2px]">{edu.degree}</p>
                      <span className="text-[12px] font-bold uppercase border-[2px] border-black px-[4px] bg-white inline-block mb-[2px]">{edu.startYear} – {edu.endYear}</span>
                      {hasText(edu.description) && (
                        <p className="text-[14.5px] mt-[4px] font-bold whitespace-pre-wrap text-justify">{edu.description}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Skills */}
            {skills.length > 0 && (
              <div className="mb-[12px]">
                <h2 className="text-[18px] font-black uppercase border-b-[4px] border-black pb-[4px] mb-[8px]">Skills</h2>
                <ul className="flex flex-col space-y-[4px] text-[14.5px] font-bold space-y-[4px] uppercase">
                  {skills.map((skill, i) => (
                    <li key={`${skill}-${i}`} className="flex items-start border-b-[2px] border-dotted border-black"><span className="mr-[8px] mt-[5px] text-[10px] leading-none opacity-80">•</span><span className="flex-1 whitespace-pre-wrap text-justify">{skill}</span></li>
                  ))}
                </ul>
              </div>
            )}

            {/* References */}
            {hasText(data.references) && (
              <div className="mb-[12px]">
                <h2 className="text-[18px] font-black uppercase border-b-[4px] border-black pb-[4px] mb-[8px]">References</h2>
                <p className="text-[14.5px] font-bold whitespace-pre-wrap text-justify">
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
