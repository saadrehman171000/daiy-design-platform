'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Shirt, Layout, ImageIcon, Upload, Type, Smile, Square, User, Heart, ShoppingCart } from 'lucide-react'
import { Footer } from '../components/Footer'
import HamburgerMenu from '../components/HamburgerMenu'

export default function Editor() {
  return (
    <div className="bg-[#F5F5F5]">
      <HamburgerMenu />
      <div className="min-h-screen px-4 sm:px-6 md:px-[50px]">
        {/* Menu Bar */}
        <div className="bg-[#F5F5F5] border-b">
          <div className="container mx-auto px-4 bg-[#F5F5F5] overflow-x-auto">
            <div className="flex space-x-4 sm:space-x-6 bg-opacity-100 py-2">
              {['File', 'Designs', 'Print', 'Share', 'Help'].map((item) => (
                <button
                  key={item}
                  className="px-2 sm:px-3 py-2 text-gray-600 hover:text-gray-900 font-bold text-sm sm:text-base whitespace-nowrap"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Tools Bar */}
        <div className="flex rounded-2xl bg-white opacity-100 mt-4 overflow-x-auto">
          <div className="flex flex-row items-center space-x-2 sm:space-x-4 py-2 sm:py-4 px-2 sm:px-4">
            {[
              { icon: <Shirt className="w-4 h-4 sm:w-6 sm:h-6 text-gray-500" />, label: 'Products' },
              { icon: <Image src="https://i.ibb.co/mDtJTWD/Templates-icon.png" alt="Template" width={24} height={24} className="w-4 h-4 sm:w-6 sm:h-6 text-gray-500" />, label: 'Template' },
              { icon: <ImageIcon className="w-4 h-4 sm:w-6 sm:h-6 text-gray-500" />, label: 'AI image' },
              { icon: <Upload className="w-4 h-4 sm:w-6 sm:h-6 text-gray-500" />, label: 'Upload' },
              { icon: <Type className="w-4 h-4 sm:w-6 sm:h-6 text-gray-500" />, label: 'Text' },
              { icon: <Smile className="w-4 h-4 sm:w-6 sm:h-6 text-gray-500" />, label: 'Cliparts' },
              { icon: <Square className="w-4 h-4 sm:w-6 sm:h-6 text-gray-500" />, label: 'Shapes' },
            ].map(({ icon, label }) => (
              <div key={label} className="flex flex-col items-center">
                <button className="p-1 sm:p-2 hover:bg-gray-100 rounded-lg">
                  {icon}
                </button>
                <span className="text-[10px] sm:text-xs mt-1 text-gray-500">{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Editor Interface */}
        <div className="flex flex-col sm:flex-row bg-[#F5F5F5] mt-4">
          {/* Left Sidebar */}
          <div className="w-full sm:w-24 mb-4 sm:mb-0">
            <div className="flex flex-row sm:flex-col items-start justify-between sm:justify-start sm:space-y-4 px-4 sm:pl-4">
              {[
                { image: 'https://i.ibb.co/r3pVTFx/Product-icon.png', label: 'Products' },
                { image: 'https://i.ibb.co/mDtJTWD/Templates-icon.png', label: 'Template' },
                { image: 'https://i.ibb.co/hHRB4gf/AI-image-icon.png', label: 'AI image' },
                { image: 'https://i.ibb.co/t8mvS5k/Upload-icon.png', label: 'Upload' },
                { image: 'https://i.ibb.co/1ZwgN0y/Text-icon.png', label: 'Text' },
                { image: 'https://i.ibb.co/bBXCv9D/Cliparts-icon.png', label: 'Cliparts' },
                { image: 'https://i.ibb.co/B2wdT54/Shapes-icon.png', label: 'Shapes' },
                { image: 'https://i.ibb.co/Pgybt9x/Layers-icon.png', label: 'Layers' },
              ].map(({ image, label }) => (
                <div key={label} className="group relative">
                  <button className="p-2 sm:p-3 bg-white hover:bg-gray-100 rounded-full shadow-md transition-all duration-200 transform group-hover:scale-110">
                    <Image src={image} alt={label} className="w-5 h-5 sm:w-6 sm:h-6 text-black font-bold"  width={24} height={24}/>
                  </button>
                  <span className="absolute left-full ml-2 top-0 bg-gray-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 hidden sm:block">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Main Canvas */}
          <div className="flex-1 p-4 sm:p-8 flex items-center justify-center bg-[#F5F5F5]">
            <div className="relative w-full max-w-[480px]">
              <Image
                src="https://i.ibb.co/v4m3WTS/ssrco-slim-fit-t-shirt-mens-101010-01c5ca27c6-front-square-product-600x600.jpg"
                width={480}
                height={600}
                alt="T-shirt preview"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

