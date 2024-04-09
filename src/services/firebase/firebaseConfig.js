import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDQq3LgWN9LpBKAVmu4S3-3cERwaAGvk9g",
  authDomain: "import-vapes.firebaseapp.com",
  projectId: "import-vapes",
  storageBucket: "import-vapes.appspot.com",
  messagingSenderId: "307968865771",
  appId: "1:307968865771:web:a8372a7648586ab0a295ae"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const getFirestoreInstance = () => {
  return getFirestore(app);
};

//Initialize Firestore
export const db = getFirestore(app)