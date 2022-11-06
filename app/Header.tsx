"use client"
import React from 'react'
import {HomeIcon, EnvelopeIcon, DocumentChartBarIcon} from '@heroicons/react/24/outline'
import Link from 'next/link'
import "../styles/globals.css"

function Header() {
  return (
    <nav className="flex items-center justify-between flex-wrap pt-6 sticky top-0">
  <div className="flex items-center flex-no-shrink text-white mr-6">
    <span className="font-semibold text-5xl font-rokkitt ml-12">Finn C</span>
  </div>
  <div className="block lg:hidden">
    <button className="flex items-center px-3 py-2 border rounded text-teal-lighter border-teal-light hover:text-white hover:border-white">
      <svg className="h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
    </button>
  </div>
  <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto justify-end">
    <div className='flex items-center'>
      <Link href='/'>
      <div className="inline-block bg-hcd py-2 px-2 rounded-md mr-9 cursor-pointer hover:scale-110 hover:bg-hc transition duration-125 ease-in-out">
        <HomeIcon className='' width={40} height={40} color="white"/>
      </div>
      </Link>
      <div className="inline-block bg-hcd py-2 px-2 rounded-md mr-9 cursor-pointer hover:scale-110 hover:bg-hc transition duration-125 ease-in-out" onClick={() => window.scrollTo({top: document.body.scrollHeight, behavior: 'smooth'})}>
      <DocumentChartBarIcon className='' width={40} height={40} color="white"/>
      </div>
      <Link href='/contact-me'>
      <div className="inline-block bg-hcd py-2 px-2 rounded-md mr-12 cursor-pointer hover:scale-110 hover:bg-hc transition duration-125 ease-in-out">
      <EnvelopeIcon className='' width={40} height={40} color="white"/>
      </div>
      </Link>
    </div>
  </div>
</nav>
  )
}

export default Header