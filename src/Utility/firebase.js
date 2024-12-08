import firebase from "firebase/compat/app";

import { getAuth } from "firebase/auth";

import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDyoyhPgvPxijjjOE4B-D8aNkZ4jVJtKvA",
  authDomain: "clone-45d49.firebaseapp.com",
  projectId: "clone-45d49",
  storageBucket: "clone-45d49.firebasestorage.app",
  messagingSenderId: "570194810294",
  appId: "1:570194810294:web:9d3667b3a03fa0e9f41d17",
};

const app = firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
export const auth = getAuth(app);
