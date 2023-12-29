import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='flex justify-between p-8 border-t-2 m-4'>
      <div className='px-12 text-2xl flex flex-col items-start gap-3 w-1/2'>
        <p className='text-primary font-second'>Address</p>
        <p className='font-second opacity-30 text-left'>Flower Market, Sector 61, Sahibzada Ajit Singh Nagar, Punjab 160062</p>
      </div>
      <ul className='flex justify-evenly gap-3 items-center mr-8 font-second text-2xl'>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/products'>Products</NavLink>
        <NavLink to='/contact'>Contact Us</NavLink>
        {/* <NavLink to='/vision'>Vision</NavLink> */}
      </ul>
    </div>
  )
}

export default Footer