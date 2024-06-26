import React, {useState} from 'react'
import {FaBars, FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import {Link} from 'react-scroll'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
      <div>
      </div>

      {/* Top Right Menu */}
        <ul className='hidden md:flex'>
            <li><Link className='hover:text-[#38A5FF]' activeClass="active" to="home" smooth={true} duration={500}>Home</Link></li>
            <li><Link className='hover:text-[#38A5FF]' activeClass="active" to="about" smooth={true} duration={500}>About</Link></li>
            <li><Link className='hover:text-[#38A5FF]' activeClass="active" to="skills" smooth={true} duration={500}>Skills</Link></li>
            <li><Link className='hover:text-[#38A5FF]' activeClass="active" to="work" smooth={true} duration={500}>Work</Link></li>
            <li><Link className='hover:text-[#38A5FF]' activeClass="active" to="projects" smooth={true} duration={500}>Projects</Link></li>
            <li><Link className='hover:text-[#38A5FF]' activeClass="active" to="contact" smooth={true} duration={500}>Contact</Link></li>
        </ul>

      {/* Hamburger */}
        <div onClick={handleClick} className='md:hidden z-10'>
            {!nav ? <FaBars /> : <FaTimes/>}
        </div>

        {/* Mobile Menu */}
        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
            <li className='hover:text-[#38A5FF] py-6 text-4xl text-white'><Link onClick={handleClick} activeClass="active" to="home" smooth={true} duration={500}>Home</Link></li>
            <li className='hover:text-[#38A5FF] py-6 text-4xl text-white'><Link onClick={handleClick} activeClass="active" to="about" smooth={true} duration={500}>About</Link></li>
            <li className='hover:text-[#38A5FF] py-6 text-4xl text-white'><Link onClick={handleClick} activeClass="active" to="skills" smooth={true} duration={500}>Skills</Link></li>
            <li className='hover:text-[#38A5FF] py-6 text-4xl text-white'><Link onClick={handleClick} activeClass="active" to="work" smooth={true} duration={500}>Work</Link></li>
            <li className='hover:text-[#38A5FF] py-6 text-4xl text-white'><Link onClick={handleClick} activeClass="active" to="projects" smooth={true} duration={500}>Projects</Link></li>
            <li className='hover:text-[#38A5FF] py-6 text-4xl text-white'><Link onClick={handleClick} activeClass="active" to="contact" smooth={true} duration={500}>Contact</Link></li>
        </ul>

        {/* Social Icons */}
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
          <ul>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
              <a className='flex justify-between items-center w-full text-gray-300'
              href='https://www.linkedin.com/in/mithun-sivapathasundram/' target='_blank'>
              LinkedIn <FaLinkedin size={30}/></a>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
              <a className='flex justify-between items-center w-full text-gray-300'
              href='https://github.com/mithun-s14' target='_blank'>
              GitHub <FaGithub size={30}/></a>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
              <a className='flex justify-between items-center w-full text-gray-300'
              href='mailto:msivapathasundram@torontomu.ca' target='_blank'>
              Email <HiOutlineMail size={30}/></a>
            </li>
          </ul>
        </div>
    </div>
  )
}

export default Navbar
