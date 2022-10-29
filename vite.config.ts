import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import unocss from "unocss/vite";
import { h32 } from "xxhashjs";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), unocss()],
  css: {
    modules: {
      generateScopedName: (name: string, filepath: string, css) => {
        // gets the module name and removes everything else
        // /path/to/File.module.css => file
        const filename = filepath.split("/").pop().split(".")[0].toLowerCase();
        const key = h32(name, 0xabcd).toString(16);

        return `${filename}-${key}`;
      },
      localsConvention: "camelCase"
    },
  },
});
