
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TerminalLine } from '../types';
import { COLORS } from '../constants';

interface TerminalHeroProps {
  onNavigate: (targetId: string) => void;
}

const TerminalHero: React.FC<TerminalHeroProps> = ({ onNavigate }) => {
  const [lines, setLines] = useState<TerminalLine[]>([]);
  const [isReady, setIsReady] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const sequence: TerminalLine[] = [
    { text: '> boot system --user=(recruiter || stranger || peer)', type: 'command' },
    { text: '... evaluating identity logic: status == welcome_friend', type: 'system', color: COLORS.purple },
    { text: '... resolving permissions: Access Granted (Full_View_Mode)', type: 'system', color: COLORS.blue },
    { text: '... initializing hardware_abstraction_layer [OK]', type: 'system', color: COLORS.blue },
    { text: '... loading Digital_ASIC_Verification_Core [OK]', type: 'system', color: COLORS.blue },
    { text: '... connecting to AI_Systems_Modular_Core [OK]', type: 'system', color: COLORS.yellow },
    { text: 'system ready.', type: 'output' },
    { text: '> Who is Sahana?', type: 'command' },
    { text: 'Sahana Prabhu | Computer Engineer @ UofT | ASIC & AI Architect.', type: 'output' },
    { text: 'Email: prabhu.sahana1502@gmail.com', type: 'output', color: '#888' },
    { text: 'Status: (Coffee >= 1) && (Ready_To_Build == True)', type: 'system', color: COLORS.purple },
    { text: 'Enter "help" to see available commands.', type: 'output', color: COLORS.blue },
  ];

  useEffect(() => {
    let timer: any;
    const addLines = async () => {
      for (let i = 0; i < sequence.length; i++) {
        await new Promise((resolve) => {
          timer = setTimeout(resolve, i === 0 ? 500 : 400);
        });
        setLines((prev) => [...prev, sequence[i]]);
      }
      setIsReady(true);
    };

    addLines();
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
    if (isReady && inputRef.current) {
      inputRef.current.focus();
    }
  }, [lines, isReady]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = inputValue.trim().toLowerCase();
    if (!cmd) return;

    const newLines: TerminalLine[] = [...lines, { text: `> ${inputValue}`, type: 'command' }];
    
    if (cmd === 'help') {
      newLines.push({ text: '--- AVAILABLE COMMANDS ---', type: 'output', color: COLORS.yellow });
      newLines.push({ text: 'ls              - List available system nodes', type: 'output' });
      newLines.push({ text: 'cd <node>       - Navigate to a section', type: 'output' });
      newLines.push({ text: 'cat resume.pdf  - Initiate resume downlink', type: 'output' });
      newLines.push({ text: 'run pipeline    - Start data flow visualization', type: 'output' });
      newLines.push({ text: 'who is sahana?  - Display full architect credentials', type: 'output' });
      newLines.push({ text: 'clear           - Reset terminal interface', type: 'output' });
      newLines.push({ text: '--------------------------', type: 'output', color: COLORS.yellow });
    } else if (cmd === 'ls') {
      newLines.push({ text: 'education/  projects/  experience/  contact/  resume.pdf', type: 'output' });
    } else if (cmd === 'cd education') {
      newLines.push({ text: 'Accessing academic registry...', type: 'system', color: COLORS.purple });
      setTimeout(() => onNavigate('education'), 500);
    } else if (cmd === 'cd projects' || cmd === 'run pipeline' || cmd === 'pipeline') {
      newLines.push({ text: 'Navigating to Pipeline Section...', type: 'system', color: COLORS.blue });
      setTimeout(() => onNavigate('pipeline'), 500);
    } else if (cmd === 'cd experience') {
      newLines.push({ text: 'Opening System Logs...', type: 'system', color: COLORS.blue });
      setTimeout(() => onNavigate('experience'), 500);
    } else if (cmd === 'cd contact') {
      newLines.push({ text: 'Initializing Uplink...', type: 'system', color: COLORS.blue });
      setTimeout(() => onNavigate('footer'), 500);
    } else if (cmd === 'cat resume.pdf' || cmd === 'open resume.pdf') {
      newLines.push({ text: 'Requesting downlink Sahana_Prabhu_Resume.pdf...', type: 'system', color: COLORS.yellow });
      newLines.push({ text: '... Establishing SSL tunnel [OK]', type: 'system', color: COLORS.green });
      newLines.push({ text: 'Downlink started in new window.', type: 'output' });
      window.open('https://Sahana-1502.github.io/Sahana_Prabhu_Resume.pdf', '_blank');
    } else if (cmd === 'who is sahana?' || cmd === 'whoami') {
      newLines.push({ text: 'Sahana Prabhu: ECE student @ UofT (2026). Specialized in digital verification and AI.', type: 'output' });
    } else if (cmd === 'clear') {
      setLines([]);
      setInputValue('');
      return;
    } else {
      newLines.push({ text: `command not found: ${cmd}. Type "help" for options.`, type: 'output', color: '#ff4444' });
    }

    setLines(newLines);
    setInputValue('');
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-[#050505] relative z-10" onClick={() => inputRef.current?.focus()}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-3xl aspect-[16/9] bg-[#0a0a0a] border border-[#333] rounded-lg shadow-2xl overflow-hidden flex flex-col relative"
      >
        <div className="h-8 bg-[#1a1a1a] border-b border-[#333] flex items-center px-4 gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/50" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
          <div className="w-3 h-3 rounded-full bg-blue-500/50" />
          <span className="ml-2 text-[10px] text-gray-500 font-mono uppercase tracking-widest">system_architect_v1.0.4</span>
        </div>

        <div 
          ref={containerRef}
          className="flex-1 p-6 font-mono text-sm md:text-base overflow-y-auto leading-relaxed scroll-smooth"
        >
          <AnimatePresence>
            {lines.map((line, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -5 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.1 }}
                style={{ color: line.color || (line.type === 'command' ? COLORS.yellow : '#eee') }}
                className="mb-1"
              >
                {line.text}
              </motion.div>
            ))}
          </AnimatePresence>
          
          {isReady && (
            <div className="mt-2 flex items-start">
              <span className="text-[#ffd700] whitespace-nowrap mr-2">sahana@system:~$</span>
              <form onSubmit={handleCommand} className="flex-1 relative flex items-center min-w-0">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  className="absolute inset-0 bg-transparent border-none outline-none w-full text-transparent caret-transparent z-10"
                  autoFocus
                />
                <div className="flex items-center pointer-events-none text-white whitespace-pre-wrap break-all">
                  <span>{inputValue}</span>
                  <span className="cursor-blink" style={{ backgroundColor: COLORS.blue }} />
                </div>
              </form>
            </div>
          )}
        </div>
        
        <div className="absolute inset-0 pointer-events-none opacity-[0.03] overflow-hidden">
          <div className="w-full h-full" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        </div>
      </motion.div>
    </div>
  );
};

export default TerminalHero;
