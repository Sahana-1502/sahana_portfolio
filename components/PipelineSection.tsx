
import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { PROJECTS, COLORS } from '../constants';
import PipelineNode from './PipelineNode';

const PipelineSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const pathLength = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const packetPos = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div ref={containerRef} className="relative min-h-screen py-32 md:py-60 px-6 max-w-6xl mx-auto overflow-visible">
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-[#050505] to-transparent z-10" />
      
      <div className="text-center mb-40 relative">
         <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="inline-block px-3 py-1 border border-[#00f3ff]/30 text-[#00f3ff] text-xs font-mono mb-4 rounded"
          >
            SYSTEM_ARCHITECTURE_OVERVIEW
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase">The System Pipeline</h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto font-mono text-sm">Visualizing the flow from raw hardware ingestion to agentic deployment.</p>
      </div>

      {/* The Central Pipe (SVG Line) */}
      <div className="absolute top-[400px] bottom-0 left-1/2 -translate-x-1/2 w-1 hidden md:block">
        <svg width="100%" height="100%" preserveAspectRatio="none">
          <line x1="50%" y1="0" x2="50%" y2="100%" stroke="#1a1a1a" strokeWidth="2" strokeDasharray="10 10" />
          <motion.line 
            x1="50%" y1="0" x2="50%" y2="100%" 
            stroke={COLORS.blue} 
            strokeWidth="2" 
            style={{ pathLength }}
          />
        </svg>
        
        {/* Animated Data Packet */}
        <motion.div 
          style={{ top: packetPos, left: '50%' }}
          className="absolute w-4 h-4 -translate-x-1/2 -translate-y-1/2"
        >
          <div className="w-full h-full rounded-full bg-[#00f3ff] shadow-[0_0_15px_rgba(0,243,255,0.8)] animate-pulse" />
        </motion.div>
      </div>

      {/* Nodes */}
      <div className="relative z-20">
        {PROJECTS.map((project, idx) => (
          <PipelineNode key={project.id} project={project} index={idx} />
        ))}
      </div>
    </div>
  );
};

export default PipelineSection;
