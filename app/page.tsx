import React from 'react'
import "../styles/globals.css"
import HomePageContent from './(client)/HomePageContent'
import ProjectPageContent from './(client)/ProjectPageContent'
import Header from './Header'
function page() {
  return (
    <div className='flex flex-col bg-black h-screen'>
      <Header/>
      <HomePageContent />
      <ProjectPageContent />
    </div>
  )
}

export default page