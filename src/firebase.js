// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage, ref } from 'firebase/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBQk3quU5qXgkLJGw9kltPdm4qz-aP--0w',
  authDomain: 'chat-7774b.firebaseapp.com',
  projectId: 'chat-7774b',
  storageBucket: 'chat-7774b.appspot.com',
  messagingSenderId: '873795492266',
  appId: '1:873795492266:web:419bd4a972094836c2f3d3',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
