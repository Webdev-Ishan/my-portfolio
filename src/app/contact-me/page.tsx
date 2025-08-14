import ContactForm from "@/components/ContactForm";
import React from "react";

const Page = () => {
  return (
    <div
      style={{ backgroundImage: "url(/bg-3.jpg)" }}
      className="w-screen min-h-screen bg-cover bg-center flex items-center justify-center px-4 py-10"
    >
      <div
        style={{ backgroundImage: "url(/atombg-comp.webp)" }}
        className="relative w-full max-w-6xl bg-cover bg-center rounded-xl border border-white shadow-lg overflow-hidden flex flex-col md:flex-row items-center md:items-stretch"
      >
        {/* Left Section - Optional Info */}
        <div className="hidden md:flex flex-col justify-center bg-black/50 p-8 text-white w-1/2">
          <h2 className="text-3xl font-bold text-blue-400 mb-4">
            Get in Touch
          </h2>
          <p className="text-gray-300 mb-6">
            Have a project in mind or just want to say hello? Fill out the form
            and I’ll get back to you as soon as possible.
          </p>
          <ul className="space-y-2">
            <li>
              Email:{" "}
              <span className="text-blue-300">ishansaini0105@gmail.com</span>
            </li>
            <li>
              Location: <span className="text-blue-300">DehraDun, India</span>
            </li>
          </ul>
        </div>

        {/* Right Section - Form */}
        <div className="bg-black/60 p-6 sm:p-8 w-full md:w-1/2 flex items-center justify-center">
          <div className="w-full max-w-md">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
