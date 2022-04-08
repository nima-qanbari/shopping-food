import React from 'react'

//styles
import "./styles.css"

//react-router-dom
import {useNavigate} from "react-router-dom"

//react-icons
import {MdShoppingCart} from "react-icons/md"
const CartCountButton = ({cartCount}) => {
  const navigate = useNavigate()
  return (
    <div className='btnCartCount' onClick={() => navigate("/cart")}>
      <div className="count">{cartCount >= 100 ? "99+" : cartCount}</div>
      <MdShoppingCart />
    </div>
  )
}

export default CartCountButton