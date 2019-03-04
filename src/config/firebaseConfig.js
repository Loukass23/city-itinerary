 import firebase from 'firebase/app'
 import 'firebase/firestore'
 import 'firebase/auth'

 // Initialize Firebase
 var config = {
     apiKey: "AIzaSyCtKC84podP-rj_fxclZg_1j7Cd7IwBGIk",
     authDomain: "city-itinerary.firebaseapp.com",
     databaseURL: "https://city-itinerary.firebaseio.com",
     projectId: "city-itinerary",
     storageBucket: "city-itinerary.appspot.com",
     messagingSenderId: "150124635351"
 };
 firebase.initializeApp(config);


 export default firebase;