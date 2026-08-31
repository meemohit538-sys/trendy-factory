import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
getFirestore,
collection,
getDocs,
addDoc,
doc,
updateDoc,
deleteDoc,
setDoc,
getDoc
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
apiKey: "AIzaSyCZjafz8Ze5p6xSoir4j5IdKc_MJE_Eyns",
authDomain: "trendy-factory.firebaseapp.com",
projectId: "trendy-factory",
storageBucket: "trendy-factory.firebasestorage.app",
messagingSenderId: "811817163762",
appId: "1:811817163762:web:c9aecc5db2cb332a13696b",
measurementId: "G-8YDMBE9T7C"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export {
db,
collection,
getDocs,
addDoc,
doc,
updateDoc,
deleteDoc,
setDoc,
getDoc
};

