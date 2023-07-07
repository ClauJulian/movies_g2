import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../config/firebase.config";

export const signUp = async (email, password) => {
  return await createUserWithEmailAndPassword(auth, email, password);
};
