import React from "react";
import ReactWhatsapp from "react-whatsapp";

import { FloatingWhatsApp } from "react-floating-whatsapp";

const Whatsapp = () => {
  return (
    <div>
      <ReactWhatsapp number="+996550520666" message="hello!" />
      <FloatingWhatsApp
        phoneNumber="+996550520666"
        accountName="Ekatirina"
        allowEsc
        allowClickAway="false"
        notification
        notificationSound
        avatar="https://avatars.githubusercontent.com/u/115215766?v=4"
        chatMessage="Здраствуйте! могу ли я вам чем-то помочь?"
        placeholder="Enter your message"
        statusMessage="online"
        darkMode
      />
    </div>
  );
};

export default Whatsapp;
