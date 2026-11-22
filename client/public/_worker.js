// Cloudflare Workers & Pages Advanced SPA Routing Handler
export default {
  async fetch(request, env) {
    // 1. Attempt to fetch static assets first
    try {
      if (env && env.ASSETS) {
        const assetResponse = await env.ASSETS.fetch(request);
        if (assetResponse.status !== 404) {
          return assetResponse;
        }
      }
    } catch (err) {
      // Fall through to index fallback
    }

    // 2. SPA Fallback: Serve index.html for all client-side navigation routes
    try {
      if (env && env.ASSETS) {
        const indexRequest = new Request(new URL('/', request.url), request);
        return await env.ASSETS.fetch(indexRequest);
      }
    } catch (err) {
      // Fallback
    }

    return fetch(request);
  },
};
