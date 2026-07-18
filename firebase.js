import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";

import { getFirestore } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCGlzqd9iBvhCMmXCiTZD5fZJwaTumdnJc",
  authDomain: "wyatt-anime-hub.firebaseapp.com",
  projectId: "wyatt-anime-hub",
  storageBucket: "wyatt-anime-hub.firebasestorage.app",
  messagingSenderId: "856454465880",
  appId: "1:856454465880:web:eff3e9684258def4cabd2d"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
