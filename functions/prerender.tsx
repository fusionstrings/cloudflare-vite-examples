import {
    prerender as ssr,
} from "preact-iso";
import { Page } from "../components/page";

async function prerender(data) {
    const { html, links } = await ssr(<Page />);
    return {
        html,
        links,
        data: { url: data.url },
        head: {
            lang: "en",
            title: "Prerendered Preact App",
            elements: new Set([
                {
                    type: "meta",
                    props: {
                        name: "description",
                        content: "This is a prerendered Preact app",
                    },
                },
            ]),
        },
    };
}

export { prerender };