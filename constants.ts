import { ResumeData } from './types';

export const RESUME_DATA: ResumeData = {
  name: "Mohan Prasad",
  title: "SDET | Software Development Engineer in Test",
  summary: "SDET with 3+ years of experience in automation and functional testing across e-commerce, pharmaceuticals, and blockchain. Passionate about building scalable QA automation frameworks, reducing onboarding time, and collaborating with global teams to deliver quality products.",
  email: "Prasadmohan949@gmail.com",
  phone: "+91 7506760865",
  location: "Mumbai, India",
  resumeDownloadLink: "https://flowcv.com/resume/fk4b33hi1j",
  socials: [
    { platform: "LinkedIn", url: "https://www.linkedin.com/in/mohanprasadqa/", icon: "linkedin" },
    { platform: "GitHub", url: "https://github.com/mohan949", icon: "github" },
    { platform: "HackerRank", url: "https://www.hackerrank.com/profile/mohanprasadwork", icon: "hackerrank" }
  ],
  skills: [
    { category: "Programming Languages", items: ["Python", "Java", "JavaScript", "TypeScript"] },
    { category: "Testing Frameworks", items: ["Selenium", "Playwright", "Appium", "Postman", "Pytest"] },
    { category: "Testing Types & Tools", items: ["API Testing", "Backend Testing", "Database Testing", "CI/CD", "BrowserStack", "Azure DevOps"] },
    { category: "Databases", items: ["SQL", "MongoDB", "MySQL"] }
  ],
  experience: [
    {
      company: "Fynd - JIO",
      role: "SDET-1",
      startDate: "Feb 2023",
      endDate: "Present",
      description: "QA DRI for Commerce India/Global team. Conducted extensive functional and automation testing, designed robust automation frameworks using Python Pytest and Playwright, significantly reducing client onboarding time by improving test efficiency.",
      highlights: [
        "QA SME Mobile Apps (15M+ downloads): Led testing for Android/iOS apps including Gofynd, Uniket, Myjio, Fynd Store, and Sephora with BrowserStack Integration.",
        "Themes SME: Fynd Platform - Application, Website & Omnichannel Network testing for Gofynd, Uniket, Fynd Store themes. Automated respective websites with Azure CI/CD pipelines integration.",
        "JioMart: E-commerce backend testing of Order Management System (OMS), Microservices, API, Database, Order fulfillment, and Refunds.",
        "End-to-End Testing Management: Led comprehensive testing processes, including defining test scopes, developing detailed test plans, and managing execution.",
        "Automation of Reporting Processes: Automated daily testing result reporting utilizing JavaScript-Playwright, integrated seamlessly with Slack and ReportPortal.",
        "Proficiency with QA Tools: Expert in integrating tools like BrowserStack and Appium into functional testing workflows."
      ],
      technologies: ["Python", "Playwright", "Appium", "Azure CI/CD", "JavaScript", "MySQL", "MongoDB", "Kafka"]
    },
    {
      company: "I2e Consulting",
      role: "Software Test Engineer",
      startDate: "Aug 2021",
      endDate: "Feb 2023",
      description: "Led functional and automated testing of web and mobile applications in healthcare and blockchain, ensuring compliance for clients like Pfizer.",
      highlights: [
        "Pfizer Medicine Research Tool: Conducted manual and automated web testing using Selenium Java, creating test scenarios and executing regression tests.",
        "BBT NFT (Blockchain & E-Commerce): Managed end-to-end testing, including blockchain integration with Ethereum and smart contract testing.",
        "TeleMedRX: Built automation using Selenium Java for consultation workflows, boosting test efficiency.",
        "Created and maintained test plans, cases, and bug reports to support Agile alignment."
      ],
      technologies: ["Java", "Selenium", "Blockchain", "Ethereum", "Smart Contracts", "Agile"]
    }
  ],
  education: [
    {
      degree: "B.E./B.Tech in Computer Science",
      institution: "Don Bosco Institute of Technology, Mumbai University",
      year: "Graduated"
    }
  ],
  projects: [
    {
      title: "Selenium Automation (Java & Python)",
      description: "Built modular frameworks for web automation using both Java and Python. Validated functional flows, UI responsiveness, and integration points using Selenium WebDriver.",
      techStack: ["Java", "Python", "Selenium WebDriver"]
    },
    {
      title: "Mobile App Automation with Appium",
      description: "Developed cross-platform mobile test scripts using Java + Appium. Focused on login flows, UI behavior, and regression scenarios for Android-based apps.",
      techStack: ["Java", "Appium", "Android"]
    },
    {
      title: "Modern Web Automation with Playwright",
      description: "Leveraged Python and Playwright to automate fast, headless browser tests. Targeted real-time DOM interaction, parallel execution, and CI-ready test runs.",
      techStack: ["Python", "Playwright", "CI/CD"]
    },
    {
      title: "Python Projects Collection",
      description: "A curated set of Python scripts covering data parsing, file operations, automation snippets, and CLI tools—showcasing clean code practices and reusability.",
      techStack: ["Python", "CLI Tools", "Automation"]
    },
    {
      title: "Personal Resume Website",
      description: "Designed and developed a responsive portfolio site to showcase professional story and projects.",
      techStack: ["HTML", "CSS", "JavaScript", "React"]
    }
  ]
};

export const GEMINI_SYSTEM_INSTRUCTION = `
You are an AI assistant representing ${RESUME_DATA.name}. 
Your goal is to answer questions about ${RESUME_DATA.name}'s professional background as an SDET, skills in Python, Java, and automation frameworks, and experience at Fynd-JIO and I2e Consulting.
Strictly use the following context to answer questions. If the answer is not in the context, politely say you don't have that specific information but invite them to contact ${RESUME_DATA.name} directly at ${RESUME_DATA.email} or ${RESUME_DATA.phone}.

CONTEXT:
${JSON.stringify(RESUME_DATA, null, 2)}

Do not invent experiences or skills not listed here.
Keep answers brief and relevant to a recruiter or hiring manager.
`;