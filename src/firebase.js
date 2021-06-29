import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAIQ-HVnK5MQCwI_2R04DgHASQLsPI58Uw",
    authDomain: "e-shop-4a7b7.firebaseapp.com",
    projectId: "e-shop-4a7b7",
    storageBucket: "e-shop-4a7b7.appspot.com",
    messagingSenderId: "400873702392",
    appId: "1:400873702392:web:94a0c36a37e7c053d64c0d"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db , auth};