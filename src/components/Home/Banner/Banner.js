import React from "react";

//styles
import "./styles.css";

//react-icons
import { AiOutlineArrowRight } from "react-icons/ai";

//banner-image
import bannerImage from "./banner.png";

//components
import Logo from "../../common/Logo/Logo";

const Banner = ({handleScrollMenu}) => {
  return (
    <header>
      <div className="header-content">
        <Logo />
        <div className="img-container">
          <img src={bannerImage} alt="banner" className="header-img-top" />
        </div>
        <div className="content-main">
          <h1>Delicious food for your cravings</h1>
          <p>We made fresh and healthy meals with different recipes</p>
          <button onClick={handleScrollMenu}>
            View Menu
            <AiOutlineArrowRight />
          </button>
        </div>
      </div>
      <img src={bannerImage} alt="banner" className="header-img" />
    </header>
  );
};

export default Banner;
