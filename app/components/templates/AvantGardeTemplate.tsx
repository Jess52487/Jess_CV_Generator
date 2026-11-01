import React from "react";
import { CVData } from "../../context/CVContext";
import { cleanList, hasContactInfo, hasEducationContent, hasExperienceContent, hasText } from "./templateUtils";

export default function AvantGardeTemplate({ data }: { data: CVData }) {
  const experiences = data.experiences.filter(hasExperienceContent);
  const education = (data.education || []).filter(hasEducationContent);
  const skills = cleanList(data.globalSkills);

  return (
    <div className="template-root font-sans text-[14.5px] leading-[1.15] text-black bg-[#f4f4f0] min-h-full flex-grow p-[15mm] text-justify">
      <div className="border-[8px] border-black p-[20px] h-full flex flex-col relative overflow-clip">
        
        {/* Background Decorative Element */}
        <div className="absolute top-[-50px] right-[-50px] w-[200px] h-[200px] rounded-full bg-[#ff3366] opacity-20 pointer-events-none"></div>

        {/* Header */}
        <div className="flex flex-col items-start border-b-[4px] border-black pb-[12px] mb-[12px]">
          {hasText(data.fullName) && <h1 className="text-[32px] font-black uppercase tracking-tighter leading-none mb-[4px]">{data.fullName}</h1>}
          {hasText(data.jobTitle) && <p className="text-[18px] font-bold text-[#ff3366] tracking-widest uppercase">{data.jobTitle}</p>}
        </div>

        <div className="flex flex-row gap-[24px]">
          {/* Main Content */}
          <div className="w-[65%] flex flex-col gap-[12px] z-10 relative">
            
            {/* Summary */}
            {hasText(data.summary) && (
              <div className="mb-[12px]">
                <h2 className="text-[18px] font-black uppercase tracking-widest text-black mb-[8px] border-b-[2px] border-black pb-[4px]">Summary</h2>
                <p className="text-[14.5px] leading-[1.15] font-medium whitespace-pre-wrap text-justify">{data.summary}</p>
              </div>
            )}

            {/* Experience */}
            {experiences.length > 0 && <div className="mb-[12px]">
              <h2 className="text-[18px] font-black uppercase tracking-widest text-black mb-[8px] border-b-[2px] border-black pb-[4px]">Experience</h2>
              <div className="space-y-[12px]">
                {experiences.map(exp => (
                  <div key={exp.id} className="break-inside-avoid print:break-inside-avoid relative pl-[15px] border-l-[4px] border-black">
                    <div className="absolute w-[12px] h-[12px] bg-[#ff3366] -left-[8px] top-[4px] rounded-sm transform rotate-45"></div>
                    <div className="flex justify-between items-baseline mb-[2px]">
                      <h3 className="text-[16px] font-black">{exp.title}</h3>
                      <span className="text-[14.5px] font-bold bg-black text-white px-[6px] py-[2px] shrink-0 ml-[10px]">{exp.startDate} – {exp.endDate}</span>
                    </div>
                    <p className="text-[14.5px] font-bold text-gray-600 mb-[4px] uppercase">{exp.company}</p>
                    {cleanList(exp.skills).length > 0 && (
                      <ul className="flex flex-col space-y-[4px] text-[14.5px] font-medium space-y-[4px]">
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
                <h2 className="text-[18px] font-black uppercase tracking-widest text-black mb-[8px] border-b-[2px] border-black pb-[4px]">Education</h2>
                <div className="space-y-[12px]">
                  {education.map(edu => (
                    <div key={edu.id} className="break-inside-avoid print:break-inside-avoid relative pl-[15px] border-l-[4px] border-[#ff3366]">
                      <h3 className="text-[14.5px] font-black">{edu.institution}</h3>
                      <p className="text-[14.5px] font-bold text-gray-600 mb-[2px]">{edu.degree}</p>
                      <span className="text-[12px] font-bold tracking-widest uppercase mb-[2px] block">{edu.startYear} – {edu.endYear}</span>
                      {hasText(edu.description) && (
                        <p className="text-[14.5px] mt-[4px] font-medium whitespace-pre-wrap text-justify">{edu.description}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="w-[35%] flex flex-col gap-[12px] z-10 relative border-l-[2px] border-dashed border-black/30 pl-[24px]">
            {/* Contact */}
            {hasContactInfo(data) && <div className="mb-[12px]">
              <h2 className="text-[18px] font-black uppercase tracking-widest text-black mb-[8px] border-b-[2px] border-black pb-[4px]">Contact</h2>
              <div className="space-y-[6px] text-[12px] font-bold text-black/70 uppercase">
                {hasText(data.email) && <div className="break-words">{data.email}</div>}
                {hasText(data.phone) && <div>{data.phone}</div>}
                {hasText(data.address) && <div>{data.address}</div>}
                {hasText(data.linkedin) && <div className="break-words">{data.linkedin.replace('https://', '').replace('www.', '').replace('linkedin.com/in/', '')}</div>}
                {hasText(data.website) && <div className="break-words">{data.website.replace('https://', '').replace('www.', '')}</div>}
              </div>
            </div>}

            {/* Skills */}
            {skills.length > 0 && (
              <div className="mb-[12px]">
                <h2 className="text-[18px] font-black uppercase tracking-widest text-black mb-[8px] border-b-[2px] border-black pb-[4px]">Skills</h2>
                <ul className="flex flex-col space-y-[4px] text-[14.5px] font-bold tracking-wider uppercase space-y-[4px]">
                  {skills.map((skill, i) => (
                    <li key={`${skill}-${i}`} className="flex items-start border-b border-black/10 pb-[2px]"><span className="mr-[8px] mt-[5px] text-[10px] leading-none opacity-80">•</span><span className="flex-1 whitespace-pre-wrap text-justify">{skill}</span></li>
                  ))}
                </ul>
              </div>
            )}
            
            {/* References */}
            {hasText(data.references) && (
              <div className="mb-[12px]">
                <h2 className="text-[18px] font-black uppercase tracking-widest text-black mb-[8px] border-b-[2px] border-black pb-[4px]">References</h2>
                <p className="text-[14.5px] leading-[1.15] whitespace-pre-wrap text-justify font-bold">
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
