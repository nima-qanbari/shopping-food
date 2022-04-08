import React from 'react'

//styles
import "./styles.css"

//react-router-dom
import { useNavigate } from 'react-router-dom'

//react-icons
import { AiOutlineArrowLeft } from "react-icons/ai"

//empty-cart-img
import emptyCartImg from "./emptycart.jpg"

const EmptyCart = () => {
    const navigate = useNavigate()
  return (
    <div className='empty-cart'>
        <img src={emptyCartImg} alt="empty" />
        <button onClick={() => navigate("/")}><AiOutlineArrowLeft /> Shop Now</button>
    </div>
  )
}

export default EmptyCart