import React from 'react'
import { testimonialsData } from '../assets/assets'

const Testimonials = () => {
  return (
    <div className="py-10 sm:py-14">
      <h1
        className="text-center font-semibold 
                   text-xl sm:text-3xl lg:text-4xl 
                   leading-snug sm:leading-tight
                   bg-gradient-to-r from-gray-900 to-gray-400
                   bg-clip-text text-transparent"
      >
        Customer Testimonials
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 
                      max-w-5xl mx-auto px-4 py-8">
        {testimonialsData.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-5 sm:p-6
                       shadow-sm hover:scale-105
                       transition-all duration-700"
          >
            <p className="text-3xl text-gray-400 leading-none">“</p>

            <p className="text-sm text-gray-600 mt-2 leading-relaxed">
              {item.text}
            </p>

            <div className="flex items-center gap-3 mt-4">
              <img
                className="w-9 h-9 rounded-full object-cover"
                src={item.image}
                alt=""
              />
              <div>
                <p className="text-sm font-medium text-gray-800">
                  {item.author}
                </p>
                <p className="text-xs text-gray-500">
                  {item.jobTitle}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Testimonials
