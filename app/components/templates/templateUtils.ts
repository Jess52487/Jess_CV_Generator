import type { CVData, Education, Experience } from "../../context/CVContext";

export const hasText = (value?: string | null): value is string => Boolean(value?.trim());

export const cleanList = (values?: string[]) => (values || []).filter(hasText);

export const hasExperienceContent = (experience: Experience) =>
  [experience.title, experience.company, experience.startDate, experience.endDate].some(hasText) ||
  cleanList(experience.skills).length > 0;

export const hasEducationContent = (education: Education) =>
  [education.institution, education.degree, education.startYear, education.endYear, education.description].some(hasText);

export const hasContactInfo = (data: CVData) =>
  [data.email, data.phone, data.address, data.linkedin, data.website, data.github].some(hasText);
