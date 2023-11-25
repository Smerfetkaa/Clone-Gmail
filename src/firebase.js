import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDFyBjJiBeX6G8u-X7VaoEoWIkzrl8q4gE",
  authDomain: "clone-fdf06.firebaseapp.com",
  projectId: "clone-fdf06",
  storageBucket: "clone-fdf06.appspot.com",
  messagingSenderId: "264672794579",
  appId: "1:264672794579:web:c3959715ed79c884e94126",
  measurementId: "G-0C7QD4MY9H",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);
const provider = new GoogleAuthProvider();

export { db, auth, provider, analytics };
