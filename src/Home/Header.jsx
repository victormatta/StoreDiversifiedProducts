import "./Header.css";
import Store from "../assets/store.png";
import { FaBars } from "react-icons/fa";
import React, { useState } from "react";

export function Header() {
  const [fixed, setFixed] = useState(false);

  let handleMouseLeave = () => {
    setFixed(false);
  };

  return (
    <div className="headerStyle">
      <header>
        <div className="header22">
          <div className="profileStoree">
            <a href="/home">
              <img src={Store} alt="Store Profile" />
            </a>
          </div>
          <a href="/home">
            <h4>JVL</h4>
          </a>
        </div>
        <div
          className="Menuu"
          onMouseOver={() => setFixed(true)}
          onMouseLeave={handleMouseLeave}
        >
          <FaBars size={24} color="#fff" />
          <div className={fixed ? "boxx fixedd" : "boxx"}>
            <div className="boxLinksMainn">
              <div className="boxLinkss">
                <a href="/home">home</a>
                <a href="/supermarket">Super Market</a>
                <a href="/makeup">Make Up</a>
                <a href="/housedecoration">House Decoration</a>
                <a href="/caracessories">Car Acessories</a>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
