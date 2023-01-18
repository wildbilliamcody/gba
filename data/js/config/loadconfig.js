function get(key, dbName, storeName) {
    return new Promise(function(resolve, reject) {
        var openRequest = indexedDB.open(dbName, 21); //you might need to change the version number based on what the indexeddb version is set to. You can view this in devtools
        openRequest.onerror = function() {};
        openRequest.onsuccess = function() {
            var db = openRequest.result;
            var transaction = db.transaction([storeName], "readwrite");
            var objectStore = transaction.objectStore(storeName);
            var request = objectStore.get(key);
            request.onsuccess = function(e) {
                resolve(request.result);
            };
            request.onerror = function() {resolve()};
        };
        openRequest.onupgradeneeded = function() {
            var db = openRequest.result;
            if (! db.objectStoreNames.contains(storeName)) {
                db.createObjectStore(storeName);
            };
        };
    });
};

async function find() {
    await get('/data/saves/Pokemon_Emerald_Rogue_EX_(v1.2.1).srm', '/data/saves', 'FILE_DATA').then(function(result) {
        console.log(result);
    });
}