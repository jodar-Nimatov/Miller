import React from 'react'
import Filters from './../Catalog/Coffee-Filters/Coffee-Filters';
import Catalog from './../Catalog/Coffee-Items/Coffee-Items';

const Home = () => {
  return (
    <>
      <div className="wrapper">
        <div className="content">
          <Filters/>
          <Catalog/>
        </div>
      </div>
    </>
  )
}

export default Home