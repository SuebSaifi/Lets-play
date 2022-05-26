import   firebase from "firebase/compat/app";
import "firebase/compat/storage"

const firebaseConfig = {
  apiKey: process.env.APP_KEY,
    authDomain: "let-s-play-9e752.firebaseapp.com",
    projectId: "let-s-play-9e752",
    storageBucket: "let-s-play-9e752.appspot.com",
    messagingSenderId: "475999089709",
    appId: "1:475999089709:web:e8a9fab573475d0c46b4a4",
    measurementId: "G-D1JVBWP371",
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export default storage;

// AIzaSyCnqk-HmgEV2bgiCKvf2A9zaiuBIEMcGQo