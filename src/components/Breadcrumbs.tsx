import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import { SITE_URL } from './SEO';

export interface BreadcrumbItem {
  label: string;
  path?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export function Breadcrumbs({ items, className = '' }: BreadcrumbsProps) {
  const allItems: BreadcrumbItem[] = [{ label: 'Home', path: '/' }, ...items];

  // Generate BreadcrumbList Schema
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: allItems.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      item: item.path ? `${SITE_URL}${item.path === '/' ? '' : item.path}` : undefined,
    })),
  };

  return (
    <div className={`py-4 ${className}`}>
      {/* JSON-LD for Breadcrumbs */}
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </script>

      <nav aria-label="Breadcrumb" className="flex items-center space-x-2 text-xs md:text-sm text-warm-200/60">
        {allItems.map((item, index) => {
          const isLast = index === allItems.length - 1;

          return (
            <div key={index} className="flex items-center space-x-2">
              {index === 0 ? (
                <Link
                  to="/"
                  className="flex items-center gap-1 hover:text-gold-400 transition-colors"
                  aria-label="Home"
                >
                  <Home className="w-3.5 h-3.5 text-gold-400" />
                  <span className="hidden sm:inline">Home</span>
                </Link>
              ) : item.path && !isLast ? (
                <Link
                  to={item.path}
                  className="hover:text-gold-400 transition-colors whitespace-nowrap"
                >
                  {item.label}
                </Link>
              ) : (
                <span
                  className="text-white/90 font-medium whitespace-nowrap"
                  aria-current={isLast ? 'page' : undefined}
                >
                  {item.label}
                </span>
              )}

              {!isLast && <ChevronRight className="w-3 h-3 text-warm-200/30 shrink-0" />}
            </div>
          );
        })}
      </nav>
    </div>
  );
}
