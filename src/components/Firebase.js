import firebase from "firebase"
var firebaseConfig = {
    apiKey: "AIzaSyAdOXIVOzJdnGdC1kYvvqTV-cgFWyfpX7A",
    authDomain: "twister-bff3.firebaseapp.com",
    databaseURL: "https://twister-bff3.firebaseio.com",
    projectId: "twister-bff3",
    storageBucket: "twister-bff3.appspot.com",
    messagingSenderId: "494086384623",
    appId: "1:494086384623:web:9284b342d7998005b6241a",
    measurementId: "G-MPXSN2E4TP",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();


export default db; 