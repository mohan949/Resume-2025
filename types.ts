export interface SocialLink {
  platform: string;
  url: string;
  icon: string; // SVG path or identifier
}

export interface Job {
  company: string;
  role: string;
  startDate: string;
  endDate: string;
  description: string;
  technologies: string[];
}

export interface Education {
  degree: string;
  institution: string;
  year: string;
}

export interface Project {
  title: string;
  description: string;
  techStack: string[];
  link?: string;
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface ResumeData {
  name: string;
  title: string;
  summary: string;
  email: string;
  location: string;
  socials: SocialLink[];
  experience: Job[];
  education: Education[];
  projects: Project[];
  skills: SkillCategory[];
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}