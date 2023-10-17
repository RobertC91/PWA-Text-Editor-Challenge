// Import required modules from the Workbox library
const { warmStrategyCache } = require('workbox-recipes');
const { CacheFirst, StaleWhileRevalidate } = require('workbox-strategies');
const { registerRoute } = require('workbox-routing');
const { CacheableResponsePlugin } = require('workbox-cacheable-response');
const { ExpirationPlugin } = require('workbox-expiration');
const { precacheAndRoute } = require('workbox-precaching/precacheAndRoute');

// Precache and route the assets defined in the Workbox manifest file
precacheAndRoute(self.__WB_MANIFEST);

// Create a CacheFirst strategy for caching pages with certain expiration settings
const pageCache = new CacheFirst({
  cacheName: 'page-cache',
  plugins: [
    new CacheableResponsePlugin({
      statuses: [0, 200],
    }),
    new ExpirationPlugin({
      // Cache pages for 30 days
      maxAgeSeconds: 30 * 24 * 60 * 60,
    }),
  ],
});

// Warm the strategy cache with specific URLs
warmStrategyCache({
  urls: ['/index.html', '/'],
  strategy: pageCache,
});

// Register a route for navigation requests (e.g., HTML pages) using the pageCache strategy
registerRoute(({ request }) => request.mode === 'navigate', pageCache);

// Register a route for static assets (e.g., styles, scripts, workers) using a StaleWhileRevalidate strategy
registerRoute(
  ({ request }) => ['style', 'script', 'worker'].includes(request.destination),
  new StaleWhileRevalidate({
    cacheName: 'asset-cache',
    plugins: [
      new CacheableResponsePlugin({
        statuses: [0, 200],
      }),
    ],
  })
);