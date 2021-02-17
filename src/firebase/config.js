import * as firebase from "firebase";
import "@firebase/auth";
import "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBhpPL7uRo7UMM3-NLR5QwvCSM4N6gWZ34",
  authDomain: "petcalls-3e4e4.firebaseapp.com",
  databaseURL: "https://petcalls-3e4e4-default-rtdb.firebaseio.com",
  projectId: "petcalls-3e4e4",
  storageBucket: "petcalls-3e4e4.appspot.com",
  messagingSenderId: "896000385509",
  appId: "1:896000385509:web:c86c4020d2f1ec8dfb8f0c",
  measurementId: "G-T2BLCT2JNL"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };
