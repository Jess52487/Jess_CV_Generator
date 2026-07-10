"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

export type Experience = {
  id: string;
  startDate: string;
  endDate: string;
  title: string;
  company: string;
  skills: string[];
};

export type Education = {
  id: string;
  startYear: string;
  endYear: string;
  institution: string;
  degree: string;
  description?: string;
};

export type CVData = {
  fullName: string;
  jobTitle: string;
  email?: string;
  phone?: string;
  address?: string;
  linkedin?: string;
  website?: string;
  github?: string;
  nationality?: string;
  summary: string;
  experiences: Experience[];
  education: Education[];
  globalSkills: string[];
  selectedTemplate: string;
};

export type SavedCV = {
  id: string;
  dateGenerated: string;
  data: CVData;
};

const defaultData: CVData = {
  fullName: "",
  jobTitle: "",
  email: "",
  phone: "",
  address: "",
  linkedin: "",
  website: "",
  github: "",
  nationality: "",
  summary: "",
  experiences: [],
  education: [],
  globalSkills: [],
  selectedTemplate: "The Executive",
};

type CVContextType = {
  data: CVData;
  setData: (data: CVData) => void;
  updateField: (field: keyof CVData, value: any) => void;
  addExperience: (exp: Experience) => void;
  updateExperience: (id: string, exp: Experience) => void;
  deleteExperience: (id: string) => void;
  addEducation: (edu: Education) => void;
  updateEducation: (id: string, edu: Education) => void;
  deleteEducation: (id: string) => void;
  savedCVs: SavedCV[];
  finalizeDraft: () => void;
  deleteSavedCV: (id: string) => void;
  purgeAllData: () => void;
};

const CVContext = createContext<CVContextType | undefined>(undefined);

export const CVProvider = ({ children }: { children: ReactNode }) => {
  const [data, setDataState] = useState<CVData>(defaultData);
  const [savedCVs, setSavedCVs] = useState<SavedCV[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem("jess-cv-data");
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setDataState({ ...defaultData, ...parsed });
      } catch (e) {
        console.error("Failed to parse saved CV data", e);
      }
    }

    const history = localStorage.getItem("jess-cv-history");
    if (history) {
      try {
        setSavedCVs(JSON.parse(history));
      } catch (e) {
        console.error("Failed to parse CV history", e);
      }
    }

    setIsLoaded(true);
  }, []);

  const setData = (newData: CVData) => {
    setDataState(newData);
    localStorage.setItem("jess-cv-data", JSON.stringify(newData));
  };

  const updateField = (field: keyof CVData, value: any) => {
    setDataState((prev) => {
      const updated = { ...prev, [field]: value };
      localStorage.setItem("jess-cv-data", JSON.stringify(updated));
      return updated;
    });
  };

  const addExperience = (exp: Experience) => {
    setDataState((prev) => {
      const updated = { ...prev, experiences: [...prev.experiences, exp] };
      localStorage.setItem("jess-cv-data", JSON.stringify(updated));
      return updated;
    });
  };

  const updateExperience = (id: string, updatedExp: Experience) => {
    setDataState((prev) => {
      const updated = { 
        ...prev, 
        experiences: prev.experiences.map(e => e.id === id ? updatedExp : e) 
      };
      localStorage.setItem("jess-cv-data", JSON.stringify(updated));
      return updated;
    });
  };

  const deleteExperience = (id: string) => {
    setDataState((prev) => {
      const updated = { 
        ...prev, 
        experiences: prev.experiences.filter(e => e.id !== id) 
      };
      localStorage.setItem("jess-cv-data", JSON.stringify(updated));
      return updated;
    });
  };

  const addEducation = (edu: Education) => {
    setDataState((prev) => {
      const updated = { ...prev, education: [...prev.education, edu] };
      localStorage.setItem("jess-cv-data", JSON.stringify(updated));
      return updated;
    });
  };

  const updateEducation = (id: string, updatedEdu: Education) => {
    setDataState((prev) => {
      const updated = { 
        ...prev, 
        education: prev.education.map(e => e.id === id ? updatedEdu : e) 
      };
      localStorage.setItem("jess-cv-data", JSON.stringify(updated));
      return updated;
    });
  };

  const deleteEducation = (id: string) => {
    setDataState((prev) => {
      const updated = { 
        ...prev, 
        education: prev.education.filter(e => e.id !== id) 
      };
      localStorage.setItem("jess-cv-data", JSON.stringify(updated));
      return updated;
    });
  };

  const finalizeDraft = () => {
    const newSavedCV: SavedCV = {
      id: Date.now().toString(),
      dateGenerated: new Date().toISOString(),
      data: { ...data }
    };
    
    setSavedCVs(prev => {
      const updated = [newSavedCV, ...prev];
      localStorage.setItem("jess-cv-history", JSON.stringify(updated));
      return updated;
    });

    // Reset current draft to default
    setDataState(defaultData);
    localStorage.removeItem("jess-cv-data");
  };

  const deleteSavedCV = (id: string) => {
    setSavedCVs(prev => {
      const updated = prev.filter(cv => cv.id !== id);
      localStorage.setItem("jess-cv-history", JSON.stringify(updated));
      return updated;
    });
  };

  const purgeAllData = () => {
    setDataState(defaultData);
    setSavedCVs([]);
    localStorage.removeItem("jess-cv-data");
    localStorage.removeItem("jess-cv-history");
  };

  if (!isLoaded) {
    return null; // Or a loading spinner
  }

  return (
    <CVContext.Provider value={{ 
      data, setData, updateField, 
      addExperience, updateExperience, deleteExperience,
      addEducation, updateEducation, deleteEducation,
      savedCVs, finalizeDraft, deleteSavedCV, purgeAllData
    }}>
      {children}
    </CVContext.Provider>
  );
}

export function useCVContext() {
  const context = useContext(CVContext);
  if (context === undefined) {
    throw new Error("useCVContext must be used within a CVProvider");
  }
  return context;
}
