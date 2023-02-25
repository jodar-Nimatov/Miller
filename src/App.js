import React, {useState, useEffect} from 'react'
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Layout from "./Layout/Layout";
import Contacts from "./pages/Contacts/Contacts";
import Blog from "./pages/Blog/Blog";
// import ClipLoader from "react-spinners/ClipLoader";
import "./scss/style.scss";
import Layolog from "./pages/Catalog/Layolog";
import Profile from "./pages/Profile/Profile";
import Store from './pages/Contacts/Store';
import CoffeeFilters from './pages/Catalog/Coffee/Coffee-Filters/Coffee-Filters';
import TeaFilters from "./pages/Catalog/Tea/Tea-Filters/Tea-Fiters";
import VendingFilters from './pages/Catalog/Vending/Vending-Filters/Vending-Filters';
import HealthyFilters from './pages/Catalog/HealthyEating/HealthyEating-Filters/HealthyEating-Filters';
import Cards from './pages/Cards/Cards';
function App() {
  const [loading, setLoading] = useState(false);
  document.addEventListener("DOMContentLoaded", () => setLoading(true));
  return (
  <>
  {
    loading ? <ClipLoader color={'#123abc'} loading={loading} size={64}/> :
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route path='' element={<Home/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/contacts' element={<Contacts/>}/>
        <Route path='/Profile' element={<Profile  />}/>
        <Route path='/catalog' element={<Layolog/>}/>
        {/* Каталог товаров */}
        <Route path='/catalog/coffee' element={<CoffeeItems/>}/>
        <Route path='/catalog/tea' element={<TeaItems/>}/>
        <Route path='/catalog/wanding' element={<VendingItems/>}/>
        <Route path='/catalog/healthy' element={<HealthyEatingItems/>}/>
        {/* Каталог товаров */}
      </Route>
    </Routes>
  }
  </>
  );
}

export default App;