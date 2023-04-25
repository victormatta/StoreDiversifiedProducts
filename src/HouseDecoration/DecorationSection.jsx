import "./DecorationSection.css";
import React, { useState, useEffect } from "react";
import { FaShoppingCart } from "react-icons/fa";

export function DecorationSection() {
  const [decoration, setDecoration] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      const url = "https://api.mercadolibre.com/sites/MLB/search?q=decoracao";
      const response = await fetch(url);
      const data = await response.json();
      setDecoration(data.results);
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
          {decoration.map((decoration) => (
            <div key={decoration.id} className="item">
              <img src={decoration.thumbnail} alt={decoration.title} />
              <h3>{decoration.title}</h3>
              <h4>R$ {decoration.price}</h4>
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
