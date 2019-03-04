import * as firebase from "firebase";

const config = {
  apiKey: "AIzaSyAKlZTyiHbzLNJRlMwGeEZdkx2EJRgDo_U",
  authDomain: "trainer-appointment-system.firebaseapp.com",
  databaseURL: "https://trainer-appointment-system.firebaseio.com",
  projectId: "trainer-appointment-system",
  storageBucket: "trainer-appointment-system.appspot.com",
  messagingSenderId: "917277873627"
};

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };
