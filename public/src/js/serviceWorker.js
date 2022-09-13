const cacheName = 'v1';
const cachedItems = [
    "/",
    "/src/css/index.css",
    "/src/js/index.js",
];

const addCache = async (resources) => {//cache on install event
    console.log('installed');
    const cache = await caches.open(cacheName );
    await cache.addAll(resources);
  };
const putNewCache = async (req, res) => { //cache on fetch event
    const cache = await caches.open(cacheName);
    await cache.put(req, res);
  };


const uniqueCache = async()=>{//delete duplicated caches on activate event
    const cachedNames = await caches.keys();
    cachedNames.forEach(cached=>cached == cacheName ? cached : caches.delete(cached));
};

const fetchCache = async(req) => {
    console.log(req);

    console.log('fetching');
    const resp  = await caches.match(req); // First try to get the resource from the cache
    if(resp) return resp;
    const res = await fetch(req); // Next try to get the resource from the network
    if(res){
            putNewCache(req, res.clone());
            return res;
        }

    const fallback  = await caches.match('/');
    if(fallback) return fallback;

    // if(!resp || !res || !fallback){
    //     return await caches.match('/');
    // }
  
};



  
self.addEventListener("install",e=> e.waitUntil(addCache(cachedItems)));
// self.addEventListener("activate",e=>e.waitUntil(uniqueCache()));
self.addEventListener('activate',async(e)=>{
    // console.log({e,msg:"service worker activated"});
    const cachedNames = await caches.keys();
    cachedNames.forEach(cached=>cached == cacheName ? cached : caches.delete(cached));
});
self.addEventListener("fetch",e=>e.respondWith(fetchCache(e.request)));


