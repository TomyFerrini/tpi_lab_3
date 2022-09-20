import { useState } from "react";

import "./Menu.css";

const Menu = ({ products }) => {
  const [check, setCheck] = useState([]);
  const [quantity, setQuantity] = useState("1");

  return (
    <div className="menu-container">
      <h3>MENU</h3>
      <div className="items-container">
        <ul>
          <li>
            <label for="selectFood">Comidas </label>
            <select id="selectFood" className="selects-style">
              <option></option>
              {products.map((item) =>
                item.type === "food" ? (
                  <option value={item.id}>
                    {item.description + " $" + item.price}
                  </option>
                ) : (
                  []
                )
              )}
            </select>
            <input type="number" id="input" value={quantity}></input>
          </li>
          <li>
            <label for="selectDrink">Bebidas </label>
            <select id="selectDrink" className="selects-style">
              <option></option>
              {products.map((item) =>
                item.type === "drink" ? (
                  <option value={item.id}>
                    {item.description + " $" + item.price}
                  </option>
                ) : (
                  []
                )
              )}
            </select>
            <input type="number" id="input" value={quantity}></input>
          </li>
        </ul>
      </div>
      <div className="button">
        <button type="button" id="button-style">
          Hacer Pedido
        </button>
      </div>
    </div>
  );
};

export default Menu;
