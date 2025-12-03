
import React, { useEffect, useState } from 'react';
import { RESUME_DATA } from './constants';
import ChatWidget from './components/ChatWidget';
import ContactModal from './components/ContactModal';
import { IconGithub, IconLinkedin, IconTwitter, IconMapPin, IconDownload, IconHackerRank, IconMail } from './components/Icons';

function App() {
  const { name, title, summary, experience, education, projects, skills, socials, location, email, phone, resumeDownloadLink, avatarUrl } = RESUME_DATA;
  const [scrolled, setScrolled] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    <div className="min-h-screen relative overflow-x-hidden text-gray-100 selection:bg-purple-500/30 selection:text-purple-200">
      
      {/* Dynamic Background */}
      <div className="fixed inset-0 -z-10 bg-[#030712]">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-40 transition-all duration-500 ${scrolled ? 'glass py-3 shadow-lg' : 'bg-transparent py-6'}`}>
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <div className="text-xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            MP.
          </div>
          <div className="flex items-center gap-4">
             {resumeDownloadLink && (
                <a 
                  href={resumeDownloadLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden sm:flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/10 rounded-full text-sm font-medium transition-all hover:scale-105 backdrop-blur-sm"
                >
                  <IconDownload className="w-4 h-4" />
                  <span>Resume</span>
                </a>
              )}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="pt-32 pb-16 md:pt-48 md:pb-32 px-6">
        <div className="max-w-6xl mx-auto animate-fade-in">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1 space-y-6 text-center md:text-left">
              <div className="inline-block px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-300 text-xs font-semibold tracking-wider uppercase mb-2 shadow-[0_0_10px_rgba(59,130,246,0.2)]">
                Available for hire
              </div>
              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight">
                Hi, I'm <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">{name}</span>
              </h1>
              <h2 className="text-2xl md:text-3xl text-gray-400 font-light">
                {title}
              </h2>
              <p className="text-lg leading-relaxed text-gray-400 max-w-2xl mx-auto md:mx-0">
                {summary}
              </p>
              
              <div className="flex flex-col sm:flex-row items-center gap-6 justify-center md:justify-start pt-4">
                <div className="flex items-center gap-2 px-3 py-1 rounded-lg bg-white/5 border border-white/5 hover:bg-white/10 transition-colors text-sm text-gray-400">
                   <IconMapPin className="w-4 h-4 text-purple-400" />
                   {location}
                </div>
                
                <button 
                  onClick={() => setIsContactOpen(true)}
                  className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white rounded-full font-medium shadow-lg hover:shadow-purple-500/30 transition-all transform hover:-translate-y-1 flex items-center gap-2"
                >
                  <IconMail className="w-4 h-4" />
                  <span>Contact Me</span>
                </button>
              </div>

              <div className="flex gap-4 justify-center md:justify-start pt-4">
                {socials.map((social) => (
                  <a 
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white/5 border border-white/10 rounded-full text-gray-400 hover:text-white hover:bg-purple-600/20 hover:border-purple-500/50 hover:shadow-[0_0_15px_rgba(168,85,247,0.3)] transition-all duration-300 transform hover:-translate-y-1"
                    aria-label={social.platform}
                  >
                    {getSocialIcon(social.platform)}
                  </a>
                ))}
              </div>
            </div>
            
            {/* Visual Element */}
            <div className="relative shrink-0 w-64 h-64 md:w-80 md:h-80 animate-slide-up animation-delay-500">
               <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-3xl rotate-6 opacity-50 blur-lg"></div>
               <div className="absolute inset-0 bg-gray-900 rounded-3xl border border-white/10 overflow-hidden flex items-center justify-center z-10">
                 {avatarUrl && !imageError ? (
                    <img 
                      src={avatarUrl} 
                      alt={name} 
                      onError={() => setImageError(true)}
                      className="w-full h-full object-cover object-top transform hover:scale-105 transition-transform duration-700" 
                    />
                 ) : (
                   <>
                     <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:20px_20px]"></div>
                     <span className="text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-white to-gray-600 select-none">
                        MP
                     </span>
                   </>
                 )}
               </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 space-y-32 pb-32">
        
        {/* Skills Section */}
        <section className="animate-slide-up">
          <h3 className="text-3xl font-bold mb-10 flex items-center gap-3">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">Technical Arsenal</span>
            <div className="h-px bg-gradient-to-r from-purple-500/50 to-transparent flex-1"></div>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skillGroup) => (
              <div key={skillGroup.category} className="glass p-6 rounded-2xl transition-all duration-300 hover:bg-white/10 hover:shadow-lg hover:shadow-purple-500/10 group">
                <h4 className="font-semibold text-lg mb-4 text-purple-300 group-hover:text-purple-200">{skillGroup.category}</h4>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-black/30 text-gray-300 text-xs rounded-full border border-white/5 group-hover:border-purple-500/30 transition-colors">
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
          <h3 className="text-3xl font-bold mb-10 flex items-center gap-3">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">Experience</span>
            <div className="h-px bg-gradient-to-r from-purple-500/50 to-transparent flex-1"></div>
          </h3>

          <div className="space-y-8 relative pl-8 md:pl-0">
             {/* Mobile Timeline Line */}
             <div className="absolute left-2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-transparent md:hidden"></div>

            {experience.map((job, index) => (
              <div key={index} className="glass rounded-2xl p-6 md:p-8 md:ml-12 relative group glass-hover transition-all duration-500">
                {/* Desktop Timeline Dot/Line */}
                <div className="hidden md:block absolute -left-12 top-0 bottom-0 w-px bg-white/10 group-hover:bg-gradient-to-b group-hover:from-blue-500 group-hover:to-purple-500 transition-colors"></div>
                <div className="hidden md:block absolute -left-[54px] top-8 w-3 h-3 rounded-full bg-gray-900 border-2 border-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)] z-10"></div>
                
                {/* Mobile Timeline Dot */}
                <div className="md:hidden absolute -left-[29px] top-8 w-3 h-3 rounded-full bg-gray-900 border-2 border-blue-500 z-10"></div>

                <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-4">
                  <div>
                    <h4 className="text-2xl font-bold text-white group-hover:text-blue-300 transition-colors">{job.role}</h4>
                    <div className="text-lg text-purple-400 mt-1">{job.company}</div>
                  </div>
                  <span className="text-sm font-mono text-gray-400 bg-white/5 px-3 py-1 rounded-full border border-white/5 mt-2 md:mt-0 w-fit">
                    {job.startDate} — {job.endDate}
                  </span>
                </div>
                
                <p className="text-gray-300 leading-relaxed mb-6">
                  {job.description}
                </p>
                
                {job.highlights && (
                  <ul className="space-y-3 mb-6">
                    {job.highlights.map((item, i) => (
                      <li key={i} className="flex gap-3 text-sm text-gray-400">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0"></span>
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
                
                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                  {job.technologies.map(tech => (
                    <span key={tech} className="text-xs font-medium text-gray-400 px-2 py-1 bg-white/5 rounded hover:bg-white/10 hover:text-white transition-colors cursor-default">
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
          <h3 className="text-3xl font-bold mb-10 flex items-center gap-3">
             <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">Featured Projects</span>
             <div className="h-px bg-gradient-to-r from-purple-500/50 to-transparent flex-1"></div>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, idx) => (
              <div key={idx} className="glass rounded-2xl p-8 flex flex-col h-full glass-hover transition-all duration-300 group">
                <div className="flex justify-between items-start mb-4">
                  <h4 className="text-xl font-bold text-gray-100 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h4>
                  {project.link && (
                    <a href={project.link} className="p-2 bg-white/5 rounded-full hover:bg-white/20 text-gray-400 hover:text-white transition-all">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                    </a>
                  )}
                </div>
                <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.techStack.map(t => (
                    <span key={t} className="text-[10px] uppercase tracking-wider px-2 py-1 bg-blue-500/10 text-blue-300 rounded border border-blue-500/20">
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
          <h3 className="text-3xl font-bold mb-10 flex items-center gap-3">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">Education</span>
            <div className="h-px bg-gradient-to-r from-purple-500/50 to-transparent flex-1"></div>
          </h3>
          
          <div className="grid grid-cols-1 gap-4">
            {education.map((edu, idx) => (
              <div key={idx} className="glass rounded-2xl p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center border-l-4 border-l-purple-500 hover:bg-white/5 transition-colors">
                 <div>
                    <h4 className="font-bold text-xl text-white">{edu.institution}</h4>
                    <p className="text-purple-300 mt-1">{edu.degree}</p>
                 </div>
                 <span className="text-sm font-semibold text-gray-500 mt-2 sm:mt-0 bg-black/40 px-4 py-1.5 rounded-full border border-white/5">{edu.year}</span>
              </div>
            ))}
          </div>
        </section>

      </main>

      <footer className="border-t border-white/5 py-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/10 to-transparent pointer-events-none"></div>
        <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
          <p className="text-gray-500 mb-4">
            &copy; {new Date().getFullYear()} {name}. All rights reserved.
          </p>
          <p className="text-xs text-gray-600">
            Crafted with <span className="text-red-500">❤</span> using React, Tailwind & Gemini
          </p>
        </div>
      </footer>

      {/* Floating AI Chat Widget */}
      <ChatWidget />
      
      {/* Contact Modal */}
      <ContactModal 
        isOpen={isContactOpen} 
        onClose={() => setIsContactOpen(false)} 
        email={email}
        phone={phone}
        location={location}
      />
    </div>
  );
}

export default App;
