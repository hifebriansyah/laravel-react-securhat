const cacheName = 'v2';

var currentCache = {
    offline: 'offline-cache' + cacheName
};

const offlineUrl = 'offline.html';

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(currentCache.offline).then(function(cache) {
            return cache.addAll([
                //'./img/offline.svg',
                offlineUrl
            ]);
        })
    );
});

// Call Activate Event
self.addEventListener('activate', e => {
    console.log('Service Worker: Activated');
    // Remove unwanted caches
    e.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cache => {
                    if (cache !== cacheName) {
                        //console.log('Service Worker: Clearing Old Cache');
                        return caches.delete(cache);
                    }
                })
            );
        })
    );
});

self.addEventListener('fetch', event => {
  // request.mode = navigate isn't supported in all browsers
  // so include a check for Accept: text/html header.
  if (event.request.mode === 'navigate' || (event.request.method === 'GET' && event.request.headers.get('accept').includes('text/html'))) {
        event.respondWith(
          fetch(event.request.url).catch(error => {
              // Return the offline page
              return caches.match(offlineUrl);
          })
    );
  }
  else{
        // Respond with everything else if we can
        event.respondWith(caches.match(event.request)
                        .then(function (response) {
                        return response || fetch(event.request);
                    })
            );
      }
});