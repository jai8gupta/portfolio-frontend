import React from 'react'
import { motion } from 'framer-motion'
type Props = {}

const BackgroundCircles = (props: Props) => {
  return (
    <motion.div initial={{
      opacity: 0
    }} animate={{
      scale: [1,2,2,3,1],
      opacity: [0.1,0.2,0.4, 0.8, 0.1,1.0],
      borderRadius: ['20%','20%','50%','80%','20%']
    }}
    transition={{
      duration: 2.5
    }}
    className='relative mt-52 flex justify-center items-center'>
      <div className=' absolute mt-52 border border-white h-[200px] w-[200px] rounded-full animate-pulse opacity-10' />
      {/* <div className=' absolute mt-52 border border-[#050A30] h-[300px] w-[300px] rounded-full opacity-20 ' /> */}
      <div className=' absolute mt-52 border border-white h-[500px] w-[500px] rounded-full animate-pulse opacity-5'/>
      {/* <div className=' absolute mt-52 border border-[#7EC8E3] opacity-20 h-[650px] w-[650px] rounded-full animate-pulse ' /> */}
      <div className=' absolute mt-52 border border-white h-[800px] w-[800px] rounded-full opacity-10 animate-pulse' />
    </motion.div>
  )
}

export default BackgroundCircles