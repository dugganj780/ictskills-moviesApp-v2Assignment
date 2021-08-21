import React from "react";
import LoginForm from "../components/loginForm";
import { MemoryRouter } from "react-router";
import AuthContext from "../contexts/authContext";

export default {
  title: "Home Page/LoginForm",
  component: LoginForm,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
    (Story) => <AuthContext>{Story()}</AuthContext>,
  ],
};

export const Basic = () => {
  return (
    <LoginForm
    />
  );
};
Basic.storyName = "Default";
