import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import viteTsConfigPaths from 'vite-tsconfig-paths';
import vitePluginSvgr from 'vite-plugin-svgr';

// https://vite.dev/config/
export default defineConfig({
  base: '/nosumuh-pre-task/',
  plugins: [react(), viteTsConfigPaths(), vitePluginSvgr()],
});
