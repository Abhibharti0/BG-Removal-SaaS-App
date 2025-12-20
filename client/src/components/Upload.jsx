import React from 'react'
import { assets } from '../assets/assets'

const Upload = () => {
  return (
    <div className='pb-16'>
      <h1  className="text-center font-semibold 
                   text-xl sm:text-3xl lg:text-4xl 
                   leading-snug sm:leading-tight
                   bg-gradient-to-r from-gray-900 to-gray-400
                   bg-clip-text text-transparen py-6 md:py-16">See the magic. Try now</h1>
                   <div className="text-center mb-24">
                             <input
                               type="file"
                               id="uploadtwo"
                               hidden
                               accept="image/*"
                             />
                   
                             <label
                               htmlFor="uploadtwo"
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
  )
}

export default Upload
