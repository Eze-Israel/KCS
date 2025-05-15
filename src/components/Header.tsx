import React from 'react'
import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import Link from 'next/link'


const Header:  React.FC = () => {
  const [mobile, setMobile] = useState(true)


  const handleMobileChange = () => {
    setMobile(!mobile)
    
  }
  
  const handlelogo = () => {
    setMobile(mobile)
    
  }

  
  return (
    <div className='header'>
      <div>
      <Link href="/" className="logo" onClick={handlelogo} > 
      <img
      src="/images/logo.jpg"
      alt='Kcs-Logo'
      className='rounded-full h-[60] w-[60] md:h-[100] md:w-[100]'
      />
      <b className='text-pink-500'>King</b> Chuks Group of <b className='text-blue-500'>Schools</b></Link>
      </div>
      <div className="mobile-icon" onClick={handleMobileChange}>
        {mobile ? <FaBars /> : <FaTimes />}
      </div>
      
      
            <div>
            <ul className={`${mobile ? 'nav-menu' : 'nav-menu show'}`}>
            <Link href="/" onClick={handleMobileChange}> <li className='list-items bg-pink-200 rounded p-1'>Home</li></Link> 
            <Link href="about" onClick={handleMobileChange}> <li className='list-items bg-pink-200 rounded p-1'>About</li></Link> 
            <Link href="#FAQs" onClick={handleMobileChange}>  <li className='list-items bg-pink-200 rounded p-1'>FAQs</li></Link> 
            <Link href="#News" onClick={handleMobileChange}> <li className='list-items bg-pink-200 rounded p-1'>News</li></Link> 
            <Link href="#CBT" onClick={handleMobileChange}> <li className='list-items bg-pink-200 rounded p-1'>CBT TEST</li></Link> 
            <Link href="#Result" onClick={handleMobileChange}> <li className='list-items bg-pink-200 rounded p-1'>Result Checker</li></Link> 
            <Link href="contact" onClick={handleMobileChange}> 
            <li className='list-items bg-pink-200 rounded p-1'>Contact</li></Link> 
            <Link href="login" onClick={handleMobileChange}> 
            <li className='list-items bg-pink-200 rounded p-1'>Login</li></Link> 
            </ul>
            </div>
      

      
             
    </div>
  )
}

export default Header