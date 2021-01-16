import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
const config = {
  apiKey: "AIzaSyDe_Mm2uF8HjE1kkQMNTSNkkVeviazNWww",
  authDomain: "crwn-db-58fe7.firebaseapp.com",
  projectId: "crwn-db-58fe7",
  storageBucket: "crwn-db-58fe7.appspot.com",
  messagingSenderId: "642921502503",
  appId: "1:642921502503:web:90dac01521be968e2abb02",
  measurementId: "G-4KS1KL15T3",
};
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promp: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
