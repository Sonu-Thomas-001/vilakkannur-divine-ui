import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  canonicalPath?: string;
  schema?: Record<string, any> | Record<string, any>[];
}

export function SEO({ title, description, canonicalPath, schema }: SEOProps) {
  const siteUrl = 'https://vilakkannurchurch.vercel.app';
  const url = canonicalPath ? `${siteUrl}${canonicalPath}` : siteUrl;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      
      {/* Open Graph / Social Media */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={`${siteUrl}/og-image.jpg`} />

      {/* Multilingual SEO Hreflang Tags */}
      <link rel="alternate" hrefLang="en" href={url} />
      <link rel="alternate" hrefLang="ml" href={url} />
      <link rel="alternate" hrefLang="hi" href={url} />
      <link rel="alternate" hrefLang="ta" href={url} />
      <link rel="alternate" hrefLang="x-default" href={url} />

      {/* Schema Markup (JSON-LD) */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
}
