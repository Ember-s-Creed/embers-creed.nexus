const s=location.pathname.split("/").slice(0,-1).join("/"),r=[s+"/_app/immutable/entry/app.D6ISGP9N.js",s+"/_app/immutable/nodes/0.cD369d2n.js",s+"/_app/immutable/nodes/1.uKzRwmTE.js",s+"/_app/immutable/nodes/2.xszWXGLW.js",s+"/_app/immutable/assets/2.CYvN1a5T.css",s+"/_app/immutable/nodes/3.DIIOQAkF.js",s+"/_app/immutable/assets/3.DzN7DS5I.css",s+"/_app/immutable/chunks/disclose-version.0aizHc-n.js",s+"/_app/immutable/chunks/entry.xp8y16VI.js",s+"/_app/immutable/chunks/index-client.DB_0YO8t.js",s+"/_app/immutable/chunks/legacy.b4kErdQn.js",s+"/_app/immutable/chunks/runtime.BspeWJmt.js",s+"/_app/immutable/chunks/snippet.BlmFkqWK.js",s+"/_app/immutable/chunks/store.vQTq_bhM.js",s+"/_app/immutable/entry/start.BdnjvebL.js"],u=[s+"/assets/font/Gabarito-Regular.ttf",s+"/assets/font/Iceberg-Regular.ttf",s+"/assets/images/png/logo.png",s+"/assets/images/svg/background.svg",s+"/assets/images/svg/logo.svg",s+"/assets/styles/beacon.css",s+"/assets/svg/beacon-wallet-icon.svg",s+"/assets/svg/ledger-wallet-icon.svg",s+"/icon/apple-touch-icon.png",s+"/icon/favicon-96x96.png",s+"/icon/favicon.ico",s+"/icon/favicon.svg",s+"/icon/site.webmanifest",s+"/icon/web-app-manifest-192x192.png",s+"/icon/web-app-manifest-512x512.png",s+"/manifest.json"],h=[s+"/"],i="1734559356106",n=self,o=`cache${i}`,p=r.concat(u).concat(h),d=new Set(p),b=async()=>{await(await caches.open(o)).addAll(p),n.skipWaiting()},g=async()=>{const a=(await caches.keys()).filter(e=>e!==o);await Promise.all(a.map(e=>caches.delete(e))),n.clients.claim()};n.addEventListener("install",t=>t.waitUntil(b()));n.addEventListener("activate",t=>t.waitUntil(g()));async function f(t){const a=await caches.open(`offline${i}`);{const c=await a.match(t);if(c)return c}const e=await fetch(t);return!e||e.status!==200||e.type!=="basic"||a.put(t,e.clone()),e}n.addEventListener("fetch",t=>{if(t.request.method!=="GET"||t.request.headers.has("range"))return;const a=new URL(t.request.url),e=a.protocol.startsWith("http"),c=a.hostname===self.location.hostname&&a.port!==self.location.port,l=a.host===self.location.host&&d.has(a.pathname),m=t.request.cache==="only-if-cached"&&!l;e&&!c&&!m&&t.respondWith(f(t.request))});