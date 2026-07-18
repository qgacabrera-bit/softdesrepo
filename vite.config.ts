import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const repoName = 'softdesrepo';

export default defineConfig({
  base: process.env.GITHUB_ACTIONS ? `/${repoName}/` : '/',
  plugins: [react()],
});
