
import React from 'react';
import Navbar from './components/Navbar';
import TerminalHero from './components/TerminalHero';
import PipelineSection from './components/PipelineSection';
import SystemLogs from './components/SystemLogs';
import EducationSection from './components/EducationSection';
import { Github, Linkedin, Mail } from 'lucide-react';

const App: React.FC = () => {
  const handleNavigate = (targetId: string) => {
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80; // Offset for sticky navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    } else {
      console.warn(`Target element with id "${targetId}" not found.`);
    }
  };

  return (
    <div className="bg-[#050505] selection:bg-[#00f3ff]/30 selection:text-[#00f3ff] min-h-screen">
      <Navbar onNavigate={handleNavigate} />
      
      <main>
        <div id="hero">
          <TerminalHero onNavigate={handleNavigate} />
        </div>
        <div id="education">
          <EducationSection />
        </div>
        <div id="pipeline">
          <PipelineSection />
        </div>
        <div id="experience">
          <SystemLogs />
        </div>
      </main>

      <footer id="footer" className="py-32 px-6 border-t border-white/5 bg-[#0a0a0a]">
        <div className="max-w-5xl mx-auto text-center">
          <div className="font-mono text-sm text-gray-600 mb-12">
            <div>----------------------------------------</div>
            <div>Computer Engineering System Log</div>
            <div>AI | Data | Hardware-Software Co-design</div>
            <div>----------------------------------------</div>
          </div>

          <h2 className="text-3xl font-bold mb-8">The System Architect.</h2>
          <p className="text-gray-400 mb-12 max-w-2xl mx-auto font-mono text-sm leading-relaxed">
            Multilingual Computer Engineering student @ UofT ECE specializing in 
            end-to-end data pipelines, agentic AI, and digital ASIC verification. 
            Bridging technical depth with strategic leadership.
          </p>
          
          <div className="flex justify-center gap-8 mb-16">
            <a href="https://github.com/Sahana-1502" target="_blank" rel="noopener noreferrer" className="p-4 bg-[#111] border border-[#333] rounded-full hover:border-[#00f3ff] hover:text-[#00f3ff] transition-all cursor-pointer">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/p-sahana" target="_blank" rel="noopener noreferrer" className="p-4 bg-[#111] border border-[#333] rounded-full hover:border-[#bc13fe] hover:text-[#bc13fe] transition-all cursor-pointer">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:prabhu.sahana1502@gmail.com" className="p-4 bg-[#111] border border-[#333] rounded-full hover:border-[#ffd700] hover:text-[#ffd700] transition-all cursor-pointer">
              <Mail className="w-6 h-6" />
            </a>
          </div>
          
          <p className="text-gray-600 text-[10px] font-mono tracking-widest uppercase">
            &copy; {new Date().getFullYear()} Sahana Prabhu | System Terminal Session Ended
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
