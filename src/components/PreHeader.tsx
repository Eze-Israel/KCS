import React from 'react'
import { FaEnvelope, FaPhone } from 'react-icons/fa6'
import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa6';

const PreHeader = () => {


  return (
    <div className=' bg-blue-300 flex p-2 preheader'>
        <div className='gap-2 md:flex md:px-4'> 24/26 Ifite Ukpo Street, Ago Palace Way, Okota, Isolo, Lagos, Nigeria
            <b className='font-bold'>|</b>
             <FaEnvelope className='md:mt-1'/>Registrar@KingChuksSchools.com <b className='font-bold'>|</b>
        <p className="phone p-1"><FaPhone className="phone"/> {" "}{" "}(+234)07061033459</p>
        </div>
        
        <div className='gap-2 flex px-4'>
            <div className='flex  gap-8 md:text-2xl'>
            <a href="#"><div><FaFacebook /> </div></a>
            <a href="#"><div><FaTwitter/></div></a>
            <a href="#"><div><FaInstagram/></div></a>
            </div>

        </div>
        
        </div>
  )
}

export default PreHeader