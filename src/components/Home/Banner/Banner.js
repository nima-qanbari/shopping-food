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
          <h1>غذاهای خوشمزه برای شما</h1>
          <p>روح خود را با غذا های خوشمزه ما راضی کنید.</p>
          <button onClick={handleScrollMenu} dir="ltr">
            Menu
            <AiOutlineArrowRight />
          </button>
        </div>
      </div>
      <img src={bannerImage} alt="banner" className="header-img" />
    </header>
  );
};

export default Banner;
