import React from "react";
import { CVData } from "../../context/CVContext";

export default function NeoBrutalistTemplate({ data }: { data: CVData }) {
  return (
    <div className="font-sans text-[14.5px] leading-[1.15] text-black bg-[#ffd803] min-h-full flex-grow p-[15mm] text-left">
      <div className="border-[4px] border-black bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-[20px] h-full flex flex-col">
        
        {/* Header Block */}
        <div className="border-b-[4px] border-black pb-[12px] mb-[12px]">
          <h1 className="text-[32px] font-black uppercase tracking-tight mb-[4px]">{data.fullName || "Your Name"}</h1>
          <div className="inline-block bg-[#e53170] text-white px-[8px] py-[4px] border-[2px] border-black text-[18px] font-bold uppercase mb-[8px]">
            {data.jobTitle || "Your Title"}
          </div>
          
          <div className="flex flex-wrap gap-[8px] text-[12px] font-bold mt-[4px]">
            {data.email && <span className="border-[2px] border-black px-[6px] py-[2px] bg-[#bae8e8]">{data.email}</span>}
            {data.phone && <span className="border-[2px] border-black px-[6px] py-[2px] bg-[#bae8e8]">{data.phone}</span>}
            {data.address && <span className="border-[2px] border-black px-[6px] py-[2px] bg-[#bae8e8]">{data.address}</span>}
            {data.linkedin && <span className="border-[2px] border-black px-[6px] py-[2px] bg-[#bae8e8]">{data.linkedin.replace('https://', '').replace('www.', '').replace('linkedin.com/in/', '')}</span>}
            {data.website && <span className="border-[2px] border-black px-[6px] py-[2px] bg-[#bae8e8]">{data.website.replace('https://', '').replace('www.', '')}</span>}
          </div>
        </div>

        <div className="flex flex-row gap-[24px]">
          {/* Main Content */}
          <div className="w-[65%] flex flex-col gap-[12px]">
            
            {/* Summary */}
            {data.summary && (
              <div className="mb-[12px]">
                <h2 className="text-[18px] font-black uppercase border-b-[4px] border-black pb-[4px] mb-[8px]">Summary</h2>
                <div className="bg-[#f2f4f6] border-[2px] border-black p-[10px] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <p className="text-[14.5px] leading-[1.15] font-bold whitespace-pre-wrap">{data.summary}</p>
                </div>
              </div>
            )}

            {/* Experience */}
            <div className="mb-[12px]">
              <h2 className="text-[18px] font-black uppercase border-b-[4px] border-black pb-[4px] mb-[8px]">Experience</h2>
              <div className="space-y-[12px]">
                {data.experiences.map(exp => (
                  <div key={exp.id} className="border-[2px] border-black p-[10px] bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    <div className="flex justify-between items-baseline mb-[2px]">
                      <h3 className="text-[16px] font-black bg-[#ffd803] px-[4px] border-[2px] border-black inline-block">{exp.title}</h3>
                      <span className="text-[14.5px] font-bold border-b-[2px] border-dashed border-black shrink-0 ml-[10px]">{exp.startDate} – {exp.endDate}</span>
                    </div>
                    <p className="text-[14.5px] font-bold uppercase mb-[4px]">{exp.company}</p>
                    {exp.skills.length > 0 && (
                      <ul className="list-disc list-outside pl-[20px] text-[14.5px] font-bold space-y-[4px]">
                        {exp.skills.filter(s => s.trim() !== "").map(skill => (
                          <li key={skill}>{skill}</li>
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
                <h2 className="text-[18px] font-black uppercase border-b-[4px] border-black pb-[4px] mb-[8px]">Education</h2>
                <div className="space-y-[12px]">
                  {(data.education || []).map(edu => (
                    <div key={edu.id} className="border-[2px] border-black p-[10px] bg-[#bae8e8] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                      <h3 className="text-[14.5px] font-black">{edu.institution}</h3>
                      <p className="text-[14.5px] font-bold mb-[2px]">{edu.degree}</p>
                      <span className="text-[12px] font-bold uppercase border-[2px] border-black px-[4px] bg-white inline-block mb-[2px]">{edu.startYear} – {edu.endYear}</span>
                      {edu.description && (
                        <p className="text-[14.5px] mt-[4px] font-bold whitespace-pre-wrap">{edu.description}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Skills */}
            {data.globalSkills && data.globalSkills.length > 0 && (
              <div className="mb-[12px]">
                <h2 className="text-[18px] font-black uppercase border-b-[4px] border-black pb-[4px] mb-[8px]">Skills</h2>
                <ul className="list-disc list-outside pl-[20px] text-[14.5px] font-bold space-y-[4px] uppercase">
                  {data.globalSkills.filter(s => s.trim() !== "").map(skill => (
                    <li key={skill} className="border-b-[2px] border-dotted border-black">{skill}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* References */}
            {data.references && (
              <div className="mb-[12px]">
                <h2 className="text-[18px] font-black uppercase border-b-[4px] border-black pb-[4px] mb-[8px]">References</h2>
                <p className="text-[14.5px] font-bold whitespace-pre-wrap">
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
