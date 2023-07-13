import {   
    signInWithEmailAndPassword,    
    createUserWithEmailAndPassword,    
  } from "firebase/auth";
  
  import { auth } from "../config/firebase";
  

  export const signInWithEmail = async (email, password) => {
    const user = await signInWithEmailAndPassword(auth, email, password);
    return user;
  };
  
  export const signUpWithEmail = async (email, password) => {
    const user = await createUserWithEmailAndPassword(auth, email, password);
    return user;
  };
  
  export const signOut = async () => {
    await auth.signOut();
  };