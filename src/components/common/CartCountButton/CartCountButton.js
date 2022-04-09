import React from 'react'

//styles
import "./styles.css"

//react-router-dom
import {useNavigate} from "react-router-dom"

//react-icons
import {MdShoppingCart} from "react-icons/md"
import { useSelector } from 'react-redux'
const CartCountButton = () => {
  const counter = useSelector(state => state.itemsCounter)
  const navigate = useNavigate()
  return (
    <div className='btnCartCount' onClick={() => navigate("/cart")}>
      <div className="count">{counter >= 100 ? "99+" : counter}</div>
      <MdShoppingCart />
    </div>
  )
}

export default CartCountButton