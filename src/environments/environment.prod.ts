export const environment = {
  firebase: {
    projectId: 'my-spotify-app-26c53',
    appId: '1:813204845692:web:de9d8440f01d667328c5f9',
    databaseURL: 'https://my-spotify-app-26c53-default-rtdb.firebaseio.com',
    storageBucket: 'my-spotify-app-26c53.appspot.com',
    apiKey: 'AIzaSyAj3EiILSsWFoFQNQoAjvOfGKd7lf6Sr6o',
    authDomain: 'my-spotify-app-26c53.firebaseapp.com',
    messagingSenderId: '813204845692',
    measurementId: 'G-48QZ265ZZG',
  },
  production: true
};

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAj3EiILSsWFoFQNQoAjvOfGKd7lf6Sr6o",
  authDomain: "my-spotify-app-26c53.firebaseapp.com",
  databaseURL: "https://my-spotify-app-26c53-default-rtdb.firebaseio.com",
  projectId: "my-spotify-app-26c53",
  storageBucket: "my-spotify-app-26c53.appspot.com",
  messagingSenderId: "813204845692",
  appId: "1:813204845692:web:de9d8440f01d667328c5f9",
  measurementId: "G-48QZ265ZZG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);