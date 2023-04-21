import "./StoreHeader.css";
import Store from "../assets/store.png";
import { FaBars } from "react-icons/fa";

export function StoreHeader() {
  return (
    <div className="storeHeader">
      <div className="header">
        <div className="header2">
          <div className="profileStore">
            <img src={Store} alt="Store Profile" />
          </div>
          <h4>Nome da Loja</h4>
        </div>

        <div className="links">
          <a href="">Store</a>
          <a href="">Cart</a>
          <a href="">My Profile</a>
        </div>

        <div className="Menu">
          <FaBars size={24} color="#fff" />
          <div className="box">HELLO, WORLD!</div>
        </div>
      </div>
    </div>
  );
}
