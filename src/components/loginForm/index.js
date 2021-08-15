import React, { useContext, useState } from "react";
import { Redirect } from "react-router-dom";
import { AuthContext } from "../../contexts/authContext";

const LoginForm = (props) => {
    const context  = useContext(AuthContext);
    console.log(context);
    const [details, setDetails] = useState({username:null, password:null});
    const [error, setError] = useState("");
  
    const login = e => {
      e.preventDefault();
      console.log(details);    
      context.authenticate(details.username, details.password);
      if(!context.isAuthenticated){
        setError("Incorrect User Information");
      }
    };
  
    // Set 'from' to path where browser is redirected after a successful login.
    // Either / or the protected path user tried to access.
    //const  from = { pathname: "/" } ;
    const  from = { pathname: "/" } ;
  
    return context.isAuthenticated ? (
      <Redirect to={from} />
    ) : (
      <>
        <h2>Login page</h2>
        <p>You must log in to view the protected pages </p>
        <form onSubmit={login}>
              <h2>Login</h2>
              {error}
              <label>Email</label>
              <input type="text" name="username" id="username" onChange={e => setDetails({...details, username: e.target.value})} value={details.username}/>
              <label>Password</label>
              <input type="password" name="password" id="password" onChange={e => setDetails({...details, password: e.target.value})} value={details.password}/>
              <input type ="submit" value="Login" />
          </form>
        <button onClick={login}>Submit</button>
      </>
    );
  };
  
  export default LoginForm;