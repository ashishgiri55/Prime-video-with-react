import firebase from "firebase/app";

import "firebase/auth"; //auth
import "firebase/database"; //database
import "firebase/storage"; //storing images

const firebaseConfig = {
  apiKey: "AIzaSyAXEEhoubyJARoG4hAqt9iboChDAS_SBo4",
  authDomain: "e-prime-aa2fa.firebaseapp.com",
  databaseURL: "https://e-prime-aa2fa.firebaseio.com",
  projectId: "e-prime-aa2fa",
  storageBucket: "e-prime-aa2fa.appspot.com",
  messagingSenderId: "570378269247",
  appId: "1:570378269247:web:9482a0cdb1ccabf4cc3e8a",
};

firebase.initializeApp(firebaseConfig); //firebase init
export default firebase;
