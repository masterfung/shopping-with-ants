import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore, addDoc, collection, query, where, getDocs } from "firebase/firestore";

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
export const db = getFirestore();
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  let docRef;
  const q = query(collection(db, "users"), where("email", "==", userAuth.email));
  const results = await getDocs(q);

  let found = false;
  results.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    console.log(doc.id, " => ", doc.data());
    const data = doc.data();
    docRef = data;
    docRef.id = userAuth.uid;
    if (data.email === userAuth.email) {
      found = true;
    }
  });

  if (!found) {
    try {
      docRef = await addDoc(collection(db, "users"), {
        displayName: userAuth.displayName,
        email: userAuth.email,
        createdAt: new Date(),
        ...additionalData
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (err) {
      console.error("Error adding document: ", err);
    }
  } else {
    // in the future, we can call update here. 
    console.log("Entity already exist!", docRef);
  }

  return docRef;
};
 
const provider = new GoogleAuthProvider();
provider.setCustomParameters({ params: "select_account" });
export const signInWithGoogle = () => signInWithPopup(auth, provider);