import React from 'react'
import {assets} from '../All Assets/assets_frontend/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        {/*------- Left Section -------*/}
        <div>
          <img className='mb-5 w-40' src={assets.logo} alt="" />
          <p className='w-full md:w-2/3 text-gray-600 leading-6'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus vel ut quisquam commodi in alias provident sit fugit dolores aliquid. Molestias deleniti mollitia cupiditate. Modi voluptatibus possimus ipsam et excepturi architecto voluptates laboriosam adipisci reiciendis.</p>
        </div>
        {/*------- Middle Section -------*/}
        <div>
          <p className='text-xl font-medium mb-5'>Company</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li>Home</li>
            <li>About</li>
            <li>Contact Us</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        {/*------- Right Section -------*/}
        <div>
          <p className='text-xl font-medium mb-5'>Get In Touch</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li>+20 115-444-8367</li>
            <li>titommd408@gmail.com</li>
          </ul>
        </div>
      </div>
      <div>
        {/*------- Copyright Text -------*/}
        <hr />
        <p className='py-5 text-sm text-center'>Copyright 2024@ Prescripto - All Right Reserved.</p>
      </div>
    </div>
  )
}

export default Footer
