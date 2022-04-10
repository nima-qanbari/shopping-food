import React from "react";

//styles
import "./styles.css";

//react-router-dom
import { useNavigate } from "react-router-dom";

//react-icons
import { AiOutlineArrowLeft } from "react-icons/ai";

//empty-cart-img
import empty from "../../../images/empty-cart.svg";

const EmptyCart = () => {

  const navigate = useNavigate();

  return (
    <div className="empty-cart">
      <div>
        <img src={empty} alt="empty-card" />
        <h3>سبد خرید شما خالی است!</h3>
        <button onClick={() => navigate("/")}>
          رفتن به فروشگاه <AiOutlineArrowLeft />
        </button>{" "}
      </div>
    </div>
  );
};

export default EmptyCart;
