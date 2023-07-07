import React, { useState } from "react";
import { useAuth } from "../../../hooks/useAuth";
import SignInForm from "../components/SingInForm";
import SignUpForm from "../components/SignUpForm";

const LoginView = () => {
  const FORMS = {
    SIGN_IN: "SIGN_IN",
    SIGN_UP: "SIGN_UP",
  };

  const [showForm, setShowForm] = useState(FORMS.SIGN_IN);

  const { login } = useAuth();

  const handleShowForm = () => {
    setShowForm((prevState) =>
      prevState === FORMS.SIGN_IN ? FORMS.SIGN_UP : FORMS.SIGN_IN
    );
  };

  return (
    <div>
      <div>
        <h1>Iniciar Sesión</h1>
      </div>

      {showForm === FORMS.SIGN_IN ? <SignInForm /> : <SignUpForm />}

      <button onClick={handleShowForm}>
        {showForm === FORMS.SIGN_IN ? "Registrarse" : "Iniciar Sesión"}
      </button>
    </div>
  );
};

export default LoginView;
