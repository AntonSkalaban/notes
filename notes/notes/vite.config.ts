import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      assets: "src/assets",
      shared: "/src/shared",
      entities: "/src/entities",
      features: "/src/features",
    },
  },
});
