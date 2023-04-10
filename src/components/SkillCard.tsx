import React from 'react'
import { motion } from 'framer-motion'
type Props = {
    Image: string,
    directionLeft? : boolean,
    profieciency? : number
}

const SkillCard = (props: Props) => {
  return (
    <div className='group relative flex cursor-pointer rounded-full'>
        <motion.img initial={{
          x: props.directionLeft ? -200 : 200,
          opacity: 0,
        }}
        transition={{
          duration: 1,
        }}
        className='rounded-full border w-14 h-14 object-cover  md:w-20 md:h-20 lg:object-fill lg:w-32 lg:h-5 xl:h-32 filter transition group-hover:grayscale duration-300 ease-in-out'
        whileInView={{opacity: 1, x:0}}
        src={props.Image}
        alt=''
        />
        <div className='absolute opacity-0 group-hover:opacity-80 border rounded-full transition duration-300
        ease-in-out group-hover:bg-white w-14 h-14 lg:h-24 lg:w-24 md:w-20 md:h-20 xl:w-32 xl:h-32'>
          <div className='flex items-center justify-center h-full'>
            <p className='lg:text-3xl md:text-2xl text-xl font-bold text-purple-950 opacity-100'>{props.profieciency}%</p>
          </div>
        </div>
    </div>
  )
}

export default SkillCard