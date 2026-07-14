import React from "react";
import { CVData } from "../../context/CVContext";

export default function TechnicalTemplate({ data }: { data: CVData }) {
  return (
    <div className="font-sans text-[14.5px] leading-[1.15] text-[#22c55e] bg-[#111827] min-h-full flex-grow p-[15mm] text-justify">
      {/* Header Info */}
      <div className="border-b-[2px] border-[#166534] pb-[12px] mb-[12px]">
        <h1 className="text-[32px] font-bold mb-[4px] tracking-tight">{`const name = "${data.fullName || 'User'}";`}</h1>
        <p className="text-[18px] text-[#4ade80] mb-[8px]">{`const role = "${data.jobTitle || 'Developer'}";`}</p>
        <div className="text-[12px] text-[#16a34a] font-mono grid grid-cols-2 gap-[4px]">
          {data.email && <div>{`email: "${data.email}"`}</div>}
          {data.phone && <div>{`phone: "${data.phone}"`}</div>}
          {data.linkedin && <div>{`linkedin: "${data.linkedin.replace('https://', '').replace('www.', '').replace('linkedin.com/in/', '')}"`}</div>}
          {data.github && <div>{`github: "${data.github.replace('https://', '').replace('www.', '').replace('github.com/', '')}"`}</div>}
          {data.website && <div>{`website: "${data.website.replace('https://', '').replace('www.', '')}"`}</div>}
          {data.address && <div>{`location: "${data.address}"`}</div>}
        </div>
      </div>

      {/* Summary */}
      {data.summary && (
        <div className="mb-[12px]">
          <h2 className="text-[18px] font-bold mb-[8px] text-[#22c55e]">{'// Summary'}</h2>
          <p className="text-[14.5px] leading-[1.15] font-mono text-[#4ade80] whitespace-pre-wrap text-justify">{data.summary}</p>
        </div>
      )}

      {/* Skills */}
      {data.globalSkills && data.globalSkills.length > 0 && (
        <div className="mb-[12px]">
          <h2 className="text-[18px] font-bold mb-[8px] text-[#22c55e]">{'// Core_Dependencies'}</h2>
          <ul className="flex flex-col space-y-[4px] text-[14.5px] text-[#4ade80] font-mono space-y-[4px]">
            {data.globalSkills.filter(s => s && s.trim().length > 0).map((skill, i) => (
              <li key={\-\} className="flex items-start"><span className="mr-[8px] mt-[5px] text-[10px] leading-none opacity-80">•</span><span className="flex-1 whitespace-pre-wrap text-justify">{skill}</span></li>
            ))}
          </ul>
        </div>
      )}

      {/* Experience */}
      <div className="mb-[12px]">
        <h2 className="text-[18px] font-bold mb-[8px] text-[#22c55e]">{'// Work_History'}</h2>
        <div className="space-y-[12px]">
          {data.experiences.map(exp => (
            <div key={exp.id} className="border-l-[2px] border-[#166534] pl-[12px]">
              <div className="flex justify-between items-baseline mb-[2px]">
                <h3 className="text-[16px] font-bold text-[#86efac]">{exp.title}</h3>
                <span className="text-[14.5px] text-[#16a34a] font-mono shrink-0 ml-[10px]">{`[ ${exp.startDate} - ${exp.endDate} ]`}</span>
              </div>
              <p className="text-[14.5px] text-[#22c55e] mb-[4px]">{`@ ${exp.company}`}</p>
              {exp.skills.length > 0 && (
                <ul className="flex flex-col space-y-[4px] text-[14.5px] font-mono text-[#4ade80] space-y-[4px]">
                  {exp.skills.filter(s => s && s.trim().length > 0).map((skill, i) => (
                    <li key={\-\} className="flex items-start"><span className="mr-[8px] mt-[5px] text-[10px] leading-none opacity-80">•</span><span className="flex-1 whitespace-pre-wrap text-justify">{skill}</span></li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Education */}
      {(data.education || []).length > 0 && (
        <div className="mb-[12px]">
          <h2 className="text-[18px] font-bold mb-[8px] text-[#22c55e]">{'// Education'}</h2>
          <div className="space-y-[12px]">
            {(data.education || []).map(edu => (
              <div key={edu.id} className="border-l-[2px] border-[#166534] pl-[12px]">
                <div className="flex justify-between items-baseline mb-[2px]">
                  <h3 className="text-[16px] font-bold text-[#86efac]">{edu.institution}</h3>
                  <span className="text-[14.5px] text-[#16a34a] font-mono shrink-0 ml-[10px]">{`[ ${edu.startYear} - ${edu.endYear} ]`}</span>
                </div>
                <p className="text-[14.5px] text-[#22c55e] mb-[4px]">{`> emit: ${edu.degree}`}</p>
                {edu.description && (
                  <p className="text-[14.5px] text-[#16a34a] font-mono whitespace-pre-wrap text-justify">{`// ${edu.description}`}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* References */}
      {data.references && (
        <div className="mt-[12px] pt-[8px] border-t-[2px] border-[#166534]">
          <h2 className="text-[18px] font-bold mb-[8px] text-[#22c55e]">{'// References'}</h2>
          <p className="text-[14.5px] font-mono text-[#4ade80] leading-[1.15] whitespace-pre-wrap text-justify">
            {data.references}
          </p>
        </div>
      )}
    </div>
  );
}
