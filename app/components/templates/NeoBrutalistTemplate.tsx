import React from "react";
import { CVData } from "../../context/CVContext";

export default function NeoBrutalistTemplate({ data }: { data: CVData }) {
  return (
    <div className="font-mono text-black bg-[#ffdb58] h-full p-8 leading-tight">
      <div className="border-4 border-black h-full bg-white relative shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col">
        
        {/* Header Block */}
        <div className="border-b-4 border-black p-8 bg-[#ff6b6b]">
          <h1 className="text-5xl font-black uppercase tracking-tighter mb-2 break-words">{data.fullName || "YOUR NAME"}</h1>
          <p className="text-2xl font-bold uppercase bg-black text-white inline-block px-4 py-2">{data.jobTitle || "YOUR TITLE"}</p>
        </div>

        {/* Info Ribbon */}
        <div className="border-b-4 border-black bg-[#4ecdc4] p-3 overflow-hidden flex flex-wrap gap-4 text-sm font-bold uppercase">
          {data.email && <span className="border-2 border-black bg-white px-2 py-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">{data.email}</span>}
          {data.phone && <span className="border-2 border-black bg-white px-2 py-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">{data.phone}</span>}
          {data.address && <span className="border-2 border-black bg-white px-2 py-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">{data.address}</span>}
          {data.linkedin && <span className="border-2 border-black bg-white px-2 py-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">{data.linkedin.replace('https://', '').replace('www.', '').replace('linkedin.com/in/', '')}</span>}
          {data.website && <span className="border-2 border-black bg-white px-2 py-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">{data.website.replace('https://', '').replace('www.', '')}</span>}
          {data.github && <span className="border-2 border-black bg-white px-2 py-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">{data.github.replace('https://', '').replace('www.', '').replace('github.com/', '')}</span>}
        </div>

        <div className="flex flex-row flex-grow">
          {/* Main Content */}
          <div className="w-[70%] border-r-4 border-black p-8 flex flex-col">
            
            {/* Summary */}
            {data.summary && (
              <div className="mb-8 border-4 border-black p-6 bg-[#f7fff7] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h2 className="text-2xl font-black uppercase bg-black text-white inline-block px-3 py-1 mb-4">Summary</h2>
                <p className="text-lg font-bold text-justify" style={{ fontFamily: "'Times New Roman', Times, serif" }}>
                  {data.summary}
                </p>
              </div>
            )}

            {/* Experience */}
            <div className="flex-grow">
              <h2 className="text-2xl font-black uppercase border-b-4 border-black pb-2 mb-6">Experience</h2>
              <div className="space-y-8">
                {data.experiences.map(exp => (
                  <div key={exp.id} className="border-l-8 border-black pl-4">
                    <div className="flex justify-between items-end mb-2 border-b-2 border-dashed border-black pb-1">
                      <h3 className="text-xl font-black uppercase">{exp.title}</h3>
                      <span className="text-sm font-bold bg-[#ffdb58] border-2 border-black px-2">{exp.startDate} – {exp.endDate}</span>
                    </div>
                    <p className="text-lg font-bold uppercase mb-2 text-[#ff6b6b]">{exp.company}</p>
                    {exp.skills.length > 0 && (
                      <ul className="list-disc pl-6 text-sm font-bold text-justify space-y-1">
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

          {/* Sidebar */}
          <div className="w-[30%] p-6 bg-[#f7fff7]">
            {/* Education */}
            {(data.education || []).length > 0 && (
              <div className="mb-10">
                <h2 className="text-xl font-black uppercase border-b-4 border-black pb-2 mb-4">Education</h2>
                <div className="space-y-6">
                  {(data.education || []).map(edu => (
                    <div key={edu.id} className="border-2 border-black p-3 bg-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                      <h3 className="text-md font-black uppercase mb-1">{edu.institution}</h3>
                      <p className="text-sm font-bold bg-black text-white inline-block px-1 mb-2">{edu.degree}</p>
                      <div className="text-xs font-bold block mb-2">{edu.startYear} – {edu.endYear}</div>
                      {edu.description && (
                        <p className="text-xs font-bold text-justify border-t-2 border-black pt-2">{edu.description}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Skills */}
            {data.globalSkills && data.globalSkills.length > 0 && (
              <div>
                <h2 className="text-xl font-black uppercase border-b-4 border-black pb-2 mb-4">Skills</h2>
                <ol className="list-decimal pl-6 text-sm font-bold space-y-2 uppercase">
                  {data.globalSkills.map(skill => (
                    <li key={skill} className="border-b-2 border-dotted border-black">{skill}</li>
                  ))}
                </ol>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
