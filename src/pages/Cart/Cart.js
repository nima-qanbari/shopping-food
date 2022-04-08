import React from 'react'
//styles
import "./styles.css"

//data
import { menuItemsData } from '../../components/common/Menu/data'

//components
import Logo from '../../components/common/Logo/Logo'
import Menu from '../../components/common/Menu/Menu'
import Footer from '../../components/common/Footer/Footer'
import EmptyCart from '../../components/Cart/EmptyCart/EmptyCart'

const Cart = () => {
  return (
    <>
        <div className="cart-header">
            <Logo />
        </div>
        <EmptyCart />
        <div className="orders">
           <h1 className="orders-heading">Your Orders</h1> 
           <div className="orders-menu">
           <Menu list={menuItemsData}/>
           </div>
           <h3 className="orders-total">Your Total $23</h3>
        </div>
        <Footer />
    </>
  )
}

export default Cart