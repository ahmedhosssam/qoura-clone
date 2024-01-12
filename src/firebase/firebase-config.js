// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import.meta.env.VITE_API_KEY
import.meta.env.VITE_MASSEGINGSENDERID
import.meta.env.VITE_APPID

const firebaseConfig = {
  apiKey: 'AIzaSyB5AJoJL0kFCErIIiaMUwxlUA6u9SswUhs',
  authDomain: 'qoura-94df1.firebaseapp.com',
  projectId: 'qoura-94df1',
  storageBucket: 'qoura-94df1.appspot.com',
  messagingSenderId: '665413498195',
  appId: '1:665413498195:web:4e83bec4c449949e9a1da6',
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
