import { defineConfig } from "vite";

import typescript from "@rollup/plugin-typescript";
import { compileLitTemplates } from "@lit-labs/compiler";

export default defineConfig({
    build: {
        target: "ESNext",

        minify: "esbuild",
        sourcemap: false,

        rollupOptions: {
            input: ["index.html", "src/main.html"],
            plugins: [
                typescript({
                    transformers: {
                        before: [compileLitTemplates()],
                    },
                }),
            ],
        },
    },
});
