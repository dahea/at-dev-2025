import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/site.css', 'resources/css/app.scss', 'resources/js/site.js'],
            refresh: true,
        }),
    ],
});
