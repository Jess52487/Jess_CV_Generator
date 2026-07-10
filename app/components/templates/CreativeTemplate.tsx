import React from "react";
import { CVData } from "../../context/CVContext";

export default function CreativeTemplate({ data }: { data: CVData }) {
  return (
    <div className="font-[family-name:var(--font-creative)] text-[#1e293b] bg-[#ffffff] min-h-full flex-grow p-10">
      {/* 2-Column Grid */}
      <div className="grid grid-cols-3 gap-10">
        
        {/* Left Sidebar */}
        <div className="col-span-1 border-r border-[#e2e8f0] pr-8 min-h-full flex-grow">
          <div className="mb-12 pt-4">
            <h1 className="text-3xl font-bold tracking-tight leading-none mb-3 text-[#0f172a]">{data.fullName || "Your Name"}</h1>
            <p className="text-sm font-medium text-[#2563eb] uppercase tracking-widest mb-6">{data.jobTitle || "Your Title"}</p>
            
            <div className="flex flex-col gap-2 text-xs font-medium text-[#64748b]">
              {data.email && <span className="flex items-center gap-2">✉ {data.email}</span>}
              {data.phone && <span className="flex items-center gap-2">☏ {data.phone}</span>}
              {data.address && <span className="flex items-center gap-2">⌂ {data.address}</span>}
              {data.linkedin && <span className="flex items-center gap-2">in/ {data.linkedin.replace('https://', '').replace('www.', '')}</span>}
              {data.website && <span className="flex items-center gap-2">↗ {data.website.replace('https://', '').replace('www.', '')}</span>}
              {data.github && <span className="flex items-center gap-2">&lt;/&gt; {data.github.replace('https://', '').replace('www.', '')}</span>}
              {data.nationality && <span className="flex items-center gap-2">⚐ {data.nationality}</span>}
            </div>
          </div>
          
          <div className="mb-12">
            <h2 className="text-xs uppercase tracking-widest text-[#94a3b8] font-bold mb-4">Summary</h2>
            <p 
              className="text-sm leading-relaxed text-[#475569] text-justify"
              style={{ fontFamily: "'Times New Roman', Times, serif" }}
            >
              {data.summary || "Your professional summary goes here."}
            </p>
          </div>

          <div>
            <h2 className="text-xs uppercase tracking-widest text-[#94a3b8] font-bold mb-4">Skills</h2>
            <ol className="list-decimal list-inside pl-4 gap-2 flex flex-col text-[#334155] text-xs font-semibold">
              {data.globalSkills && data.globalSkills.length > 0 ? (
                data.globalSkills.map(skill => (
                  <li key={skill} className="pl-1">{skill}</li>
                ))
              ) : (
                data.experiences.flatMap(e => e.skills).filter((v, i, a) => a.indexOf(v) === i).map(skill => (
                  <li key={skill} className="pl-1">{skill}</li>
                ))
              )}
            </ol>
          </div>
        </div>

        {/* Right Main Content */}
        <div className="col-span-2 pt-4 pl-4">
          <h2 className="text-xl font-bold text-[#0f172a] mb-8 flex items-center gap-4">
            Experience
            <div className="flex-grow h-px bg-[#e2e8f0]"></div>
          </h2>
          
          <div className="space-y-10">
            {data.experiences.map(exp => (
              <div key={exp.id} className="relative pl-8 border-l-2 border-[#f1f5f9]">
                <div className="absolute w-3 h-3 bg-[#3b82f6] rounded-full -left-[7px] top-1.5 border-4 border-[#ffffff]"></div>
                <div className="flex justify-between items-baseline mb-2">
                  <h3 className="text-lg font-bold text-[#1e293b]">{exp.title}</h3>
                  <span className="text-xs font-bold text-[#64748b] bg-[#f8fafc] px-2 py-1 rounded tracking-wide">{exp.startDate} – {exp.endDate}</span>
                </div>
                <p className="text-[#2563eb] font-semibold text-sm mb-3">{exp.company}</p>
                <div className="flex gap-2 flex-wrap mt-3">
                  {exp.skills.map(s => (
                    <span key={s} className="text-xs font-medium text-[#64748b] bg-[#f1f5f9] px-2 py-1 rounded-full">{s}</span>
                  ))}
                </div>
              </div>
            ))}
            {data.experiences.length === 0 && (
              <p className="text-[#94a3b8] italic">No experience records available.</p>
            )}
          </div>

          {/* Education (Optional) */}
          {data.education && data.education.length > 0 && (
            <>
              <h2 className="text-xl font-bold text-[#0f172a] mt-12 mb-8 flex items-center gap-4">
                Education
                <div className="flex-grow h-px bg-[#e2e8f0]"></div>
              </h2>
              
              <div className="space-y-8">
                {data.education.map(edu => (
                  <div key={edu.id} className="relative pl-8 border-l-2 border-[#f1f5f9]">
                    <div className="absolute w-3 h-3 bg-[#94a3b8] rounded-full -left-[7px] top-1.5 border-4 border-[#ffffff]"></div>
                    <div className="flex justify-between items-baseline mb-1">
                      <h3 className="text-lg font-bold text-[#1e293b]">{edu.institution}</h3>
                      <span className="text-xs font-bold text-[#64748b]">{edu.startYear} – {edu.endYear}</span>
                    </div>
                    <p className="text-[#475569] font-medium text-sm">{edu.degree}</p>
                    {edu.description && (
                      <p className="text-[#64748b] text-xs mt-2 leading-relaxed">{edu.description}</p>
                    )}
                  </div>
                ))}
              </div>
            </>
          )}

          {/* References */}
          {data.references && (
            <>
              <h2 className="text-sm font-black uppercase tracking-widest text-[#0f172a] mb-6 border-b border-[#e2e8f0] pb-2 mt-12">References</h2>
              <p className="text-[#475569] text-xs leading-relaxed text-justify whitespace-pre-wrap" style={{ fontFamily: "'Times New Roman', Times, serif" }}>
                {data.references}
              </p>
            </>
          )}
        </div>

      </div>
    </div>
  );
}
