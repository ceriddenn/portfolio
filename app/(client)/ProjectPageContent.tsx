import { ArrowSmallDownIcon } from '@heroicons/react/24/outline'
import React from 'react'
function ProjectPageContent() {
  const firstLayer = [
    {
      title: "StudyIt",
      description: "Studyit is an app you can learn on and study kind of like quizlet",
      dateCreated: "Jan 1 2022"
    },
    {
      title: "MINT LMS",
      description: "Mint LMS is a learning management system that is meant for teachers and designed around their needs and what is more useful to them.",
      dateCreated: "Jan 1 2022"
    },
    {
      title: "Authentication API",
      description: "This api uses express, nodejs, bcrypt, mongodb, and JSON Web Tokens to create a REST API for my apps and user authentications.",
      dateCreated: "Sep 1 2022"
    },
  ]
  const secondLayer = [
    {
      title: "Placeholder 1!",
      description: "This is project 1! very cool I love this project alot. It might be one of my favorites like if im being honest!."
    },
    {
      title: "Placeholder 2!",
      description: "Project 2 is very cool as it uses nextjs 13! Nextjs 13 is very different because it has a new routing system built into the directory. I cant wait to convert all of my projects to nextjs13!"
    },
    {
      title: "Placeholder 3!",
      description: "Project 3 is the worst project out of all of these. It was built with java which is super old and only used for server/backend development. Therefore I will be archiving this project very soon on github."
    },
]
  return (
    <div className='flex flex-col'>
        <div>
          <h1 className='text-white text-6xl font-rokkitt ml-12 pt-20'>Projects</h1>
        </div>
        <div className='flex flex-row  mt-12 mb-6 justify-between space-x-12'>
          {firstLayer.map((layer, i) => { return (   
            <div key={i} className={i == 0 ? "p-6 max-w-sm rounded-lg shadow-md bg-cb ml-12" : "p-6 max-w-sm bg-cb rounded-lg shadow-md" }>
    <a href="#">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{layer.title}</h5>
    </a>
    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{layer.description}</p>
    <a href="#" className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Read more
        <svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
    </a>
</div>
          )})};
        </div>
        <div className='flex flex-row mt-12 mb-6 justify-between space-x-12'>
        {secondLayer.map((layer, i) => { return (   
<div key={i} className={i == 0 ? "p-6 max-w-sm rounded-lg shadow-md bg-cb ml-12" : "p-6 max-w-sm bg-cb rounded-lg shadow-md" }>
    <a href="#">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{layer.title}</h5>
    </a>
    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{layer.description}</p>
    <a href="#" className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Read more
        <svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
    </a>
</div>
          )})};
        </div>
    </div>
  )
}

export default ProjectPageContent