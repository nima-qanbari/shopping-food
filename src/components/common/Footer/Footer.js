import React from "react";

//components
import Logo from "../Logo/Logo";

//react-icons
import {BsSuitHeartFill} from "react-icons/bs"

//styles
import "./styles.css";

const Footer = () => {
  return (
    <footer>
      <p>
      ما تیمی از آشپزهای حرفه ای هستیم که در مورد غذا، مهارت های شگفت انگیز و تجربه و تخصص خود را در آشپزی در اختیار شما قرار میدهیم .
      </p>
      <Logo />
      <h5>made by <span><BsSuitHeartFill/></span> nima qanbari</h5>
    </footer>
  );
};

export default Footer;
