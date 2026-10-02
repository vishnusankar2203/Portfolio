import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// For GitHub Pages project sites set base to "/<repo-name>/"
export default defineConfig({ plugins: [react()], base: "./" });
