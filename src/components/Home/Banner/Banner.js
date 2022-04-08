import React from "react";

//styles
import "./styles.css";

//banner-image
import bannerImage from "./banner.png";

//components
import Logo from "../../common/Logo/Logo";

const Banner = () => {
  return (
    <header>
      <div className="header-content">
        <Logo />
      </div>
      <div className="content-main">
        <h1>Delicious food for your cravings</h1>
        <p>We made fresh and healthy meals with different recipes</p>
        <button>
          View Menu
         
        </button>
      </div>
      <img src={bannerImage} alt="banner" className="header-img" />
    </header>
  );
};

export default Banner;
