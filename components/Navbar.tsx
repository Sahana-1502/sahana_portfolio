
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { COLORS } from '../constants';

interface NavbarProps {
  onNavigate: (targetId: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: '[ ./education ]', id: 'education' },
    { label: '[ ./projects ]', id: 'pipeline' },
    { label: '[ ./experience ]', id: 'experience' },
    { label: '[ ./resume.pdf ]', id: 'resume' },
    { label: '[ ./contact ]', id: 'footer' },
  ];

  const handleClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    e.stopPropagation();
    if (id === 'resume') {
      window.open('https://Sahana-1502.github.io/Sahana_Prabhu_Resume.pdf', '_blank');
      return;
    }
    onNavigate(id);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${
        scrolled ? 'bg-[#050505]/95 backdrop-blur-md border-b border-white/5 py-4 shadow-xl' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="font-mono text-[#00f3ff] text-xs md:text-sm font-bold tracking-tighter cursor-default select-none">
          sahana@uoftece:~$ <span className="text-white hidden sm:inline">cat architect_profile</span>
        </div>
        
        <div className="flex gap-2 md:gap-6 items-center">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={(e) => handleClick(e, item.id)}
              className="font-mono text-[9px] md:text-xs text-gray-400 hover:text-[#00f3ff] transition-colors py-2 px-1 cursor-pointer bg-transparent border-none outline-none focus:text-[#00f3ff] whitespace-nowrap"
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
