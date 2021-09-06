import firebase from "firebase/app"
import "firebase/auth"


let config = {
  apiKey: "AIzaSyBcCiSCJj2ZBsQz-jOSCaRlmK9iEJFDBXQ",
  authDomain: "meditation-app-db.firebaseapp.com",
  databaseURL: "https://meditation-app-db-default-rtdb.firebaseio.com/",
  projectId: "meditation-app-db",
  storageBucket: "meditation-app-db.appspot.com",
  messagingSenderId: "650890334603",
  appId: "1:650890334603:web:5fde5c580b3608c2239f8e"
};

const app = firebase.initializeApp(config)

export const auth = app.auth()
export default app
