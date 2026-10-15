'use strict';
const CACHE_NAME = 'fitstudent-cache-v6';

const APP_SHELL = [
  './', './index.html', './style.css',
  './brand-config.js', './exercise-bank.js',
  './exercise-illustrations.js', './script.js',
  './manifest.json', './icons/icon.svg'
];

const ILLUSTRATIONS = [
  '0001','0005','0025','0027','0073','0075',
  '0100','0101','0102','0103','0104','0105','0109','0111',
  '0113','0115','0116','0121','0129','0130','0133','0134',
  '0136','0137','0138','0142','0156','0157','0162',
  '0270','0277','0278','0281','0284','0285','0287','0288',
  '0289','0291'
].flatMap(id => [`./illustrations/${id}-relaxation.svg`, `./illustrations/${id}-tension.svg`]);

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll([...APP_SHELL, ...ILLUSTRATIONS]))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  const url = new URL(event.request.url);
  if (url.origin !== self.location.origin) return;

  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request)
        .then(res => {
          const copy = res.clone();
          caches.open(CACHE_NAME).then(c => c.put(event.request, copy));
          return res;
        })
        .catch(() => caches.match(event.request).then(r => r || caches.match('./index.html')))
    );
    return;
  }

  event.respondWith(
    caches.match(event.request).then(cached => {
      const network = fetch(event.request)
        .then(res => {
          if (res && res.ok) {
            const copy = res.clone();
            caches.open(CACHE_NAME).then(c => c.put(event.request, copy));
          }
          return res;
        })
        .catch(() => cached);
      return cached || network;
    })
  );
});