import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  // Hier tragen wir den genauen Unterordner ein, den dein Server erwartet:
  base: "/homepage_vorlage2/",

  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        impressum: resolve(__dirname, "impressum.html"),
        datenschutz: resolve(__dirname, "datenschutz.html"),
      },
    },
  },
});
