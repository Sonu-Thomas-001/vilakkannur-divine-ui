import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

export const SITE_URL = 'https://vilakkannurchurch.vercel.app';
export const DEFAULT_OG_IMAGE = 'https://cdn.jsdelivr.net/gh/Sonu-Thomas-001/image-host@master/Vilakkannur%20img/church.jpg';

interface SEOProps {
  title: string;
  description: string;
  canonicalPath?: string;
  ogType?: 'website' | 'article';
  ogImage?: string;
  schema?: Record<string, any> | Record<string, any>[];
  noIndex?: boolean;
  noindex?: boolean;
}

export function SEO({
  title,
  description,
  canonicalPath = '',
  ogType = 'website',
  ogImage = DEFAULT_OG_IMAGE,
  schema,
  noIndex = false,
  noindex = false,
}: SEOProps) {
  const { i18n } = useTranslation();
  const shouldNoIndex = noIndex || noindex;

  // Determine current language code
  const currentLang = i18n.language ? i18n.language.split('-')[0] : 'en';

  // Normalize path without trailing slash (except root)
  const rawPath = canonicalPath.startsWith('/')
    ? canonicalPath
    : canonicalPath ? `/${canonicalPath}` : '';
  const cleanPath = rawPath === '/' ? '' : rawPath.replace(/\/+$/, '');
  const baseUrl = `${SITE_URL}${cleanPath || '/'}`;

  // Self-referencing canonical for current language variant if query is present
  const isQueryLang = typeof window !== 'undefined' && window.location.search.includes('lng=');
  const activeCanonical = isQueryLang && currentLang !== 'en'
    ? `${SITE_URL}${cleanPath || '/'}?lng=${currentLang}`
    : baseUrl;

  // Organization baseline schema
  const defaultOrgSchema = {
    '@context': 'https://schema.org',
    '@type': 'CatholicChurch',
    '@id': `${SITE_URL}/#church`,
    name: 'Christ the King Church, Vilakkannur',
    alternateName: [
      'Vilakkannur Church',
      'Christ King Church Vilakkannur',
      'Vilakkannoor Church',
      'ക്രിസ്തുരാജ ദേവാലയം വിളക്കന്നൂർ',
    ],
    url: SITE_URL,
    logo: `${SITE_URL}/logos/logo-icon.svg`,
    image: DEFAULT_OG_IMAGE,
    description:
      'Christ the King Church in Vilakkannur, Kerala, India - site of the Vatican-recognized Eucharistic Miracle of 2013, public veneration, and Catholic pilgrimage.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Vilakkannur, Naduvil P.O',
      addressLocality: 'Kannur',
      addressRegion: 'Kerala',
      postalCode: '670582',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 12.044144,
      longitude: 75.526978,
    },
    telephone: '+919400062892',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday',
        ],
        opens: '05:30',
        closes: '20:00',
      },
    ],
    sameAs: [
      'https://www.facebook.com',
      'https://www.instagram.com',
      'https://www.youtube.com',
    ],
  };

  // Build schema list
  const schemaList: Record<string, any>[] = [];
  if (schema) {
    if (Array.isArray(schema)) {
      schemaList.push(...schema);
    } else {
      schemaList.push(schema);
    }
  }

  // Determine language locale for OG
  const ogLocaleMap: Record<string, string> = {
    en: 'en_US',
    ml: 'ml_IN',
    hi: 'hi_IN',
    ta: 'ta_IN',
  };
  const ogLocale = ogLocaleMap[currentLang] || 'en_US';

  return (
    <Helmet>
      {/* HTML Language tag sync */}
      <html lang={currentLang} />

      {/* Primary HTML Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <link rel="canonical" href={activeCanonical} />

      {/* Crawl & Index Directives */}
      {shouldNoIndex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <>
          <meta
            name="robots"
            content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
          />
          <meta name="googlebot" content="index, follow" />
        </>
      )}

      {/* Multilingual Alternate URLs (Hreflang for international SEO) */}
      <link rel="alternate" hrefLang="en" href={baseUrl} />
      <link rel="alternate" hrefLang="ml" href={`${baseUrl}?lng=ml`} />
      <link rel="alternate" hrefLang="hi" href={`${baseUrl}?lng=hi`} />
      <link rel="alternate" hrefLang="ta" href={`${baseUrl}?lng=ta`} />
      <link rel="alternate" hrefLang="x-default" href={baseUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content="Christ the King Church, Vilakkannur" />
      <meta property="og:url" content={activeCanonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content={ogLocale} />

      {/* Twitter / X */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={activeCanonical} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Baseline Church Organization Schema */}
      <script type="application/ld+json">
        {JSON.stringify(defaultOrgSchema)}
      </script>

      {/* Additional Page-Specific Schemas */}
      {schemaList.map((item, idx) => (
        <script key={idx} type="application/ld+json">
          {JSON.stringify(item)}
        </script>
      ))}
    </Helmet>
  );
}

