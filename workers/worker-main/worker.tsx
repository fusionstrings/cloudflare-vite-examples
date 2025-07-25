import { renderToReadableStream } from 'preact-render-to-string/stream';
import { Home } from '../../components/home';
/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Bind resources to your worker in `wrangler.jsonc`. After adding bindings, a type definition for the
 * `Env` object can be regenerated with `npm run cf-typegen`.
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

class ElementSSRHandler {
	private pathname: string;

	constructor({ pathname }: { pathname: string }) {
		this.pathname = pathname;
	}
	/**
	 * This method is called when the HTMLRewriter encounters an element with the tag name "body".
	 * It replaces the content of the body with a Preact component rendered to a readable stream.
	 */
	async element(element: Element) {
		// An incoming element, such as `div`
		console.log(`Incoming element: ${element.tagName}`);
		const stream = renderToReadableStream(<Home title='My Home Page' description='Welcome to my home page!' />);
		element.replace(stream, { html: true });
	}
}

async function handleRequest(request: Request, env: Env): Promise<Response> {
	//const templateURL = new URL('/templates/home.html', request.url);
	const response = await env.ASSETS.fetch(request);

	return new HTMLRewriter().on("body", new ElementSSRHandler({ pathname: new URL(request.url).pathname })).transform(response);
}

export default {
	async fetch(request, env, ctx): Promise<Response> {
		const url = new URL(request.url);
		switch (url.pathname) {
			case '/':
				return handleRequest(request, env);
			case '/navigator':
				return new Response(`Running in ${navigator.userAgent}!`);;
			case '/message':
				return new Response('Hello, World!');
			case '/random':
				return new Response(crypto.randomUUID());
			default:
				return new Response('Not Found', { status: 404 });
		}
	},
} satisfies ExportedHandler<Env>;
