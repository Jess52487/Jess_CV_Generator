import React from "react";
import { CVData } from "../../context/CVContext";

export default function AvantGardeTemplate({ data }: { data: CVData }) {
  return (
    <div className="font-sans text-[#111827] bg-[#fdfbf7] min-h-full flex-grow p-0 flex flex-col relative overflow-clip">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#000000] rounded-full translate-x-1/2 -translate-y-1/2 opacity-5"></div>
      
      {/* Header - Asymmetrical */}
      <div className="pt-20 pb-12 px-16 flex justify-between items-end border-b-2 border-black/10 relative z-10">
        <div className="max-w-[60%]">
          <h1 className="text-6xl font-black tracking-tighter uppercase leading-[0.8] mb-4">{data.fullName || "Your Name"}</h1>
          <p className="text-xl font-light tracking-[0.3em] uppercase">{data.jobTitle || "Your Title"}</p>
        </div>
        
        <div className="text-right text-[10px] font-bold tracking-[0.2em] uppercase space-y-1 bg-black text-white p-4">
          {data.email && <div>{data.email}</div>}
          {data.phone && <div>{data.phone}</div>}
          {data.address && <div>{data.address}</div>}
          {data.linkedin && <div>{data.linkedin.replace('https://', '').replace('www.', '').replace('linkedin.com/in/', '')}</div>}
          {data.website && <div>{data.website.replace('https://', '').replace('www.', '')}</div>}
          {data.github && <div>{data.github.replace('https://', '').replace('www.', '').replace('github.com/', '')}</div>}
        </div>
      </div>

      <div className="flex-grow flex relative z-10">
        {/* Left Column - Very wide for content */}
        <div className="w-[65%] p-16 border-r-2 border-black/10">
          
          {/* Summary */}
          {data.summary && (
            <div className="mb-16">
              <h2 className="text-[10px] font-black tracking-[0.4em] uppercase mb-6 text-black/40">Summary</h2>
              <p className="text-xl font-light leading-relaxed text-justify" style={{ fontFamily: "'Times New Roman', Times, serif" }}>
                {data.summary}
              </p>
            </div>
          )}

          {/* Experience */}
          <div>
            <h2 className="text-[10px] font-black tracking-[0.4em] uppercase mb-10 text-black/40">Experience</h2>
            <div className="space-y-12">
              {data.experiences.map(exp => (
                <div key={exp.id} className="relative">
                  <div className="absolute -left-16 top-1 text-[10px] font-bold tracking-widest text-black/30 transform -rotate-90 origin-top-right whitespace-nowrap">
                    {exp.startDate} — {exp.endDate}
                  </div>
                  <h3 className="text-2xl font-bold tracking-tight uppercase mb-1">{exp.title}</h3>
                  <p className="text-sm font-medium tracking-widest uppercase mb-4 text-black/60">{exp.company}</p>
                  {exp.skills.length > 0 && (
                    <ul className="list-disc pl-5 text-sm leading-relaxed text-justify">
                      {exp.skills.map(skill => (
                        <li key={skill}>{skill}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="w-[35%] p-16 bg-black/5">
          {/* Education */}
          {(data.education || []).length > 0 && (
            <div className="mb-16">
              <h2 className="text-[10px] font-black tracking-[0.4em] uppercase mb-8 text-black/40">Education</h2>
              <div className="space-y-8">
                {(data.education || []).map(edu => (
                  <div key={edu.id}>
                    <h3 className="text-lg font-bold tracking-tight uppercase leading-tight mb-2">{edu.institution}</h3>
                    <p className="text-xs font-bold tracking-widest uppercase text-black/60 mb-2">{edu.degree}</p>
                    <div className="text-[10px] font-bold tracking-widest mb-2 border-t border-black/20 pt-2 inline-block">
                      {edu.startYear} — {edu.endYear}
                    </div>
                    {edu.description && (
                      <p className="text-xs leading-relaxed text-justify mt-2">{edu.description}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Skills */}
          {data.globalSkills && data.globalSkills.length > 0 && (
            <div>
              <h2 className="text-[10px] font-black tracking-[0.4em] uppercase mb-8 text-black/40">Skills</h2>
              <ol className="list-decimal pl-5 text-sm font-bold tracking-wider uppercase space-y-3">
                {data.globalSkills.map(skill => (
                  <li key={skill} className="border-b border-black/10 pb-1">{skill}</li>
                ))}
              </ol>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
