import { createContext, useContext } from "react";
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBIt_-kmAILB-8lnRmCScvOCn2HtP82vCo",
  authDomain: "fir-course-11a85.firebaseapp.com",
  projectId: "fir-course-11a85",
  storageBucket: "fir-course-11a85.appspot.com",
  messagingSenderId: "344124742152",
  appId: "1:344124742152:web:2e41ea86341108ce6f8fbd",
  measurementId: "G-F72ZCV8MRF",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);
