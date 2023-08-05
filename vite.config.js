import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  babel: {
    plugins: ["@babel/plugin-transform-runtime"],
    optimizeDeps: {
      include: ["react", "react-dom", "multi-image-input"],
    },
    target: "es2020",
  },
});
