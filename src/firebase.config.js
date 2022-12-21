import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCgmzEU4g-UV3s5M_K_MjcTrjCKu5CvUJs",
    authDomain: "eatup-868b5.firebaseapp.com",
    databaseURL:
        "https://eatup-868b5-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "eatup-868b5",
    storageBucket: "eatup-868b5.appspot.com",
    messagingSenderId: "332997129818",
    appId: "1:332997129818:web:fe74269745868edd6e0a63",
};

// Initialize Firebase
const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
