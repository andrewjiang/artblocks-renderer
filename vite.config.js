import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

import dotenv from 'dotenv';

dotenv.config();

export default defineConfig({
  define: {
    'process.env.THEGRAPH_API_KEY': JSON.stringify(process.env.THEGRAPH_API_KEY)
  },
  plugins: [svelte()]
});