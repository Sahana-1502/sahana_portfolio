
export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  techTags: string[];
  nodeType: 'INGESTION' | 'PROCESSING' | 'INTELLIGENCE' | 'AGENTS';
}

export interface Experience {
  date: string;
  status: 'SUCCESS' | 'PENDING' | 'RUNNING';
  company: string;
  description: string;
}

export interface TerminalLine {
  text: string;
  type: 'command' | 'output' | 'system';
  color?: string;
}
