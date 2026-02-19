import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless'; // O el que estés usando

export default defineConfig({
  output: 'server',
  adapter: vercel({
    webAnalytics: { enabled: true },
    // AÑADE ESTA LÍNEA AQUÍ ABAJO:
    nodeMiddleware: true, 
    runtime: 'nodejs20.x', 
  }),
});