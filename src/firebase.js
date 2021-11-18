
// v9 compat packages are API compatible with v8 code
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyCIXdMduBLWvNgb_gLb9uIDEB2kM7MExbc",
    authDomain: "netflix-remade.firebaseapp.com",
    projectId: "netflix-remade",
    storageBucket: "netflix-remade.appspot.com",
    messagingSenderId: "901191221993",
    appId: "1:901191221993:web:2013fb6f693acb9773e678",
    measurementId: "G-41EXL1SFY3"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const dB = firebaseApp.firestore();
  const auth = firebase.auth();


  export default dB;
  export { auth };
  