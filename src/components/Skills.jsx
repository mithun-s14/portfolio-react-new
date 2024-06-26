import React from 'react'

import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import Python from '../assets/python.png';
import ReactIcon from '../assets/react.png';
import Tailwind from '../assets/tailwind.png';
import Java from '../assets/java.png';
import JavaScript from '../assets/javascript.png'
import GitHub from '../assets/github.png'

const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#0a192f] text-white'>
    {/** Skills Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div>
            <p className='text-4xl font-bold inline border-b-4 border-[#38A5FF]'>Skills</p>
            <p className='py-4 text-gray-300'>Here are some of the many languages and libraries that I've worked with</p>
        </div>

        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={HTML} alt="HTML icon"/>
                <p className='my-4'>HTML</p>
            </div>

            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={CSS} alt="CSS icon"/>
                <p className='my-4'>CSS</p>
            </div>

            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={JavaScript} alt="JavaScript icon"/>
                <p className='my-4'>JavaScript</p>
            </div>

            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={ReactIcon} alt="React icon"/>
                <p className='my-4'>React</p>
            </div>

            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={Java} alt="Java icon"/>
                <p className='my-4'>Java</p>
            </div>

            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={Tailwind} alt="Tailwind icon"/>
                <p className='my-4'>Tailwind</p>
            </div>
            
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={Python} alt="Python icon"/>
                <p className='my-4'>Python</p>
            </div>

            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={GitHub} alt="GitHub icon"/>
                <p className='my-4'>GitHub</p>
            </div>

        </div>
      </div>
    </div>
  )
}

export default Skills
