import React from "react";

//styles
import "./styles.css";

//react-icons
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

//helper
import { isInCart, quantityCount } from "../../../helper/helper";
//react-redux
import { useSelector, useDispatch } from "react-redux";
import {
  increase,
  addItem,
  decrease,
  removeItem,
} from "../../../redux/Cart/cartAction";

const ButtonAddRemoveItem = ({ item }) => {
  const state = useSelector((state) => state);
  console.log(state);
  const dispatch = useDispatch();
  return (
    <div className="btnAddRemove">
      {isInCart(state, item.id) ? (
        <button
          className="addRemove"
          onClick={() => dispatch(increase(item))}
        >
          +
        </button>
      ) : (
        <button
          className="add"
          onClick={() => dispatch(addItem(item))}
        >
          افزودن
        </button>
      )}

      {quantityCount(state, item.id) > 0 && <span className="counter">{quantityCount(state, item.id)}</span>}

      {quantityCount(state, item.id) > 1 && (
        <button
          className="addRemove"
          onClick={() => dispatch(decrease(item))}
        >
          -
        </button>
      )}
      {quantityCount(state, item.id) === 1 && (
        <button
          className="addRemove"
          onClick={() => dispatch(removeItem(item))}
        >
          -
        </button>
      )}
    </div>
  );
};

export default ButtonAddRemoveItem;
