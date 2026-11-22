// Cloudflare Workers Entry Point for Velour & Weave
export default {
  async fetch(request, env) {
    // 1. Attempt to serve static assets first (HTML, CSS, JS, images, fonts)
    try {
      if (env && env.ASSETS) {
        const assetResponse = await env.ASSETS.fetch(request);
        if (assetResponse.status !== 404) {
          return assetResponse;
        }
      }
    } catch (err) {
      // Fall through to SPA routing fallback
    }

    // 2. SPA Routing Fallback: Return index.html for all client-side navigation routes
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
