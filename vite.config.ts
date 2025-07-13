import { defineConfig } from "vite";
import { cloudflare } from "@cloudflare/vite-plugin";

export default defineConfig({
    plugins: [cloudflare()],
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