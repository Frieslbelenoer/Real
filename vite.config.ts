import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  css: {
    // Opsi 1: Hapus properti minify untuk menggunakan default (esbuild)
    // minify: 'esbuild',

    // Opsi 2: Biarkan tidak terdefinisi (akan menggunakan default esbuild)
    // minify: undefined,

    // Opsi 3: Menonaktifkan minifikasi untuk debugging
    // minify: false,
  },
});