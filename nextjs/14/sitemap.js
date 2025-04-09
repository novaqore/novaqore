
export default async function sitemap() {
  const baseUrl = 'https://www.yourwebsite.com';

  const staticRoutes = [
    '/about',
    '/contact',
    '/terms',
    '/privacy',
    ''
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
  }));

  return [ ...staticRoutes ];
}
