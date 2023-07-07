import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD1oiltACNjiZ4uV4i0jvmLPkpuQDPvIWI",
  authDomain: "movie-app-fa2f5.firebaseapp.com",
  projectId: "movie-app-fa2f5",
  storageBucket: "movie-app-fa2f5.appspot.com",
  messagingSenderId: "601419413698",
  appId: "1:601419413698:web:08b89d25acc7b9112d235b",
  measurementId: "G-SQ44REBPTJ"
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const analytics = getAnalytics(app);
