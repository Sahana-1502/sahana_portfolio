
import React from 'react';
import { Cpu, Database, Zap, Bot } from 'lucide-react';
import { Project, Experience } from './types';

export const COLORS = {
  void: '#050505',
  charcoal: '#0a0a0a',
  blue: '#00f3ff',
  purple: '#bc13fe',
  yellow: '#ffd700',
  indigo: '#6366f1',
  green: '#00ff9f',
};

export const PROJECTS: Project[] = [
  {
    id: 'hpc-stuttgart',
    title: 'HPC Stuttgart Research',
    description: 'C++ Data Ingestion & 3D Visualization',
    longDescription: 'Engineered high-performance C++ data ingestion pipelines for COVISE/OpenCover platforms. Developed custom algorithms for traffic trajectory data extraction and 3D rendering, reducing processing time by 30% via optimized parsing.',
    techTags: ['C++', 'HPC', 'COVISE', 'Data Pipelines', 'Algorithms'],
    nodeType: 'INGESTION'
  },
  {
    id: 'synopsys',
    title: 'Digital ASIC Verification',
    description: 'PCIe PHY IP @ Synopsys',
    longDescription: 'Developed constrained-random SystemVerilog UVM testbenches for PCIe PHY IP verification. Enhanced regression results by identifying critical corner cases and automated block-level flows using TCL/Perl scripting.',
    techTags: ['SystemVerilog', 'UVM', 'Synopsys Verdi', 'TCL', 'PCIe PHY'],
    nodeType: 'PROCESSING'
  },
  {
    id: 'bird-classification',
    title: 'Deep Learning Vision',
    description: 'Species Classification & ML Deployment',
    longDescription: 'Architected a scalable ML pipeline using ResNet-101 and YOLOv8, achieving 82.41% accuracy (8x improvement over baseline). Implemented automated monitoring with early stopping and learning rate scheduling.',
    techTags: ['Python', 'TensorFlow', 'ResNet-101', 'YOLOv8', 'MLOps'],
    nodeType: 'INTELLIGENCE'
  },
  {
    id: 'galaxy-ornament',
    title: 'Galaxy Ornament Simulation',
    description: 'Procedural Shader Pipeline (CSC317)',
    longDescription: 'Simulated a "Galaxy within a Glass Ornament" featuring 4000+ objects in logarithmic spirals. Implemented Fresnel effects, Studio Lighting models, and domain-warped "Solaris Stars" with life-cycle animations in GLSL.',
    techTags: ['C++', 'GLSL', 'Shader Pipeline', 'OpenGL', 'Procedural'],
    nodeType: 'INTELLIGENCE'
  },
  {
    id: 'agentic-screener',
    title: 'Agentic Clinical Trial Screener',
    description: 'Modular LLM Multi-Agent System',
    longDescription: 'Architected modular agentic AI using PatientExtraction and TrialMatching agents. Reduced patient screening time from 3 hours to 5 minutes (96% improvement) with enterprise-grade Pydantic data validation.',
    techTags: ['Python', 'Pydantic', 'LangChain', 'Streamlit', 'Agentic AI'],
    nodeType: 'AGENTS'
  }
];

export const EXPERIENCE_LOGS: Experience[] = [
  {
    date: '2024-05 :: 2025-08',
    status: 'SUCCESS',
    company: 'SYNOPSYS',
    description: 'Digital Verification Intern: Built UVM testbenches for PCIe PHY IP, managed 50+ test cases, and trained 4 verification teams globally.'
  },
  {
    date: '2025-07 :: PRESENT',
    status: 'RUNNING',
    company: 'EMERGING LEADERS',
    description: 'Program Co-Designer: Strategic planning and cross-functional curriculum design for leadership initiatives at UofT.'
  },
  {
    date: '2022-06 :: 2025-09',
    status: 'SUCCESS',
    company: 'REACH ALLIANCE / LAIDLAW',
    description: 'Researcher: Python-based data analysis for humanitarian aid technology; conducted 20+ stakeholder interviews in Vanuatu.'
  },
  {
    date: '2023-09 :: 2024-05',
    status: 'SUCCESS',
    company: 'ENGSOC UOFT',
    description: 'ECE Class Rep & Outreach Director: Managed multi-channel campaigns for 400+ students and negotiated resource improvements.'
  },
  {
    date: '2020-04 :: 2020-07',
    status: 'SUCCESS',
    company: 'SOAP CYCLING SINGAPORE',
    description: 'Project Management Intern: COVID-19 scenario projections for recycling expansion and warehouse inventory optimization.'
  }
];

export const NODE_CONFIG = {
  INGESTION: { icon: <Cpu className="w-8 h-8" />, color: COLORS.blue, label: 'INGESTION (DATA/HPC)' },
  PROCESSING: { icon: <Database className="w-8 h-8" />, color: COLORS.purple, label: 'PROCESSING (VERIFICATION)' },
  INTELLIGENCE: { icon: <Zap className="w-8 h-8" />, color: COLORS.yellow, label: 'INTELLIGENCE (AI/SHADER)' },
  AGENTS: { icon: <Bot className="w-8 h-8" />, color: COLORS.green, label: 'DEPLOYMENT (AGENTS)' },
};
