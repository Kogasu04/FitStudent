'use strict';
const CACHE_NAME = 'fitstudent-cache-v9';

const APP_SHELL = [
  './', './index.html', './style.css',
  './brand-config.js', './exercise-bank.js', './script.js',
  './manifest.json', './icons/icon.svg'
];

// Лёгкие SVG-анимации кэшируются сразу (офлайн), тяжёлые GIF — по мере просмотра (см. fetch ниже)
const EXERCISE_IDS = [
  'bent-over-row', 'bicep-curl', 'bird-dog', 'bodyweight-squat',
  'bulgarian-split-squat', 'burpee', 'butt-kicks', 'calf-raise',
  'childs-pose', 'chin-tuck', 'crunch', 'frog-jumps',
  'glute-bridge', 'hamstring-stretch', 'high-knees', 'hip-flexor-stretch',
  'jump-rope', 'jumping-jacks', 'knee-push-up', 'lateral-raise',
  'leg-raise', 'march', 'mountain-climbers', 'neck-tilt',
  'overhead-reach', 'plank-up-down', 'pogo-hops', 'push-up',
  'quad-stretch', 'reverse-lunge', 'romanian-deadlift', 'seated-forward-fold',
  'seated-knee-extension', 'shadow-boxing', 'shoulder-press', 'side-bend',
  'ski-hops', 'sphinx-pose', 'squat-jump', 'step-touch',
  'sumo-squat', 'superman', 'triceps-extension', 'tuck-jumps',
  'wall-angels'
];
const EXERCISE_SVG = EXERCISE_IDS.map(id => `./svg/${id}.svg`);

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll([...APP_SHELL, ...EXERCISE_SVG]))
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
// Нажатие на напоминание открывает приложение
self.addEventListener('notificationclick', event => {
  event.notification.close();
  event.waitUntil(
    self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then(list => {
      const open = list.find(c => 'focus' in c);
      return open ? open.focus() : self.clients.openWindow('./');
    })
  );
});
