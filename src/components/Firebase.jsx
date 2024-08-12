// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"; //inbuilt code that will be used to connect my React Project to Firebase console
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
//import { getAnalytics } from "firebase/analytics"; -> will be used to create analytics i will activate in the last stages of my project
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
//these are the requirements for connecting 
const firebaseConfig = {
  apiKey: "AIzaSyBhv5d_Zx6jgwJPupYyITud48hiTTaEX8I",
  authDomain: "bus-booking-e3583.firebaseapp.com",
  projectId: "bus-booking-e3583",
  storageBucket: "bus-booking-e3583.appspot.com",
  messagingSenderId: "309158450537",
  appId: "1:309158450537:web:52c4ad57f784971b6399f8",
  measurementId: "G-L4HWYEWSRL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

const auth = getAuth(app)
//CODE FOR GOOGLE

const provider = new GoogleAuthProvider() //the provider i am now using is Google
provider.setCustomParameters({
    prompt: 'select_account'
})

export { auth } // auth is being exported so that it can be used as a source of authorization

export const signInWithGooglePopup = () => signInWithPopup(auth,provider) //exported so that i can use it in other components

