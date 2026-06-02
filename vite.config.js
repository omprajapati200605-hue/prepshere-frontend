import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// This tells Vite how to compile your React and JSX files
export default defineConfig({
    plugins: [react()],
})