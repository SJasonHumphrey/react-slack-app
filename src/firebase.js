import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAdxaT_RTjqblOQB4k5KvUQkUF2kdRCU6Q",
    authDomain: "react-slack-9862d.firebaseapp.com",
    databaseURL: "https://react-slack-9862d-default-rtdb.firebaseio.com",
    projectId: "react-slack-9862d",
    storageBucket: "react-slack-9862d.appspot.com",
    messagingSenderId: "28797851313",
    appId: "1:28797851313:web:449af65dca53de03e9f490"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider, db };