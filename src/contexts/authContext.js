import React, { useState, useEffect } from "react";

export const AuthContext = React.createContext(null);

const AuthContextProvider = (props) => {
  // const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState({ username: null, password: null });

  const user1 = {    
    username:"test@test.com",
    password:"test"
  }

  const user2 = {    
    username:"dugganj780@gmail.com",
    password:"test123"
  }

  const users = [user1, user2]

  // useEffect(() => {
  //   setIsAuthenticated(true);
  // }, [newUser.username]);

  const authenticate = (username, password) => {
    for(let i=0; i<=1; i++){
      if(username === users[i].username && password === users[i].password){
        setUser({ username, password });
      }
      else {console.log("incorrect user")};
    }    
  };

  const isAuthenticated = user.username === null ? false : true

  const signout = () => {
    setTimeout(() => setUser( { username: null, password: null } ), 100);
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        authenticate,
        signout,
        user,
        user1,
        user2,
        users,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
