"use client";

import Header from "../components/layout/Header";
import SideNav from "../components/layout/SideNav";
import Footer from "../components/layout/Footer";
import { useCVContext } from "../context/CVContext";
import { useRouter } from "next/navigation";

export default function TemplateGallery() {
  const { data, updateField } = useCVContext();
  const router = useRouter();

  const handleSelectTemplate = (templateName: string) => {
    updateField("selectedTemplate", templateName);
    router.push("/export");
  };

  const templates = [
    { name: "The Executive", style: "Traditional & Bold", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDzgvZmsd7gkEZhH6gsEETwhdJGNll-vbs0QheRdHifZ0rBU4-JUDIc_tRfHqRWo9fVr8JoHTXTrly4zk6dWObGCM8kEEnCN-_qB7s30EVfojrwqifVHHDla6gX64XxYRJRkARaqKnodnbHNV6nfFAjVI2G-xpx7LG_cwckvI6MUOgcfW7rDnBL0acKXNgjZ1kuUSni-GFGqydwZDwVtw7TZNoTVkI3NpC_-xGetVE1_-bAZisDlHBsrXHdsmnZPVaIFFq18fCNlUUK" },
    { name: "Modern Creative", style: "Clean & Minimal", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDMV0TS0qV1PsNmLDD_OXv8lste5QI8i11t2PhZcSlaPcCGT9rrGiq3kdv0R30s51rFRz98JGVwmVs4OT_GLhlPZHIKhsuw4ppDmlf_qIQTQis0QfDcdA4StyuU9UsaAuWetN6Kz_IWsAvenJyw5spzbSt6q4vCw-SJE9TgJdTxIjtqhk8iiTEtf8rZvB0xKGonJG-2DKVXmrrsVw_a1738EgA3e_4oqM1REEw3au9TzsQ8t2_6YQp_ciH6eDmglZr9IaZeRWriwM3B" },
    { name: "The Academic", style: "Classic & Detailed", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBqKmvUdHTt2WMuFzZohkwUDtYMKEMf8p3qh0ScQPU9vkjTHD5NEvuIct1m-ifRsQ5GrxioEekWREpx2LsclHbtdVtxBFMLX_wxb4nPaZTwZ8hmxo_VfD6T-Ndv7AuESYXKdfb5obPESo5YvCCGlNs43EuYTiEixJe_Fmaqvux1cFugtKFbzjYvFVGkz2OAPkN6UfebMbYlbzdwHyTsSMDLeXNH0jbZXUw41BP9oUEkd0Jm0i0WUeOMQ32zKeHGe9INx2HWWihPVWaB" },
    { name: "System Architect", style: "Technical & Dense", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCAFbYqxJcHkYSabyhgDrxdNOOI7yDA0mXUibsewtdDMvzqX-RwGwTRZbYdDA5ZslN_kSZAaSQq4JQ6_v-6BeMeNN_xnjNRQ8UGyimgWSzENhqwKSIccx5RIYRk5eZXCxToGUew4nR-rHzLtS7XiA_7fPCBpjOknVHGeTRA9uP8SLICpaW7jo868YT9HRys9r7ezPNQDj-YRrreYLf_SWuWR7QYeAkU4hvYhdyOl5L8J2x12-5_RIkjuPYmSQ-1YAk6uahhyop619sv" },
    { name: "Global Director", style: "Luxury & Authority", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBE1mB6O5ZqL3x7CqFF-yVRjtxGUz9UCfQ1yxS3M-avaaZ6Pv9rNcW0P-wv2BeEvoKzZ-SlEc_wjHi58VV4IFinmW4RihCo7ytMugXhkesUheHCLW_OUI46EUcwUbjH0gBk0WC4fmf896rhTXq0B9RDRPyT5hffaeQsQ9iycH7oovZ5_UmFDgUDFFGHuQMZwlK4irQWrcTV-sMPm2_33YKs16N_dPCoqClUr8-wq1S8YeGkKzV7QjbEs82Cfdex3bllpNvJzzS1pbnd" },
    { name: "Fresh Start", style: "Approachable & Light", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDRJZzR_MFbsdHwKt0Wzzh9P_Mjavtytgp10_eyRIZdZx_loOuV2PHwx8xp4CQp5siwc_UrENU_LNDhy9ZVcgqwJC_iW6hzDdbA_COUvr5oow-Wfc9hdhNIAwnffdZXF5gGzzMyvQk9YKYUYNaf3GccS_CvZ_HrNOYD0EjTTRCt2sGUMq6HP4aodzobE8DdyPnIidssTwOexpHYqduX12t0GRZ5Akjqtkvi1YL5hd6sNQ2oJqrKkRY80pdXyua8k6I8jQq57hqBf1QA" }
  ];

  return (
    <>
      <Header />
      <SideNav />

      {/* Main Content: The Filing Cabinet Drawer */}
      <main className="pt-32 pb-24 px-[var(--spacing-desktop-margin)] md:ml-20 min-h-screen flex flex-col items-center relative z-20">
        <div className="w-full max-w-6xl">
          {/* Cabinet Header Area */}
          <div className="mb-12 text-center md:text-left">
            <h1 className="font-[family-name:var(--font-headline-lg)] text-[40px] text-[var(--color-on-surface)] mb-2 drop-shadow-lg">The Template Cabinet</h1>
            <p className="font-[family-name:var(--font-body-lg)] text-[18px] text-[var(--color-on-surface-variant)] max-w-2xl">Browse our executive suite of professional layouts. Each template is precision-crafted to ensure your credentials stand out on the recruiter's desk.</p>
          </div>

          {/* The Metal Drawer Container */}
          <div className="brushed-steel rounded-t-3xl p-12 min-h-[600px] drawer-slide relative overflow-hidden cabinet-shadow">
            {/* Drawer Pull / Handle Design */}
            <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-48 h-8 rounded-b-xl drawer-handle flex items-center justify-center border-t border-white">
              <div className="w-32 h-1 bg-black/20 rounded-full"></div>
            </div>

            {/* Template Grid (Bento Style Layout) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 relative z-10">
              
              {templates.map((tpl, i) => {
                const isSelected = data.selectedTemplate === tpl.name;
                return (
                  <div key={tpl.name} className={`flex flex-col gap-6 ${i === 1 || i === 4 ? 'mt-8' : ''}`}>
                    <div 
                      className={`template-paper-sheet relative p-4 group ${isSelected ? 'ring-4 ring-[var(--color-primary)] ring-offset-4 ring-offset-transparent scale-105 rotate-0 z-20' : ''}`}
                      onClick={() => handleSelectTemplate(tpl.name)}
                    >
                      <div className="binder-clip"></div>
                      <div className="w-full h-full bg-slate-50 border border-slate-200 overflow-hidden">
                        <div className={`w-full h-full bg-cover bg-center transition-all duration-500 ${isSelected ? 'grayscale-0' : 'grayscale group-hover:grayscale-0'}`} title={tpl.name} style={{ backgroundImage: `url('${tpl.image}')` }}></div>
                      </div>
                      {isSelected && (
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[var(--color-primary)] text-white font-[family-name:var(--font-label-stamp)] px-4 py-2 rounded-full shadow-xl rotate-12 flex items-center gap-2 border-2 border-white">
                          <span className="material-symbols-outlined text-sm">check_circle</span>
                          SELECTED
                        </div>
                      )}
                      <div className="absolute inset-0 bg-[var(--color-primary)]/0 group-hover:bg-[var(--color-primary)]/5 transition-colors pointer-events-none"></div>
                    </div>
                    <div className="flex justify-between items-center px-2">
                      <div>
                        <h3 className="font-[family-name:var(--font-headline-md)] text-[24px] text-[var(--color-on-surface)]">{tpl.name}</h3>
                        <p className="font-[family-name:var(--font-label-embossed)] text-[12px] text-[var(--color-on-surface-variant)] italic">{tpl.style}</p>
                      </div>
                      <button 
                        onClick={() => handleSelectTemplate(tpl.name)}
                        className={`stamp-button w-10 h-10 rounded-full flex items-center justify-center text-white ${isSelected ? 'bg-[var(--color-primary)]' : 'bg-[var(--color-outline)] hover:bg-[var(--color-primary)]'}`}
                      >
                        <span className="material-symbols-outlined">{isSelected ? 'check' : 'add'}</span>
                      </button>
                    </div>
                  </div>
                )
              })}

            </div>

            {/* Cabinet Bottom Details */}
            <div className="mt-16 pt-8 border-t border-black/10 flex justify-center">
              <button className="px-12 py-4 bg-[var(--color-surface-container-high)] rounded-lg font-[family-name:var(--font-label-stamp)] text-[14px] text-[var(--color-on-surface)] shadow-md hover:shadow-lg transition-all border border-white/50 active:shadow-inner uppercase tracking-widest flex items-center gap-2">
                <span className="material-symbols-outlined">sync</span>
                Load More Records
              </button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
