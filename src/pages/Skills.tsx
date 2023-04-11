import React, {useEffect, useState} from 'react'
import SkillCard from '../components/SkillCard'
import {motion} from 'framer-motion';
type Props = {}

type API_SKILL = {
  _id: string,
  language: string,
  logo: string,
  profieciency: number
}

const Skills = (props: Props) => {
  const url = "http://151.106.112.199:3001/skills"
  const [skill, setSkill] = useState<API_SKILL[]>();
  const getData = async() => {
    const response = await fetch(url);
    const data : API_SKILL[] = await response.json();
    setSkill(data);
  }
  useEffect(() => {
    getData()
  })
  


  return (
    <motion.div className='flex flex-col xl:flex-row min-h-screen justify-center xl:space-y-0 snap-y snap-mandatory relative text-center md:text-left md:flex-row max-w-[2000px] lg:top-24 items-center xl:px-10 z-10 mx-auto '>
        <h3 className='absolute top-36 lg:top-40 uppercase tracking-[20px] text-2xl'>Skills</h3>

        <h3 className='lg:top-32 top-48 uppercase tracking-[3px] text-yellow-500 text-sm absolute' >Hover/Click over a skill for current profieciency</h3>
        
        <div className='grid grid-cols-4 grid-rows-5 gap-2 md:grid-cols-4 md:gap-5 mt-4 lg:pt-52'>
            {skill?.map((obj, index)=> (
              <SkillCard key={index} directionLeft={index % 2 === 0 ? true : false} Image={obj.logo} profieciency={obj.profieciency}/>
            ))}
        </div>
    </motion.div>
  )
}

export default Skills