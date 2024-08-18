self.addEventListener('install', function (e) {
  e.waitUntil(
    caches.open(staticCacheName).then(function (cache) {
      return cache.addAll([
        '/learn-german-test1/index.html',
        '/learn-german-test1/assets',
      ])
    })
  )
})

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request).then(function (response) {
      return response || fetch(event.request)
    })
  )
})

self.addEventListener('activate', (event) => {
  // console.log('Activating new service worker...');

  const cacheWhitelist = [staticCacheName]

  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            // console.log('deleting old cache: ', cacheName)
            return caches.delete(cacheName)
          }
        })
      )
    })
  )
})
