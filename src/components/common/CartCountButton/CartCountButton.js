import React from 'react'

//styles
import "./styles.css"


//react-icons
import {MdShoppingCart} from "react-icons/md"
const CartCountButton = ({cartCount}) => {
  return (
    <div className='btnCartCount'>
      <div className="count">{cartCount >= 100 ? "99+" : cartCount}</div>
      <MdShoppingCart />
    </div>
  )
}

export default CartCountButton