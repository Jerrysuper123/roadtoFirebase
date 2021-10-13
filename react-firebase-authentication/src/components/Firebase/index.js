import app from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyAeV0TZB2tzw3FL1UiB8T4t_b9BHUFhgVQ",
    authDomain: "reactfirebase-447de.firebaseapp.com",
    projectId: "reactfirebase-447de",
    storageBucket: "reactfirebase-447de.appspot.com",
    messagingSenderId: "388987327339",
    appId: "1:388987327339:web:f19ddf907f79d34072b22e",
    measurementId: "G-GT7VK7WETW"
  };

  class Firebase{
      constructor(){
          app.initializeApp(config);
      }
  }

  export default Firebase;