import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig((payload) => {
  console.log("payload", payload);

  return {
    plugins: [react()],

    resolve: {
      alias: {
        "@": "/src",
      },
    },

    server: {
      host: true,
      open: true,
    },
  };
});
