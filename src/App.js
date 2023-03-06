import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Layout from "./Layout/Layout";
import VendingItems from "./pages/Catalog/Vending/Vending-Items/Vending-Items";
import HealthyEatingItems from "./pages/Catalog/HealthyEating/HealthyEating-Items/HealthyEating-Items";
import CoffeeItems from "./pages/Catalog/Coffee/Coffee-Items/Coffee-Items";
import TeaItems from "./pages/Catalog/Tea/Tea-Items/Tea-Items";
import Contacts from "./pages/Contacts/Contacts";
import Blog from "./pages/Blog/Blog";
import "./scss/style.scss";
import Layolog from "./pages/Catalog/Layolog";
import Store from "./pages/Contacts/Store";
import "./scss/style.scss";
import Cards from "./pages/Cards/Cards";
import SignUp from "./pages/SignUp/SignUp";
import Profile from "./pages/Profile/Profile";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1200);
  }, []);

  return (
    <>
      {loading ? (
        <div className="loader">
          <div className="inner one"></div>
          <div className="inner two"></div>
          <div className="inner three"></div>
        </div>
      ) : (
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/store" element={<Store />} />
            <Route path="/catalog" element={<Layolog />} />
            <Route path="/catalog/coffee" element={<CoffeeItems />} />
            <Route path="/catalog/tea" element={<TeaItems />} />
            <Route path="/catalog/wanding" element={<VendingItems />} />
            <Route path="/catalog/healthy" element={<HealthyEatingItems />} />
            <Route path="/cards" element={<Cards />} />
            <Route path="/SignUp" element={<SignUp />} />
            <Route path="/profile" element={<Profile />} />
          </Route>
        </Routes>
      )}
    </>
  );
}

export default App;
