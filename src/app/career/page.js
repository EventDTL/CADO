"use client";
import Image from "next/image";
import React, { useState } from "react";

const Career = () => {
  const [fileName, setFileName] = useState("Upload Resume");

  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
      setFileName(e.target.files[0].name);
    } else {
      setFileName("Upload Resume");
    }
  };

  return (
    <div className="w-[77.5%] m-[65px_auto_120px] bg-[#0E1021] rounded-[34px] relative pb-[221px] ag:w-[88%] ag:m-[100px_auto_68px] ag:rounded-[20px] ag:pb-[72px] sm:w-[91%] sm:rounded-[40px] mt-20">
      <h1 className="text-white font-[Inter] font-bold text-[45px] pt-[65px] text-center ag:text-[24px] ag:pt-[26px] sm:text-[32px] sm:pt-[37px]">
        Want To Join <span style={{ color: "#FF4400" }}>Team</span>
      </h1>

      <form className="w-[76%] m-[66px_auto_0px] ag:w-[80%] ag:m-[45px_auto_0px] sm:w-[80%]">
        {/* Box 1 */}
        <div className="grid grid-cols-2 gap-[45px] ag:grid-cols-1 sm:grid-cols-1">
          <div className="flex flex-col pb-[11px] border-b border-[#8D8D8D]">
            <label htmlFor="firstname" className="font-[Poppins] font-medium text-[16px] text-white sm:mb-[2px]">
              First Name
            </label>
            <input
              type="text"
              id="firstname"
              placeholder="Name"
              className="w-full bg-inherit text-white placeholder-[#8D8D8D] placeholder:text-[14px] placeholder:font-[Poppins] placeholder:font-medium sm:placeholder:text-[16px] ag:placeholder:text-[12px]"
            />
          </div>
          <div className="flex flex-col pb-[11px] border-b border-[#8D8D8D]">
            <label htmlFor="lastname" className="font-[Poppins] font-medium text-[16px] text-white sm:mb-[2px]">
              Last Name
            </label>
            <input
              type="text"
              id="lastname"
              placeholder="LastName"
              className="w-full bg-inherit text-white placeholder-[#8D8D8D] placeholder:text-[14px] placeholder:font-[Poppins] placeholder:font-medium sm:placeholder:text-[16px] ag:placeholder:text-[12px]"
            />
          </div>
          <div className="flex flex-col pb-[11px] border-b border-[#8D8D8D]">
            <label htmlFor="email" className="font-[Poppins] font-medium text-[16px] text-white sm:mb-[2px]">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="xyz@gmail.com"
              className="w-full bg-inherit text-white placeholder-[#8D8D8D] placeholder:text-[14px] placeholder:font-[Poppins] placeholder:font-medium sm:placeholder:text-[16px] ag:placeholder:text-[12px]"
            />
          </div>
          <div className="flex flex-col pb-[11px] border-b border-[#8D8D8D]">
            <label htmlFor="phonenumber" className="font-[Poppins] font-medium text-[16px] text-white sm:mb-[2px]">
              Phone Number
            </label>
            <input
              type="phone"
              id="phonenumber"
              placeholder="9399******"
              className="w-full bg-inherit text-white placeholder-[#8D8D8D] placeholder:text-[14px] placeholder:font-[Poppins] placeholder:font-medium sm:placeholder:text-[16px] ag:placeholder:text-[12px]"
            />
          </div>
        </div>

        {/* Box 2 */}
        <div className="grid grid-cols-2 gap-[45px] mt-[63px] ag:grid-cols-1 ag:mt-[28px] ag:gap-[28px] sm:grid-cols-1 sm:mt-[45px] sm:gap-[31px]">
          <div className="flex flex-col pb-[11px] border-b border-[#8D8D8D]">
            <label htmlFor="resumeupload" className="font-[Poppins] font-medium text-[16px] text-white sm:mb-[2px]">
              Upload Resume
            </label>
            <div className="flex items-center cursor-pointer">
              <input
                type="file"
                id="resumeupload"
                accept=".pdf,.doc,.docx"
                onChange={handleFileChange}
                className="hidden"
              />
              <label
                htmlFor="resumeupload"
                className="flex items-center w-full text-[14px] cursor-pointer"
              >
                <span className="flex-grow text-[#8D8D8D]">{fileName}</span>
                <Image src="/resumeicon.svg" alt="upload icon" className="w-6 h-6 ml-auto text-[#a0a0a0]" />
              </label>
            </div>
          </div>

          <button
            type="submit"
            className="w-[123px] h-[32px] text-white bg-[#FF4400] rounded-[6px] font-[Poppins] font-medium text-[14px] flex justify-center items-center self-end sm:justify-self-center ag:justify-self-center"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Career;
