```javascript
// ============================================
// TRENDY FACTORY V4
// FIREBASE CONFIGURATION
// ============================================

// Firebase App
import {
    initializeApp
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";


// Firebase Firestore
import {
    getFirestore
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";


// Firebase Authentication
import {
    getAuth
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";


// Firebase Storage
import {
    getStorage
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-storage.js";


// ============================================
// FIREBASE CONFIG
// ============================================

const firebaseConfig = {

    apiKey: "AIzaSyCZjafz8Ze5p6xSoir4j5IdKc_MJE_Eyns",

    authDomain: "trendy-factory.firebaseapp.com",

    projectId: "trendy-factory",

    storageBucket: "trendy-factory.firebasestorage.app",

    messagingSenderId: "811817163762",

    appId: "1:811817163762:web:c9aecc5db2cb332a13696b",

    measurementId: "G-8YDMBE9T7C"

};


// ============================================
// INITIALIZE FIREBASE APP
// ============================================

const app = initializeApp(firebaseConfig);


// ============================================
// INITIALIZE FIRESTORE DATABASE
// ============================================

const db = getFirestore(app);


// ============================================
// INITIALIZE AUTHENTICATION
// ============================================

const auth = getAuth(app);


// ============================================
// INITIALIZE STORAGE
// ============================================

const storage = getStorage(app);


// ============================================
// EXPORT FIREBASE SERVICES
// ============================================

export {

    app,

    db,

    auth,

    storage

};

