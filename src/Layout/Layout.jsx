import React from "react";
import { Outlet } from "react-router-dom";
import Whatsapp from "../pages/Whatsapp/Whatsapp";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      <Whatsapp/>
    </>
  );
};

export default Layout;
