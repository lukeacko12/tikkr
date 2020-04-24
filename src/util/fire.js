import firebase from 'firebase'
var config = {
    apiKey: "AIzaSyDQNZcH5h86yJtcU0_a0MLOjw5AfR049m0",
    authDomain: "tikkr-b72a9.firebaseapp.com",
    databaseURL: "https://tikkr-b72a9.firebaseio.com",
    projectId: "tikkr-b72a9",
    storageBucket: "tikkr-b72a9.appspot.com",
    messagingSenderId: "202992828632",
    appId: "1:202992828632:web:57a8109ae2ca0f609497ad",
    measurementId: "G-Y5WDJ2FGKT"
  };
var fire = firebase.initializeApp(config);
export default fire;