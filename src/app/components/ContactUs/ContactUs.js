"use client";
import React, { useState } from "react";
import Image from "next/image";

const Contactus = () => {
  const [subject, setSubject] = useState("Business");

  return (
    <div className="w-full mx-auto p-6 lg:px-32 md:px-14 pt-7 font-poppins bg-gray h-auto md:h-[1024px]">
      <div className="mx-auto">
        <h1 className="font-bold text-3xl text-black md:text-4xl text-center">Contact Us</h1>
        <p className="text-base md:text-lg font-medium text-darkgray text-center mt-2.5">
          Want to get in touch
        </p>

        <div className="bg-white mt-8 md:mt-12 rounded-3xl flex flex-col-reverse md:flex-row h-auto md:h-[667px]">
          {/* Image container with images and text */}
          <div className="relative mx-auto md:mx-2 flex items-center justify-center md:h-[647px] rounded-3xl sm:w-full  md:w-2/5 lg:w-2/5">
            <Image
              src="/Rectangle 3841.svg"
              className="w-96 h-full md:w-full sm:w-full sm:mx-8 md:mx-0 sm:h-[587px]  object-cover rounded-3xl"
              alt="Contact Us"
            />

            {/* Ellipse Images */}
            <Image
              src="/Ellipse mid.svg"
              className="absolute right-0 sm:mx-8 md:mx-0 bottom-0 md:bottom-8 rounded-br-3xl"
              alt="Ellipse Mid"
            />
            <Image
              src="/Ellipse small.svg"
              className="absolute right-12 sm:mx-8 md:mx-0 bottom-12 md:right-24 md:bottom-24"
              alt="Ellipse Small"
            />

            {/* Text Overlay */}
            <div className="absolute pl-4 py-4 lg:pl-10 md:pl-5 md:py-10 text-white text-sm md:text-base">
              <h2 className="text-2xl md:text-3xl font-bold">Contact Information</h2>
              <p className="mt-1.5 text-gray">Say something to start a live chat!</p>
              <div className="mt-16 md:mt-32 space-y-4 md:space-y-10">
                <div className="flex items-center">
                  <Image src="/phone.svg" className="h-4 w-4 md:h-[18px] md:w-[18px]" />
                  <p className="pl-4 text-white md:pl-6">+1012 3456 789</p>
                </div>
                <div className="flex items-center">
                  <Image src="/message.svg" className="h-4 w-4 md:h-[18px] md:w-[18px]" />
                  <p className="pl-4 text-white md:pl-6">demo@gmail.com</p>
                </div>
                <div className="flex items-center">
                  <Image src="/map.svg" className="h-4 w-4 md:h-[18px] md:w-[18px]" />
                  <p className="pl-4 text-white md:pl-6 pr-4 md:pr-12">
                    132 Dartmouth Street Boston, Massachusetts 02156 United States
                  </p>
                </div>
              </div>
              <div className="mt-16 md:mt-32 flex gap-4 md:gap-6">
                <Image src="/twitter.svg" className="h-6 w-6 md:h-[30px] md:w-[30px]" />
                <Image src="/insta.svg" className="h-6 w-6 md:h-[30px] md:w-[30px]" />
                <Image src="/discord.svg" className="h-6 w-6 md:h-[30px] md:w-[30px]" />
              </div>
            </div>
          </div>

          <div className="mx-4 md:mx-12 my-8 md:my-16 flex-grow">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {/* First Name */}
              <div className="flex flex-col">
                <label htmlFor="firstName" className="text-gray-700 font-medium mb-1">First Name</label>
                <input
                  id="firstName"
                  type="text"
                  placeholder="Deva"
                  className="border-b w-full md:w-[215px] border-gray p-2 focus:outline-none focus:border-black placeholder-gray-500"
                />
              </div>

              {/* Last Name */}
              <div className="flex flex-col">
                <label htmlFor="lastName" className="text-gray-700 font-medium mb-1">Last Name</label>
                <input
                  id="lastName"
                  type="text"
                  placeholder="Doe"
                  className="border-b w-full md:w-[215px] border-gray p-2 focus:outline-none focus:border-black placeholder-gray-500"
                />
              </div>

              {/* Email */}
              <div className="flex flex-col">
                <label htmlFor="email" className="text-gray-700 font-medium mb-1">Email</label>
                <input
                  id="email"
                  type="email"
                  placeholder="Deva3286@gmail.com"
                  className="border-b w-full md:w-[215px] border-gray p-2 focus:outline-none focus:border-black placeholder-gray-500"
                />
              </div>

              {/* Phone Number */}
              <div className="flex flex-col">
                <label htmlFor="phone" className="text-gray-700 font-medium mb-1">Phone Number</label>
                <input
                  id="phone"
                  type="tel"
                  placeholder="+91 012 3456 789"
                  className="border-b w-full md:w-[215px] border-gray p-2 focus:outline-none focus:border-black placeholder-gray-500"
                />
              </div>
            </div>

            {/* Subject Selection */}
            <div className="mt-6">
              <label className="text-gray-700 font-medium mb-1 block">Select Subject?</label>
              <div className="flex ag:flex-col af:flex-row ag:items-start af:items-center  af:space-x-4 md:space-x-6">
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    value="Business"
                    checked={subject === "Business"}
                    onChange={() => setSubject("Business")}
                    className="form-radio text-black"
                  />
                  <span>Business</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    value="Account"
                    checked={subject === "Account"}
                    onChange={() => setSubject("Account")}
                    className="form-radio text-black"
                  />
                  <span>Account</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    value="Other"
                    checked={subject === "Other"}
                    onChange={() => setSubject("Other")}
                    className="form-radio text-black"
                  />
                  <span>Other</span>
                </label>
              </div>
            </div>

            {/* Message */}
            <div className="mt-6">
              <label htmlFor="message" className="text-gray-700 font-medium mb-1 block">Message</label>
              <textarea
                id="message"
                placeholder="Write your message..."
                className="border-b border-gray-300 w-full p-2 focus:outline-none focus:border-black placeholder-gray-500"
              />
            </div>
            <div className="flex flex-row-reverse mt-8">
              <button className="px-11 py-3 bg-orange text-white font-semibold rounded-3xl hover:bg-blue-600">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactus;