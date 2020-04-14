import firebase from "firebase";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyAg-_SOJizQ-lhBRpANlmge35y-MWYmrXE",
  authDomain: "blog-167c8.firebaseapp.com",
  databaseURL: "https://blog-167c8.firebaseio.com",
  projectId: "blog-167c8",
  storageBucket: "blog-167c8.appspot.com",
  messagingSenderId: "832193068096",
  appId: "1:832193068096:web:b581b9a47d550b9aa433a5",
  measurementId: "G-Q1QLCCRPKP"
};

firebase.initializeApp(config);
const firestore = new firebase.firestore();
export { firestore };
