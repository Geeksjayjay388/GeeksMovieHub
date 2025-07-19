import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
  bbase: '/GeeksMovieHub/', // 👈 Use your repo name here if deploying to GitHub Pages
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: './index.html', // 👈 This helps Vite know where to fallback
      },
    },
  },
  server: {
    open: true,
  },
});
