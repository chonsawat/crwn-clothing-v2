// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  signInWithRedirect,
  GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDVZf_UvYagpg1SJqZIQV2Sp77uHaru0wA",
  authDomain: "crwn-clothing-db-18c1c.firebaseapp.com",
  projectId: "crwn-clothing-db-18c1c",
  storageBucket: "crwn-clothing-db-18c1c.appspot.com",
  messagingSenderId: "1051697782528",
  appId: "1:1051697782528:web:57ab1b4eaf4fad38531de5",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  console.log("userDocRef: ", userDocRef);

  const userSnapshot = await getDoc(userDocRef);
  console.log("userSnapshot: ", userSnapshot);
  console.log("userSnapshot is exists: ", userSnapshot.exists());

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createAt,
      });
    } catch (error) {
      console.log("Error: while create user: ", error.message);
    }
  }

  return userDocRef;
};
