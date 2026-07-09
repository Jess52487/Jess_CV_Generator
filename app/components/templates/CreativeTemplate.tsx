import React from "react";
import { CVData } from "../../context/CVContext";

export default function CreativeTemplate({ data }: { data: CVData }) {
  return (
    <div className="font-[family-name:var(--font-creative)] text-slate-800 bg-white">
      {/* 2-Column Grid */}
      <div className="grid grid-cols-3 gap-8">
        
        {/* Left Sidebar */}
        <div className="col-span-1 border-r border-slate-200 pr-8">
          <div className="mb-12 pt-4">
            <h1 className="text-3xl font-bold tracking-tight leading-none mb-2 text-slate-900">{data.fullName || "Your Name"}</h1>
            <p className="text-sm font-medium text-blue-600 uppercase tracking-widest">{data.jobTitle || "Your Title"}</p>
          </div>
          
          <div className="mb-10">
            <h2 className="text-xs uppercase tracking-widest text-slate-400 font-bold mb-4">Profile</h2>
            <p className="text-sm leading-relaxed text-slate-600">
              {data.summary || "Your professional summary goes here."}
            </p>
          </div>

          <div>
            <h2 className="text-xs uppercase tracking-widest text-slate-400 font-bold mb-4">Core Skills</h2>
            <div className="flex flex-col gap-2">
              {data.experiences.flatMap(e => e.skills).filter((v, i, a) => a.indexOf(v) === i).map(skill => (
                <span key={skill} className="text-sm text-slate-700 bg-slate-100 px-3 py-1 rounded-sm">{skill}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Main Content */}
        <div className="col-span-2 pt-4">
          <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-4">
            Experience
            <div className="flex-grow h-px bg-slate-200"></div>
          </h2>
          
          <div className="space-y-8">
            {data.experiences.map(exp => (
              <div key={exp.id} className="relative pl-6 border-l-2 border-slate-100">
                <div className="absolute w-3 h-3 bg-blue-500 rounded-full -left-[7px] top-1.5 border-4 border-white"></div>
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="text-lg font-bold text-slate-800">{exp.title}</h3>
                  <span className="text-xs font-medium text-slate-400 bg-slate-50 px-2 py-1 rounded">{exp.startDate} – {exp.endDate}</span>
                </div>
                <p className="text-blue-600 font-medium text-sm mb-2">{exp.company}</p>
                <div className="flex gap-2 flex-wrap mt-2">
                  {exp.skills.map(s => (
                    <span key={s} className="text-xs text-slate-500">• {s}</span>
                  ))}
                </div>
              </div>
            ))}
            {data.experiences.length === 0 && (
              <p className="text-slate-400 italic">No experience records available.</p>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
