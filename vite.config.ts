import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig(({ mode }) => {
  const env = { ...loadEnv(mode, process.cwd(), ''), ...process.env };
  const path = env.VITE_BASE_PATH || '/';
  if (!path.startsWith('/') || !path.endsWith('/')) throw new Error('VITE_BASE_PATH must start and end with /');
  return { base: path, plugins: [react(), tailwindcss()], build: { outDir: 'dist' } };
});
