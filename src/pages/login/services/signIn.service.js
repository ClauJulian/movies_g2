import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../config/firebase.config";

export const signIn = async (email, password) => {
  return await signInWithEmailAndPassword(auth, email, password);
};
