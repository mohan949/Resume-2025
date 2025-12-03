import { ResumeData } from './types';

export const RESUME_DATA: ResumeData = {
  name: "Alex Devson",
  title: "Senior Frontend Engineer",
  summary: "A passionate Senior Frontend Engineer with over 6 years of experience building scalable, high-performance web applications. Expert in the React ecosystem, TypeScript, and modern UI/UX principles. dedicated to clean code, performance optimization, and creating accessible user experiences.",
  email: "alex.devson@example.com",
  location: "San Francisco, CA",
  socials: [
    { platform: "GitHub", url: "https://github.com", icon: "github" },
    { platform: "LinkedIn", url: "https://linkedin.com", icon: "linkedin" },
    { platform: "Twitter", url: "https://twitter.com", icon: "twitter" }
  ],
  skills: [
    { category: "Frontend", items: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Redux", "HTML5/CSS3"] },
    { category: "Backend & Cloud", items: ["Node.js", "Firebase", "AWS Lambda", "PostgreSQL", "GraphQL"] },
    { category: "Tools", items: ["Git", "Webpack", "Vite", "Jest", "Figma", "Docker"] }
  ],
  experience: [
    {
      company: "TechFlow Solutions",
      role: "Senior Frontend Engineer",
      startDate: "2021",
      endDate: "Present",
      description: "Leading the frontend migration of a legacy monolithic app to a micro-frontend architecture using React and Module Federation. Improved page load speed by 40% and established a comprehensive internal design system.",
      technologies: ["React", "TypeScript", "Module Federation", "Cypress"]
    },
    {
      company: "Creative Pulse Agency",
      role: "Frontend Developer",
      startDate: "2018",
      endDate: "2021",
      description: "Developed award-winning marketing websites and interactive dashboards for Fortune 500 clients. Collaborated closely with designers to implement pixel-perfect animations.",
      technologies: ["Vue.js", "GSAP", "Sass", "Firebase"]
    },
    {
      company: "StartUp Inc",
      role: "Junior Web Developer",
      startDate: "2016",
      endDate: "2018",
      description: "Contributed to the development of a SaaS product for inventory management. Implemented responsive layouts and REST API integrations.",
      technologies: ["React", "Bootstrap", "Redux"]
    }
  ],
  education: [
    {
      degree: "B.S. Computer Science",
      institution: "University of Technology",
      year: "2016"
    }
  ],
  projects: [
    {
      title: "E-Commerce Dashboard",
      description: "A comprehensive analytics dashboard for online retailers featuring real-time data visualization.",
      techStack: ["React", "D3.js", "Tailwind"]
    },
    {
      title: "TaskMaster AI",
      description: "A productivity application integrating LLMs to suggest task prioritization and subtasks.",
      techStack: ["Next.js", "OpenAI API", "PostgreSQL"]
    },
    {
      title: "Portfolio Generator",
      description: "Open-source CLI tool to scaffold developer portfolios.",
      techStack: ["Node.js", "Inquirer", "Chalk"]
    }
  ]
};

export const GEMINI_SYSTEM_INSTRUCTION = `
You are an AI assistant representing ${RESUME_DATA.name}. 
Your goal is to answer questions about ${RESUME_DATA.name}'s professional background, skills, and experience in a professional, friendly, and concise manner.
Strictly use the following context to answer questions. If the answer is not in the context, politely say you don't have that specific information but invite them to contact ${RESUME_DATA.name} directly at ${RESUME_DATA.email}.

CONTEXT:
${JSON.stringify(RESUME_DATA, null, 2)}

Do not invent experiences or skills not listed here.
Keep answers brief and relevant to a recruiter or hiring manager.
`;
