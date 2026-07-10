import React from "react";
import { CVData } from "../../context/CVContext";

export default function GlassmorphismTemplate({ data }: { data: CVData }) {
  return (
    <div className="font-sans text-white min-h-full flex-grow p-8 relative overflow-clip" style={{ background: "linear-gradient(135deg, #4f46e5 0%, #ec4899 100%)" }}>
      {/* Background blobs for glass effect */}
      <div className="absolute top-[-10%] left-[-10%] w-[300px] h-[300px] rounded-full bg-white opacity-20 blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] rounded-full bg-yellow-300 opacity-20 blur-3xl pointer-events-none"></div>
      
      <div className="flex flex-col min-h-full flex-grow gap-6 relative z-10">
        
        {/* Header Block - Glass */}
        <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-2xl shadow-xl flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h1 className="text-4xl font-extrabold tracking-tight mb-2 drop-shadow-md">{data.fullName || "Your Name"}</h1>
            <p className="text-lg font-medium text-white/90 tracking-wider uppercase drop-shadow-sm">{data.jobTitle || "Your Title"}</p>
          </div>
          
          <div className="flex flex-wrap justify-center md:justify-end gap-3 text-xs font-medium max-w-lg">
            {data.email && <span className="bg-black/20 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">{data.email}</span>}
            {data.phone && <span className="bg-black/20 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">{data.phone}</span>}
            {data.address && <span className="bg-black/20 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">{data.address}</span>}
            {data.linkedin && <span className="bg-black/20 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">{data.linkedin.replace('https://', '').replace('www.', '').replace('linkedin.com/in/', '')}</span>}
            {data.website && <span className="bg-black/20 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">{data.website.replace('https://', '').replace('www.', '')}</span>}
            {data.github && <span className="bg-black/20 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">{data.github.replace('https://', '').replace('www.', '').replace('github.com/', '')}</span>}
          </div>
        </div>

        <div className="flex flex-row gap-6 flex-grow">
          {/* Main Content (Left) */}
          <div className="w-[65%] flex flex-col gap-6">
            
            {/* Summary */}
            {data.summary && (
              <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-6 rounded-2xl shadow-lg">
                <h2 className="text-lg font-bold uppercase tracking-widest mb-4 text-white/90 border-b border-white/20 pb-2 inline-block">Summary</h2>
                <p className="text-sm leading-relaxed text-justify text-white drop-shadow-sm" style={{ fontFamily: "'Times New Roman', Times, serif" }}>
                  {data.summary}
                </p>
              </div>
            )}

            {/* Experience */}
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-6 rounded-2xl shadow-lg flex-grow">
              <h2 className="text-lg font-bold uppercase tracking-widest mb-6 text-white/90 border-b border-white/20 pb-2 inline-block">Experience</h2>
              <div className="space-y-6">
                {data.experiences.map(exp => (
                  <div key={exp.id} className="relative pl-6 before:absolute before:left-0 before:top-2 before:bottom-0 before:w-0.5 before:bg-white/30">
                    <div className="absolute left-[-4px] top-2 w-2.5 h-2.5 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)]"></div>
                    <div className="flex justify-between items-baseline mb-1">
                      <h3 className="text-xl font-bold text-white drop-shadow-sm">{exp.title}</h3>
                      <span className="text-xs font-semibold bg-white/20 px-2 py-1 rounded-md">{exp.startDate} – {exp.endDate}</span>
                    </div>
                    <p className="text-sm font-medium text-white/80 mb-3">{exp.company}</p>
                    {exp.skills.length > 0 && (
                      <ul className="list-disc pl-5 text-sm leading-relaxed text-justify text-white/90">
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

          {/* Sidebar (Right) */}
          <div className="w-[35%] flex flex-col gap-6">
            
            {/* Skills */}
            {data.globalSkills && data.globalSkills.length > 0 && (
              <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-6 rounded-2xl shadow-lg">
                <h2 className="text-lg font-bold uppercase tracking-widest mb-4 text-white/90 border-b border-white/20 pb-2 inline-block">Skills</h2>
                <ol className="list-decimal list-inside pl-5 text-sm font-medium space-y-2 text-white/90">
                  {data.globalSkills.map(skill => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ol>
              </div>
            )}

            {/* Education */}
            {(data.education || []).length > 0 && (
              <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-6 rounded-2xl shadow-lg flex-grow">
                <h2 className="text-lg font-bold uppercase tracking-widest mb-4 text-white/90 border-b border-white/20 pb-2 inline-block">Education</h2>
                <div className="space-y-6">
                  {(data.education || []).map(edu => (
                    <div key={edu.id} className="bg-black/10 rounded-xl p-4 border border-white/10">
                      <h3 className="text-md font-bold mb-1">{edu.institution}</h3>
                      <p className="text-xs font-semibold text-white/80 mb-2">{edu.degree}</p>
                      <div className="text-[10px] font-bold tracking-widest uppercase mb-2 inline-block bg-white/20 px-2 py-0.5 rounded">
                        {edu.startYear} — {edu.endYear}
                      </div>
                      {edu.description && (
                        <p className="text-xs leading-relaxed text-justify text-white/90">{edu.description}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* References */}
            {data.references && (
              <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-6 rounded-2xl shadow-lg mt-6">
                <h2 className="text-lg font-bold uppercase tracking-widest mb-4 text-white/90 border-b border-white/20 pb-2 inline-block">References</h2>
                <p className="text-sm leading-relaxed text-justify text-white/90 whitespace-pre-wrap">
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
