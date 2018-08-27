import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyA5RUAjRVVOuvxdtKB4tLtHXiTNC6FAe0s",
  authDomain: "easynote-d45b6.firebaseapp.com",
  databaseURL: "https://easynote-d45b6.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;
