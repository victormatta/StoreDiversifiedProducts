import "./StoreHeader.css";
import Store from "../assets/store.png";
import { FaBars } from "react-icons/fa";
import React, { useState } from "react";

export function StoreHeader() {
  const [fixed, setFixed] = useState(false);

  let handleMouseLeave = () => {
    setFixed(false);
  };

  return (
    <div className="storeHeader">
      <div className="header">
        <div className="header2">
          <div className="profileStore">
            <img src={Store} alt="Store Profile" />
          </div>
          <h4>JVL</h4>
        </div>

        <div className="links">
          <a target="_blank" href="./">
            {" "}
            Mobile Store
          </a>
        </div>

        <div
          className="Menu"
          onMouseOver={() => setFixed(true)}
          onMouseLeave={handleMouseLeave}
        >
          <FaBars size={24} color="#fff" />
          <div className={fixed ? "box fixed" : "box"}>
            <div className="boxLinksMain">
              <div className="boxLinks">
                <a href="/">Mobile</a>
                <a href="/supermarket">Super Market</a>
                <a href="/makeup">Make Up</a>
                <a href="/housedecoration">House Decoration</a>
                <a href="/caracessories">Car Acessories</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
