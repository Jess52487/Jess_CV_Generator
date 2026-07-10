import React from "react";
import { CVData } from "../../context/CVContext";

export default function GlobalDirectorTemplate({ data }: { data: CVData }) {
  return (
    <div className="font-serif text-[#1e293b] bg-[#fafafa] h-full p-12 border-8 border-double border-[#94a3b8]">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-light uppercase tracking-[0.3em] mb-3 text-[#0f172a]">{data.fullName || "Your Name"}</h1>
        <p className="text-md uppercase tracking-[0.2em] text-[#64748b] border-b border-[#cbd5e1] inline-block pb-2 px-8 mb-6">{data.jobTitle || "Your Title"}</p>
        
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs uppercase tracking-widest text-[#475569]">
          {data.email && <span>{data.email}</span>}
          {data.phone && <span>| {data.phone}</span>}
          {data.address && <span>| {data.address}</span>}
          {data.linkedin && <span>| {data.linkedin.replace('https://', '').replace('www.', '').replace('linkedin.com/in/', '')}</span>}
          {data.website && <span>| {data.website.replace('https://', '').replace('www.', '')}</span>}
          {data.github && <span>| {data.github.replace('https://', '').replace('www.', '').replace('github.com/', '')}</span>}
          {data.nationality && <span>| {data.nationality}</span>}
        </div>
      </div>

      {/* Summary */}
      {data.summary && (
        <div className="mb-10 px-6">
          <h2 className="text-sm uppercase tracking-widest text-[#0f172a] text-center mb-4">Summary</h2>
          <p className="text-sm text-justify leading-loose text-[#334155]" style={{ fontFamily: "'Times New Roman', Times, serif" }}>
            {data.summary}
          </p>
        </div>
      )}

      {/* Experience */}
      <div className="mb-10">
        <h2 className="text-sm uppercase tracking-widest text-[#0f172a] text-center mb-6 border-b border-[#cbd5e1] pb-2">Experience</h2>
        <div className="space-y-8 px-4">
          {data.experiences.map(exp => (
            <div key={exp.id} className="relative">
              <div className="flex justify-between items-baseline mb-1">
                <h3 className="text-lg font-normal text-[#0f172a]">{exp.title}</h3>
                <span className="text-xs tracking-widest text-[#64748b]">{exp.startDate} – {exp.endDate}</span>
              </div>
              <p className="text-sm uppercase tracking-widest text-[#475569] mb-3">{exp.company}</p>
              {exp.skills.length > 0 && (
                <ul className="list-disc pl-5 text-xs text-[#334155] leading-relaxed space-y-1 text-justify">
                  {exp.skills.map(skill => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
          {data.experiences.length === 0 && (
            <p className="text-center italic text-[#94a3b8] text-sm">No experience records available.</p>
          )}
        </div>
      </div>

      {/* Education & Skills Split */}
      <div className="grid grid-cols-2 gap-10 px-4">
        {/* Education */}
        <div>
          <h2 className="text-sm uppercase tracking-widest text-[#0f172a] mb-6 border-b border-[#cbd5e1] pb-2">Education</h2>
          <div className="space-y-6">
            {(data.education || []).map(edu => (
              <div key={edu.id}>
                <h3 className="text-md font-normal text-[#0f172a] mb-1">{edu.institution}</h3>
                <p className="text-xs uppercase tracking-widest text-[#475569] mb-1">{edu.degree}</p>
                <p className="text-xs text-[#64748b] mb-2">{edu.startYear} – {edu.endYear}</p>
                {edu.description && (
                  <p className="text-xs leading-relaxed text-[#334155] text-justify">{edu.description}</p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div>
          <h2 className="text-sm uppercase tracking-widest text-[#0f172a] mb-6 border-b border-[#cbd5e1] pb-2">Skills</h2>
          {data.globalSkills && data.globalSkills.length > 0 ? (
            <ol className="list-decimal pl-5 text-sm text-[#334155] space-y-2">
              {data.globalSkills.map(skill => (
                <li key={skill}>{skill}</li>
              ))}
            </ol>
          ) : (
            <p className="italic text-[#94a3b8] text-sm">No skills added.</p>
          )}
        </div>
      </div>
    </div>
  );
}
