
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAncUJRPN__OjZyXMGqbSBxvt28kpqzSag",
  authDomain: "login-reactcac.firebaseapp.com",
  projectId: "login-reactcac",
  storageBucket: "login-reactcac.appspot.com",
  messagingSenderId: "537888380340",
  appId: "1:537888380340:web:82f8bf0c6ee738102bcee1",
  measurementId: "G-PBS5R9K505"
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const analytics = getAnalytics(app);