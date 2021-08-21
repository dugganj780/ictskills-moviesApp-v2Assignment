import React, { useContext, useState } from "react";
import { Redirect } from "react-router-dom";
import { AuthContext } from "../../contexts/authContext";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import { TextField } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    background: "linear-gradient(to right, #FFCE00 50%, #FFCE00 50%, #FE4880)",
    margin: theme.spacing(1),    
  },
  media: { height: 300 },

  formControl: {
    backgroundColor: "rgb(255, 255, 255)",
    margin: theme.spacing(2),
    padding: "30px"
  },
}));

const LoginForm = (props) => {
    const context  = useContext(AuthContext);
    console.log(context);
    const [details, setDetails] = useState({username:null, password:null});
    const [error, setError] = useState("");
    const classes = useStyles();
  
    const login = e => {
      e.preventDefault();
      console.log(details);    
      context.authenticate(details.username, details.password);
      if(!context.isAuthenticated){
        setError("Incorrect User Information");
      }
    };
  
    const  from = { pathname: "/" } ;
  
    return context.isAuthenticated ? (
      <Redirect to={from} />
    ) : (
      <>
        <Card className={classes.root} variant="outlined">
        <form onSubmit={login} className={classes.formControl}>
              
              {error}
              <div>
              <TextField label = "Email" type="text" name="username" id="username" variant="outlined" onChange={e => setDetails({...details, username: e.target.value})} value={details.username}/>
              </div>
              <br />
              <div>
              <TextField label = "Password" type="password" name="password" id="password" variant="outlined" onChange={e => setDetails({...details, password: e.target.value})} value={details.password}/>
              </div>
              <br />
              <div>
              <Button type="submit" variant="contained" color="secondary">Login</Button>
              </div>
          </form>
          </Card>
      </>
    );
  };
  
  export default LoginForm;