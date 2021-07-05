import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyADi7D59JEcT5Lxkuk8VPuCXWhnvhvC3ug",
  authDomain: "catch-of-the-day-ibby.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-ibby-default-rtdb.firebaseio.com",
});

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

// this is a default export
export default base;
