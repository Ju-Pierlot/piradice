
import firebase from "firebase/compat/app";
import 'firebase/compat/database';
import 'firebase/compat/auth';
import {
    signInAnonymously,
    signOut
} from 'firebase/auth'

  const firebaseApp  = firebase.initializeApp({
    apiKey: "AIzaSyCeFSdKo-lv8sV30KUVjbW2kMvVSbButts",
    authDomain: "piradice-c808e.firebaseapp.com",
    databaseURL: "https://piradice-c808e-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "piradice-c808e",
    storageBucket: "piradice-c808e.appspot.com",
    messagingSenderId: "278646273486",
    appId: "1:278646273486:web:8bf126006e86928e4be79f",
    measurementId: "G-GESQNB37XF"
  });

  const db = firebaseApp.database();

  const auth = firebase.auth();

  export function loginToFirebase(){
      try{
        return signInAnonymously(auth);
      } catch {
          return false;
      }
      
  }
  export function logout(){
    try{
      return signOut(auth);
    } catch {
        return false;
    }
    
}


  export {db, auth};