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

const defaultData: CVData = {
  fullName: "Jonathan Deskman",
  jobTitle: "Executive Suite Manager",
  email: "jonathan@example.com",
  phone: "+1 (555) 123-4567",
  address: "New York, NY",
  linkedin: "linkedin.com/in/jdeskman",
  website: "jdeskman.com",
  github: "github.com/jdeskman",
  nationality: "American",
  summary: "",
  experiences: [
    {
      id: "1",
      startDate: "2018",
      endDate: "PRESENT",
      title: "Senior Architect",
      company: "Metropolis Solutions Ltd.",
      skills: ["Leadership", "Strategy"],
    },
    {
      id: "2",
      startDate: "2015",
      endDate: "2018",
      title: "Lead Developer",
      company: "Digital Horizon Inc.",
      skills: ["Frontend", "System Design"],
    },
  ],
  education: [
    {
      id: "1",
      startYear: "2011",
      endYear: "2015",
      institution: "University of Technology",
      degree: "B.S. in Computer Science",
    }
  ],
  globalSkills: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
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
};

const CVContext = createContext<CVContextType | undefined>(undefined);

export function CVProvider({ children }: { children: ReactNode }) {
  const [data, setDataState] = useState<CVData>(defaultData);
  const [isLoaded, setIsLoaded] = useState(false);

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

  if (!isLoaded) {
    return null; // Or a loading spinner
  }

  return (
    <CVContext.Provider value={{ 
      data, setData, updateField, 
      addExperience, updateExperience, deleteExperience,
      addEducation, updateEducation, deleteEducation
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
