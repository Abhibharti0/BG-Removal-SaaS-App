import React, { useState } from 'react'
import { assets } from '../assets/assets'

const BgSlider = () => {
  const [sliderPosition, setSliderPosition] = useState(50)

  return (
    <div className="px-4 sm:px-10 py-12">
      <h1 className="mb-8 text-center font-semibold
                     text-xl sm:text-3xl lg:text-4xl
                     bg-gradient-to-r from-gray-900
                     bg-clip-text text-transparent">
        Remove Background With High <br className="hidden sm:block" />
        Quality and Accuracy
      </h1>

      <div className="relative w-full max-w-3xl mx-auto overflow-hidden rounded-xl">
        <img
          src={assets.image_w_bg}
          className="w-full"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        />

        <img
          src={assets.image_wo_bg}
          className="absolute top-0 left-0 w-full h-full object-cover"
          style={{ clipPath: `inset(0 0 0 ${sliderPosition}%)` }}
        />

        {/* Divider Line */}
        <div
          className="absolute top-0 bottom-0 w-[2px] bg-white z-20"
          style={{ left: `${sliderPosition}%` }}
        />

        {/* Handle */}
        <div
          className="absolute top-1/2 z-30 w-8 h-8 bg-white rounded-full
                     flex items-center justify-center shadow-md
                     -translate-x-1/2 -translate-y-1/2"
          style={{ left: `${sliderPosition}%` }}
        >
          ⇄
        </div>

        <input
          type="range"
          min="0"
          max="100"
          value={sliderPosition}
          onChange={(e) => setSliderPosition(e.target.value)}
          className="slider absolute top-0 left-0 w-full h-full z-40"
        />
      </div>
    </div>
  )
}

export default BgSlider
