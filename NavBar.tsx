import React from 'react'
import { motion } from 'framer-motion'


type Props = {}
const NavBar = (props:Props) => {
  return (
    <div className='sticky top-10 lg:top-10 z-20'>
    <motion.div
    initial={{
      x: -500,
      opacity: 0,
      scale: 0.5
    }}
    animate={{
      x: 0,
      opacity: 1,
      scale: 1
    }}
    transition={{
      duration: 1.5
    }}
    className='flex flex-1 space-x-4 lg:space-x-10 ml-auto mr-auto border shadow-[10px_35px_60px_10px_rgba(255,255,255,0.3)] rounded-full border-white pl-7 pt-1 h-10 w-[25rem] lg:w-[37rem] lg:pl-12 lg:h-16 lg:pt-4 z-50'>
        <a href="#hero"><span className='text-white font-bold text-xl'>Home</span></a>
        <a href="#projects"><span className='text-white font-bold text-xl'>Projects</span></a>
        <a href="#skills"><span className='text-white font-bold text-xl'>Skills</span></a>
        <a href="http://localhost:3000/"><span className='text-yellow-400 font-bold text-xl'>OneTap</span></a>
        <>
        <a href="#contactMe">
          <span className='text-white hidden lg:block font-bold text-xl'>Let's Chat</span>
          <span className='text-white block lg:hidden font-bold mr-4 text-xl'>Chat</span>
        </a>
        
      </>
    </motion.div>
    </div>
  )
}

export default NavBar