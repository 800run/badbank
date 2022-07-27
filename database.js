// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
(function () {
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDo91SXwY-5gX5QIBtekI8ydYPt1XKG_DQ",
    authDomain: "badbank-d0696.firebaseapp.com",
    projectId: "badbank-d0696",
    storageBucket: "badbank-d0696.appspot.com",
    messagingSenderId: "439816568139",
    appId: "1:439816568139:web:96fe290fbbd96f748dbcce",
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  // Initialize Firebase Authentication and get a reference to the service
  const auth = getAuth(app);
})();
