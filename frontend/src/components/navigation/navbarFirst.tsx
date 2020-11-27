import React, { useState } from "react";
import logo from "./target.svg";
import "./navbarFirst.scss";
import Login from '../login/login.js'

export default function NavBarFirst() {
  return (
    <div className="navbarFirst">
      <img height="70px" alt="404" src={logo} />
      <Login />
    </div>
  );
}
