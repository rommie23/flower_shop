import React from 'react'
import { Link } from 'react-router-dom'
const Products = ({data}) => {
  const myStyle={
    borderRadius: '120px 120px 80px 80px'
  }
  return (
    <div className='bg-primary w-full'>
      <div className='opacity-40 text-5xl pt-20 mb-16 '>Our Catalog</div>
      <div className='flex justify-between p-24 flex-wrap gap-x-20 gap-y-24 '>
        {
        data.map((flr)=>(
          <div key={flr.id}>
            <div style={myStyle} className="h-96 w-60 border overflow-hidden">
              <img className='h-2/3 w-full' src={flr.default_image?.small_url} alt={flr['scientific_name']} />
              <div className='bg-third h-1/6 font-second text-primaryT text-xl px-6 flex flex-col items-start justify-center'>
                <p>{flr['common_name']}</p>
                <p>&#x20B9; 2340</p>
              </div>
              <Link to='/vision'>
                <button className='h-1/6'>
                  <div className='h-full text-xl text-secondary font-second flex items-center justify-center'>Add to cart</div>
                </button>
              </Link>
            </div>
          </div>
        ))

      }
      </div>
    </div>
  )
}

export default Products