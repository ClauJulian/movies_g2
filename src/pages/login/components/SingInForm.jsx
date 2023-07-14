import React from 'react';
import CustomInput from "../../../components/CustomInput/CustomInput";
import { Button, Spacer } from "@nextui-org/react";
import useLogin from '../hooks/useLogin';



const SignInForm = () => {

  const { form, setForm, signInEmail} = useLogin()

  return (
    <div>
        <form
        onSubmit={signInEmail}
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <CustomInput
          label={"Correo electrónico"}
          type={"email"}
          name={"email"}
          placeholder={"movie_app @ movieapp.com"}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <Spacer y={2} />
        <CustomInput
          label={"Contraseña"}
          type={"password"}
          name={"password"}
          placeholder={"* * * * * * * *"}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />
        <Spacer y={2} />
        <Button type="submit" color={"secondary"}>
          Iniciar sesión
        </Button>
        <Spacer y={1} />
       
      </form>

    </div>
  )
}

export default SignInForm
