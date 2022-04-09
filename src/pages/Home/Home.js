import React, {useRef} from 'react'

//data
import { menuItemsData } from '../../components/common/Menu/data'

//components
import Footer from '../../components/common/Footer/Footer'
import Menu from '../../components/common/Menu/Menu'
import Banner from '../../components/Home/Banner/Banner'
import CartCountButton from '../../components/common/CartCountButton/CartCountButton'

const Home = () => {
  const menuRef = useRef()
  const handleScrollMenu = () => {
    menuRef.current.scrollIntoView({behavior: "smooth"})
  }
  return (
    <div>
        {/* Banner */}
        <Banner handleScrollMenu={handleScrollMenu}/>
        {/* Menu */}
        <Menu list={menuItemsData} ref={menuRef}/>
        {/* Footer */}
        <Footer />
        {/* Cart Count Button */}
        <CartCountButton />
    </div>
  )
}

export default Home