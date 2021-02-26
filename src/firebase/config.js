import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";

var firebaseConfig = {
  apiKey: "AIzaSyAnDPV5TZUWDkRaT1SJyJnmADcg0673bsg",
  authDomain: "gallery-df93b.firebaseapp.com",
  projectId: "gallery-df93b",
  storageBucket: "gallery-df93b.appspot.com",
  messagingSenderId: "255775924714",
  appId: "1:255775924714:web:b14c842e57c5ff8dccd293",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timeStamp = firebase.firestore.FieldValue.serverTimestamp;
export { projectFirestore, projectStorage, timeStamp };
