import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='flex items-center justify-between w-full max-w-[640px]'>
        <span>Made with ❤️ and ☕️</span>

        <div className="flex gap-3 ">
          <img src={assets.logo_x} alt="logo-x" className='cursor-pointer'/>
          <img src={assets.logo_github} alt="logo-github" className='cursor-pointer'/>
          <img src={assets.logo_linkedin} alt="logo-linkedin" className='cursor-pointer'/>
          <img src={assets.logo_frontend_mentor} alt="logo-frontend-mentor" className='cursor-pointer'/>          
        </div>
    </div>
  )
}

export default Footer