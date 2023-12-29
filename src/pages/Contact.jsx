import React from 'react'

export const Contact = ({data}) => {
  const myStyle={
    borderRadius: '120px 120px 80px 80px'
  }
  return (
    <>
    <div className='bg-third w-full h-full flex justify-between items-center p-12'>
      <div className='px-12 text-3xl flex flex-col items-start gap-3 w-1/2'>
        <h2 className='text-5xl text-primary font-prime'>Contact</h2>
        <p className='text-primary font-second'>Address</p>
        <p className='font-second opacity-30 text-left'>Flower Market, Sector 61, Sahibzada Ajit Singh Nagar, Punjab 160062</p>
        <p className='text-primary font-second'>Working Hours</p>
        <p className='font-second opacity-30'>mon-fri | 10:00AM - 8:00PM</p>
        <p className='font-second opacity-30'>sat-sun | 12:00AM - 6:00PM</p>
      </div>
      <div className='rounded-3xl overflow-hidden'> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.5557006010513!2d76.72532487543977!3d30.70277457459866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fee9ca9ff9a63%3A0x5c19d8d2fd3fcb72!2sFlower%20Market!5e0!3m2!1sen!2sin!4v1703853934669!5m2!1sen!2sin" width="600" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>
    </div>
    </>
    
  )
}
