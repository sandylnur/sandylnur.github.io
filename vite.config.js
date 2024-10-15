import { defineConfig } from "vite";

export default defineConfig({
    server: {
        open: true,
    },
    base: "/",
    esbuild: {
        jsxFactory: "m",
        jsxFragment: "'['",
    },
});
