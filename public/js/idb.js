// create variable to hold db connection
let db; 

// establish connection to IndexedDB database called 'budget_tracker" and set it to version 1
const request = indexedDB.open('budget_tracker', 1);

// this event will emit if db version changes 
request.onupgradeneeded = function(event) {
    // save a reference to the db
    const db = event.target.result;
    // create an object store (table) called 'new_track', set it to auto incrementing primary key
    db.createObjectStore('new_transaction', { autoIncrement: true });
};

// upon success
request.onsuccess = function(event) {
    // when db is successfully created with object store
    db = event.target.result;

    // check if app is online, and run uploadTransaction()
    if (navigator.onLine) {
        // uploadTransaction();
    }
};

request.onerror = function(event) {
    // log error
    console.log(event.target.errorCode);
};

// function executed if attempt to submit new transaction and there's no internet connection
function saveRecord(record) {
    // open new transaction with db with read and write permissions
    const transaction = db.transaction(['new_transaction'], 'readwrite');

    // access object store for 'new_transaction'
    const budgetObjectStore = transaction.objectStore('new_transaction');

    // add record to store 
    budgetObjectStore.add(record);
};
