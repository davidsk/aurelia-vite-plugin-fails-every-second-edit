import { defineConfig } from 'vite';
import aurelia from '@aurelia/vite-plugin';
import Inspect from 'vite-plugin-inspect';

export default defineConfig({
    plugins: [aurelia(), Inspect()],
});