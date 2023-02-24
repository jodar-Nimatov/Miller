import React from "react";
import ReactWhatsapp from "react-whatsapp";

import {FloatingWhatsApp} from "react-floating-whatsapp";
// import "react-floating-whatsapp/dist/index.css";

const Whatsapp = () => {
  return (
    <div>
      <ReactWhatsapp number="+996550520666" message="Дарова заебал" />
      <FloatingWhatsApp phoneNumber="+996550520666" />
    </div>
  );
};

export default Whatsapp;
