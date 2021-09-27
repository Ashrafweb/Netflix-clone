import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAde-R7-FflVn9XXkKydyWEcLFjcXpydtw",
  authDomain: "netflix-clone-90a48.firebaseapp.com",
  projectId: "netflix-clone-90a48",
  storageBucket: "netflix-clone-90a48.appspot.com",
  messagingSenderId: "708983136276",
  appId: "1:708983136276:web:e1c75c98cd1f5d1dd3c701",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();

export { auth };
export default db;
