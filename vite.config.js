import { defineConfig } from "vite";

export default defineConfig({
  base: "/devvictor/",
  build: {
    outDir: "dist",
    assetsDir: "assets",
  },
});
