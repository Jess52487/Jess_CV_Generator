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

export type CVData = {
  fullName: string;
  jobTitle: string;
  summary: string;
  experiences: Experience[];
  selectedTemplate: string;
};

const defaultData: CVData = {
  fullName: "",
  jobTitle: "",
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
  selectedTemplate: "The Executive",
};

type CVContextType = {
  data: CVData;
  setData: (data: CVData) => void;
  updateField: (field: keyof CVData, value: any) => void;
  addExperience: (exp: Experience) => void;
  updateExperience: (id: string, exp: Experience) => void;
  deleteExperience: (id: string) => void;
};

const CVContext = createContext<CVContextType | undefined>(undefined);

export function CVProvider({ children }: { children: ReactNode }) {
  const [data, setDataState] = useState<CVData>(defaultData);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("jess-cv-data");
    if (saved) {
      try {
        setDataState(JSON.parse(saved));
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

  if (!isLoaded) {
    return null; // Or a loading spinner
  }

  return (
    <CVContext.Provider value={{ data, setData, updateField }}>
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
