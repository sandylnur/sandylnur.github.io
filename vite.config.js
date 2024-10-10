import { defineConfig } from "vite";

export default defineConfig({
    server: {
        open: true, // Opens the browser automatically on `npm run dev`
    },
    base: "/",
    esbuild: {
        jsxFactory: "m",
        jsxFragment: "'['",
    },
});
