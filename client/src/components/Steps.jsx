import React from 'react'
import { assets } from '../assets/assets'

const Steps = () => {
  return (
    <div className="px-4 sm:px-8 md:px-16 lg:px-32 xl:px-44 py-14 sm:py-20 xl:py-28">
      <h1
        className="text-center font-semibold 
                   text-xl sm:text-3xl lg:text-4xl 
                   leading-snug sm:leading-tight
                   bg-gradient-to-r from-gray-600 to-gray-900 
                   bg-clip-text text-transparent"
      >
        Steps to remove background
        <br className="hidden sm:block" />
        image in seconds
      </h1>

      <div
        className="mt-10 sm:mt-14 xl:mt-20
                   grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 
                   gap-5 lg:gap-7"
      >
        <div
          className="flex gap-4 p-5 sm:p-6 bg-white 
                     border border-gray-200 rounded-2xl 
                     shadow-sm hover:shadow-lg 
                     transition-all duration-300 
                     hover:-translate-y-1"
        >
          <img src={assets.upload_icon} alt="Upload" className="w-9 h-9 sm:w-10 sm:h-10" />
          <div>
            <p className="font-semibold text-base sm:text-lg text-gray-800">
              Upload image
            </p>
            <p className="text-sm sm:text-[15px] text-gray-600 mt-1">
              Upload an image to remove the background instantly and create clean,
              transparent visuals for design and marketing.
            </p>
          </div>
        </div>

        <div
          className="flex gap-4 p-5 sm:p-6 bg-white 
                     border border-gray-200 rounded-2xl 
                     shadow-sm hover:shadow-lg 
                     transition-all duration-300 
                     hover:-translate-y-1"
        >
          <img src={assets.remove_bg_icon} alt="Remove background" className="w-9 h-9 sm:w-10 sm:h-10" />
          <div>
            <p className="font-semibold text-base sm:text-lg text-gray-800">
              Remove background
            </p>
            <p className="text-sm sm:text-[15px] text-gray-600 mt-1">
              Automatically remove the background with one click and get a clean,
              transparent image in seconds.
            </p>
          </div>
        </div>

        <div
          className="flex gap-4 p-5 sm:p-6 bg-white 
                     border border-gray-200 rounded-2xl 
                     shadow-sm hover:shadow-lg 
                     transition-all duration-300 
                     hover:-translate-y-1"
        >
          <img src={assets.download_icon} alt="Download" className="w-9 h-9 sm:w-10 sm:h-10" />
          <div>
            <p className="font-semibold text-base sm:text-lg text-gray-800">
              Download image
            </p>
            <p className="text-sm sm:text-[15px] text-gray-600 mt-1">
              Download your final image with a transparent background in high
              quality, ready for design, marketing, or social media.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Steps
