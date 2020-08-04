import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyA5lY-M2CZyADZm8unGO_pV3NgVQkv9GWI",
  authDomain: "firegram-react-9be5c.firebaseapp.com",
  databaseURL: "https://firegram-react-9be5c.firebaseio.com",
  projectId: "firegram-react-9be5c",
  storageBucket: "firegram-react-9be5c.appspot.com",
  messagingSenderId: "780410739185",
  appId: "1:780410739185:web:4372813a5330bd61408c50",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timeStamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timeStamp };
