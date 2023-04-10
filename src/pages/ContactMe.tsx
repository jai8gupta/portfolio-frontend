import React from 'react'
import {PhoneIcon, MapPinIcon, EnvelopeIcon} from "@heroicons/react/24/outline"
import {useForm, SubmitHandler} from 'react-hook-form';
type Props = {}

type FormValues = {
    name: string;
    email: string;
    subject: string;
    message: string;
}



const ContactMe = (props: Props) => {
    const { register, handleSubmit} = useForm<FormValues>();
    const onSubmit: SubmitHandler<FormValues> = (FormData) => {
        window.location.href = `mailto:jai8gupta@gmail.com?subject=${FormData.subject}&body=Hi, My Name is ${FormData.name}(email:${FormData.email}). ${FormData.message}.`
    }
    
  return (
    <div className='h-screen snap-y snap-center flex relative flex-col text-center md:text-left md:flex-row max-w-7xl justify-evenly mx-auto items-center snap-mandatory'>
        <h3 className='absolute top-40 uppercase tracking-[20px] text-yellow-400 text-2xl'>Contact</h3>
        <div className='flex flex-col space-y-1 pt-36'>
            <h4 className='text-3xl font-semibold text-center'>I Got You Covered. <span className='decoration-yellow-500 underline'>Lets Talk</span></h4>

            <div className='space-y-1 pt-0'>
                <div className='flex items-center justify-center space-x-5'>
                    <PhoneIcon className='text-orange-500 h-10 w-10 animate-pulse' />
                    <p className='text-2xl'>+91 9810341499</p>
                </div>
                <div className='flex items-center justify-center space-x-5'>
                    {/* <MapPinIcon className='text-orange-500 h-10 w-10 animate-pulse' /> */}
                    {/* <p className='text-2xl'>India</p> */}
                </div>
                <div className='flex items-center justify-center space-x-5'>
                    <EnvelopeIcon className='text-orange-500 h-10 w-10 animate-pulse' />
                    <p className='text-2xl'>jai8gupta@gmail.com</p>
                </div>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-2 w-fit mx-auto' action="">
                <div className='flex space-x-2'>
                    <input {...register("name")} placeholder='Name' className='contactInput' type="text" />
                    <input {...register("email")}  placeholder='Email' className='contactInput' type="text" />
                </div>
                <input {...register("subject")} placeholder='Subject' className='contactInput' type="text" />

                <textarea {...register("message")} placeholder='Message' className='contactInput' />
                <button type='submit' className='bg-orange-400 py-5 px-10 rounded-md text-black font-bold text-lg'>Submit</button>
            </form>

        </div>
    </div>
  )
}

export default ContactMe