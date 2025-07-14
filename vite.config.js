// Text compression еще не работает, но хорошо иметь для выгрузки на хост

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import viteCompression from "vite-plugin-compression";

export default defineConfig({
  plugins: [vue(), viteCompression({ algorithm: "gzip" })],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "~": path.resolve(__dirname, "./"),
    },
  },

  esbuild: {
    minify: true,
  },

  server: {
    open: true,
    port: 3000,
  },
});
