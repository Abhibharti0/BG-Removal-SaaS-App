import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className="flex items-center justify-between gap-4 px-4 lg:px-44 py-4 border-t border-gray-200">
      <img width={140} src={assets.logo} alt="bgremover logo" />

      <p className="flex-1 border-l border-gray-300 pl-4 text-gray-500 text-sm max-sm:hidden">
        © 2025 bgremover. All rights reserved.
      </p>

      <div className="flex gap-2">
        <img width={28} src={assets.facebook_icon} alt="Facebook" />
        <img width={28} src={assets.twitter_icon} alt="Twitter" />
        <img width={28} src={assets.google_plus_icon} alt="Google Plus" />
      </div>
    </div>
  )
}

export default Footer
