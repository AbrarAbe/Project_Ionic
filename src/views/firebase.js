// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyA1xoewEO7OGNOY3Ki1hMDKYeflGQTn3jk",
  authDomain: "project-5f6a4.firebaseapp.com",
  projectId: "project-5f6a4",
  storageBucket: "project-5f6a4.appspot.com",
  messagingSenderId: "549967688611",
  appId: "1:549967688611:web:92f00396ce79e404a06016",
  measurementId: "G-JZF25JQ84E"
,
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);

export { firebaseApp };
export { auth };
