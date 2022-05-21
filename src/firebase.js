import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig =  {
  apiKey: "AIzaSyBhqyu6rXdjgszBGP2xez0YnFU91SurGhI",
  authDomain: "clone-project-be7d1.firebaseapp.com",
  projectId: "clone-project-be7d1",
  storageBucket: "clone-project-be7d1.appspot.com",
  messagingSenderId: "771033683424",
  appId: "1:771033683424:web:a426b6f38a311346418785",
  measurementId: "G-HMLWZCWNFL"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };