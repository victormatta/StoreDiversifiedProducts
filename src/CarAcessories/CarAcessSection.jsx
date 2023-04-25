import "./CarAcessSection.css";
import React, { useState, useEffect } from "react";
import { FaShoppingCart } from "react-icons/fa";

export function CarAcessSection() {
  const [carAcess, setCarAcess] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      const url =
        "https://api.mercadolibre.com/sites/MLB/search?q=veiculosacessorios";
      const response = await fetch(url);
      const data = await response.json();
      setCarAcess(data.results);
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
          {carAcess.map((carAcess) => (
            <div key={carAcess.id} className="item">
              <img src={carAcess.thumbnail} alt={carAcess.title} />
              <h3>{carAcess.title}</h3>
              <h4>R$ {carAcess.price}</h4>
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
