import React from 'react'
import { NavLink, Link } from 'react-router-dom'

const Header = () => {
  return (   
    <header>
        <h2 className='font-flower text-5xl'>Daiseyline the Flower Shop</h2>
        <nav className='flex justify-between border-t-2'>
            <div className='h-24 w-1/3' id="logo">
                <Link to='/'>
                  <img className='max-h-full' src="https://www.creativefabrica.com/wp-content/uploads/2021/04/03/Hand-Drawn-Botanical-Daisy-Flower-Logo-Graphics-10320022-1.jpg" alt="logo" />
                </Link>
            </div>
            <ul className='flex justify-evenly gap-3 items-center mr-8 font-second'>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/products'>Products</NavLink>
                <NavLink to='/contact'>Contact Us</NavLink>
                <NavLink to='/vision'>Cart</NavLink>
            </ul>
        </nav>
    </header>
  )
}

export default Header