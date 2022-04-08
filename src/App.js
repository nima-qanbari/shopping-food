import React from 'react'

//styles
import './App.css';

//react-router-dom
import { BrowserRouter as Router , Routes, Route, Navigate } from 'react-router-dom';

//pages
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';

const App = () => {
  return (
    <div className='container'>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/*' element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App