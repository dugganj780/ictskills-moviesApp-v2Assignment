import React from "react";
import LoginForm from "../components/loginForm";
import { Typography } from "@material-ui/core";
import Grid from '@material-ui/core/Grid';

const LoginPage = () => {

  return (
    <>
    <Grid container>
      <Grid item xs={4}  spacing={2}/>
      <Grid item xs={4}>
        <Typography variant="h3" align="center" color="red">Please Login</Typography>
        <LoginForm />
      </Grid>
      <Grid item xs={4} spacing={2}/>
    </Grid>
    </>
  );
};

export default LoginPage;