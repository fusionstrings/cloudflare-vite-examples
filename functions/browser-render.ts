import process from "node:process";
import Cloudflare from "cloudflare";

// It's a good practice to load credentials from environment variables
// rather than hardcoding them in your source code.
const apiToken = process.env.CLOUDFLARE_API_TOKEN;
const accountId = process.env.CLOUDFLARE_ACCOUNT_ID;

if (!apiToken) {
	throw new Error("The CLOUDFLARE_API_TOKEN environment variable is required.");
}
if (!accountId) {
	throw new Error("The CLOUDFLARE_ACCOUNT_ID environment variable is required.");
}

const client = new Cloudflare({ apiToken });

async function measureBrowserRenderPerformance() {
	console.log('Starting browser rendering performance measurement for "https://cloudflare-vite-examples.fusionstrings.workers.dev/"...');
	const startTime = performance.now();

	try {
		const content = await client.browserRendering.content.create({
			account_id: accountId,
			url: 'https://cloudflare-vite-examples.fusionstrings.workers.dev/',
		});

		const endTime = performance.now();
		console.log(`Browser rendering finished in ${(endTime - startTime).toFixed(2)}ms.`);
		console.log(content);
	} catch (error) {
		console.error('Error during browser rendering:', error);
	}
}

measureBrowserRenderPerformance();