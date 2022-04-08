import React from 'react'



//components
import MenuItem from './MenuItem/MenuItem'

//styles
import "./styles.css"

const Menu = ({list}) => {
  return (
    <main>
      {list.map(item => <MenuItem key={item.key} item={item}/>)}
    </main>
  )
}

export default Menu