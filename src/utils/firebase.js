import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC15VFPx4JFsy8xJNEj_fO7tBAre3DKHuc",
  authDomain: "my-magazinesite.firebaseapp.com",
  projectId: "my-magazinesite",
  storageBucket: "my-magazinesite.appspot.com",
  messagingSenderId: "334626837843",
  appId: "1:334626837843:web:f824214ec0c815b1997da6",
  measurementId: "G-66JYL089WB",
};

firebase.initializeApp(firebaseConfig);

const apiKey = firebaseConfig.apiKey;
const auth = firebase.auth();
const firestore = firebase.firestore();
const storage = firebase.storage();
// const db = const db = getDatabase();

export { auth, apiKey, firestore, storage };
