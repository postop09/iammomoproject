import { Routes as Switch, Route } from "react-router-dom";
import AuthSelection from "./pages/AuthSelection";
import Login from "./pages/Login";
import Register from "./pages/Register";

const Routes = () => {
  return (
    <Switch>
      <Route path={"/"} element={<AuthSelection />} />
      <Route path={"/register"} element={<Register />} />
      <Route path={"/login"} element={<Login />} />
    </Switch>
  );
};

export default Routes;
