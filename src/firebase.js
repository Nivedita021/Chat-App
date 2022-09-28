// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC6cO_AlvjeobDsbD9Ukn0JqTOdW5gowQc",
  authDomain: "firechat-e8eff.firebaseapp.com",
  projectId: "firechat-e8eff",
  storageBucket: "firechat-e8eff.appspot.com",
  messagingSenderId: "89728141839",
  appId: "1:89728141839:web:02cfc204bd98ce809e717a",
  measurementId: "G-KPCVNBX2NC"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth=getAuth();
export const storage = getStorage();
export const db=getFirestore();
const analytics = getAnalytics(app);