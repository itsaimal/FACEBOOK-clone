import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBKi4cSDaHfjTzxFtvl2FYfsf8fN62hYTs",
    authDomain: "facebook-clone-27eb3.firebaseapp.com",
    databaseURL: "https://facebook-clone-27eb3.firebaseio.com",
    projectId: "facebook-clone-27eb3",
    storageBucket: "facebook-clone-27eb3.appspot.com",
    messagingSenderId: "21612265769",
    appId: "1:21612265769:web:695eb8c5c83261924c3738",
    measurementId: "G-ZW40BZF0TF"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;