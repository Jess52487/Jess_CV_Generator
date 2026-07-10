import React from "react";
import { CVData } from "../../context/CVContext";

export default function AcademicTemplate({ data }: { data: CVData }) {
  return (
    <div className="font-[family-name:'Times_New_Roman',Times,serif] text-black bg-white min-h-full flex-grow p-12 leading-relaxed">
      {/* Header */}
      <div className="text-center mb-8 border-b border-black pb-6">
        <h1 className="text-3xl font-bold uppercase tracking-wider mb-2">{data.fullName || "Your Name"}</h1>
        <p className="text-lg uppercase tracking-widest mb-4">{data.jobTitle || "Your Title"}</p>
        
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 text-sm">
          {data.email && <span>{data.email}</span>}
          {data.phone && <span>• {data.phone}</span>}
          {data.address && <span>• {data.address}</span>}
          {data.linkedin && <span>• linkedin.com/in/{data.linkedin.replace('https://', '').replace('www.', '').replace('linkedin.com/in/', '')}</span>}
          {data.website && <span>• {data.website.replace('https://', '').replace('www.', '')}</span>}
          {data.github && <span>• github.com/{data.github.replace('https://', '').replace('www.', '').replace('github.com/', '')}</span>}
          {data.nationality && <span>• {data.nationality}</span>}
        </div>
      </div>

      {/* Summary */}
      {data.summary && (
        <div className="mb-8">
          <h2 className="text-lg uppercase font-bold border-b border-black mb-3">Summary</h2>
          <p className="text-md text-justify leading-relaxed" style={{ fontFamily: "'Times New Roman', Times, serif" }}>
            {data.summary}
          </p>
        </div>
      )}

      {/* Education */}
      {(data.education || []).length > 0 && (
        <div className="mb-8">
          <h2 className="text-lg uppercase font-bold border-b border-black mb-3">Education</h2>
          <div className="space-y-4">
            {(data.education || []).map(edu => (
              <div key={edu.id}>
                <div className="flex justify-between font-bold text-md">
                  <h3>{edu.institution}</h3>
                  <span>{edu.startYear} – {edu.endYear}</span>
                </div>
                <p className="italic text-md">{edu.degree}</p>
                {edu.description && (
                  <p className="text-sm mt-1 text-justify">{edu.description}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Experience */}
      <div className="mb-8">
        <h2 className="text-lg uppercase font-bold border-b border-black mb-3">Experience</h2>
        <div className="space-y-6">
          {data.experiences.map(exp => (
            <div key={exp.id}>
              <div className="flex justify-between font-bold text-md">
                <h3>{exp.title}</h3>
                <span>{exp.startDate} – {exp.endDate}</span>
              </div>
              <p className="italic text-md">{exp.company}</p>
              {exp.skills.length > 0 && (
                <ul className="list-disc pl-5 mt-2 text-sm text-justify space-y-1">
                  {exp.skills.map(skill => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
          {data.experiences.length === 0 && (
            <p className="italic text-gray-500">No experience records available.</p>
          )}
        </div>
      </div>

      {/* Skills */}
      {data.globalSkills && data.globalSkills.length > 0 && (
        <div className="mb-8">
          <h2 className="text-lg uppercase font-bold border-b border-black mb-3">Skills</h2>
          <ol className="list-decimal list-outside pl-5 text-md space-y-1">
            {data.globalSkills.map(skill => (
              <li key={skill}>{skill}</li>
            ))}
          </ol>
        </div>
      )}

      {/* References */}
      {data.references && (
        <div className="mt-8 border-t border-black pt-4">
          <h2 className="text-lg uppercase font-bold mb-3">References</h2>
          <p className="text-md leading-relaxed text-justify whitespace-pre-wrap">
            {data.references}
          </p>
        </div>
      )}
    </div>
  );
}
