/**
 * Lightweight privacy-friendly analytics and event tracking
 * Interoperable with Google Tag Manager / gtag if present, with custom event dispatching
 */

export interface AnalyticsEvent {
  action: string;
  category: string;
  label?: string;
  value?: number;
}

export function trackEvent(action: string, category: string, label?: string, value?: number) {
  if (typeof window === 'undefined') return;

  // Log in development
  if ((import.meta as any).env?.DEV) {
    console.info(`[Analytics] ${category} -> ${action}${label ? ` (${label})` : ''}`, value ?? '');
  }

  // Google Analytics / Gtag support
  if (typeof (window as any).gtag === 'function') {
    (window as any).gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }

  // Dispatch custom DOM event for any embedded monitors
  try {
    window.dispatchEvent(
      new CustomEvent('church-analytics', {
        detail: { action, category, label, value, timestamp: Date.now() },
      })
    );
  } catch {
    // Ignore in unsupported environments
  }
}

// Intent-specific event helpers
export const trackPlanVisit = (source = 'button') =>
  trackEvent('plan_visit_click', 'conversion', source);

export const trackGetDirections = (destination = 'vilakkannur_church') =>
  trackEvent('get_directions_click', 'navigation', destination);

export const trackMassTimingsClick = (source = 'navigation') =>
  trackEvent('view_mass_timings', 'engagement', source);

export const trackMiracleEngagement = (section: string) =>
  trackEvent('miracle_read_section', 'engagement', section);

export const trackNearbyStaysClick = (property = 'general') =>
  trackEvent('view_nearby_stays', 'accommodation', property);

export const trackAveVistaClick = (action = 'book_now') =>
  trackEvent('ave_vista_interaction', 'accommodation', action);

export const trackLanguageSwitch = (newLang: string) =>
  trackEvent('language_change', 'preferences', newLang);

export const trackContactAction = (channel: 'phone' | 'email' | 'form') =>
  trackEvent('contact_attempt', 'conversion', channel);
