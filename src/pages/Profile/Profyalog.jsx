import React from 'react'
import { Outlet } from 'react-router-dom';

const Profyalog = () => {
  return (
    <div className='wrapper'>
        <Outlet/>
    </div>
  )
}

export default Profyalog