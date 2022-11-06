"use client"
import React from 'react'
import {ArrowSmallDownIcon} from '@heroicons/react/24/outline'

function HomePageContent() {
  return (
    <div className='flex flex-col'>
        <div className='items-center flex  mx-auto mt-40'>
            <img src="https://i.ibb.co/zSmyY46/react-nobg-removebg-preview.png" className='h-100 w-100'/>
        </div>
        <div className='items-center flex flex-col mx-auto'>
            <h1 className='text-white text-6xl font-rokkitt font-bold'>PortFolio</h1>
            <p className='text-white text-2xl font-rokkitt pt-2'>Hi! I’m a student web developer working with js,ts, nextjs ad react!</p>
            <div className='flex flex-col mt-12 bg-hcd rounded-full py-2 px-2 cursor-pointer hover:scale-110 transition duration-125 ease-in-out' onClick={() => window.scrollTo({top: document.body.scrollHeight, behavior: "smooth"})}>
                <ArrowSmallDownIcon className='' color='white' height={30} width={30}/>
            </div>
        </div>
        
    </div>
  )
}

export default HomePageContent