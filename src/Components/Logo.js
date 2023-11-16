import "./style.css";
import React from "react";
import logoImg from "./Images/LogoImg.jpeg";

export default function Logo() {
  return (
    <div className="Logo">
      <img
        src={logoImg}
        alt="..."
        style={{
          borderRadius: "50%",
          width: "50px",
          height: "50px",
          border: " 1px solid black",
        }} />
      Event Hub
    </div>
  );
}