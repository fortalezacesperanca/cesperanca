import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { Env } from './src/config/env';

Env.init(process.env.VITE_TARGET as string);
let base = Env.getEnv().HOST;
console.log({ base });

// https://vite.dev/config/
export default defineConfig({
  base,
  server: {
    host: '0.0.0.0',
    port: 5173,
  },
  plugins: [react()],
});
