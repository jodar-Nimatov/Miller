import React from "react";
import { Outlet } from "react-router-dom";

const Layolog = () => {
  return (
    <div className="wrapper cun">
      <Outlet />
    </div>
  );
};

export default Layolog;
