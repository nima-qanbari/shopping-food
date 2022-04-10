import React from "react";
//styles
import "./styles.css";

//components
import Logo from "../../components/common/Logo/Logo";
import Footer from "../../components/common/Footer/Footer";
import EmptyCart from "../../components/Cart/EmptyCart/EmptyCart";
import { useDispatch, useSelector } from "react-redux";
import MenuItem from "../../components/common/Menu/MenuItem/MenuItem";
import { checkout } from "../../redux/Cart/cartAction";

const Cart = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  return (
    <>
      <div className="cart-header">
        <Logo />
      </div>
      <div className="orders">
        <h1 className="orders-heading">سفارش های شما</h1>

        {state.selectedItems.length === 0 && <EmptyCart />}
        <div className="orders-menu">
          {state.selectedItems.map((item) => (
            <MenuItem key={item.id} item={item} />
          ))}
        </div>
        <h3 className="orders-total">مبلغ پرداختی: {state.total}</h3>

        {state.itemsCounter > 0 && (
          <div className="checkout-container">
            <button
              className="checkout-btn"
              onClick={() => dispatch(checkout())}
            >
              پرداخت
            </button>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Cart;
