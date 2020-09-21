const CACHE_NAME = 'mkachi-react-typescript-template-pwa'
const urlsToCache = [
  '/'
]

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log('Opened cache')
      return cache.add(urlsToCache)
    })
  )
})

self.addEventListener('fetch', event => {
  event.responseWith(
    caches.match(event.request).then(response => {
      if (response) {
        return response
      }
      return fetch(event.request)
    })
  )
})

self.addEventListener('activate', event => {
  let cacheWhitelist = ['pwa-task-manager']
  event.waitUntil(caches.keys().then(cacheNames => {
    return Promise.all(cacheNames.map(cacheName => {
      if (cacheWhitelist.indexOf(cacheName) === -1) {
        return caches.delete(cacheName)
      }
    }))
  }))
})
