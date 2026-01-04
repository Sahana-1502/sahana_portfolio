
import React from 'react';
import { motion } from 'framer-motion';
import { Project } from '../types';
import { NODE_CONFIG } from '../constants';

interface PipelineNodeProps {
  project: Project;
  index: number;
}

const PipelineNode: React.FC<PipelineNodeProps> = ({ project, index }) => {
  const config = NODE_CONFIG[project.nodeType];
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      className={`flex w-full items-center mb-24 md:mb-40 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}
    >
      {/* Visual Indicator */}
      <div className="relative flex-shrink-0 z-10 hidden md:block px-12">
        <motion.div 
          style={{ borderColor: config.color, boxShadow: `0 0 20px ${config.color}33` }}
          className="w-20 h-20 rounded-2xl border-2 bg-[#0a0a0a] flex items-center justify-center text-white"
        >
          <div style={{ color: config.color }}>{config.icon}</div>
        </motion.div>
        
        {/* Label badge */}
        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] font-mono tracking-widest opacity-60" style={{ color: config.color }}>
          {config.label}
        </div>
      </div>

      {/* Content Card */}
      <div className={`flex-grow md:max-w-xl ${isEven ? 'md:text-left' : 'md:text-right'}`}>
        <div className="bg-[#0c0c0c] border border-white/10 rounded-xl p-8 hover:border-white/20 transition-all group">
           <div className="flex md:hidden mb-4" style={{ color: config.color }}>{config.icon}</div>
          
          <h3 className="text-2xl font-bold mb-2 group-hover:text-white transition-colors" style={{ color: config.color }}>
            {project.title}
          </h3>
          <p className="text-gray-400 font-medium mb-4 italic">{project.description}</p>
          <p className="text-gray-300 mb-6 leading-relaxed">
            {project.longDescription}
          </p>
          
          <div className={`flex flex-wrap gap-2 ${isEven ? 'justify-start' : 'md:justify-end'}`}>
            {project.techTags.map((tag) => (
              <span 
                key={tag} 
                className="px-3 py-1 rounded-full text-[10px] font-mono bg-[#1a1a1a] border border-white/5 text-gray-400"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PipelineNode;
