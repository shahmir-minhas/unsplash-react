import logo from "./logo.svg";
import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";
import Navbar from "./Components/Navbar/navbar";
import Home from "./Pages/Home/home";
import Topbar from "./Components/Topbar/topbar";
import SignUp from "./Pages/Sign-up/sign-up";
import AuthProvider from "./Context/context";
import PrivateRoute from './Routes/privateRoute';
import Dashboard from "./Pages/Dashboard/dashboard";

function App() {
  return (
    <div>
      <header>
        <Navbar />
        <Topbar />
      </header>
      <Switch>
      {/* <Route path="/dashboard" exact component={Dashboard} /> */}
        <Route path="/sign-up" exact component={SignUp} />
        <Route path="/" exact component={Home} />
        <PrivateRoute exact path="/dashboard" component={Dashboard}/>

      </Switch>
    </div>
  );
}

export default App;
