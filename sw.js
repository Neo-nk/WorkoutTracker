const VERSION = 'repsheet-v3';
const PRECACHE = [
  './',
  './index.html',
  './workout.html',
  './edit.html',
  './css/style.css',
  './js/workouts.js',
  './manifest.json',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/icon-maskable-512.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(VERSION).then(cache => cache.addAll(PRECACHE)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== VERSION).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  const req = event.request;
  if (req.method !== 'GET') return;

  const url = new URL(req.url);

  if (url.origin === location.origin) {
    event.respondWith(
      caches.match(req).then(cached => {
        if (cached) return cached;
        return fetch(req).then(res => {
          if (res.ok) {
            const copy = res.clone();
            caches.open(VERSION).then(cache => cache.put(req, copy));
          }
          return res;
        }).catch(() => caches.match('./index.html'));
      })
    );
    return;
  }

  // Cross-origin (Google Fonts): network with cache fallback
  event.respondWith(
    fetch(req).then(res => {
      if (res.ok) {
        const copy = res.clone();
        caches.open(VERSION).then(cache => cache.put(req, copy));
      }
      return res;
    }).catch(() => caches.match(req))
  );
});
