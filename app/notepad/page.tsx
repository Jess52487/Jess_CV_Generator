"use client";

import Header from "../components/layout/Header";
import SideNav from "../components/layout/SideNav";
import Footer from "../components/layout/Footer";
import { useCVContext, Experience, Education } from "../context/CVContext";
import { useRouter } from "next/navigation";
import { useState, useMemo } from "react";

type Tab = "Profile" | "Experience" | "Education" | "Skills";

export default function Notepad() {
  const { 
    data, updateField, 
    addExperience, updateExperience, deleteExperience,
    addEducation, updateEducation, deleteEducation,
    finalizeDraft
  } = useCVContext();
  const router = useRouter();

  const [activeTab, setActiveTab] = useState<Tab>("Profile");

  // State for inline Experience Form
  const [isEditingExp, setIsEditingExp] = useState(false);
  const [currentExp, setCurrentExp] = useState<Experience | null>(null);
  const [expIsPresent, setExpIsPresent] = useState(false);

  // State for inline Education Form
  const [isEditingEdu, setIsEditingEdu] = useState(false);
  const [currentEdu, setCurrentEdu] = useState<Education | null>(null);
  const [eduIsCurrent, setEduIsCurrent] = useState(false);

  // Profile Optional Fields Toggle
  const [showLinkedIn, setShowLinkedIn] = useState(!!data.linkedin);
  const [showWebsite, setShowWebsite] = useState(!!data.website);
  const [showGitHub, setShowGitHub] = useState(!!data.github);
  const [showNationality, setShowNationality] = useState(!!data.nationality);

  const handleSave = () => {
    finalizeDraft();
    router.push("/export");
  };

  const handleClear = () => {
    updateField("fullName", "");
    updateField("jobTitle", "");
    updateField("email", "");
    updateField("phone", "");
    updateField("address", "");
    updateField("linkedin", "");
    updateField("website", "");
    updateField("github", "");
    updateField("nationality", "");
    updateField("summary", "");
    updateField("experiences", []);
    updateField("education", []);
    updateField("globalSkills", []);
  };

  // --- Experience Handlers ---
  const openNewExpForm = () => {
    setCurrentExp({ id: Date.now().toString(), title: "", company: "", startDate: "", endDate: "", skills: [] });
    setExpIsPresent(false);
    setIsEditingExp(true);
  };
  const openEditExpForm = (exp: Experience) => {
    setCurrentExp({ ...exp });
    setExpIsPresent(exp.endDate.toLowerCase() === "present");
    setIsEditingExp(true);
  };
  const saveExpForm = () => {
    if (currentExp) {
      const expToSave = { ...currentExp, endDate: expIsPresent ? "Present" : currentExp.endDate };
      if (data.experiences.some(e => e.id === expToSave.id)) updateExperience(expToSave.id, expToSave);
      else addExperience(expToSave);
    }
    setIsEditingExp(false);
    setCurrentExp(null);
  };
  const cancelExpForm = () => {
    setIsEditingExp(false);
    setCurrentExp(null);
  };

  // --- Education Handlers ---
  const openNewEduForm = () => {
    setCurrentEdu({ id: Date.now().toString(), institution: "", degree: "", startYear: "", endYear: "", description: "" });
    setEduIsCurrent(false);
    setIsEditingEdu(true);
  };
  const openEditEduForm = (edu: Education) => {
    setCurrentEdu({ ...edu });
    setEduIsCurrent(edu.endYear.toLowerCase() === "present" || edu.endYear.toLowerCase() === "current");
    setIsEditingEdu(true);
  };
  const saveEduForm = () => {
    if (currentEdu) {
      const eduToSave = { ...currentEdu, endYear: eduIsCurrent ? "Present" : currentEdu.endYear };
      if ((data.education || []).some(e => e.id === eduToSave.id)) updateEducation(eduToSave.id, eduToSave);
      else addEducation(eduToSave);
    }
    setIsEditingEdu(false);
    setCurrentEdu(null);
  };
  const cancelEduForm = () => {
    setIsEditingEdu(false);
    setCurrentEdu(null);
  };

  // --- Skills Recommendation Engine ---
  const suggestedSkills = useMemo(() => {
    const title = (data.jobTitle || "").toLowerCase();
    const suggestions: string[] = [];
    
    if (title.includes("develop") || title.includes("engineer") || title.includes("program")) {
      suggestions.push("JavaScript", "TypeScript", "React", "Node.js", "Git", "SQL", "Python", "Agile");
    } else if (title.includes("design") || title.includes("ux") || title.includes("ui")) {
      suggestions.push("Figma", "UI/UX", "Wireframing", "Prototyping", "Adobe Creative Suite", "User Research");
    } else if (title.includes("manag") || title.includes("lead") || title.includes("direct")) {
      suggestions.push("Leadership", "Project Management", "Agile", "Scrum", "Strategy", "Cross-functional Team Leadership");
    } else if (title.includes("data") || title.includes("analy")) {
      suggestions.push("SQL", "Python", "Data Analysis", "Tableau", "Excel", "Machine Learning", "Statistics");
    } else {
      suggestions.push("Communication", "Problem Solving", "Teamwork", "Time Management", "Adaptability");
    }
    
    // Filter out skills already in the globalSkills array
    const currentSkillsLwr = (data.globalSkills || []).map(s => s.toLowerCase());
    return suggestions.filter(s => !currentSkillsLwr.includes(s.toLowerCase())).slice(0, 8);
  }, [data.jobTitle, data.globalSkills]);

  const addSuggestedSkill = (skill: string) => {
    const current = [...(data.globalSkills || [])];
    if (!current.includes(skill)) {
      updateField("globalSkills", [...current, skill]);
    }
  };

  return (
    <>
      <Header />
      <SideNav />

      <main className="pt-24 pb-20 px-4 md:pl-32 md:pr-12 flex justify-center min-h-screen relative z-20">
        <div className="max-w-4xl w-full relative">
          
          {/* Manila Folder Tabs */}
          <div className="flex gap-1 pl-4 relative z-10 mb-[-1px]">
            {(["Profile", "Experience", "Education", "Skills"] as Tab[]).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 rounded-t-lg font-[family-name:var(--font-label-stamp)] text-sm uppercase tracking-wider font-bold border-t border-l border-r border-[#d1d5db] transition-all
                  ${activeTab === tab 
                    ? "bg-white text-[var(--color-primary)] border-b-white z-20 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] relative" 
                    : "bg-[#f3e5ab] text-[#78716c] hover:bg-[#e7d590] z-0"}`}
                style={activeTab === tab ? { borderBottomColor: 'white' } : {}}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* The Legal Pad */}
          <div className="bg-white paper-shadow rounded-sm rounded-tl-none overflow-hidden relative min-h-[900px] flex flex-col border border-[#d1d5db]">
            
            {/* Notepad Header */}
            <div className="bg-[var(--color-surface-container-high)] h-12 flex items-center px-8 border-b border-[var(--color-outline-variant)]">
              <span className="font-[family-name:var(--font-label-stamp)] text-[14px] text-[var(--color-on-surface-variant)] uppercase tracking-tighter">
                Subject: {activeTab} Details
              </span>
              <span className="ml-auto font-[family-name:var(--font-label-stamp)] text-[14px] text-[var(--color-on-surface-variant)]">
                Date: {new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}
              </span>
            </div>
            
            {/* Paper Surface */}
            <div className="flex-grow legal-pad-grain p-10 md:p-16">
              <div className="legal-pad-margin absolute left-0 top-0 w-px h-full"></div>
              <div className="relative z-10 space-y-12">
                
                {/* --- TAB CONTENT: PROFILE --- */}
                {activeTab === "Profile" && (
                  <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
                    <div className="stamped border-2 border-[var(--color-primary)]/20 p-4 inline-block transform -rotate-1 mb-8">
                      <h2 className="font-[family-name:var(--font-headline-md)] text-[24px] text-[var(--color-primary)] uppercase font-bold">Personal Details</h2>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                      <div className="space-y-2">
                        <label className="block font-[family-name:var(--font-label-stamp)] text-[14px] text-[var(--color-on-surface-variant)] uppercase embossed-text">Full Name</label>
                        <div className="relative group">
                          <input 
                            className="w-full bg-[var(--color-surface-container-low)] border-none rounded-sm py-3 px-4 font-[family-name:var(--font-body-lg)] text-[18px] text-[var(--color-on-surface)] inner-indent focus:ring-2 focus:ring-[var(--color-primary-container)] placeholder:opacity-40 transition-all outline-none" 
                            placeholder="e.g. Jonathan Deskman" 
                            type="text" 
                            value={data.fullName || ""}
                            onChange={(e) => updateField("fullName", e.target.value)}
                          />
                          <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[var(--color-primary)] transition-all duration-300 group-focus-within:w-full"></div>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <label className="block font-[family-name:var(--font-label-stamp)] text-[14px] text-[var(--color-on-surface-variant)] uppercase embossed-text">Job Title</label>
                        <div className="relative group">
                          <input 
                            className="w-full bg-[var(--color-surface-container-low)] border-none rounded-sm py-3 px-4 font-[family-name:var(--font-body-lg)] text-[18px] text-[var(--color-on-surface)] inner-indent focus:ring-2 focus:ring-[var(--color-primary-container)] placeholder:opacity-40 transition-all outline-none" 
                            placeholder="Executive Suite Manager" 
                            type="text" 
                            value={data.jobTitle || ""}
                            onChange={(e) => updateField("jobTitle", e.target.value)}
                          />
                          <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[var(--color-primary)] transition-all duration-300 group-focus-within:w-full"></div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="block font-[family-name:var(--font-label-stamp)] text-[14px] text-[var(--color-on-surface-variant)] uppercase embossed-text">Email Address</label>
                        <div className="relative group">
                          <input 
                            className="w-full bg-[var(--color-surface-container-low)] border-none rounded-sm py-3 px-4 font-[family-name:var(--font-body-lg)] text-[18px] text-[var(--color-on-surface)] inner-indent focus:ring-2 focus:ring-[var(--color-primary-container)] placeholder:opacity-40 transition-all outline-none" 
                            placeholder="e.g. hello@example.com" 
                            type="email" 
                            value={data.email || ""}
                            onChange={(e) => updateField("email", e.target.value)}
                          />
                          <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[var(--color-primary)] transition-all duration-300 group-focus-within:w-full"></div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="block font-[family-name:var(--font-label-stamp)] text-[14px] text-[var(--color-on-surface-variant)] uppercase embossed-text">Phone Number</label>
                        <div className="relative group">
                          <input 
                            className="w-full bg-[var(--color-surface-container-low)] border-none rounded-sm py-3 px-4 font-[family-name:var(--font-body-lg)] text-[18px] text-[var(--color-on-surface)] inner-indent focus:ring-2 focus:ring-[var(--color-primary-container)] placeholder:opacity-40 transition-all outline-none" 
                            placeholder="e.g. +1 555 123 4567" 
                            type="tel" 
                            value={data.phone || ""}
                            onChange={(e) => updateField("phone", e.target.value)}
                          />
                          <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[var(--color-primary)] transition-all duration-300 group-focus-within:w-full"></div>
                        </div>
                      </div>

                      <div className="md:col-span-2 space-y-2">
                        <label className="block font-[family-name:var(--font-label-stamp)] text-[14px] text-[var(--color-on-surface-variant)] uppercase embossed-text">Address</label>
                        <div className="relative group">
                          <input 
                            className="w-full bg-[var(--color-surface-container-low)] border-none rounded-sm py-3 px-4 font-[family-name:var(--font-body-lg)] text-[18px] text-[var(--color-on-surface)] inner-indent focus:ring-2 focus:ring-[var(--color-primary-container)] placeholder:opacity-40 transition-all outline-none" 
                            placeholder="e.g. New York, NY" 
                            type="text" 
                            value={data.address || ""}
                            onChange={(e) => updateField("address", e.target.value)}
                          />
                          <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[var(--color-primary)] transition-all duration-300 group-focus-within:w-full"></div>
                        </div>
                      </div>
                      
                      <div className="md:col-span-2 space-y-2 mt-4">
                        <label className="block font-[family-name:var(--font-label-stamp)] text-[14px] text-[var(--color-on-surface-variant)] uppercase embossed-text">Professional Summary</label>
                        <div className="relative group">
                          <textarea 
                            className="w-full bg-[var(--color-surface-container-low)] border-none rounded-sm py-3 px-4 text-[18px] text-[var(--color-on-surface)] inner-indent focus:ring-2 focus:ring-[var(--color-primary-container)] placeholder:opacity-40 transition-all resize-none leading-[28px] outline-none text-justify" 
                            style={{ fontFamily: "'Times New Roman', Times, serif" }}
                            placeholder="Describe your career achievements here..." 
                            rows={6}
                            value={data.summary || ""}
                            onChange={(e) => updateField("summary", e.target.value)}
                          ></textarea>
                          <div className="absolute inset-0 pointer-events-none opacity-5 px-4 py-3 bg-[linear-gradient(rgba(135,206,235,1)_1px,transparent_1px)] bg-[length:100%_28px]"></div>
                        </div>
                      </div>

                      {/* Optional Information Toggles */}
                      <div className="md:col-span-2 mt-6">
                        <p className="font-[family-name:var(--font-body-md)] text-sm text-[var(--color-on-surface-variant)] italic mb-4 border-t border-[var(--color-outline-variant)] pt-4">
                          Add additional information to your CV (optional):
                        </p>
                        <div className="flex flex-wrap gap-3">
                          <button onClick={() => setShowLinkedIn(!showLinkedIn)} className={`px-4 py-1.5 rounded-full text-sm font-bold border transition-colors ${showLinkedIn ? 'bg-[var(--color-primary)] text-white border-[var(--color-primary)]' : 'bg-transparent text-[var(--color-primary)] border-[var(--color-primary)] hover:bg-[var(--color-primary)]/10'}`}>
                            LinkedIn {showLinkedIn ? '✓' : '+'}
                          </button>
                          <button onClick={() => setShowWebsite(!showWebsite)} className={`px-4 py-1.5 rounded-full text-sm font-bold border transition-colors ${showWebsite ? 'bg-[var(--color-primary)] text-white border-[var(--color-primary)]' : 'bg-transparent text-[var(--color-primary)] border-[var(--color-primary)] hover:bg-[var(--color-primary)]/10'}`}>
                            Website {showWebsite ? '✓' : '+'}
                          </button>
                          <button onClick={() => setShowGitHub(!showGitHub)} className={`px-4 py-1.5 rounded-full text-sm font-bold border transition-colors ${showGitHub ? 'bg-[var(--color-primary)] text-white border-[var(--color-primary)]' : 'bg-transparent text-[var(--color-primary)] border-[var(--color-primary)] hover:bg-[var(--color-primary)]/10'}`}>
                            GitHub {showGitHub ? '✓' : '+'}
                          </button>
                          <button onClick={() => setShowNationality(!showNationality)} className={`px-4 py-1.5 rounded-full text-sm font-bold border transition-colors ${showNationality ? 'bg-[var(--color-primary)] text-white border-[var(--color-primary)]' : 'bg-transparent text-[var(--color-primary)] border-[var(--color-primary)] hover:bg-[var(--color-primary)]/10'}`}>
                            Nationality {showNationality ? '✓' : '+'}
                          </button>
                        </div>

                        {/* Optional Fields Container */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 mt-6">
                          {showLinkedIn && (
                            <div className="space-y-2 animate-in fade-in slide-in-from-top-2 group">
                              <label className="text-xs uppercase font-[family-name:var(--font-label-stamp)] text-[var(--color-on-surface-variant)] embossed-text">LinkedIn</label>
                              <div className="relative">
                                <input type="text" className="w-full bg-[var(--color-surface-container-low)] border-none rounded-sm py-3 px-4 font-[family-name:var(--font-body-lg)] text-[18px] text-[var(--color-on-surface)] inner-indent focus:ring-2 focus:ring-[var(--color-primary-container)] placeholder:opacity-40 transition-all outline-none" value={data.linkedin || ""} onChange={e => updateField("linkedin", e.target.value)} placeholder="linkedin.com/in/johndoe"/>
                                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[var(--color-primary)] transition-all duration-300 group-focus-within:w-full"></div>
                              </div>
                            </div>
                          )}
                          {showWebsite && (
                            <div className="space-y-2 animate-in fade-in slide-in-from-top-2 group">
                              <label className="text-xs uppercase font-[family-name:var(--font-label-stamp)] text-[var(--color-on-surface-variant)] embossed-text">Personal Website</label>
                              <div className="relative">
                                <input type="text" className="w-full bg-[var(--color-surface-container-low)] border-none rounded-sm py-3 px-4 font-[family-name:var(--font-body-lg)] text-[18px] text-[var(--color-on-surface)] inner-indent focus:ring-2 focus:ring-[var(--color-primary-container)] placeholder:opacity-40 transition-all outline-none" value={data.website || ""} onChange={e => updateField("website", e.target.value)} placeholder="johndoe.com"/>
                                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[var(--color-primary)] transition-all duration-300 group-focus-within:w-full"></div>
                              </div>
                            </div>
                          )}
                          {showGitHub && (
                            <div className="space-y-2 animate-in fade-in slide-in-from-top-2 group">
                              <label className="text-xs uppercase font-[family-name:var(--font-label-stamp)] text-[var(--color-on-surface-variant)] embossed-text">GitHub</label>
                              <div className="relative">
                                <input type="text" className="w-full bg-[var(--color-surface-container-low)] border-none rounded-sm py-3 px-4 font-[family-name:var(--font-body-lg)] text-[18px] text-[var(--color-on-surface)] inner-indent focus:ring-2 focus:ring-[var(--color-primary-container)] placeholder:opacity-40 transition-all outline-none" value={data.github || ""} onChange={e => updateField("github", e.target.value)} placeholder="github.com/johndoe"/>
                                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[var(--color-primary)] transition-all duration-300 group-focus-within:w-full"></div>
                              </div>
                            </div>
                          )}
                          {showNationality && (
                            <div className="space-y-2 animate-in fade-in slide-in-from-top-2 group">
                              <label className="text-xs uppercase font-[family-name:var(--font-label-stamp)] text-[var(--color-on-surface-variant)] embossed-text">Nationality</label>
                              <div className="relative">
                                <input type="text" className="w-full bg-[var(--color-surface-container-low)] border-none rounded-sm py-3 px-4 font-[family-name:var(--font-body-lg)] text-[18px] text-[var(--color-on-surface)] inner-indent focus:ring-2 focus:ring-[var(--color-primary-container)] placeholder:opacity-40 transition-all outline-none" value={data.nationality || ""} onChange={e => updateField("nationality", e.target.value)} placeholder="e.g. Canadian"/>
                                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[var(--color-primary)] transition-all duration-300 group-focus-within:w-full"></div>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* --- TAB CONTENT: EXPERIENCE --- */}
                {activeTab === "Experience" && (
                  <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
                    <div className="flex items-center justify-between border-b-2 border-dotted border-[var(--color-outline-variant)] pb-2 mb-8">
                      <h2 className="font-[family-name:var(--font-headline-md)] text-[24px] text-[var(--color-secondary)] uppercase font-bold">Experience History</h2>
                      {!isEditingExp && (
                        <button onClick={openNewExpForm} className="paperclip-btn flex items-center gap-2 px-4 py-1 rounded-sm text-[var(--color-secondary)] font-[family-name:var(--font-label-stamp)] text-[14px]">
                          <span className="material-symbols-outlined text-sm" data-icon="add">add</span>
                          ATTACH RECORD
                        </button>
                      )}
                    </div>
                    
                    {isEditingExp && currentExp && (
                      <div className="mb-8 p-6 bg-yellow-50 border border-yellow-200 shadow-lg rounded-sm relative transform rotate-1">
                        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-12 h-4 bg-red-500/20 shadow-sm tape-strip"></div>
                        <h3 className="font-[family-name:var(--font-headline-md)] text-lg mb-4 text-yellow-900 border-b border-yellow-200 pb-2">Experience Form</h3>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                          <div className="space-y-1"><label className="text-xs uppercase font-[family-name:var(--font-label-stamp)] text-yellow-800">Job Title</label><input type="text" className="w-full bg-white/50 border-b border-yellow-300 px-2 py-1 outline-none font-[family-name:var(--font-body-md)]" value={currentExp.title} onChange={e => setCurrentExp({...currentExp, title: e.target.value})} placeholder="e.g. Director"/></div>
                          <div className="space-y-1"><label className="text-xs uppercase font-[family-name:var(--font-label-stamp)] text-yellow-800">Company</label><input type="text" className="w-full bg-white/50 border-b border-yellow-300 px-2 py-1 outline-none font-[family-name:var(--font-body-md)]" value={currentExp.company} onChange={e => setCurrentExp({...currentExp, company: e.target.value})} placeholder="e.g. Acme Corp"/></div>
                          <div className="space-y-1"><label className="text-xs uppercase font-[family-name:var(--font-label-stamp)] text-yellow-800">Start Date</label><input type="text" className="w-full bg-white/50 border-b border-yellow-300 px-2 py-1 outline-none font-[family-name:var(--font-body-md)]" value={currentExp.startDate} onChange={e => setCurrentExp({...currentExp, startDate: e.target.value})} placeholder="e.g. Aug 2018"/></div>
                          <div className="space-y-1">
                            <label className="text-xs uppercase font-[family-name:var(--font-label-stamp)] text-yellow-800 flex justify-between">
                              End Date
                              <label className="flex items-center gap-1 cursor-pointer normal-case font-[family-name:var(--font-body-md)] text-[10px] text-yellow-900">
                                <input type="checkbox" className="w-3 h-3" checked={expIsPresent} onChange={e => setExpIsPresent(e.target.checked)} />
                                Present
                              </label>
                            </label>
                            <input type="text" disabled={expIsPresent} className={`w-full border-b border-yellow-300 px-2 py-1 outline-none font-[family-name:var(--font-body-md)] ${expIsPresent ? 'bg-yellow-200/50 text-yellow-700/50 cursor-not-allowed' : 'bg-white/50'}`} value={expIsPresent ? "Present" : currentExp.endDate} onChange={e => setCurrentExp({...currentExp, endDate: e.target.value})} placeholder="e.g. Present"/>
                          </div>
                          <div className="md:col-span-2 space-y-1"><label className="text-xs uppercase font-[family-name:var(--font-label-stamp)] text-yellow-800">Key Skills (comma separated)</label><input type="text" className="w-full bg-white/50 border-b border-yellow-300 px-2 py-1 outline-none font-[family-name:var(--font-body-md)]" value={currentExp.skills.join(", ")} onChange={e => setCurrentExp({...currentExp, skills: e.target.value.split(",").map(s => s.trim()).filter(s => s)})} placeholder="Leadership, Strategy"/></div>
                        </div>
                        <div className="flex justify-end gap-4 mt-6">
                          <button onClick={cancelExpForm} className="text-sm font-[family-name:var(--font-label-stamp)] text-yellow-800 hover:text-yellow-900 uppercase">Cancel</button>
                          <button onClick={saveExpForm} className="text-sm font-[family-name:var(--font-label-stamp)] bg-yellow-800 text-yellow-50 px-4 py-1 rounded-sm shadow hover:bg-yellow-900 uppercase">Attach Record</button>
                        </div>
                      </div>
                    )}

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {data.experiences.map((exp) => (
                        <div key={exp.id} className="relative group bg-[var(--color-surface-container)] border border-[var(--color-outline-variant)] p-5 rounded-sm shadow-sm transition-all hover:shadow-md hover:border-[var(--color-primary)]">
                          <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity flex gap-2">
                            <button onClick={() => openEditExpForm(exp)} className="p-1.5 bg-white text-blue-600 rounded-sm shadow hover:bg-blue-50" title="Edit Record"><span className="material-symbols-outlined text-[16px] block">edit</span></button>
                            <button onClick={() => deleteExperience(exp.id)} className="p-1.5 bg-white text-red-600 rounded-sm shadow hover:bg-red-50" title="Delete Record"><span className="material-symbols-outlined text-[16px] block">delete</span></button>
                          </div>
                          <h3 className="font-[family-name:var(--font-body-lg)] text-[18px] font-bold text-[var(--color-on-surface)] pr-12">{exp.title}</h3>
                          <p className="font-[family-name:var(--font-body-md)] text-[16px] text-[var(--color-on-surface-variant)] mb-2">{exp.company}</p>
                          <div className="flex justify-between items-center mt-4">
                            <span className="font-[family-name:var(--font-label-embossed)] text-[12px] bg-[var(--color-surface-container-high)] px-2 py-1 rounded-sm border border-[var(--color-outline-variant)]">
                              {exp.startDate} - {exp.endDate}
                            </span>
                            <span className="font-[family-name:var(--font-label-stamp)] text-[10px] text-[var(--color-on-surface-variant)] uppercase">{exp.skills.length} Skills Logged</span>
                          </div>
                        </div>
                      ))}
                      {data.experiences.length === 0 && !isEditingExp && (
                        <div className="col-span-1 md:col-span-2 text-center py-12 border-2 border-dashed border-[var(--color-outline-variant)] rounded-sm">
                          <p className="font-[family-name:var(--font-body-md)] text-[var(--color-on-surface-variant)] italic">No experience records attached.</p>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* --- TAB CONTENT: EDUCATION --- */}
                {activeTab === "Education" && (
                  <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
                    <div className="flex items-center justify-between border-b-2 border-dotted border-[var(--color-outline-variant)] pb-2 mb-8">
                      <h2 className="font-[family-name:var(--font-headline-md)] text-[24px] text-[var(--color-secondary)] uppercase font-bold">Academic Records</h2>
                      {!isEditingEdu && (
                        <button onClick={openNewEduForm} className="paperclip-btn flex items-center gap-2 px-4 py-1 rounded-sm text-[var(--color-secondary)] font-[family-name:var(--font-label-stamp)] text-[14px]">
                          <span className="material-symbols-outlined text-sm" data-icon="add">add</span>
                          ATTACH RECORD
                        </button>
                      )}
                    </div>
                    
                    {isEditingEdu && currentEdu && (
                      <div className="mb-8 p-6 bg-blue-50 border border-blue-200 shadow-lg rounded-sm relative transform -rotate-1">
                        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-12 h-4 bg-gray-500/20 shadow-sm tape-strip"></div>
                        <h3 className="font-[family-name:var(--font-headline-md)] text-lg mb-4 text-blue-900 border-b border-blue-200 pb-2">Academic Form</h3>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                          <div className="space-y-1"><label className="text-xs uppercase font-[family-name:var(--font-label-stamp)] text-blue-800">Institution</label><input type="text" className="w-full bg-white/50 border-b border-blue-300 px-2 py-1 outline-none font-[family-name:var(--font-body-md)]" value={currentEdu.institution} onChange={e => setCurrentEdu({...currentEdu, institution: e.target.value})} placeholder="e.g. Harvard University"/></div>
                          <div className="space-y-1"><label className="text-xs uppercase font-[family-name:var(--font-label-stamp)] text-blue-800">Degree/Certificate</label><input type="text" className="w-full bg-white/50 border-b border-blue-300 px-2 py-1 outline-none font-[family-name:var(--font-body-md)]" value={currentEdu.degree} onChange={e => setCurrentEdu({...currentEdu, degree: e.target.value})} placeholder="e.g. B.S. Computer Science"/></div>
                          <div className="space-y-1"><label className="text-xs uppercase font-[family-name:var(--font-label-stamp)] text-blue-800">Start Year</label><input type="text" className="w-full bg-white/50 border-b border-blue-300 px-2 py-1 outline-none font-[family-name:var(--font-body-md)]" value={currentEdu.startYear} onChange={e => setCurrentEdu({...currentEdu, startYear: e.target.value})} placeholder="e.g. 2012"/></div>
                          <div className="space-y-1">
                            <label className="text-xs uppercase font-[family-name:var(--font-label-stamp)] text-blue-800 flex justify-between">
                              End Year
                              <label className="flex items-center gap-1 cursor-pointer normal-case font-[family-name:var(--font-body-md)] text-[10px] text-blue-900">
                                <input type="checkbox" className="w-3 h-3" checked={eduIsCurrent} onChange={e => setEduIsCurrent(e.target.checked)} />
                                Current
                              </label>
                            </label>
                            <input type="text" disabled={eduIsCurrent} className={`w-full border-b border-blue-300 px-2 py-1 outline-none font-[family-name:var(--font-body-md)] ${eduIsCurrent ? 'bg-blue-200/50 text-blue-700/50 cursor-not-allowed' : 'bg-white/50'}`} value={eduIsCurrent ? "Present" : currentEdu.endYear} onChange={e => setCurrentEdu({...currentEdu, endYear: e.target.value})} placeholder="e.g. 2016"/>
                          </div>
                          <div className="md:col-span-2 space-y-1">
                            <label className="text-xs uppercase font-[family-name:var(--font-label-stamp)] text-blue-800">Add a description to your education (Optional)</label>
                            <textarea className="w-full bg-white/50 border border-blue-300 rounded px-2 py-1 outline-none font-[family-name:var(--font-body-md)] text-justify" value={currentEdu.description || ""} onChange={e => setCurrentEdu({...currentEdu, description: e.target.value})} placeholder="e.g. Graduated Summa Cum Laude. Key coursework included..." rows={3}></textarea>
                          </div>
                        </div>
                        <div className="flex justify-end gap-4 mt-6">
                          <button onClick={cancelEduForm} className="text-sm font-[family-name:var(--font-label-stamp)] text-blue-800 hover:text-blue-900 uppercase">Cancel</button>
                          <button onClick={saveEduForm} className="text-sm font-[family-name:var(--font-label-stamp)] bg-blue-800 text-blue-50 px-4 py-1 rounded-sm shadow hover:bg-blue-900 uppercase">Attach Record</button>
                        </div>
                      </div>
                    )}

                    <div className="grid grid-cols-1 gap-4">
                      {(data.education || []).map((edu) => (
                        <div key={edu.id} className="relative group bg-white border border-[var(--color-outline-variant)] p-4 rounded-sm shadow-sm flex flex-col md:flex-row justify-between md:items-start">
                          <div className="absolute right-4 top-4 opacity-0 group-hover:opacity-100 transition-opacity flex gap-2">
                            <button onClick={() => openEditEduForm(edu)} className="p-1.5 bg-gray-100 text-blue-600 rounded-sm shadow hover:bg-white" title="Edit"><span className="material-symbols-outlined text-[16px] block">edit</span></button>
                            <button onClick={() => deleteEducation(edu.id)} className="p-1.5 bg-gray-100 text-red-600 rounded-sm shadow hover:bg-white" title="Delete"><span className="material-symbols-outlined text-[16px] block">delete</span></button>
                          </div>
                          <div className="flex-grow pr-16">
                            <h3 className="font-[family-name:var(--font-body-lg)] text-[18px] font-bold text-[var(--color-on-surface)]">{edu.institution}</h3>
                            <p className="font-[family-name:var(--font-body-md)] text-[16px] text-[var(--color-primary)]">{edu.degree}</p>
                            {edu.description && (
                              <p className="mt-2 text-sm text-[var(--color-on-surface-variant)] leading-relaxed bg-[var(--color-surface-container-low)] p-2 rounded border-l-2 border-[var(--color-primary)]/30">
                                {edu.description}
                              </p>
                            )}
                          </div>
                          <div className="mt-2 md:mt-0 font-[family-name:var(--font-label-embossed)] text-[12px] text-[var(--color-on-surface-variant)] flex-shrink-0 md:ml-4">
                            {edu.startYear} — {edu.endYear}
                          </div>
                        </div>
                      ))}
                      {(data.education || []).length === 0 && !isEditingEdu && (
                        <div className="text-center py-12 border-2 border-dashed border-[var(--color-outline-variant)] rounded-sm">
                          <p className="font-[family-name:var(--font-body-md)] text-[var(--color-on-surface-variant)] italic">No academic records attached. (Optional)</p>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* --- TAB CONTENT: SKILLS --- */}
                {activeTab === "Skills" && (
                  <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
                    <div className="stamped border-2 border-[var(--color-primary)]/20 p-4 inline-block transform rotate-1 mb-8">
                      <h2 className="font-[family-name:var(--font-headline-md)] text-[24px] text-[var(--color-primary)] uppercase font-bold">Global Competencies</h2>
                    </div>
                    
                    <div className="space-y-6">
                      
                      {/* Skill Suggestions Engine */}
                      {suggestedSkills.length > 0 && (
                        <div className="bg-[var(--color-primary-container)]/20 p-4 rounded-sm border border-[var(--color-primary)]/20 mb-6">
                          <p className="text-xs font-bold uppercase tracking-wider text-[var(--color-primary)] mb-3">
                            <span className="material-symbols-outlined text-[14px] align-text-bottom mr-1">lightbulb</span>
                            Suggested Skills for "{data.jobTitle || 'Your Role'}"
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {suggestedSkills.map(skill => (
                              <button 
                                key={skill}
                                onClick={() => addSuggestedSkill(skill)}
                                className="text-xs font-semibold px-3 py-1 bg-white border border-[var(--color-primary)]/40 text-[var(--color-primary)] rounded-full hover:bg-[var(--color-primary)] hover:text-white transition-colors flex items-center gap-1"
                              >
                                {skill} <span className="text-[10px]">+</span>
                              </button>
                            ))}
                          </div>
                        </div>
                      )}

                      <div className="bg-[var(--color-surface-container-low)] p-6 rounded-sm border border-[var(--color-outline-variant)]">
                        <label className="block font-[family-name:var(--font-label-stamp)] text-[14px] text-[var(--color-on-surface-variant)] uppercase embossed-text mb-4">
                          Master Skills List (Comma Separated)
                        </label>
                        <textarea 
                          className="w-full bg-white border border-[var(--color-outline-variant)] rounded-sm py-3 px-4 font-[family-name:var(--font-body-lg)] text-[18px] text-[var(--color-on-surface)] focus:ring-2 focus:ring-[var(--color-primary-container)] outline-none"
                          placeholder="e.g. Project Management, Agile, UI/UX Design..."
                          rows={4}
                          value={(data.globalSkills || []).join(", ")}
                          onChange={(e) => updateField("globalSkills", e.target.value.split(",").map(s => s.trim()).filter(s => s))}
                        ></textarea>
                        <p className="mt-3 font-[family-name:var(--font-body-md)] text-sm text-[var(--color-on-surface-variant)] italic">
                          These skills will appear in a dedicated section on your generated CV. This is optional if you prefer only listing skills under specific job roles.
                        </p>
                      </div>

                      {/* Display Badges */}
                      {(data.globalSkills || []).length > 0 && (
                        <div className="flex flex-wrap gap-2 pt-4">
                          {(data.globalSkills || []).map((skill, i) => (
                            <span key={i} className="px-3 py-1 bg-[var(--color-primary)] text-white font-[family-name:var(--font-label-stamp)] text-sm rounded-full shadow-sm">
                              {skill}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                )}

              </div>
            </div>
            
            {/* Action Bar (Footer of Notepad) */}
            <div className="bg-[var(--color-surface-container)] border-t border-[var(--color-outline-variant)] p-6 flex flex-col md:flex-row justify-between items-center gap-4">
              <button 
                onClick={handleClear}
                className="font-[family-name:var(--font-label-stamp)] text-[14px] text-[var(--color-error)] uppercase tracking-wider hover:underline"
              >
                Clear All Fields
              </button>
              
              <div className="flex gap-4">
                <button 
                  onClick={handleSave}
                  className="stamp-button bg-[var(--color-primary)] text-white px-8 py-3 rounded-sm font-[family-name:var(--font-label-stamp)] text-[14px] uppercase font-bold tracking-widest flex items-center gap-2"
                >
                  <span className="material-symbols-outlined" data-icon="task_alt">task_alt</span>
                  Finalize Draft
                </button>
              </div>
            </div>
          </div>
          
        </div>
      </main>

      <Footer />
    </>
  );
}
