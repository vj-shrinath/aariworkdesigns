// service worker configuration for PWA installability and Push Notifications

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

self.addEventListener('push', (event) => {
  if (event.data) {
    try {
      const payload = event.data.json();
      const title = payload.title || 'AARI Work Designs';
      const options = {
        body: payload.body || 'New content available!',
        icon: '/logo.png',
        badge: '/logo.png',
        data: payload.url || '/',
        actions: payload.actions || [],
      };
      event.waitUntil(
        self.registration.showNotification(title, options)
      );
    } catch (e) {
      // fallback if not json
      event.waitUntil(
        self.registration.showNotification('AARI Work Designs', {
          body: event.data.text(),
        })
      );
    }
  }
});

self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  const urlToOpen = event.notification.data || '/';

  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then((windowClients) => {
      for (let i = 0; i < windowClients.length; i++) {
        const client = windowClients[i];
        if (client.url === urlToOpen && 'focus' in client) {
          return client.focus();
        }
      }
      if (clients.openWindow) {
        return clients.openWindow(urlToOpen);
      }
    })
  );
});
