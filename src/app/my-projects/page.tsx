"use client"

import ProjectCard from '@/components/ProjectCard'
import { Projects } from '@/constants'
import React from 'react'

const Page = () => {
  return (
    <div
      style={{ backgroundImage: "url(/mountains.jpg)" }}
      className="w-screen min-h-screen bg-center bg-cover bg-fixed pt-20 pb-12"
    >
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-blue-500 text-4xl font-bold text-center mb-10 drop-shadow-lg">
          My Projects
        </h1>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 place-items-center">
          {Projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              text={project.text}
              image={project.src}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Page

