
export default async function sitemap() {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL
  
    const staticRoutes = [
      '/about',
      '/contact',
      '/terms',
      '/privacy',
      '/services',
      '/get-started',
      ''
    ].map((route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date().toISOString(),
    }));
  
    return [ ...staticRoutes ];
  }

//NEXT_PUBLIC_SITE_URL="https://www.yourwebsite.com"
