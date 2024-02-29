// pages/api/sitemap.xml.js
import { SitemapStream, streamToPromise } from "sitemap";
import { Readable } from "stream";

export default async (req, res) => {
  // Listado de tus páginas
  const sitemap = [
    {
      url: "/",
      changefreq: "monthly",
      priority: 1.0,
    },
    {
      url: "/contacto",
      changefreq: "yearly",
      priority: 0.8,
    },
  ];
  const sitemapStream = new SitemapStream({
    hostname: process.env.NEXT_PUBLIC_URL_PROD || process.env.NEXT_PUBLIC_URL_DEV || 'https://holiday-tau.vercel.app/',
  });
  res.writeHead(200, {
    "Content-Type": "application/xml",
  });
  const xmlString = await streamToPromise(
    Readable.from(sitemap).pipe(sitemapStream)
  ).then((data) => data.toString());
  res.end(xmlString);
};
