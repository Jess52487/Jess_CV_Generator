import React from "react";
import { CVData } from "../../context/CVContext";
import { cleanList, hasEducationContent, hasExperienceContent, hasText } from "./templateUtils";

export default function GlassmorphismTemplate({ data }: { data: CVData }) {
  const experiences = data.experiences.filter(hasExperienceContent);
  const education = (data.education || []).filter(hasEducationContent);
  const skills = cleanList(data.globalSkills);

  return (
    <div className="template-root font-sans text-[14.5px] leading-[1.15] text-white bg-gradient-to-br from-[#4f46e5] via-[#7c3aed] to-[#db2777] min-h-full flex-grow p-[15mm] text-justify">
      <div className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl p-[20px] h-full flex flex-col rounded-xl">
        
        {/* Header Block */}
        <div className="border-b border-white/20 pb-[12px] mb-[12px] text-center">
          {hasText(data.fullName) && <h1 className="text-[32px] font-bold uppercase tracking-widest text-white drop-shadow-md mb-[4px]">{data.fullName}</h1>}
          {hasText(data.jobTitle) && <p className="text-[18px] font-medium tracking-[0.2em] text-white/80 uppercase mb-[8px]">{data.jobTitle}</p>}
          
          <div className="flex flex-wrap justify-center gap-[12px] text-[12px] font-medium text-white/90">
            {hasText(data.email) && <span className="bg-white/10 px-[8px] py-[2px] rounded-full border border-white/10">{data.email}</span>}
            {hasText(data.phone) && <span className="bg-white/10 px-[8px] py-[2px] rounded-full border border-white/10">{data.phone}</span>}
            {hasText(data.address) && <span className="bg-white/10 px-[8px] py-[2px] rounded-full border border-white/10">{data.address}</span>}
            {hasText(data.linkedin) && <span className="bg-white/10 px-[8px] py-[2px] rounded-full border border-white/10">{data.linkedin.replace('https://', '').replace('www.', '').replace('linkedin.com/in/', '')}</span>}
          </div>
        </div>

        <div className="flex flex-row gap-[24px]">
          {/* Main Content */}
          <div className="w-[65%] flex flex-col gap-[12px]">
            
            {/* Summary */}
            {hasText(data.summary) && (
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-[12px] rounded-lg shadow-inner mb-[12px]">
                <h2 className="text-[18px] font-bold uppercase tracking-widest mb-[8px] text-white/90 border-b border-white/20 pb-[4px] inline-block">Summary</h2>
                <p className="text-[14.5px] leading-[1.15] text-white/90 whitespace-pre-wrap text-justify">{data.summary}</p>
              </div>
            )}

            {/* Experience */}
            {experiences.length > 0 && <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-[12px] rounded-lg shadow-inner mb-[12px]">
              <h2 className="text-[18px] font-bold uppercase tracking-widest mb-[8px] text-white/90 border-b border-white/20 pb-[4px] inline-block">Experience</h2>
              <div className="space-y-[12px]">
                {experiences.map((exp, idx) => (
                  <div key={exp.id} className={`relative ${idx !== experiences.length - 1 ? 'border-b border-white/10 pb-[8px]' : ''}`}>
                    <div className="flex justify-between items-baseline mb-[2px]">
                      <h3 className="text-[16px] font-bold text-white">{exp.title}</h3>
                      <span className="text-[12px] font-bold tracking-widest uppercase bg-white/20 px-[6px] py-[2px] rounded-full shrink-0 ml-[10px]">{exp.startDate} – {exp.endDate}</span>
                    </div>
                    <p className="text-[14.5px] font-semibold text-white/80 mb-[4px]">{exp.company}</p>
                    {cleanList(exp.skills).length > 0 && (
                      <ul className="flex flex-col space-y-[4px] text-[14.5px] text-white/80 space-y-[4px]">
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
            {/* Skills */}
            {skills.length > 0 && (
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-[12px] rounded-lg shadow-inner mb-[12px]">
                <h2 className="text-[18px] font-bold uppercase tracking-widest mb-[8px] text-white/90 border-b border-white/20 pb-[4px] inline-block">Skills</h2>
                <ul className="flex flex-col space-y-[4px] text-[14.5px] font-medium space-y-[4px] text-white/90">
                  {skills.map((skill, i) => (
                    <li key={`${skill}-${i}`} className="flex items-start"><span className="mr-[8px] mt-[5px] text-[10px] leading-none opacity-80">•</span><span className="flex-1 whitespace-pre-wrap text-justify">{skill}</span></li>
                  ))}
                </ul>
              </div>
            )}

            {/* Education */}
            {education.length > 0 && (
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-[12px] rounded-lg shadow-inner mb-[12px]">
                <h2 className="text-[18px] font-bold uppercase tracking-widest mb-[8px] text-white/90 border-b border-white/20 pb-[4px] inline-block">Education</h2>
                <div className="space-y-[12px]">
                  {education.map((edu, idx) => (
                    <div key={edu.id} className={`relative ${idx !== education.length - 1 ? 'border-b border-white/10 pb-[8px]' : ''}`}>
                      <h3 className="text-[14.5px] font-bold mb-[2px] text-white">{edu.institution}</h3>
                      <p className="text-[14.5px] font-semibold text-white/80 mb-[2px]">{edu.degree}</p>
                      <div className="text-[10px] font-bold tracking-widest uppercase mb-[2px] inline-block bg-white/20 px-[6px] py-[2px] rounded-full">
                        {edu.startYear} – {edu.endYear}
                      </div>
                      {hasText(edu.description) && (
                        <p className="text-[14.5px] mt-[4px] whitespace-pre-wrap text-justify text-white/90">{edu.description}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* References */}
            {hasText(data.references) && (
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-[12px] rounded-lg shadow-inner mb-[12px]">
                <h2 className="text-[18px] font-bold uppercase tracking-widest mb-[8px] text-white/90 border-b border-white/20 pb-[4px] inline-block">References</h2>
                <p className="text-[14.5px] leading-[1.15] whitespace-pre-wrap text-justify text-white/90">
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
