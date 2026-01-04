import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');
  return {
    // -----------------------------------------------------------------------
    // DEPLOYMENT CONFIG (Add this section)
    // -----------------------------------------------------------------------
    
    // OPTION A: For Vercel or Netlify (Recommended)
    // Keep this line commented out:
    // base: "/sahana_portfolio/",

    // OPTION B: For GitHub Pages
    // If deploying to github.io, UNCOMMENT the line below:
    // base: "/sahana_portfolio/",
    
    // -----------------------------------------------------------------------

    server: {
      port: 3000,
      host: '0.0.0.0',
    },
    plugins: [react()],
    
    // This part is crucial for your Gemini Build to work
    define: {
      'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
    },
    
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      }
    },
    
    build: {
      outDir: 'dist',
    }
  };
});