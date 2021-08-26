// create variable to hold db connection
let db;

// establish connection to IndexedDB database called 'budget_tracker" and set it to version 1
const request = indexedDB.open('budget_tracker', 1);

// this event will emit if db version changes 
request.onupgradeneeded = function (event) {
    // save a reference to the db
    const db = event.target.result;
    // create an object store (table) called 'new_track', set it to auto incrementing primary key
    db.createObjectStore('new_transaction', { autoIncrement: true });
};

// upon success
request.onsuccess = function (event) {
    // when db is successfully created with object store
    db = event.target.result;

    // check if app is online, and run uploadTransaction()
    if (navigator.onLine) {
        uploadTransaction();
    }
};

request.onerror = function (event) {
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

function uploadTransaction() {
    // open a transaction on the db
    const transaction = db.transaction(['new_transaction'], 'readwrite');

    // access object store
    const budgetObjectStore = transaction.objectStore('new_transaction');

    // get records from store, set to variable
    const getAll = budgetObjectStore.getAll();

    // upon successful .getAll()
    getAll.onsuccess = function () {
        // if there was data in store
        if (getAll.result.length > 0) {
            fetch('/api/transaction', {
                method: 'POST',
                body: JSON.stringify(getAll.result),
                headers: {
                    Accept: 'application/json, text/plain, */*',
                    'Content-Type': 'application/json'
                }
            })
                .then(response => response.json())
                .then(serverResponse => {
                    if (serverResponse.message) {
                        throw new Error(serverResponse);
                    }
                    // open another transaction
                    const transaction = db.transaciton(['new_transaction'], 'readwrite');
                    //access new_trans object store
                    const budgetObjectStore = transaction.objectStore('new_transaction');
                    // clear all items in store
                    budgetObjectStore.clear();

                    alert('All saved transactions have been submitted.');
                })
                .catch(err => {
                    console.log(err);
                });
        }
    };
};

//listen for app coming back online
window.addEventListener('online', uploadTransaction);