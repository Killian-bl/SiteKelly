import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@mui/styled-engine': path.resolve(
                __dirname,
                'node_modules',
                '@mui',
                'styled-engine'
            ),
        },
    },
    optimizeDeps: {
        include: [
            '@mui/material',
            '@mui/system',
            '@mui/icons-material',
            '@emotion/react',
            '@emotion/styled',
        ],
    },
})
