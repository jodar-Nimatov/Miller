import React from 'react'
import Catalog from '../Catalog/Items/Catalog';
import Filters from './../Catalog/Filters/Filters';

const Home = () => {
  return (
    <>
      <div className="wrapper">
        <Filters/>
        <Catalog/>
      </div>
    </>
  )
}

export default Home