/* Props for Profit Companion: offline cache. Change VERSION when you update the app so devices pick it up. */
const VERSION='pfp-companion-v16g';
const FILES=['./','./index.html','./manifest.webmanifest','./icon-192.png','./icon-512.png','./icon-maskable-512.png','./apple-touch-icon.png'];
// Fetch fresh copies (bypass the browser's own cache) when a new version installs.
self.addEventListener('install',e=>{e.waitUntil(caches.open(VERSION).then(c=>Promise.all(FILES.map(u=>fetch(new Request(u,{cache:'reload'})).then(r=>{if(!r.ok)throw new Error(u);return c.put(u,r)})))).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==VERSION).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{
  const req=e.request;
  if(req.method!=='GET'||new URL(req.url).origin!==location.origin)return;
  // The app page itself: network first (so updates show at once), cached copy when offline.
  if(req.mode==='navigate'||/\/(index\.html)?$/.test(new URL(req.url).pathname)){
    e.respondWith(fetch(req,{cache:'no-cache'}).then(r=>{const cp=r.clone();caches.open(VERSION).then(c=>c.put('./index.html',cp));return r}).catch(()=>caches.match('./index.html')));
    return}
  e.respondWith(caches.match(req,{ignoreSearch:true}).then(hit=>hit||fetch(req).then(r=>{const cp=r.clone();caches.open(VERSION).then(c=>c.put(req,cp));return r}).catch(()=>caches.match('./index.html'))));
});
