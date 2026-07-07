// service worker configuration for PWA installability

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
  // Pass-through strategy. Can be configured with custom caches later if needed.
  event.respondWith(fetch(event.request));
});
