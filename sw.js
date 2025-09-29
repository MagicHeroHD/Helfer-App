const CACHE_NAME = 'helfer-app-v1';
const urlsToCache = [
  './',
  './index.html',
  './manifest.json',
  './icon-192x192.png',
  './icon-512x512.png'
];

self.addEventListener('install', event => {
  console.log('Service Worker installiert');
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  console.log('Service Worker aktiviert');
});

self.addEventListener('fetch', event => {
  event.respondWith(fetch(event.request));
});
