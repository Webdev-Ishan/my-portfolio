"use client";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-screen h-screen relative overflow-hidden">
      {/* Background */}
      <div
        className="flex p-4 items-center w-full h-full bg-cover bg-center"
        style={{ backgroundImage: "url(/main-bg.webp)" }}
      >
        {/* Text Section */}
        <div className="px-6 md:pl-40 pb-28 md:pb-20 flex flex-col gap-5 z-[10] max-w-[750px]">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[50px] text-white font-semibold leading-tight">
            Make anything possible with
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
              {" "}
              Web Development
            </span>
          </h1>
          <p className="text-gray-200 hidden md:block text-base md:text-lg">
            I design and develop scalable, high-performance web applications
            that turn your ideas into reality — with clean code, modern UI, and
            a focus on results.
          </p>

          {/* Desktop Buttons */}
          <div className="hidden md:flex flex-wrap gap-5">
            <Link
              href="/my-skills"
              className="rounded-[20px] bg-blue-500 hover:bg-blue-400 px-5 py-3 text-lg text-white transition-colors"
            >
              My Skills
            </Link>
            <Link
              href="/my-projects"
              className="rounded-[20px] relative border border-white px-5 py-3 text-lg text-white hover:bg-white hover:text-black transition-colors"
            >
              My projects
            </Link>
            <Link
              href="/contact-me"
              className="rounded-[20px] border border-white px-5 py-3 text-lg text-white hover:bg-white hover:text-black transition-colors"
            >
              Contact me
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Buttons */}
      <div className="absolute flex bottom-10 z-[20] left-1/2 -translate-x-1/2 flex-col md:hidden gap-3 w-[calc(100%-2.5rem)] max-w-[220px] items-center">
        <Link
          href="/my-skills"
          className="rounded-[20px] bg-blue-500 px-5 py-3 text-lg text-white text-center w-full"
        >
          My Skills
        </Link>
        <Link
          href="/my-projects"
          className="rounded-[20px] bg-blue-500 px-5 py-3 text-lg text-white text-center w-full"
        >
          My projects
        </Link>
        <Link
          href="/contact-me"
          className="rounded-[20px] border border-white px-5 py-3 text-lg text-white text-center w-full"
        >
          Contact me
        </Link>
      </div>

      {/* Foreground Images */}
      <div className="absolute bottom-0 right-0 z-[50] hidden  md:flex flex-col items-center">
        <div className="relative">
          <Image
            src="/cliff.webp"
            alt="cliff"
            width={380}
            height={380}
            className="w-[250px] md:w-[380px] h-auto"
            priority
          />
          <Image
            src="/horse.png"
            alt="horse"
            height={250}
            width={250}
            className="absolute top-0 md:top-32 left-1/2 -translate-x-1/2 w-[150px] md:w-[250px] h-auto"
            priority
          />
        </div>
      </div>

      {/* Trees Layer */}
      <div className="absolute bottom-0 z-[5] w-full h-auto">
        <Image
          src="/trees.webp"
          alt="trees"
          width={2000}
          height={2000}
          className="w-full h-auto"
        />
      </div>

      {/* Stars */}
      <Image
        src="/stars.png"
        alt="stars"
        height={200}
        width={200}
        className="absolute top-0 left-0 z-[10] w-[120px] sm:w-[200px] h-auto"
      />
    </main>
  );
}
