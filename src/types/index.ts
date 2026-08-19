export interface Project {
  id: string;
  number: string;
  title: string;
  role: string;
  whatItIs: string;
  whyIBuiltIt: string;
  whatIDid: string;
  technology: string[];
  year: string;
  link?: string;
}

export interface ExperienceItem {
  id: string;
  period: string;
  role: string;
  organization: string;
  details: string;
}
