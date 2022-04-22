import { Routes, Route, Outlet } from "react-router-dom";
import Aboutus from "./components/InfoPage/Aboutus";
import Contactus from "./components/InfoPage/Contactus";
import Rules from "./components/InfoPage/Rules";
import Nav from "./components/MainPage/Nav";
import AuthSelection from "./pages/AuthSelection";
import BecomePage from "./pages/BecomePage/BecomePage";
import Info from "./pages/Info";
import Login from "./pages/Login";
import MainPage from "./pages/MainPage/MainPage";
import MyPage from "./pages/MyPage/MyPage";
import Register from "./pages/Register";
import SharePage from "./pages/SharePage/SharePage";

const Layout = () => {
  return (
    <div>
      <Nav />
      <Outlet />
    </div>
  );
};

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route path="/momoshare" element={<SharePage />} />
        <Route path="/mymomo" element={<MyPage />} />
        <Route path="/beamomo" element={<BecomePage />} />
        <Route path="/rules" element={<Rules />} />
        <Route path="/about" element={<Aboutus />} />
        <Route path="/contact" element={<Contactus />} />
      </Route>
      <Route path="/authselection" element={<AuthSelection />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default AppRoutes;
