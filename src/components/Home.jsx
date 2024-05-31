import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'

const Home = () => {
  return (
    <div name='home' className='mb-20 w-full h-screen bg-[#0a192f]'>
        
        {/* Container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-[#38A5FF]'>Hi, my name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6] py-1'>Mithun Sivapathasundram</h1>
            <h2 className='text-2xl sm:text-5xl font-bold text-[#8892b0] py-1'>3rd year CS Student.</h2>
            <p className='text-gray-500 pt-2 pb-4max-w-[700px]'>
            🔍 Currently seeking Fall 2024 internships
            </p>
            <div>
                <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#38A5FF] hover:border-[#38A5FF]'>View Work 
                <span className='group-hover:rotate-90 duration-300'>
                    <HiArrowNarrowRight className='ml-3'/>
                </span>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Home
