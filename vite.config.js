import {defineConfig, splitVendorChunkPlugin} from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(), splitVendorChunkPlugin()],
    server: {
        open: true
    },
    base: "/ecommerce-v18/"
});
