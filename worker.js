export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // Serve exact asset (real .html files, images, css, js)
    try {
      const res = await env.ASSETS.fetch(request);
      if (res.status !== 404) return res;
    } catch (_) {
      // ASSETS threw on unknown path — fall through to homepage
    }

    // Unknown path — redirect to root (shop is #shop anchor on the homepage)
    return Response.redirect(`${url.origin}/`, 302);
  }
};
