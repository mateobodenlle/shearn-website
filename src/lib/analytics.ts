interface AnalyticsEvent {
  event: string;
  category?: string;
  action?: string;
  label?: string;
  value?: number;
}

export const logEvent = (eventData: AnalyticsEvent) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventData.event, {
      event_category: eventData.category,
      event_label: eventData.label,
      value: eventData.value,
    });
  }
  
  // Console log for development
  if (import.meta.env.DEV) {
    console.log('Analytics Event:', eventData);
  }
};

export const trackCTA = (ctaName: string, location: string) => {
  logEvent({
    event: 'cta_click',
    category: 'engagement',
    action: 'click',
    label: `${ctaName}_${location}`,
  });
};

export const trackSectionView = (sectionName: string) => {
  logEvent({
    event: 'section_view',
    category: 'engagement',
    action: 'view',
    label: sectionName,
  });
};

export const trackExternalLink = (linkName: string, _url: string) => {
  logEvent({
    event: 'external_link_click',
    category: 'outbound',
    action: 'click',
    label: linkName,
  });
};

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}