import { useState } from "react";
import initializeFirebase from "../Firebase/firebase.init";
import { GoogleAuthProvider,getAuth ,signInWithPopup, onAuthStateChanged,signOut } from "firebase/auth";
import { useEffect } from "react";

initializeFirebase();

const useFirebase = ()=> {
    const [user,setUser] = useState({});
    const [error,setError] = useState('');
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              
              setUser(user);
             
            } else {
              
              setUser({});
            }
          });
    },[])
    const logOut = ()=>{
        signOut(auth).then(() => {
            // Sign-out successful.
            setUser({});
          }).catch((error) => {
            // An error happened.
          });
    }
    const googleSignIn = () =>{
        signInWithPopup(auth, googleProvider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
   
  
    const user = result.user;
    setUser(user);
    console.log(user);
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    setError(errorMessage);
    
    // ...
  });
    }
    return{
        googleSignIn,
        user,
        error,
        logOut
    }
}
export default useFirebase;