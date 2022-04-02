import {initializeApp} from "https://www.gstatic.com/firebasejs/9.6.9/firebase-app.js";
import {getFirestore} from "https://www.gstatic.com/firebasejs/9.6.9/firebase-firestore.js";

let firebaseConfig = {
    apiKey: "AIzaSyDn3vCDjHRGbjZy594rRXwjZc0R6KbE97E",
    authDomain: "blogdoigor-249fb.firebaseapp.com",
    projectId: "blogdoigor-249fb",
    storageBucket: "blogdoigor-249fb.appspot.com",
    messagingSenderId: "524562011979",
    appId: "1:524562011979:web:3d574f91f8a04d33c2bace"
  };

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);