var firebaseConfig = {
    apiKey: "AIzaSyAYK9cTrumgMz7x8q7D-G-5o9tIwXYJBEM",
    authDomain: "p94p2-3eb79.firebaseapp.com",
    databaseURL: "https://p94p2-3eb79-default-rtdb.firebaseio.com",
    projectId: "p94p2-3eb79",
    storageBucket: "p94p2-3eb79.appspot.com",
    messagingSenderId: "425706330009",
    appId: "1:425706330009:web:05e8067085a7b06507a508"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  document.getElementById("welcomesign").innerHTML=localStorage.getItem("user");