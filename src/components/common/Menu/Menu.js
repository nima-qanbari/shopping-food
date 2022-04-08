import React from 'react'

//data
import {menuItemsData} from "./data"

//components
import MenuItem from './MenuItem/MenuItem'

//styles
import "./styles.css"

const Menu = () => {
  return (
    <main>
      {menuItemsData.map(item => <MenuItem key={item.key} item={item}/>)}
    </main>
  )
}

export default Menu