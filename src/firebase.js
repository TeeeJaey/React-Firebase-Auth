import firebase from "firebase/app";
import "firebase/auth";


let config = {
  apiKey: "XXXXXXXXXXXXXXXXXXXXXX",
  authDomain: "XXXXXXXXXXX-app-db.firebaseapp.com",
  databaseURL: "https://XXXXXXXXXXX-app-db-default-rtdb.firebaseio.com/",
  projectId: "XXXXXXXXXXX-app-db",
  storageBucket: "XXXXXXXXXXX-app-db.appspot.com",
  messagingSenderId: "XXXXXXXXXXX",
  appId: "XXXXXXXXXXXXXXXXXXXXXX"
};

const app = firebase.initializeApp(config);

export const auth = app.auth();
export default app;
