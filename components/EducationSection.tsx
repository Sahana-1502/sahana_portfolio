
import React from 'react';
import { motion } from 'framer-motion';
import { Award, Camera, Music, BookOpen, Users, Leaf, Target, Activity } from 'lucide-react';
import { COLORS } from '../constants';

const EducationSection: React.FC = () => {
  const courses = [
    "Computer Architecture", "Machine Learning", "Digital Systems Design", 
    "Algorithms & Data Structures", "Operating Systems", "Sustainable Energy Systems",
    "Analog Electronics", "Control Systems"
  ];

  const extras = [
    { icon: <Users size={16} />, role: "Community Outreach Director", org: "EngSoc", color: COLORS.blue },
    { icon: <Users size={16} />, role: "ECE Class Representative", org: "EngSoc", color: COLORS.purple },
    { icon: <Leaf size={16} />, role: "Sustainable Buildings Network", org: "Member", color: COLORS.green },
    { icon: <BookOpen size={16} />, role: "EDI Chair", org: "Frosh Week", color: COLORS.yellow },
    { icon: <Activity size={16} />, role: "Dancer", org: "Spicy Vindaloos", color: COLORS.blue },
    { icon: <Music size={16} />, role: "Choreographer", org: "Skule Nite", color: COLORS.purple },
    { icon: <Target size={16} />, role: "Leadership Training Coordinator", org: "Frosh Week", color: COLORS.yellow }
  ];

  return (
    <section className="py-32 px-6 max-w-6xl mx-auto relative overflow-hidden">
      <div className="mb-20">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="inline-block px-3 py-1 border border-[#bc13fe]/30 text-[#bc13fe] text-xs font-mono mb-4 rounded"
        >
          ARCHITECTURE_DEFINITION_V2026
        </motion.div>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tighter uppercase">Academic Foundation</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Main Degree Block */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="lg:col-span-7 bg-[#0a0a0a] border border-[#333] rounded-xl p-8 relative group"
        >
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
            <div>
              <h3 className="text-[#00f3ff] font-mono text-xl md:text-2xl font-bold mb-1">University of Toronto</h3>
              <p className="text-gray-400 font-mono text-sm tracking-tight">Faculty of Applied Science & Engineering</p>
            </div>
            <div className="bg-[#111] border border-white/5 px-4 py-2 rounded font-mono text-xs text-right">
              <span className="text-gray-500">EXPECTED_EXIT:</span> <br/>
              <span className="text-[#00ff9f] font-bold">JUNE 2026</span>
            </div>
          </div>

          <div className="space-y-8 relative z-10">
            <div>
              <p className="text-[10px] font-mono text-gray-500 uppercase tracking-widest mb-2">Primary_Specialization</p>
              <p className="text-xl md:text-2xl font-bold text-white leading-tight">BASc Computer Engineering</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="text-[10px] font-mono text-gray-500 uppercase tracking-widest mb-2">Subsystem_Minors</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-[#bc13fe]/10 border border-[#bc13fe]/30 text-[#bc13fe] text-xs font-mono rounded-full">Artificial Intelligence</span>
                  <span className="px-3 py-1 bg-[#00ff9f]/10 border border-[#00ff9f]/30 text-[#00ff9f] text-xs font-mono rounded-full">Sustainable Energy</span>
                </div>
              </div>
              <div>
                <p className="text-[10px] font-mono text-gray-500 uppercase tracking-widest mb-2">Honors_Registry</p>
                <ul className="text-xs space-y-2 font-mono text-gray-400">
                  <li className="flex items-center gap-2"><Award size={14} className="text-[#ffd700]" /> Engineering Intl Scholarship</li>
                  <li className="flex items-center gap-2"><Award size={14} className="text-[#ffd700]" /> Dean's Honour List (4/6)</li>
                </ul>
              </div>
            </div>

            <div>
              <p className="text-[10px] font-mono text-gray-500 uppercase tracking-widest mb-3">Core_Modules_Loaded</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                {courses.map((course, i) => (
                  <div key={i} className="px-2 py-3 bg-[#111] border border-white/5 rounded text-[10px] font-mono text-gray-500 hover:text-white hover:border-white/20 transition-all cursor-default text-center">
                    {course}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Extracurriculars / System Threads */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="lg:col-span-5 space-y-6"
        >
          <div className="bg-[#0c0c0c] border border-white/5 rounded-xl p-6 h-full flex flex-col">
            <h4 className="text-sm font-mono text-gray-400 uppercase tracking-[0.2em] mb-6 border-b border-white/5 pb-4">Background_Threads</h4>
            
            <div className="space-y-6 flex-1 pr-2 overflow-y-auto max-h-[500px] scrollbar-hide">
              {extras.map((item, i) => (
                <div key={i} className="flex gap-4 group">
                  <div className="mt-1 p-2 rounded bg-white/5 text-gray-400 group-hover:text-white transition-colors flex-shrink-0" style={{ color: item.color }}>
                    {item.icon}
                  </div>
                  <div className="flex flex-col">
                    <p className="text-[10px] font-mono text-gray-500 uppercase tracking-tighter leading-none mb-1">{item.org}</p>
                    <p className="text-xs font-bold text-gray-200 leading-tight">{item.role}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-white/5 flex-shrink-0">
              <div className="text-[10px] font-mono text-gray-600 space-y-1">
                <p>&gt; sys.integrity_check()</p>
                <p className="text-green-500/50">... PASS: Well_Rounded_Architect</p>
                <p>&gt; sys.multitasking_efficiency</p>
                <p className="text-blue-500/50">... VALUE: HIGH_PERFORMANCE</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;
