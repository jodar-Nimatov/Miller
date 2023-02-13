import React from 'react'
import Catalog from '../Catalog/Coffee-Items/Coffee-Items';
import Filters from '../Catalog/Coffee-Filters/Coffee-Filters';
import { useState } from 'react';

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