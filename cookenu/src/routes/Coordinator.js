export const goToRecipeListPage = (navigate) => {
  navigate("/");
};

export const goToLoginPage = (navigate) => {
  navigate("/login");
};

export const goToRegistrationPage = (navigate) => {
  navigate("/cadastro");
};

export const goToAddRecipePage = (navigate) => {
  navigate("/adicionar-receita");
};

export const goToRecipeDetailPage = (navigate, id) => {
  navigate(`/detalhes/${id}`);
};
