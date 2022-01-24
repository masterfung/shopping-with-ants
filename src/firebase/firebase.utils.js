import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const config = {
  apiKey: "AIzaSyB04FZbQkhzHR3vYE-MkWNWBJk5PayThtY",
  authDomain: "shopping-ants.firebaseapp.com",
  projectId: "shopping-ants",
  storageBucket: "shopping-ants.appspot.com",
  messagingSenderId: "1071434692944",
  appId: "1:1071434692944:web:54f13916f05bce4519d455",
  measurementId: "G-ETRJ1P6NJZ"
};

// Initialize Firebase
initializeApp(config);
 
export const auth = getAuth();
export const firestore = getFirestore();
 
const provider = new GoogleAuthProvider();
provider.setCustomParameters({ params: 'select_account' });
export const signInWithGoogle = () => signInWithPopup(auth, provider);