
import React from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCE_LOGS, COLORS } from '../constants';

const SystemLogs: React.FC = () => {
  return (
    <section className="py-32 px-6 max-w-5xl mx-auto">
      <div className="mb-16">
        <h2 className="text-3xl font-bold font-mono text-[#00f3ff] mb-2">{`// System Logs: Professional History`}</h2>
        <div className="h-1 w-20 bg-[#00f3ff]/30" />
      </div>

      <div className="bg-[#0a0a0a] border border-[#333] rounded-lg overflow-hidden shadow-2xl">
        <div className="bg-[#1a1a1a] px-4 py-3 border-b border-[#333] flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">cat system.log</span>
          </div>
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/20" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-500/20" />
          </div>
        </div>

        <div className="p-6 font-mono text-xs md:text-sm space-y-6">
          {EXPERIENCE_LOGS.map((log, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group border-l border-white/5 hover:border-[#00f3ff]/50 pl-6 transition-colors relative"
            >
              <div className="absolute -left-[1.5px] top-1 w-[3px] h-3 bg-transparent group-hover:bg-[#00f3ff] transition-colors" />
              <div className="flex flex-col md:flex-row md:items-center gap-3 mb-2">
                <span className="text-gray-500 whitespace-nowrap">[{log.date}]</span>
                <span className="text-[#00f3ff] font-bold">[{log.status}]</span>
                <span className="text-[#ffd700] uppercase font-bold tracking-tight">{log.company}</span>
              </div>
              <p className="text-gray-400 group-hover:text-gray-200 leading-relaxed">
                <span className="text-gray-700 mr-2">»</span>
                {log.description}
              </p>
            </motion.div>
          ))}
          
          <div className="pt-8 opacity-20 text-[10px] animate-pulse font-mono">
            [WAIT] SYSTEM_LISTENING_FOR_NEW_OPPORTUNITIES...
          </div>
        </div>
      </div>
    </section>
  );
};

export default SystemLogs;
