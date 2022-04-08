import React from "react";

//styles
import "./styles.css";

//logo-image
import logoImage from "./logo.png";
const Logo = () => {
  return (
    <div className="logo">
      <div>
        <img src={logoImage} alt="logo" />
        <span>
          <b>Taste</b>
        </span>
      </div>
      <p>
          <b>Restaurant & BBQ</b>
      </p> 
    </div>
  );
};

export default Logo;
