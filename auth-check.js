import { auth, db } from "./firebase.js";

import {
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

import {
  doc,
  getDoc
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";


onAuthStateChanged(auth, async (user) => {

  // Kung wala naka-login
  if (!user) {
    window.location.href = "login.html";
    return;
  }


  try {

    // Kuhaa ang user's profile sa Firestore
    const userDoc = await getDoc(
      doc(db, "users", user.uid)
    );


    // Kung walay user profile
    if (!userDoc.exists()) {
      window.location.href = "members.html";
      return;
    }


    const userData = userDoc.data();


    // Kung ADMIN
    // Allowed maka-access
    if (userData.role === "admin") {
      return;
    }


    // Kung APPROVED MEMBER
    // Allowed maka-access
    if (userData.status === "approved") {
      return;
    }


    // Kung PENDING o dili approved
    // I-block ang access
    window.location.href = "members.html";


  } catch (error) {

    console.error("Access check error:", error);

    // Kung naay error, i-block ang access
    window.location.href = "members.html";

  }

});
