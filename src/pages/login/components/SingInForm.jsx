import React from "react";
import { useAuth } from "../../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { signUp } from "../services/signUp.service";
import { signIn } from "../services/signIn.service";

const SignInForm = () => {
  const navigate = useNavigate();

  const { login } = useAuth();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const result = await signIn();

    const form = new FormData(event.target);
    const data = Object.fromEntries(form.entries());

    login({
      email: data.email.toString(),
    });

    navigate("/", {
      replace: true,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input type="email" name="email" />
      </div>
      <div>
        <input type="password" name="password" />
      </div>

      <div>
        <button type="submit">Iniciar Sesión</button>
      </div>
    </form>
  );
};

export default SignInForm;
