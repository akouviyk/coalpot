// SEO utility — per-page meta tags, JSON-LD structured data, canonical URLs
// Injected into <head> via document API (React 18 compatible, no extra deps)

import { useEffect } from 'react';

const BASE_URL = 'https://www.decoalpot.com';
const SITE_NAME = "De' Coal Pot Restaurant";

export function useSEO({ title, description, canonical, schema }) {
  useEffect(() => {
    // ── Title ──
    document.title = title;

    // ── Helper: set or create meta ──
    const setMeta = (selector, attr, value) => {
      let el = document.querySelector(selector);
      if (!el) {
        el = document.createElement('meta');
        const [attrName, attrVal] = attr;
        el.setAttribute(attrName, attrVal);
        document.head.appendChild(el);
      }
      el.setAttribute('content', value);
    };

    // ── Standard meta ──
    setMeta('meta[name="description"]',          ['name', 'description'],          description);
    setMeta('meta[name="robots"]',               ['name', 'robots'],               'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1');
    setMeta('meta[name="author"]',               ['name', 'author'],               SITE_NAME);
    setMeta('meta[name="geo.region"]',           ['name', 'geo.region'],           'VI');
    setMeta('meta[name="geo.placename"]',        ['name', 'geo.placename'],        'Cruz Bay, St. John, US Virgin Islands');
    setMeta('meta[name="geo.position"]',         ['name', 'geo.position'],         '18.3308548;-64.7943461');
    setMeta('meta[name="ICBM"]',                 ['name', 'ICBM'],                 '18.3308548, -64.7943461');

    // ── Open Graph ──
    setMeta('meta[property="og:title"]',         ['property', 'og:title'],         title);
    setMeta('meta[property="og:description"]',   ['property', 'og:description'],   description);
    setMeta('meta[property="og:type"]',          ['property', 'og:type'],          'restaurant');
    setMeta('meta[property="og:url"]',           ['property', 'og:url'],           canonical || BASE_URL);
    setMeta('meta[property="og:site_name"]',     ['property', 'og:site_name'],     SITE_NAME);
    setMeta('meta[property="og:image"]',         ['property', 'og:image'],         `${BASE_URL}/og-image.jpg`);
    setMeta('meta[property="og:image:width"]',   ['property', 'og:image:width'],   '1200');
    setMeta('meta[property="og:image:height"]',  ['property', 'og:image:height'],  '630');
    setMeta('meta[property="og:locale"]',        ['property', 'og:locale'],        'en_US');

    // ── Twitter Card ──
    setMeta('meta[name="twitter:card"]',         ['name', 'twitter:card'],         'summary_large_image');
    setMeta('meta[name="twitter:title"]',        ['name', 'twitter:title'],        title);
    setMeta('meta[name="twitter:description"]',  ['name', 'twitter:description'],  description);
    setMeta('meta[name="twitter:image"]',        ['name', 'twitter:image'],        `${BASE_URL}/og-image.jpg`);

    // ── Canonical ──
    let canonicalEl = document.querySelector('link[rel="canonical"]');
    if (!canonicalEl) {
      canonicalEl = document.createElement('link');
      canonicalEl.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalEl);
    }
    canonicalEl.setAttribute('href', canonical || BASE_URL);

    // ── JSON-LD Schema ──
    const schemaId = 'json-ld-schema';
    let schemaEl = document.getElementById(schemaId);
    if (!schemaEl) {
      schemaEl = document.createElement('script');
      schemaEl.id = schemaId;
      schemaEl.type = 'application/ld+json';
      document.head.appendChild(schemaEl);
    }
    schemaEl.textContent = JSON.stringify(schema);

    return () => {
      // On unmount clean up page-specific schema (base schema re-added on next page)
    };
  }, [title, description, canonical, schema]);
}

// ── Shared base Restaurant schema (included on every page) ──
export const RESTAURANT_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Restaurant',
  '@id': `${BASE_URL}/#restaurant`,
  name: "De' Coal Pot Restaurant",
  alternateName: ["De Coal Pot", "Dé Coal Pot", "DeCoalPot"],
  url: BASE_URL,
  telephone: ['+13406901127', '+13402050001'],
  email: null,
  image: `${BASE_URL}/og-image.jpg`,
  logo: `${BASE_URL}/logo.png`,
  description: "Authentic West Indian and Caribbean cuisine in Cruz Bay, St. John, US Virgin Islands. Family-owned restaurant serving oxtail stew, curried goat, conch, grilled seafood, and vegetarian Caribbean dishes.",
  address: {
    '@type': 'PostalAddress',
    streetAddress: '1E 96 Cruz Bay',
    addressLocality: 'Cruz Bay',
    addressRegion: 'VI',
    postalCode: '00830',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 18.3308548,
    longitude: -64.7943461,
  },
  hasMap: 'https://maps.google.com/?cid=15153271169309715715',
  priceRange: '$$',
  currenciesAccepted: 'USD',
  paymentAccepted: 'Cash, Credit Card',
  servesCuisine: [
    'West Indian',
    'Caribbean',
    'Trinidadian',
    'American',
    'Seafood',
  ],
  menu: `${BASE_URL}/menu`,
  openingHoursSpecification: [
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'], opens: '11:00', closes: '21:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Sunday', opens: '16:00', closes: '21:00' },
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.6',
    reviewCount: '621',
    bestRating: '5',
    worstRating: '1',
  },
  sameAs: [
    'https://www.facebook.com/DeCoalPot',
    'https://maps.google.com/?cid=15153271169309715715',
  ],
  amenityFeature: [
    { '@type': 'LocationFeatureSpecification', name: 'Walk-ins Welcome',      value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Takeout',               value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Outdoor Seating',       value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Bar',                   value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Vegetarian Options',    value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Wheelchair Accessible', value: true },
  ],
  keywords: 'Caribbean restaurant St John USVI, West Indian food Cruz Bay, oxtail stew St John, authentic Caribbean cuisine Virgin Islands, best restaurant St John, curried goat USVI, conch Cruz Bay, seafood St John',
};
