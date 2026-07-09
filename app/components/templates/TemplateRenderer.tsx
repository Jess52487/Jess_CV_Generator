import React from "react";
import { CVData } from "../../context/CVContext";
import ExecutiveTemplate from "./ExecutiveTemplate";
import CreativeTemplate from "./CreativeTemplate";
import TechnicalTemplate from "./TechnicalTemplate";

interface TemplateRendererProps {
  data: CVData;
}

export default function TemplateRenderer({ data }: TemplateRendererProps) {
  const templateName = data.selectedTemplate;

  // Map the 6 options to our 3 core archetypes
  switch (templateName) {
    case "The Executive":
    case "The Academic":
    case "Global Director":
      return <ExecutiveTemplate data={data} />;
      
    case "Modern Creative":
    case "Fresh Start":
      return <CreativeTemplate data={data} />;
      
    case "System Architect":
      return <TechnicalTemplate data={data} />;
      
    default:
      // Fallback
      return <ExecutiveTemplate data={data} />;
  }
}
