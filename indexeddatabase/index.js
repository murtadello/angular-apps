const indexedDB =
window.indexedDB ||
window.mozIndexedDB ||
window.wekitIndexedDB ||
window.msIndexedDB ||
window.shimIndexedDB ;

const request = indexedDB.open("CarsDatabase" ,1);

request.onerror = function (event) {
    console.log("An Error occured !");
    console.log(event);
    
    
}


request.onupgradeneeded = function () {
    const db = request.result;
    const store = db.createObjectStore("cars", {keyPath: "id"});
    store.createIndex("cars_color", ["color"], {unique: false});
    store.createIndex("color_and_make", ["color","make"], {unique: false});
}

request.onsuccess = function() {
    const db = request.result;
    const transaction = db.transaction("cars", "readwrite");
    
    const store = transaction.objectStore("cars");
    const colorIndex = store.index("cars_color");
    const makeModelIndex = store.index("color_and_make");


    store.put({id: 1, color: "Red", make: "Toyota"});
    store.put({id: 2, color: "Blue", make: "BMW"});
    store.put({id: 3, color: "Yellow", make: "Honda"});
    store.put({id: 4, color: "Red", make: "Audi"});
    store.put({id: 5, color: "Pink", make: "Ferrarie"})

    const idQuery = store.get(4);
    const colorQuery = colorIndex.getAll("Red");
    const colorMakeQuery = makeModelIndex.get(["Blue","BMW"]);

    idQuery.onsuccess = function (){
        console.log('idQuery', idQuery.result);
    }
    colorQuery.onsuccess = function () {
        console.log('colorQuery', colorQuery.result);
    }
    colorMakeQuery.onsuccess = function () {
        console.log('colorMakeQuery', colorMakeQuery.result);
    }

    transaction.oncomplete = function () {
        db.close();
    }

}