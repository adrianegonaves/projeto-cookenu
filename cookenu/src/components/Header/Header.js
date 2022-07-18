import  React from "react";
import { useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import { StyledToolbar } from "./StyledHeader";
import Button from "@mui/material/Button";
import { goToLoginPage, goToRecipeListPage } from "../../routes/Coordinator";

const Header = () => {
  const navigate = useNavigate();

  return (
    <AppBar position="static">
      <StyledToolbar>
        <Button onClick={() => goToRecipeListPage(navigate)} color="inherit">
          Cookenu
        </Button>
        <Button onClick={() => goToLoginPage(navigate)} color="inherit">
          Login
        </Button>
      </StyledToolbar>
    </AppBar>
  );
};

export default Header;
