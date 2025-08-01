import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import viteCompression from "vite-plugin-compression";

export default defineConfig({
  base: "/rocont-entry-task/",
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

  preview: {
    port: 3000,
    host: true,
  },
  server: {
    open: true,
    port: 3000,
  },
});
