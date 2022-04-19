import { Routes, Route, Outlet } from "react-router-dom";
import Nav from "./components/MainPage/Nav";
import AuthSelection from "./pages/AuthSelection";
import Login from "./pages/Login";
import MainPage from "./pages/MainPage/MainPage";
import Register from "./pages/Register";

const Layout  = () => {
  return (
    <div>
      <Nav />
      <Outlet />
    </div>
  )
}

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<MainPage />} />
      </Route>
        <Route path="/authselection" element={<AuthSelection />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default AppRoutes;
