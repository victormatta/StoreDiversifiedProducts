import "./StoreSection.css";
import React, { useState, useEffect } from "react";

export function StoreSection() {
  const [food, setFood] = useState([]);
  const [beautiful, setBeautiful] = useState([]);

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
            <h1>Foods</h1>
          </div>

          <div className="gridSection">
            {food.map((foods) => (
              <div key={foods.id} className="grid">
                <img src={foods.thumbnail} alt={foods.title} />
                <h3>{foods.title}</h3>
                <h4>R$ {foods.price}</h4>
              </div>
            ))}
          </div>

          <div className="titleMakeup">
            <h1>Make Up</h1>
          </div>

          <div className="gridSection">
            {beautiful.map((foods) => (
              <div key={foods.id} className="grid">
                <img src={foods.thumbnail} alt={foods.title} />
                <h3>{foods.title}</h3>
                <h4>R$ {foods.price}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
