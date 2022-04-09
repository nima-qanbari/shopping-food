import React, {forwardRef} from 'react'

//components
import MenuItem from './MenuItem/MenuItem'

//styles
import "./styles.css"

const Menu = forwardRef(({list}, ref) => {
  return (
    <main ref={ref}>
      {list.map(item => <MenuItem key={item.id} item={item}/>)}
    </main>
  )
})

export default Menu