import React from "react";

//styles
import "./styles.css"

const MenuItem = ({item}) => {
  const { name, info, price, img } = item;
  return (
    <div className="item">
      <img src={img} alt="item" />
      <div className="item-head-desc">
        <p className="head-desc-name">{name}</p>
        <p className="head-desc-info">
          <small>{info}</small>
        </p>
      </div>
      <div className="item-footer-desc">
        <span className="footer-desc-price">$ {price}</span>
        <button>Add +</button>
      </div>
    </div>
  );
};

export default MenuItem;
