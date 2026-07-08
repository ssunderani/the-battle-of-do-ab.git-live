import { createFileRoute } from "@tanstack/react-router";

const BASE_URL = "";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const entries = [
          { path: "/", priority: "1.0", changefreq: "weekly" },
          { path: "/about-book", priority: "0.9", changefreq: "monthly" },
          { path: "/authors", priority: "0.8", changefreq: "monthly" },
          { path: "/buy", priority: "0.9", changefreq: "monthly" },
          { path: "/gallery", priority: "0.7", changefreq: "monthly" },
          { path: "/reviews", priority: "0.7", changefreq: "weekly" },
          { path: "/contact", priority: "0.6", changefreq: "yearly" },
        ];
        const urls = entries.map((e) =>
          `  <url><loc>${BASE_URL}${e.path}</loc><changefreq>${e.changefreq}</changefreq><priority>${e.priority}</priority></url>`
        );
        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...urls,
          `</urlset>`,
        ].join("\n");
        return new Response(xml, {
          headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" },
        });
      },
    },
  },
});
