import React from 'react'
//styles
import "./styles.css"

//data
import { menuItemsData } from '../../components/common/Menu/data'

//components
import Logo from '../../components/common/Logo/Logo'
import Footer from '../../components/common/Footer/Footer'
import EmptyCart from '../../components/Cart/EmptyCart/EmptyCart'
import { useSelector } from 'react-redux'
import MenuItem from '../../components/common/Menu/MenuItem/MenuItem'

const Cart = () => {
  const state = useSelector(state => state)
  return (
    <>
        <div className="cart-header">
            <Logo />
        </div>
        <EmptyCart />
        <div className="orders">
           <h1 className="orders-heading">Your Orders</h1> 
           <div className="orders-menu">
            {state.selectedItems.map(item => <MenuItem key={item.id} item={item}/>)}
           </div>
           <h3 className="orders-total">Your Total $ {state.total}</h3>
        </div>
        <Footer />
    </>
  )
}

export default Cart