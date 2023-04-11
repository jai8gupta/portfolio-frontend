import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useTypewriter } from 'react-simple-typewriter'
type Props = {}

type API_RETURN = {
  _id: string,
  Heading: string,
  Description: string,
  Image: string,
  
}
const Projects = (props: Props) => {
  const [apiData, setApiData] = useState<API_RETURN[]>();
  const [loading, setLoading] = useState(true);
  const url = "http://151.106.112.199:3001/projects"

  const text = useTypewriter({
    words: ["....","Data Found", "Fetching"],
    loop: true,
    delaySpeed:2000,
  })[0]
  const getData = async() => {
    const response = await fetch(url);
    const data : API_RETURN[] = await response.json();
    setApiData(data);
    setLoading(false);
  }
 
  useEffect(()=> {
    getData();
  })

  return (
    <div>
      {loading ?<div className='h-screen flex flex-col overflow-hidden relative text-center md:text-left md:flex-row max-w-full px-10 z-10 mx-auto justify-evenly items-center'>
        <h3 className='text-4xl md:text-6xl lg:text-9xl text-orange-300 animate-pulse'>Loading <span>{text}</span></h3>
        </div> : 
    <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{ duration: 1.5}} className='h-screen flex flex-col overflow-hidden relative text-center md:text-left md:flex-row max-w-full px-10 z-10 mx-auto justify-evenly items-center'>
        <h3 className='absolute top-32 lg:top-40 uppercase tracking-[20px] text-2xl'>Projects</h3>
        
        <div className='relative w-full flex overflow-x-scroll scrollbar-thin scrollbar-track-yellow-300 scrollbar-thumb-purple-700 overflow-y-hidden snap-x snap-mandatory z-20'>
          {apiData?.map((obj, index)=> (
            <div key={index.toString()} className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'>
              <motion.img
              
              initial={{
                y: -200,
                opacity: 0
              }}
              transition={{
                duration: 1
              }}
              whileInView={{opacity: 1, y: 0}}
              viewport={{ once: false}}
              className='lg:h-[18rem] mt-36' key={index} src={obj.Image} alt=""  />

              <div className='px-0 space-y-5 lg:space-y-10 md:px-10 max-w-6xl'>

                <h4 className='text-xl lg:text-4xl text-center font-semibold '>

                 <span className='underline decoration-yellow-500'> Case {index+1} of {apiData.length} </span> : {obj.Heading}
                </h4>

                <p className='text-sm lg:text-lg text-center md:text-left'>{obj.Description}</p>

              </div>
            </div>
          ))}
        </div>
        <div className='w-full absolute top-[30%] opacity-25 bg-white h-[500px] -skew-y-12' />


    </motion.div>}
    </div>
  )
}

export default Projects