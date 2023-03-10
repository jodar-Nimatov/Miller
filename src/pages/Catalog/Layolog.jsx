import React from "react";
import { Outlet } from "react-router-dom";

const Layolog = () => {
  return (
    <div className="wrapper">
      <Outlet />
    </div>
  );
};

export default Layolog;
