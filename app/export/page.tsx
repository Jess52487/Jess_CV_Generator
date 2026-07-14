"use client";

import Header from "../components/layout/Header";
import SideNav from "../components/layout/SideNav";
import Footer from "../components/layout/Footer";
import { useCVContext } from "../context/CVContext";
import { useRef, useState, useEffect } from "react";
import { useReactToPrint } from "react-to-print";
import TemplateRenderer from "../components/templates/TemplateRenderer";
import { useRouter } from "next/navigation";

export default function ExportClipboard() {
  const { savedCVs, deleteSavedCV, purgeAllData, setData } = useCVContext();
  const targetRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  // Selected CV from history
  const [selectedCVId, setSelectedCVId] = useState<string | null>(null);

  // Automatically select the most recent CV if none is selected
  useEffect(() => {
    if (savedCVs.length > 0 && !selectedCVId) {
      setSelectedCVId(savedCVs[0].id);
    } else if (savedCVs.length === 0) {
      setSelectedCVId(null);
    }
  }, [savedCVs, selectedCVId]);

  const activeCV = savedCVs.find(cv => cv.id === selectedCVId);

  const handleExport = useReactToPrint({
    contentRef: targetRef,
    documentTitle: activeCV ? `${(activeCV.data.fullName || "My_CV").trim().replace(/\s+/g, '_')}_CV` : "My_CV",
  });

  const handleDelete = (e: React.MouseEvent, id: string) => {
    e.stopPropagation(); // Prevent selecting the CV when deleting
    if (confirm("Are you sure you want to permanently delete this CV record?")) {
      if (selectedCVId === id) {
        setSelectedCVId(null); // Reset selection
      }
      deleteSavedCV(id);
    }
  };

  return (
    <>
      <Header />
      <SideNav />

      {/* Main Content Canvas (The Desk Surface) */}
      <main className="pt-24 pb-20 px-4 md:pl-32 md:pr-12 min-h-screen flex items-center justify-center">
        
        {savedCVs.length === 0 ? (
          /* --- EMPTY STATE --- */
          <div className="max-w-2xl w-full flex flex-col items-center justify-center text-center p-12 bg-[var(--color-surface-container-low)] border-2 border-dashed border-[var(--color-outline-variant)] rounded-xl relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-primary)]/5 rounded-full -mr-16 -mt-16"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-[var(--color-secondary)]/5 rounded-full -ml-24 -mb-24"></div>
            
            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-md mb-6 border border-[var(--color-outline-variant)]">
              <span className="material-symbols-outlined text-6xl text-[var(--color-outline)]">description</span>
            </div>
            
            <h2 className="font-[family-name:var(--font-headline-lg)] text-3xl text-[var(--color-on-surface)] mb-4 font-bold">No Records Found</h2>
            <p className="font-[family-name:var(--font-body-lg)] text-lg text-[var(--color-on-surface-variant)] mb-8 max-w-lg leading-relaxed">
              Your filing cabinet is empty. Head over to the Notepad to draft your professional history, and finalize it to generate a PDF here.
            </p>
            
            <button 
              onClick={() => router.push('/notepad')}
              className="stamp-button bg-[var(--color-primary)] text-white px-8 py-4 rounded-sm font-[family-name:var(--font-label-stamp)] text-[16px] uppercase font-bold tracking-widest flex items-center gap-2 shadow-lg"
            >
              <span className="material-symbols-outlined" data-icon="edit_document">edit_document</span>
              Open Notepad
            </button>
          </div>
        ) : (
          /* --- GALLERY / EXPORT WORKFLOW --- */
          <div className="relative max-w-6xl w-full flex flex-col xl:flex-row gap-12 items-start justify-center">
            
            {/* The Wood Clipboard (Left Side) */}
            <div className="clipboard-tilt relative wood-texture p-6 md:p-10 rounded-lg shadow-[0_20px_50px_rgba(0,0,0,0.6)] border-4 border-[#3d2b1f] w-full max-w-[650px] transition-transform hover:rotate-0 duration-500 mx-auto xl:mx-0">
              {/* Metal Clip */}
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-48 h-16 metal-clip rounded-t-lg z-20 flex items-center justify-center border-b-2 border-[var(--color-outline-variant)]">
                <div className="w-12 h-2 bg-[var(--color-outline-variant)] rounded-full opacity-30"></div>
              </div>
              
              {/* CV Paper Document (Target for PDF) */}
              <div className="w-full overflow-x-auto pb-4 custom-scrollbar">
                <div 
                  ref={targetRef} 
                  className="paper-stack bg-white relative flex flex-col p-0 m-0 print:m-0 mx-auto shadow-sm"
                  style={{ width: '794px', minHeight: '1123px' }}
                >
                  {activeCV ? <TemplateRenderer data={activeCV.data} /> : <div className="flex-1 flex items-center justify-center text-gray-400 min-h-[500px]">Select a CV</div>}
                </div>
              </div>
            </div>

            {/* Filing Cabinet / History Panel (Right Side) */}
            <div className="flex-1 w-full flex flex-col gap-6">
              
              <div className="bg-[var(--color-surface-container)] rounded-xl shadow-xl border border-[var(--color-outline-variant)] overflow-hidden flex flex-col h-full max-h-[850px]">
                {/* Panel Header */}
                <div className="bg-[var(--color-surface-container-high)] p-6 border-b border-[var(--color-outline-variant)] flex items-center gap-3 relative overflow-hidden">
                  <div className="absolute inset-0 bg-[var(--color-primary)]/5"></div>
                  <span className="material-symbols-outlined text-[var(--color-primary)] text-3xl relative z-10">folder_open</span>
                  <h2 className="font-[family-name:var(--font-headline-md)] text-2xl text-[var(--color-on-surface)] relative z-10 font-bold">Filing Cabinet</h2>
                </div>

                {/* List of CVs */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                  {savedCVs.map(cv => (
                    <div 
                      key={cv.id} 
                      onClick={() => setSelectedCVId(cv.id)}
                      className={`relative cursor-pointer transition-all duration-200 border-2 rounded-lg p-5 flex flex-col gap-2 
                        ${selectedCVId === cv.id 
                          ? 'border-[var(--color-primary)] bg-[var(--color-primary-container)]/10 shadow-md transform scale-[1.02]' 
                          : 'border-[var(--color-outline-variant)] bg-white hover:border-[var(--color-primary)]/50 hover:bg-[var(--color-surface-container-low)]'
                        }`}
                    >
                      {/* Ribbon for Selected State */}
                      {selectedCVId === cv.id && (
                        <div className="absolute top-0 right-0 w-12 h-12 overflow-hidden rounded-tr-lg pointer-events-none">
                          <div className="absolute top-0 right-0 bg-[var(--color-primary)] text-white text-[10px] font-bold uppercase tracking-widest py-1 px-8 transform translate-x-3 -translate-y-2 rotate-45 origin-bottom-left">
                            Active
                          </div>
                        </div>
                      )}

                      <div className="flex justify-between items-start pr-8">
                        <h3 className="font-[family-name:var(--font-body-lg)] text-lg font-bold text-[var(--color-on-surface)] truncate">
                          {cv.data.fullName || "Unnamed CV"}
                        </h3>
                        <button 
                          onClick={(e) => handleDelete(e, cv.id)}
                          className="text-[var(--color-error)] opacity-50 hover:opacity-100 transition-opacity absolute right-4 top-4 p-2 bg-red-50 rounded-full"
                          title="Delete Record"
                        >
                          <span className="material-symbols-outlined text-[18px] block">delete</span>
                        </button>
                      </div>
                      
                      <p className="font-[family-name:var(--font-body-md)] text-sm text-[var(--color-on-surface-variant)] flex items-center gap-2">
                        <span className="material-symbols-outlined text-[16px]">work</span>
                        {cv.data.jobTitle || "No Title"}
                      </p>
                      
                      <div className="mt-2 pt-3 border-t border-[var(--color-outline-variant)] flex justify-between items-center">
                        <span className="font-[family-name:var(--font-label-stamp)] text-xs text-[var(--color-on-surface-variant)] uppercase tracking-wider">
                          {new Date(cv.dateGenerated).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' })}
                        </span>
                        <span className="font-[family-name:var(--font-label-embossed)] text-xs px-2 py-1 bg-[var(--color-surface-container-high)] border border-[var(--color-outline-variant)] rounded shadow-sm">
                          {cv.data.selectedTemplate}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="p-6 bg-[var(--color-surface-container-low)] border-t border-[var(--color-outline-variant)] flex flex-col gap-3">
                  <button 
                    onClick={() => {
                      if (activeCV) {
                        setData(activeCV.data);
                        router.push('/notepad');
                      }
                    }}
                    disabled={!activeCV}
                    className="w-full bg-[var(--color-secondary)] text-[var(--color-on-secondary)] py-3 px-4 rounded-sm flex items-center justify-center gap-3 group relative cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed hover:bg-opacity-90 shadow-md"
                  >
                    <span className="material-symbols-outlined text-2xl">edit_document</span>
                    <span className="font-[family-name:var(--font-label-stamp)] text-[16px] tracking-widest uppercase font-bold">
                      Edit Draft
                    </span>
                  </button>
                  <button 
                    onClick={() => handleExport()}
                    disabled={!activeCV}
                    className="rubber-stamp w-full bg-[var(--color-primary-container)] text-[var(--color-on-primary-container)] py-4 px-4 rounded-sm flex items-center justify-center gap-3 group relative cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                    <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                      download
                    </span>
                    <span className="font-[family-name:var(--font-label-stamp)] text-[18px] tracking-widest uppercase mt-1">
                      Export PDF
                    </span>
                  </button>
                </div>
              </div>

            </div>
          </div>
        )}
      </main>

      <Footer />
    </>
  );
}
