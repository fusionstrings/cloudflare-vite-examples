function Home({ title,
  description,
  home
}: {
  title: string;
  description: string;
  home: string;
}) {
  return (
    <>
      <h1>Cloudflare Vite Examples</h1>
      <h2 id="heading"></h2>
      <h3>{title}</h3>
      <h4>{home}</h4>
      <x-greeting name="There"></x-greeting>
      <p>
        This page comes from a static html template `index.html` and the Preact component `components/home.tsx`, dynamically rendered on the server using `HTMLRewriter` https://developers.cloudflare.com/workers/runtime-apis/html-rewriter/#element.
      </p>
      <button id="button" type="button">Fetch a random UUID</button>
      <output id="random" for="button"></output>
    </>
  );
}

export { Home }