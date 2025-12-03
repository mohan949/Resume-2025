import React from 'react';
import { RESUME_DATA } from './constants';
import ChatWidget from './components/ChatWidget';
import { IconGithub, IconLinkedin, IconTwitter, IconMail, IconMapPin, IconPhone, IconDownload, IconHackerRank } from './components/Icons';

function App() {
  const { name, title, summary, experience, education, projects, skills, socials, location, email, phone, resumeDownloadLink } = RESUME_DATA;

  const getSocialIcon = (platform: string) => {
    switch (platform.toLowerCase()) {
      case 'github': return <IconGithub className="w-5 h-5" />;
      case 'linkedin': return <IconLinkedin className="w-5 h-5" />;
      case 'twitter': return <IconTwitter className="w-5 h-5" />;
      case 'hackerrank': return <IconHackerRank className="w-5 h-5" />;
      default: return null;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 selection:bg-blue-200 dark:selection:bg-blue-900 font-sans">
      
      {/* Hero Section */}
      <header className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="flex flex-col md:flex-row gap-8 items-start md:items-center justify-between">
            <div className="space-y-4 max-w-2xl">
              <div className="inline-block px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-semibold tracking-wide uppercase mb-2">
                Available for hire
              </div>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900 dark:text-white">
                {name}
              </h1>
              <h2 className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 font-medium">
                {title}
              </h2>
              <div className="flex flex-wrap gap-4 text-sm text-slate-500 dark:text-slate-400 pt-2">
                <div className="flex items-center gap-1.5 hover:text-blue-600 transition-colors cursor-default">
                   <IconMapPin className="w-4 h-4" />
                   {location}
                </div>
                <a href={`mailto:${email}`} className="flex items-center gap-1.5 hover:text-blue-600 transition-colors">
                   <IconMail className="w-4 h-4" />
                   {email}
                </a>
                {phone && (
                  <a href={`tel:${phone}`} className="flex items-center gap-1.5 hover:text-blue-600 transition-colors">
                    <IconPhone className="w-4 h-4" />
                    {phone}
                  </a>
                )}
              </div>
              <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-300 max-w-xl">
                {summary}
              </p>
              
              <div className="flex flex-wrap items-center gap-3 pt-4">
                {socials.map((social) => (
                  <a 
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 bg-slate-100 dark:bg-slate-800 rounded-full text-slate-600 dark:text-slate-400 hover:bg-blue-500 hover:text-white dark:hover:bg-blue-600 transition-all duration-300"
                    aria-label={social.platform}
                  >
                    {getSocialIcon(social.platform)}
                  </a>
                ))}
                {resumeDownloadLink && (
                  <a 
                    href={resumeDownloadLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium text-sm transition-all ml-2"
                  >
                    <IconDownload className="w-4 h-4" />
                    Download Resume
                  </a>
                )}
              </div>
            </div>
            
            {/* Abstract Avatar Placeholder */}
            <div className="relative shrink-0 hidden md:block">
               <div className="w-40 h-40 md:w-56 md:h-56 rounded-2xl overflow-hidden bg-gradient-to-br from-blue-500 to-indigo-600 shadow-2xl flex items-center justify-center">
                 <span className="text-6xl font-bold text-white opacity-20 select-none">
                    {name.split(' ').map(n => n[0]).join('')}
                 </span>
               </div>
               <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-slate-100 dark:bg-slate-800 rounded-xl -z-10"></div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-24">
        
        {/* Skills Section */}
        <section>
          <div className="flex items-center gap-4 mb-8">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Technical Skills</h3>
            <div className="h-px bg-slate-200 dark:bg-slate-800 flex-1"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skillGroup) => (
              <div key={skillGroup.category} className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
                <h4 className="font-semibold text-base mb-3 text-blue-600 dark:text-blue-400">{skillGroup.category}</h4>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill) => (
                    <span key={skill} className="px-2.5 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs rounded-md font-medium border border-slate-200 dark:border-slate-700">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section>
          <div className="flex items-center gap-4 mb-10">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Experience</h3>
            <div className="h-px bg-slate-200 dark:bg-slate-800 flex-1"></div>
          </div>

          <div className="space-y-12 border-l-2 border-slate-200 dark:border-slate-800 ml-3 md:ml-6 pl-8 md:pl-12 relative">
            {experience.map((job, index) => (
              <div key={index} className="relative">
                <span className="absolute -left-[41px] md:-left-[58px] top-1 w-5 h-5 rounded-full border-4 border-white dark:border-slate-950 bg-blue-600"></span>
                
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2">
                  <h4 className="text-xl font-bold text-slate-900 dark:text-white">{job.role}</h4>
                  <span className="text-sm font-medium text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-900 px-3 py-1 rounded-full mt-2 sm:mt-0 w-fit">
                    {job.startDate} — {job.endDate}
                  </span>
                </div>
                <div className="text-lg font-medium text-blue-600 dark:text-blue-400 mb-4">{job.company}</div>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4 max-w-3xl">
                  {job.description}
                </p>
                {/* Render Highlights if they exist */}
                {job.highlights && job.highlights.length > 0 && (
                  <ul className="list-disc list-outside ml-4 mb-4 space-y-2 text-slate-600 dark:text-slate-300 max-w-3xl text-sm leading-relaxed">
                    {job.highlights.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                )}
                
                <div className="flex flex-wrap gap-2 mt-4">
                  {job.technologies.map(tech => (
                    <span key={tech} className="text-xs font-semibold text-slate-500 border border-slate-200 dark:border-slate-700 px-2 py-0.5 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section>
          <div className="flex items-center gap-4 mb-10">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Featured Projects</h3>
            <div className="h-px bg-slate-200 dark:bg-slate-800 flex-1"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, idx) => (
              <div key={idx} className="group bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 hover:shadow-xl hover:border-blue-500/30 transition-all duration-300 flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h4>
                  {project.link && (
                    <a href={project.link} className="text-slate-400 hover:text-blue-600">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                    </a>
                  )}
                </div>
                <p className="text-slate-600 dark:text-slate-400 mb-6 text-sm leading-relaxed flex-grow">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.techStack.map(t => (
                    <span key={t} className="text-xs px-2 py-1 bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded font-medium border border-slate-200 dark:border-slate-700">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education Section */}
         <section>
          <div className="flex items-center gap-4 mb-8">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Education</h3>
            <div className="h-px bg-slate-200 dark:bg-slate-800 flex-1"></div>
          </div>
          
          <div className="grid grid-cols-1 gap-4">
            {education.map((edu, idx) => (
              <div key={idx} className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-4 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800">
                 <div>
                    <h4 className="font-bold text-slate-900 dark:text-white text-lg">{edu.institution}</h4>
                    <p className="text-slate-600 dark:text-slate-400">{edu.degree}</p>
                 </div>
                 <span className="text-sm font-semibold text-slate-400 mt-2 sm:mt-0 bg-white dark:bg-slate-800 px-3 py-1 rounded-full border border-slate-200 dark:border-slate-700">{edu.year}</span>
              </div>
            ))}
          </div>
        </section>

      </main>

      <footer className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 py-12 mt-12">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <p className="text-slate-500 dark:text-slate-400 mb-4">
            &copy; {new Date().getFullYear()} {name}. All rights reserved.
          </p>
          <p className="text-xs text-slate-400 dark:text-slate-500">
            Built with React, Tailwind CSS & Google Gemini
          </p>
        </div>
      </footer>

      {/* Floating AI Chat Widget */}
      <ChatWidget />
    </div>
  );
}

export default App;