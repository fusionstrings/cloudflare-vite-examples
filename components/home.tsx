function Home({ title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <>
      <h1>Cloudflare Vite Examples</h1>
      <h2 id="heading"></h2>
      <p>
        This page comes from a static html template `index.html` and the Preact component `components/home.tsx`, dynamically rendered on the server using `HTMLRewriter` https://developers.cloudflare.com/workers/runtime-apis/html-rewriter/#element.
      </p>
      <button id="button" type="button">Fetch a random UUID</button>
      <output id="random" for="button"></output>
    </>
  );
}

export { Home }