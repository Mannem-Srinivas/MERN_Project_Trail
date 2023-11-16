import "./style.css";
import React from "react";
import Logo from "./Logo";
import NavButtons from "./NavButtons";
import UserLogin  from "./UserLogin";

export default function NavItems() {
  return (
    <div className="NavItems">
      <Logo />
      <NavButtons />
      <UserLogin />
    </div>
  );
}