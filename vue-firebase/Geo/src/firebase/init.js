import firebase from 'firebase'
import firestore from 'firebase/firestore'

// Initialize Firebase
  var config = {
    apiKey: "AIzaSyAh8mbNkauOcQVTwP0A-WBy-N9lLyOBpGE",
    authDomain: "geos-14bf0.firebaseapp.com",
    databaseURL: "https://geos-14bf0.firebaseio.com",
    projectId: "geos-14bf0",
    storageBucket: "",
    messagingSenderId: "83453201231"
  };
  firebase.initializeApp(config);

  const firebaseApp = firebase.initializeApp(config);

  export default firebaseApp.firestore()