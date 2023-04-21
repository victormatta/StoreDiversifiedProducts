import "./Section.css";
import React, { useState, useEffect } from "react";
import { FaShoppingCart } from "react-icons/fa";

export function Section() {
  const [mobile, setMobile] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      const url = "https://api.mercadolibre.com/sites/MLB/search?q=celular";
      const response = await fetch(url);
      const data = await response.json();
      setMobile(data.results);
    };
    fetchApi();
  }, []);

  return (
    <div className="sectionStyle">
      <section>
        <div className="grid">
          {mobile.map((item) => (
            <div key={item.id} className="item">
              <img src={item.thumbnail} alt={item.title} />
              <h3>{item.title}</h3>
              <h4>R$ {item.price}</h4>
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
