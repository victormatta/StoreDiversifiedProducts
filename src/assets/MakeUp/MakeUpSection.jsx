import "./MakeUpSection.css";
import React, { useState, useEffect } from "react";
import { FaShoppingCart } from "react-icons/fa";

export function MakeUpSection() {
  const [makeup, setMakeUp] = useState([]);

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
        <div className="grid">
          {makeup.map((makeup) => (
            <div key={makeup.id} className="item">
              <img src={makeup.thumbnail} alt={makeup.title} />
              <h3>{makeup.title}</h3>
              <h4>R$ {makeup.price}</h4>
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
