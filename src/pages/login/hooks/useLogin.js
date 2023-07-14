import { useState } from "react";
import {
    signInWithEmail,
    signUpWithEmail,
  } from "../../../services/firebase.services";
import { authKey, AUTH_LOGIN } from "../../../core/auth/reducers/authReducer";
import { useAuth } from "../../../core/auth/hooks/useAuth";



const useLogin = () => {
    const { dispatch: dispatchAuth } = useAuth();

    const [form, setForm] = useState({
        email: "",
        password: "",
      });


    const signUpEmail = async (e) => {
      e.preventDefault();
  
      try {
        const { email, password } = form;
  
        if (!email || !password) return;
  
        const res = await signUpWithEmail(email, password);  
  
        if (!res) return;
  
        localStorage.setItem(
          authKey,
          JSON.stringify({
            isAuth: true,
            user: res.user,
          })
        )
  
        dispatchAuth({
          type: AUTH_LOGIN,
          payload: res.user,
        });
  
      //   toastSuccess("Bienvenido!");
      } catch (error) {
        console.log(error);
        if (error.code === "auth/email-already-in-use") {
          // toastError("El correo ya está en uso");
          return;
        }
  
        if (error.code === "auth/invalid-email") {
          // toastError("El correo no es válido");
          return;
        }
      }
    };

    const signInEmail = async (e) => {
      e.preventDefault();
  
      try {
        const { email, password } = form;
  
        if (!email || !password) return;
  
        const res = await signInWithEmail(email, password);
  
        if (!res) return;
  
        localStorage.setItem(
          authKey,
          JSON.stringify({
            isAuth: true,
            user: res.user,
          })
        )
  
        dispatchAuth({
          type: AUTH_LOGIN,
          payload: res.user,
        });
  
      //   toastSuccess("Bienvenido!");
      } catch (error) {
        if (error.code === "auth/user-not-found") {
          // toastError("El usuario no existe");
          return;
        }
  
        if (error.code === "auth/wrong-password") {
          // toastError("La contraseña es incorrecta");
          return;
        }
      }
    };

    return { form, setForm, signInEmail, signUpEmail };

}

export default useLogin