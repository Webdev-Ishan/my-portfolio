"use client";

import ProjectCard from "@/components/ProjectCard";
import { Projects } from "@/constants";
import Image from "next/image";
import React from "react";

const Page = () => {
  return (
    <div
      style={{ backgroundImage: "url(/mountains.jpg)" }}
      className="w-screen min-h-screen bg-center bg-cover bg-fixed"
    >
      <div className="max-w-7xl mx-auto px-4  sm:px-6 lg:px-8 pt-16 sm:pt-20 pb-10 sm:pb-12">
        {/* Intro Section */}
        <section className="mb-16 sm:mb-16 mt-12 text-center max-w-3xl mx-auto">
          <h2 className="text-blue-400 text-3xl sm:text-4xl font-bold mb-4 drop-shadow-lg">
            Creative Solutions, Real Impact
          </h2>
          <p className="text-gray-200 text-base sm:text-lg leading-relaxed">
            I design and build projects that blend stunning visuals with
            performance and usability. Here’s a look at some of my work — each
            one crafted with modern technologies and a passion for delivering
            results.
          </p>
        </section>

        {/* Projects Grid */}
        <h1 className="text-blue-500 text-2xl sm:text-4xl font-bold text-center mb-6 mt-16 sm:mb-8 drop-shadow-lg">
          My Projects
        </h1>
        <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center">
          {Projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              text={project.text}
              image={project.src}
            />
          ))}
        </div>

        {/* Highlight Section */}
        <section className="mt-16 sm:mt-20 bg-black bg-opacity-80 rounded-xl shadow-lg p-8 flex flex-col md:flex-row items-center gap-8">
          <Image
            src="/mindvault.png"
            alt="Highlighted Project"
            width={500}
            height={300}
            className="rounded-lg object-cover w-full md:w-1/2"
          />
          <div className="flex flex-col gap-4 text-center md:text-left">
            <h3 className="text-2xl font-bold text-blue-400">
              Highlighted Project
            </h3>
            <p className="text-gray-300">
              One of my favorite builds to date — fast, scalable, and visually
              captivating. Built with Next.js, Tailwind, and motion animations
              for a smooth and engaging user experience.
            </p>
            <a
              href="https://www.brainstormideas.xyz/"
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition duration-300 self-center md:self-start"
            >
              View Details
            </a>
          </div>
        </section>

        {/* Call to Action */}
        <section className="mt-16 sm:mt-20 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Let’s Build Something Together
          </h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Have an idea or a project in mind? I’m always open to discussing new
            opportunities, creative collaborations, and bringing concepts to
            life.
          </p>
          <a
            href="/contact-me"
            className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold transition duration-300"
          >
            Get in Touch
          </a>
        </section>
      </div>
    </div>
  );
};

export default Page;
