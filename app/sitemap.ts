import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://example.com', lastModified: new Date() },
    { url: 'https://example.com/menu', lastModified: new Date() },
    { url: 'https://example.com/promotions', lastModified: new Date() },
    { url: 'https://example.com/about', lastModified: new Date() },
    { url: 'https://example.com/contact', lastModified: new Date() },
    { url: 'https://example.com/privacy', lastModified: new Date() },
  ]
}
