
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  define: {
    // هذا يضمن أن المتصفح يرى متغير API_KEY من Vercel
    'process.env.API_KEY': JSON.stringify(process.env.API_KEY)
  }
});
