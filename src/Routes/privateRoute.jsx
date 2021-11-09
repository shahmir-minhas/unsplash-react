import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import { useContext } from "react/cjs/react.development";
import { AuthContext } from "../Context/context";

const PrivateRoute = ({ component: Component, ...rest }) => {

  const { islogin, token} = useContext(AuthContext);

  return (
    <Route
      {...rest}
      render={(props) => {
        if (islogin() && token!== null) {

          return <Component {...props} />;
        } else {
          return <Redirect to={{ pathname: "/", from: props.location }} />;
        }
      }}
    />
      
  );
};

export default PrivateRoute;
