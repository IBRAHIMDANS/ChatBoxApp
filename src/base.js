import Rebase from "re-base";
import firebase from "firebase/app";
import "firebase/database";
require("dotenv").config();

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAOqhZKlWNj2LCNqxO9sGIRQ2pzHHfjAhM",
  authDomain: "chatbox-app-9fe98.firebaseapp.com",
  databaseURL: "https://chatbox-app-9fe98.firebaseio.com",
});

const base = Rebase.createClass(firebase.database());

export { firebaseApp };
export default base;
