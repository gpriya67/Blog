import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAuGahgY_cpBkIub_xmee5pqUJClY1dD0I",
  authDomain: "blog-cd3b8.firebaseapp.com",
  projectId: "blog-cd3b8",
  storageBucket: "blog-cd3b8.firebasestorage.app",
  messagingSenderId: "97260254315",
  appId: "1:97260254315:web:d3be3ab07e3e9cc62f2d2e",
  measurementId: "G-DLXL1WKBE6",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
