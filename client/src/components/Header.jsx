import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
  return (
    <div className="flex items-center justify-between max-sm:flex-col-reverse gap-y-10 px-4 mt-10 lg:px-44 sm:mt-20">
      
      {/* Left side */}
      <div>
        <h1 className="text-4xl xl:text-5xl 2xl:text-6xl font-bold text-neutral-700 leading-tight">
          Remove the <br className='max-md:hidden' />
          <span className="bg-gradient-to-r from-violet-600 to-fuchsia-500 bg-clip-text text-transparent">
            background
          </span>{' '}
          from <br className='max-md:hidden' />
          images for free.
        </h1>

        <p className="text-sm text-gray-600 mt-4">
          Remove image backgrounds for free in seconds with a fast, <br className='max-sm:hidden' />
          simple tool that delivers clean, professional results instantly.
        </p>

        <div className="mt-6">
          <input
            type="file"
            id="uploadone"
            hidden
            accept="image/*"
          />

          <label
            htmlFor="uploadone"
            className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-500 m-auto text-white cursor-pointer hover:scale-105 transition-transform duration-700"
          >
            <img width={20}
              src={assets.upload_btn_icon}
              alt="Upload icon"
              
            />
            <p className='text-white text-sm'>Upload your image</p>
          </label>
        </div>
      </div>
      {/* Right side */}
      <div className="w-full max-w-md">
        <img
          src={assets.header_img}
          alt="Header image"
        
        />
      </div>
    </div>
  )
}

export default Header
