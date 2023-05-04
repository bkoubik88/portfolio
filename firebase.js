// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCEwQn1jfpHy_iyoT_vbL6d9ssFmdUAo-M",
  authDomain: "portfolio-6199d.firebaseapp.com",
  projectId: "portfolio-6199d",
  storageBucket: "portfolio-6199d.appspot.com",
  messagingSenderId: "321987314234",
  appId: "1:321987314234:web:bae08bc41d87b69b4ceb03",
  measurementId: "G-QD6N6NGWVK",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
