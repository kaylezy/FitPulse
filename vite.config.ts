// import { defineConfig } from 'vite'


// // https://vite.dev/config/
// export default defineConfig({
// })


import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'
import tsconfigPaths from "vite-tsconfig-paths"

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor';
          }
          if (id.includes('src/some-large-module')) {
            return 'some-large-module';
          }
        }
      }
    },
    chunkSizeWarningLimit: 1000 // Adjust as needed
  }
});