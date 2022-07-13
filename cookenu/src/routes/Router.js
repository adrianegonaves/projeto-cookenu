import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error from "../pages/ErrorPage/ErrorPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import AddRecipePage from "../pages/AddRecipePage/AddRecipePage";
import RecipeDetailPage from "../pages/RecipeDetailPage/RecipeDetailPage";
import RecipeListPage from "../pages/RecipeListPage/RecipeListPage";
import RegistrationPage from "../pages/RegistrationPage/RegistrationPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<RecipeListPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/cadastro" element={<RegistrationPage />} />
        <Route path="/adicionar-receita" element={<AddRecipePage />} />
        <Route path="/detalhe/:id" element={<RecipeDetailPage />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
