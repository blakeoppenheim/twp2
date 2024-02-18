import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/

export default {
  // The base URL your application bundle will be deployed at.
  base: "./twp/", // Change this to your base URL if necessary. For example: '/my-project/'
  build: {
    outDir: "dist",
  },
  plugins: [react()],
};
