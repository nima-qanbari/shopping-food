import React from 'react'

//styles
import "./styles.css"

//react-icons
import {AiOutlineMinus, AiOutlinePlus} from "react-icons/ai"

const ButtonAddRemoveItem = ({quantity, handleAddItem, HandleRemoveItem}) => {

  const removeItemHandler = () => {

  }

  const addItemHandler = () => {
    
  }
  return (
    <div className='btnAddRemove'>
        {quantity !== 0 ? <div className='btnAddRemove-positive'>
           <AiOutlineMinus onClick={removeItemHandler} />
           <span>{quantity}</span>
          <AiOutlinePlus onClick={addItemHandler}/>
        </div> : 
        <div className='btnAddRemove-negative' onClick={addItemHandler}>
          <span>Add</span>
          <AiOutlinePlus />
        </div> }
    </div>
  )
}

export default ButtonAddRemoveItem