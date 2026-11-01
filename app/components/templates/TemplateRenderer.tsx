import React from "react";
import { CVData } from "../../context/CVContext";
import ExecutiveTemplate from "./ExecutiveTemplate";
import CreativeTemplate from "./CreativeTemplate";
import TechnicalTemplate from "./TechnicalTemplate";
import AcademicTemplate from "./AcademicTemplate";
import GlobalDirectorTemplate from "./GlobalDirectorTemplate";
import FreshStartTemplate from "./FreshStartTemplate";
import AvantGardeTemplate from "./AvantGardeTemplate";
import NeoBrutalistTemplate from "./NeoBrutalistTemplate";
import GlassmorphismTemplate from "./GlassmorphismTemplate";

interface TemplateRendererProps {
  data: CVData;
}

export default function TemplateRenderer({ data }: TemplateRendererProps) {
  const templateName = data.selectedTemplate;

  switch (templateName) {
    case "The Executive":
      return <ExecutiveTemplate data={data} />;
    case "Modern Creative":
      return <CreativeTemplate data={data} />;
    case "System Architect":
      return <TechnicalTemplate data={data} />;
    case "The Academic":
      return <AcademicTemplate data={data} />;
    case "Global Director":
      return <GlobalDirectorTemplate data={data} />;
    case "Fresh Start":
      return <FreshStartTemplate data={data} />;
    case "The Avant-Garde":
      return <AvantGardeTemplate data={data} />;
    case "Neo-Brutalism":
      return <NeoBrutalistTemplate data={data} />;
    case "Glassmorphism":
      return <GlassmorphismTemplate data={data} />;
    default:
      return <ExecutiveTemplate data={data} />;
  }
}
