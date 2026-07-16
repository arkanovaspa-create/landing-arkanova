export const GA_MEASUREMENT_ID = "G-BKSN0HTCZ1";

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

type EventParams = Record<string, string>;

export function trackEvent(eventName: string, params?: EventParams) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") {
    return;
  }

  window.gtag("event", eventName, params);
}
