import { tanstackRouter } from '@tanstack/router-plugin/vite';
import babel from '@rolldown/plugin-babel';
import react, { reactCompilerPreset } from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';
import { defineConfig } from 'vite';
import { fileURLToPath, URL } from 'node:url';

// https://vite.dev/config/
export default defineConfig({
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
        },
    },
    plugins: [
        tanstackRouter({
            target: 'react',
            autoCodeSplitting: true,
        }),
        react(),
        babel({ presets: [reactCompilerPreset()] }),
        VitePWA({
            strategies: 'generateSW',
            registerType: 'autoUpdate',
            includeAssets: [
                'favicon.ico',
                'favicon-96x96.png',
                'favicon.svg',
                'apple-touch-icon.png',
                'web-app-manifest-192x192.png',
                'web-app-manifest-512x512.png',
            ],
            manifest: {
                id: '/',
                name: 'Smarter Golf',
                short_name: 'Smarter Golf',
                description: 'Digital scorecard and practice tools for smarter golf.',
                lang: 'en',
                dir: 'ltr',
                theme_color: '#121212',
                background_color: '#121212',
                display: 'standalone',
                display_override: ['standalone'],
                start_url: '/',
                scope: '/',
                orientation: 'portrait',
                categories: ['sports', 'health', 'productivity'],
                icons: [
                    {
                        src: '/web-app-manifest-192x192.png',
                        sizes: '192x192',
                        type: 'image/png',
                        purpose: 'any maskable',
                    },
                    {
                        src: '/web-app-manifest-512x512.png',
                        sizes: '512x512',
                        type: 'image/png',
                        purpose: 'any maskable',
                    },
                ],
            },
            workbox: {
                cleanupOutdatedCaches: true,
                navigateFallback: '/index.html',
            },
        }),
    ],
});
