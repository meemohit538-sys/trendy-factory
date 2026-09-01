```javascript
// ============================================
// TRENDY FACTORY V4 - FIREBASE CONFIG
// ============================================

// Firebase App
import {
    initializeApp
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";


// ============================================
// FIRESTORE
// ============================================

import {
    getFirestore,
    collection,
    getDocs,
    addDoc,
    doc,
    updateDoc,
    deleteDoc,
    setDoc,
    getDoc,
    query,
    where,
    orderBy,
    serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";


// ============================================
// FIREBASE AUTH
// ============================================

import {
    getAuth,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";


// ============================================
// FIREBASE STORAGE
// ============================================

import {
    getStorage,
    ref,
    uploadBytes,
    getDownloadURL,
    deleteObject
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
// INITIALIZE FIREBASE
// ============================================

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const auth = getAuth(app);

const storage = getStorage(app);


// ============================================
// EXPORT EVERYTHING
// ============================================

export {

    // Firebase services
    app,
    db,
    auth,
    storage,


    // Firestore functions
    collection,
    getDocs,
    addDoc,
    doc,
    updateDoc,
    deleteDoc,
    setDoc,
    getDoc,
    query,
    where,
    orderBy,
    serverTimestamp,


    // Authentication functions
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,


    // Storage functions
    ref,
    uploadBytes,
    getDownloadURL,
    deleteObject
};

