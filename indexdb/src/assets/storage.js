// step one

window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;

// step two

window.IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction || window.msIDBTransaction;

// step three

window.IDBKeyRange = window.window.IDBKeyRange || window.webkitIDBKeyRange || window.msIDBKeyRange;


if(!window.indexedDB){
    alert("your browser is not supported indexDB");
}
var db;
var request = window.indexedDB.open("codetodo",1);


request.onerror = function(event){
    console.log("error" + event.target.result);
}

request.onsuccess = function(event){
    db = request.result;
    console.log("success" + db);
}

request.onupgradeneeded = function (event){
    var db;
    var objectStore = db.createObjectStore("codeToDo");
}