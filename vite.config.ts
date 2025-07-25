import { defineConfig } from "vite";
import { cloudflare } from "@cloudflare/vite-plugin";
import { paraglideVitePlugin } from '@inlang/paraglide-js'
import preact from "@preact/preset-vite";

export default defineConfig({
    plugins: [paraglideVitePlugin({ project: './project.inlang', outdir: './i18n/paraglide', }), cloudflare(), preact({
        // prerender: {
        //     enabled: true,
        //     prerenderScript: "./functions/prerender.tsx",
        //     //additionalPrerenderRoutes: ["/404"],
        //     previewMiddlewareEnabled: true,
        //     //previewMiddlewareFallback: "/404",
        // },
    })],
    "build": {
        assetsInlineLimit: 0,
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