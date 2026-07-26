import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    tanstackStart(),
    react(),
    tailwindcss(),
    tsconfigPaths(),
  ],
  optimizeDeps: {
    exclude: [
      "@tanstack/react-start",
      "@tanstack/react-start/client",
      "@tanstack/react-start/server-entry",
      "@tanstack/start-server-core",
      "@tanstack/start-client-core",
    ],
  },
});


