import { paraglideVitePlugin } from '@inlang/paraglide-js'
import { defineConfig } from "vite";
import { cloudflare } from "@cloudflare/vite-plugin";

export default defineConfig({
    plugins: [paraglideVitePlugin({ project: './project.inlang', outdir: './i18n/paraglide' }),cloudflare()],
    "build": {
        sourcemap: true,
        manifest: true,
        ssrManifest: true,
        rollupOptions: {
            input: {
                main: new URL("./index.html", import.meta.url).pathname,
            },
        },
    }
});