import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Layout from "./Layout/Layout";
import Contacts from "./pages/Contacts/Contacts";
import Blog from "./pages/Blog/Blog";
import "./scss/style.scss";
import Profile from "./pages/Profile/Profile";
import Cart from './pages/Cart/Cart'
import Store from "./pages/Contacts/Store";
import SignUp from "./pages/SignUp/SignUp";
// catalog
import VendingFilters from "./pages/Catalog/Vending/Vending-Filters/Vending-Filters";
import CoffeeFilters from "./pages/Catalog/Coffee/Coffee-Filters/Coffee-Filters";
import TeaFilters from "./pages/Catalog/Tea/Tea-Filters/Tea-Fiters";
import HealthyFilters from "./pages/Catalog/HealthyEating/HealthyEating-Filters/HealthyEating-Filters";
import ProductCard from "./pages/Catalog/ProductCard/ProductCard";
import Layolog from "./pages/Catalog/Layolog";
// import { CustomContext } from "./Context";
// catalog


function App() {
  // const {cardid} = useContext(CustomContext)
  // const {carditem} = useContext(CustomContext)
  // console.log(cardid, carditem)
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/store" element={<Store />} />
        <Route path="/signup" element={<SignUp/>} />
        {/* Каталог товаров */}
        <Route path="/catalog" element={<Layolog />} />
        <Route path="/catalog/coffee" element={<CoffeeFilters />} />
        <Route path="/catalog/tea" element={<TeaFilters />} />
        <Route path="/catalog/wanding" element={<VendingFilters />} />
        <Route path="/catalog/healthy" element={<HealthyFilters />} />
        <Route path={"/catalog/somethingFromContext/"} element={<ProductCard />} />
        {/* Корзина */}
        <Route path='/cart' element={<Cart/>}/>
        {/* Профиль пользователя */}
        <Route path='/profile' element={<Profile/>}/>
      </Route>
    </Routes>
  );
}

export default App;
