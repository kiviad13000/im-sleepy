import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
    apiKey: "AIzaSyBtHrEmVBl8H0YRHHVlkTzZFi2uZ50bzok",
    authDomain: "im-sleepy.firebaseapp.com",
    projectId: "im-sleepy",
    storageBucket: "im-sleepy.appspot.com",
    messagingSenderId: "713881275450",
    appId: "1:713881275450:web:8d6cfbac8d857f317bb903"
  };
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
