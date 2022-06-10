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
    const colorQuery = colorIndex.getAll(["Red"]);
    const colorMakeQuery = makeModelIndex.get(["Blue","BMW"]);
    const subaru = store.get(4);
    const deleteCar = store.delete(1);
    const redCarKey = store.getKey(["Red"]);
    

    idQuery.onsuccess = function (){
        console.log('idQuery', idQuery.result);
    }
    colorQuery.onsuccess = function () {
        console.log('colorQuery', colorQuery.result);
    }
    colorMakeQuery.onsuccess = function () {
        console.log('colorMakeQuery', colorMakeQuery.result);
    }
    // update the color 
    subaru.onsuccess = function(){
        subaru.result.color = "Purple";
        store.put(subaru.result);
    }

    // delete the color
    deleteCar.onsuccess = function () {
        console.log("car has been deleted successfully");
    }

    redCarKey.onerror = function(){
         const deleteCar = store.delete(redCarKey.result);
         deleteCar.onsuccess = function(){
             console.log("Red car has been removed ")
         }
    }

    redCarKey.onsuccess = function(){
        console.log("Car has been removed !");
        
    }


    




    transaction.oncomplete = function () {
        db.close();
    }

}