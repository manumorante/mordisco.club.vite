import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh()],
  server: { host: true, port: 4000 },
  resolve: {
    alias: {
      '@': 'src',
      '@components': 'src/components',
      '@js': 'src/js',
      '@pages': 'src/pages',
      '@app': 'src/components/app',
    },
  },
})
