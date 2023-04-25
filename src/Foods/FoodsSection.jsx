import "./FoodsSection.css";
import React, { useState, useEffect } from "react";
import { FaShoppingCart } from "react-icons/fa";

export function FoodsSection() {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      const url = "https://api.mercadolibre.com/sites/MLB/search?q=alimentos";
      const response = await fetch(url);
      const data = await response.json();
      setFoods(data.results);
    };
    fetchApi();
  }, []);

  return (
    <div className="sectionStyle">
      <section>
        <div className="titleOffers">
          <h1>Check the offers 😎</h1>
        </div>
        <div className="grid">
          {foods.map((foods) => (
            <div key={foods.id} className="item">
              <img src={foods.thumbnail} alt={foods.title} />
              <h3>{foods.title}</h3>
              <h4>R$ {foods.price}</h4>
              <div className="cart">
                <a href="http://" target="_blank">
                  <FaShoppingCart size={24} color="red" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
