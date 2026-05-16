/* =========================================
   RESUMEMIND AI - FIREBASE CONFIG
========================================= */

/* =========================================
   IMPORT FIREBASE MODULES
========================================= */

import { initializeApp }

from

"https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {

    getAuth

}

from

"https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

import {

    getFirestore

}

from

"https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

import {

    getStorage

}

from

"https://www.gstatic.com/firebasejs/10.12.2/firebase-storage.js";

/* =========================================
   FIREBASE CONFIG
========================================= */

/*
------------------------------------------------
REPLACE THESE VALUES WITH YOUR FIREBASE DETAILS
------------------------------------------------
*/

const firebaseConfig = {

    apiKey:
    "YOUR_API_KEY",

    authDomain:
    "YOUR_PROJECT.firebaseapp.com",

    projectId:
    "YOUR_PROJECT_ID",

    storageBucket:
    "YOUR_PROJECT.appspot.com",

    messagingSenderId:
    "YOUR_MESSAGING_SENDER_ID",

    appId:
    "YOUR_APP_ID"

};

/* =========================================
   INITIALIZE FIREBASE
========================================= */

const app =
initializeApp(firebaseConfig);

/* =========================================
   SERVICES
========================================= */

const auth =
getAuth(app);

const db =
getFirestore(app);

const storage =
getStorage(app);

/* =========================================
   EXPORT
========================================= */

export {

    app,
    auth,
    db,
    storage

};

/* =========================================
   CONSOLE
========================================= */

console.log(

"%cFirebase Connected 🚀",

"color:#3b82f6;
font-size:18px;
font-weight:bold;"

);