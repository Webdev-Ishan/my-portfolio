"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { SkillData } from "@/constants";
import Image from "next/image";
import { Autoplay } from "swiper/modules";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();
  return (
    <div className="w-screen bg-black text-white overflow-x-hidden">
      {/* HERO / INTRO SECTION */}
      <section
        style={{ backgroundImage: "url(/bg-2.jpg)" }}
        className="h-80 pt-12 pb-12 w-full flex flex-col items-center justify-center bg-cover bg-center px-4 text-center"
      >
        <h1 className="font-semibold text-blue-500 text-3xl sm:text-5xl mb-4">
          Skills{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
            & Technologies
          </span>
        </h1>
        <p className="text-gray-200 text-base sm:text-lg max-w-[700px]">
          I build modern, high-performance web applications using the latest
          technologies this world has to offer.
        </p>
      </section>

      {/* SKILLS CAROUSEL */}
      <section className="flex flex-col items-center gap-10 py-16 max-w-[90%] mx-auto">
        <Swiper
          slidesPerView={2}
          breakpoints={{
            640: { slidesPerView: 3 },
            1024: { slidesPerView: 5 },
          }}
          loop
          autoplay={{ delay: 0, disableOnInteraction: false }}
          speed={5000}
          modules={[Autoplay]}
          className="w-full"
        >
          {SkillData.map((skill, index) => (
            <SwiperSlide
              key={index}
              className="flex flex-col items-center gap-2 py-4 min-h-[120px]"
            >
              <Image
                src={skill.Image}
                alt={skill.name}
                width={skill.width}
                height={skill.height}
                className="w-[40px] sm:w-[60px] md:w-[80px] h-auto object-contain"
              />
              <span className="text-xs sm:text-sm md:text-base text-center">
                {skill.name}
              </span>
            </SwiperSlide>
          ))}
        </Swiper>

        <Swiper
          slidesPerView={2}
          breakpoints={{
            640: { slidesPerView: 3 },
            1024: { slidesPerView: 5 },
          }}
          loop
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            reverseDirection: true,
          }}
          speed={5000}
          modules={[Autoplay]}
          className="w-full"
        >
          {SkillData.map((skill, index) => (
            <SwiperSlide
              key={index}
              className="flex flex-col items-center gap-2 py-4 min-h-[120px]"
            >
              <Image
                src={skill.Image}
                alt={skill.name}
                width={skill.width}
                height={skill.height}
                className="w-[40px] sm:w-[60px] md:w-[80px] h-auto object-contain"
              />
              <span className="text-xs sm:text-sm md:text-base text-center">
                {skill.name}
              </span>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* ABOUT SECTION */}
      <section className="bg-gray-900 py-16 px-6 text-center">
        <h2 className="text-2xl sm:text-4xl font-semibold mb-12">
          Why Work With Me?
        </h2>
        <p className="text-gray-300 max-w-[800px] mx-auto leading-relaxed text-base mb-12 sm:text-lg">
          I am passionate about creating scalable, high-performance applications
          that blend sleek design with efficient functionality. From
          pixel-perfect UI to secure back-end logic, I ensure every detail
          counts.
        </p>
      </section>

      {/* CALL TO ACTION */}
      <section className="bg-gradient-to-r from-purple-600 to-red-500 py-16 px-6 text-center">
        <h2 className="text-2xl sm:text-4xl font-semibold mb-4 text-white">
          Let’s Build Something Amazing
        </h2>
        <p className="text-white mb-6 text-sm sm:text-base">
          Have a project in mind? Let’s turn your vision into a reality.
        </p>
        <a
          href=""
          onClick={() => router.push("/contact-me")}
          className="bg-white text-purple-700 px-6 py-3 mb-12 rounded-full font-semibold text-sm sm:text-base hover:scale-105 transition-transform inline-block"
        >
          Contact Me
        </a>
      </section>
    </div>
  );
};

export default Page;
