import React from "react";
import "../styles/Menu.css";

import { MenuList } from "../helpers/MenuList";
import MenuItem from "../components/MenuItem";
function Menu() {
  return (
    <div className="menu">
      <div className="menuTitle">Our Menu</div>
      <div className="menuList">
        {MenuList.map((items, key) => {
          return (
            <MenuItem
              image={items.image}
              name={items.name}
              price={items.price}
              key={key}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Menu;
