import React from 'react'
import marker from '/marker.svg'
import shipping from '/shipping-fast.svg'
import userIcon from '/users-alt.svg'
import clock from '/clock-five.svg'
import {Link} from 'react-router-dom'

export const Home = () => {
  return (
    <>
    <div className='h-4/5 w-full bg-primary overflow-hidden flex'>
        <div className='text-7xl w-1/2 text-left pt-20 pl-10 text-secondary font-prime'>Your <span className='text-2xl font-flower'>bloom & boom</span> destination for exquisite floral delights
        <Link to='/products'>
          <button className='px-10 py-4 bg-secondary text-primary text-4xl rounded-full mt-10'>Order Now</button>

        </Link>
        </div>
        <div className='w-3/5 h-full scale-150 rounded-full relative top-1/2 left-36 overflow-hidden object-contain'>
            <img src="https://th.bing.com/th/id/OIP.BpiDnC2UhrdI0QyuBOz6TAHaEw?rs=1&pid=ImgDetMain" alt="flr"/>
        </div>
    </div>
    <div className='h-screen bg-secondary w-full'>
        <div className='text-primary opacity-60 text-5xl pt-20'>Why Choose Us ?</div>
        <div className='flex justify-around mt-20'>

          <div className=' flex flex-col items-center w-60 h-96'>
            <img src={marker} alt="f1" className='h-16'/>
            <p className='text-primary text-3xl my-3 font-semibold font-second'>Locations</p>
            <p className='text-primary text-3xl opacity-60 mt-3 font-thin font-second'>Convinient location in the city center</p>
          </div>
          <div className='flex flex-col items-center w-60 h-96'>
            <img src={shipping} alt="f2" className='h-16' />
            <p className='text-primary text-3xl my-3 font-semibold font-second'>Fast Delivery</p>
            <p className='text-primary text-3xl opacity-60 mt-3 font-thin font-second'>Fast delivery upto 30 minutes</p>
          </div>
          <div className='flex flex-col items-center w-60 h-96'>
            <img src={userIcon} alt="f2" className='h-16' />
            <p className='text-primary text-3xl my-3 font-semibold font-second'>Client Base</p>
            <p className='text-primary text-3xl opacity-60 mt-3 font-thin font-second'>We have a large and permanent client base</p>
          </div>
          <div className='flex flex-col items-center w-60 h-96'>
            <img src={clock} alt="f2" className='h-16' />
            <p className='text-primary text-3xl my-3 font-semibold font-second'>Saving Time</p>
            <p className='text-primary text-3xl opacity-60 mt-3 font-thin font-second'>By ordering from us you save your time</p>
          </div>
        </div>
        <Link to='/products'>
          <div className='flex h-48 relative bottom-10'>
            <div className='h-full w-full px-48 rounded-t-full bg-primary flex justify-between items-center'>
              <div className='w-1/2'>
                <p className='text-3xl text-third'>Go To Products</p>
              </div>
              <div className='h-1/2 w-3/5 rounded-full bg-secondary text-3xl text-primary flex items-center justify-center font-semibold'> {`> > > >`} </div>
            </div>
          </div>
        </Link>
    </div>
    </>
  )
}
