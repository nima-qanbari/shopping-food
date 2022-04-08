import React from 'react'

//data
import { menuItemsData } from '../../components/common/Menu/data'

//components
import Footer from '../../components/common/Footer/Footer'
import Menu from '../../components/common/Menu/Menu'
import Banner from '../../components/Home/Banner/Banner'
import CartCountButton from '../../components/common/CartCountButton/CartCountButton'

const Home = () => {
  return (
    <div>
        {/* Banner */}
        <Banner />
        {/* Menu */}
        <Menu list={menuItemsData}/>
        {/* Footer */}
        <Footer />
        {/* Cart Count Button */}
        <CartCountButton />
    </div>
  )
}

export default Home