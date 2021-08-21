import React, { useContext } from "react";
import { AuthContext } from "../contexts/authContext";
import { Typography } from "@material-ui/core";

const LogoutPage = () => {
    const context = useContext(AuthContext);
    context.signout();


  return (
    <Typography variant="h3">
        You have successfully logged out
        </ Typography>
  );
};

export default LogoutPage;