import { useState, createContext, useContext } from "react";

export const AuthContext = createContext();
// export const useLogin = () => useContext(Auth) ;

export default function AuthProvider(props) {
  //   const { password, setPassword } = useState("");
  const [token, setToken] = useState("");
  const [user, setUser] = useState("");

  const login = (res) => {
    console.log('res 2', res)
    setToken( JSON.stringify(res.data.token));
    setUser(JSON.stringify(res.data.userName));
    // console.log('user',user);
    // console.log('token',token);
    sessionStorage.setItem("token", JSON.stringify(res.data.token));
    sessionStorage.setItem("user", JSON.stringify(res.data.userName));
  };
  const islogin = () => {
    let sessionToken = sessionStorage.getItem("token");
    // console.log('session T',sessionToken);
    return sessionToken? true : false;
    
  };

  const islogout = () =>{
      sessionStorage.clear();
  };

  const value = { user, token, login, islogin, islogout };
  return (
    <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
  );
}
