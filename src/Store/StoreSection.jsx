import "./StoreSection.css";
import React, { useState, useEffect } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { CgClose } from "react-icons/cg";

export function StoreSection() {
  const [food, setFood] = useState([]);
  const [beautiful, setBeautiful] = useState([]);
  const [decoration, setDecoration] = useState([]);
  const [acessories, setAcessories] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  const handleItemDelete = (index) => {
    const newItem = [...cartItems];
    newItem.splice(index, 1);
    setCartItems(newItem);
  };

  const handleAddItemCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  useEffect(() => {
    const acessoriesCarApi = async () => {
      const url =
        "https://api.mercadolibre.com/sites/MLB/search?q=veiculosacessorios";
      const response = await fetch(url);
      const data = await response.json();
      setAcessories(data.results.slice(0, 6));
    };
    acessoriesCarApi();
  }, []);

  useEffect(() => {
    const decorationApi = async () => {
      const url = "https://api.mercadolibre.com/sites/MLB/search?q=decoracao";
      const response = await fetch(url);
      const data = await response.json();
      setDecoration(data.results.slice(0, 6));
    };
    decorationApi();
  }, []);

  useEffect(() => {
    const foodApi = async () => {
      const url = "https://api.mercadolibre.com/sites/MLB/search?q=alimentos";
      const response = await fetch(url);
      const data = await response.json();
      setFood(data.results.slice(0, 6));
    };
    foodApi();
  }, []);

  useEffect(() => {
    const beautifulApi = async () => {
      const url = "https://api.mercadolibre.com/sites/MLB/search?q=beleza";
      const response = await fetch(url);
      const data = await response.json();
      setBeautiful(data.results.slice(0, 6));
    };
    beautifulApi();
  }, []);

  return (
    <div className="storeSection">
      <div className="section">
        <div className="headerSection">
          <div className="titleSection">
            <h1>See offer 🔥 </h1>
          </div>

          <div className="titleFood">
            <h1>Super Market</h1>
          </div>
          <a href="/supermarket">
            <h4>See more</h4>
          </a>

          <div className="gridSection">
            {food.map((foods) => (
              <div key={foods.id} className="grid">
                <img src={foods.thumbnail} alt={foods.title} />
                <h3>{foods.title}</h3>
                <h4>R$ {foods.price}</h4>
                <div className="buy">
                  <button
                    type="submit"
                    onClick={() => handleAddItemCart(foods)}
                  >
                    <FaShoppingCart color="#ff0000" size={20} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="titleMakeup">
            <h1>Make Up</h1>
          </div>
          <a href="/makeup">
            <h4>See more</h4>
          </a>

          <div className="gridSection">
            {beautiful.map((beautiful) => (
              <div key={beautiful.id} className="grid">
                <img src={beautiful.thumbnail} alt={beautiful.title} />
                <h3>{beautiful.title}</h3>
                <h4>R$ {beautiful.price}</h4>
                <div className="buy">
                  <button
                    type="submit"
                    onClick={() => handleAddItemCart(beautiful)}
                  >
                    <FaShoppingCart color="#ff0000" size={20} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="titleDecoration">
            <h1>Most beautiful house</h1>
          </div>
          <a href="/housedecoration">
            <h4>See more</h4>
          </a>

          <div className="gridSection">
            {decoration.map((decoration) => (
              <div key={decoration.id} className="grid">
                <img src={decoration.thumbnail} alt={decoration.title} />
                <h3>{decoration.title}</h3>
                <h4>R$ {decoration.price}</h4>
                <div className="buy">
                  <button
                    type="submit"
                    onClick={() => handleAddItemCart(decoration)}
                  >
                    <FaShoppingCart color="#ff0000" size={20} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="titleAcessoriesCar">
            <h1>Car acessories</h1>
          </div>
          <a href="/caracessories">
            <h4>See more</h4>
          </a>

          <div className="gridSection">
            {acessories.map((acessories) => (
              <div key={acessories.id} className="grid">
                <img src={acessories.thumbnail} alt={acessories.title} />
                <h3>{acessories.title}</h3>
                <h4>R$ {acessories.price}</h4>
                <div className="buy">
                  <button
                    type="submit"
                    onClick={() => handleAddItemCart(acessories)}
                  >
                    <FaShoppingCart color="#ff0000" size={20} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {cartItems.length > 0 && (
        <div className="cartMain">
          <div className="cartSection">
            <h2>Cart</h2>
            <ul>
              {cartItems.map((item) => (
                <li key={item.id}>
                  <div className="imgClose">
                    <img src={item.thumbnail} alt={item.title} />
                    <button type="submit" onClick={handleItemDelete}>
                      <CgClose size={15} />
                    </button>
                  </div>
                  <p>{item.title}</p>
                  <h4>R$ {item.price}</h4>
                </li>
              ))}
            </ul>
            <div className="priceBuy">
              <h3>
                Total: R${" "}
                {cartItems
                  .reduce((acc, curr) => acc + curr.price, 0)
                  .toFixed(2)}
              </h3>
              <p>Comprar</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
