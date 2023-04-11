import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from '../components/BackgroundCircles'



const Hero = () => {
  const text = useTypewriter({
    words: ['Hi, The Name is Jai !!','Status Code : 200 OK!! ','<LoveToCode/>'],
    loop: true,
    delaySpeed: 2000,
  })[0]


  return (
    <div className='h-screen flex flex-col space-y-8 justify-center items-center'>
    <BackgroundCircles />
      {/* this is the dot line graphic */}
      <div className='flex flex-1 pl-[4rem] md:pl-[16rem] lg:pl-[36rem] pt-11 space-x-5 w-screen '>
        <div>
          <div className='h-5 w-5 rounded-full bg-purple-800'/>
          <div className='w-1 ml-2 h-80 lg:h-40 bg-gradient-to-b from-purple-800 to-purple-300'/>
        </div>
        {/* typewriter effect */}
        <div className='font-bold text-3xl text-white'>
          <span>{text}</span>
          <Cursor cursorColor='#40e0d0'/>
          <br />
        <span className='text-red-300 italic text-sm'>Software and Game Developer</span>
        </div>
        
      </div> 

    
      

    </div>
  )
}

export default Hero