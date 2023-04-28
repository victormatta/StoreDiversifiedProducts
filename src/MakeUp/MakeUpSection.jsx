import "./MakeUpSection.css";
import { SearchInput } from "../Search/SearchInput";
import React, { useState, useEffect } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { CgClose } from "react-icons/cg";

export function MakeUpSection() {
  const [makeup, setMakeUp] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (text) {
      setLoading(true);
      fetch(
        `https://api.mercadolibre.com/sites/MLB/search?q=beleza/search?q=${text}`
      )
        .then((response) => response.json())
        .then((response) => {
          setSearchResults(response.results);
          // console.log(response.results);
          setLoading(false);
        });
    } else {
      setSearchResults([]);
    }
  }, [text]);

  const handleItemDelete = (index) => {
    const newItem = [...cartItems];
    newItem.splice(index, 1);
    setCartItems(newItem);
  };

  const handleItemDeletee = (index) => {
    const newItem = [cartItems];
    newItem.splice(index, 1);
    setCartItems(newItem);
  };

  const handleAddItemCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  useEffect(() => {
    const fetchApi = async () => {
      const url = "https://api.mercadolibre.com/sites/MLB/search?q=beleza";
      const response = await fetch(url);
      const data = await response.json();
      setMakeUp(data.results);
    };
    fetchApi();
  }, []);

  return (
    <div className="sectionStyle">
      <section>
        <div className="titleOffers">
          <h1>Check the offers 😎</h1>
        </div>
        <SearchInput value={text} onChange={(search) => setText(search)} />
        <div className="load">{loading && <h1>Loading...</h1>}</div>
        <div className="grid">
          {searchResults.length > 0
            ? searchResults.map((item) => (
                <div key={item.id} className="item">
                  <img src={item.thumbnail} alt={item.title} />
                  <h3>{item.title}</h3>
                  <h4>R$ {item.price}</h4>
                  <div className="buyy">
                    <button
                      type="submit"
                      onClick={() => handleAddItemCart(item)}
                    >
                      <FaShoppingCart color="#ff0000" size={20} />
                    </button>
                  </div>
                </div>
              ))
            : makeup.map((item) => (
                <div key={item.id} className="item">
                  <img src={item.thumbnail} alt={item.title} />
                  <h3>{item.title}</h3>
                  <h4>R$ {item.price}</h4>
                  <div className="buyy">
                    <button
                      type="submit"
                      onClick={() => handleAddItemCart(item)}
                    >
                      <FaShoppingCart color="#ff0000" size={20} />
                    </button>
                  </div>
                </div>
              ))}
        </div>
      </section>
      {cartItems.length > 0 && (
        <div className="cartMainn">
          <div className="cartSectionn">
            <div className="buttonCart">
              <button type="submit" onClick={handleItemDeletee}>
                <CgClose size={20} />
              </button>
            </div>
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
