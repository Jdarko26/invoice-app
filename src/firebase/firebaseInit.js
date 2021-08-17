import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "invoice-app-vue-c5b34.firebaseapp.com",
  projectId: "invoice-app-vue-c5b34",
  storageBucket: "invoice-app-vue-c5b34.appspot.com",
  messagingSenderId: "576199241019",
  appId: "1:576199241019:web:eb25e3ef2a89b2b4ed1b1e"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore();
