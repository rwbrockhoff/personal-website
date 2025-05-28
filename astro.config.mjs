// @ts-check
import { defineConfig } from 'astro/config';
import path from 'path';
import { fileURLToPath } from 'url';
import mdx from '@astrojs/mdx';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://astro.build/config
export default defineConfig({
  integrations: [mdx()],
  vite: {
    resolve: {
      // alias path configuration
      alias: {
        '@components': path.resolve(__dirname, './src/components'),
        '@data': path.resolve(__dirname, './src/data'),
        '@images': path.resolve(__dirname, './src/assets/images'),
        '@layouts': path.resolve(__dirname, './src/layouts'),
        '@scripts': path.resolve(__dirname, './src/scripts'),
        '@styles': path.resolve(__dirname, './src/styles'),
      },
    },
  },
});
