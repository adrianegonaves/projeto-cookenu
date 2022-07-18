import { Button } from "@mui/material";
import React from "react";
import logo from "../../assets/Logotipo.png";
import { goToRegistrationPage } from "../../routes/Coordinator";
import LoginForm from "./LoginForm";
import { useNavigate } from "react-router-dom";
import { LoginContainer } from "./styledLogin";

const LoginPage = () => {
  const navigate = useNavigate();

  return (
    <LoginContainer>
      <img src={logo} />
      <LoginForm />

      <div>
        <Button
          onClick={() => goToRegistrationPage(navigate)}
          type={"submit"}
          fullWidth
          variant={"text"}
          color="primary"
          margin={"normal"}
        >
          Cadastre
        </Button>
      </div>
    </LoginContainer>
  );
};

export default LoginPage;
