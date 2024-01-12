// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import.meta.env.VITE_API_KEY
import.meta.env.VITE_MASSEGINGSENDERID
import.meta.env.VITE_APPID

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: 'qoura-94df1.firebaseapp.com',
  projectId: 'qoura-94df1',
  storageBucket: 'qoura-94df1.appspot.com',
  messagingSenderId: import.meta.env.VITE_MASSEGINGSENDERID,
  appId: import.meta.env.VITE_APPID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
